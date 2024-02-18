import Footer from "@/components/ui/Footer";
import { poppins } from "../lib/fonts";
import "./globals.css";
import Nav from "@/components/ui/Nav";

export const metadata = {
  title: "Shatira is Dev",
  description:
    "👨‍💻 Passionate Frontend Developer | JavaScript & React Expert | Full-Stack Proficiency with Node.js & MongoDB | Experienced in Next.js | Agile & Collaborative",
  metadataBase: new URL("https://shatira.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Shatira is Dev",
    description:
      "👨‍💻 Passionate Frontend Developer | JavaScript & React Expert | Full-Stack Proficiency with Node.js & MongoDB | Experienced in Next.js | Agile & Collaborative",
    url: "https://shatira.dev",
    siteName: "Shatira.dev",
    images: [
      {
        url: "/assets/images/og-img.png", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
