import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaGithub, FaEnvelope } from "react-icons/fa6"
import { Heading3 } from "../components";

export default function Footer() {
  return (
    <footer className="w-full pb-18 mt-12">
      <div className="py-8 w-full">
        <div className="flex justify-center items-center">
          <div className="flex gap-6">
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