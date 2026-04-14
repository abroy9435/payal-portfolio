"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors } from "@/utils/colors";

export default function Hero() {
  return (
    <section 
      className="relative flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-10 md:px-20 lg:px-32 py-20"
      style={{ backgroundColor: colors.bg }}
    >
      
      {/* LEFT: hi, I'm Payal */}
      <motion.div 
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 flex flex-col items-end md:items-start text-right md:text-left z-10"
      >
        <div style={{ color: colors.primaryRed }}>
          <span className="text-xl md:text-2xl font-sans block mb-[-10px] ml-1">hi, I'm</span>
          <h1 className="font-serif italic text-7xl md:text-9xl leading-none">
            Payal
          </h1>
        </div>
      </motion.div>

      {/* CENTER: Image & Doodles */}
      <div className="relative mx-10 md:mx-20">
        
        {/* Doodle 1: Top Right Sparkle */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
          className="absolute -top-10 -right-12 w-24 h-24 z-20"
        >
          <Image src="/assets/vectors/doodle1.svg" alt="" fill className="object-contain" />
        </motion.div>

        {/* The Frame */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-[280px] h-[380px] md:w-[350px] md:h-[480px] rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10"
          style={{ border: `4px solid white` }}
        >
          <Image 
            src="/assets/images/profile.jpg" 
            alt="Payal" 
            fill 
            className="object-cover" 
            priority 
          />
        </motion.div>

        {/* Doodle 2: Bottom Left Star */}
        <motion.div 
          initial={{ scale: 0, opacity: 0, rotate: -45 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ delay: 1, type: "spring" }}
          className="absolute -bottom-8 -left-10 w-20 h-20 z-20"
        >
          <Image src="/assets/vectors/doodle2.svg" alt="" fill className="object-contain" />
        </motion.div>
      </div>

      {/* RIGHT: Title */}
      <motion.div 
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex-1 text-center md:text-left z-10"
      >
        <h2 className="text-4xl md:text-6xl font-sans font-medium leading-[1.1]">
          <span style={{ color: colors.primaryRed }}>Product designer</span>
          <br /> 
          <span style={{ color: colors.darkCharcoal, opacity: 0.6 }} className="font-light">
            and Data Analyst
          </span>
        </h2>
      </motion.div>
      
    </section>
  );
}