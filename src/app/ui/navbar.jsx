"use client";

import Link from "next/link";
import { navbarLinks } from "../../../constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navbar() {

  const [activePage, setActivePage] = useState("home");
  const [navbarToggle, setNavbarToggle] = useState(false);


  function toogleNavbar() {
    setNavbarToggle(toggle => !toggle)
  }

  useEffect(() => {
    window.document.body.style.overflow = navbarToggle ? "hidden" : "auto"
  }, [navbarToggle])

  return (
    <header className="sticky top-0 w-full py-3 mt-3 bg-gray-0 bg-neutral-100/96">
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
        <div className="hidden md:flex items-center gap-5">
          {
            navbarLinks.map(({ title, slug }) => (
              <span key={title}
                onClick={() => setActivePage(title)}
              >
                <Link
                  className={clsx(
                    "text-[15px] capitalize tracking-tight font-medium",
                    {
                      "text-neutral-900 underline": activePage === title,
                      "text-neutral-500": activePage !== title,
                    }
                  )}
                  href={slug}
                >
                  {title}
                </Link>
              </span>
            ))
          }
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
        "fixed z-9999 flex flex-col gap-6 justify-center items-center top-0 h-screen w-full bg-black text-neutral-100 transform duration-400 p-4",
        {
          "right-0": navbarToggle,
          "-right-full": !navbarToggle
        }
      )}>
        <button
          onClick={toogleNavbar}
          className="fixed top-6 right-8 h-6 w-6">
          <div className="absolute h-0.5 w-5 bg-neutral-100 rotate-45"></div>
          <div className="absolute h-0.5 w-5 bg-neutral-100 -rotate-45" ></div>
        </button>
        {
          navbarLinks.map(({ title, slug }) => (
            <span key={title}
              onClick={() => setActivePage(title)}
            >
              <Link
                className={clsx(
                  "text-2xl capitalize tracking-tight font-medium",
                  {
                    "text-neutral-100": activePage === title,
                    "text-neutral-500": activePage !== title,
                  }
                )}
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