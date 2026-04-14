"use client";
import { motion } from "framer-motion";
import { colors } from "@/utils/colors";
import { 
  SiFigma, SiC, SiFramer, SiHtml5, 
  SiJavascript, SiCss, SiPython 
} from "react-icons/si";
import { FaDatabase, FaAward, FaLightbulb, FaChartSimple } from "react-icons/fa6"; 

const certifications = [
  { title: "Google UX Design Professional Certificate - Google", icon: <FaAward /> },
  { title: "Python for Data Science, AI and Development - IBM", icon: <FaLightbulb /> },
  { title: "Data Analytics with Python - NPTEL", icon: <FaAward /> },
  { title: "HackVita 4.0 Winning Certificate - Hackathon", icon: <FaAward /> },
];

const techStack = [
  { icon: <SiFigma />, color: "#F24E1E", name: "Figma" },
  { icon: <SiC />, color: "#A8B9CC", name: "C" },
  { icon: <SiFramer />, color: "#0055FF", name: "Framer" },
  { icon: <SiHtml5 />, color: "#E34F26", name: "HTML5" },
  { icon: <SiJavascript />, color: "#F7DF1E", name: "JavaScript" },
  { icon: <SiCss />, color: "#1572B6", name: "CSS" }, 
  { icon: <SiPython />, color: "#3776AB", name: "Python" },
  { icon: <FaChartSimple />, color: "#F2C811", name: "PowerBI" }, 
  { icon: <FaDatabase />, color: "#336791", name: "SQL" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 lg:px-40" style={{ backgroundColor: colors.bg }}>
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 
          className="text-4xl md:text-5xl font-serif font-bold italic"
          style={{ color: colors.primaryRed }}
        >
          Skills and Certifications
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">
        
        {/* Left Column: Certifications */}
        <div className="flex-1 w-full flex flex-col gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              // Increased padding (py-6) to make the pills thicker like the design
              className="flex items-center gap-5 px-8 py-5 md:py-6 rounded-full transition-all hover:scale-[1.02]"
              style={{ backgroundColor: "#F3F0E9" }} 
            >
              <div className="text-2xl opacity-60" style={{ color: colors.darkCharcoal }}>
                {cert.icon}
              </div>
              <p 
                className="text-sm md:text-base font-medium opacity-80"
                style={{ color: colors.darkCharcoal }}
              >
                {cert.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Tech Stack Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // Increased outer padding to give the grid more breathing room
          className="flex-shrink-0 bg-[#F3F0E9] p-10 md:p-14 rounded-[3rem] shadow-sm"
        >
          {/* Increased gap between icons */}
          <div className="grid grid-cols-3 gap-8 md:gap-10">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                // Significantly increased width/height of the white tiles (w-24 h-24 on desktop)
                className="flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-white rounded-3xl shadow-sm transition-transform hover:scale-110 cursor-pointer"
                title={tech.name}
              >
                <div 
                  // Increased icon size to fill the larger tiles nicely
                  className="text-3xl md:text-5xl"
                  style={{ color: tech.color }} 
                >
                  {tech.icon}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}