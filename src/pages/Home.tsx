
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "motion/react";
import { ArrowRight, Heart, AlertTriangle, XCircle, ChevronRight } from "lucide-react";

import { D, M, B, GOLD, EASE, GRAIN, STEPS, DOCTORS, STANDARDS, type Step } from "../lib/constants";
import { FadeUp, SlideIn, Rule, Tag, InputField } from "../components/ui/shared";
import { TeamSection } from "../components/home/TeamSection";
export function Hero({ ready }: { ready: boolean }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const d = (base: number) => ready ? base : 999;
  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#2C1810] flex flex-col">
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
      <motion.div className="absolute inset-0 z-0" style={{ y: imgY }}>
        <img src="https://images.unsplash.com/photo-1636153279424-cb5d1e00f5a2?w=1600&h=2000&fit=crop&auto=format&crop=faces"
          alt="The spirit of COSMO HOME" className="w-full h-full object-cover object-center scale-110" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/88 via-[#2C1810]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-transparent to-[#2C1810]/20" />
      </motion.div>

      <motion.div className="relative z-20 flex flex-col justify-end pb-16 md:pb-24 pt-32 px-6 md:px-16 lg:px-24 min-h-screen max-w-7xl mx-auto w-full"
        style={{ y: textY }}>
        <motion.p className="text-[#C9956A] text-xs tracking-[0.15em] uppercase mb-6" style={M}
          initial={{ opacity: 0, x: -16 }} animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: d(0.3) }}>
          ✨ EXPERT-LED · SKIN · HAIR · AESTHETICS
        </motion.p>

        <h1 className="text-[#FAF7F2] text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] mb-6 max-w-3xl" style={D}>
          {["Beauty", "Feels", "At Home."].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span className={`block ${i === 1 ? "italic" : ""}`}
                initial={{ y: "105%" }} animate={ready ? { y: 0 } : {}}
                transition={{ duration: 1.0, delay: d(0.45 + i * 0.15), ease: EASE }}>
                {word}
              </motion.span>
            </div>
          ))}
        </h1>

        <motion.p className="text-[#FAF7F2]/90 text-base md:text-lg max-w-lg leading-loose mb-8" style={B}
          initial={{ opacity: 0, y: 18 }} animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: d(0.95) }}>
          Expert-led aesthetic medicine designed around confidence, care, and your most natural beauty.
        </motion.p>

        <motion.div className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 14 }} animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: d(1.15) }}>
          <motion.a href="/#invitation" whileHover={{ scale: 1.03, boxShadow: "0 0 32px rgba(201,149,106,0.5)" }} whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 px-9 py-4 bg-[#C9956A] text-[#FAF7F2] text-xs tracking-[0.22em] uppercase shadow-lg shadow-[#C9956A]/25" style={B}>
            Begin Your Journey <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a href="/#philosophy" whileHover={{ scale: 1.02 }} style={B}
            className="inline-flex items-center gap-2 text-[#FAF7F2]/82 text-xs tracking-[0.2em] uppercase hover:text-[#FAF7F2] transition-colors py-4 border-b border-[#FAF7F2]/20 hover:border-[#C9956A]">
            Discover Our Story
          </motion.a>
        </motion.div>

        <motion.div className="mt-10 pt-8 border-t border-[#FAF7F2]/15 flex flex-wrap gap-6 sm:gap-14"
          initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: d(1.4) }}>
          {[{ n: "20+", l: "Years of Care" }, { n: "3,800+", l: "Transformations" }, { n: "5 Doctors", l: "On Your Side" }].map(({ n, l }, i) => (
            <motion.div key={l} initial={{ opacity: 0, y: 12 }} animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: d(1.5 + i * 0.12) }}>
              <p className="text-[#C9956A] text-2xl md:text-3xl" style={D}>{n}</p>
              <p className="text-[#FAF7F2]/88 text-xs tracking-widest mt-1 uppercase" style={M}>{l}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export function Philosophy() {
  return (
    <section id="philosophy" className="py-6 md:py-32 px-6 md:px-16 lg:px-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        <FadeUp><Tag>Chapter 02 — The Philosophy</Tag></FadeUp>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start mt-10">
          <div>
            <FadeUp delay={0.05}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#2C1810]" style={D}>
                We do not change<br /><em>faces.</em>
              </h2>
            </FadeUp>
            <Rule delay={0.2} />
            <FadeUp delay={0.1}>
              <p className="text-base md:text-lg text-[#2C1810] leading-relaxed" style={B}>
                We help you become the most radiant, confident version of yourself.
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="mt-10 p-8 bg-[#2C1810] relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
                <p className="relative text-lg md:text-xl text-[#FAF7F2] leading-snug" style={{ ...D, fontStyle: "italic" }}>
                  "We do not change faces. We help people become the best version of themselves."
                </p>
                <p className="relative mt-4 text-xs tracking-[0.3em] uppercase text-[#C9956A]" style={M}>— Dr. Ruxana, Founder</p>
              </motion.div>
            </FadeUp>
          </div>
          <div className="flex flex-col gap-6 lg:pt-4">
            {[
              { n: "I", title: "Beauty should feel personal", body: "No two faces are alike. No two journeys are alike. COSMO HOME was built on the belief that aesthetic medicine must begin with listening — truly listening — before it begins with treating." },
              { n: "II", title: "Expertise is an act of care", body: "The most beautiful outcomes come not from the newest technology, but from the deepest understanding of anatomy, proportion, and the subtlety of natural ageing." },
              { n: "III", title: "You deserve to feel at home here", body: "Most clinics are transactional. We built COSMO HOME to be the opposite — a place where you feel safe, heard, and genuinely cared for. Not a number. A person." },
            ].map((item, i) => (
              <FadeUp key={item.n} delay={0.1 + i * 0.1}>
                <motion.div whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="flex gap-5 group cursor-default">
                  <span className="text-sm text-[#C9956A] mt-0.5 shrink-0 w-6 font-medium" style={M}>{item.n}</span>
                  <div>
                    <p className="text-base text-[#2C1810] mb-1.5" style={{ ...D, fontStyle: "italic" }}>{item.title}</p>
                    <p className="text-base text-[#5C4A42] leading-loose" style={B}>{item.body}</p>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
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
    <section ref={ref} className="relative  bg-[#FAF7F2]">
      <motion.div className="bg-[#1C0E08] mx-0 md:mx-10 lg:mx-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
        <motion.div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #C9956A 0%, transparent 70%)" }}
          animate={{ opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 7, repeat: Infinity }} />
        <div className="relative z-10 px-5 sm:px-8 md:px-16 lg:px-24 py-6 md:py-24 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[140px_1fr] gap-8 lg:gap-16 items-start">
            {/* Clock */}
            <FadeUp className="flex flex-col items-center lg:items-start gap-4 lg:pt-2">
              <motion.div className="relative w-20 h-20 rounded-full border border-[#C9956A]/40 flex items-center justify-center"
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#FAF7F2] leading-[1.1] mt-4 mb-5" style={D}>
                  Extraordinary care takes<br /><em>extraordinary time.</em> 🕊️
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-base text-[#FAF7F2]/90 leading-loose mb-5 max-w-2xl" style={B}>
                  We have heard you. We know that sometimes, the wait feels long. And we want you to understand why — because the answer is <em>you</em>.
                </p>
                <p className="text-base text-[#FAF7F2]/90 leading-loose mb-5 max-w-2xl" style={B}>
                  <strong className="text-[#FAF7F2]/90 font-medium">Every patient deserves to be heard, understood, and guided with complete attention.</strong> When the patient before you is with Dr. Ruxana, they are not being hurried. Their concerns are being listened to fully. Their questions answered honestly.
                </p>
                <p className="text-base text-[#FAF7F2]/75 leading-relaxed max-w-2xl" style={B}>
                  When it is your turn, you will receive exactly the same. We do not believe in 10-minute appointments. We believe in the time it takes to truly care.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="mt-8 text-sm text-[#C9956A]/70 leading-relaxed border-l-2 border-[#C9956A]/30 pl-5" style={{ ...D, fontStyle: "italic" }}>
                  "Thank you for your patience. It means everything — to us, and to every patient who walks through our door."
                  <span className="block mt-2 text-xs not-italic text-[#C9956A]/50" style={M}>— Dr. Ruxana</span>
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-5 md:pt-10">
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
            Meet Dr.<br /><em>Ruxana.</em>
          </h2>

          <p className="text-base md:text-sm text-[#2C1810]/80 leading-[1.85] mb-4 max-w-[450px]" style={B}>
            Dr. Ruxana did not enter aesthetic medicine to sell treatments. She entered it because she witnessed, again and again, how much a woman's confidence shapes her entire life — her relationships, her ambitions, her sense of self.
          </p>
          <p className="text-base md:text-sm text-[#2C1810]/80 leading-[1.85] mb-8 max-w-[450px]" style={B}>
            She trained for over a decade before founding COSMO HOME — not as a clinic, but as a philosophy. A belief that the most powerful aesthetic outcomes are gentle, natural, and deeply personal.
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


export function Transformation() {
  const stories = [
    { name: "Sofia, 38", tag: "Confidence Restored ✨", story: '"After two children and a decade of putting myself last, I forgot what it felt like to look in the mirror and feel proud. Dr. Ruxana gave me that back — quietly, naturally."', img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop&auto=format" },
    { name: "Amara, 45", tag: "Natural Renewal 🌿", story: '"People kept asking if I had been on holiday. That was all I wanted — to look rested, not treated. Dr. Ruxana understood that without me having to explain it twice."', img: "https://images.unsplash.com/photo-1593351799227-75df2026356b?w=800&h=1000&fit=crop&auto=format" },
    { name: "Elena, 31", tag: "New Chapter 🦋", story: '"Starting a business changes you. I needed to feel as capable on the outside as I felt within. COSMO HOME did not change me — it aligned how I look with who I have become."', img: "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?w=800&h=1000&fit=crop&auto=format" },
  ];
  return (
    <section className="py-6 md:py-32 px-6 md:px-16 lg:px-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 gap-6">
          <FadeUp>
            <Tag>Chapter 04 — Transformation</Tag>
            <h2 className="text-4xl md:text-5xl leading-[1.05] text-[#2C1810] mt-3" style={D}>The art of<br /><em>becoming.</em></h2>
          </FadeUp>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <FadeUp key={s.name} delay={i * 0.1}>
              <motion.div className="group flex flex-col h-full" whileHover="hover">
                <div className="relative overflow-hidden aspect-[4/5] bg-[#EDE5D8] mb-5">
                  <motion.img src={s.img} alt={s.name} className="w-full h-full object-cover object-top"
                    variants={{ hover: { scale: 1.06 } }} transition={{ duration: 0.7, ease: EASE }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/60 to-transparent" />
                  <motion.div className="absolute inset-0 bg-[#C9956A]/8" variants={{ hover: { opacity: 1 } }} initial={{ opacity: 0 }} />
                  <div className="absolute bottom-5 left-5">
                    <p className="text-xs tracking-[0.25em] uppercase text-[#C9956A] mb-1" style={M}>{s.tag}</p>
                    <p className="text-[#FAF7F2] text-lg" style={D}>{s.name}</p>
                  </div>
                </div>
                <p className="text-base text-[#5C4A42] leading-loose flex-1" style={{ ...D, fontStyle: "italic" }}>{s.story}</p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experiences() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const exps = [
    { name: "Skin Renewal Experience ✨", tagline: "Rediscover your glow", desc: "A deeply personalised skin journey combining medical-grade analysis, bespoke topical protocols, and precision regenerative treatments. Designed to restore luminosity and texture — naturally, gradually, lastingly.", duration: "From 3 sessions", suitedFor: "All skin types seeking radiance" },
    { name: "Age Gracefully Experience 🌸", tagline: "Confidence, not correction", desc: "A staged approach to natural facial rejuvenation. We work with the architecture of your face — not against it — using subtle volume restoration and refined contouring.", duration: "Ongoing, quarterly", suitedFor: "35–60 · natural longevity seekers" },
    { name: "Confidence Restoration 🦋", tagline: "Return to yourself", desc: "For those at a turning point — post-pregnancy, post-illness, post-life-change — built around rebuilding your relationship with yourself and your reflection.", duration: "Bespoke programme", suitedFor: "Women navigating life transitions" },
    { name: "Hair Revival Experience 🌿", tagline: "Strength from within", desc: "A clinical and holistic approach to hair thinning and scalp health. Addressing the root cause, not just the symptom, through advanced growth factor therapies.", duration: "6-month programme", suitedFor: "Hair thinning at any age" },
    { name: "Personalised Aesthetic Journey 💫", tagline: "Your vision. Our expertise.", desc: "A comprehensive long-term relationship with aesthetic care. Dr. Ruxana designs a multi-year plan aligned with your goals, lifestyle, and evolving beauty.", duration: "Annual programme", suitedFor: "Anyone committed to the long view" },
  ];
  return (
    <section id="experiences" className="py-6 md:py-32 bg-[#2C1810]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <FadeUp>
          <Tag>Chapter 05 — Signature Experiences</Tag>
          <h2 className="text-4xl md:text-5xl text-[#FAF7F2] leading-[1.05] mt-3 mb-6" style={D}>Not treatments.<br /><em>Experiences.</em></h2>
        </FadeUp>
        <div className="grid lg:grid-cols-2 gap-0 border-t border-[#FAF7F2]/10">
          <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-[#FAF7F2]/10">
            {exps.map((e, i) => (
              <div key={e.name} className="flex flex-col border-b border-[#FAF7F2]/10">
                <motion.button onClick={() => setActive(i)} whileHover={{ x: 5 }}
                  className={`text-left py-6 transition-opacity duration-300 ${active === i ? "opacity-100" : "opacity-35 hover:opacity-65"}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg md:text-xl text-[#FAF7F2]" style={D}>{e.name}</p>
                      <p className="text-xs tracking-[0.18em] text-[#C9956A] mt-1 uppercase" style={M}>{e.tagline}</p>
                    </div>
                    <motion.div animate={{ rotate: active === i ? 90 : 0 }} className="lg:hidden shrink-0 text-[#C9956A] transition-transform">
                      <ChevronRight size={16} />
                    </motion.div>
                    <motion.div animate={{ x: active === i ? 5 : 0 }} className="hidden lg:block shrink-0 text-[#C9956A] transition-transform">
                      <ChevronRight size={16} />
                    </motion.div>
                  </div>
                </motion.button>

                {/* Mobile Accordion Content */}
                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.div
                      className="lg:hidden overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      <div className="pb-8 pt-2">
                        <p className="text-sm text-[#FAF7F2]/90 leading-loose mb-5" style={B}>{exps[active].desc}</p>
                        {[{ label: "Duration", val: exps[active].duration }, { label: "Suited for", val: exps[active].suitedFor }].map(({ label, val }) => (
                          <div key={label} className="flex gap-4 mb-2">
                            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9956A] w-20 shrink-0 pt-0.5" style={M}>{label}</span>
                            <span className="text-xs text-[#FAF7F2]/85" style={B}>{val}</span>
                          </div>
                        ))}
                        <div className="mt-6 flex flex-col gap-3">
                          {active === 0 && (
                            <motion.button
                              onClick={() => navigate("/service")}
                              whileTap={{ scale: 0.97 }}
                              style={B}
                              className="inline-flex justify-center items-center gap-3 w-full py-3.5 bg-[#C9956A] text-[#FAF7F2] text-xs tracking-[0.22em] uppercase rounded-lg shadow-lg shadow-[#C9956A]/30 group"
                            >
                              View Full Service Details
                              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                          )}
                          <motion.a
                            href="/#invitation"
                            whileTap={{ scale: 0.97 }}
                            style={B}
                            className="inline-flex justify-center items-center gap-3 w-full py-3.5 border border-[#C9956A]/40 text-[#C9956A] text-xs tracking-[0.22em] uppercase rounded-lg hover:bg-[#C9956A]/10 transition-colors group"
                          >
                            Enquire
                            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:pl-14 pt-6 lg:pt-0 flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: EASE }}>
                <h3 className="text-2xl md:text-3xl text-[#FAF7F2] mb-4" style={{ ...D, fontStyle: "italic" }}>{exps[active].name}</h3>
                <p className="text-base text-[#FAF7F2]/90 leading-loose mb-7" style={B}>{exps[active].desc}</p>
                {[{ label: "Duration", val: exps[active].duration }, { label: "Suited for", val: exps[active].suitedFor }].map(({ label, val }) => (
                  <div key={label} className="flex gap-4 mb-3">
                    <span className="text-xs tracking-[0.25em] uppercase text-[#C9956A] w-24 shrink-0 pt-0.5" style={M}>{label}</span>
                    <span className="text-sm text-[#FAF7F2]/85" style={B}>{val}</span>
                  </div>
                ))}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  {active === 0 && (
                    <motion.button
                      onClick={() => navigate("/service")}
                      whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(201,149,106,0.5)" }}
                      whileTap={{ scale: 0.97 }}
                      style={B}
                      className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#C9956A] text-[#FAF7F2] text-xs tracking-[0.22em] uppercase rounded-lg shadow-lg shadow-[#C9956A]/30 group"
                    >
                      View Full Service Details
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  )}
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
        className="relative overflow-hidden rounded-2xl flex flex-col flex-1 cursor-default"
        style={{
          background: "linear-gradient(160deg, rgba(201,149,106,0.08) 0%, rgba(255,255,255,0.02) 100%)",
          border: "1px solid rgba(201,149,106,0.18)",
        }}
        whileHover={{ borderColor: "rgba(201,149,106,0.55)", y: -4, transition: { duration: 0.25 } }}
      >
        {/* Ghost number watermark */}
        <span
          className="absolute -top-2 -right-2 text-[90px] font-bold select-none pointer-events-none leading-none"
          style={{ ...D, color: "rgba(201,149,106,0.05)" }}
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
            <h3 className="text-xl text-[#FAF7F2] mt-1 leading-snug" style={{ ...D, fontStyle: "italic" }}>
              {step.phase}
            </h3>
          </div>

          {/* Divider */}
          <div className="h-px w-10" style={{ background: `${step.color}60` }} />

          {/* Description */}
          <p className="text-base text-[#FAF7F2]/90 leading-loose" style={B}>
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
    <section id="journey" ref={ref} className="relative py-6 md:py-32 bg-[#160A05] overflow-hidden">
      {/* Ambient glows */}
      <motion.div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,149,106,0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,112,96,0.07) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 10, repeat: Infinity, delay: 4 }} />
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-5">
          <FadeUp>
            <Tag>Chapter 06 — The COSMO HOME Journey 🗺️</Tag>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF7F2] leading-[1.0] mt-3" style={D}>
              Imagine yourself<br /><em>here.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-sm text-[#FAF7F2]/65 max-w-xs leading-relaxed" style={B}>
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
              style={{ background: "linear-gradient(to right, transparent, rgba(201,149,106,0.5) 10%, rgba(201,149,106,0.5) 90%, transparent)" }}
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
            style={{ background: "linear-gradient(to bottom, rgba(201,149,106,0.6), rgba(201,149,106,0.1))" }}
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
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-5 pt-10 border-t border-[#FAF7F2]/10">
            <p className="text-sm text-[#FAF7F2]/65 text-center" style={B}>
              Every journey begins with a single conversation. 🌸
            </p>
            <motion.a href="/#invitation"
              whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(201,149,106,0.45)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#C9956A] text-[#FAF7F2] text-xs tracking-[0.2em] uppercase shadow-lg shadow-[#C9956A]/25 whitespace-nowrap" style={B}>
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
    <section id="our-team" className="bg-[#FAF7F2]">
      {/* ── ANTI-QUACKERY first ── */}
      <div id="our-standards" className="bg-[#1C0E08] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
        <motion.div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #C9956A 0%, transparent 65%)", opacity: 0.08 }}
          animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 9, repeat: Infinity }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-6 md:py-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 mb-6">
            <SlideIn from="left">
              <Tag>🛡️ Our Standards — Anti-Quackery</Tag>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] leading-[1.05] mt-3" style={D}>
                Not everyone who<br />holds a needle<br /><em>should.</em>
              </h2>
            </SlideIn>
            <SlideIn from="right" delay={0.1}>
              <p className="text-base text-[#FAF7F2]/85 leading-relaxed mb-4" style={B}>
                <strong className="text-[#FAF7F2]/90 font-medium">The aesthetics industry has a problem.</strong> Anyone — with zero medical training — can legally inject your face. Thousands of people every year are harmed by unqualified practitioners operating out of beauty salons and pop-up clinics.
              </p>
              <p className="text-base text-[#FAF7F2]/85 leading-relaxed mb-6" style={B}>
                Dr. Ruxana has been a vocal advocate against this — because she has seen the consequences. Patients arriving with occlusions, necrosis, and lasting trauma from treatments performed by people who had no right to perform them.
              </p>
              <motion.blockquote initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7 }}
                className="border-l-2 border-[#C9956A] pl-5 text-base md:text-lg text-[#FAF7F2]/80 leading-snug"
                style={{ ...D, fontStyle: "italic" }}>
                "Aesthetic medicine performed without medical knowledge is not a luxury service. It is a risk to your health, your face, and your life." ⚠️
              </motion.blockquote>
              <p className="mt-3 text-xs text-[#C9956A] tracking-widest" style={M}>— Dr. Ruxana</p>
            </SlideIn>
          </div>

          {/* Tab switcher */}
          <FadeUp>
            <div className="flex w-full sm:w-fit border border-[#FAF7F2]/15 mb-6">
              {[{ id: "standards" as const, icon: "🛡️", label: "COSMO HOME Standards" }, { id: "danger" as const, icon: "⚠️", label: "The Dangers" }].map(({ id, icon, label }) => (
                <button key={id} onClick={() => setTab(id)} style={B}
                  className={`w-1/2 lg:w-auto flex items-center justify-center gap-1 px-5 py-3 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${tab === id ? "bg-[#C9956A] text-[#FAF7F2]" : "text-[#FAF7F2]/65 hover:text-[#FAF7F2]/88"}`}>
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
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#FAF7F2]/8">
                  {STANDARDS.map((s, i) => (
                    <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      whileHover={{ backgroundColor: "rgba(201,149,106,0.07)" }}
                      className="bg-[#1C0E08] p-7 flex flex-col gap-4 group transition-colors">
                      <motion.div className="w-10 h-10 rounded-full border border-[#C9956A]/30 flex items-center justify-center shrink-0 group-hover:border-[#C9956A] transition-colors"
                        whileHover={{ scale: 1.1 }}>
                        <s.Icon size={18} color={GOLD} />
                      </motion.div>
                      <p className="text-base text-[#FAF7F2]" style={{ ...D, fontStyle: "italic" }}>{s.label}</p>
                      <p className="text-base text-[#FAF7F2]/90 leading-loose" style={B}>{s.body}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            {tab === "danger" && (
              <motion.div key="danger" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease: EASE }}>
                <div className="grid sm:grid-cols-2 gap-px bg-[#FAF7F2]/8">
                  {[
                    { Icon: AlertTriangle, label: "No medical qualification required", body: "Anyone in the UK can legally call themselves an 'aesthetic practitioner' with zero medical training. Weekend courses are considered sufficient." },
                    { Icon: XCircle, label: "No anatomy knowledge = real danger", body: "Injecting the face without understanding vasculature can cause blindness, necrosis, or permanent disfigurement. This is not rare — it is rising." },
                    { Icon: AlertTriangle, label: "Filler in the wrong hands", body: "Vascular occlusion — where filler blocks a blood vessel — requires immediate medical intervention. Non-doctors cannot diagnose or treat this emergency." },
                    { Icon: XCircle, label: "Minimal regulatory oversight", body: "The aesthetics industry remains largely unregulated. Many clinics operate legally without any clinical governance, oversight, or accountability." },
                  ].map((r, i) => (
                    <motion.div key={r.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      whileHover={{ backgroundColor: "rgba(201,149,106,0.05)" }}
                      className="bg-[#1C0E08] p-7 flex gap-5 group transition-colors">
                      <div className="w-10 h-10 rounded-full border border-[#C9956A]/25 flex items-center justify-center shrink-0 group-hover:border-[#C9956A] transition-colors mt-0.5">
                        <r.Icon size={18} color={GOLD} />
                      </div>
                      <div>
                        <p className="text-base text-[#FAF7F2] mb-2" style={{ ...D, fontStyle: "italic" }}>{r.label}</p>
                        <p className="text-base text-[#FAF7F2]/90 leading-loose" style={B}>{r.body}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <FadeUp delay={0.3}>
                  <div className="mt-6 p-6 bg-[#C9956A]/10 border border-[#C9956A]/25">
                    <p className="text-base text-[#FAF7F2]/90 leading-loose" style={B}>
                      ⚠️ <strong className="text-[#FAF7F2]/90 font-medium">Before booking any aesthetic treatment, anywhere:</strong> Ask to see the practitioner's full medical qualifications. Confirm GMC/GDC registration. Check the clinic is CQC-registered. Ensure they carry medical indemnity. If they can't answer clearly — walk away.
                    </p>
                  </div>
                </FadeUp>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── TEAM — completely new composed design ── */}
      <TeamSection />
    </section>
  );
}

export function Stories() {
  const stories = [
    { author: "Isabelle W., 42", context: "Entrepreneur · Skin Renewal Experience", pull: "I had forgotten what my own confidence felt like. 💛", body: "Two years running a company, two years of putting everything else first. When I finally walked through COSMO HOME's door, I did not want a procedure. I wanted to feel like myself again. Six months in, my team keeps asking what I have changed. I tell them: my relationship with myself." },
    { author: "Nadia P., 35", context: "Creative Director · Age Gracefully Experience", pull: "She listened before she said a single word about treatment. 🌸", body: "I had been to two other clinics before COSMO HOME. Both had a menu ready before I finished a sentence. Dr. Ruxana asked me what I was feeling. A year later, I look the way I feel on my best days. That is all I ever wanted." },
    { author: "Claudia M., 51", context: "Architect · Personalised Aesthetic Journey", pull: "Beauty should grow with you, not fight against you. ✨", body: "Dr. Ruxana designed a two-year plan for me. Not to look younger — to look like myself at my best. The most considered, thoughtful investment I have made in myself. I am more proud of how I look at 51 than I ever was at 35." },
  ];
  return (
    <section id="stories" className="py-6 md:py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <FadeUp>
          <Tag>Chapter 07 — Real Stories 💬</Tag>
          <h2 className="text-4xl md:text-5xl text-[#2C1810] leading-[1.05] mt-3 mb-14" style={D}>
            People remember<br /><em>stories.</em>
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
    <section id="invitation" className="relative py-6 md:py-32 overflow-hidden bg-[#2C1810]">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
      <motion.div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9956A 0%, transparent 70%)" }}
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.12, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #A86A5A 0%, transparent 70%)" }}
        animate={{ opacity: [0.06, 0.12, 0.06], scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity, delay: 3 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          <FadeUp>
            <Tag>Chapter 08 — The Invitation 🌸</Tag>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF7F2] leading-[1.05] mt-3 mb-5" style={D}>
              Your journey<br /><em>begins here.</em>
            </h2>
            <p className="text-base text-[#FAF7F2]/82 leading-relaxed mb-10 max-w-sm" style={B}>
              Book a private consultation with Dr. Ruxana and discover what truly personalised aesthetic care feels like. No pressure. No treatment menu. Just a conversation.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              {[
                { label: "Phone", value: "+91 99463 36480" },
                { label: "Email", value: "cosmohomenilambur@gmail.com" },
                { label: "Address", value: "Kalathinkadavu Rd, Nilambur, Kerala 679329" },
                { label: "Hours", value: "Mon–Sat · 9am–7pm" },
              ].map(({ label, value }, i) => (
                <motion.div key={label} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-6">
                  <span className="text-xs tracking-[0.25em] uppercase text-[#C9956A] w-16 shrink-0 pt-0.5" style={M}>{label}</span>
                  <span className="text-sm text-[#FAF7F2]/82" style={B}>{value}</span>
                </motion.div>
              ))}
            </div>

          </FadeUp>

          <FadeUp delay={0.12}>
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form key="form" exit={{ opacity: 0, y: -16 }}
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="bg-[#FAF7F2] p-5 sm:p-8 md:p-10 flex flex-col gap-5">
                  <p className="text-xl text-[#2C1810] mb-1" style={{ ...D, fontStyle: "italic" }}>Begin your story. 🌸</p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField label="First name" placeholder="First name" />
                    <InputField label="Last name" placeholder="Last name" />
                  </div>
                  <InputField label="Phone" type="tel" placeholder="+91 98765 43210" />

                  {/* Custom Dropdown */}
                  {(() => {
                    const options = [
                      "I am not sure yet",
                      "Skin Renewal Experience",
                      "Age Gracefully Experience",
                      "Confidence Restoration",
                      "Hair Revival Experience",
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
                  className="bg-[#FAF7F2] p-10 md:p-16 flex flex-col items-center justify-center text-center min-h-[440px]">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-16 h-16 rounded-full border-2 border-[#C9956A] flex items-center justify-center mb-6">
                    <Heart size={24} color={GOLD} />
                  </motion.div>
                  <p className="text-4xl mb-4">🌸</p>
                  <p className="text-2xl text-[#2C1810] mb-4" style={{ ...D, fontStyle: "italic" }}>Thank you.</p>
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

export default function HomePage({ ready }: { ready: boolean }) {
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
