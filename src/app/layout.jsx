import { Inter } from "next/font/google";
import "./globals.css";
import { Blur, Container } from "./components";
import { Navbar, Cursor } from "./ui";
import { ReactLenis } from "lenis/react";
import { Footer } from "./ui";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Hariom Kashyap - Full Stack web developer",
  description: "I create scalable full stack applications for web",
};

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        className={`${inter.className} bg-neutral-100 antialiased selection:bg-neutral-900 selection:text-neutral-100`}
      >
        <>
          <ReactLenis options={{
            smoothWheel: true,
            duration: 1,
            easing: "easeOutExpo"
          }} root />
          <Container>
            <Navbar />
            {children}
            <Blur />
            <Footer />
          </Container>
        </>
      </body>
    </html>
  );
}
