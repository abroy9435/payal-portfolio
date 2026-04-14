"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors } from "@/utils/colors";
import ProjectCard from "./ProjectCard";
import { Project } from "@/utils/types";

const projects: Project[] = [
  {
    id: "1",
    title: "Cee Mock Test",
    description: "Designed a CEE mock test platform with structured test flows and responsive UI. Implemented user-friendly interfaces to enhance practice efficiency and exam readiness.",
    image: "/assets/images/cee.png",
    tags: ["UI/UX"]
  },
  {
    id: "2",
    title: "SafeNet",
    description: "Designed an intuitive, high-stakes interface prioritizing speed and accessibility, featuring one-tap triggers, voice-activated SOS, and a 'Fake Call' safety mode.",
    image: "/assets/images/safenet.png",
    tags: ["UI/UX"]
  },
  {
    id: "3",
    title: "The Digital Atelier",
    description: "Designing a sophisticated fashion storefront that prioritizes high-resolution visual storytelling and a 'visual-first' hierarchy.",
    image: "/assets/images/atelier.png",
    tags: ["UI/UX"]
  },
  {
    id: "4",
    title: "CEE compass Logo",
    description: "Designed the logo for CEE compass, a college predictor website that predicts your probable college based on rank of Assam's largest engineering exam (CEE).",
    image: "/assets/vectors/ceecompass.svg",
    tags: ["LOGO DESIGN"]
  }
];

export default function ProjectsSection() {
  const folders = ["Cee Mock Test", "SafeNet", "The Digital Atelier"];

  return (
    <section 
      id="projects" 
      className="py-32 px-6 md:px-20 lg:px-40"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="text-center mb-24 flex flex-col items-center gap-6">
        <h2 
          className="text-6xl md:text-7xl font-serif italic" 
          style={{ color: colors.primaryRed }}
        >
          Designs in action
        </h2>
        <p 
          className="max-w-170 text-lg md:text-2xl opacity-50 italic tracking-wide"
          style={{ color: colors.primaryRed }}
        >
          Designing experiences that are simple, intuitive, and meaningful
        </p>
      </div>

      {/* Increased Folder Sizes here */}
      <div className="flex justify-center gap-12 md:gap-28 mb-40">
        {folders.map((f) => (
          <div key={f} className="flex flex-col items-center gap-5 group cursor-pointer">
            <div className="relative w-20 h-20 md:w-50 md:h-50 opacity-80 transition-all group-hover:opacity-100 group-hover:scale-110">
              <Image 
                src="/assets/vectors/folder.svg" 
                alt="folder" 
                fill 
                className="object-contain"
              />
            </div>
            <span 
              className="text-[10px] md:text-lg font-medium uppercase text-center leading-tight"
              style={{ color: colors.primaryRed }}
            >
              {f}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}