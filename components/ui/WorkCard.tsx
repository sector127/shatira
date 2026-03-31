"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./button";
import { Monitor, MonitorX, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface WorkCardProps {
  name: string;
  description: string;
  image: string;
  live: string;
  repo: string;
  tags: string[];
  dimmed?: boolean;
  className?: string;
  onTagClick: (tag: string) => void;
}

const WorkCard: React.FC<WorkCardProps> = ({
  name,
  description,
  image,
  live,
  repo,
  tags,
  dimmed,
  className,
  onTagClick,
}) => {
  return (
    <Card
      className={`brutal-card group flex flex-col h-full bg-card p-0 rounded-none overflow-hidden ${
        dimmed ? "opacity-30 grayscale pointer-events-none" : "opacity-100"
      } ${className}`}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={600}
          height={400}
          className="object-cover w-full h-full grayscale opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 group-hover:saturate-150 group-hover:contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 flex gap-2 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
           <Link href={repo} target="_blank" className="p-2 bg-primary border-2 border-foreground shadow-[2px_2px_0px_0px_var(--foreground)] text-black hover:translate-x-[2px] hover:translate-y-[2px] transition-transform">
              <Github size={18} />
           </Link>
           {live !== "#" && (
             <Link href={live} target="_blank" className="p-2 bg-primary border-2 border-foreground shadow-[2px_2px_0px_0px_var(--foreground)] text-black hover:translate-x-[2px] hover:translate-y-[2px] transition-transform">
                <ExternalLink size={18} />
             </Link>
           )}
        </div>
      </div>

      <div className="flex border-t-2 border-foreground flex-col flex-grow p-6">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {name}
          </CardTitle>
          <CardDescription className="text-muted-foreground line-clamp-2 mt-2 font-light leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-0 flex-grow">
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-card text-foreground border-2 border-foreground shadow-[2px_2px_0px_0px_var(--primary)] hover:bg-primary hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer"
                onClick={() => onTagClick(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-0 pt-6 mt-auto flex justify-between items-center bg-transparent gap-4">
          <div className="flex gap-4 w-full">
            {live === "#" ? (
              <Button
                variant="outline"
                className="flex-1 cursor-not-allowed opacity-50 text-xs shadow-none border-dashed"
                disabled
              >
                PRIVATE <MonitorX className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Link href={live} target="_blank" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full text-xs h-12"
                >
                  LIVE DEMO <Monitor className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
            <Link href={repo} target="_blank" className="flex-1">
              <Button
                className="w-full text-xs h-12"
              >
                SOURCE <Github className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default WorkCard;
