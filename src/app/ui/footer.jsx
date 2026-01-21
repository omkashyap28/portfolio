import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6"


export default function Footer() {
  return (
    <footer className="w-full pb-18 relative">
      <div className="absolute top-0 -left-[58%] bg-linear-to-r from-transparent via-neutral-400 to-transparent h-px w-screen"></div>
      <div className="absolute bottom-0 -left-8 bg-linear-to-b from-transparent from-30% to-neutral-400 w-px h-screen"></div>
      <div className="absolute bottom-0 -right-8 bg-linear-to-b from-transparent from-30% to-neutral-400 w-px h-screen"></div>
      <div className="py-8 w-full">
        <div className="flex justify-between items-center">
          <Image
            src="/om-icon.png"
            alt="Footer Logo"
            height={46}
            width={46}
          />
          <div className="flex gap-6">
            <Link className="text-2xl text-neutral-800 social-links" target="black" href="https://www.instagram.com/omkashyap7484">
              <FaInstagram />
            </Link>
            <Link className="text-2xl text-neutral-800 social-links" target="black" href="https://www.linkedin.com/in/hari-om-kashyap-b176b63a5">
              <FaLinkedinIn />
            </Link>
            <Link className="text-2xl text-neutral-800 social-links" target="black" href="https://x.com/om_kashyap28">
              <FaXTwitter />
            </Link>
            <Link className="text-2xl text-neutral-800 social-links" target="black" href="https://github.com/omkashyap28">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}