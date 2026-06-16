
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "motion/react";
import { ArrowRight, Menu, X, Instagram, Facebook, Home, MessageCircle, ClipboardList, Sparkles, Heart, Award, Shield, AlertTriangle, CheckCircle, XCircle, Phone, BadgeCheck, Stethoscope, GraduationCap, Users, ChevronRight } from "lucide-react";

import { D, M, B, GOLD, EASE, EASE2, GRAIN, WA_PATH } from "../../lib/constants";
export function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 44 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: EASE }}>
      {children}
    </motion.div>
    );
}

export function SlideIn({ children, delay = 0, from = "left", className = "" }: { children: React.ReactNode; delay?: number; from?: "left" | "right"; className?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, x: from === "left" ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: EASE }}>
      {children}
    </motion.div>
    );
}

export function Rule({ delay = 0 }: { delay?: number }) {
    const ref = useRef(null);
    const iv = useInView(ref, { once: true });
    return <motion.div ref={ref} className="h-px w-14 bg-[#C9956A] my-5 origin-left"
    initial={{ scaleX: 0 }} animate={iv ? { scaleX: 1 } : {}} transition={{ duration: 1, delay, ease: EASE }} />;
}

export function Tag({ children }: { children: React.ReactNode }) {
    return <span className="text-xs tracking-[0.25em] uppercase text-[#C9956A]" style={M}>{children}</span>;
}

export function Preloader({ onDone }: { onDone: () => void }) {
    useEffect(() => { const t = setTimeout(onDone, 3000); return () => clearTimeout(t); }, [onDone]);
    return (
    <motion.div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1C0E08]"
      initial={{ opacity: 1 }} exit={{ y: "-100%", transition: { duration: 1, ease: EASE2 } }}>
      <motion.div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9956A 0%, transparent 65%)" }}
        initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.18, scale: 1.5 }}
        transition={{ duration: 2.5 }} />
      {["top-8 left-8 border-t border-l", "top-8 right-8 border-t border-r", "bottom-8 left-8 border-b border-l", "bottom-8 right-8 border-b border-r"].map((c, i) => (
        <motion.div key={i} className={`absolute w-10 h-10 border-[#C9956A]/40 ${c}`}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.1 }} />
      ))}
      <motion.p className="relative text-[#FAF7F2] text-3xl uppercase z-10" style={D}
        initial={{ opacity: 0, letterSpacing: "0.6em" }} animate={{ opacity: 1, letterSpacing: "0.3em" }}
        transition={{ duration: 1.4, ease: EASE }}>Cosmo Home</motion.p>
      <motion.div className="relative mt-6 h-px w-40 bg-[#C9956A] origin-left z-10"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.8, delay: 0.5, ease: EASE }} />
      <motion.p className="relative mt-4 text-xs tracking-[0.45em] uppercase text-[#C9956A]/70 z-10" style={M}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
        Beauty Feels At Home ✨
      </motion.p>
    </motion.div>
    );
}

export function InputField({ label, type = "text", placeholder }: { label: string; type?: string; placeholder: string }) {
    const [focused, setFocused] = useState(false);
    return (
    <div className="flex flex-col gap-2">
      <label className="text-xs tracking-[0.25em] uppercase text-[#5C4A42]" style={M}>{label}</label>
      <div className={`relative transition-all duration-300 ${focused ? "shadow-[0_0_0_2px_rgba(201,149,106,0.35)]" : ""}`}>
        <input type={type} placeholder={placeholder}
          className="w-full border-b-2 bg-transparent pb-2.5 pt-1 text-sm text-[#2C1810] placeholder:text-[#5C4A42]/40 focus:outline-none transition-colors"
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ borderBottomColor: focused ? GOLD : "rgba(44,24,16,0.2)", ...B }} />
      </div>
    </div>
    );
}

export function CTAButtons({ light = false }: { light?: boolean }) {
    const base = light ? "text-[#2C1810]" : "text-[#FAF7F2]";
    return (
    <div className="flex flex-col sm:flex-row gap-3">
      <motion.a href="#sp-book"
        whileHover={{ scale: 1.04, boxShadow: "0 0 36px rgba(201,149,106,0.55)" }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9956A] text-[#FAF7F2] text-xs tracking-[0.22em] uppercase rounded-xl shadow-xl shadow-[#C9956A]/30 font-medium group" style={B}>
        Book Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </motion.a>
      <motion.a href="https://wa.me/441234567890" target="_blank" rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
        className={`inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border text-xs tracking-[0.18em] uppercase transition-all duration-300 font-medium ${light ? "border-[#2C1810]/20 text-[#2C1810] hover:border-[#C9956A] hover:text-[#C9956A]" : "border-[#FAF7F2]/20 text-[#FAF7F2] hover:border-[#C9956A] hover:text-[#C9956A]"}`} style={B}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d={WA_PATH}/></svg>
        WhatsApp Us
      </motion.a>
    </div>
    );
}
