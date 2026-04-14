"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors } from "@/utils/colors";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ backgroundColor: colors.bg }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h2
          className="text-4xl md:text-6xl font-serif italic"
          style={{ color: colors.primaryRed }}
        >
          Person Behind the Canvas
        </h2>
      </motion.div>

      {/* MAX WIDTH WRAPPER */}
      <div className="max-w-400 mx-auto">
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-[2.5rem] min-h-281 px- py-16 md:pl-14 lg:pl-20 flex flex-col lg:flex-row justify-between gap-10 overflow-hidden"
          style={{ backgroundColor: colors.primaryRed }}
        >
          {/* ================= LEFT ================= */}
          <div className="w-full lg:w-[38%] text-white space-y-2 relative -bottom-30 z-10">
            {/* Heading + Heart */}
            <div className="relative inline-block">
              <Image
                src="/assets/vectors/doodle3.svg"
                alt=""
                width={52}
                height={52}
                className="absolute -left-15 -top-3"
              />

              <h3 className="text-2xl lg:text-5xl font-semibold italic tracking-wide">
                UI/UX DESIGNER.
              </h3>

              {/* Arrow */}
              <Image
                src="/assets/vectors/doodle4.svg"
                alt=""
                width={380}
                height={300}
                className="hidden lg:block absolute -right-80 -top-8"
              />
            </div>

            <p className="text-xl lg:text-3xl font-medium leading-7.5 opacity-90 max-w-lg">
              I am a passionate product designer specializing in website design
              and mobile app design. I enjoy analyzing complex systems and
              translating them into clear, engaging interfaces. From organizing
              information to refining user flows and visual design, I aim to
              create interactions that are seamless and meaningful.
            </p>

            {/* Stamp */}
            <div className="w-80 h-80 relative -bottom-5 bg-white p-2 shadow-md mt-4">
              <Image
                src="/assets/images/lillystamp.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* ================= CENTER IMAGE ================= */}
          <div className="absolute left-180 bottom-0 -translate-x-1/2 w-115 md:w-130 lg:w-215 h-130 md:h-185 lg:h-200 z-0 pointer-events-none">
            <Image
              src="/assets/images/cutout.png"
              alt=""
              fill
              className="object-contain object-bottom"
            />
          </div>

          {/* ================= RIGHT ================= */}
          <div className="w-full lg:w-[38%] text-white space-y-2 relative -bottom-40 -right-6 z-10 lg:pl-10">
            {/* Top images */}
            <div className="flex relative -right-5 -bottom-2 gap-4">
              <div className="w-45 h-48 mx-4 relative bg-white p-1 shadow-md">
                <Image
                  src="/assets/images/hibiscous.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-45 h-48 relative bg-white p-1 shadow-md">
                <Image
                  src="/assets/images/bunny.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Heading + Stars */}
            <div className="relative inline-block mt-2">
              {/* Big Star */}
              <Image
                src="/assets/vectors/doodle5.svg"
                alt=""
                width={44}
                height={44}
                className="absolute -left-11 top-0.8"
              />

              {/* Small Star */}
              <Image
                src="/assets/vectors/doodle6.svg"
                alt=""
                width={24}
                height={24}
                className="absolute -left-2 -top-10"
              />

              <h3 className="text-2xl lg:text-5xl font-semibold px-2 italic tracking-wide">
                DATA ANALYST
              </h3>
            </div>

            <p className="text-sm lg:text-3xl leading-7.5 font-medium opacity-90 max-w-lg">
              I am a detail-oriented data analyst dedicated to transforming
              complex datasets into clear, actionable narratives. I specialize in
              uncovering patterns and translating technical findings into
              strategic insights that drive informed decision-making. From
              architecting data models to visual storytelling, I aim to create
              analytical experiences that are both precise and impactful.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}