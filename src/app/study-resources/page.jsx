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
        <ul className="list-disc">
          <li className="ml-8">
            HTML : <Link className="text-blue-600 underline" href="https://developer.mozilla.org/en-US/docs/Web/HTML">www.developer.mozilla.org</Link>
          </li>
          <li className="ml-8">
            CSS : <Link className="text-blue-600 underline" href="https://developer.mozilla.org/en-US/docs/Web/CSS">www.developer.mozilla.org</Link>
          </li>
          <li className="ml-8">
            JavaScript : <Link className="text-blue-600 underline" href="https://javascript.info/">www.javascript.info</Link>
          </li>
          <li className="ml-8">
            GSAP : <Link className="text-blue-600 underline" href="https://greensock.com/docs/">www.greensock.com</Link>
          </li>
          <li className="ml-8">
            React : <Link className="text-blue-600 underline" href="https://react.dev/learn">www.react.dev</Link>
          </li>
          <li className="ml-8">
            Framer Motion : <Link className="text-blue-600 underline" href="https://www.framer.com/motion/">www.framer.com</Link>
          </li>
          <li className="ml-8">
            Barba.js : <Link className="text-blue-600 underline" href="https://barba.js.org/docs/getstarted/">www.barba.js.org</Link>
          </li>
          <li className="ml-8">
            TypeScript : <Link className="text-blue-600 underline" href="https://www.typescriptlang.org/docs/">www.typescriptlang.org</Link>
          </li>
          <li className="ml-8">
            ShadCN UI : <Link className="text-blue-600 underline" href="https://ui.shadcn.com/docs">www.ui.shadcn.com</Link>
          </li>
          <li className="ml-8">
            Next.js : <Link className="text-blue-600 underline" href="https://nextjs.org/docs">www.nextjs.org</Link>
          </li>

        </ul>
      </div>
      <div>
        <h4 className="text-xl text-neutral-700 mt-4 mb-2">
          Projects
        </h4>
        <h5 className="my-2 text-lg">
          Bigginers
        </h5>
        <ul className="list-disc">
          <li className="ml-8">To-Do App</li>
          <li className="ml-8">Weather App</li>
          <li className="ml-8">Calculator</li>
          <li className="ml-8">Quiz App</li>
          <li className="ml-8">News App</li>
        </ul>
        <h5 className="my-2 text-lg">
          Intermediate
        </h5>
        <ul className="list-disc">
          <li className="ml-8">Blog App</li>
          <li className="ml-8">E-Commerce</li>
          <li className="ml-8">Chat App</li>
          <li className="ml-8">Portfolio</li>
        </ul>
        <h5 className="my-2 text-lg">
          Advance
        </h5>
        <ul className="list-disc">
          <li className="ml-8">Advance E-Commerce</li>
          <li className="ml-8">Learning Management Site</li>
          <li className="ml-8">Youtube Clone</li>
          <li className="ml-8">Social Media</li>
        </ul>
      </div>
    </Main >
  )
}