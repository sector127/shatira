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
          className={`relative w-full md:w-auto bg-slate-900 bg-opacity-50 rounded-xl border-none overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ${
              props.dimmed ? "opacity-50" : ""
          }`}
          // style={{
          //   backdropFilter: "blur(10px)",
          // }}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
              src={props.image}
              alt={props.name}
              width={300}
              height={200}
              style={{ objectFit: "cover" }}
              className="object-cover w-full h-full transition-all duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        </div>
        <div className="flex flex-col justify-between p-6">
          <div>
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-2xl font-semibold tracking-wide">
                {props.name}
              </CardTitle>
              <CardDescription className="text-gray-300 text-base font-light">
                {props.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="py-2">
              <div className="flex flex-wrap gap-2">
                {props.tags.map((tag) => (
                    <span
                        key={tag}
                        className="mt-1 px-2 py-1 text-white text-xs rounded-full cursor-pointer hover:opacity-80"
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
                    className="cursor-not-allowed text-xs rounded-full line-through bg-gray-700"
                    disabled
                >
                  Live
                  <MonitorX className="ml-2 h-4 w-4" />
                </Button>
            ) : (
                <Link href={props.live} target="_blank">
                  <Button
                      variant="outline"
                      className="text-xs rounded-xl border border-gray-600 hover:opacity-75"
                      size="sm"
                  >
                    Live
                    <Monitor className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
            )}
            <Link href={props.repo} target="_blank">
              <Button
                  size="sm"
                  className="text-xs rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-80"
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
