"use client";
import Image from "next/image";
import { colors } from "@/utils/colors";
import { Project } from "@/utils/types";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectCard({ project }: { project: Project }) {
  const isLogo = project.tags.includes("LOGO DESIGN") || project.image.endsWith(".svg");

  return (
    <div 
      // Removed motion.div and whileHover. Kept the 'group' class to trigger child animations.
      className="group flex flex-col cursor-pointer gap-6 p-8 md:p-10 rounded-[3rem] transition-all duration-300"
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
          // ADDED: transition-transform and group-hover:scale-105 for the smooth image zoom
          className={`${isLogo ? "object-contain" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-105`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-4">
        <h3 
          className="text-3xl md:text-4xl font-serif font-bold italic leading-tight" 
          style={{ color: colors.primaryRed }}
        >
          {project.title}
        </h3>
        
        <p 
          className="text-sm md:text-base leading-relaxed opacity-60 font-medium min-h-[4rem]" 
          style={{ color: colors.darkCharcoal }}
        >
          {project.description}
        </p>

        {/* Tags & Animated Arrow Container */}
        <div className="flex items-center justify-between mt-4">
          
          {/* Left Side: Tags */}
          <div className="flex flex-wrap gap-2">
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

          {/* Right Side: Animated Hover Arrow */}
          <div 
            className="flex items-center justify-center w-12 h-12 rounded-full opacity-0 -translate-x-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 shrink-0"
            style={{ backgroundColor: colors.darkCharcoal, color: colors.bg }}
          >
            <FiArrowRight className="text-xl" />
          </div>
          
        </div>
      </div>
    </div>
  );
}