"use client"

import * as React from "react"
import { createPluginRegistration } from "@embedpdf/core"
import { EmbedPDF } from "@embedpdf/core/react"
import type { PdfDocumentObject, PdfEngine } from "@embedpdf/models"

import {
  DocumentManagerPluginPackage,
  useActiveDocument,
  useDocumentManagerCapability,
} from "@embedpdf/plugin-document-manager/react"

import {
  GlobalPointerProvider,
  InteractionManagerPluginPackage,
  PagePointerProvider,
} from "@embedpdf/plugin-interaction-manager/react"

import { RenderLayer, RenderPluginPackage } from "@embedpdf/plugin-render/react"

import {
  ScrollPluginPackage,
  ScrollStrategy,
  useScroll,
  useScrollPlugin,
  type PageLayout,
  type ScrollerLayout,
} from "@embedpdf/plugin-scroll/react"

import {
  SearchLayer,
  SearchPluginPackage,
  useSearch,
} from "@embedpdf/plugin-search/react"

import {
  ThumbImg,
  ThumbnailPluginPackage,
  useThumbnailCapability,
} from "@embedpdf/plugin-thumbnail/react"

import { TilingLayer, TilingPluginPackage } from "@embedpdf/plugin-tiling/react"

import {
  useViewportRef,
  ViewportElementContext,
  ViewportPluginPackage,
} from "@embedpdf/plugin-viewport/react"

import { useZoom, ZoomPluginPackage } from "@embedpdf/plugin-zoom/react"

import {
  Search01Icon,
  Download01Icon,
  SidebarLeftIcon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  MinusSignCircleIcon,
  PlusSignCircleIcon,
  Loading03Icon,
} from "@hugeicons/core-free-icons"

import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import {
  DocumentViewerThumbnailSidebar,
  useElementWidth,
  useInlineThumbnailSidebar,
} from "@/components/extend/document-viewer-sidebar"

import { getPdfSourceUrl, loadSharedPdfEngine } from "@/lib/pdf-thumbnail-utils"

import { cn } from "cn"

// -----------------------------------------------------------------------------
// Types and constants
// -----------------------------------------------------------------------------

export type PDFViewerHandle = {
  scrollToPage: (pageNumber: number, options?: ScrollIntoViewOptions) => void
  getViewportElement: () => HTMLDivElement | null
}

export type PDFViewerProps = {
  src?: string
  className?: string
  fileName?: string
  defaultZoom?: number
  showToolbar?: boolean
  showDownload?: boolean
  pageClassName?: (pageNumber: number) => string | undefined
  onDocumentLoadSuccess?: (numPages: number) => void
  onActivePageChange?: (pageNumber: number) => void
}

const DEFAULT_ZOOM = 1
const MIN_ZOOM = 0.25
const MAX_ZOOM = 3
const ZOOM_STEP = 0.25
const WHEEL_ZOOM_STEP = 0.1

const PAGE_GAP = 24
const MAX_LAYOUT_ATTEMPTS = 60

const THUMBNAIL_WIDTH = 108
const THUMBNAIL_GAP = 12
const THUMBNAIL_PADDING = 8
const THUMBNAIL_LABEL_HEIGHT = 24

const SIDEBAR_WIDTH = "w-40"
const SIDEBAR_CLOSED_WIDTH = "-ml-40"

const SEARCH_DEBOUNCE = 300

// Plugin config is static so the registrations are created once.
const PLUGIN_REGISTRATIONS = [
  createPluginRegistration(DocumentManagerPluginPackage),
  createPluginRegistration(ViewportPluginPackage, { viewportGap: PAGE_GAP }),
  createPluginRegistration(ScrollPluginPackage, {
    defaultPageGap: PAGE_GAP,
    defaultBufferSize: 2,
  }),
  createPluginRegistration(RenderPluginPackage),
  createPluginRegistration(TilingPluginPackage, {
    tileSize: 768,
    overlapPx: 2.5,
    extraRings: 0,
  }),
  createPluginRegistration(InteractionManagerPluginPackage),
  createPluginRegistration(SearchPluginPackage, { showAllResults: true }),
  createPluginRegistration(ThumbnailPluginPackage, {
    width: THUMBNAIL_WIDTH,
    gap: THUMBNAIL_GAP,
    imagePadding: THUMBNAIL_PADDING,
    labelHeight: THUMBNAIL_LABEL_HEIGHT,
    paddingY: 16,
    buffer: 3,
    autoScroll: true,
    scrollBehavior: "auto",
  }),
  createPluginRegistration(ZoomPluginPackage, {
    defaultZoomLevel: DEFAULT_ZOOM,
    minZoom: MIN_ZOOM,
    maxZoom: MAX_ZOOM,
  }),
]

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

function clampZoom(value: number) {
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Math.round(value * 100) / 100))
}

function useSharedPdfEngine() {
  const [engine, setEngine] = React.useState<PdfEngine | null>(null)
  const [error, setError] = React.useState<Error | null>(null)

  React.useEffect(() => {
    let cancelled = false

    loadSharedPdfEngine().then(
      (result) => {
        if (!cancelled) setEngine(result)
      },
      (err: Error) => {
        if (!cancelled) setError(err)
      }
    )

    return () => {
      cancelled = true
    }
  }, [])

  return { engine, error }
}

function getDownloadName(fileName: string | undefined, src: string) {
  const ensurePdf = (name: string) =>
    name.toLowerCase().endsWith(".pdf") ? name : `${name}.pdf`

  if (fileName?.trim()) return ensurePdf(fileName.trim())
  if (/^data:/i.test(src)) return "document.pdf"

  const pathname = src.split(/[?#]/)[0] ?? ""
  const rawName = pathname.split("/").pop() || "document.pdf"

  try {
    return ensurePdf(decodeURIComponent(rawName))
  } catch {
    return ensurePdf(rawName)
  }
}

async function downloadPdf(src: string, fileName: string) {
  try {
    const response = await fetch(src)
    if (!response.ok) {
      throw new Error(`Failed to download PDF: ${response.status}`)
    }

    const url = URL.createObjectURL(await response.blob())
    const anchor = document.createElement("a")
    anchor.href = url
    anchor.download = fileName
    anchor.rel = "noopener"

    document.body.append(anchor)
    anchor.click()
    anchor.remove()

    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
  } catch {
    // Cross-origin hosts without CORS headers block fetch; open them directly.
    window.open(src, "_blank", "noopener")
  }
}

function InlineSpinner({ className }: { className?: string }) {
  return (
    <HugeiconsIcon
      icon={Loading03Icon}
      className={cn("size-4 animate-spin", className)}
      strokeWidth={2}
      aria-label="Loading"
    />
  )
}

// -----------------------------------------------------------------------------
// Scroller
// -----------------------------------------------------------------------------

function PDFScroller({
  documentId,
  renderPage,
}: {
  documentId: string
  renderPage: (page: PageLayout) => React.ReactNode
}) {
  const { plugin } = useScrollPlugin()
  const [layout, setLayout] = React.useState<ScrollerLayout | null>(null)

  React.useEffect(() => {
    if (!plugin) return

    let cancelled = false
    let frame = 0
    let attempts = 0

    const applyLayout = (next: ScrollerLayout) => {
      if (cancelled) return
      setLayout(next)
      plugin.setLayoutReady(documentId)
    }

    // The viewport is measured asynchronously, so the first read can fail.
    // Retry for a bounded number of frames instead of giving up.
    const readLayout = () => {
      if (cancelled) return
      try {
        applyLayout(plugin.getScrollerLayout(documentId))
      } catch {
        if (attempts++ < MAX_LAYOUT_ATTEMPTS) {
          frame = window.requestAnimationFrame(readLayout)
        }
      }
    }

    const unsubscribe = plugin.onScrollerData(documentId, applyLayout)
    frame = window.requestAnimationFrame(readLayout)

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frame)
      unsubscribe()
      plugin.clearLayoutReady(documentId)
      setLayout(null)
    }
  }, [documentId, plugin])

  if (!layout) return null

  const horizontal = layout.strategy === ScrollStrategy.Horizontal

  return (
    <div
      className="relative shrink-0"
      style={{
        width: layout.totalWidth,
        height: layout.totalHeight,
        display: "flex",
        flexDirection: horizontal ? "row" : "column",
        alignItems: "center",
      }}
    >
      <Spacer horizontal={horizontal} size={layout.startSpacing} />

      <div
        className="flex items-center"
        style={{
          gap: layout.pageGap,
          flexDirection: horizontal ? "row" : "column",
        }}
      >
        {layout.items.map((item) => (
          <div
            key={item.pageNumbers[0]}
            className="flex justify-center"
            style={{ gap: layout.pageGap }}
          >
            {item.pageLayouts.map((page) => (
              <div
                key={page.pageNumber}
                className="relative shrink-0"
                style={{ width: page.rotatedWidth, height: page.rotatedHeight }}
              >
                {renderPage(page)}
              </div>
            ))}
          </div>
        ))}
      </div>

      <Spacer horizontal={horizontal} size={layout.endSpacing} />
    </div>
  )
}

function Spacer({ horizontal, size }: { horizontal: boolean; size: number }) {
  return (
    <div
      className="shrink-0"
      style={
        horizontal
          ? { width: size, height: "100%" }
          : { height: size, width: "100%" }
      }
    />
  )
}

// -----------------------------------------------------------------------------
// Page
// -----------------------------------------------------------------------------

function PDFPage({
  documentId,
  page,
  scale,
  className,
}: {
  documentId: string
  page: PageLayout
  scale: number
  className?: string
}) {
  return (
    <PagePointerProvider
      documentId={documentId}
      pageIndex={page.pageIndex}
      rotation={0}
      className={cn("relative size-full bg-white shadow-sm", className)}
    >
      <RenderLayer
        documentId={documentId}
        pageIndex={page.pageIndex}
        scale={Math.min(scale, 1)}
        dpr={1}
        className="pointer-events-none absolute inset-0 size-full"
      />

      <TilingLayer
        documentId={documentId}
        pageIndex={page.pageIndex}
        className="pointer-events-none absolute inset-0 size-full"
      />

      <SearchLayer
        documentId={documentId}
        pageIndex={page.pageIndex}
        className="pointer-events-none"
        highlightColor="rgba(253, 224, 71, 0.45)"
        activeHighlightColor="rgba(249, 115, 22, 0.55)"
      />
    </PagePointerProvider>
  )
}

// -----------------------------------------------------------------------------
// Thumbnails
// -----------------------------------------------------------------------------

function PDFThumbnails({
  documentId,
  document,
  activePage,
  onSelect,
}: {
  documentId: string
  document: PdfDocumentObject
  activePage: number
  onSelect: (pageNumber: number) => void
}) {
  const { provides: thumbnails } = useThumbnailCapability()

  React.useEffect(() => {
    if (activePage < 1 || !thumbnails) return
    thumbnails.forDocument(documentId).scrollToThumb(activePage - 1)
  }, [activePage, documentId, thumbnails])

  const thumbWidth = THUMBNAIL_WIDTH - THUMBNAIL_PADDING * 2

  return (
    <ScrollArea className="h-full w-full">
      <div className="flex flex-col items-center gap-3 px-3 py-4">
        {document.pages.map((page, index) => {
          const pageNumber = index + 1
          const isActive = pageNumber === activePage
          const height = Math.round(
            thumbWidth * (page.size.height / page.size.width)
          )

          const meta = {
            pageIndex: index,
            width: thumbWidth,
            height,
            wrapperHeight:
              height + THUMBNAIL_PADDING * 2 + THUMBNAIL_LABEL_HEIGHT,
            top: 0,
            labelHeight: THUMBNAIL_LABEL_HEIGHT,
            padding: THUMBNAIL_PADDING,
          }

          return (
            <button
              key={pageNumber}
              type="button"
              onClick={() => onSelect(pageNumber)}
              aria-label={`Go to page ${pageNumber}`}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex w-full flex-col items-center gap-1 rounded-md p-2 transition-colors",
                isActive
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground hover:bg-accent/50"
              )}
            >
              <div
                className={cn(
                  "overflow-hidden rounded-sm bg-white shadow-sm ring-1",
                  isActive ? "ring-primary" : "ring-border"
                )}
                style={{
                  width: thumbWidth + THUMBNAIL_PADDING * 2,
                  height: height + THUMBNAIL_PADDING * 2,
                  padding: THUMBNAIL_PADDING,
                }}
              >
                <ThumbImg
                  documentId={documentId}
                  meta={meta}
                  className="block size-full rounded-sm object-contain"
                />
              </div>

              <span className="text-xs tabular-nums">{pageNumber}</span>
            </button>
          )
        })}
      </div>
    </ScrollArea>
  )
}

// -----------------------------------------------------------------------------
// Search
// -----------------------------------------------------------------------------

type ResultRect = { origin: { x: number; y: number } }

function PDFSearch({
  documentId,
  disabled,
}: {
  documentId: string
  disabled: boolean
}) {
  const { state, provides } = useSearch(documentId)
  const { provides: scroll } = useScroll(documentId)

  const [query, setQuery] = React.useState("")
  const [searching, setSearching] = React.useState(false)
  const requestId = React.useRef(0)

  // Refs keep the debounced search from closing over stale providers.
  const searchRef = React.useRef(provides)
  const scrollRef = React.useRef(scroll)

  React.useEffect(() => {
    searchRef.current = provides
    scrollRef.current = scroll
  }, [provides, scroll])

  const jumpTo = React.useCallback((pageIndex: number, rect?: ResultRect) => {
    scrollRef.current?.scrollToPage({
      pageNumber: pageIndex + 1,
      ...(rect
        ? {
            pageCoordinates: { x: rect.origin.x, y: rect.origin.y },
            alignY: 30,
          }
        : {}),
      behavior: "auto",
    })
  }, [])

  React.useEffect(() => {
    const id = ++requestId.current
    const provider = searchRef.current
    const trimmed = query.trim()

    if (!provider) return

    if (!trimmed) {
      provider.stopSearch()
      ;(() => setSearching(false))()
      return
    }

    const timer = window.setTimeout(() => {
      setSearching(true)
      provider.startSearch()

      provider.searchAllPages(trimmed).wait(
        (result) => {
          if (requestId.current !== id) return
          setSearching(false)

          const first = result.results[0]
          if (first) {
            provider.goToResult(0)
            jumpTo(first.pageIndex, first.rects[0])
          }
        },
        () => {
          if (requestId.current === id) setSearching(false)
        }
      )
    }, SEARCH_DEBOUNCE)

    return () => window.clearTimeout(timer)
  }, [query, jumpTo])

  const step = (direction: 1 | -1) => {
    const provider = searchRef.current
    if (!provider || !state.total || searching) return

    const index =
      direction === 1 ? provider.nextResult() : provider.previousResult()
    const result = state.results[index]
    if (result) jumpTo(result.pageIndex, result.rects[0])
  }

  const clear = () => {
    requestId.current++
    setQuery("")
    setSearching(false)
    searchRef.current?.stopSearch()
  }

  const status = searching
    ? "Searching..."
    : state.total
      ? `${state.activeResultIndex + 1} / ${state.total}`
      : query.trim()
        ? "No results"
        : "Search text"

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label="Search PDF"
            disabled={disabled}
          >
            <HugeiconsIcon
              icon={Search01Icon}
              className="size-4"
              strokeWidth={2}
            />
          </Button>
        }
      />

      <PopoverContent align="end" className="w-72">
        <div className="space-y-3">
          <Input
            autoFocus
            placeholder="Search in document..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key !== "Enter") return
              event.preventDefault()
              step(event.shiftKey ? -1 : 1)
            }}
          />

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{status}</span>

            <div className="flex items-center gap-1">
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                aria-label="Previous result"
                disabled={searching || !state.total}
                onClick={() => step(-1)}
              >
                <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
              </Button>

              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                aria-label="Next result"
                disabled={searching || !state.total}
                onClick={() => step(1)}
              >
                <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
              </Button>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="button" variant="outline" size="sm" onClick={clear}>
              Clear
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

// -----------------------------------------------------------------------------
// Toolbar
// -----------------------------------------------------------------------------

function PageNumberInput({
  page,
  pageCount,
  disabled,
  onNavigate,
}: {
  page: number
  pageCount: number
  disabled: boolean
  onNavigate: (pageNumber: number) => void
}) {
  const [draft, setDraft] = React.useState<string | null>(null)

  const commit = () => {
    if (draft === null) return
    const parsed = Number.parseInt(draft, 10)
    if (Number.isFinite(parsed)) {
      onNavigate(Math.min(Math.max(parsed, 1), pageCount))
    }
    setDraft(null)
  }

  return (
    <div className="flex items-center gap-1 text-xs tabular-nums">
      <Input
        aria-label="Current page"
        inputMode="numeric"
        disabled={disabled}
        className="h-5 w-8 px-1 text-center"
        value={draft ?? String(page)}
        onFocus={(event) => {
          setDraft(String(page))
          event.currentTarget.select()
        }}
        onChange={(event) => setDraft(event.target.value.replace(/\D/g, ""))}
        onBlur={commit}
        onKeyDown={(event) => {
          if (event.key === "Enter") event.currentTarget.blur()
        }}
      />
      <span className="text-muted-foreground">/ {pageCount}</span>
    </div>
  )
}

function ToolbarIconButton({
  label,
  disabled,
  pressed,
  onClick,
  children,
}: {
  label: string
  disabled?: boolean
  pressed?: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label={label}
            aria-pressed={pressed}
            disabled={disabled}
            onClick={onClick}
          >
            {children}
          </Button>
        }
      />
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  )
}

function PDFViewerToolbar({
  documentId,
  zoom,
  page,
  pageCount,
  sidebarOpen,
  disabled,
  downloading,
  showDownload,
  onZoomIn,
  onZoomOut,
  onZoomReset,
  onNavigate,
  onDownload,
  onToggleSidebar,
}: {
  documentId: string
  zoom: number
  page: number
  pageCount: number
  sidebarOpen: boolean
  disabled: boolean
  downloading: boolean
  showDownload: boolean
  onZoomIn: () => void
  onZoomOut: () => void
  onZoomReset: () => void
  onNavigate: (pageNumber: number) => void
  onDownload: () => void
  onToggleSidebar: () => void
}) {
  return (
    <TooltipProvider>
      <div className="flex min-h-12 items-center justify-between gap-2 border-b bg-background px-3 py-2">
        <div className="flex items-center gap-1">
          <ToolbarIconButton
            label="Pages sidebar"
            disabled={disabled}
            pressed={sidebarOpen}
            onClick={onToggleSidebar}
          >
            <HugeiconsIcon icon={SidebarLeftIcon} className="size-4" />
          </ToolbarIconButton>

          <PageNumberInput
            page={page}
            pageCount={pageCount}
            disabled={disabled}
            onNavigate={onNavigate}
          />
        </div>

        <div className="flex items-center gap-1">
          <ToolbarIconButton
            label="Zoom out"
            disabled={disabled || zoom <= MIN_ZOOM}
            onClick={onZoomOut}
          >
            <HugeiconsIcon icon={MinusSignCircleIcon} className="size-4" />
          </ToolbarIconButton>

          <button
            type="button"
            onClick={onZoomReset}
            disabled={disabled}
            className="w-12 rounded text-center text-xs tabular-nums hover:bg-accent disabled:opacity-50"
            aria-label="Reset zoom to 100%"
          >
            {Math.round(zoom * 100)}%
          </button>

          <ToolbarIconButton
            label="Zoom in"
            disabled={disabled || zoom >= MAX_ZOOM}
            onClick={onZoomIn}
          >
            <HugeiconsIcon icon={PlusSignCircleIcon} className="size-4" />
          </ToolbarIconButton>
        </div>

        <div className="flex items-center gap-1">
          <PDFSearch
            key={documentId}
            documentId={documentId}
            disabled={disabled}
          />

          {showDownload && (
            <ToolbarIconButton
              label="Download PDF"
              disabled={disabled || downloading}
              onClick={onDownload}
            >
              {downloading ? (
                <InlineSpinner />
              ) : (
                <HugeiconsIcon icon={Download01Icon} className="size-4" />
              )}
            </ToolbarIconButton>
          )}
        </div>
      </div>
    </TooltipProvider>
  )
}

// -----------------------------------------------------------------------------
// Main viewer
// -----------------------------------------------------------------------------

function PDFViewerInner({
  documentId,
  document,
  pdfFile,
  fileName,
  defaultZoom,
  className,
  showToolbar,
  showDownload,
  onActivePageChange,
  viewerRef,
  pageClassName,
}: {
  documentId: string
  document: PdfDocumentObject
  pdfFile: string
  fileName?: string
  defaultZoom: number
  className?: string
  showToolbar: boolean
  showDownload: boolean
  onActivePageChange?: (pageNumber: number) => void
  viewerRef: React.ForwardedRef<PDFViewerHandle>
  pageClassName?: (pageNumber: number) => string | undefined
}) {
  const { state: scrollState, provides: scroll } = useScroll(documentId)
  const { state: zoomState, provides: zoom } = useZoom(documentId)

  // Native scroll container. The viewport plugin measures and scrolls this element.
  const viewportRef = useViewportRef(documentId)

  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [downloading, setDownloading] = React.useState(false)

  const [shellRef, shellWidth] = useElementWidth<HTMLDivElement>()
  const sidebarInline = useInlineThumbnailSidebar(shellWidth)

  const initializedZoomRef = React.useRef<string | null>(null)

  const activePage = scrollState.currentPage
  const currentZoom = zoomState.currentZoomLevel
  const pageCount = document.pageCount
  const controlsDisabled = pageCount === 0

  // Ref so the wheel listener always reads the latest zoom without re-binding.
  const zoomLevelRef = React.useRef(currentZoom)
  React.useEffect(() => {
    zoomLevelRef.current = currentZoom
  }, [currentZoom])

  React.useEffect(() => {
    if (activePage > 0) onActivePageChange?.(activePage)
  }, [activePage, onActivePageChange])

  // Apply the initial zoom once per document.
  React.useEffect(() => {
    if (!zoom || initializedZoomRef.current === documentId) return
    initializedZoomRef.current = documentId
    zoom.requestZoom(defaultZoom)
  }, [defaultZoom, documentId, zoom])

  // Ctrl/Cmd + wheel zooms. Needs a non-passive listener to block the browser zoom.
  React.useEffect(() => {
    const element = viewportRef.current
    if (!element || !zoom) return

    const handleWheel = (event: WheelEvent) => {
      if (!event.ctrlKey && !event.metaKey) return
      event.preventDefault()
      const direction = event.deltaY < 0 ? 1 : -1
      zoom.requestZoom(
        clampZoom(zoomLevelRef.current + direction * WHEEL_ZOOM_STEP)
      )
    }

    element.addEventListener("wheel", handleWheel, { passive: false })
    return () => element.removeEventListener("wheel", handleWheel)
  }, [viewportRef, zoom])

  const scrollToPage = React.useCallback(
    (pageNumber: number, behavior: "auto" | "smooth" = "auto") => {
      if (!scroll || pageNumber < 1 || pageNumber > pageCount) return
      scroll.scrollToPage({ pageNumber, behavior })
    },
    [pageCount, scroll]
  )

  React.useImperativeHandle(
    viewerRef,
    () => ({
      scrollToPage: (pageNumber, options) =>
        scrollToPage(
          pageNumber,
          options?.behavior === "smooth" ? "smooth" : "auto"
        ),
      getViewportElement: () => viewportRef.current,
    }),
    [scrollToPage, viewportRef]
  )

  const setZoom = React.useCallback(
    (next: number) => zoom?.requestZoom(clampZoom(next)),
    [zoom]
  )

  const handleDownload = async () => {
    if (!pdfFile || downloading) return

    setDownloading(true)
    try {
      await downloadPdf(pdfFile, getDownloadName(fileName, pdfFile))
    } finally {
      setDownloading(false)
    }
  }

  const renderPage = React.useCallback(
    (page: PageLayout) => (
      <PDFPage
        documentId={documentId}
        page={page}
        scale={currentZoom}
        className={pageClassName?.(page.pageNumber)}
      />
    ),
    [currentZoom, documentId, pageClassName]
  )

  return (
    <div
      data-slot="pdf-viewer"
      className={cn(
        "flex h-full max-h-full min-h-0 w-full flex-col overflow-hidden bg-background",
        className
      )}
    >
      {showToolbar && (
        <PDFViewerToolbar
          documentId={documentId}
          zoom={currentZoom}
          page={activePage}
          pageCount={pageCount}
          sidebarOpen={sidebarOpen}
          disabled={controlsDisabled}
          downloading={downloading}
          showDownload={showDownload}
          onZoomIn={() => setZoom(currentZoom + ZOOM_STEP)}
          onZoomOut={() => setZoom(currentZoom - ZOOM_STEP)}
          onZoomReset={() => setZoom(1)}
          onNavigate={(pageNumber) => scrollToPage(pageNumber, "smooth")}
          onDownload={handleDownload}
          onToggleSidebar={() => setSidebarOpen((open) => !open)}
        />
      )}

      <div
        ref={shellRef}
        className="relative flex min-h-0 flex-1 overflow-hidden bg-muted/30"
      >
        <DocumentViewerThumbnailSidebar
          open={sidebarOpen}
          inline={sidebarInline}
          widthClassName={SIDEBAR_WIDTH}
          closedInlineClassName={SIDEBAR_CLOSED_WIDTH}
        >
          {sidebarOpen && (
            <PDFThumbnails
              documentId={documentId}
              document={document}
              activePage={activePage}
              onSelect={(pageNumber) => scrollToPage(pageNumber, "smooth")}
            />
          )}
        </DocumentViewerThumbnailSidebar>

        {/* Positioned wrapper gives the scroll container a definite box on both axes. */}
        <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">
          <GlobalPointerProvider documentId={documentId}>
            <ViewportElementContext.Provider value={viewportRef}>
              <div
                ref={viewportRef}
                className="absolute inset-0 overflow-auto overscroll-contain"
              >
                {/* min-w/min-h fill the viewport; w-max lets content overflow horizontally. */}
                <div className="flex min-h-full w-max min-w-full justify-center">
                  <PDFScroller
                    documentId={documentId}
                    renderPage={renderPage}
                  />
                </div>
              </div>
            </ViewportElementContext.Provider>
          </GlobalPointerProvider>
        </div>
      </div>
    </div>
  )
}

// -----------------------------------------------------------------------------
// Document loader
// -----------------------------------------------------------------------------

type ViewerChromeProps = Omit<
  React.ComponentProps<typeof PDFViewerInner>,
  "documentId" | "document" | "pdfFile" | "viewerRef"
>

function PDFViewerDocumentLoader({
  pdfFile,
  viewerRef,
  onDocumentLoadSuccess,
  ...chrome
}: {
  pdfFile: string
  viewerRef: React.ForwardedRef<PDFViewerHandle>
  onDocumentLoadSuccess?: (numPages: number) => void
} & ViewerChromeProps) {
  const { provides: documentManager } = useDocumentManagerCapability()
  const { activeDocumentId, activeDocument } = useActiveDocument()

  const [loadError, setLoadError] = React.useState(false)
  const openedFileRef = React.useRef<string | null>(null)
  const onLoadRef = React.useRef(onDocumentLoadSuccess)

  React.useEffect(() => {
    onLoadRef.current = onDocumentLoadSuccess
  }, [onDocumentLoadSuccess])

  React.useEffect(() => {
    if (!documentManager || !pdfFile) return
    if (openedFileRef.current === pdfFile) return

    openedFileRef.current = pdfFile
    setLoadError(false)

    const previousDocumentIds = documentManager
      .getOpenDocuments()
      .map((item) => item.id)

    const handleError = () => {
      if (openedFileRef.current === pdfFile) setLoadError(true)
    }

    documentManager
      .openDocumentUrl({
        url: pdfFile,
        name: /^data:/i.test(pdfFile) ? "document.pdf" : undefined,
        mode: /^(blob|data):/i.test(pdfFile) ? "full-fetch" : "auto",
      })
      .wait((response) => {
        response.task.wait((openedDocument) => {
          if (openedFileRef.current !== pdfFile) return

          onLoadRef.current?.(openedDocument.pageCount)

          previousDocumentIds.forEach((id) => {
            documentManager.closeDocument(id).wait(
              () => undefined,
              () => undefined
            )
          })
        }, handleError)
      }, handleError)
  }, [documentManager, pdfFile])

  const document =
    activeDocument?.status === "loaded" ? activeDocument.document : null
  const failed = loadError || activeDocument?.status === "error"

  if (!activeDocumentId || !document || failed) {
    return (
      <div className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-background">
        {chrome.showToolbar && (
          <div className="flex min-h-12 items-center border-b px-3">
            {!failed && <InlineSpinner />}
          </div>
        )}

        <div className="grid min-h-0 flex-1 place-items-center bg-muted/30 p-6">
          <div className="space-y-2 text-center">
            {failed ? (
              <>
                <p className="text-sm font-medium text-foreground">
                  Unable to load PDF
                </p>
                <p className="text-xs text-muted-foreground">
                  Check the PDF source and try again.
                </p>
              </>
            ) : (
              <>
                <InlineSpinner className="mx-auto size-5" />
                <p className="text-sm text-muted-foreground">Loading PDF...</p>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <PDFViewerInner
      key={activeDocumentId}
      {...chrome}
      viewerRef={viewerRef}
      documentId={activeDocumentId}
      document={document}
      pdfFile={pdfFile}
    />
  )
}

// -----------------------------------------------------------------------------
// Public component
// -----------------------------------------------------------------------------

export const PDFViewer = React.forwardRef<PDFViewerHandle, PDFViewerProps>(
  function PDFViewer(
    {
      src,
      className,
      fileName,
      defaultZoom = DEFAULT_ZOOM,
      showToolbar = true,
      showDownload = true,
      pageClassName,
      onDocumentLoadSuccess,
      onActivePageChange,
    },
    ref
  ) {
    const { engine, error } = useSharedPdfEngine()
    const pdfFile = React.useMemo(() => getPdfSourceUrl(src ?? ""), [src])

    const shellClass = cn(
      "grid h-full min-h-0 w-full place-items-center bg-background",
      className
    )

    if (error) {
      return (
        <div className={cn(shellClass, "text-sm text-destructive")}>
          Unable to initialize PDF engine.
        </div>
      )
    }

    if (!engine) {
      return (
        <div className={shellClass}>
          <InlineSpinner />
        </div>
      )
    }

    if (!pdfFile) {
      return (
        <div className={cn(shellClass, "text-sm text-muted-foreground")}>
          No PDF source provided.
        </div>
      )
    }

    return (
      <EmbedPDF engine={engine} plugins={PLUGIN_REGISTRATIONS}>
        <PDFViewerDocumentLoader
          viewerRef={ref}
          pdfFile={pdfFile}
          className={className}
          fileName={fileName}
          defaultZoom={defaultZoom}
          showToolbar={showToolbar}
          showDownload={showDownload}
          pageClassName={pageClassName}
          onActivePageChange={onActivePageChange}
          onDocumentLoadSuccess={onDocumentLoadSuccess}
        />
      </EmbedPDF>
    )
  }
)

PDFViewer.displayName = "PDFViewer"
