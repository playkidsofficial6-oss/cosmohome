import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Heart, Award, Sparkles, Check, GraduationCap, BookOpen, Star, Calendar } from "lucide-react";

import { D, M, B, GOLD, EASE, GRAIN } from "../lib/constants";
import { CTAButtons, FadeUp, Tag } from "../components/ui/shared";

export default function DrRuxanaPage() {
  const navigate = useNavigate();

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
      {/* ═╦═ 1. CINEMATIC HERO SECTION ═╦═ */}
      <section className="relative min-h-[85vh] flex flex-col justify-center bg-[#FAF6F0] py-16 md:py-28 overflow-hidden border-b border-[#2C1810]/5">
        {/* Background Visuals */}
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
        
        <motion.div
          className="absolute top-10 right-10 w-[550px] h-[550px] rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(201,149,106,0.12) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.1, 1], x: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <FadeUp>
                <Tag>The Physician & Founder</Tag>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] text-[#2C1810] leading-[1.05] mt-4 mb-6 font-light tracking-tight" style={D}>
                  Dr. Ruxana <span className="serif text-[#C9956A]">K.</span>
                </h1>
                
                <p className="text-xs tracking-[0.25em] uppercase text-[#C9956A] font-semibold mb-6" style={M}>
                  MBBS · MRCS · Dip. Aesthetic Med. · Fellow, BCAM
                </p>

                <p className="text-base sm:text-lg text-[#5C4A42] leading-relaxed mb-8 max-w-lg font-normal">
                  Dr. Ruxana did not enter aesthetic medicine to sell treatments. She entered it because she witnessed, again and again, how much a woman's confidence shapes her entire life—her relationships, her ambitions, her sense of self.
                </p>

                <div className="bg-[#E8DDD1]/40 border-l-2 border-[#C9956A] pl-5 py-2 mb-8 max-w-md">
                  <p className="text-sm md:text-base text-[#2C1810] leading-relaxed italic" style={D}>
                    "I want every patient to leave feeling more like themselves—not different. More radiant. More free."
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <CTAButtons />
                </div>
              </FadeUp>
            </div>

            {/* Right Image/Arch Column */}
            <div className="lg:col-span-6 flex justify-center items-end relative h-[380px] sm:h-[480px] lg:h-[580px] w-full">
              <div className="relative h-full w-[280px] sm:w-[360px] lg:w-[440px] flex justify-center items-end">
                {/* Arch background */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: EASE }}
                  className="absolute bottom-0 left-0 w-full h-[90%] bg-[#EBE0D3] rounded-t-[300px] z-0 shadow-inner" 
                />

                <motion.img
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
                  src="/doctor/ruxana.webp"
                  alt="Dr. Ruxana K"
                  className="h-[95%] w-auto object-contain object-bottom relative z-10 drop-shadow-2xl"
                />

                {/* Overlapping credentials plaque */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute bottom-12 -right-4 sm:-right-8 bg-[#2C1810] text-[#FAF7F2] p-5 z-20 shadow-2xl rounded-l-none rounded-r-xl border-l border-[#C9956A]/40 min-w-[200px]"
                >
                  <span className="text-[8px] tracking-[0.2em] uppercase text-[#C9956A] font-semibold block mb-2" style={M}>Clinical Registry</span>
                  <div className="h-[1px] bg-[#FAF7F2]/10 mb-3" />
                  <p className="text-[11px] leading-[1.8] text-[#FAF7F2]/80 font-normal">
                    ✦ Medical Director<br />
                    ✦ Board Certified Clinician<br />
                    ✦ 10+ Years Experience
                  </p>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═╦═ 2. PHILOSOPHY OF CARE ═╦═ */}
      <section className="py-16 md:py-28 px-6 md:px-16 lg:px-24 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
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
      <section className="py-16 md:py-28 px-6 md:px-16 lg:px-24 bg-[#E8DDD1]/35 border-y border-[#2C1810]/5 relative">
        <div className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <Tag>The Professional Journey</Tag>
            <h2 className="text-3xl sm:text-5xl text-[#2C1810] mt-3 mb-6 font-light" style={D}>
              Education & <span className="serif text-[#C9956A]">Credentials</span>.
            </h2>
            <p className="text-sm sm:text-base text-[#5C4A42] leading-relaxed font-normal">
              A decade of clinical training and surgical excellence before establishing Cosmo Home.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 md:pl-0">
            {/* Center connecting line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#C9956A]/30 -translate-x-1/2" />

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
                    <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FAF7F2] border-2 border-[#C9956A] shadow-md z-10 flex items-center justify-center text-[#C9956A] shrink-0 transition-transform hover:scale-110">
                      <Icon size={16} strokeWidth={2} />
                    </div>

                    {/* Content placement */}
                    <div className={`w-full md:w-1/2 flex flex-col justify-center pl-14 pr-4 ${isEven ? "md:pl-12 md:pr-0" : "md:pl-0 md:pr-12"}`}>
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
      <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-[#FAF7F2] text-[#2C1810] relative">
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
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#C9956A] text-[#FAF7F2] text-xs tracking-[0.22em] uppercase rounded-xl shadow-xl shadow-[#C9956A]/20 font-bold group"
              style={B}
            >
              Book Consultation 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
            </motion.a>

            <motion.a
              href="/service"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 px-9 py-5 rounded-xl border border-[#2C1810]/15 hover:border-[#C9956A] text-[#2C1810] hover:text-[#C9956A] text-xs tracking-[0.18em] uppercase transition-all duration-300 font-bold"
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
