import React from "react";
import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const SocialLinks = ({ linkedin, github, twitter, instagram }) => {
  return (
    <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2">
      <div className="flex flex-col bg-slate-950 bg-opacity-10 gap-8 px-3 py-8 border-slate-700 border-y border-l rounded-tl-md rounded-bl-md">
        {linkedin && (
          <Link
            href={linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white hover:text-blue-500"
          >
            <Linkedin size={24} />
          </Link>
        )}
        {github && (
          <Link
            href={github}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white hover:text-gray-800"
          >
            <Github size={24} />
          </Link>
        )}
        {twitter && (
          <Link
            href={twitter}
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white hover:text-blue-400"
          >
            <Twitter size={24} />
          </Link>
        )}
        {instagram && (
          <Link
            href={instagram}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white hover:text-pink-600"
          >
            <Instagram size={24} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default SocialLinks;
