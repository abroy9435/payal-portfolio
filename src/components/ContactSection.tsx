"use client";
import { motion } from "framer-motion";
import { colors } from "@/utils/colors";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function ContactSection() {
  const contactLinks = [
    {
      label: "Email",
      value: "payalpaulchoudhury20@gmail.com",
      href: "mailto:payalpaulchoudhury20@gmail.com",
    },
    {
      label: "Linkedin",
      value: "linkedin.com/payal-paul-choudhury",
      href: "https://linkedin.com/in/payal-paul-choudhury", // Make sure to link to her actual profile
    },
    {
        label: "Download resume",
        // We wrap it in a span to keep TypeScript happy!
        value: <span className="text-2xl"><IoCloudDownloadOutline /></span>, 
        href: "/assets/Payal_Resume.pdf", 
        download: true,
      },
  ];

  return (
    <section 
      id="contact" 
      className="relative pt-32 flex flex-col justify-between min-h-[60vh]" 
      style={{ backgroundColor: colors.bg }}
    >
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center px-6 md:px-20 w-full max-w-4xl mx-auto pb-24">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 
            className="text-5xl md:text-6xl font-serif italic"
            style={{ color: colors.primaryRed }}
          >
            get in touch
          </h2>
        </motion.div>

        {/* Links List */}
        <div className="w-full flex flex-col gap-4 md:gap-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === "Linkedin" ? "_blank" : undefined}
              rel={link.label === "Linkedin" ? "noopener noreferrer" : undefined}
              download={link.download}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between w-full px-8 py-6 rounded-3xl transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md"
              style={{ backgroundColor: "#F3F0E9" }} // Light beige pill background
            >
              <span 
                className="text-lg md:text-xl font-medium"
                style={{ color: colors.primaryRed }}
              >
                {link.label}
              </span>
              
              <span 
                className="text-base md:text-lg mt-2 md:mt-0 transition-opacity group-hover:opacity-70"
                style={{ color: colors.primaryRed }}
              >
                {link.value}
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Solid Red Footer Band */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full py-5 text-center"
        style={{ backgroundColor: colors.primaryRed }}
      >
        <p className="text-sm md:text-base tracking-wide font-medium" style={{ color: colors.bg }}>
          portfolio 2026
        </p>
      </motion.div>

    </section>
  );
}