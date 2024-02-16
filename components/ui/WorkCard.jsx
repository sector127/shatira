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
import { Dot, Github, Monitor, MonitorX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WorkCard = (props) => {
  return (
    <Card
      className={`relative max-w-md mx-auto max-h-60 bg-slate-950 bg-opacity-10 rounded-sm border-slate-900 flex flex-row justify-between transition-all duration-300 hover:-translate-y-0.5 ${
        props.dimmed ? "opacity-10" : ""
      }`}
    >
      <div className="relative rounded-l-sm w-64 h-48 overflow-hidden">
        <Image
          src={props.image}
          alt={props.name}
          fill
          priority
          sizes="(min-width: 100px) 120px, 100vw"
        />
      </div>
      <div className="flex flex-col">
        <CardHeader className="pt-2 pl-3 pb-0">
          <CardTitle className="text-white text-lg font-thin">
            {props.name}
          </CardTitle>
          <CardDescription className="text-sm">
            {props.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-3">
          <div className="hidden md:flex flex-wrap">
            {props.tags.map((tag) => (
              <p
                key={tag}
                className="mt-2 mr-2 text-blue-500 text-sm cursor-pointer hover:underline"
                onClick={() => props.onTagClick(tag)} // Add this line to handle tag clicks
              >
                #{tag}
              </p>
            ))}
          </div>
        </CardContent>
        <CardFooter className="absolute bottom-3 right-3 flex justify-end gap-2 m-0 p-0">
          {props.live === "#" ? (
            <Button className="cursor-not-allowed text-sm rounded-sm line-through">
              Live
              <MonitorX className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Link href={props.live} target="_blank">
              <Button variant="outline" className="rounded-sm" size="sm">
                Live
                <Monitor className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
          <Link href={props.repo} target="_blank">
            <Button
              size="sm"
              className="rounded-sm text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              Repo
              <Github className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default WorkCard;
