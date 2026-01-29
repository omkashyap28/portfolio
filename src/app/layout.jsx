import { Inter } from "next/font/google";
import "./globals.css";
import { Blur, Container } from "./components";
import { Navbar, Cursor } from "./ui";
import { Footer } from "./ui";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Hariom Kashyap - Full Stack web developer",
  description: "I create scalable full stack applications for web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        className={`${inter.className} bg-neutral-50 antialiased selection:bg-neutral-900 selection:text-neutral-50`}
      >
        <div>
          <Navbar />
          {children}
          <Blur />
          <Footer />
        </div>
      </body>
    </html >
  );
}
