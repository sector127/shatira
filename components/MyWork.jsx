"use client";
import React, { useState } from "react";
import SectionHead from "./ui/SectionHead";
import WorkCard from "./ui/WorkCard";
import { projects } from "@/lib/projectsConstants";
import { Button } from "./ui/button";
import { XCircle } from "lucide-react";

const MyWork = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  const filteredProjects = projects.filter((project) => {
    return (
      selectedTags.length === 0 ||
      project.tags.some((tag) => selectedTags.includes(tag))
    );
  });

  return (
    <>
      <SectionHead title="My Work" />
      <div className="flex flex-col my-4 h-30">
        <p>Filter by Tags:</p>
        <div className="flex flex-row flex-wrap gap-2">
          {Array.from(new Set(projects.flatMap((project) => project.tags))).map(
            (tag) => (
              <Button
                key={tag}
                className={`rounded-none hover:bg-shatiraBorder ${
                  selectedTags.includes(tag)
                    ? "bg-shatiraBorder text-white"
                    : "bg-transparent"
                }`}
                onClick={() => handleTagClick(tag)}
              >
                #{tag}
              </Button>
            )
          )}
          {selectedTags.length > 0 && (
            <Button
              variant="outline"
              className="text-black"
              onClick={clearFilters}
            >
              Clear <XCircle className="ml-2" size={16} />
            </Button>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-between">
        {projects.map((project) => (
          <WorkCard
            name={project.name}
            description={project.description}
            image={project.image}
            live={project.live}
            repo={project.repo}
            key={project.name}
            tags={project.tags}
            dimmed={
              selectedTags.length > 0 &&
              !project.tags.some((tag) => selectedTags.includes(tag))
            }
            className={
              selectedTags.length > 0 &&
              !project.tags.some((tag) => selectedTags.includes(tag))
                ? "opacity-50"
                : ""
            }
            onTagClick={handleTagClick}
          />
        ))}
      </div>
    </>
  );
};

export default MyWork;
