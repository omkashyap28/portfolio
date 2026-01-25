"use client";
import { gsap, useGSAP, SplitText } from "../gsap-config";

export default function Heading2({ heading, className, id, ...props }) {

  useGSAP(() => {
    const splitHeading = new SplitText(`#${id}`, { type: "chars, lines" });

    gsap.from(splitHeading.chars, {
      x: 10,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      scrollTrigger: {
        trigger: `#${id}`,
        start: "top 80%",
      },
    });
  })

  return <h2 id={id} className={`text-3xl text-neutral-800 tracking-tight font-semibold mt-16 my-8 {className}`} {...props}>
    {heading}
  </h2>
}