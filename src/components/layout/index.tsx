
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "motion/react";
import { ArrowRight, Menu, X, Instagram, Facebook, Youtube, Home, MessageCircle, ClipboardList, Sparkles, Heart, Award, Shield, AlertTriangle, CheckCircle, XCircle, Phone, BadgeCheck, Stethoscope, GraduationCap, Users, ChevronRight, Plus, Minus, Syringe, User, Droplet, Wind, Smile } from "lucide-react";

import { D, M, B, GOLD, EASE, WA_PATH } from "../../lib/constants";

const MEGA_MENU_CONTENT = {
  Face: {
    icon: Smile,
    treatments: ["Botox", "Fillers", "Thread Lift", "Lip Enhancement", "Jawline Contouring", "Full Face Rejuvenation"],
    viewAll: "VIEW ALL FACE TREATMENTS",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop",
    desc: "Natural facial enhancement, designed around balance."
  },
  Skin: {
    icon: Sparkles,
    treatments: ["Chemical Peels", "Microneedling", "Laser Resurfacing", "Acne Treatment", "Pigmentation", "Skin Tightening"],
    viewAll: "VIEW ALL SKIN TREATMENTS",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    desc: "Rejuvenate and restore your natural glow."
  },
  Hair: {
    icon: Wind,
    treatments: ["PRP Therapy", "Hair Transplant", "Scalp Micropigmentation", "Hair Loss Treatment", "Laser Hair Therapy"],
    viewAll: "VIEW ALL HAIR TREATMENTS",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop",
    desc: "Advanced solutions for hair restoration and health."
  },
  Body: {
    icon: User,
    treatments: ["CoolSculpting", "Laser Hair Removal", "Body Contouring", "Cellulite Treatment", "Skin Tightening", "Fat Dissolving"],
    viewAll: "VIEW ALL BODY TREATMENTS",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    desc: "Sculpt and define your body with precision."
  },
  Injectables: {
    icon: Syringe,
    treatments: ["Dermal Fillers", "Anti-Wrinkle Injections", "Profhilo", "Skin Boosters", "Fat Dissolving Injections"],
    viewAll: "VIEW ALL INJECTABLES",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    desc: "Targeted treatments for a refreshed appearance."
  }
};

export function Nav({ ready }: { ready: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<keyof typeof MEGA_MENU_CONTENT>("Face");
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const timeoutRef = useRef<null | number>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const isHome = location.pathname === "/";
  const hasBg = scrolled || !isHome || activeMenu !== null;

  const links = [
    { label: "Philosophy", href: "/#philosophy" },
    { label: "Service", action: () => navigate("/service") },
    { label: "Treatments", action: () => navigate("/service"), hasDropdown: true },
    { label: "Dr. Ruxana", href: "/#dr-ruxana" },
    { label: "Results", href: "/#results" },
    { label: "Journal", href: "/#journal", hasDropdown: true },
  ];

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <>
      <motion.header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${hasBg ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm" : ""}`}
        initial={ready ? false : { y: -80, opacity: 0 }} animate={ready ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: EASE }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 relative">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }} className="flex items-center gap-2 cursor-pointer z-10">
            <img src="/icon.svg" alt="Cosmo Home Icon" className="h-8 md:h-10 w-auto" />
            <div className="flex flex-col leading-none">
              <span className={`text-xl tracking-[0.12em] uppercase transition-colors ${hasBg ? 'text-[#2C1810]' : 'text-[#C9956A]'}`} style={D}>Cosmo Home</span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#C9956A] mt-0.5" style={M}>Aesthetic Medicine</span>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8 z-10 h-full" onMouseLeave={handleMouseLeave}>
            {links.map(l => (
              <div key={l.label} className="relative h-full flex items-center" onMouseEnter={() => l.hasDropdown ? handleMouseEnter(l.label) : handleMouseEnter('')}>
                {l.href ? (
                  <a href={l.href} onClick={(e) => { e.preventDefault(); navigate(l.href!); }} style={B}
                    className={`relative text-sm transition-colors tracking-wide group cursor-pointer ${activeMenu === l.label ? 'text-[#C9956A]' : hasBg ? 'text-[#5C4A42] hover:text-[#2C1810]' : 'text-[#C9956A] hover:text-[#FAF7F2]'}`}>
                    {l.label}
                  </a>
                ) : (
                  <button onClick={l.action} style={B}
                    className={`relative text-sm transition-colors tracking-wide group ${activeMenu === l.label ? 'text-[#C9956A]' : hasBg ? 'text-[#5C4A42] hover:text-[#2C1810]' : 'text-[#C9956A] hover:text-[#FAF7F2]'}`}>
                    {l.label}
                  </button>
                )}
                {activeMenu === l.label && l.hasDropdown && (
                  <motion.div layoutId="nav-indicator" className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C9956A]" />
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex z-10">
            <motion.a href="/book-consultation" style={B} whileHover={{ scale: 1.02 }}
              className={`text-[11px] font-semibold tracking-[0.15em] border border-[#C9956A] rounded-[4px] uppercase px-6 py-2.5 hover:bg-[#C9956A] hover:text-[#FAF7F2] transition-all duration-300 ${hasBg ? 'text-[#2C1810]' : 'text-[#C9956A]'}`}>
              Book Consultation
            </motion.a>
          </div>
          <button onClick={() => setOpen(true)} className={`lg:hidden p-2 transition-colors ${hasBg ? 'text-[#2C1810]' : 'text-[#C9956A]'}`}>
            <Menu size={26} />
          </button>

          {/* Mega Menu Dropdown */}
          <AnimatePresence>
            {activeMenu === "Treatments" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: EASE }}
                onMouseEnter={() => handleMouseEnter("Treatments")}
                onMouseLeave={handleMouseLeave}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[900px] bg-[#FAF7F2] shadow-2xl rounded-xl border border-[#E8E1D7] overflow-hidden z-[5]"
              >
                <div className="flex h-[400px]">
                  {/* Left Column: Categories */}
                  <div className="w-[28%] border-r border-[#E8E1D7]/50 p-6 flex flex-col gap-1 overflow-y-auto custom-scrollbar">
                    {(Object.keys(MEGA_MENU_CONTENT) as Array<keyof typeof MEGA_MENU_CONTENT>).map((cat) => {
                      const Icon = MEGA_MENU_CONTENT[cat].icon;
                      const isActive = activeCategory === cat;
                      return (
                        <button
                          key={cat}
                          onMouseEnter={() => setActiveCategory(cat)}
                          className={`flex items-center justify-between p-4 rounded-xl transition-colors ${isActive ? 'text-[#C9956A]' : 'text-[#5C4A42] hover:text-[#2C1810]'}`}
                        >
                          <div className="flex items-center gap-4">
                            <Icon size={20} className={isActive ? 'text-[#C9956A]' : 'text-[#8A6D5C]'} strokeWidth={1.5} />
                            <span style={B} className="text-[15px] font-normal tracking-wide">{cat}</span>
                          </div>
                          <ChevronRight size={16} className={isActive ? 'text-[#C9956A]' : 'text-[#8A6D5C]/30'} strokeWidth={1.5} />
                        </button>
                      );
                    })}
                  </div>

                  {/* Middle Column: Treatments */}
                  <div className="w-[32%] p-8 flex flex-col border-r border-[#E8E1D7]/50">
                    <h3 style={B} className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#C9956A] mb-7">{activeCategory}</h3>
                    <div className="flex flex-col gap-5 flex-1">
                      {MEGA_MENU_CONTENT[activeCategory].treatments.map((treatment) => (
                        <a href="#" key={treatment} style={B} className="text-[14px] font-normal text-[#2C1810] hover:text-[#C9956A] transition-colors">
                          {treatment}
                        </a>
                      ))}
                    </div>
                    <a href="#" style={B} className="text-[10px] tracking-[0.15em] uppercase text-[#8A6D5C] font-semibold hover:text-[#2C1810] transition-colors flex items-center gap-2 mt-6 group">
                      {MEGA_MENU_CONTENT[activeCategory].viewAll}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Right Column: Image */}
                  <div className="w-[40%] p-6">
                    <div className="w-full h-full rounded-lg bg-[#FAF7F2] flex flex-col shadow-md border border-[#E8E1D7]/80">
                      <div className="relative flex-1 w-full shrink-0 p-2 pb-0">
                        <div className="w-full h-full relative rounded-[4px] overflow-hidden">
                          <img
                            src={MEGA_MENU_CONTENT[activeCategory].image}
                            alt={activeCategory}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="px-5 py-5 mt-3 border-t border-[#E8E1D7]/80 shrink-0 flex items-center">
                        <p style={D} className="text-[16px] text-[#2C1810] leading-relaxed tracking-wide">
                          {MEGA_MENU_CONTENT[activeCategory].desc.split(', ').map((part, i, arr) => (
                            <span key={i} className={i > 0 ? "italic text-[#5C4A42] block mt-1" : "block"}>
                              {part}{i === 0 ? "," : ""}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] bg-[#332B23] flex flex-col"
            initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>

            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-[#E8E1D7]/10 shrink-0">
              <button onClick={() => setOpen(false)} className="p-2 -ml-2 text-[#FAF7F2] hover:text-[#C9956A] transition-colors">
                <X size={24} strokeWidth={1.5} />
              </button>
              <a href="/" className="flex flex-col items-center leading-none cursor-pointer absolute left-1/2 -translate-x-1/2" onClick={(e) => { e.preventDefault(); setOpen(false); navigate("/"); }}>
                <div className="flex items-center gap-2">
                  <img src="/icon.svg" alt="Cosmo Home Icon" className="h-7 w-auto brightness-0 invert" />
                  <div className="flex flex-col">
                    <span className="text-sm tracking-[0.12em] uppercase text-[#FAF7F2]" style={D}>Cosmo Home</span>
                    <span className="text-[6px] tracking-[0.3em] uppercase text-[#C9956A] mt-0.5" style={M}>Aesthetic Medicine</span>
                  </div>
                </div>
              </a>
              <button className="bg-[#C9956A] rounded-[4px] text-[#FAF7F2] text-[10px] tracking-widest px-4 py-2 uppercase font-medium hover:bg-[#A0603A] transition-colors" style={B} onClick={() => { setOpen(false); navigate('/book-consultation'); }}>
                Book
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6 custom-scrollbar">
              {/* Nav links */}
              <div className="flex flex-col">
                {links.map((l, i) => (
                  <div key={l.label} className="border-b border-[#E8E1D7]/10 last:border-0">
                    <button
                      onClick={() => {
                        if (l.hasDropdown) toggleMobileExpanded(l.label);
                        else { setOpen(false); l.action ? l.action() : navigate(l.href!); }
                      }}
                      className="w-full flex items-center justify-between py-4 text-[#FAF7F2] transition-colors group"
                    >
                      <div className="flex items-center gap-4">
                        {l.label === "Philosophy" && <motion.div whileTap={{ scale: 0.9 }}><Heart size={20} className="text-[#C9956A]" strokeWidth={1.5} /></motion.div>}
                        {l.label === "Service" && <motion.div whileTap={{ scale: 0.9 }}><Sparkles size={20} className="text-[#C9956A]" strokeWidth={1.5} /></motion.div>}
                        {l.label === "Treatments" && <motion.div whileTap={{ scale: 0.9 }}><Sparkles size={20} className="text-[#C9956A]" strokeWidth={1.5} /></motion.div>}
                        {l.label === "Dr. Ruxana" && <motion.div whileTap={{ scale: 0.9 }}><User size={20} className="text-[#C9956A]" strokeWidth={1.5} /></motion.div>}
                        {l.label === "Results" && <motion.div whileTap={{ scale: 0.9 }}><Award size={20} className="text-[#C9956A]" strokeWidth={1.5} /></motion.div>}
                        {l.label === "Journal" && <motion.div whileTap={{ scale: 0.9 }}><ClipboardList size={20} className="text-[#C9956A]" strokeWidth={1.5} /></motion.div>}
                        <span className="text-[15px] font-medium group-hover:text-[#C9956A] transition-colors" style={B}>{l.label}</span>
                      </div>
                      {l.hasDropdown ? (
                        mobileExpanded[l.label] ? <Minus size={18} className="text-[#C9956A]" /> : <Plus size={18} className="text-[#C9956A]" />
                      ) : (
                        <ChevronRight size={18} className="text-[#C9956A]/50 group-hover:text-[#C9956A] transition-colors" />
                      )}
                    </button>
                    {/* Expandable Content for Treatments */}
                    <AnimatePresence>
                      {l.hasDropdown && mobileExpanded[l.label] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-12 pb-4 flex flex-col gap-4 mt-2">
                            {l.label === "Treatments" && Object.keys(MEGA_MENU_CONTENT).map(cat => (
                              <button key={cat} onClick={() => { setOpen(false); navigate("/service"); }} className="text-left text-[14px] text-[#E8E1D7] py-1 flex items-center justify-between hover:text-[#C9956A] transition-colors" style={B}>
                                {cat}
                                <ChevronRight size={14} className="text-[#C9956A]/30 mr-2" />
                              </button>
                            ))}
                            {l.label === "Journal" && (
                              <>
                                <button className="text-left text-[14px] text-[#E8E1D7] py-1 hover:text-[#C9956A] transition-colors" style={B}>Latest Articles</button>
                                <button className="text-left text-[14px] text-[#E8E1D7] py-1 hover:text-[#C9956A] transition-colors" style={B}>Skincare Tips</button>
                                <button className="text-left text-[14px] text-[#E8E1D7] py-1 hover:text-[#C9956A] transition-colors" style={B}>News</button>
                              </>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Book Consultation CTA */}
              <button
                onClick={() => { setOpen(false); navigate("/book-consultation"); }}
                className="w-full mt-2 py-5 px-6 bg-[#C9956A] text-[#FAF7F2] uppercase tracking-[0.15em] text-xs font-semibold flex justify-between items-center transition-colors hover:bg-[#d6a57c] shadow-[0_0_35px_rgba(201,149,106,0.4)]"
                style={B}
              >
                <span>Book Consultation</span>
                <ArrowRight size={16} className="text-[#FAF7F2]" />
              </button>

              {/* Bottom Contact Buttons */}
              <div className="pt-8 pb-8 flex flex-col gap-4">
                <a href="tel:09946336480"
                  className="flex items-center justify-center gap-3 w-full py-5 bg-[#0A0502] border border-[#2C1810] text-[#FAF7F2] transition-colors"
                >
                  <Phone size={16} className="text-[#C9956A]" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase" style={B}>Call 099463 36480</span>
                </a>
                <a href="https://api.whatsapp.com/send?phone=919946336480" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-5 bg-[#C9956A] text-[#160A05] transition-colors"
                >
                  <MessageCircle size={16} className="fill-current" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase" style={B}>WhatsApp Us</span>
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


export function Footer() {
  return (
    <footer className="bg-[#160A05] text-[#FAF7F2] pb-14 pt-6 px-6 md:px-16 lg:pb-24 lg:pt-14">
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
