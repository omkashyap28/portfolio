"use client";

import Link from "next/link";
import { navbarLinks } from "../../../constants";
import Image from "next/image";
import { useEffect, useId, useState } from "react";
import clsx from "clsx";
import { FaPaperPlane } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {

  const [activePage, setActivePage] = useState("home");
  const [navbarToggle, setNavbarToggle] = useState(false);

  function toogleNavbar() {
    setNavbarToggle(toggle => !toggle)
  }

  useGSAP(() => {
    gsap.from("nav", {
      y: 20,
      duration: 0.7,
      filter: "blur(5px)",
      opacity: 0
    })
  }, [])

  useEffect(() => {
    window.document.body.style.overflow = navbarToggle ? "hidden" : "auto"
  }, [navbarToggle])

  return (
    <header className="sticky top-0 z-999 w-full py-3 bg-gray-0 bg-neutral-100/80">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-1">
            <Image
              src="/om-icon.png"
              alt="Logo"
              width={36}
              height={36}
              draggable="false"
            />
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-5 navlinks">
          {
            navbarLinks.map(({ title, slug }) => (
              <span key={title}
                onClick={() => setActivePage(title)}
              >
                <Link
                  className={clsx(
                    "text-[15px] capitalize tracking-tight font-medium",
                    {
                      "text-neutral-800": activePage === title,
                      "text-neutral-500": activePage !== title
                    }
                  )}
                  href={slug}
                >
                  {title}
                </Link>
              </span>
            ))
          }
          <span
            onClick={() => setActivePage("contact")}
            className="rounded-md tracking-tight px-2 py-1.5 ml-4 bg-neutral-900 shadow-sm shadow-neutral-600/60 text-neutral-100 transition-all duration-200 hover:shadow-md hover:shadow-neutral-600/80">
            <Link href="/contact">
              <div className="flex items-center gap-2">
                <FaPaperPlane />
                Get in touch
              </div>
            </Link>
          </span>
        </div>
        <button
          className="flex md:hidden items-center justify-center flex-col relative w-6 h-6 p-1"
          onClick={toogleNavbar}
        >
          <div className="absolute mb-2 h-0.5 w-5 bg-black"></div>
          <div className="absolute mt-2 h-0.5 w-5 bg-black"></div>
        </button>

        {/* sidebar */}

      </nav >
      <div className={clsx(
        "fixed z-9999 flex flex-col gap-6 justify-center items-center top-0 h-screen w-screen bg-black text-neutral-100 transform duration-400 p-4 md:hidden",
        {
          "right-0": navbarToggle,
          "-right-full": !navbarToggle
        }
      )}>
        <button
          onClick={toogleNavbar}
          className="absolute top-6 right-8 h-6 w-6">
          <div className="absolute h-0.5 w-5 bg-neutral-100 rotate-45"></div>
          <div className="absolute h-0.5 w-5 bg-neutral-100 -rotate-45" ></div>
        </button>
        {
          navbarLinks.map(({ title, slug }) => (
            <span key={title}
              onClick={() => setActivePage(title)}
            >
              <Link
                className="text-2xl capitalize tracking-tight font-medium text-neutral-500"
                href={slug}
              >
                {title}
              </Link>
            </span>
          ))
        }
      </div>
    </header >
  )
}