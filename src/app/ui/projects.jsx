"use client";

import { gsap, useGSAP } from "../gsap-config";
import Image from "next/image";
import { Heading3, Heading2, Main } from "../components";
import { projectImages } from "../../../constants";
import Link from "next/link";
import clsx from "clsx";
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon } from "../icons";

export default function Projects() {
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
        },
      });
    });
  }, []);

  return (
    <Main className="w-full py-8">
      <Heading2 id="projects-heading" heading="Recent Works" />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projectImages
          .slice(0, 4)
          .map(
            ({
              id,
              title,
              description,
              src,
              tools,
              status,
              url,
              github,
              nextjsSrc,
            }) => (
              <div
                key={id}
                className="group project-images mt-6 flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/70 bg-[#F9F9FA] shadow-sm shadow-neutral-200/70 transition-shadow duration-300"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100 group-hover:scale-105 transition-all duration-200">
                  <Image
                    src={src}
                    alt={title}
                    fill={true}
                    className="mask-b-to-white object-cover transition-all duration-100"
                  />
                </div>
                <div className="relative flex flex-1 flex-col justify-between px-3 py-5">
                  <div className="absolute top-5 right-5">
                    <div className="flex items-center gap-3">
                      <Link href={github} target="black">
                        <GithubIcon className="size-4" />
                      </Link>
                      <Link href={url} target="blank">
                        <ExternalLinkIcon className="size-4" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Heading3
                      heading={title}
                      className="mt-4 mb-2 text-lg font-semibold md:text-xl"
                    />
                    <p className="min-h-12 text-[11px] leading-5 tracking-tight text-neutral-600 md:text-base">
                      {description || "No description"}
                    </p>
                  </div>
                  {tools && tools.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1">
                      {tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="inline-flex h-7 w-7 items-center justify-center"
                        >
                          <Image
                            src={tool}
                            alt="tool"
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-3 flex items-center justify-start">
                    <div
                      className={clsx(
                        "flex items-center gap-1 rounded-full px-2 py-0.5 shadow-sm",
                        {
                          "bg-green-100": status === "active",
                          "bg-red-100": status === "not-active",
                          "bg-blue-100": status === "development",
                        },
                      )}
                    >
                      <div
                        className={clsx("h-2 w-2 rounded-full", {
                          "bg-green-700": status === "active",
                          "bg-red-700": status === "not-active",
                          "bg-blue-700": status === "development",
                        })}
                      ></div>
                      <div className="text-[12px] text-neutral-600">
                        {status === "active" ? (
                          <span>Active</span>
                        ) : status === "not-active" ? (
                          <span>Not Active</span>
                        ) : (
                          <span>Building</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
      </div>
    </Main>
  );
}
