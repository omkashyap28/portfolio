"use client";

import Link from "next/link";
import { navbarLinks } from "../../../constants";
import Image from "next/image";
import { useEffect, useId, useState } from "react";
import clsx from "clsx";
import { FaPaperPlane } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { Container } from "../components";

export default function Navbar() {

  const [activePage, setActivePage] = useState("Home");
  const [navbarToggle, setNavbarToggle] = useState(false);
  const pathname = usePathname();

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
    window.document.body.style.overflow = navbarToggle ? "hidden" : "auto";
  }, [navbarToggle])

  useEffect(() => {
    if (pathname === "/") {
      (() => {
        setActivePage("home")
      }
      )();
    } else {
      (() => {
        setActivePage(pathname.replace("/", ""));
      })()
    }
  }, [pathname]);

  return (
    <Container>
      {navbarToggle && (
        <div
          onClick={() => setNavbarToggle(false)}
          className="fixed inset-0 z-40 lg:hidden"
        />
      )}
      <header className="sticky top-0 left-0 z-50 w-full py-3 bg-neutral-50">
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
              className="rounded-md tracking-tight px-2 py-1.5 ml-4 bg-neutral-900 shadow-md shadow-neutral-400/60 text-neutral-100">
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
        </nav >

        {/* sidebar */}

        <div className={clsx(
          "fixed right-0 top-0 p-1 h-screen w-68 bg-white border-r border-neutral-200 flex flex-col shadow-xl transform transition-transform duration-300",
          navbarToggle ? "" : "translate-x-full"
        )}>
          <button
            onClick={toogleNavbar}
            className="absolute top-6 right-4 h-6 w-6">
            <div className="absolute h-0.5 w-5 bg-neutral-900 rotate-45"></div>
            <div className="absolute h-0.5 w-5 bg-neutral-900 -rotate-45" ></div>
          </button>
          <div className="mt-20">
            {
              navbarLinks.map(({ title, slug }) => {
                const active = pathname === slug;
                return <Link
                  key={title}
                  href={slug}
                  onClick={() => { setSidebarOpen(false); setActivePage(title) }}
                  className={clsx(
                    "block rounded-lg px-4 py-2.5 text-lg font-medium transition-all mb-2 ",
                    active ?
                      "bg-neutral-900 text-white shadow-sm" :
                      "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                  )}
                >
                  {title}
                </Link>
              })
            }
          </div>
        </div>
      </header >
    </Container>
  )
}