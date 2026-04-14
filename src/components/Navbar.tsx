"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { colors } from "@/utils/colors";

export default function Navbar() {
  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full py-10 flex justify-center items-center gap-12 md:gap-20"
      style={{ backgroundColor: colors.bg }} // Matches the page background
    >
      {navLinks.map((link) => (
        <Link 
          key={link.name} 
          href={link.href}
          className="relative group transition-all duration-300"
        >
          <span 
            className="text-lg md:text-xl font-sans font-medium tracking-tight"
            style={{ color: colors.primaryRed }}
          >
            {link.name}
          </span>
          
          {/* Subtle animated underline on hover */}
          <span 
            className="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
            style={{ backgroundColor: colors.beigeHover }}
          />
        </Link>
      ))}
    </motion.nav>
  );
}