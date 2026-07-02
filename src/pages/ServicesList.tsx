import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "motion/react";
import {
  ArrowRight, Sparkles, Smile, Wind, Heart, Syringe,
  Check, Calendar, Clock, ShieldCheck, Award, Stethoscope,
  Cpu, Activity, Lock, ChevronDown, ChevronLeft, ChevronRight, Star, Users
} from "lucide-react";

import { D, M, B, GOLD, EASE, EASE2, GRAIN, WA_PATH } from "../lib/constants";
import { FadeUp, Tag } from "../components/ui/shared";
import { SERVICES_DATA, ServiceData } from "../lib/servicesData";

// Custom type for Category Icon
type IconType = React.FC<{ size?: number; className?: string; strokeWidth?: number }>;

const CATEGORIES: Array<{ key: string; label: string; icon: IconType }> = [
  { key: "all", label: "All Treatments", icon: Sparkles as IconType },
  { key: "Face", label: "Face", icon: Smile as IconType },
  { key: "Skin", label: "Skin", icon: Sparkles as IconType },
  { key: "Hair", label: "Hair", icon: Wind as IconType },
  { key: "Laser", label: "Laser", icon: Cpu as IconType },
  { key: "Body", label: "Body", icon: Heart as IconType },
  { key: "Injectables", label: "Injectables", icon: Syringe as IconType },
];

const CATEGORY_MAPPING: Record<string, string[]> = {
  Face: ["hifu", "hydrafacial-medifacial", "mesopeels-carbon-peel"],
  Skin: ["laser-pigment-reduction", "laser-scar-reduction", "phototherapy", "excimer-laser"],
  Hair: ["laser-hair-reduction"],
  Laser: ["laser-pigment-reduction", "laser-scar-reduction", "excimer-laser", "laser-hair-reduction", "mesopeels-carbon-peel"],
  Body: ["muscle-sculpting"],
  Injectables: ["exosomes-prp-gfc"]
};

const getServiceCategory = (id: string): string => {
  for (const [cat, ids] of Object.entries(CATEGORY_MAPPING)) {
    if (cat === "Laser") continue; // Skip laser for badges to show more specific skin/face category
    if (ids.includes(id)) return cat;
  }
  return "Skin"; // Fallback
};

const getServiceQuickSpec = (service: ServiceData) => {
  const durationFact = service.ctaQuickFacts?.find((f) => f.label.toLowerCase().includes("duration"));
  const duration = durationFact ? durationFact.val : "45â€“60 Mins";

  const downtimeFact = service.ctaQuickFacts?.find((f) => f.label.toLowerCase().includes("downtime"));
  const downtimeStatFact = service.stats?.find((s) => s.l.toLowerCase().includes("downtime"));
  const downtime = downtimeFact ? downtimeFact.val : downtimeStatFact ? `${downtimeStatFact.n} ${downtimeStatFact.l}` : "None";

  const suitableFor = service.whoNeedsDesc ? service.whoNeedsDesc.replace(/Ideal for patients experiencing\s+/i, "") : "Skin & hair health rejuvenation";

  return { duration, downtime, suitableFor };
};

// Animated statistic hook-based component
function AnimatedStat({ value, label, icon: Icon }: { value: string; label: string; icon: React.FC<{ size?: number; className?: string }> }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const hasNumber = !isNaN(numericValue);
  const suffix = value.replace(/\d/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && hasNumber) {
      const duration = 1200; // 1.2 seconds
      const frames = 48; // number of steps
      const stepTime = duration / frames;
      const step = Math.ceil(numericValue / frames);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, hasNumber]);

  return (
    <div ref={ref} className="group relative bg-[#FAF6F0]/65 backdrop-blur-md border border-[#2C1810]/5 rounded-[20px] p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-[0_15px_40px_rgba(44,24,16,0.06)] flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-4">
        <span className="text-3xl md:text-4xl text-[#C9956A] font-medium leading-none tracking-tight" style={D}>
          {hasNumber ? `${count}${suffix}` : value}
        </span>
        <div className="text-[#C9956A]/60 group-hover:text-[#C9956A] transition-colors">
          <Icon size={20} />
        </div>
      </div>
      <p className="text-[10px] sm:text-xs text-[#5C4A42] uppercase tracking-widest font-normal leading-relaxed" style={M}>
        {label}
      </p>
    </div>
  );
}

// Before & After Interactive Slider
function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length === 0) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[24px] overflow-hidden shadow-2xl select-none cursor-ew-resize border border-[#2C1810]/5 bg-[#EDE5D8]"
      onMouseMove={handleMouseMove}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* Before Image (Left Side background) */}
      <img
        src="/transformation/before.webp"
        alt="Before Treatment"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div
        className={`absolute top-5 left-5 bg-[#160A05]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] tracking-widest uppercase text-white font-medium z-10 transition-opacity duration-300 ${sliderPos < 15 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        style={M}
      >
        Before
      </div>

      {/* After Image (Right Side foreground clipped) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)` }}
      >
        <img
          src="/transformation/after.webp"
          alt="After Treatment"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div
          className={`absolute top-5 right-5 bg-[#C9956A] px-3.5 py-1.5 rounded-full text-[10px] tracking-widest uppercase text-white font-medium z-10 transition-opacity duration-300 ${sliderPos > 85 ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          style={M}
        >
          After
        </div>
      </div>

      {/* Slider Line / Handle */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white/80 cursor-ew-resize z-20 flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-10 h-10 rounded-full bg-white shadow-2xl border border-[#2C1810]/15 flex items-center justify-center gap-0.5 text-[#C9956A] pointer-events-auto transition-transform hover:scale-110 active:scale-95 select-none">
          <ChevronLeft size={14} strokeWidth={2.5} className="shrink-0" />
          <ChevronRight size={14} strokeWidth={2.5} className="shrink-0" />
        </div>
      </div>
    </div>
  );
}

// Custom FAQ Accordion
function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#2C1810]/10 py-5">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-2 text-[#2C1810] hover:text-[#C9956A] transition-colors"
      >
        <span className="text-base md:text-lg font-medium" style={D}>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="text-[#C9956A]"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="text-sm md:text-base text-[#5C4A42] leading-relaxed pt-3 pb-2 pr-10 font-normal" style={B}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesListPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  // Reset scroll on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter services based on category selection
  const filteredServiceKeys = Object.keys(SERVICES_DATA).filter((key) => {
    if (selectedCategory === "all") return true;
    const mappedIds = CATEGORY_MAPPING[selectedCategory] || [];
    return mappedIds.includes(key);
  });

  const handleExploreClick = () => {
    const filtersSection = document.getElementById("treatment-filters");
    if (filtersSection) {
      filtersSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Flagship featured treatment dynamic look-up
  const featuredService = SERVICES_DATA["hifu"] || Object.values(SERVICES_DATA)[0];

  return (
    <motion.div
      style={B}
      className="min-h-screen bg-[#FAF7F2] text-[#2C1810]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ═╦═ 1. CINEMATIC HERO SECTION ═╦═ */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center bg-[#FAF6F0] pt-36 pb-20 overflow-hidden">
        {/* Background visual with soft glow */}
        <div className="absolute inset-0 z-0 opacity-[0.12]">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&h=1080&fit=crop&q=80"
            alt="Sanctuary of rejuvenation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0] via-[#FAF6F0]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-transparent to-[#FAF6F0]/40" />
        </div>

        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />

        {/* Floating gradient circles */}
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none z-10"
          style={{ background: "radial-gradient(circle, rgba(201,149,106,0.12) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.1, 1], x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none z-10"
          style={{ background: "radial-gradient(circle, rgba(201,149,106,0.08) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 border border-[#C9956A]/20 bg-[#C9956A]/5 self-start"
              >
                <Sparkles size={11} className="text-[#C9956A] animate-pulse" />
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#C9956A] font-semibold" style={M}>Clinical Excellence Directory</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-[#2C1810] leading-[1.05] mb-8 font-light tracking-tight"
                style={D}
              >
                Bespoke Treatments &<br />
                <span className="relative inline-block">
                  <em className="font-serif italic text-[#C9956A]">Clinical Artistry.</em>
                  <span className="absolute bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#C9956A]/40 to-transparent" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                className="text-base sm:text-lg text-[#5C4A42] max-w-xl leading-relaxed mb-10 font-normal"
                style={B}
              >
                Step into a sanctuary of premium aesthetics built on personalized treatments, advanced technology, and clinical excellence. Explore our signature protocols calibrated for natural-looking harmony and skin health.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                className="flex flex-col sm:flex-row gap-4 mb-4"
              >
                <motion.a
                  href="/book-consultation"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(201,149,106,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9956A] text-[#FAF7F2] text-xs tracking-[0.2em] uppercase rounded-xl font-semibold shadow-lg shadow-[#C9956A]/20 transition-all group"
                  style={B}
                >
                  {/* Glint effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  Book Consultation
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.button
                  onClick={handleExploreClick}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-[#2C1810]/15 hover:border-[#C9956A] text-[#2C1810] hover:text-[#C9956A] text-xs tracking-[0.2em] uppercase rounded-xl font-semibold transition-all hover:bg-[#C9956A]/5"
                  style={B}
                >
                  Explore Treatments
                </motion.button>
              </motion.div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5 relative w-full h-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.0, delay: 0.2, ease: EASE }}
                className="relative w-full max-w-[450px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/60 bg-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&fit=crop&q=80"
                  alt="Premium skincare treatment at Cosmo Home"
                  className="w-full h-full object-cover animate-image-reveal"
                />

                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                {/* Floating luxury glass badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 p-5 bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl shadow-xl flex items-center gap-4 text-white"
                >
                  <div className="w-10 h-10 rounded-full bg-[#C9956A] flex items-center justify-center text-white shrink-0 shadow-inner">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-white/95" style={M}>Clinical Guarantee</h4>
                    <p className="text-[11px] text-white/80 mt-0.5 leading-normal font-normal" style={B}>Doctor-supervised premium medical grade skincare protocols.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

          </div>

          {/* Stats section - Modern Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="border-t border-[#2C1810]/10 mt-16 pt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            <AnimatedStat value="5000+" label="Verified Outcomes" icon={Users} />
            <AnimatedStat value="20+" label="Specialized Protocols" icon={Sparkles} />
            <AnimatedStat value="100%" label="Clinically Supervised" icon={Stethoscope} />
            <AnimatedStat value="Medical Grade" label="Technology" icon={Cpu} />
          </motion.div>

        </div>
      </section>

      {/* ═╦═ 2. STICKY CATEGORY NAVIGATION ═╦═ */}
      <section
        id="treatment-filters"
        className="sticky top-16 z-30 bg-[#FAF7F2]/80 backdrop-blur-md border-b border-[#2C1810]/5 py-5 px-6 md:px-16"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-start md:justify-center overflow-x-auto gap-3 no-scrollbar py-1">
          {CATEGORIES.map(({ key, label, icon: Icon }) => {
            const isActive = selectedCategory === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`relative flex items-center gap-2.5 px-6 py-3 rounded-full border text-[10px] tracking-widest uppercase transition-all duration-300 shrink-0 font-semibold ${isActive
                  ? "bg-[#2C1810] border-[#2C1810] text-[#FAF7F2]"
                  : "bg-[#FAF7F2] border-[#2C1810]/10 text-[#2C1810]/70 hover:border-[#C9956A] hover:text-[#C9956A]"
                  }`}
                style={M}
              >
                <Icon size={12} className={isActive ? "text-[#C9956A]" : "text-current"} />
                {label}
              </button>
            );
          })}
        </div>
      </section>

      {/* â•â• 3. SERVICES SECTION â•â• */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {filteredServiceKeys.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-[#5C4A42]" style={B}>No treatments found in this category.</p>
              <button
                onClick={() => setSelectedCategory("all")}
                className="mt-4 text-xs tracking-widest uppercase text-[#C9956A] border-b border-[#C9956A] pb-1 font-semibold"
                style={M}
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {filteredServiceKeys.map((key) => {
                const service = SERVICES_DATA[key];
                const category = getServiceCategory(key);

                return (
                  <motion.div
                    layout
                    key={key}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="flex flex-col bg-white p-6 md:p-8 rounded-[24px] shadow-[0_4px_30px_rgba(44,24,16,0.02)] hover:shadow-[0_20px_50px_rgba(44,24,16,0.06)] hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden border border-[#2C1810]/5"
                  >
                    {/* Image Area */}
                    <div className="relative overflow-hidden aspect-[16/10] rounded-[20px] bg-[#EDE5D8] mb-6 shrink-0 group">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#160A05]/40 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Category Badge */}
                    <div className="mb-3 shrink-0">
                      <span className="inline-block px-3 py-1 bg-[#C9956A]/10 border border-[#C9956A]/20 text-[#C9956A] text-[9px] tracking-widest uppercase rounded-full font-bold" style={M}>
                        {category}
                      </span>
                    </div>

                    {/* Service Title */}
                    <div className="h-16 flex items-center mb-3 shrink-0">
                      <h3 className="text-xl sm:text-2xl text-[#2C1810] leading-tight font-light" style={D}>
                        {service.title} <em className="serif font-serif italic text-[#C9956A]">{service.titleEmphasized}</em>
                      </h3>
                    </div>

                    {/* Short Description */}
                    <div className="h-[72px] mb-5 overflow-hidden shrink-0">
                      <p className="text-sm text-[#5C4A42] leading-relaxed line-clamp-3 font-normal" style={B}>
                        {service.description}
                      </p>
                    </div>

                    {/* Key clinical benefits */}
                    <div className="mb-6 bg-[#FAF7F2] p-4 rounded-xl border border-[#2C1810]/5 h-[116px] overflow-hidden shrink-0 flex flex-col justify-start">
                      <p className="text-[9px] tracking-widest uppercase text-[#C9956A] mb-2.5 font-bold" style={M}>Key Benefits</p>
                      <ul className="space-y-1.5">
                        {service.benefits.slice(0, 3).map((benefit, bIndex) => (
                          <li key={bIndex} className="flex gap-2 text-xs text-[#5C4A42] font-normal truncate">
                            <Check size={12} className="text-[#C9956A] shrink-0 mt-0.5" />
                            <span className="truncate">{benefit.b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-auto pt-4 border-t border-[#2C1810]/5 flex items-center gap-3 shrink-0">
                      <motion.a
                        href="/book-consultation"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 text-center py-3.5 px-4 bg-[#C9956A] text-[#FAF7F2] text-[10px] tracking-widest uppercase rounded-xl font-bold shadow-md shadow-[#C9956A]/10 hover:bg-[#b88057] transition-all"
                        style={B}
                      >
                        Book Consultation
                      </motion.a>

                      <button
                        onClick={() => navigate(`/service/${key}`)}
                        className="flex items-center justify-center gap-2 py-3.5 px-4 border border-[#2C1810]/10 hover:border-[#C9956A] rounded-xl text-[10px] tracking-widest uppercase text-[#2C1810] font-bold hover:bg-[#C9956A]/5 transition-all group/btn"
                        style={B}
                      >
                        Details
                        <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* â•â• 4. FEATURED TREATMENT INTERSTITIAL â•â• */}
      {featuredService && (
        <section className="bg-[#160A05] text-[#FAF7F2] py-24 px-6 md:px-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              {/* Left Side: Cinematic Image */}
              <div className="lg:col-span-6 relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[24px] bg-[#EDE5D8]">
                <img
                  src={featuredService.heroImage}
                  alt={featuredService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#160A05]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-[#C9956A] text-[#FAF7F2] text-[10px] tracking-widest uppercase px-4 py-2 rounded-full font-semibold" style={M}>
                  Featured Signature Protocol
                </div>
              </div>

              {/* Right Side: Editorial Content */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <Tag>Flagship Treatment</Tag>
                <h2 className="text-3xl sm:text-5xl text-[#FAF7F2] leading-tight mt-4 mb-6 font-light" style={D}>
                  {featuredService.title} <em className="serif italic text-[#C9956A]">{featuredService.titleEmphasized}</em>
                </h2>
                <p className="text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed mb-8 font-normal" style={B}>
                  {featuredService.description}
                </p>

                {/* Key Benefits with premium outline style */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {featuredService.benefits.slice(0, 4).map((benefit, bIndex) => (
                    <div key={bIndex} className="flex items-start gap-3 p-4 rounded-xl border border-[#FAF7F2]/10 bg-[#FAF7F2]/5 hover:bg-[#FAF7F2]/10 transition-colors">
                      <span className="text-[#C9956A] text-lg mt-0.5">{benefit.icon}</span>
                      <div>
                        <h4 className="font-semibold text-xs tracking-wider uppercase text-white mb-1" style={M}>{benefit.b}</h4>
                        <p className="text-[11px] text-[#FAF7F2]/70 leading-normal font-normal" style={B}>{benefit.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <motion.a
                    href="/book-consultation"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 32px rgba(201,149,106,0.3)" }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 px-8 py-4.5 bg-[#C9956A] text-[#FAF7F2] text-xs tracking-[0.2em] uppercase rounded-xl font-medium shadow-lg shadow-[#C9956A]/10"
                    style={B}
                  >
                    Schedule Your Consultation
                    <ArrowRight size={14} />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* â•â• 5. WHY CHOOSE US â•â• */}
      <section className="py-24 px-6 md:px-16 bg-[#FAF7F2] border-t border-[#2C1810]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Tag>Philosophy of Care</Tag>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C1810] mt-4 mb-6 leading-tight font-light" style={D}>
              Uncompromising standards for <em className="serif italic text-[#C9956A]">your skin.</em>
            </h2>
            <p className="text-sm md:text-base text-[#5C4A42] leading-relaxed font-normal" style={B}>
              We do not believe in standard shortcuts. Every protocol is custom-crafted, medical-grade, and overseen by our clinical specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Experienced Clinicians",
                desc: "All clinical protocols are formulated and supervised by our experienced medical team holding advanced post-graduate qualifications."
              },
              {
                icon: ShieldCheck,
                title: "FDA Approved Technology",
                desc: "We exclusively run certified medical-grade platforms backed by verified peer-reviewed scientific studies."
              },
              {
                icon: Sparkles,
                title: "Personalized Treatments",
                desc: "No general menus. We map your specific epidermis layers to customize wavelength depths and active doses."
              },
              {
                icon: Heart,
                title: "Luxury Experience",
                desc: "Relax in a quiet, design-forward oasis designed around sensory comfort, premium amenities, and pure privacy."
              },
              {
                icon: Lock,
                title: "Safe Procedures",
                desc: "Sterility, precise post-treatment follow-up, and clinical-grade emergency readiness guidelines protect your health."
              },
              {
                icon: Cpu,
                title: "Advanced Equipment",
                desc: "We deploy world-class platforms like Soprano Titanium and Dermalux Tri-Wave for optimum comfort and efficiency."
              }
            ].map((card, cIndex) => {
              const IconComp = card.icon;
              return (
                <div key={cIndex} className="bg-white p-8 rounded-[20px] shadow-[0_4px_30px_rgba(44,24,16,0.02)] border border-[#2C1810]/5 flex flex-col items-start hover:shadow-[0_12px_40px_rgba(44,24,16,0.04)] transition-all duration-300">
                  <div className="p-3.5 bg-[#C9956A]/10 rounded-xl mb-6 text-[#C9956A]">
                    <IconComp size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2C1810] mb-3" style={D}>{card.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5C4A42] leading-relaxed font-normal" style={B}>{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* â•â• 6. TREATMENT JOURNEY TIMELINE â•â• */}
      <section className="py-24 px-6 md:px-16 bg-[#160A05] text-[#FAF7F2] relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Tag>The Cosmo Home Standard</Tag>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] mt-4 mb-6 leading-tight font-light" style={D}>
              Your treatment <em className="serif italic text-[#C9956A]">timeline.</em>
            </h2>
            <p className="text-sm text-[#FAF7F2]/80 leading-relaxed font-normal" style={B}>
              From clinical intake through custom skin diagnostic, follow-up, and home recovery check-ins, we support your skin at every stage.
            </p>
          </div>

          {/* Timeline Process Stepper */}
          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-[#C9956A]/20 via-[#C9956A] to-[#C9956A]/20 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
              {[
                {
                  num: "01",
                  title: "Consultation",
                  desc: "A comprehensive initial dialogue to evaluate history, mapping your skincare goals with our experienced clinicians."
                },
                {
                  num: "02",
                  title: "Skin Analysis",
                  desc: "Deep diagnosis using clinical magnification to inspect sebum depth, sensitivity thresholds, and structure."
                },
                {
                  num: "03",
                  title: "Treatment",
                  desc: "Precise application of your doctor-supervised clinical protocol using advanced aesthetic machinery."
                },
                {
                  num: "04",
                  title: "Recovery",
                  desc: "Application of barrier-repair formulas under calming phototherapy to minimize redness and speed restoration."
                },
                {
                  num: "05",
                  title: "Follow-Up",
                  desc: "A personal check-in call and follow-up mapping to measure results and optimize ongoing skincare density."
                }
              ].map((step, sIndex) => (
                <div key={sIndex} className="flex flex-col items-center text-center px-4 group">
                  {/* Step Bubble */}
                  <div className="w-14 h-14 rounded-full bg-[#1C0E08] border-2 border-[#C9956A] flex items-center justify-center mb-6 text-[#C9956A] text-sm font-semibold transition-all duration-300 group-hover:bg-[#C9956A] group-hover:text-[#160A05] shadow-lg shadow-[#C9956A]/10 group-hover:scale-105 cursor-default" style={M}>
                    {step.num}
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-white mb-3" style={D}>{step.title}</h3>
                  <p className="text-xs text-[#FAF7F2]/70 leading-relaxed max-w-[200px] lg:max-w-none font-normal" style={B}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â•â• 7. BEFORE & AFTER COMPARISON SLIDER â•â• */}
      <section className="py-24 px-6 md:px-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side: Editorial Review */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <Tag>Verified Transformation</Tag>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C1810] mt-4 mb-6 leading-tight font-light" style={D}>
                Visible outcomes, <em className="serif italic text-[#C9956A]">naturally aligned.</em>
              </h2>

              <div className="border-l-2 border-[#C9956A] pl-6 py-2 mb-8">
                <p className="text-base sm:text-lg text-[#2C1810]/90 leading-relaxed font-light italic" style={D}>
                  "The tone correction laser completely dissolved my sun spots. My face feels clean, even, and refreshed. People keep telling me I look rested, but they can't tell I had a clinical treatment."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-[#2C1810] font-semibold" style={B}>Amara K.</span>
                  <span className="text-[10px] text-[#5C4A42]/60 uppercase tracking-widest font-semibold" style={M}>— Tone Correction Laser</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#C9956A]/10 rounded-lg text-[#C9956A]">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-xs tracking-wider text-[#5C4A42] uppercase font-semibold" style={M}>Verified Clinical Results</span>
              </div>
            </div>

            {/* Right side: Interactive Slider */}
            <div className="lg:col-span-7 flex flex-col w-full">
              <div className="flex items-center justify-between mb-4 px-2">
                <span className="text-[10px] sm:text-xs text-[#5C4A42]/60 uppercase tracking-widest font-semibold" style={M}>Clinical Case Study</span>
                <span className="text-[10px] sm:text-xs text-[#C9956A] uppercase tracking-widest font-bold" style={M}>Laser Pigmentation Reduction</span>
              </div>
              <BeforeAfterSlider />
            </div>
          </div>
        </div>
      </section>

      {/* â•â• 8. PREMIUM TESTIMONIALS â•â• */}
      <section className="py-24 px-6 md:px-16 bg-[#FAF7F2] border-t border-[#2C1810]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Tag>Patient Stories</Tag>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C1810] mt-4 mb-6 leading-tight font-light" style={D}>
              Carried with <em className="serif italic text-[#C9956A]">confidence.</em>
            </h2>
            <p className="text-sm text-[#5C4A42] font-normal" style={B}>
              Hear from our community of professionals and entrepreneurs about their personalized treatment experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stars: 5,
                review: "The non-surgical facelift with HIFU exceeded my expectations. The tightening on my jawline is beautifully subtle, and the luxury clinic environment made me feel so cared for.",
                patient: "Sarah M.",
                treatment: "HIFU Lift Protocol"
              },
              {
                stars: 5,
                review: "I have struggled with acne scarring for over five years. After four sessions of fractional laser, the skin texture is dramatically smoother. The precision of the specialists is remarkable.",
                patient: "David K.",
                treatment: "Laser Scar Reduction"
              },
              {
                stars: 5,
                review: "My go-to treatment is the Hydrafacial. It offers an immediate glow, deep hydration, and completely cleared out congestion. Truly a premium skin renewal experience with zero redness.",
                patient: "Priya R.",
                treatment: "Skin Renewal Experience"
              }
            ].map((item, tIndex) => (
              <div key={tIndex} className="bg-white p-8 rounded-[24px] shadow-[0_4px_30px_rgba(44,24,16,0.01)] border border-[#2C1810]/5 flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(44,24,16,0.03)] transition-all duration-300">
                <div>
                  <div className="flex gap-1 text-[#C9956A] mb-5">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} size={15} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-[#5C4A42] leading-relaxed mb-6 font-normal" style={B}>
                    "{item.review}"
                  </p>
                </div>
                <div className="border-t border-[#2C1810]/5 pt-4">
                  <p className="text-xs text-[#2C1810] font-semibold" style={B}>{item.patient}</p>
                  <p className="text-[10px] text-[#C9956A] uppercase tracking-widest mt-0.5 font-semibold" style={M}>{item.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â•â• 9. MINIMAL ACCORDION FAQ â•â• */}
      <section className="py-24 px-6 md:px-16 bg-[#FAF7F2] border-t border-[#2C1810]/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Tag>Support & Guidance</Tag>
            <h2 className="text-3xl sm:text-4xl text-[#2C1810] mt-4 mb-4 font-light" style={D}>
              Frequently asked <em className="serif italic text-[#C9956A]">questions.</em>
            </h2>
            <p className="text-sm text-[#5C4A42] font-normal" style={B}>
              Clear answers to help you plan your clinical skincare journey with trust.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_30px_rgba(44,24,16,0.01)] border border-[#2C1810]/5">
            {[
              {
                q: "How do I know which treatment is right for me?",
                a: "Every skin journey begins with a comprehensive consultation and skin analysis with our medical team. We will evaluate your skin type, sensitivity levels, and cosmetic goals to structure a customized aesthetic protocol."
              },
              {
                q: "Are these treatments safe and FDA-approved?",
                a: "Yes. We exclusively use clinical, medical-grade platforms that are FDA-cleared. Our board-certified cosmetic dermatologists direct or execute every procedure to guarantee the highest safety guidelines."
              },
              {
                q: "Is there downtime after the treatments?",
                a: "Most of our signature treatments (HIFU, Hydrafacial, Phototherapy) have zero recovery downtime, allowing you to return to work immediately. Resurfacing lasers or PRP may exhibit slight redness for 12â€“24 hours."
              },
              {
                q: "How many sessions will I need to see results?",
                a: "It depends on the protocol. Hydrafacials deliver an instant radiant glow, whereas collagen-stimulating HIFU or regenerative GFC show progressive skin density improvements over a 3 to 6-month timeline."
              }
            ].map((faq, fIndex) => (
              <FAQItem
                key={fIndex}
                question={faq.q}
                answer={faq.a}
                isOpen={openFAQIndex === fIndex}
                onToggle={() => setOpenFAQIndex(openFAQIndex === fIndex ? null : fIndex)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* â•â• 10. FINAL CALL TO ACTION â•â• */}
      <section className="relative overflow-hidden bg-[#160A05] py-24 md:py-32 text-center text-[#FAF7F2]">
        {/* Subtle glowing ring backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #C9956A 0%, transparent 65%)" }} />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <FadeUp>
            <Tag>Begin Your Skincare Story</Tag>
            <h2 className="text-4xl sm:text-6xl text-[#FAF7F2] leading-tight mt-5 mb-8 font-light" style={D}>
              Ready to transform<br />
              <em className="font-serif italic text-[#C9956A]">your skin?</em>
            </h2>
            <p className="text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed mb-12 max-w-md mx-auto font-normal" style={B}>
              Schedule a private consultation with our experienced medical team to discover your personalized treatment protocol.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
              {/* Glowing Book Button */}
              <motion.a
                href="/book-consultation"
                whileHover={{ scale: 1.03, y: -2, boxShadow: "0 12px 30px rgba(201,149,106,0.35)" }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#C9956A] text-[#FAF7F2] text-xs tracking-[0.18em] uppercase rounded-xl font-semibold overflow-hidden group shadow-lg shadow-[#C9956A]/20 transition-all"
                style={B}
              >
                {/* Glowing glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                Schedule Your Consultation
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
              </motion.a>

              {/* WhatsApp consultation */}
              <motion.a
                href="https://api.whatsapp.com/send?phone=919946336480"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2, borderColor: "#C9956A", color: "#C9956A", backgroundColor: "rgba(201,149,106,0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-[#FAF7F2]/15 hover:border-[#C9956A] text-[#FAF7F2] hover:text-[#C9956A] text-xs tracking-[0.15em] uppercase rounded-xl font-semibold transition-all"
                style={B}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366" className="shrink-0"><path d={WA_PATH} /></svg>
                Speak With Our Team
              </motion.a>
            </div>
          </FadeUp>
        </div>
      </section>
    </motion.div>
  );
}
