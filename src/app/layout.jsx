import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "./components";
import { Navbar, Cursor } from "./ui";
import { ReactLenis } from "lenis/react";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Hariom Kashyap",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        className={`${inter.className} bg-neutral-100 antialiased selection:bg-neutral-900 selection:text-neutral-100`}
      >
        <>
          <ReactLenis root />
          <Container>
            <Navbar />
            <Cursor />
            {children}
          </Container>
        </>
      </body>
    </html>
  );
}
