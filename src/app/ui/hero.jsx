"use client";

import Link from "next/link";
import { techStacks, additionalTechStacks } from "../../../constants";
import { FaPaperPlane, FaLink } from "react-icons/fa6"
import { Heading2, Heading3, Typing } from "../components";
import Image from "next/image"
import { useId } from "react";
import { gsap, useGSAP, SplitText } from "../gsap-config";
import { EmailIcon, FigmaIcon, GithubIcon, InstagramIcon, LinkedInIcon, TwitterXIcon } from "../icons";

export default function Hero() {

  const heading1 = useId();
  const heading3 = useId();
  const p = useId();
  const socialLinks = useId();
  const ctaBtn = useId();
  const techStacksId = useId();

  useGSAP(() => {
    const tl = gsap.timeline()
    const paragraph = new SplitText(`#${p}`, { type: "chars, lines" })
    tl.from(`#${heading3}`, {
      y: 20,
      filter: "blur(4px)",
      opacity: 0,
      duration: 0.6,
      ease: "expo"
    })
      .from(`#${heading1}`, {
        y: 30,
        filter: "blur(4px)",
        opacity: 0,
        duration: 0.7,
        ease: "expo"
      })
      .from(paragraph.lines, {
        y: 30,
        filter: "blur(3px)",
        opacity: 0,
        duration: 0.4,
        stagger: 0.07,
        ease: "expo"
      })
      .from([`#${socialLinks}`, `#${ctaBtn}`], {
        y: 30,
        filter: "blur(3px)",
        opacity: 0,
        duration: 0.6,
        ease: "expo"
      }, "<")
      .from(`#${techStacksId}`, {
        y: 10,
        opacity: 0,
        duration: 0.8
      }, "<")

    return () => {
      paragraph.revert();
    }
  }, [])

  return (
    <div className="h-full">
      <div className="mt-24 w-full">
        <div>
          <Heading3 id={heading3} heading="Hey, I am Hariom Kashyap - Fullstack Developer" className="bg-clip-text text-transparent bg-linear-to-t from-neutral-900 to-neutral-600 text-shadow-sm" />
          <h1 id={heading1} className="flex flex-wrap flex-col sm:items-center sm:flex-row items-start sm:gap-3 text-[11vw] sm:text-6xl tracking-tight text-shadow-sm text-neutral-900">
            I Make
            <Typing />
            Web Experiences
          </h1>
          <p id={p} className="mt-4 text-lg tracking-tight text-neutral-700 max-w-lg">
            A full-stack  web developer with strongly addicted for building high-quality, scalable applications.
          </p>
        </div>
        <div id={ctaBtn} className="block sm:hidden mt-6 mb-8">
          <Link
            href="/contact"
            className="rounded-md tracking-tight px-2 py-1.5 bg-neutral-900 shadow-sm text-xl shadow-neutral-600/60 text-neutral-100 inline-block"
          >
            <div className="flex items-center gap-2">
              <FaPaperPlane />
              Get in touch
            </div>
          </Link>
        </div>
        <div id={socialLinks} className="mb-5 mt-6 sm:mt-12 flex items-center gap-5">
          <Link className="text-2xl text-neutral-600 social-links " target="black" href="https://www.instagram.com/omkashyap7484">
            <InstagramIcon />
          </Link>
          <Link className="text-2xl text-neutral-600 social-links" target="black" href="https://www.linkedin.com/in/hari-om-kashyap-b176b63a5">
            <LinkedInIcon />
          </Link>
          <Link className="text-2xl text-neutral-600 social-links" target="black" href="https://x.com/om_kashyap28">
            <TwitterXIcon />
          </Link>
          <Link className="text-2xl text-neutral-600 social-links" target="black" href="https://github.com/omkashyap28">
            <GithubIcon />
          </Link>
          <Link className="text-2xl text-neutral-600 social-links" target="black" href="mailto:omkashyap6870@gmail.com">
            <EmailIcon />
          </Link>
          <Link className="text-2xl text-neutral-600 social-links" target="black" href="https://www.figma.com/@hariom7">
            <FigmaIcon />
          </Link>
        </div>

        <div id={techStacksId} className="mt-10">
          <Heading2 heading="Tech Stacks" />
          <div className="mt-2">
            <div className="flex flex-wrap gap-3 w-full py-3">
              {
                techStacks.map(({ id, name, url, src, description }) =>
                  <div className="relative inline-block group" key={id}>
                    <button
                      className="relative text-sm font-semibold rounded-xl"
                    >
                      <span className="relative flex items-center gap-2">
                        <Image src={src} alt={name} height={44} width={44} />
                      </span>
                    </button>

                    <div
                      className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 max-sm:hidden"
                    >
                      <div
                        className="relative p-2 bg-neutral-900 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <FaLink />
                            <span>
                              <Link className="underline" href={url} >
                                <h3 className="text-sm font-semibold text-white">{name}</h3>
                              </Link>
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm text-gray-300">
                            {description}
                          </p>
                        </div>
                        <div
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-900 rotate-45 border-r border-b border-white/10"
                        ></div>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="flex flex-wrap gap-3 w-full py-3 mt-5">
              {
                additionalTechStacks.map(({ id, name, url, src, description }) =>
                  <div className="relative inline-block group" key={id}>
                    <button
                      className="relative text-sm font-semibold rounded-xl"
                    >
                      <span className="relative flex items-center gap-2">
                        <Image src={src} alt={name} height={44} width={44} />
                      </span>
                    </button>

                    <div
                      className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 max-sm:hidden"
                    >
                      <div
                        className="relative p-2 bg-neutral-900 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <FaLink />
                            <span>
                              <Link className="underline" href={url} >
                                <h3 className="text-sm font-semibold text-white">{name}</h3>
                              </Link>
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm text-gray-300">
                            {description}
                          </p>
                        </div>
                        <div
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-900 rotate-45 border-r border-b border-white/10"
                        ></div>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}