"use client"

import { gsap, useGSAP } from "../gsap-config";
import { Heading1, Heading3, Main } from "../components";
import { projectImages } from "../../../constants";
import Link from "next/link"; import clsx from "clsx";
import Image from "next/image";
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon } from "../icons";

export default function Project() {

  useGSAP(() => {
    document.querySelectorAll(".project-images").forEach((image, index) => {
      gsap.from(image, {
        x: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: image,
          start: "top 85%",
        }
      })
    })
  }, []);

  return (
    <Main>
      <Heading1 heading="All Projects" />
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {projectImages.map(({ id, title, description, src, tools, status, url, github, nextjsSrc }) => (
            <div
              key={id}
              className="group bg-[#F9F9FA] rounded-2xl transition-shadow duration-300 border border-neutral-200/70 overflow-hidden flex flex-col mt-6 h-full shadow group-hover:shadow-md group-hover:shadow-neutral-400 project-images"
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
                    <Link href={github} target="black">
                      <GithubIcon className="size-4" />
                    </Link>
                    <Link href={url} target="blank">
                      <ExternalLinkIcon className="size-4" />
                    </Link>
                  </div>
                </div>
                <div>
                  <Heading3 heading={title} className="mb-2 mt-4 text-lg font-semibold md:text-xl" />
                  <p className="text-neutral-600 text-[11px] md:text-base min-h-12 leading-5 tracking-tight">
                    {description || "No description"}
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
                  <div className={clsx(
                    "flex items-center gap-1 px-2 py-0.5 rounded-full shadow-sm",
                    {
                      "bg-green-100": status === "active",
                      "bg-red-100": status === "not-active",
                      "bg-blue-100": status === "development",
                    }
                  )}
                  >
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
                  <Link href={nextjsSrc}>
                    <span className="flex items-center gap-1 text-[14px] text-neutral-600">
                      <span className="hover:underline">
                        All detalis
                      </span>
                      <ArrowRightIcon className="size-3" />
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