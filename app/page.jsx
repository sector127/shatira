import Hero from "@/components/Hero";
import { anton } from "@/lib/fonts";
import ContactForm from "@/components/ContactForm";
import MyWork from "@/components/MyWork";
import BackToTopButton from "@/components/ui/BackToTopButton";
import SocialLinks from "@/components/SocialLinks";
import Me from "@/components/Me";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen max-w-screen-xl mx-auto flex-col items-center p-10 text-white ${anton.className}`}
    >
      <SocialLinks
        linkedin="https://www.linkedin.com/in/giorgi-shatirishvili-ba5224151/"
        github="https://github.com/sector127"
        twitter="https://twitter.com/sector127"
        instagram="https://www.instagram.com/shatirishviligiorgi/"
      />
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="flex flex-col flex-nowrap">
        <Me />
      </section>
      <section id="portfolio" className="flex flex-col flex-nowrap min-h-dvh">
        <MyWork />
      </section>
      <section id="contact" className="flex min-h-dvh justify-center w-full">
        <ContactForm />
      </section>
      <BackToTopButton />
    </main>
  );
}
