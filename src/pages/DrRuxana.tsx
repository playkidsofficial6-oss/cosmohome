import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowRight, ShieldCheck, Heart, Award, Sparkles, Check, GraduationCap, BookOpen, Star, Calendar } from "lucide-react";

import { D, M, B, GOLD, EASE, GRAIN } from "../lib/constants";
import { CTAButtons, FadeUp, Tag } from "../components/ui/shared";

export default function DrRuxanaPage() {
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();

  // The raw Y, X and Rotation transforms
  const rawY = useTransform(scrollYProgress, [0, 1], [250, 3150]);
  const rawX = useTransform(scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 45, -45, 45, -45, 0]
  );
  const rawRotate = useTransform(scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [10, 35, -15, 35, -15, 10]
  );

  // Apply spring physics layer to make scroll movement buttery smooth with momentum
  const featherY = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.5 });
  const featherX = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.5 });
  const featherRotate = useSpring(rawRotate, { stiffness: 60, damping: 20, mass: 0.5 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    {
      year: "Academic Foundations",
      title: "Medical Graduation (MBBS)",
      desc: "Completed extensive clinical medical education laying down deep foundations in human anatomy, physiology, and general medicine.",
      icon: GraduationCap,
    },
    {
      year: "Surgical Training",
      title: "Royal College of Surgeons (MRCS)",
      desc: "Acquired advanced surgical skills, clinical governance standards, and precise hand-eye coordination under the strict standards of the Royal College of Surgeons.",
      icon: ShieldCheck,
    },
    {
      year: "Aesthetic Specialisation",
      title: "Diploma in Aesthetic Medicine",
      desc: "Dedicated specialisation in non-surgical facial rejuvenation, focusing on structural tissue dynamics and advanced dermal technologies.",
      icon: Award,
    },
    {
      year: "Professional Recognition",
      title: "BCAM Fellow",
      desc: "Achieved Fellowship status with the British College of Aesthetic Medicine (BCAM), adhering to high clinical safety and ethical standards.",
      icon: Star,
    },
    {
      year: "The Vision Realised",
      title: "Founding COSMO HOME",
      desc: "Established COSMO HOME not merely as a clinic, but as a philosophy of care—centering on subtle, natural recalibrations in an aesthetic sanctuary.",
      icon: Heart,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#FAF7F2] text-[#2C1810] pt-16 overflow-x-hidden"
      style={B}
    >
      {/* ═╦═ 1. ADVANCED MODERN HERO SECTION ═╦═ */}
      <section className="relative min-h-[75vh] flex flex-col justify-center bg-[#FAF6F0] py-12 md:py-20 overflow-hidden border-b border-[#2C1810]/5">
        {/* Advanced Grid & Glow Backdrops */}
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
        
        {/* Subtle grid backdrop for clinical precision */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,149,106,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,149,106,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40 z-0 pointer-events-none" />

        <motion.div
          className="absolute -top-20 -right-20 w-[650px] h-[650px] rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(201,149,106,0.15) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9956A]/10 text-[#C9956A] text-[9px] font-semibold tracking-[0.25em] uppercase rounded-full mb-6 w-fit" style={M}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9956A] animate-pulse" />
                  Medical Director & Founder
                </div>
                
                <h1 className="text-5xl sm:text-7xl lg:text-[5.2rem] text-[#2C1810] leading-[1.0] mt-2 mb-6 font-light tracking-tight" style={D}>
                  Dr. Ruxana <span className="serif text-[#C9956A]">K.</span>
                </h1>
                
                {/* Horizontal line divider with signature gold star */}
                <div className="flex items-center gap-3 my-6 w-full max-w-lg">
                  <div className="h-[1px] bg-[#C9956A]/25 flex-grow hidden sm:block" />
                  <span className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-[#C9956A] font-bold text-center leading-relaxed" style={M}>
                    MBBS · MRCS · Dip. Aesthetic Med. · Fellow, BCAM
                  </span>
                  <div className="h-[1px] bg-[#C9956A]/25 flex-grow hidden sm:block" />
                </div>

                <p className="text-base sm:text-[1.05rem] text-[#5C4A42] leading-[1.8] mb-8 max-w-xl font-light">
                  Dr. Ruxana did not enter aesthetic medicine to sell treatments. She entered it because she witnessed, again and again, how much a woman's confidence shapes her entire life—her relationships, her ambitions, her sense of self.
                </p>

                {/* Glassmorphic Interactive Quote */}
                <div className="relative bg-[#FAF7F2]/40 backdrop-blur-md border border-[#C9956A]/15 rounded-3xl p-6 mb-8 max-w-xl shadow-[0_10px_30px_rgba(44,24,16,0.02)] overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#C9956A]" />
                  <p className="text-sm md:text-[0.95rem] text-[#2C1810] leading-relaxed italic pr-4" style={D}>
                    "Aesthetic medicine is an art of restraint. I want every patient to leave feeling more like themselves—not different. More radiant. More free."
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <p className="text-[9px] text-[#C9956A] tracking-[0.25em] uppercase font-bold" style={M}>— Personal Pledge</p>
                    <span className="text-xs">💛</span>
                  </div>
                </div>

                {/* Call To Actions */}
                <div className="flex flex-wrap gap-4 items-center">
                  <CTAButtons />
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Advanced Overlapping Interactive Collage */}
            <div className="lg:col-span-6 flex justify-center items-center relative">
              <FadeUp delay={0.2} className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl">
                
                {/* Decorative floating geometry */}
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#C9956A]/5 rounded-full blur-xl pointer-events-none" />
                <div className="absolute -bottom-16 -right-12 w-36 h-36 bg-[#2C1810]/5 rounded-full blur-2xl pointer-events-none" />

                {/* Main Luxury Borderless Image Frame */}
                <div className="relative z-10 w-full group">
                  {/* Luxury offset gold border behind the image */}
                  <div className="absolute inset-0 border border-[#C9956A]/35 rounded-[32px] translate-x-3.5 translate-y-3.5 pointer-events-none transition-transform duration-700 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
                  
                  {/* The Image Wrapper with a high-end drop shadow */}
                  <div className="relative aspect-[3.8/4.5] w-full rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(44,24,16,0.12)] border border-[#E8E1D7]/80 bg-[#E8DDD1]">
                    <img
                      src="/hero/main banner.webp"
                      alt="Dr. Ruxana K at Cosmo Home"
                      className="w-full h-full object-cover object-right transition-transform duration-[1.8s] ease-out group-hover:scale-105"
                    />
                    {/* Linear high-tech glass reflex overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#2C1810]/40 via-transparent to-white/10 pointer-events-none" />
                    
                    {/* Floating organic label badge inside the image directly */}
                    <div className="absolute bottom-5 left-6 bg-white/20 backdrop-blur-md border border-white/25 px-4 py-2 rounded-full text-[9px] text-[#FAF7F2] font-semibold uppercase tracking-[0.2em]" style={M}>
                      ✦ Cosmo Home Clinic ✦
                    </div>
                  </div>
                </div>

                {/* Floating Glassmorphic Stats Plate (Overlapping bottom right) */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="absolute bottom-10 -right-6 z-20 bg-white/70 backdrop-blur-xl border border-white/80 text-[#2C1810] p-6 rounded-3xl shadow-[0_15px_40px_rgba(44,24,16,0.08)] max-w-[200px] flex flex-col gap-3 group cursor-default"
                >
                  <div className="flex flex-col border-b border-[#2C1810]/5 pb-2.5">
                    <span className="text-2xl font-light text-[#C9956A]" style={D}>10+ Yrs</span>
                    <span className="text-[8px] tracking-widest text-[#5C4A42] uppercase font-bold mt-0.5" style={M}>Clinical Practice</span>
                  </div>
                  <div className="flex flex-col border-b border-[#2C1810]/5 pb-2.5">
                    <span className="text-2xl font-light text-[#C9956A]" style={D}>BCAM</span>
                    <span className="text-[8px] tracking-widest text-[#5C4A42] uppercase font-bold mt-0.5" style={M}>Fellowship</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-light text-[#C9956A]" style={D}>MRCS</span>
                    <span className="text-[8px] tracking-widest text-[#5C4A42] uppercase font-bold mt-0.5" style={M}>Surgical Board</span>
                  </div>
                </motion.div>

                {/* Floating Circular High-Tech Badge (Overlapping top left) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute -top-6 -left-6 z-20 w-24 h-24 bg-[#2C1810] text-[#FAF7F2] rounded-full shadow-2xl flex items-center justify-center border border-[#C9956A]/30 overflow-hidden group cursor-pointer"
                >
                  {/* Rotating circular text SVG */}
                  <motion.svg 
                    viewBox="0 0 100 100" 
                    className="w-full h-full origin-center fill-current text-[#C9956A]"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  >
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text fontFamily="monospace" fontSize="7.5" fontWeight="bold" letterSpacing="2.5">
                      <textPath href="#circlePath">
                        ✦ CLINICAL EXCELLENCE ✦ COSMO HOME
                      </textPath>
                    </text>
                  </motion.svg>
                  {/* Small gold leaf logo in the absolute center */}
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-light text-[#FAF7F2] select-none">
                    ✨
                  </div>
                </motion.div>

              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* ═╦═ 2. PHILOSOPHY OF CARE ═╦═ */}
      <section className="py-12 md:py-20 px-6 md:px-16 lg:px-24 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <Tag>Philosophy of Care</Tag>
            <h2 className="text-3xl sm:text-5xl text-[#2C1810] mt-3 mb-6 font-light" style={D}>
              A gentle, <span className="serif text-[#C9956A]">natural-first</span> approach.
            </h2>
            <p className="text-sm sm:text-base text-[#5C4A42] leading-relaxed font-normal">
              Great aesthetics are not about changing who you are. It is about bringing out the best version of yourself, backed by medical science and surgical-grade precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Listening First",
                desc: "We start with a 60-minute in-depth conversation. We learn about your lifestyle, concerns, and goals before drawing any treatment plan.",
              },
              {
                icon: ShieldCheck,
                title: "Safety & Integrity",
                desc: "Every procedure is dermatologist-led or doctor-supervised. We maintain extreme standards of sterile protocols and clinical accountability.",
              },
              {
                icon: Sparkles,
                title: "Subtle Calibrations",
                desc: "We focus on structural volume restoration and soft calibrations that preserve natural facial expressions and authentic proportions.",
              },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="bg-white p-8 rounded-3xl border border-[#2C1810]/5 shadow-[0_4px_30px_rgba(44,24,16,0.01)] hover:shadow-[0_12px_45px_rgba(44,24,16,0.04)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C9956A]/10 flex items-center justify-center text-[#C9956A] mb-6">
                  <p.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-[#2C1810] mb-3" style={D}>{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#5C4A42] leading-relaxed font-light">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═╦═ 3. THE CLINICAL TIMELINE ═╦═ */}
      <section className="py-12 md:py-20 px-6 md:px-16 lg:px-24 bg-[#E8DDD1]/35 border-y border-[#2C1810]/5 relative">
        <div className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
        <div className="max-w-4xl mx-auto relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <Tag>The Professional Journey</Tag>
            <h2 className="text-3xl sm:text-5xl text-[#2C1810] mt-3 mb-6 font-light" style={D}>
              Education & <span className="serif text-[#C9956A]">Credentials.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5C4A42] leading-relaxed font-normal">
              A decade of clinical training and surgical excellence before establishing Cosmo Home.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-0">
            {/* Center connecting line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#C9956A]/30 -translate-x-1/2" />

            <div className="space-y-16">
              {milestones.map((m, i) => {
                const Icon = m.icon;
                const isEven = i % 2 === 0;

                return (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.08 }}
                    className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Circle Icon Badge */}
                    <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FAF7F2] border-2 border-[#C9956A] shadow-md z-10 flex items-center justify-center text-[#C9956A] shrink-0 transition-transform hover:scale-110">
                      <Icon size={16} strokeWidth={2} />
                    </div>

                    {/* Content placement */}
                    <div className={`w-full md:w-1/2 flex flex-col justify-center pl-20 pr-4 ${isEven ? "md:pl-12 md:pr-0" : "md:pl-0 md:pr-12"}`}>
                      <div className={`flex flex-col ${isEven ? "md:items-start" : "md:items-end"} text-left ${isEven ? "md:text-left" : "md:text-right"}`}>
                        <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9956A] font-bold mb-1.5" style={M}>{m.year}</span>
                        <h4 className="text-lg font-semibold text-[#2C1810] mb-2" style={D}>{m.title}</h4>
                        <p className={`text-xs text-[#5C4A42] leading-relaxed max-w-sm font-light ${isEven ? "" : "md:ml-auto"}`}>{m.desc}</p>
                      </div>
                    </div>
                    {/* Empty placeholder column for desktop centering layout */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ═╦═ 4. SIGNATURE CONSULTATION CTA ═╦═ */}
      <section className="py-12 md:py-20 px-6 md:px-16 lg:px-24 bg-[#FAF7F2] text-[#2C1810] relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Tag>Begin Your Journey</Tag>

          <h2 className="text-4xl sm:text-6xl text-[#2C1810] mt-4 mb-6 leading-tight font-light" style={D}>
            Schedule a private <span className="serif text-[#C9956A]">consultation</span><br />with Dr. Ruxana.
          </h2>

          <p className="text-base sm:text-lg text-[#5C4A42] max-w-xl mx-auto leading-relaxed mb-10 font-light" style={B}>
            No sales pitches. No treatment menu templates. Just an honest, 60-minute medical conversation about your skin, anatomy, and how we can support your confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="/book-consultation"
              whileHover={{ scale: 1.04, boxShadow: "0 0 36px rgba(201,149,106,0.55)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto max-w-[300px] sm:max-w-none inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-5 bg-[#C9956A] text-[#FAF7F2] text-xs tracking-[0.22em] uppercase rounded-xl shadow-xl shadow-[#C9956A]/20 font-bold group whitespace-nowrap"
              style={B}
            >
              Book Consultation
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
            </motion.a>

            <motion.a
              href="/service"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto max-w-[300px] sm:max-w-none inline-flex items-center justify-center gap-2.5 px-6 sm:px-9 py-5 rounded-xl border border-[#2C1810]/15 hover:border-[#C9956A] text-[#2C1810] hover:text-[#C9956A] text-xs tracking-[0.18em] uppercase transition-all duration-300 font-bold whitespace-nowrap"
              style={B}
            >
              Explore Treatments
            </motion.a>
          </div>

          <div className="mt-12 flex justify-center items-center gap-1.5 select-none">
            <span className="text-[#C9956A] text-[9px] leading-none shrink-0 font-normal">✦</span>
            <p className="text-[10px] tracking-[0.2em] text-[#C9956A]/85 uppercase font-semibold" style={M}>
              Dermatologist-Supervised Care
            </p>
            <span className="text-[#C9956A] text-[9px] leading-none shrink-0 font-normal">✦</span>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
