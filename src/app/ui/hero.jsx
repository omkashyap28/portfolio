import Link from "next/link";
import { techStacks, additionalTechStacks } from "../../../constants";
import { GitHubCalendar } from "react-github-calendar";
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6"

export default function Hero() {

  return (
    <div className="min-h-screen">
      <div className="mt-24 w-full">
        <div>
          <h2 className="text-xl neutral-800">
            Hey, I am Hariom Kashyap
          </h2>
          <h1 className="flex flex-wrap items-center gap-3 text-4xl text-shadow-sm my-1">
            Developes esthatic
            <div className="overflow-hidden h-14 rounded-md bg-black ring-1 ring-black/40 shadow-lg text-neutral-100 px-4 py-2">
              Stand alone
            </div>
            web experiences
          </h1>
          <p className="text-lg text-neutral-600 max-w-lg">
            A full-stack developer with strongly addicted for building high-quality, scalable applications.
          </p>
        </div>

        <div className="my-5 flex items-center gap-5">
          <Link className="text-2xl text-neutral-800 social-links" href="">
            <FaInstagram />
          </Link>
          <Link className="text-2xl text-neutral-800 social-links" href="">
            <FaLinkedinIn />
          </Link>
          <Link className="text-2xl text-neutral-800 social-links" href="">
            <FaXTwitter />
          </Link>
          <Link className="text-2xl text-neutral-800 social-links" href="">
            <FaGithub />
          </Link>
        </div>

        <div className="mt-18">
          <h2 className="text-3xl font-semibold">
            Tech Stacks
          </h2>
          <div className="mt-2">
            <div className="flex flex-wrap gap-3 w-full py-3">
              {
                techStacks.map(({ id, name, url }) => (
                  <div className="h-8 w-8 rounded-md bg-gray-500" key={id}></div>
                ))
              }
            </div>
          </div>
          <h3 className="text-xl font-regular">
            Additionals
          </h3>
          <div className="flex flex-wrap gap-3 w-full py-3">
            {
              additionalTechStacks.map(({ id, name, url }) => (
                <div className="relative group h-8 w-8 rounded-md bg-gray-500" key={id}></div>
              ))
            }
          </div>
        </div>
        <div className="w-full mt-6">
          <GitHubCalendar blockSize={16} errorMessage="" colorScheme="dark" blockRadius={2} blockMargin={3} username="omkashyap28" />
        </div>
      </div>
    </div>
  );
}