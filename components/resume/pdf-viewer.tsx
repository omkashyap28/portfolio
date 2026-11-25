"use client"

import { PDFViewer as ReactPDFViewer } from "@/components/extend/pdf-viewer"

export const PdfViewer = () => {
  return (
    <ReactPDFViewer
      src="/hariom_resume.pdf"
      className="pointer-events-auto! h-dvh"
    />
  )
}
