import Footer from "@/components/ui/Footer";
import { poppins } from "../lib/fonts";
import "./globals.css";
import Nav from "@/components/ui/Nav";

export const metadata = {
  title: "Shatira is Dev",
  description:
    "This is my personal portfolio, I'm web developer from Tbilisi, Georgia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-shatira">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
