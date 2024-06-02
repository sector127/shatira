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
        <div className="container mx-auto p-4">
            <SectionHead title="My Work" />
            <div className="my-6">
                <p className="text-lg font-semibold">Filter by Tags:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {Array.from(new Set(projects.flatMap((project) => project.tags))).map(
                        (tag) => (
                            <Button
                                key={tag}
                                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                                    selectedTags.includes(tag)
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-800"
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
                            className="text-black flex items-center px-4 py-2 rounded-full bg-red-200 text-red-800"
                            onClick={clearFilters}
                        >
                            Clear <XCircle className="ml-2" size={16} />
                        </Button>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
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
        </div>
    );
};

export default MyWork;
