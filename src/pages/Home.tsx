
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "motion/react";
import { ArrowRight, Heart, AlertTriangle, XCircle, ChevronRight, ShieldCheck, Users, Star, Microscope, Leaf, Calendar } from "lucide-react";

import { D, M, B, GOLD, EASE, GRAIN, STEPS, DOCTORS, STANDARDS, type Step } from "../lib/constants";
import { FadeUp, SlideIn, Rule, Tag, InputField } from "../components/ui/shared";
import { TeamSection } from "../components/home/TeamSection";
import { Transformation } from "../components/home/Transformation";
import { openWhatsApp } from "../lib/whatsapp";
export function Hero({ ready }: { ready: boolean }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const d = (base: number) => ready ? base : 999;

  return (
    <section ref={ref} className="relative h-screen bg-[#FAF6F0] flex flex-col justify-between overflow-hidden">
      {/* Cursive Signature Font Import */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        .font-signature {
          font-family: 'Great Vibes', cursive;
        }
      `}} />

      {/* --- BACKGROUNDS & OVERLAYS --- */}
      {/* Leaf Shadow Overlay (Desktop only) */}
      <svg className="absolute top-0 left-0 w-[400px] h-[400px] text-[#2C1810]/5 pointer-events-none z-10 select-none hidden md:block" viewBox="0 0 100 100" fill="currentColor">
        <defs>
          <filter id="leaf-blur">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
        </defs>
        <g filter="url(#leaf-blur)" opacity="0.45">
          <path d="M-10,-10 C 15,15, 20,35, 5,55 C -5,35, -5,10, -10,-10 Z" />
          <path d="M-10,-10 C 25,5, 45,15, 60,-5 C 40,-15, 15,-15, -10,-10 Z" />
          <path d="M-10,-10 C 10,5, 15,25, 25,35 C 15,25, 5,10, -10,-10 Z" />
          <path d="M10,25 C 25,35, 30,55, 15,75 C 5,55, 5,30, 10,25 Z" />
        </g>
      </svg>

      {/* Mobile Background Image */}
      <motion.img
        src="/hero/main banner mob8.webp"
        alt="Dr. Ruxana K"
        initial={{ opacity: 0, scale: 1.05, y: 20 }}
        animate={ready ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: d(0.2), ease: EASE }}
        className="absolute inset-0 w-full h-full object-cover object-[68%_42%] pointer-events-none select-none z-0 block md:hidden"
      />

      {/* Background Image ( ivory style ) */}
      <motion.img
        src="/hero/main banner.webp"
        alt="Dr. Ruxana K"
        initial={{ opacity: 0, scale: 1.05, y: 20 }}
        animate={ready ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: d(0.2), ease: EASE }}
        className="absolute bottom-0 right-[-35%] sm:right-[-10%] lg:right-0 h-[75%] sm:h-[85%] md:h-[92%] w-auto max-w-none object-contain pointer-events-none select-none z-0 hidden md:block"
      />

      {/* Gradients */}
      <div
        className="absolute inset-0 hidden lg:block pointer-events-none z-10"
        style={{ background: "linear-gradient(to right, #FAF6F0 0%, #FAF6F0 25%, rgba(250,246,240,0.8) 40%, rgba(250,246,240,0) 55%)" }}
      />
      <div
        className="absolute inset-0 block lg:hidden pointer-events-none z-10"
        style={{ background: "linear-gradient(to right, #FAF6F0 0%, rgba(250,246,240,0.6) 15%, rgba(250,246,240,0) 35%)" }}
      />



      {/* Bottom Blender Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #FAF6F0 0%, rgba(250,246,240,0) 100%)" }}
      />

      {/* Grain Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.015]"
        style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />


      {/* --- DESKTOP CONTENT --- */}
      <div className="max-w-7xl mx-auto w-full relative z-20 hidden md:flex flex-col justify-between px-6 md:px-16 lg:px-24 pt-20 pb-6 flex-1">
        {/* Single Left Column: Text & Features */}
        <div className="flex flex-col justify-center flex-1 max-w-2xl">
          {/* Gold Tag */}
          <motion.div
            className="flex items-center gap-1.5 text-[#C9956A] text-[10px] sm:text-xs tracking-[0.25em] font-semibold uppercase mb-4"
            style={M}
            initial={{ opacity: 0, x: -16 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: d(0.2) }}
          >
            ✦ Expert-Led • Ethical • Personalized
          </motion.div>

          {/* Heading */}
          <h1 className="text-[#2C1810] text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.05] mb-4 font-light" style={D}>
            {["Where Science", "Enhances You."].map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.span
                  className={`block ${i === 1 ? "serif  text-[#C9956A]" : ""}`}
                  initial={{ y: "105%" }}
                  animate={ready ? { y: 0 } : {}}
                  transition={{ duration: 1.0, delay: d(0.35 + i * 0.15), ease: EASE }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </h1>

          {/* Decorative line with Diamond */}
          <motion.div
            className="flex items-center gap-4 my-2 w-full max-w-sm"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={ready ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: d(0.7) }}
          >
            <div className="h-[1px] bg-[#2C1810]/10 flex-1" />
            <span className="text-[#C9956A] text-xs">✦</span>
            <div className="h-[1px] bg-[#2C1810]/10 flex-1" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-[#5C4A42] text-base md:text-lg leading-relaxed max-w-md mb-5 font-light"
            style={B}
            initial={{ opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: d(0.85) }}
          >
            Cosmetic care that's honest, safe,<br />
            and designed around you.
          </motion.p>

          {/* 4 Feature Badges Row */}
          <motion.div
            className="flex flex-wrap sm:flex-nowrap items-stretch justify-between w-full max-w-xl mb-6 pt-4 border-t border-[#2C1810]/5 gap-4 sm:gap-0"
            initial={{ opacity: 0, y: 14 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: d(1.0) }}
          >
            {/* Feature 1 */}
            <div className="flex-1 flex flex-col items-start text-left">
              <div className="mb-2.5 shrink-0">
                <img src="/hero/icons/1.png" alt="Safe & Evidence Based" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-[9px] sm:text-[10px] text-[#2C1810]/85 font-semibold leading-tight uppercase tracking-wider" style={M}>Safe &<br />Evidence Based</span>
            </div>

            <div className="hidden sm:block w-[1px] bg-[#2C1810]/10 shrink-0 self-stretch my-1" />

            {/* Feature 2 */}
            <div className="flex-1 flex flex-col items-center text-center px-1 sm:px-2">
              <div className="mb-2.5 shrink-0">
                <img src="/hero/icons/2.png" alt="Natural Results" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-[9px] sm:text-[10px] text-[#2C1810]/85 font-semibold leading-tight uppercase tracking-wider" style={M}>Natural<br />Results</span>
            </div>

            <div className="hidden sm:block w-[1px] bg-[#2C1810]/10 shrink-0 self-stretch my-1" />

            {/* Feature 3 */}
            <div className="flex-1 flex flex-col items-center text-center px-1 sm:px-2">
              <div className="mb-2.5 shrink-0">
                <img src="/hero/icons/3.png" alt="Personalized Care" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-[9px] sm:text-[10px] text-[#2C1810]/85 font-semibold leading-tight uppercase tracking-wider" style={M}>Personalized<br />Care</span>
            </div>

            <div className="hidden sm:block w-[1px] bg-[#2C1810]/10 shrink-0 self-stretch my-1" />

            {/* Feature 4 */}
            <div className="flex-1 flex flex-col items-end text-right">
              <div className="mb-2.5 shrink-0">
                <img src="/hero/icons/4.png" alt="Holistic Approach" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-[9px] sm:text-[10px] text-[#2C1810]/85 font-semibold leading-tight uppercase tracking-wider" style={M}>Holistic<br />Approach</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-6 items-center"
            initial={{ opacity: 0, y: 14 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: d(1.2) }}
          >
            <motion.a
              href="https://wa.me/919495511628"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, backgroundColor: "#734A37", boxShadow: "0 12px 32px rgba(140,93,71,0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#8C5D47] text-[#FAF7F2] text-xs tracking-[0.22em] uppercase font-semibold transition-all rounded-xl shadow-lg"
              style={B}
            >
              Begin Your Journey <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>

        {/* Floating Glassmorphic Quote Card */}
        <motion.div
          className="absolute right-[22%] lg:right-[25%] xl:right-[28%] top-[28%] hidden lg:block max-w-[280px] xl:max-w-[310px] bg-white/75 backdrop-blur-md p-6 xl:p-8 rounded-[24px] shadow-[0_12px_40px_rgba(44,24,16,0.06)] border border-white/50 z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: d(1.1) }}
        >
          <span className="text-[#C9956A] text-6xl font-serif leading-none block absolute -top-4 left-3 select-none opacity-20">“</span>
          <p className="text-[#2C1810]/95 text-xs sm:text-sm leading-relaxed font-light mb-4 relative z-10" style={B}>
            Beauty is not about changing who you are, it's about bringing out the best version of you.
          </p>
          <p className="text-2xl text-[#C9956A] font-signature text-right pr-2">
            Dr. Ruxana K
          </p>
        </motion.div>

        {/* Bottom Section: Premium Stats Banner */}
        <motion.div
          className="relative overflow-hidden bg-white/60 backdrop-blur-md border border-[#2C1810]/10 rounded-[24px] p-5 md:p-7 w-full shadow-[0_8px_32px_rgba(44,24,16,0.04)]"
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: d(1.3) }}
        >
          {/* Detailed flower line art decoration on bottom right */}
          <svg className="absolute bottom-0 right-0 h-40 w-auto pointer-events-none opacity-25 text-[#C9956A]" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M120,120 C100,105 85,85 85,65 C85,45 100,30 120,20" />
            <path d="M120,120 C95,115 75,100 65,85 C55,70 60,50 75,35" />
            <path d="M120,120 C110,95 95,75 80,65 C65,55 50,60 35,75" />
            <path d="M85,65 C80,55 70,50 60,55 C50,60 45,70 50,80 C55,90 65,95 75,90" />
            <circle cx="65" cy="70" r="1.5" fill="currentColor" />
            <circle cx="80" cy="55" r="1" fill="currentColor" />
          </svg>

          {/* Stats grid using divide-x / divide-y lines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative z-10 divide-y md:divide-y-0 md:divide-x divide-[#2C1810]/10">
            {/* Stat 1 */}
            <div className="flex items-center gap-5 pb-6 md:pb-0 md:pr-8">
              <div className="w-16 h-16 rounded-full border border-[#2C1810]/15 flex items-center justify-center text-[#2C1810] shrink-0 text-xl font-medium font-serif bg-white/40 shadow-sm" style={D}>
                20+
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] tracking-[0.2em] text-[#C9956A] uppercase font-bold" style={M}>Years of Care</span>
                <span className="text-xs sm:text-sm text-[#5C4A42] font-light mt-0.5" style={B}>Trusted expertise you can rely on</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-5 pt-6 pb-6 md:py-0 md:px-8">
              <div className="w-16 h-16 rounded-full border border-[#2C1810]/15 flex items-center justify-center text-[#2C1810] shrink-0 text-lg font-medium font-serif bg-white/40 shadow-sm" style={D}>
                5,000+
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] tracking-[0.2em] text-[#C9956A] uppercase font-bold" style={M}>Transformations</span>
                <span className="text-xs sm:text-sm text-[#5C4A42] font-light mt-0.5" style={B}>Real people. Real confidence.</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-5 pt-6 md:pt-0 md:pl-8">
              <div className="w-16 h-16 rounded-full border border-[#2C1810]/15 flex items-center justify-center text-[#2C1810] shrink-0 bg-white/40 shadow-sm">
                <Users size={22} strokeWidth={1.2} className="text-[#2C1810]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] tracking-[0.2em] text-[#C9956A] uppercase font-bold" style={M}>5 Doctors On Your Side</span>
                <span className="text-xs sm:text-sm text-[#5C4A42] font-light mt-0.5" style={B}>A team that listens, understands & cares</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>


      {/* --- MOBILE CONTENT --- */}
      <motion.div className="relative z-20 flex md:hidden flex-col justify-between pt-26 pb-5 px-6 h-[100svh] w-full flex-1">
        <div className="flex flex-col relative z-20">
          <motion.p className="text-[#C9956A] text-[10px] tracking-[0.15em] uppercase mb-2 font-semibold" style={M}
            initial={{ opacity: 0, x: -16 }} animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: d(0.3) }}>
            ✦ Expert-Led • Skin • Hair • Aesthetics
          </motion.p>

          <h1 className="text-[#2C1810] text-[2.75rem] leading-[1.08] mb-3.5 font-light" style={D}>
            {["Beauty", "Feels", "At Home."].map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.span className={`block ${i === 1 ? "serif  text-[#C9956A]" : ""}`}
                  initial={{ y: "105%" }} animate={ready ? { y: 0 } : {}}
                  transition={{ duration: 1.0, delay: d(0.45 + i * 0.15), ease: EASE }}>
                  {word}
                </motion.span>
              </div>
            ))}
          </h1>

          <motion.div className="w-8 h-px bg-[#2C1810]/20 mb-3.5"
            initial={{ scaleX: 0 }} animate={ready ? { scaleX: 1 } : {}} transition={{ delay: d(0.9), duration: 0.8 }} />

          <motion.p className="text-[#5C4A42] text-sm leading-relaxed max-w-[280px] font-light" style={B}
            initial={{ opacity: 0, y: 18 }} animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: d(0.95) }}>
            Expert-led aesthetic medicine designed around confidence, care, and your most natural beauty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: d(1.05) }}
            className="mt-6"
          >
            <img src="/hero/sign.webp" alt="Dr. Ruxana K" className="h-12 w-auto object-contain brightness-0 opacity-70" />
            <p className="text-[#5C4A42]/80 text-[9px] tracking-[0.2em] uppercase mt-1.5 font-bold" style={M}>Founder</p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-3 mt-4 relative z-20">
          <motion.div className="bg-white/80 backdrop-blur-xl rounded-[20px] p-5 flex justify-between items-center border border-white/50 shadow-[0_8px_32px_rgba(44,24,16,0.06)] relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: d(1.2), duration: 0.8 }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent pointer-events-none" />
            {[{ n: "20+", l: "Years of Care", icon: <ShieldCheck size={20} strokeWidth={1.2} className="text-[#C9956A] mb-2 mx-auto" /> },
            { n: "5,000+", l: "Transformations", icon: <Users size={20} strokeWidth={1.2} className="text-[#C9956A] mb-2 mx-auto" /> },
            { n: "5", l: "Doctors", icon: <Star size={20} strokeWidth={1.2} className="text-[#C9956A] mb-2 mx-auto" /> }].map(({ n, l, icon }, i) => (
              <div key={l} className={`flex-1 text-center ${i !== 2 ? 'border-r border-[#2C1810]/5' : ''} relative z-10`}>
                {icon}
                <p className="text-[#2C1810] text-[16px] font-medium" style={D}>{n}</p>
                <p className="text-[#5C4A42]/80 text-[9px] tracking-[0.15em] mt-1 uppercase" style={B}>{l}</p>
              </div>
            ))}
          </motion.div>

          <motion.a href="https://wa.me/919495511628" target="_blank" rel="noopener noreferrer"
            whileTap={{ scale: 0.98 }}
            className="w-full py-4.5 h-[52px] bg-[#8C5D47] text-[#FAF7F2] text-[11px] tracking-[0.25em] uppercase rounded-[16px] flex items-center justify-center gap-2.5 font-semibold shadow-[0_12px_24px_rgba(140,93,71,0.25)] relative overflow-hidden group" style={B}
            initial={{ opacity: 0, y: 20 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: d(1.3), duration: 0.8 }}>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            Begin Your Journey <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export function Philosophy() {
  return (
    <section id="philosophy" className="pt-12 pb-6 md:pt-32 md:pb-12 px-6 md:px-16 lg:px-24 bg-[#FAF6F0] relative overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero/main banner 2.webp"
        alt="Philosophy Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 md:opacity-100 pointer-events-none select-none z-0 md:scale-[1.15] md:-translate-x-[6%] hidden md:block"
      />
      {/* Top Seam Blender Gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FAF6F0] via-[#FAF6F0]/80 to-transparent pointer-events-none z-10 hidden md:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeUp>
          <div className="flex flex-col items-start">
            <Tag>CHAPTER 02 — OUR PHILOSOPHY</Tag>
            <div className="h-px w-20 bg-[#8C5D47]/30 my-3 md:my-4" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 lg:gap-24 items-center mt-4 md:mt-6">
          {/* Left Column */}
          <div className="flex flex-col items-start text-left">
            <FadeUp delay={0.05}>
              <div className="relative inline-block mb-3.5 md:mb-5">
                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] text-[#2C1810] font-light" style={D}>
                  We don't<br />change <span className=" text-[#8C5D47]">faces.</span>
                </h2>
                {/* Small modern underline for mobile only */}
                <div className="h-[2px] w-12 bg-[#8C5D47] rounded-full mt-3 block md:hidden" />
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="hidden md:flex items-center gap-4 my-4 w-full max-w-sm">
                <div className="h-[1px] bg-[#2C1810]/10 flex-1" />
                <span className="text-[#8C5D47] text-xs">✦</span>
                <div className="h-[1px] bg-[#2C1810]/10 flex-1" />
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-xl sm:text-2xl text-[#2C1810] leading-snug mb-3 md:mb-5 font-light" style={D}>
                We help people feel<br />like <span className=" text-[#8C5D47]">themselves</span> again.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-base text-[#5C4A42] leading-relaxed mb-6 md:mb-8 max-w-md font-light" style={B}>
                At Cosmo Home, aesthetic medicine begins with listening. Then comes science, safety, and care — always in that order.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
                <motion.a
                  href="https://wa.me/919495511628"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, backgroundColor: "#734A37" }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex justify-center items-center gap-2.5 px-6 py-4 w-full sm:w-auto bg-[#8C5D47] text-[#FAF7F2] text-xs tracking-[0.2em] uppercase font-semibold transition-all rounded-xl shadow-lg"
                  style={B}
                >
                  <Calendar size={14} className="shrink-0" />
                  Book Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="/service"
                  whileHover={{ scale: 1.02, borderColor: "#8C5D47", color: "#8C5D47" }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex justify-center items-center gap-2.5 px-6 py-4 w-full sm:w-auto border border-[#2C1810]/20 text-[#2C1810] text-xs tracking-[0.2em] uppercase font-semibold transition-all rounded-xl hover:bg-[#2C1810]/5"
                  style={B}
                >
                  Explore Treatments <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </FadeUp>
          </div>

          {/* Right Column */}
          <div className="flex flex-col relative z-10 divide-y divide-[#2C1810]/10">
            {/* Point 1 */}
            <FadeUp delay={0.1}>
              <div className="py-5 md:py-6 first:pt-0 flex gap-4 md:gap-6 items-start">
                <span className="text-3xl text-[#8C5D47] font-light leading-none w-10 shrink-0 mt-2" style={D}>01</span>
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#2C1810]/5">
                  <svg className="w-6 h-6 text-[#8C5D47]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a5 5 0 0 0-8 0v4c0 3 2.5 5 4 6 .5.3 1.2.3 1.7 0 2-1.2 3.5-3.5 3.5-6" />
                    <path d="M12 9c-1-1-2.5-1-3.5 0-1 1-1 2.5 0 3.5l3.5 3.5 3.5-3.5c1-1 1-2.5 0-3.5-1-1-2.5-1-3.5 0z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-lg text-[#2C1810] mb-2 font-medium" style={D}>Beauty begins with listening</p>
                  <p className="text-sm sm:text-base text-[#5C4A42] leading-relaxed font-light" style={B}>
                    No two faces are alike. No two journeys are alike. We take time to understand you — truly — before we suggest anything.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Point 2 */}
            <FadeUp delay={0.2}>
              <div className="py-5 md:py-6 flex gap-4 md:gap-6 items-start">
                <span className="text-3xl text-[#8C5D47] font-light leading-none w-10 shrink-0 mt-2" style={D}>02</span>
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#2C1810]/5">
                  <Microscope size={22} strokeWidth={1.2} className="text-[#8C5D47]" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-lg text-[#2C1810] mb-2 font-medium" style={D}>Science before trends</p>
                  <p className="text-sm sm:text-base text-[#5C4A42] leading-relaxed font-light" style={B}>
                    The most beautiful outcomes come not from the newest technology, but from the deepest understanding of anatomy and natural ageing.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Point 3 */}
            <FadeUp delay={0.3}>
              <div className="py-5 md:py-6 flex gap-4 md:gap-6 items-start">
                <span className="text-3xl text-[#8C5D47] font-light leading-none w-10 shrink-0 mt-2" style={D}>03</span>
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#2C1810]/5">
                  <Leaf size={22} strokeWidth={1.2} className="text-[#8C5D47]" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-lg text-[#2C1810] mb-2 font-medium" style={D}>Natural results, never forced</p>
                  <p className="text-sm sm:text-base text-[#5C4A42] leading-relaxed font-light" style={B}>
                    Our goal is subtle, natural and lasting enhancements that respect your unique features and your story.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExtraordinaryCare() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scl = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97]);
  return (
    <section ref={ref} className="relative bg-[#FAF7F2] py-0 md:py-4">
      <motion.div style={{ scale: scl }} className="bg-[#FAF6F0] border border-[#2C1810]/5 mx-0 md:mx-10 lg:mx-16 rounded-[32px] shadow-[0_12px_40px_rgba(44,24,16,0.02)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
        <motion.div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,149,106,0.1) 0%, transparent 70%)" }}
          animate={{ opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 7, repeat: Infinity }} />
        <div className="relative z-10 px-5 sm:px-8 md:px-16 lg:px-24 pt-4 pb-6 md:pt-16 md:pb-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[140px_1fr] gap-8 lg:gap-16 items-start">
            {/* Clock */}
            <FadeUp className="flex flex-col items-center lg:items-start gap-4 lg:pt-2">
              <motion.div className="relative w-20 h-20 rounded-full border border-[#C9956A]/45 flex items-center justify-center bg-white"
                animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9956A" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </motion.div>
                {Array.from({ length: 12 }).map((_, i) => (
                  <span key={i} className="absolute w-px h-1.5 bg-[#C9956A]/30 origin-bottom"
                    style={{ transform: `rotate(${i * 30}deg) translateX(-50%)`, top: 4, left: "50%" }} />
                ))}
              </motion.div>
            </FadeUp>
            {/* Text */}
            <div>
              <FadeUp>
                <Tag>A message to our patients</Tag>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2C1810] leading-[1.1] mt-4 mb-5" style={D}>
                  Extraordinary care takes<br />extraordinary time. 🕊️
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-base text-[#5C4A42] leading-loose mb-5 max-w-2xl" style={B}>
                  We understand that waiting can be frustrating, and we sincerely appreciate your patience.
                </p>
                <p className="text-base text-[#5C4A42] leading-loose mb-5 max-w-2xl" style={B}>
                  <strong className="text-[#2C1810] font-medium">At our clinic, every patient is given the time and attention they deserve.</strong> When someone is with Dr. Ruxana, their concerns are being listened to carefully, their questions are being answered thoughtfully, and their care is never rushed.
                </p>
                <p className="text-base text-[#5C4A42] leading-loose mb-5 max-w-2xl" style={B}>
                  This approach may sometimes mean longer waiting times, but it also ensures that when it is your turn, you will receive the same level of attention, compassion, and thorough care.
                </p>
                <p className="text-base text-[#5C4A42] leading-loose max-w-2xl" style={B}>
                  We do not measure consultations by the clock. We believe in giving each patient the time needed to feel heard, understood, and confident about their treatment.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="mt-8 text-sm text-[#8C5D47] leading-relaxed border-l-2 border-[#C9956A]/30 pl-5" style={{ ...D, fontStyle: "italic" }}>
                  "Thank you for your understanding and for trusting us with your care."
                  <span className="block mt-2 text-xs not-italic text-[#C9956A]" style={M}>— Dr. Ruxana</span>
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function DrRuxana() {
  return (
    /* bg-[#E8DDD1] matches the warm beige of the photo background for seamless blending */
    <section id="dr-ruxana" className="bg-[#E8DDD1] overflow-hidden">

      {/* Chapter tag — inside padded container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-4 md:pt-6">
        <FadeUp>
          <div className="relative mb-8 pl-5 pt-4">
            <div className="absolute left-0 top-0 w-20 h-px bg-[#C9956A]/55" />
            <div className="absolute left-0 top-0 w-px h-14 bg-[#C9956A]/55" />
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#8B6B53]" style={M}>Chapter 03 — The Story</p>
          </div>
        </FadeUp>
      </div>

      {/* Full-width grid — image column starts at absolute left edge of section */}
      <div className="grid lg:grid-cols-[55%_45%] gap-0 items-center">

        {/* ── Image Column — no left padding, starts at screen left edge ── */}
        <FadeUp delay={0.1} className="relative order-2 lg:order-1">
          <div className="relative w-full">
            <motion.img
              src="/ruxana/banner.webp"
              alt="Dr. Ruxana K (MBBS, DDVL)"
              className="w-full h-auto hidden lg:block"
            />

            <motion.img
              src="/ruxana/banner-mob.webp"
              alt="Dr. Ruxana K (MBBS, DDVL)"
              className="w-full h-auto block lg:hidden"
            />

            {/* Right-edge fade — subtle blend into bg at the very edge */}
            <div
              className="absolute inset-y-0 right-0 w-1/6 z-[5] pointer-events-none"
              style={{ background: "linear-gradient(to right, transparent, #E8DDD1)" }}
            />

            {/* Credentials box — overlaps the right side of the image at desk level */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -3 }}
              className="absolute bg-[#2E1A10] text-[#FAF7F2] px-5 py-4 z-10"
              style={{ bottom: "18%", right: "4%" }}
            >
              <div className="flex items-center gap-1.5 mb-2.5">
                <span className="text-[9px] text-[#C9956A]">✨</span>
                <p className="text-[9px] tracking-[0.22em] uppercase text-[#C9956A]" style={M}>Credentials</p>
              </div>
              <p className="text-[11px] leading-[1.85] text-[#FAF7F2]/90" style={B}>
                MBBS · MRCS<br />Dip. Aesthetic Med.<br />Fellow, BCAM
              </p>
            </motion.div>
          </div>
        </FadeUp>

        {/* ── Text Column — padded on left, spaced on right ── */}
        <FadeUp delay={0.15} className="order-1 lg:order-2 px-8 md:px-12 lg:pl-14 xl:pl-20 pr-4 md:pr-6 lg:pr-8 pb-6 lg:pb-0">
          <h2 className="text-[2.8rem] sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.5rem] leading-[1.0] text-[#2C1810] mb-6" style={D}>
            Meet Dr.<br />Ruxana.
          </h2>

          <p className="text-base md:text-sm text-[#2C1810]/80 leading-[1.85] mb-4 max-w-[450px]" style={B}>
            Dr. Ruxana did not enter Aesthetic Medicine to sell treatments. She entered it because she witnessed, again and again, how much a woman's confidence shapes her entire life — her relationships, her ambitions, her sense of self.
          </p>
          <p className="text-base md:text-sm text-[#2C1810]/80 leading-[1.85] mb-8 max-w-[450px]" style={B}>
            She trained for over a decade before founding COSMO HOME — not as a clinic, but as a philosophy: a belief that the most powerful aesthetic outcomes are gentle, natural, and deeply personal.
          </p>

          <motion.div
            initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="border-l border-[#C9956A]/60 pl-5 max-w-[450px]"
          >
            <p className="text-base md:text-sm text-[#2C1810] leading-[1.75]" style={{ ...D, fontStyle: "italic" }}>
              "I want every patient to leave feeling more like themselves — not different. More radiant. More free."
            </p>
            <div className="mt-3 text-base">🧡</div>
            <p className="mt-2.5 text-[9px] text-[#C9956A] tracking-[0.28em] uppercase" style={M}>— Dr. Ruxana</p>
          </motion.div>

          <div className="pb-5 md:pb-0" />
        </FadeUp>
      </div>
    </section>
  );
}




export function Experiences() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(() => {
    const params = new URLSearchParams(location.search);
    const expParam = params.get("exp");
    return expParam ? parseInt(expParam, 10) : 0;
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const expParam = params.get("exp");
    if (expParam !== null) {
      setActive(parseInt(expParam, 10));
    }
  }, [location.search]);
  const exps = [
    {
      name: "Face Rejuvenation ✨",
      tagline: "Lift. Smooth. Restore.",
      desc: "Medical-grade anti-ageing protocols tailored to facial harmony. Non-surgical lifting, contouring, and volume restoration designed to enhance your natural features with zero downtime.",
      highlights: ["Non-Surgical Lifting", "Customized Facial Mapping", "Natural Volume Restoration"],
      duration: "45 – 60 Mins",
      suitedFor: "Fine lines, sagging skin & volume loss"
    },
    {
      name: "Skin Transformation ✨",
      tagline: "Healthy skin begins with diagnosis.",
      desc: "Comprehensive diagnostic and therapeutic solutions for active acne, stubborn pigmentation, acne scars, and uneven texture using medical peels, lasers, and exosome therapies.",
      highlights: ["Targeted Pigmentation Repair", "Collagen Resurfacing", "Advanced Cellular Healing"],
      duration: "30 – 60 Mins",
      suitedFor: "Acne, scars, pigmentation & dullness"
    },
    {
      name: "Body Contouring 🌸",
      tagline: "Shape with confidence.",
      desc: "Advanced non-invasive body sculpting, muscle toning, and skin tightening protocols. Designed to refine contours and restore skin firmness safely without surgical intervention.",
      highlights: ["Targeted Fat Reduction", "Non-Invasive Muscle Sculpting", "Firming & Tightening"],
      duration: "45 – 90 Mins",
      suitedFor: "Stubborn fat pockets & skin laxity"
    },
    {
      name: "Hair Restoration 🌿",
      tagline: "Stronger hair. Healthier scalp.",
      desc: "Biologically driven hair follicle activation using growth factor concentrate (GFC), PRP, scalp exosomes, and mesotherapy to halt hair shedding and promote natural density.",
      highlights: ["Follicular Revitalization", "Autologous Growth Factors", "Scalp Barrier Optimization"],
      duration: "45 – 60 Mins",
      suitedFor: "Thinning hair, hair fall & scalp health"
    },
    {
      name: "Regenerative Aesthetics 💉",
      tagline: "Repair. Regenerate. Rejuvenate.",
      desc: "Next-generation cellular therapies harnessing exosomes and bio-stimulators to trigger deep tissue repair, accelerate collagen synthesis, and restore youthful skin vitality.",
      highlights: ["Exosome Bio-Therapies", "Deep Cellular Regeneration", "Long-Term Skin Quality"],
      duration: "45 – 60 Mins",
      suitedFor: "Aging skin, deep tissue repair & radiance"
    },
    {
      name: "Personalised Aesthetic Journey 💫",
      tagline: "Your vision. Our expertise.",
      desc: "A comprehensive long-term relationship with aesthetic care. Our expert medical team designs a multi-year master plan aligned with your aesthetic goals, lifestyle, and evolving beauty.",
      highlights: ["Multi-Year Master Plan", "Continuous Medical Monitoring", "Tailored Multi-Modality Care"],
      duration: "Annual programme",
      suitedFor: "Anyone committed to the long view"
    },
  ];
  return (
    <section id="experiences" className="pt-6 pb-12 md:pt-12 md:pb-12 bg-[#FAF7F2] border-t border-[#2C1810]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <FadeUp>
          <Tag>Chapter 05 — Signature Experiences</Tag>
          <h2 className="text-4xl md:text-5xl text-[#2C1810] leading-[1.05] mt-3 mb-6" style={D}>Not treatments.<br />Experiences.</h2>
        </FadeUp>
        <div className="grid lg:grid-cols-2 gap-0 border-t border-[#2C1810]/10">
          <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-[#2C1810]/10">
            {exps.map((e, i) => (
              <div key={e.name} className="flex flex-col border-b border-[#2C1810]/10">
                <motion.button onClick={() => setActive(i)} whileHover={{ x: 5 }}
                  className={`text-left py-6 transition-all duration-300 w-full ${active === i ? "opacity-100" : "opacity-100 lg:opacity-40 lg:hover:opacity-70"}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg md:text-xl text-[#2C1810]" style={D}>{e.name}</p>
                      <p className="text-xs tracking-[0.18em] text-[#C9956A] mt-1 uppercase" style={M}>{e.tagline}</p>
                    </div>
                    <motion.div animate={{ x: active === i ? 5 : 0 }} className="hidden lg:block shrink-0 text-[#C9956A] transition-transform">
                      <ChevronRight size={16} />
                    </motion.div>
                  </div>
                </motion.button>

                {/* Mobile Content (Always Expanded) */}
                <div className="block lg:hidden overflow-hidden">
                  <div className="pb-8 pt-2">
                    <p className="text-sm text-[#5C4A42] leading-loose mb-5" style={B}>{e.desc}</p>

                    {/* Highlights grid */}
                    <div className="grid grid-cols-1 gap-2 mb-5">
                      {e.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF0E6]/80 border border-[#C9956A]/20">
                          <span className="text-[#C9956A] text-xs">✦</span>
                          <span className="text-[11px] text-[#2C1810] font-medium" style={M}>{h}</span>
                        </div>
                      ))}
                    </div>

                    {i === 0 || i === 1 || i === 2 || i === 3 || i === 4 ? (
                      <div className="mb-5">
                        <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9956A] mb-3 font-semibold" style={M}>Key Treatments</p>
                        <div className="flex flex-wrap gap-2">
                          {(i === 0 ? [
                            { name: "HIFU", slug: "hifu" },
                            { name: "Botox", slug: "botox" },
                            { name: "Fillers", slug: "fillers" },
                            { name: "Thread Lift", slug: "thread-lift" },
                            { name: "Skin Boosters", slug: "skin-boosters-anti-ageing" }
                          ] : i === 1 ? [
                            { name: "Mesopeels", slug: "mesopeels-acne" },
                            { name: "Carbon Peel", slug: "carbon-peel" },
                            { name: "MNRF", slug: "skin-mnrf" },
                            { name: "CO₂ Laser", slug: "skin-co2-laser" },
                            { name: "Exosomes", slug: "skin-exosomes" }
                          ] : i === 2 ? [
                            { name: "Fat Reduction", slug: "fat-reduction" },
                            { name: "Muscle Sculpting", slug: "muscle-sculpting" },
                            { name: "Body Tightening", slug: "body-tightening" }
                          ] : i === 3 ? [
                            { name: "PRP", slug: "hair-prp" },
                            { name: "GFC", slug: "hair-gfc" },
                            { name: "Exosomes", slug: "hair-exosome" },
                            { name: "Mesotherapy", slug: "hair-mesotherapy" }
                          ] : [
                            { name: "PRP", slug: "prp" },
                            { name: "GFC", slug: "gfc" },
                            { name: "Exosomes", slug: "exosomes-injectables" }
                          ]).map((item) => (
                            <motion.button
                              key={item.name}
                              onClick={() => navigate(`/service/${item.slug}`)}
                              whileTap={{ scale: 0.96 }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#2C1810]/10 rounded-full text-[11px] tracking-wider uppercase text-[#2C1810] bg-white transition-all shadow-sm cursor-pointer"
                              style={M}
                            >
                              {item.name}
                              <ChevronRight size={11} className="text-[#C9956A]" />
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      [{ label: "Duration", val: e.duration }, { label: "Suited for", val: e.suitedFor }].map(({ label, val }) => (
                        <div key={label} className="flex gap-4 mb-2">
                          <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9956A] w-20 shrink-0 pt-0.5" style={M}>{label}</span>
                          <span className="text-xs text-[#2C1810]/85" style={B}>{val}</span>
                        </div>
                      ))
                    )}
                    <div className="mt-6 flex flex-col gap-3">
                      {i === 0 || i === 1 || i === 2 || i === 3 || i === 4 ? (
                        <motion.button
                          onClick={() => navigate(i === 0 ? "/service?category=Face" : i === 1 ? "/service?category=Skin" : i === 2 ? "/service?category=Body" : i === 3 ? "/service?category=Hair" : "/service?category=Injectables")}
                          whileTap={{ scale: 0.97 }}
                          style={B}
                          className="cursor-pointer inline-flex justify-center items-center gap-3 w-full py-3.5 border border-[#C9956A]/40 text-[#C9956A] text-xs tracking-[0.22em] uppercase rounded-lg hover:bg-[#C9956A]/10 transition-colors group"
                        >
                          Enquire
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      ) : (
                        <motion.a
                          href="/#invitation"
                          whileTap={{ scale: 0.97 }}
                          style={B}
                          className="inline-flex justify-center items-center gap-3 w-full py-3.5 border border-[#C9956A]/40 text-[#C9956A] text-xs tracking-[0.22em] uppercase rounded-lg hover:bg-[#C9956A]/10 transition-colors group"
                        >
                          Enquire
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Preview Right Panel */}
          <div className="hidden lg:flex lg:pl-14 pt-8 lg:pt-0 flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: EASE }}>
                <p className="text-xs tracking-[0.22em] uppercase text-[#C9956A] mb-2 font-semibold" style={M}>{exps[active].tagline}</p>
                <h3 className="text-2xl md:text-3xl text-[#2C1810] mb-4" style={{ ...D }}>{exps[active].name}</h3>
                <p className="text-base text-[#5C4A42] leading-loose mb-6" style={B}>{exps[active].desc}</p>

                {/* Key Clinical Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
                  {exps[active].highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF0E6]/80 border border-[#C9956A]/20">
                      <span className="text-[#C9956A] text-xs">✦</span>
                      <span className="text-[11px] text-[#2C1810] font-medium leading-snug" style={M}>{h}</span>
                    </div>
                  ))}
                </div>

                {active === 0 || active === 1 || active === 2 || active === 3 || active === 4 ? (
                  <div className="mb-6">
                    <p className="text-xs tracking-[0.25em] uppercase text-[#C9956A] mb-3.5 font-semibold" style={M}>Key Treatments</p>
                    <div className="flex flex-wrap gap-2.5">
                      {(active === 0 ? [
                        { name: "HIFU", slug: "hifu" },
                        { name: "Botox", slug: "botox" },
                        { name: "Fillers", slug: "fillers" },
                        { name: "Thread Lift", slug: "thread-lift" },
                        { name: "Skin Boosters", slug: "skin-boosters-anti-ageing" }
                      ] : active === 1 ? [
                        { name: "Mesopeels", slug: "mesopeels-acne" },
                        { name: "Carbon Peel", slug: "carbon-peel" },
                        { name: "MNRF", slug: "skin-mnrf" },
                        { name: "CO₂ Laser", slug: "skin-co2-laser" },
                        { name: "Exosomes", slug: "skin-exosomes" }
                      ] : active === 2 ? [
                        { name: "Fat Reduction", slug: "fat-reduction" },
                        { name: "Muscle Sculpting", slug: "muscle-sculpting" },
                        { name: "Body Tightening", slug: "body-tightening" }
                      ] : active === 3 ? [
                        { name: "PRP", slug: "hair-prp" },
                        { name: "GFC", slug: "hair-gfc" },
                        { name: "Exosomes", slug: "hair-exosome" },
                        { name: "Mesotherapy", slug: "hair-mesotherapy" }
                      ] : [
                        { name: "PRP", slug: "prp" },
                        { name: "GFC", slug: "gfc" },
                        { name: "Exosomes", slug: "exosomes-injectables" }
                      ]).map((item) => (
                        <motion.button
                          key={item.name}
                          onClick={() => navigate(`/service/${item.slug}`)}
                          whileHover={{
                            y: -2,
                            borderColor: "#C9956A",
                            backgroundColor: "rgba(201,149,106,0.08)",
                            boxShadow: "0 6px 20px rgba(201,149,106,0.12)"
                          }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-2 px-4 py-2 border border-[#2C1810]/15 rounded-full text-xs tracking-wider uppercase text-[#2C1810] bg-white transition-all duration-300 cursor-pointer shadow-sm"
                          style={M}
                        >
                          <span>{item.name}</span>
                          <ChevronRight size={12} className="text-[#C9956A] transition-transform duration-300 group-hover:translate-x-0.5" />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/* Session Meta Info */}
                <div className="flex flex-wrap gap-8 mb-6 pt-4 border-t border-[#2C1810]/10">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9956A] block mb-0.5" style={M}>Session Time</span>
                    <span className="text-xs text-[#2C1810] font-semibold" style={B}>{exps[active].duration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9956A] block mb-0.5" style={M}>Target Concern</span>
                    <span className="text-xs text-[#2C1810] font-semibold" style={B}>{exps[active].suitedFor}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {active === 0 || active === 1 || active === 2 || active === 3 || active === 4 ? (
                    <motion.button
                      onClick={() => navigate(active === 0 ? "/service?category=Face" : active === 1 ? "/service?category=Skin" : active === 2 ? "/service?category=Body" : active === 3 ? "/service?category=Hair" : "/service?category=Injectables")}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      style={B}
                      className="inline-flex items-center gap-3 px-6 py-3.5 border border-[#C9956A]/40 text-[#C9956A] text-xs tracking-[0.22em] uppercase rounded-lg hover:bg-[#C9956A]/10 transition-colors group cursor-pointer"
                    >
                      Enquire
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  ) : (
                    <motion.a
                      href="/#invitation"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      style={B}
                      className="inline-flex items-center gap-3 px-6 py-3.5 border border-[#C9956A]/40 text-[#C9956A] text-xs tracking-[0.22em] uppercase rounded-lg hover:bg-[#C9956A]/10 transition-colors group"
                    >
                      Enquire
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RoadmapStep({ step, index, sectionInView }: { step: Step; index: number; sectionInView: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.1 + index * 0.12, ease: EASE }}
      className="relative flex flex-col"
    >
      {/* ── Desktop: track dot + connector above card ── */}
      <div className="hidden lg:flex items-center mb-6">
        {/* Dot on the track */}
        <div className="relative flex items-center justify-center shrink-0">
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center z-10 relative"
            style={{ background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`, border: `1.5px solid ${step.color}` }}
            whileHover={{ scale: 1.18 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {sectionInView && (
              <motion.div
                className="absolute top-0 left-0 right-0 bottom-0 rounded-full"
                style={{ border: `1px solid ${step.color}` }}
                animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.35 }}
              />
            )}
            <step.Icon size={20} color={step.color} />
          </motion.div>
        </div>
        {/* Step number badge */}
        <span className="ml-3 text-xs tracking-[0.3em] uppercase" style={{ ...M, color: step.color }}>
          Step {step.n}
        </span>
      </div>
      {/* Card body */}
      <motion.div
        className="relative overflow-hidden rounded-2xl flex flex-col flex-1 cursor-default bg-white/80 backdrop-blur-sm shadow-[0_8px_32px_rgba(44,24,16,0.02)]"
        style={{
          border: "1px solid rgba(201,149,106,0.18)",
        }}
        whileHover={{ borderColor: "rgba(201,149,106,0.55)", y: -4, transition: { duration: 0.25 } }}
      >
        {/* Ghost number watermark */}
        <span
          className="absolute -top-2 -right-2 text-[90px] font-bold select-none pointer-events-none leading-none"
          style={{ ...D, color: "rgba(201,149,106,0.06)" }}
        >
          {index + 1}
        </span>

        <div className="relative z-10 p-6 flex flex-col gap-4">
          {/* Mobile: icon + step label row */}
          <div className="flex items-center gap-3 lg:hidden">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ background: `${step.color}20`, border: `1px solid ${step.color}50` }}>
              <step.Icon size={17} color={step.color} />
            </div>
            <span className="text-xs tracking-[0.25em] uppercase" style={{ ...M, color: step.color }}>
              Step {step.n}
            </span>
          </div>

          {/* Phase title */}
          <div>
            <span className="text-2xl">{step.emoji}</span>
            <h3 className="text-xl text-[#2C1810] mt-1 leading-snug" style={{ ...D, }}>
              {step.phase}
            </h3>
          </div>

          {/* Divider */}
          <div className="h-px w-10" style={{ background: `${step.color}60` }} />

          {/* Description */}
          <p className="text-base text-[#5C4A42] leading-loose" style={B}>
            {step.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="journey" ref={ref} className="relative py-6 md:pt-14 md:pb-6 bg-[#FAF6F0] border-t border-[#2C1810]/5 overflow-hidden">
      {/* Ambient glows */}
      <motion.div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,149,106,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,112,96,0.05) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 10, repeat: Infinity, delay: 4 }} />
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-5">
          <FadeUp>
            <Tag>Chapter 06 — The COSMO HOME Journey </Tag>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2C1810] leading-[1.0] mt-3" style={D}>
              Imagine yourself<br />here.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-sm text-[#5C4A42] max-w-xs leading-relaxed" style={B}>
              Six moments. One unbroken thread of care — from your first breath at our door to the confidence you carry home.
            </p>
          </FadeUp>
        </div>

        {/* ── DESKTOP: track rail + 3-col grid ── */}
        <div className="hidden lg:block">
          {/* Animated connecting rail drawn across the top */}
          <div className="relative h-12 mb-0 flex items-center px-6">
            <motion.div
              className="absolute left-6 right-6 h-px origin-left"
              style={{ background: "linear-gradient(to right, transparent, rgba(201,149,106,0.3) 10%, rgba(201,149,106,0.3) 90%, transparent)" }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
            />
            {/* Station dots on the rail */}
            {STEPS.map((step, i) => (
              <motion.div key={step.n}
                className="absolute w-2 h-2 rounded-full"
                style={{ left: `calc(${(i / (STEPS.length - 1)) * 100}% - 4px)`, backgroundColor: step.color }}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.18, type: "spring", stiffness: 300 }}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-5">
            {STEPS.map((step, i) => (
              <RoadmapStep key={step.n} step={step} index={i} sectionInView={inView} />
            ))}
          </div>
        </div>

        {/* ── MOBILE: vertical timeline ── */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-4 top-0 bottom-0 w-px origin-top hidden lg:block"
            style={{ background: "linear-gradient(to bottom, rgba(201,149,106,0.4), rgba(201,149,106,0.05))" }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.6, delay: 0.3, ease: EASE }}
          />
          <div className="flex flex-col gap-5">
            {STEPS.map((step, i) => (
              <RoadmapStep key={step.n} step={step} index={i} sectionInView={inView} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <FadeUp delay={0.4}>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 pt-6 border-t border-[#2C1810]/10">
            <p className="text-sm text-[#5C4A42] text-center" style={B}>
              Every journey begins with a single conversation. 🌸
            </p>
            <motion.a href="/#invitation"
              whileHover={{ scale: 1.04, backgroundColor: "#734A37", boxShadow: "0 12px 32px rgba(140,93,71,0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#8C5D47] text-[#FAF7F2] text-xs tracking-[0.22em] uppercase font-semibold transition-all rounded-xl shadow-lg whitespace-nowrap" style={B}>
              Begin Step One <ArrowRight size={13} />
            </motion.a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export function TeamAndStandards() {
  const [tab, setTab] = useState<"danger" | "standards">("standards");
  return (
    <section className="bg-[#FAF7F2]">
      {/* ── ANTI-QUACKERY first ── */}
      <div id="our-standards" className="bg-[#FAF6F0] border-y border-[#2C1810]/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
        <motion.div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,149,106,0.06) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 9, repeat: Infinity }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-6 md:pt-8 md:pb-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 mb-6">
            <SlideIn from="left">
              <Tag>🛡️ Our Standards — Anti-Quackery</Tag>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C1810] leading-[1.05] mt-3" style={D}>
                Not everyone who<br />holds a needle<br />should.
              </h2>
            </SlideIn>
            <SlideIn from="right" delay={0.1}>
              <p className="text-base text-[#5C4A42] leading-relaxed mb-4" style={B}>
                <strong className="text-[#2C1810] font-medium">The aesthetics industry has a problem.</strong> Anyone — with zero medical training — can inject your face. Thousands of people every year are harmed by unqualified practitioners operating out of beauty salons and pop-up clinics.
              </p>
              <p className="text-base text-[#5C4A42] leading-relaxed mb-6" style={B}>
                Dr. Ruxana has been a vocal advocate against this — because she has seen the consequences. Patients arrive with occlusions, necrosis, and lasting trauma from treatments performed by people who had no right to perform them.
              </p>
              <motion.blockquote initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7 }}
                className="border-l-2 border-[#C9956A] pl-5 text-base md:text-lg text-[#8C5D47] leading-snug"
                style={{ ...D, fontStyle: "italic" }}>
                "Aesthetic medicine performed without medical knowledge is not a luxury service. It is a risk to your health, your face, and your life." ⚠️
              </motion.blockquote>
              <p className="mt-3 text-xs text-[#C9956A] tracking-widest" style={M}>— Dr. Ruxana</p>
            </SlideIn>
          </div>

          {/* Tab switcher */}
          <FadeUp>
            <div className="flex w-full sm:w-fit border border-[#2C1810]/15 mb-6 rounded-lg overflow-hidden bg-white/50 backdrop-blur-sm">
              {[{ id: "standards" as const, icon: "🛡️", label: "COSMO HOME Standards" }, { id: "danger" as const, icon: "⚠️", label: "The Dangers" }].map(({ id, icon, label }) => (
                <button key={id} onClick={() => setTab(id)} style={B}
                  className={`w-1/2 lg:w-auto flex items-center justify-center gap-1 px-5 py-3 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${tab === id ? "bg-[#8C5D47] text-white" : "text-[#5C4A42]/70 hover:text-[#2C1810]"}`}>
                  <span className="shrink-0">{icon}</span>
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </FadeUp>

          <AnimatePresence mode="wait">
            {tab === "standards" && (
              <motion.div key="standards" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease: EASE }}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {STANDARDS.map((s, i) => (
                    <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      whileHover={{ backgroundColor: "rgba(201,149,106,0.02)", y: -3 }}
                      className="bg-white/80 backdrop-blur-sm border border-[#2C1810]/5 p-7 flex flex-col gap-4 group transition-all rounded-2xl shadow-sm">
                      <motion.div className="w-10 h-10 rounded-full border border-[#C9956A]/30 flex items-center justify-center shrink-0 group-hover:border-[#C9956A] transition-colors"
                        whileHover={{ scale: 1.1 }}>
                        <s.Icon size={18} color={GOLD} />
                      </motion.div>
                      <p className="text-base text-[#2C1810]" style={{ ...D }}>{s.label}</p>
                      <p className="text-base text-[#5C4A42] leading-loose" style={B}>{s.body}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            {tab === "danger" && (
              <motion.div key="danger" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease: EASE }}>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { Icon: AlertTriangle, label: "No medical qualification required", body: "Anyone in the UK can legally call themselves an 'aesthetic practitioner' with zero medical training. Weekend courses are considered sufficient." },
                    { Icon: XCircle, label: "No anatomy knowledge = real danger", body: "Injecting the face without understanding vasculature can cause blindness, necrosis, or permanent disfigurement. This is not rare — it is rising." },
                    { Icon: AlertTriangle, label: "Filler in the wrong hands", body: "Vascular occlusion — where filler blocks a blood vessel — requires immediate medical intervention. Non-doctors cannot diagnose or treat this emergency." },
                    { Icon: XCircle, label: "Minimal regulatory oversight", body: "The aesthetics industry remains largely unregulated. Many clinics operate legally without any clinical governance, oversight, or accountability." },
                  ].map((r, i) => (
                    <motion.div key={r.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      whileHover={{ backgroundColor: "rgba(201,149,106,0.02)", y: -3 }}
                      className="bg-white/80 backdrop-blur-sm border border-[#2C1810]/5 p-7 flex gap-5 group transition-all rounded-2xl shadow-sm">
                      <div className="w-10 h-10 rounded-full border border-[#C9956A]/25 flex items-center justify-center shrink-0 group-hover:border-[#C9956A] transition-colors mt-0.5">
                        <r.Icon size={18} color={GOLD} />
                      </div>
                      <div>
                        <p className="text-base text-[#2C1810] mb-2" style={{ ...D }}>{r.label}</p>
                        <p className="text-base text-[#5C4A42] leading-loose" style={B}>{r.body}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <FadeUp delay={0.3}>
                  <div className="mt-6 p-6 bg-[#C9956A]/10 border border-[#C9956A]/25 rounded-2xl">
                    <p className="text-base text-[#5C4A42] leading-loose" style={B}>
                      ⚠️ <strong className="text-[#2C1810] font-medium">Before booking any aesthetic treatment, anywhere:</strong> Ask to see the practitioner's full medical qualifications. Confirm GMC/GDC registration. Check the clinic is CQC-registered. Ensure they carry medical indemnity. If they can't answer clearly — walk away.
                    </p>
                  </div>
                </FadeUp>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── TEAM — completely new composed design ── */}
      <div id="our-team">
        <TeamSection />
      </div>
    </section>
  );
}

export function Stories() {
  const stories = [
    { author: "Isabelle W., 42", context: "Entrepreneur · Face Rejuvenation Experience", pull: "I had forgotten what my own confidence felt like. 💛", body: "Two years running a company, two years of putting everything else first. When I finally walked through COSMO HOME's door, I did not want a procedure. I wanted to feel like myself again. Six months in, my team keeps asking what I have changed. I tell them: my relationship with myself." },
    { author: "Nadia P., 35", context: "Creative Director · Skin Transformation Experience", pull: "She listened before she said a single word about treatment. 🌸", body: "I had been to two other clinics before COSMO HOME. Both had a menu ready before I finished a sentence. Dr. Ruxana asked me what I was feeling. A year later, I look the way I feel on my best days. That is all I ever wanted." },
    { author: "Claudia M., 51", context: "Architect · Personalised Aesthetic Journey", pull: "Beauty should grow with you, not fight against you. ✨", body: "Dr. Ruxana designed a two-year plan for me. Not to look younger — to look like myself at my best. The most considered, thoughtful investment I have made in myself. I'm prouder of how I look at 51 than I ever was at 35." },
  ];
  return (
    <section id="stories" className="py-6 md:pt-12 md:pb-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <FadeUp>
          <Tag>Chapter 07 — Real Stories 💬</Tag>
          <h2 className="text-4xl md:text-5xl text-[#2C1810] leading-[1.05] mt-3 mb-14" style={D}>
            People remember<br />stories.
          </h2>
        </FadeUp>
        <div className="flex flex-col gap-14">
          {stories.map((s, i) => (
            <FadeUp key={s.author} delay={0.08}>
              <div className={`grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <motion.p whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 200 }}
                    className="text-xl md:text-2xl text-[#2C1810] leading-snug mb-4" style={{ ...D, fontStyle: "italic" }}>
                    "{s.pull}"
                  </motion.p>
                  <div className="h-px w-10 bg-[#C9956A] mb-4" />
                  <p className="text-sm font-medium text-[#2C1810]" style={B}>{s.author}</p>
                  <p className="text-xs text-[#C9956A] mt-1 tracking-wide" style={M}>{s.context}</p>
                </div>
                <div className={`border-l border-[rgba(44,24,16,0.12)] pl-8 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <p className="text-base text-[#2C1810] leading-loose" style={B}>{s.body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Invitation() {
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [dropOpen, setDropOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <section id="invitation" className="relative py-6 md:pt-12 md:pb-14 overflow-hidden bg-[#FAF6F0]">
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
      <motion.div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,149,106,0.15) 0%, transparent 70%)" }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.12, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(140,93,71,0.08) 0%, transparent 70%)" }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity, delay: 3 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          <FadeUp>
            <Tag>Chapter 08 — The Invitation 🌸</Tag>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2C1810] leading-[1.05] mt-3 mb-5" style={D}>
              Your journey<br />begins here.
            </h2>
            <p className="text-base text-[#5C4A42] leading-relaxed mb-10 max-w-sm" style={B}>
              Book a private consultation with Dr. Ruxana and discover what truly personalised aesthetic care feels like. No pressure. No treatment menu. Just a conversation.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              {[
                { label: "Phone", value: "+91 94955 11628" },
                { label: "Email", value: "cosmohomenilambur@gmail.com" },
                { label: "Address", value: "Kalathinkadavu Rd, Nilambur, Kerala 679329" },
                { label: "Hours", value: "Mon–Sat · 9am–7pm" },
              ].map(({ label, value }, i) => (
                <motion.div key={label} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-6">
                  <span className="text-xs tracking-[0.25em] uppercase text-[#C9956A] w-16 shrink-0 pt-0.5" style={M}>{label}</span>
                  <span className="text-sm text-[#5C4A42]" style={B}>{value}</span>
                </motion.div>
              ))}
            </div>

          </FadeUp>

          <FadeUp delay={0.12}>
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form key="form" exit={{ opacity: 0, y: -16 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const inputs = form.querySelectorAll("input");
                    const firstName = inputs[0]?.value || "";
                    const lastName = inputs[1]?.value || "";
                    const phone = inputs[2]?.value || "";
                    const experienceOfInterest = selected || "Not specified";
                    const tellUsALittle = form.querySelector("textarea")?.value || "";

                    const name = [firstName, lastName].filter(Boolean).join(" ") || "Not provided";

                    const lines = [
                      "🔔 *NEW LEAD RECEIVED*",
                      "",
                      "👤 *Patient Details*",
                      `• Name: ${name}`,
                      `• Phone: ${phone || "Not provided"}`,
                      "",
                      "✨ *Treatment Interest*",
                      `• ${experienceOfInterest || "General Consultation"}`,
                      "",
                      "📝 *Message*",
                      `"${tellUsALittle || "None"}"`,
                      "",
                      "━━━━━━━━━━━━━━━━━━",
                      "🏥 COSMO HOME",
                      "Aesthetic Medicine",
                      "🌐 cosmohome.in",
                    ];

                    openWhatsApp(lines.join("\n"));
                    setSent(true);
                  }}
                  className="bg-white/80 backdrop-blur-md border border-[#2C1810]/8 rounded-3xl shadow-[0_16px_48px_rgba(44,24,16,0.06)] p-5 sm:p-8 md:p-10 flex flex-col gap-5">
                  <p className="text-xl text-[#2C1810] mb-1" style={{ ...D, }}>Begin your story. 🌸</p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField label="First name" placeholder="First name" />
                    <InputField label="Last name" placeholder="Last name" />
                  </div>
                  <InputField label="Phone" type="tel" placeholder="+91 98765 43210" />

                  {/* Custom Dropdown */}
                  {(() => {
                    const options = [
                      "I am not sure yet",
                      "Face Rejuvenation Experience",
                      "Skin Transformation Experience",
                      "Body Contouring Experience",
                      "Hair Restoration Experience",
                      "Regenerative Aesthetics Experience",
                      "Personalised Aesthetic Journey",
                    ];
                    return (
                      <div ref={dropRef} className="flex flex-col gap-2 relative">
                        <label className="text-xs tracking-[0.25em] uppercase text-[#5C4A42]" style={M}>Experience of interest</label>
                        <button
                          type="button"
                          onClick={() => setDropOpen(!dropOpen)}
                          className="w-full border-b-2 bg-transparent pb-2.5 pt-1 text-sm text-left flex items-center justify-between gap-2 focus:outline-none transition-colors"
                          style={{ borderBottomColor: dropOpen ? GOLD : "rgba(44,24,16,0.2)", color: selected ? "#2C1810" : "#5C4A42", ...B }}
                        >
                          <span>{selected || "I am not sure yet"}</span>
                          <motion.svg
                            animate={{ rotate: dropOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9956A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="shrink-0"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </motion.svg>
                        </button>
                        <AnimatePresence>
                          {dropOpen && (
                            <motion.ul
                              initial={{ opacity: 0, }}
                              animate={{ opacity: 1, }}
                              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                              className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-[#2C1810]/8 overflow-hidden z-50 origin-top"
                            >
                              {options.map((opt, i) => (
                                <li
                                  key={opt}

                                  onClick={() => { setSelected(opt === "I am not sure yet" ? "" : opt); setDropOpen(false); }}
                                  className={`px-5 py-3 text-sm cursor-pointer transition-all duration-200 flex items-center gap-3 ${(selected === opt || (!selected && opt === "I am not sure yet"))
                                    ? "bg-[#C9956A]/10 text-[#C9956A]"
                                    : "text-[#2C1810] hover:bg-[#FAF7F2] hover:text-[#C9956A]"
                                    }`}
                                  style={B}
                                >
                                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${(selected === opt || (!selected && opt === "I am not sure yet"))
                                    ? "bg-[#C9956A]"
                                    : "bg-[#2C1810]/15"
                                    }`} />
                                  {opt}
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })()}

                  {/* Textarea */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-[0.25em] uppercase text-[#5C4A42]" style={M}>Tell us a little</label>
                    <div className={`transition-all duration-300 ${focused === "msg" ? "shadow-[0_0_0_2px_rgba(201,149,106,0.35)]" : ""}`}>
                      <textarea rows={3} placeholder="What matters most to you right now?" style={{ borderBottomColor: focused === "msg" ? GOLD : "rgba(44,24,16,0.2)", ...B }}
                        className="w-full border-b-2 bg-transparent pb-2.5 pt-1 text-sm text-[#2C1810] placeholder:text-[#5C4A42]/40 focus:outline-none transition-colors resize-none"
                        onFocus={() => setFocused("msg")} onBlur={() => setFocused(null)} />
                    </div>
                  </div>

                  <motion.button type="submit" style={B}
                    whileHover={{ scale: 1.02, backgroundColor: GOLD, boxShadow: "0 0 24px rgba(201,149,106,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 group flex items-center justify-between px-8 py-4 bg-[#2C1810] text-[#FAF7F2] text-xs tracking-[0.22em] uppercase transition-colors duration-300 shadow-lg">
                    Send My Request
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <p className="text-xs text-[#5C4A42] text-center" style={B}>Dr. Ruxana personally reviews every request. 💛</p>
                </motion.form>
              ) : (
                <motion.div key="thanks" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/80 backdrop-blur-md border border-[#2C1810]/8 rounded-3xl shadow-[0_16px_48px_rgba(44,24,16,0.06)] p-10 md:p-16 flex flex-col items-center justify-center text-center min-h-[440px]">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-16 h-16 rounded-full border-2 border-[#C9956A] flex items-center justify-center mb-6">
                    <Heart size={24} color={GOLD} />
                  </motion.div>
                  <p className="text-4xl mb-4">🌸</p>
                  <p className="text-2xl text-[#2C1810] mb-4" style={{ ...D }}>Thank you.</p>
                  <p className="text-base text-[#5C4A42] leading-loose" style={B}>
                    Dr. Ruxana will personally review your request and be in touch within 24 hours. Your journey begins now.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

import { useSEO } from "../lib/useSEO";

export default function HomePage({ ready }: { ready: boolean }) {
  useSEO({
    title: "Cosmo Home | Expert-Led Aesthetic Medicine & Luxury Skincare",
    description: "Welcome to Cosmo Home, an exclusive aesthetic medicine clinic founded by Dr. Ruxana. Experience safe, honest, and natural cosmetic treatments for skin, hair, and body in a warm, welcoming home ambience.",
  });

  return (
    <>
      <Hero ready={ready} />
      <Philosophy />
      <ExtraordinaryCare />
      <DrRuxana />
      <Transformation />
      <Experiences />
      <Journey />
      <TeamAndStandards />
      <Stories />
      {/* <div className="lg:hidden h-20" /> */}
      <Invitation />
    </>
  );
}
