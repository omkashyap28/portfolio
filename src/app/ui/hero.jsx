"use client";

import Link from "next/link";
import { techStacks, additionalTechStacks } from "../../../constants";
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaGithub, FaEnvelope, FaPaperPlane, FaLink } from "react-icons/fa6"
import { Heading2, Heading3, Typing } from "../components";
import Image from "next/image"
import { useId } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";


export default function Hero() {

  const heading1 = useId();
  const heading3 = useId();
  const p = useId();

  useGSAP(() => {
    gsap.registerPlugin(SplitText)
    const paragraph = new SplitText(p, {
      autoSplit: true
    })
    console.log(paragraph)



    gsap.from(`#${heading3}`, {
      y: 20,
      filter: "blur(4px)",
      opacity: 0,
      duration: 0.6,
    })
    gsap.from(`#${heading1}`, {
      y: 30,
      filter: "blur(4px)",
      opacity: 0,
      duration: 0.9,
    })
    gsap.from(p, {
      y: 40,
      filter: "blur(4px)",
      opacity: 0,
      duration: 1.1,
      stagger: 0.4,
    })
  }, [])

  return (
    <div className="h-full">
      <div className="mt-24 w-full">
        <div>
          <Heading3 id={heading3} heading="Hey, I am Hariom Kashyap - Fullstack Developer" />
          <h1 id={heading1} className="flex flex-wrap items-center gap-3 text-6xl tracking-tight text-shadow-sm text-neutral-900 my-1">
            I Make
            <Typing />
            Web Experiences
          </h1>
          <p id={p} className="text-lg text-neutral-600 max-w-lg">
            A full-stack  web developer with strongly addicted for building high-quality, scalable applications.
          </p>
        </div>
        <div className="block sm:hidden mt-6 mb-8">
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
        <div className="my-5 flex items-center gap-5">
          <Link className="text-2xl text-neutral-600 social-links " target="black" href="https://www.instagram.com/omkashyap7484">
            <FaInstagram />
          </Link>
          <Link className="text-2xl text-neutral-600 social-links" target="black" href="https://www.linkedin.com/in/hari-om-kashyap-b176b63a5">
            <FaLinkedinIn />
          </Link>
          <Link className="text-2xl text-neutral-600 social-links" target="black" href="https://x.com/om_kashyap28">
            <FaXTwitter />
          </Link>
          <Link className="text-2xl text-neutral-600 social-links" target="black" href="https://github.com/omkashyap28">
            <FaGithub />
          </Link>
          <Link className="text-2xl text-neutral-600 social-links" target="black" href="mailto:omkashyap6870@gmail.com">
            <FaEnvelope />
          </Link>
        </div>

        <div className="mt-10">
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