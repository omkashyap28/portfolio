import Link from "next/link";
import { EmailIcon, FigmaIcon, GithubIcon, InstagramIcon, LinkedInIcon, TwitterXIcon, } from "../icons";

export default function Footer() {
  return (
    <footer className="w-full pb-18 mt-12">
      <div className="py-8 w-full">
        <div className="flex justify-center items-center">
          <div className="flex gap-6">
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
        </div>
        <div>
          <p className="text-sm text-neutral-400 text-center mt-6">
            &copy; {new Date().getFullYear()} Hariom Kashyap. This template is open source.
          </p>
        </div>

      </div>
    </footer>
  );
}