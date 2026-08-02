"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA } from "@/data/projects";
import { WorkFilters } from "./WorkFilters";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard3D } from "./ProjectCard3D";

export function ProjectGrid() {
  const [category, setCategory] = useState<string>("ALL");

  const featured = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];

  const gridProjects = PROJECTS_DATA.filter((p) => {
    if (category === "ALL") return !p.featured;
    return p.category === category && !p.featured;
  });

  return (
    <section id="projects" className="relative w-full py-16 sm:py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* WORK FILTERS */}
        <WorkFilters
          activeCategory={category}
          onSelectCategory={(cat) => setCategory(cat)}
        />

        <div className="pt-12 sm:pt-16">
          {/* SHOW FEATURED PROJECT WHEN "ALL" IS SELECTED */}
          {category === "ALL" && (
            <FeaturedProject project={featured} />
          )}

          {/* MAIN 2-COLUMN PROJECT GRID */}
          {gridProjects.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-stretch"
            >
              <AnimatePresence>
                {gridProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard3D project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="py-16 text-center text-sm font-mono text-neutral-500">
              More work in this category is coming soon.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
