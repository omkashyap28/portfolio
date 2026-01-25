import Link from "next/link";
import { Heading3 } from "../components";
import { BookOpenIcon, SquareCodeIcon, ArrowUpRightIcon } from "../icons";

export default function Other() {
  return (
    <div>
      <section className="w-full">
        <Link href="/vs-code-setups">
          <div className="w-full my-3 px-5 py-2 rounded-md border border-neutral-300/60 bg-[#F9F9FA] shadow-md transition-shadow duration-100 hover:shadow-neutral-500/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SquareCodeIcon />
                <Heading3 heading="VS Code Setup" className="m-0! text-lg! font-normal!" />
              </div>
              <ArrowUpRightIcon />
            </div>
          </div>
        </Link>
        <Link href="/study-resources">
          <div className="w-full my-3 px-5 py-2 rounded-md border border-neutral-300/60 bg-[#F9F9FA] shadow-md transition-shadow duration-100 hover:shadow-neutral-500/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpenIcon />
                <Heading3 heading="Study Resources" className="m-0! text-lg! font-normal!" />
              </div>
              <ArrowUpRightIcon />
            </div>
          </div>
        </Link>
      </section >
    </div >
  )
}