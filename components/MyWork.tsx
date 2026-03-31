"use client";
import React, { useState, useMemo } from "react";
import SectionHead from "./ui/SectionHead";
import WorkCard from "./ui/WorkCard";
import { projects } from "@/lib/projectsConstants";
import { Button } from "./ui/button";
import { XCircle, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MyWork = () => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const allTags = useMemo(() => {
        return Array.from(new Set(projects.flatMap((project) => project.tags))).sort();
    }, []);

    const handleTagClick = (tag: string) => {
        setSelectedTags(prev => 
            prev.includes(tag) 
                ? prev.filter(t => t !== tag) 
                : [...prev, tag]
        );
    };

    const clearFilters = () => {
        setSelectedTags([]);
    };

    const filteredProjects = projects.map((project) => ({
        ...project,
        isMatched: selectedTags.length === 0 || project.tags.some((tag) => selectedTags.includes(tag))
    }));

    return (
        <section id="portfolio" className="container mx-auto px-4 py-20 overflow-hidden">
            <SectionHead title="My Work" />
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <div className="flex items-center gap-2 mb-6 text-muted-foreground uppercase tracking-widest text-xs font-bold">
                    <Filter size={14} />
                    <span>Filter by technology</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                        <Button
                            key={tag}
                            size="sm"
                            className={`rounded-none px-4 border-2 border-foreground transition-all duration-300 font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_var(--foreground)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ${
                                selectedTags.includes(tag)
                                    ? "bg-primary text-black"
                                    : "bg-background text-foreground hover:bg-primary hover:text-black"
                            }`}
                            onClick={() => handleTagClick(tag)}
                        >
                            #{tag}
                        </Button>
                    ))}
                    
                    <AnimatePresence>
                        {selectedTags.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                            >
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex items-center gap-2 text-destructive border-2 border-destructive hover:bg-destructive hover:text-white rounded-none px-4 uppercase tracking-wider font-bold shadow-[2px_2px_0px_0px_hsl(var(--destructive))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                                    onClick={clearFilters}
                                >
                                    Clear All <XCircle size={14} />
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 work__card">
                {filteredProjects.map((project) => (
                    <motion.div
                        layout
                        key={project.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <WorkCard
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            live={project.live}
                            repo={project.repo}
                            tags={project.tags}
                            dimmed={selectedTags.length > 0 && !project.isMatched}
                            onTagClick={handleTagClick}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MyWork;
