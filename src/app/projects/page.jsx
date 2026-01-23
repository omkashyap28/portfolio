import Image from "next/image";
import { Heading1, Heading3, Main } from "../components";
import { projectImages } from "../../../constants";
import Link from "next/link";
import { FaArrowRight, FaArrowUpRightFromSquare, FaGithub, FaSquareArrowUpRight } from "react-icons/fa6";
import clsx from "clsx";

export default function Project() {
  return (
    <Main>
      <Heading1 heading="All Projects" />
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {projectImages.map(({ id, title, description, src, tools, status }) => (
            <div
              key={id}
              className="group bg-[#F9F9FA] rounded-2xl transition-shadow duration-300 border border-neutral-200/70 overflow-hidden flex flex-col mt-6 h-full shadow group-hover:shadow-md group-hover:shadow-neutral-400"
            >
              <div className="relative w-full aspect-4/3 bg-neutral-100 overflow-hidden">
                <Image
                  src={src}
                  alt={title}
                  fill
                  className="object-cover transition-all duration-100 group-hover:blur-[1px]"
                  priority={id === 1}
                />
              </div>
              <div className="relative flex-1 flex flex-col justify-between p-5">
                <div className="absolute top-5 right-5">
                  <div className="flex gap-3 items-center">
                    <Link href="#">
                      <FaGithub className="text-[16px] text-neutral-600" />
                    </Link>
                    <Link href="#">
                      <FaArrowUpRightFromSquare className="text-[16px] text-neutral-600" />
                    </Link>
                  </div>
                </div>
                <div>
                  <Heading3 heading={title} className="mb-2 mt-4 text-lg font-semibold md:text-xl" />
                  <p className="text-neutral-600 text-sm md:text-base min-h-12">
                    {description || "A modern web project with a clean UI and responsive layout."}
                  </p>
                </div>
                {tools && tools.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {tools.map((tool, idx) => (
                      <span key={idx} className="inline-flex items-center justify-center w-7 h-7">
                        <Image src={tool} alt="tool" width={20} height={20} className="object-contain" />
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full shadow-sm">
                    <div className={clsx(
                      "h-2 w-2 rounded-full",
                      {
                        "bg-green-700": status === "active",
                        "bg-red-700": status === "not-active",
                        "bg-blue-700": status === "development",
                      }
                    )
                    }></div>
                    <div className="text-[12px] text-neutral-600">
                      {
                        status === "active" ? <span>Active</span>
                          :
                          status === "not-active" ? <span>Not Active</span> : <span>Soon</span>
                      }

                    </div>
                  </div>
                  <Link href="#">
                    <span className="flex items-center gap-1 text-[14px] text-neutral-600">
                      <span className="hover:underline">
                        All detalis
                      </span>
                      <FaArrowRight className="text-[10px]" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Main >
  )
}