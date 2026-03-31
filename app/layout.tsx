import Footer from "@/components/ui/Footer";
import { inconsolata } from "@/lib/fonts";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import CustomCursor from "@/components/ui/CustomCursor";
import { BootManager } from "@/components/ui/BootManager";
import { AudioController } from "@/components/ui/AudioController";
import { Providers } from "@/app/providers";
import { Metadata } from "next";

export const metadata: Metadata = {
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inconsolata.className}>
      <body>
        <Providers>
          <AudioController />
          <BootManager />
          <CustomCursor />
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
