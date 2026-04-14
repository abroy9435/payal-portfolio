"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors } from "@/utils/colors";
import { Project } from "@/utils/types";

export default function ProjectCard({ project }: { project: Project }) {
  const isLogo = project.tags.includes("LOGO DESIGN") || project.image.endsWith(".svg");

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="flex flex-col gap-6 p-8 md:p-10 rounded-[3rem] transition-all duration-300"
      style={{ backgroundColor: "#F3F0E9" }} 
    >
      {/* Image/Logo Container */}
      <div 
        className={`relative w-full aspect-[4/3] rounded-[2.2rem] overflow-hidden bg-[#F9F9F9] flex items-center justify-center ${isLogo ? 'p-16' : 'p-0'}`}
      >
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className={isLogo ? "object-contain" : "object-cover"}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 
          className="text-3xl md:text-4xl font-serif font-bold italic leading-tight" 
          style={{ color: colors.primaryRed }}
        >
          {project.title}
        </h3>
        
        <p 
          className="text-sm md:text-base leading-relaxed opacity-60 font-medium" 
          style={{ color: colors.darkCharcoal }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-6 py-2 rounded-xl text-[10px] font-bold tracking-[0.2em] uppercase text-white"
              style={{ backgroundColor: "rgba(122, 122, 122, 0.7)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}