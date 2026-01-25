"use client"

import { gsap, useGSAP } from "./gsap-config";
import { FaArrowLeft } from "react-icons/fa6";
import { Heading2 } from "./components";
import { useRouter } from "next/navigation";

export default function NotFound() {

  const router = useRouter()

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from("#fallback-id", {
      y: 20,
      opacity: 0,
      filter: "blur(3px)",
      duration: 0.4,
    })
      .from("#fallback-btn", {
        y: 20,
        opacity: 0,
        filter: "blur(2px)",
        duration: 0.8,
      })
  })

  return (
    <div className="h-[60vh] w-full z-99 bg-neutral-100">
      <div className="flex items-center justify-center h-full w-full">
        <div>
          <Heading2 id="not-found" heading={
            <span>
              <span>404 </span>
              <span>Page not found</span>
            </span>
          } className="mt-0!" />
          <p id="fallback-id" className="text-neutral-600 -mt-6 tracking-tight">Page you want to get is not founded, please go back!!!</p>
          <button onClick={() => router.back()} id="fallback-btn" className="flex gap-2 items-center mt-7 px-4 py-1.5 rounded-md bg-neutral-900 text-neutral-300 shdow-md shadow-neutral-300">
            <FaArrowLeft className="text-neutral-300" />
            Go Back
          </button>
        </div>
      </div>
    </div >
  )
}