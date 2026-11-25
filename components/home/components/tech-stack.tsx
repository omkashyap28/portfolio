import Image from "next/image"
import Link from "next/link"
import { TechItem, techItems } from "@/constants"
import { Heading2 } from "@/components/layout/heading-2"

const TechBadge = ({ item }: { item: TechItem }) => (
  <Link
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex shrink-0 cursor-pointer items-center gap-1 rounded-md border border-dashed border-border bg-linear-to-tr from-card/50 to-card px-2 py-1 text-muted-foreground shadow backdrop-blur-md transition-all duration-150 hover:bg-card hover:text-accent-foreground focus:ring-3 focus:ring-ring/40 focus:outline-none"
  >
    <span className="relative grid size-4 place-items-center">
      <Image
        unoptimized
        src={item.icon}
        alt={item.name}
        width={16}
        height={16}
        priority
        className="size-full object-contain"
      />
    </span>
    <span className="text-sm">{item.name}</span>
  </Link>
)

export const TechStack = () => (
  <div>
    <Heading2 id="tech-heading">Tools & Technologies</Heading2>
    <div className="mt-3 space-y-3">
      <div className="flex w-max max-w-full flex-wrap items-center gap-x-2 gap-y-1 py-1">
        {techItems.map((item, idx) => (
          <TechBadge key={`${idx}-${item.name}`} item={item} />
        ))}
      </div>
    </div>
  </div>
)
