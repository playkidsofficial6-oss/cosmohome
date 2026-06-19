
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "motion/react";
import { ArrowRight, Menu, X, Instagram, Facebook, Home, MessageCircle, ClipboardList, Sparkles, Heart, Award, Shield, AlertTriangle, CheckCircle, XCircle, Phone, BadgeCheck, Stethoscope, GraduationCap, Users, ChevronRight } from "lucide-react";

import { D, M, B, GOLD, EASE, GRAIN, MACHINE_SPECS, WHO_NEEDS, SESSION_PLAN, TIMELINE, WA_PATH } from "../lib/constants";
import { CTAButtons, FadeUp, Tag } from "../components/ui/shared";
export default function ServicePage() {
  const [activeSession, setActiveSession] = useState(0);
  return (
    <AnimatePresence>
      <motion.div
        key="service-page"
        style={B}
        className="min-h-screen bg-[#FAF7F2]"
      >
        {/* ══ 1. CINEMATIC HERO ══ */}
        <section className="relative min-h-screen flex flex-col lg:grid lg:grid-cols-2 bg-[#160A05] pt-16 overflow-hidden">
          {/* Left — content */}
          <div className="relative z-10 flex flex-col justify-center px-5 sm:px-10 md:px-16 py-20 lg:py-0">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              {/* Social proof badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                style={{ background: "rgba(201,149,106,0.12)", borderColor: "rgba(201,149,106,0.3)" }}>
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-xs text-[#FAF7F2]/88" style={B}>4.9 · Rated by 380+ patients</span>
              </div>
            </motion.div>

            <FadeUp>
              <p className="text-xs tracking-[0.35em] uppercase text-[#C9956A] mb-3" style={M}>Signature Experience No. 01</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-7xl text-[#FAF7F2] leading-[1.0] mb-6" style={D}>
                Skin Renewal<br /><em>Experience.</em>
              </h1>
              <p className="text-base md:text-lg text-[#FAF7F2]/88 max-w-md leading-loose mb-8" style={B}>
                Medical-grade skin transformation by Dr. Ruxana — restoring clarity, luminosity, and texture with zero downtime.
              </p>
            </FadeUp>

            {/* Inline key stats */}
            <FadeUp delay={0.1}>
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-sm">
                {[
                  { n: "3–6", l: "Sessions recommended" },
                  { n: "0", l: "Days downtime" },
                  { n: "1st", l: "Session shows results" },
                  { n: "100%", l: "Doctor performed" },
                ].map(({ n, l }) => (
                  <div key={l} className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,149,106,0.2)" }}>
                    <p className="text-2xl text-[#C9956A]" style={D}>{n}</p>
                    <p className="text-xs text-[#FAF7F2]/65 mt-0.5" style={B}>{l}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <CTAButtons />

            </FadeUp>
          </div>

          {/* Right — full image */}
          <div className="relative min-h-[50vh] lg:min-h-full">
            <img src="https://images.unsplash.com/photo-1761718209794-e0588aafbcc4?w=1000&h=1400&fit=crop&auto=format"
              alt="Skin Renewal treatment" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#160A05] via-transparent to-transparent lg:from-transparent lg:via-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#160A05]/80 to-transparent lg:from-[#160A05]/30" />
            {/* Floating trust card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="absolute bottom-6 right-6 p-5 rounded-2xl max-w-[220px]"
              style={{ background: "rgba(22,10,5,0.88)", backdropFilter: "blur(12px)", border: "1px solid rgba(201,149,106,0.25)" }}>
              <p className="text-xs tracking-[0.18em] uppercase text-[#C9956A] mb-2" style={M}>👩‍⚕️ Performed by</p>
              <p className="text-base text-[#FAF7F2]" style={{ ...D, fontStyle: "italic" }}>Dr. Ruxana</p>
              <p className="text-xs text-[#FAF7F2]/65 mt-1" style={B}>MBBS · MRCS · Fellow BCAM</p>
            </motion.div>
          </div>
        </section>

        {/* ══ 2. WHAT IS THIS ══ */}
        <section className="pt-6 pb-12 md:py-28 px-5 sm:px-10 md:px-16 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-20 items-center">
              <FadeUp>
                <Tag>What Is This?</Tag>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C1810] leading-[1.05] mt-3 mb-6" style={D}>
                  This is not<br /><em>a salon facial.</em>
                </h2>
                <p className="text-base text-[#2C1810] leading-loose mb-4" style={B}>
                  The Skin Renewal Experience is a multi-step <strong>medical procedure</strong> — not a beauty treatment. Using our HydraFacial MD Elite system, it simultaneously cleanses, exfoliates, extracts, and infuses with doctor-prescribed serums in a single session.
                </p>
                <p className="text-base text-[#5C4A42] leading-loose mb-8" style={B}>
                  What makes it different: every protocol is designed by Dr. Ruxana specifically for your skin biology. The serum mix you receive exists nowhere else. It is yours.
                </p>

                {/* Benefit grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {[
                    { icon: "🧬", b: "Clinically proven", d: "Peer-reviewed efficacy data" },
                    { icon: "🩺", b: "Doctor-prescribed", d: "Bespoke serum protocol" },
                    { icon: "⚡", b: "Immediate glow", d: "Visible after one session" },
                    { icon: "🔄", b: "Builds over time", d: "Cumulative collagen lift" },
                  ].map(({ icon, b, d }) => (
                    <motion.div key={b} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 280 }}
                      className="flex gap-3 items-start p-4 rounded-xl"
                      style={{ background: "rgba(201,149,106,0.07)", border: "1px solid rgba(201,149,106,0.18)" }}>
                      <span className="text-xl shrink-0">{icon}</span>
                      <div>
                        <p className="text-sm font-medium text-[#2C1810]" style={B}>{b}</p>
                        <p className="text-xs text-[#5C4A42] mt-0.5" style={B}>{d}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <CTAButtons light />
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="relative">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#EDE5D8]">
                    <img src="https://images.unsplash.com/photo-1761819922656-d1b77eef49c0?w=800&h=1000&fit=crop&auto=format"
                      alt="Skin treatment being performed" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/50 to-transparent" />
                  </div>
                  {/* Clinical note */}
                  <motion.div whileHover={{ y: -3 }} className="absolute -bottom-5 -left-4 sm:-left-8 p-5 rounded-2xl max-w-[260px]"
                    style={{ background: "#2C1810", boxShadow: "0 20px 60px rgba(44,24,16,0.25)" }}>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#C9956A] mb-1.5" style={M}>Clinical note</p>
                    <p className="text-sm text-[#FAF7F2]/88 leading-relaxed" style={B}>Treatment parameters are adjusted in real-time by Dr. Ruxana — every session is different.</p>
                  </motion.div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ══ 3. MACHINE ══ */}
        <section className="py-6 md:py-28 bg-[#1C0E08] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
          <motion.div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,149,106,0.1) 0%, transparent 65%)" }}
            animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 9, repeat: Infinity }} />

          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-16 relative z-10">
            <div className="text-center mb-14">
              <FadeUp>
                <Tag>🔬 The Technology</Tag>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] leading-[1.05] mt-3" style={D}>
                  The machine<br /><em>behind your results.</em>
                </h2>
              </FadeUp>
            </div>

            {/* Side-by-side machine showcase + comparison table */}
            <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-10">
              {/* Machine card */}
              <FadeUp delay={0.05}>
                <div className="relative rounded-3xl overflow-hidden h-full flex flex-col"
                  style={{ background: "linear-gradient(145deg, rgba(44,24,16,0.9), rgba(22,10,5,0.95))", border: "1px solid rgba(201,149,106,0.25)" }}>
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5 px-4 py-1.5 rounded-full text-xs text-[#C9956A] font-medium z-10" style={{ background: "rgba(22,10,5,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(201,149,106,0.35)", ...M }}>
                    ✅ Our Device
                  </div>
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1631217871099-88310a909a32?w=800&h=450&fit=crop&auto=format"
                      alt="HydraFacial MD Elite" className="w-full h-full object-cover opacity-75" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#160A05]/80" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl text-[#FAF7F2] mb-1" style={{ ...D, fontStyle: "italic" }}>HydraFacial MD Elite</h3>
                    <p className="text-xs text-[#C9956A] tracking-widest uppercase mb-4" style={M}>Medical-Grade · FDA Cleared · Hospital Standard</p>
                    <p className="text-base text-[#FAF7F2]/88 leading-loose mb-5" style={B}>
                      The gold standard for medical skin resurfacing — used in leading dermatology hospitals worldwide. Delivers simultaneous multi-step treatment with doctor-prescribed serum infusion that no standard device can replicate.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Vortex-Fusion® System", "Medical-grade suction", "AI skin analysis", "Custom serums"].map(f => (
                        <span key={f} className="px-3 py-1 rounded-full text-xs text-[#C9956A]"
                          style={{ background: "rgba(201,149,106,0.12)", border: "1px solid rgba(201,149,106,0.25)", ...B }}>{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* Comparison table */}
              <FadeUp delay={0.12}>
                <div className="flex flex-col gap-3 md:gap-4 mt-2 lg:mt-0">
                  <p className="text-xs tracking-[0.2em] uppercase text-[#FAF7F2]/65 mb-1 md:mb-2" style={M}>COSMO HOME vs Standard Clinic</p>
                  {MACHINE_SPECS.map((row, i) => (
                    <motion.div key={row.label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                      className="flex flex-col md:grid md:grid-cols-[auto_1fr_1fr] gap-4 md:gap-3 items-start rounded-xl p-5 md:p-4"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,149,106,0.1)" }}>
                      <p className="text-sm md:text-xs text-[#C9956A] md:pt-0.5 md:w-24 shrink-0 border-b border-[#C9956A]/10 md:border-0 pb-2 md:pb-0 w-full" style={M}>{row.label}</p>

                      <div className="flex flex-col gap-1.5 w-full">
                        <div className="flex gap-3 md:gap-2 items-start">
                          <span className="text-base md:text-sm shrink-0 mt-0.5 md:mt-0">✅</span>
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-[#FAF7F2]/40 md:hidden block mb-0.5" style={M}>Cosmo Home</span>
                            <p className="text-sm md:text-xs text-[#FAF7F2]/88 leading-relaxed" style={B}>{row.ours}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5 w-full mt-1 md:mt-0 pt-3 border-t border-white/5 md:border-0 md:pt-0">
                        <div className="flex gap-3 md:gap-2 items-start">
                          <span className="text-base md:text-sm shrink-0 mt-0.5 md:mt-0">⚠️</span>
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-[#FAF7F2]/40 md:hidden block mb-0.5" style={M}>Standard Clinic</span>
                            <p className="text-sm md:text-xs text-[#FAF7F2]/50 leading-relaxed" style={B}>{row.standard}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ══ 4. WHO NEEDS THIS ══ */}
        <section className="py-6 md:py-28 px-5 sm:px-10 md:px-16 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[380px_1fr] gap-6 lg:gap-20 items-start">
              <FadeUp>
                <Tag>Is This For You?</Tag>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C1810] leading-[1.05] mt-3 mb-5" style={D}>
                  You need<br /><em>this if…</em>
                </h2>
                <p className="text-base text-[#5C4A42] leading-loose mb-6" style={B}>
                  Suitable for all skin tones and types. No recovery time. A brief clinical check is completed at your first consultation.
                </p>
                {/* Contraindication */}
                <div className="p-5 rounded-2xl border-l-4 border-[#C9956A] mb-8"
                  style={{ background: "rgba(201,149,106,0.07)" }}>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#C9956A] mb-2" style={M}>⚠️ Not suitable if</p>
                  <p className="text-sm text-[#5C4A42] leading-relaxed" style={B}>
                    Active cold sores, open wounds, severe rosacea, or Roaccutane within 6 months.
                  </p>
                </div>
                <CTAButtons light />
              </FadeUp>

              <div className="grid sm:grid-cols-2 gap-4">
                {WHO_NEEDS.map((item, i) => (
                  <FadeUp key={item.tag} delay={i * 0.06}>
                    <motion.div whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(201,149,106,0.15)" }}
                      transition={{ type: "spring", stiffness: 260 }}
                      className="p-5 rounded-2xl h-full flex flex-col gap-2"
                      style={{ background: "#FFFFFF", border: "1px solid rgba(44,24,16,0.08)", boxShadow: "0 2px 16px rgba(44,24,16,0.04)" }}>
                      <p className="text-sm font-medium text-[#2C1810]" style={B}>✓ {item.tag}</p>
                      <p className="text-sm text-[#5C4A42] leading-relaxed" style={B}>{item.desc}</p>
                    </motion.div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 5. SESSION PLAN — interactive ══ */}
        <section className="py-6 md:py-28 bg-[#2C1810] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-16 relative z-10">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-20 items-start">
              <FadeUp>
                <Tag>Your Treatment Plan</Tag>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] leading-[1.05] mt-3 mb-6" style={D}>
                  What happens<br /><em>in each session.</em>
                </h2>
                <p className="text-base text-[#FAF7F2]/88 leading-loose mb-8" style={B}>
                  Most patients see transformative results after just 3 sessions. Each session builds on the last — deeper, smarter, more targeted.
                </p>
                {/* Session selector */}
                <div className="flex flex-col gap-2">
                  {SESSION_PLAN.map((s, i) => (
                    <motion.button key={s.n} onClick={() => setActiveSession(i)}
                      whileHover={{ x: 4 }}
                      className={`text-left px-5 py-4 rounded-xl transition-all duration-250 flex items-center justify-between gap-4 ${activeSession === i ? "bg-[#C9956A] text-[#FAF7F2]" : "text-[#FAF7F2]/65 hover:text-[#FAF7F2]"}`}
                      style={{ background: activeSession === i ? "#C9956A" : "rgba(255,255,255,0.04)", border: `1px solid ${activeSession === i ? "#C9956A" : "rgba(201,149,106,0.15)"}` }}>
                      <div className="flex items-center gap-4">
                        <span className="text-sm w-10 shrink-0" style={M}>{s.n}</span>
                        <div>
                          <p className="text-sm font-medium" style={B}>{s.label}</p>
                          <p className="text-xs opacity-70 mt-0.5" style={B}>{s.duration}</p>
                        </div>
                      </div>
                      <ArrowRight size={14} className={`shrink-0 transition-transform ${activeSession === i ? "translate-x-1" : ""}`} />
                    </motion.button>
                  ))}
                </div>
              </FadeUp>

              <div className="lg:pt-16">
                <AnimatePresence mode="wait">
                  <motion.div key={activeSession} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease: EASE }}>
                    <div className="relative p-8 rounded-3xl overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,149,106,0.25)" }}>
                      {/* Ghost number */}
                      <span className="absolute -top-4 -right-2 text-[120px] font-bold leading-none select-none pointer-events-none"
                        style={{ ...D, color: "rgba(201,149,106,0.06)" }}>{activeSession + 1}</span>
                      <p className="text-xs tracking-[0.25em] uppercase text-[#C9956A] mb-3" style={M}>
                        Session {SESSION_PLAN[activeSession].n} · {SESSION_PLAN[activeSession].duration}
                      </p>
                      <h3 className="text-2xl text-[#FAF7F2] mb-4" style={{ ...D, fontStyle: "italic" }}>
                        {SESSION_PLAN[activeSession].label}
                      </h3>
                      <div className="h-px w-12 bg-[#C9956A]/50 mb-5" />
                      <p className="text-base text-[#FAF7F2]/90 leading-loose" style={B}>
                        {SESSION_PLAN[activeSession].detail}
                      </p>
                    </div>

                    {/* Progress indicator */}
                    <div className="flex gap-2 mt-5">
                      {SESSION_PLAN.map((_, i) => (
                        <motion.div key={i} className="h-1 flex-1 rounded-full"
                          animate={{ backgroundColor: i <= activeSession ? "#C9956A" : "rgba(201,149,106,0.2)" }}
                          transition={{ duration: 0.3 }} />
                      ))}
                    </div>
                    <p className="text-xs text-[#FAF7F2]/40 mt-2" style={B}>
                      Session {activeSession + 1} of {SESSION_PLAN.length}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 6. RESULTS TIMELINE ══ */}
        <section className="py-6 md:py-28 px-5 sm:px-10 md:px-16 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 gap-6">
              <FadeUp>
                <Tag>What to Expect</Tag>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C1810] leading-[1.05] mt-3" style={D}>
                  Your skin, transformed<br /><em>step by step.</em>
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-sm text-[#5C4A42] max-w-xs leading-loose" style={B}>
                  Results begin immediately and compound with every session. This is what most patients experience.
                </p>
              </FadeUp>
            </div>

            {/* Desktop: staggered cards */}
            <div className="hidden lg:grid grid-cols-5 gap-4">
              {TIMELINE.map((t, i) => (
                <FadeUp key={t.when} delay={i * 0.1}>
                  <motion.div whileHover={{ y: -8, boxShadow: "0 16px 48px rgba(201,149,106,0.18)" }}
                    transition={{ type: "spring", stiffness: 240 }}
                    className={`relative p-5 rounded-2xl flex flex-col ${i % 2 === 1 ? "mt-8" : ""}`}
                    style={{ background: "#FFFFFF", border: "1px solid rgba(201,149,106,0.2)", boxShadow: "0 4px 20px rgba(44,24,16,0.05)" }}>
                    <span className="text-2xl mb-3">{["✨", "🌱", "🌿", "🌸", "🏆"][i]}</span>
                    <p className="text-xs tracking-[0.22em] uppercase text-[#C9956A] mb-2" style={M}>{t.when}</p>
                    <p className="text-sm text-[#2C1810] leading-relaxed flex-1" style={B}>{t.what}</p>
                    {/* Fill bar */}
                    <div className="mt-4 h-1 rounded-full" style={{ background: "rgba(201,149,106,0.12)" }}>
                      <motion.div className="h-full rounded-full bg-[#C9956A]"
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${20 + i * 20}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 + i * 0.1 }} />
                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </div>

            {/* Mobile: vertical */}
            <div className="lg:hidden relative pl-7 border-l-2 border-[#C9956A]/25">
              {TIMELINE.map((t, i) => (
                <FadeUp key={t.when} delay={i * 0.08}>
                  <div className="relative mb-8 last:mb-0">
                    <div className="absolute -left-9 top-1 w-5 h-5 rounded-full border-2 border-[#C9956A] bg-[#FAF7F2] flex items-center justify-center text-[10px]">
                      {["✨", "🌱", "🌿", "🌸", "🏆"][i]}
                    </div>
                    <p className="text-xs tracking-[0.22em] uppercase text-[#C9956A] mb-1" style={M}>{t.when}</p>
                    <p className="text-base text-[#2C1810] leading-loose" style={B}>{t.what}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 7. FINAL CTA ══ */}
        <section id="sp-book" className="relative overflow-hidden bg-[#160A05]">
          {/* Full bleed background */}
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
              alt="Confident woman" className="w-full h-full object-cover object-top opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#160A05]/95 via-[#160A05]/80 to-[#160A05]/60" />
          </div>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
          <motion.div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,149,106,0.15) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 7, repeat: Infinity }} />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 md:px-16 py-6 md:py-36">
            <div className="grid lg:grid-cols-[1fr_auto] gap-14 lg:gap-24 items-center">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                  style={{ background: "rgba(201,149,106,0.12)", borderColor: "rgba(201,149,106,0.35)" }}>
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                  <span className="text-xs text-[#FAF7F2]/88" style={B}>380+ patients transformed</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#FAF7F2] leading-[1.0] mb-5" style={D}>
                  Ready for skin<br />you're proud of?<br /><em>Start today.</em>
                </h2>
                <p className="text-base text-[#FAF7F2]/82 leading-loose mb-10 max-w-lg" style={B}>
                  Your first session includes a full skin analysis with Dr. Ruxana and a bespoke protocol designed for your skin alone. No generic treatments. No pressure. Just honest, expert care.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <motion.a href="#invitation"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 48px rgba(201,149,106,0.6)" }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#C9956A] text-[#FAF7F2] text-sm tracking-[0.2em] uppercase rounded-2xl shadow-2xl shadow-[#C9956A]/35 font-medium group" style={B}>
                    Book My Consultation
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <motion.a href="https://wa.me/441234567890" target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-3 px-9 py-5 border-2 border-[#FAF7F2]/20 text-[#FAF7F2] text-sm tracking-[0.18em] uppercase rounded-2xl hover:border-[#C9956A] hover:text-[#C9956A] transition-all font-medium" style={B}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d={WA_PATH} /></svg>
                    Ask Dr. Ruxana
                  </motion.a>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-6">
                  {["👩‍⚕️ Doctor-led only", "⏱️ Zero downtime", "🔒 Full confidentiality"].map(t => (
                    <p key={t} className="text-sm text-[#FAF7F2]/65" style={B}>{t}</p>
                  ))}
                </div>
              </FadeUp>

              {/* Compact info card */}
              <FadeUp delay={0.2} className="hidden lg:block">
                <motion.div whileHover={{ y: -5 }} className="p-8 rounded-3xl w-72"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,149,106,0.3)", backdropFilter: "blur(10px)" }}>
                  <p className="text-xs tracking-[0.22em] uppercase text-[#C9956A] mb-6" style={M}>Quick facts</p>
                  {[
                    { label: "Price from", val: "£180 / session" },
                    { label: "Duration", val: "45–75 minutes" },
                    { label: "Recommended", val: "3–6 sessions" },
                    { label: "Frequency", val: "Every 4–6 weeks" },
                    { label: "Downtime", val: "None" },
                    { label: "Performed by", val: "Dr. Ruxana" },
                  ].map(({ label, val }) => (
                    <div key={label} className="flex justify-between items-center py-2.5 border-b border-[#FAF7F2]/8 last:border-0">
                      <span className="text-xs text-[#FAF7F2]/50" style={B}>{label}</span>
                      <span className="text-sm text-[#FAF7F2] font-medium" style={B}>{val}</span>
                    </div>
                  ))}
                  <motion.a href="#invitation"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(201,149,106,0.45)" }}
                    className="mt-6 w-full flex items-center justify-center gap-2 py-3.5 bg-[#C9956A] text-[#FAF7F2] text-xs tracking-[0.2em] uppercase rounded-xl font-medium" style={B}>
                    Book Now <ArrowRight size={13} />
                  </motion.a>
                </motion.div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* <div className="lg:hidden h-20" /> */}
      </motion.div>
    </AnimatePresence>
  );
}
