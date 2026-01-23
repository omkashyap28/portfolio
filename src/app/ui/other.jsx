import Link from "next/link";
import { Heading2, Heading3 } from "../components";
import { FaArrowRight, FaBookOpen, FaCode } from "react-icons/fa6";

export default function Other() {
  return (
    <div>
      <Heading2 heading="Recommendation" />
      <section className="w-full">
        <Link href="/vs-code-setups">
          <div className="w-full my-3 px-5 py-2 rounded-md border border-neutral-300/60 bg-[#F9F9FA] shadow-md transition-shadow duration-100 hover:shadow-neutral-500/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaCode className="text-neutral-500 text-xl" />
                <Heading3 heading="VS Code Setup" className="m-0! text-lg! font-normal!" />
              </div>
              <FaArrowRight className="text-neutral-400 size-4 -rotate-45 font-light" />
            </div>
          </div>
        </Link>
        <Link href="/study-resources">
          <div className="w-full my-3 px-5 py-2 rounded-md border border-neutral-300/60 bg-[#F9F9FA] shadow-md transition-shadow duration-100 hover:shadow-neutral-500/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaBookOpen className="text-neutral-500 text-xl" />
                <Heading3 heading="Study Resources" className="m-0! text-lg! font-normal!" />
              </div>
              <FaArrowRight className="text-neutral-400 size-4 -rotate-45 font-light" />
            </div>
          </div>
        </Link>
      </section >
    </div >
  )
}