
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "motion/react";
import { ArrowRight, Menu, X, Instagram, Facebook, Home, MessageCircle, ClipboardList, Sparkles, Heart, Award, Shield, AlertTriangle, CheckCircle, XCircle, Phone, BadgeCheck, Stethoscope, GraduationCap, Users, ChevronRight } from "lucide-react";

import { D, M, B, GOLD, EASE, EASE2, GRAIN, WA_PATH } from "../../lib/constants";
import { getWhatsAppUrl } from "../../lib/whatsapp";
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
      {/* <motion.div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9956A 0%, transparent 65%)" }}
        initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.18, scale: 1.5 }}
        transition={{ duration: 2.5 }} /> */}
      {["top-8 left-8 border-t border-l", "top-8 right-8 border-t border-r", "bottom-8 left-8 border-b border-l", "bottom-8 right-8 border-b border-r"].map((c, i) => (
        <motion.div key={i} className={`absolute w-10 h-10 border-[#C9956A]/40 ${c}`}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.1 }} />
      ))}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Row for Logo and Title */}
        <div className="flex flex-row items-center justify-center">
          <motion.div className="shrink-0"
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.1, duration: 1.2, ease: EASE }}>
            <motion.svg viewBox="0 0 123.8 216" className="w-[70px] md:w-[85px] h-auto">
              <motion.path
                d="M71.6,48.3c-2.6,4.2-5,8.3-7.9,12.3-4.2,5.8-8.4,11.4-13.2,16.8l-16.3,18c-6.9,7.6-12.3,15.4-15.2,25.4-2.2,7.8-2.2,15.7.1,23.5s3.8,9.4,6.5,14c-4-3.4-7.2-7.1-10.3-11.2-12.8-17.5-13-36-1.6-54.3,2.7-4.3,5.7-8,9-11.9,6.8-7.7,13.2-15.5,19.3-23.8s9.3-13.2,13.1-20.4c4.6-8.9,8.5-18.6,7.4-28.8,26,18.5,40.6,44.2,22,74.1-2.7,4.3-5.8,8.1-9.2,12-6.9,8-13.6,16-19.8,24.5-4.6,6.3-8.7,12.6-12.4,19.5-4.4,8.6-8.2,18-7.5,27.9-10.7-12-16.2-26.5-12.3-42.4,2.4-10,7.9-18.8,14.5-26.7,9.9-11.8,19.5-23.9,27.6-37.1,2.1-3.7,4.3-7.2,5.9-11.2Z"
                fill="#7d5745"
                stroke="#a6906c"
                strokeWidth="1"
                initial={{ pathLength: 0, fillOpacity: 0 }}
                animate={{ pathLength: 1, fillOpacity: 1 }}
                transition={{
                  pathLength: { duration: 1.5, ease: EASE },
                  fillOpacity: { delay: 1.0, duration: 1.5, ease: EASE }
                }}
              />
              <motion.path
                d="M82.8,145.1c-.3-.7-1-1.1-1.7-1.4,1.6.4,2.7.1,3.7-1s1-2.3.3-3.6-.6-3.4.9-4.3c2.9-1.9,5.8-1.3,8.1-4.3s.7-1.8.3-2.6l-2.4-5c-1.3-2.7-2.9-5.3-4.1-8.1l.7-1.8c3.3,1.6,6.8,2.4,10.2,1.4-2.3-.3-4.3-.6-6.2-1.3l3.4-.5-5.1-.9,3.5-.7c-2-.2-3.9-.4-5.9-1l-1-1.8c2.8-4.9,5.6-6,7.2-12.2s1.6-11.9.5-17.9-.3-2.7-.2-4.3c8.3,6.9,15.6,15,20,25,4.6,10.4,4.2,21.8-.8,31.9-3.1,6.3-7.4,11.8-12.5,16.7-11.2,11-22.6,23-31.2,36.2-4.7,7.5-8.7,15.8-8.5,24.8-12.7-10.6-24.4-25.4-23.2-42.6.6-8.5,8.2-13.6,11.2-11.7l9.9,6.4c2.8,1.8,5.6,3.3,8.7,4.2s5,0,6.3-2.4,2.2-6,2.4-9.3,3-2.5,5-4.4.9-2.2.5-3.3Z"
                fill="#a6906c"
                stroke="#a6906c"
                strokeWidth="1"
                initial={{ pathLength: 0, fillOpacity: 0 }}
                animate={{ pathLength: 1, fillOpacity: 1 }}
                transition={{
                  pathLength: { duration: 1.5, ease: EASE },
                  fillOpacity: { delay: 0.6, duration: 1.5, ease: EASE }
                }}
              />
            </motion.svg>


          </motion.div>

          <motion.div className="overflow-hidden flex flex-col items-end whitespace-nowrap"
            initial={{ maxWidth: 0, opacity: 0, paddingLeft: 0 }}
            animate={{ maxWidth: 500, opacity: 1, paddingLeft: "1.75rem" }}
            transition={{
              maxWidth: { delay: 1.1, duration: 2, ease: EASE },
              paddingLeft: { delay: 1.1, duration: 2, ease: EASE },
              opacity: { delay: 1.3, duration: 1.0, ease: EASE }
            }}>
            <h1 className="text-[#a6906c] text-[32px] md:text-[44px] font-medium" style={D}>
              COSMO HOME
            </h1>
            <p className="w-full text-right text-[#7d5745] text-[10px] md:text-[13px] font-medium uppercase pr-1" style={M}>
              Skin Care Centre
            </p>
            <motion.p className="text-[#a6906c] text-[15px] md:text-[18px] w-full text-center mt-3 pointer-events-none" style={{ ...D }}
              initial={{ opacity: 0, y: -10, textShadow: "0 0 0px rgba(166,144,108,0)" }}
              animate={{ opacity: 1, y: 0, textShadow: "0 0 15px rgba(166,144,108,0.5)" }}
              transition={{ delay: 1.6, duration: 1, ease: EASE }}>
              Aesthetics at home ambience
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function InputField({ label, type = "text", placeholder = "", value = "", onChange, required = false }: {
  label: string; type?: string; placeholder?: string; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs text-[#5C4A42] tracking-wider uppercase font-medium" style={M}>{label} {required && <span className="text-[#C9956A]">*</span>}</label>
      {type === "textarea" ? (
        <textarea rows={4} placeholder={placeholder} value={value} onChange={onChange}
          className="bg-white/80 border border-[#2C1810]/15 rounded-xl px-4 py-3 text-sm text-[#2C1810] placeholder-[#5C4A42]/40 focus:outline-none focus:border-[#C9956A] transition-colors resize-none" style={B} />
      ) : (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange}
          className="bg-white/80 border border-[#2C1810]/15 rounded-xl px-4 py-3 text-sm text-[#2C1810] placeholder-[#5C4A42]/40 focus:outline-none focus:border-[#C9956A] transition-colors" style={B} />
      )}
    </div>
  );
}

export function CTAButtons({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <motion.a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer"
        whileHover={{ scale: 1.04, boxShadow: "0 0 36px rgba(201,149,106,0.55)" }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9956A] text-[#FAF7F2] text-xs tracking-[0.22em] uppercase whitespace-nowrap rounded-xl shadow-xl shadow-[#C9956A]/30 font-semibold group" style={B}>
        Book Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
      </motion.a>
      <motion.a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
        className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border border-[#C9956A]/40 hover:border-[#C9956A] text-[#C9956A] hover:bg-[#C9956A]/5 text-xs tracking-[0.18em] uppercase whitespace-nowrap transition-all duration-300 font-semibold select-none" style={B}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" className="shrink-0"><path d={WA_PATH} /></svg>
        WhatsApp Us
      </motion.a>
    </div>
  );
}
