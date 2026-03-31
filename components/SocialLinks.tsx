import React from "react";
import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

interface SocialLinksProps {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ linkedin, github, twitter, instagram }) => {
    return (
        <div className="hidden md:block fixed right-0 top-1/2 transform -translate-y-1/2 transition-all duration-500 hover:-translate-x-2 z-50">
            <div className="flex flex-col bg-background/50 backdrop-blur-lg shadow-xl gap-8 px-4 py-8 border-border border-y border-l rounded-tl-2xl rounded-bl-2xl">
                {linkedin && (
                    <Link
                        href={linkedin}
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-foreground transition-transform transform hover:scale-110 hover:text-blue-500"
                    >
                        <Linkedin size={28} className="drop-shadow-md" />
                    </Link>
                )}
                {github && (
                    <Link
                        href={github}
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-foreground transition-transform transform hover:scale-110 hover:text-primary"
                    >
                        <Github size={28} className="drop-shadow-md" />
                    </Link>
                )}
                {twitter && (
                    <Link
                        href={twitter}
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-foreground transition-transform transform hover:scale-110 hover:text-blue-400"
                    >
                        <Twitter size={28} className="drop-shadow-md" />
                    </Link>
                )}
                {instagram && (
                    <Link
                        href={instagram}
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-foreground transition-transform transform hover:scale-110 hover:text-pink-600"
                    >
                        <Instagram size={28} className="drop-shadow-md" />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default SocialLinks;
