
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "motion/react";
import { ArrowRight, Menu, X, Instagram, Facebook, Youtube, Home, MessageCircle, ClipboardList, Sparkles, Heart, Award, Shield, AlertTriangle, CheckCircle, XCircle, Phone, BadgeCheck, Stethoscope, GraduationCap, Users, ChevronRight } from "lucide-react";

import { D, M, B, GOLD, EASE, WA_PATH } from "../../lib/constants";
export function Nav({ ready }: { ready: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const isHome = location.pathname === "/";
  const hasBg = scrolled || !isHome;
  const links = [
    { label: "Philosophy", href: "/#philosophy" },
    { label: "Service", action: () => navigate("/service") },
    { label: "Dr. Ruxana", href: "/#dr-ruxana" },
    { label: "Experiences", href: "/#experiences" },
    { label: "Our Team", href: "/#our-team" },
    { label: "Stories", href: "/#stories" },
  ];
  return (
    <>
      <motion.header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${hasBg ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm" : ""}`}
        initial={ready ? false : { y: -80, opacity: 0 }} animate={ready ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: EASE }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }} className="flex items-center gap-2 cursor-pointer">
            <img src="/icon.svg" alt="Cosmo Home Icon" className="h-8 md:h-10 w-auto" />
            <div className="flex flex-col leading-none">
              <span className="text-xl tracking-[0.12em] uppercase text-[#2C1810]" style={D}>Cosmo Home</span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#C9956A] mt-0.5" style={M}>Aesthetic Medicine</span>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              l.href ? (
                <a key={l.label} href={l.href} onClick={(e) => { e.preventDefault(); navigate(l.href!); }} style={B}
                  className="relative text-sm text-[#5C4A42] hover:text-[#2C1810] transition-colors tracking-wide group cursor-pointer">
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#C9956A] group-hover:w-full transition-all duration-300" />
                </a>
              ) : (
                <button key={l.label} onClick={l.action} style={B}
                  className="relative text-sm text-[#5C4A42] hover:text-[#2C1810] transition-colors tracking-wide group">
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#C9956A] group-hover:w-full transition-all duration-300" />
                </button>
              )
            ))}
          </nav>
          <motion.a href="/book-consultation" style={B} whileHover={{ scale: 1.02 }}
            className="hidden lg:inline-flex text-xs tracking-[0.2em] uppercase px-5 py-2.5 bg-[#C9956A] text-[#FAF7F2] hover:bg-[#2C1810] transition-all duration-300 shadow-md shadow-[#C9956A]/20">
            Book Consultation
          </motion.a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-[#2C1810]">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 bg-[#160A05] flex flex-col"
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>

            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between px-6 h-[72px] shrink-0">
              <a href="/" className="flex flex-col leading-none cursor-pointer" onClick={(e) => { e.preventDefault(); setOpen(false); navigate("/"); }}>
                <span className="text-xl tracking-[0.12em] uppercase text-[#FAF7F2]" style={D}>Cosmo Home</span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#C9956A] mt-0.5" style={M}>Aesthetic Medicine</span>
              </a>
              <button onClick={() => setOpen(false)} className="p-2 -mr-2 text-[#FAF7F2] hover:text-[#C9956A] transition-colors">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col">
              {/* Nav links */}
              <div className="flex flex-col gap-1">
                {links.map((l, i) => (
                  l.href ? (
                    <motion.a key={l.label} href={l.href} onClick={(e) => { e.preventDefault(); setOpen(false); navigate(l.href!); }}
                      className="group flex items-center justify-between py-3 text-sm tracking-[0.15em] uppercase text-[#FAF7F2]/85 hover:text-[#C9956A] transition-colors" style={D}
                      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.055, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                      {l.label}
                    </motion.a>
                  ) : (
                    <motion.button key={l.label} onClick={() => { setOpen(false); l.action?.(); }}
                      className="group flex items-center justify-between py-3 w-full text-sm tracking-[0.15em] uppercase text-[#FAF7F2]/85 hover:text-[#C9956A] transition-colors text-left" style={D}
                      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.055, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                      {l.label}
                    </motion.button>
                  )
                ))}
              </div>

              {/* Book Consultation CTA — after Stories */}
              <motion.a
                href="/book-consultation"
                onClick={(e) => { e.preventDefault(); setOpen(false); navigate("/book-consultation"); }}
                className="group mt-6 flex items-center justify-between w-full px-5 py-4 bg-[#C9956A] text-[#FAF7F2] hover:bg-[#d6a57c] active:bg-[#b8805c] transition-colors shadow-lg shadow-[#C9956A]/20"
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + links.length * 0.055 + 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={B}
              >
                <span className="text-xs font-semibold tracking-[0.22em] uppercase">Book Consultation</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform shrink-0" />
              </motion.a>
            </div>

            {/* Bottom Buttons inside Menu */}
            <div className="px-6 pb-24 pt-6 flex flex-col gap-3">
              <motion.a href="tel:09946336480" onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-3 w-full py-4 border border-[#2C1810] bg-[#160A05] text-[#FAF7F2] hover:border-[#C9956A] hover:text-[#C9956A] transition-colors"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} style={B}>
                <Phone size={16} className="text-[#C9956A]" />
                <span className="text-xs font-medium tracking-[0.15em] uppercase">Call 099463 36480</span>
              </motion.a>
              <motion.a href="https://api.whatsapp.com/send?phone=919946336480" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#C9956A] text-[#160A05] hover:bg-[#d6a57c] transition-colors"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} style={B}>
                <MessageCircle size={16} className="fill-current" />
                <span className="text-xs font-medium tracking-[0.15em] uppercase">WhatsApp Us</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#160A05] text-[#FAF7F2] py-14 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[2fr_1fr_1fr] gap-10 mb-10 pb-10 border-b border-[#FAF7F2]/8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/icon.svg" alt="Cosmo Home Icon" className="h-10 md:h-12 w-auto" />
              <div>
                <p className="text-xl tracking-[0.1em]" style={D}>Cosmo Home</p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9956A] mt-1" style={M}>Aesthetic Medicine</p>
              </div>
            </div>
            <p className="text-sm text-[#FAF7F2]/65 leading-relaxed max-w-xs" style={B}>
              A luxury destination where beauty, confidence, expertise, and care come together.
            </p>
            <div className="flex gap-5 mt-7">
              <motion.a href="https://www.instagram.com/cosmohomeskincare" target="_blank" rel="noreferrer" whileHover={{ y: -3 }} className="text-[#FAF7F2]/60 hover:text-[#C9956A] transition-colors">
                <Instagram size={16} />
              </motion.a>
              <motion.a href="https://www.facebook.com/CosmoHomeSkincare/" target="_blank" rel="noreferrer" whileHover={{ y: -3 }} className="text-[#FAF7F2]/60 hover:text-[#C9956A] transition-colors">
                <Facebook size={16} />
              </motion.a>
              <motion.a href="https://www.youtube.com/@cosmohome5593" target="_blank" rel="noreferrer" whileHover={{ y: -3 }} className="text-[#FAF7F2]/60 hover:text-[#C9956A] transition-colors">
                <Youtube size={16} />
              </motion.a>
            </div>
          </div>
          {[
            { heading: "Experiences", links: ["Skin Renewal", "Age Gracefully", "Confidence Restoration", "Hair Revival", "Personalised Journey"] },
            { heading: "COSMO HOME", links: ["Our Philosophy", "Dr. Ruxana", "Our Team", "Our Standards", "Begin Your Story"] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <p className="text-xs tracking-[0.28em] uppercase text-[#C9956A] mb-5" style={M}>{heading}</p>
              <ul className="flex flex-col gap-3">
                {links.map(l => (
                  <li key={l}>
                    <motion.a href="#" whileHover={{ x: 3 }} className="text-sm text-[#FAF7F2]/65 hover:text-[#FAF7F2] transition-colors block" style={B}>{l}</motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-[#FAF7F2]/55" style={B}>© {new Date().getFullYear()} COSMO HOME Ltd. All rights reserved.</p>
          <p className="text-xs text-[#FAF7F2]/55" style={B}>Privacy · Terms · 🛡️ CQC Registered</p>
        </div>
      </div>
    </footer>
  );
}

export function MobileBottomCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="fixed bottom-0 left-0 right-0 z-50 block md:hidden bg-[#160A05]/95 backdrop-blur-md border-t border-[#C9956A]/20 shadow-2xl"
        >
          <div className="grid grid-cols-2 gap-px bg-[#FAF7F2]/10">
            <a href="tel:09946336480" className="flex items-center justify-center space-x-2 py-4 bg-[#1C0E08] text-[#FAF7F2] hover:bg-[#2C1810] active:bg-[#160A05] transition-colors" style={B}>
              <Phone className="w-4 h-4 text-[#C9956A]" />
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.1em] uppercase">Call Cosmo Home</span>
            </a>
            <a href="https://api.whatsapp.com/send?phone=919946336480" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 py-4 bg-[#C9956A] text-[#160A05] hover:bg-[#d6a57c] active:bg-[#B8806A] transition-colors" style={B}>
              <MessageCircle className="w-4 h-4 fill-current" />
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.1em] uppercase">WhatsApp</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
