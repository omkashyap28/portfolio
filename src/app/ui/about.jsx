"use client"

import { gsap, useGSAP, SplitText } from "../gsap-config"
import { additionalTechStacks, techStacks } from "../../../constants";
import { Heading2, Heading3, Main, Repos } from "../components";
import Link from "next/link";
import { GitHubCalendar } from "react-github-calendar";
import Image from "next/image"
import { useId } from "react";

export default function About() {


  const me = useId()
  const desc = useId()

  useGSAP(() => {
    const splitDesc = new SplitText(`#${desc}`, { type: "chars, lines" });
    const tl = gsap.timeline();
    gsap.from(`#${me}`, {
      left: "-100%",
      opacity: 0,
      duration: 0.9,
      scrollTrigger: {
        trigger: `#${me}`,
        start: "top 80%",
      }
    })
    gsap.from(splitDesc.lines, {
      y: 10,
      opacity: 0,
      filter: "blur(3px)",
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: `#${me}`,
        start: "top 80%",
      }
    })
  }, [])

  return (
    <Main >
      <div className="mb-18">
        <Heading2 id="about-id" heading="About Me" />
        <div className="w-full">
          <div className="flex justify-start items-start gap-5 max-sm:flex-col">
            <div className="h-54 min-w-52 rounded-md overflow-hidden">
              <Image src="/om-icon.png" alt="My profile image" height={216} width={208} className="object-center" />
            </div>
            <div className="w-full">
              <div id={me}>
                <Heading3 heading="Hariom Kashyap" className="m-0! text-2xl font-semibold" />
                <h4 className="text-sm text-neutral-400 tracking-tight -mt-1">Full Stack developer</h4>
              </div>
              <div id={desc}>
                <p className="text-sm text-neutral-600 tracking-tightest mt-3 leading-1">
                  I&lsquo;m building robust web apps, Always learning something new to enhanced my skills and knowldge. Passionate about creating seamless user experiences and writing clean, efficient code.
                </p>
              </div>
              <div>
                <Heading3 heading="Skills" className="text-neutral-400 text-xl mb-2" />
                <div className="flex items-center gap-2 flex-wrap">
                  {
                    techStacks.map(({ id, name, url, src }) =>
                      <div className="tooltip-container inline-flex items-center relative group" key={id}>
                        <Link href={url} className="shadow-xs" key={id} id={name}>
                          <Image src={src} alt={name} height={28} width={28} />
                        </Link>
                        <span
                          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 px-2 py-0.5 text-sm font-medium text-white bg-[#1A1F2C] backdrop-blur-sm rounded-lg shadow-lg border border-neutral-800/10 transition-all duration-200 ease-in-out whitespace-nowrap z-50 bottom-full left-1/2 -translate-x-1/2 -translate-y-2 max-sm:hidden"
                        >
                          {name}
                          <span
                            className="absolute w-2 h-2 bg-[#1A1F2C] transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"
                          ></span>
                        </span>
                      </div>
                    )
                  }
                  {
                    additionalTechStacks.map(({ id, name, url, src }) =>
                      <div className="tooltip-container inline-flex items-center relative group" key={id}>
                        <Link href={url} className="shadow-xs" key={id} id={name}>
                          <Image src={src} alt={name} height={28} width={28} />
                        </Link>
                        <span
                          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 px-2 py-0.5 text-sm font-medium text-white bg-[#1A1F2C] backdrop-blur-sm rounded-lg shadow-lg border border-neutral-800/10 transition-all duration-200 ease-in-out whitespace-nowrap z-50 bottom-full left-1/2 -translate-x-1/2 -translate-y-2 max-sm:hidden"
                        >
                          {name}
                          <span
                            className="absolute w-2 h-2 bg-[#1A1F2C] transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"
                          ></span>
                        </span>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
          <div id="github-activity" className="w-full mt-14">
            <div className="w-full p-3 rounded-md border border-neutral-300/60 bg-[#F9F9FA] shadow-sm">
              <h4 className="text-sm text-neutral-500 tracking-tight text-shadow-2xs mb-4">
                Github Activity
              </h4>
              <GitHubCalendar blockSize={17} errorMessage="" colorScheme="light" blockRadius={2} blockMargin={4} showWeekdayLabels={true} showColorLegend={true} username="omkashyap28" />
              <div className="w-full">
                <Heading3 heading="My repositories" className="mt-0" />
                <Repos />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main >
  )
}

