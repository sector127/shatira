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
import { Monitor, MonitorX, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WorkCard = (props) => {
  return (
      <Card
          className={`relative w-full md:w-auto bg-slate-900 bg-opacity-10 rounded-lg border-slate-800 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
              props.dimmed ? "opacity-50" : ""
          }`}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
              src={props.image}
              alt={props.name}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between p-4">
          <div>
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-xl font-extralight">
                {props.name}
              </CardTitle>
              <CardDescription className="text-gray-300 text-sm">
                {props.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="py-2">
              <div className="flex flex-wrap gap-2">
                {props.tags.map((tag) => (
                    <span
                        key={tag}
                        className="mt-1 px-2 py-1 bg-blue-500 text-white text-xs rounded cursor-pointer hover:bg-blue-600"
                        onClick={() => props.onTagClick(tag)}
                    >
                  #{tag}
                </span>
                ))}
              </div>
            </CardContent>
          </div>
          <CardFooter className="flex justify-end gap-2 pt-4">
            {props.live === "#" ? (
                <Button
                    className="cursor-not-allowed text-xs rounded-sm line-through bg-gray-700"
                    disabled
                >
                  Live
                  <MonitorX className="ml-2 h-4 w-4" />
                </Button>
            ) : (
                <Link href={props.live} target="_blank">
                  <Button variant="outline" className="text-xs rounded-sm" size="sm">
                    Live
                    <Monitor className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
            )}
            <Link href={props.repo} target="_blank">
              <Button
                  size="sm"
                  className="text-xs rounded-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
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
