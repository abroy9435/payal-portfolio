"use client";
import { motion } from "framer-motion";
import { colors } from "@/utils/colors";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

export default function ContactSection() {
  const contactLinks = [
    {
      label: "Email",
      value: "payalpaulchoudhury20@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=payalpaulchoudhury20@gmail.com",
      showArrow: true,
      newTab: true,
    },
    {
      label: "Linkedin",
      value: "linkedin.com/payal-paul-choudhury",
      href: "https://www.linkedin.com/in/payal-paul-choudhury-832910303/",
      showArrow: true,
      newTab: true,
    },
    {
      label: "Download resume",
      value: <span className="text-2xl"><IoCloudDownloadOutline /></span>,
      href: "/assets/Payal_Resume.pdf", 
      download: true,
      showArrow: false,
      newTab: true,
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
        <div className="min-w-220 flex flex-col gap-4 md:gap-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.newTab ? "_blank" : undefined}
              rel={link.newTab ? "noopener noreferrer" : undefined}
              download={link.download}
              initial={{ opacity: 0, y: 20, backgroundColor: "#F3F0E9" }}
              whileInView={{ opacity: 1, y: 0 }}
              // Smooth background transition using Framer Motion
              whileHover={{ backgroundColor: colors.beigeHover }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { delay: index * 0.1, duration: 0.6 },
                y: { delay: index * 0.1, duration: 0.6 },
                backgroundColor: { duration: 0.3, ease: "easeOut" }
              }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between w-full px-8 py-7 rounded-[2rem] cursor-pointer shadow-sm"
            >
              <span 
                className="text-lg md:text-2xl font-medium"
                style={{ color: colors.primaryRed }}
              >
                {link.label}
              </span>
              
              <div className="flex items-center mt-2 md:mt-0">
                <span 
                  className="text-base md:text-2xl whitespace-nowrap"
                  style={{ color: colors.primaryRed }}
                >
                  {link.value}
                </span>
                
                {/* THE MAGIC TRICK: 
                  Starts at max-w-0 (hidden). On hover, it expands to max-w-[24px].
                  This expansion pushes the text to the left smoothly!
                */}
                {link.showArrow && (
                  <div className="overflow-hidden transition-all duration-300 max-w-0 opacity-0 group-hover:max-w-[24px] group-hover:opacity-100 group-hover:ml-2 flex items-center">
                    <FiArrowUpRight className="text-xl shrink-0" style={{ color: colors.primaryRed }} />
                  </div>
                )}
              </div>
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