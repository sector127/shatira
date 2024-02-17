import Footer from "@/components/ui/Footer";
import { poppins } from "../lib/fonts";
import "./globals.css";
import Nav from "@/components/ui/Nav";

export const metadata = {
  title: "Shatira is Dev",
  description:
    "👨‍💻 Passionate Frontend Developer | JavaScript & React Expert | Full-Stack Proficiency with Node.js & MongoDB | Experienced in Next.js | Agile & Collaborative",
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
