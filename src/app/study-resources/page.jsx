import Link from "next/link";
import { Heading1, Main } from "../components";

export default function StudyResources() {
  return (
    <Main>
      <Heading1 heading="Study Resources" />
      <p className="text-neutral-700 font-semibold text-[16px] tracking-tight">Resources i used to develope skills.</p>
      <div>
        <h4 className="text-xl text-neutral-700 mt-4 mb-2">
          Recommended Sites
        </h4>
        <ul>
          <li>
            HTML : <Link className="text-blue-600 underline" href="https://developer.mozilla.org/en-US/docs/Web/HTML">www.developer.mozilla.org</Link>
          </li>
          <li>
            CSS : <Link className="text-blue-600 underline" href="https://developer.mozilla.org/en-US/docs/Web/CSS">www.developer.mozilla.org</Link>
          </li>
          <li>
            JavaScript : <Link className="text-blue-600 underline" href="https://javascript.info/">www.javascript.info</Link>
          </li>
          <li>
            GSAP : <Link className="text-blue-600 underline" href="https://greensock.com/docs/">www.greensock.com</Link>
          </li>
          <li>
            React : <Link className="text-blue-600 underline" href="https://react.dev/learn">www.react.dev</Link>
          </li>
          <li>
            Framer Motion : <Link className="text-blue-600 underline" href="https://www.framer.com/motion/">www.framer.com</Link>
          </li>
          <li>
            Barba.js : <Link className="text-blue-600 underline" href="https://barba.js.org/docs/getstarted/">www.barba.js.org</Link>
          </li>
          <li>
            TypeScript : <Link className="text-blue-600 underline" href="https://www.typescriptlang.org/docs/">www.typescriptlang.org</Link>
          </li>
          <li>
            ShadCN UI : <Link className="text-blue-600 underline" href="https://ui.shadcn.com/docs">www.ui.shadcn.com</Link>
          </li>
          <li>
            Next.js : <Link className="text-blue-600 underline" href="https://nextjs.org/docs">www.nextjs.org</Link>
          </li>

        </ul>
      </div>
      <div>
        <h4 className="text-xl text-neutral-700 mt-4 mb-2">
          Recommended Videos
        </h4>
        <ul>
          <li>HTML - <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">link</Link></li>
          <li>CSS - <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">link</Link></li>
          <li>JavaScript - <Link href="https://javascript.info/">link</Link></li>
          <li>GSAP - <Link href="https://greensock.com/docs/">link</Link></li>
          <li>React - <Link href="https://react.dev/learn">link</Link></li>
          <li>Framer Motion - <Link href="https://www.framer.com/motion/">link</Link></li>
          <li>Barba.js - <Link href="https://barba.js.org/docs/getstarted/">link</Link></li>
          <li>TypeScript - <Link href="https://www.typescriptlang.org/docs/">link</Link></li>
          <li>ShadCN UI - <Link href="https://ui.shadcn.com/docs">link</Link></li>
          <li>Next.js - <Link href="https://nextjs.org/docs">link</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl text-neutral-700 mt-4 mb-2">
          Projects - For Biggeners
        </h4>
        <ul>
          <li>HTML - <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">link</Link></li>
          <li>CSS - <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">link</Link></li>
          <li>JavaScript - <Link href="https://javascript.info/">link</Link></li>
          <li>GSAP - <Link href="https://greensock.com/docs/">link</Link></li>
          <li>React - <Link href="https://react.dev/learn">link</Link></li>
          <li>Framer Motion - <Link href="https://www.framer.com/motion/">link</Link></li>
          <li>Barba.js - <Link href="https://barba.js.org/docs/getstarted/">link</Link></li>
          <li>TypeScript - <Link href="https://www.typescriptlang.org/docs/">link</Link></li>
          <li>ShadCN UI - <Link href="https://ui.shadcn.com/docs">link</Link></li>
          <li>Next.js - <Link href="https://nextjs.org/docs">link</Link></li>
        </ul>
      </div>
    </Main>
  )
}