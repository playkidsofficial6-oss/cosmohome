import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, Smile, Wind, Heart, Syringe } from "lucide-react";

import { D, M, B, GOLD, EASE, GRAIN, WA_PATH } from "../lib/constants";
import { FadeUp, Tag } from "../components/ui/shared";
import { SERVICES_DATA } from "../lib/servicesData";

// Custom type for Category Icon
type IconType = React.FC<{ size?: number; className?: string; strokeWidth?: number }>;

const CATEGORIES: Array<{ key: string; label: string; icon: IconType }> = [
  { key: "all", label: "All Treatments", icon: Sparkles as IconType },
  { key: "Face", label: "Face", icon: Smile as IconType },
  { key: "Skin", label: "Skin", icon: Sparkles as IconType },
  { key: "Hair", label: "Hair", icon: Wind as IconType },
  { key: "Body", label: "Body", icon: Heart as IconType },
  { key: "Injectables", label: "Injectables", icon: Syringe as IconType },
];

const CATEGORY_MAPPING: Record<string, string[]> = {
  Face: ["hifu", "hydrafacial-medifacial", "mesopeels-carbon-peel"],
  Skin: ["laser-pigment-reduction", "laser-scar-reduction", "phototherapy", "excimer-laser"],
  Hair: ["laser-hair-reduction"],
  Body: ["muscle-sculpting"],
  Injectables: ["exosomes-prp-gfc"]
};

// Helper to find category of a service ID
const getServiceCategory = (id: string): string => {
  for (const [cat, ids] of Object.entries(CATEGORY_MAPPING)) {
    if (ids.includes(id)) return cat;
  }
  return "Skin"; // Fallback
};

export default function ServicesListPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

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

  return (
    <motion.div
      style={B}
      className="min-h-screen bg-[#FAF7F2]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ══ 1. CINEMATIC HERO ══ */}
      <section className="relative min-h-[60vh] flex flex-col justify-center bg-[#160A05] pt-24 pb-16 overflow-hidden">
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
        <motion.div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,149,106,0.08) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 md:px-16 w-full text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
              style={{ background: "rgba(201,149,106,0.12)", borderColor: "rgba(201,149,106,0.3)" }}>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9956A]" style={M}>Treatment Directory</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FAF7F2] leading-[1.0] mb-6 max-w-4xl mx-auto" style={D}>
              Bespoke Treatments &<br /><em>Clinical Excellence.</em>
            </h1>
            <p className="text-base md:text-lg text-[#FAF7F2]/80 max-w-2xl mx-auto leading-loose mb-10" style={B}>
              Explore our doctor-supervised protocols designed to lift, rejuvenate, and restore your natural glow. Safe, personalized care with state-of-the-art medical technology.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ══ 2. CATEGORY FILTERS ══ */}
      <section className="sticky top-16 z-30 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#2C1810]/8 py-4 sm:py-6 px-5 sm:px-10 md:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-start md:justify-center overflow-x-auto gap-2.5 sm:gap-4 no-scrollbar">
          {CATEGORIES.map(({ key, label, icon: Icon }) => {
            const isActive = selectedCategory === key;
            return (
              <motion.button
                key={key}
                onClick={() => setSelectedCategory(key)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs tracking-wider uppercase transition-all duration-300 shrink-0 font-medium ${
                  isActive
                    ? "bg-[#2C1810] border-[#2C1810] text-[#FAF7F2]"
                    : "bg-[#FAF7F2] border-[#2C1810]/12 text-[#2C1810]/70 hover:border-[#C9956A] hover:text-[#C9956A]"
                }`}
                style={M}
              >
                <Icon size={14} className={isActive ? "text-[#C9956A]" : "text-current"} />
                {label}
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* ══ 3. TREATMENTS GRID ══ */}
      <section className="py-12 md:py-24 px-5 sm:px-10 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredServiceKeys.map((key) => {
                const service = SERVICES_DATA[key];
                const cat = getServiceCategory(key);
                return (
                  <motion.div
                    layout
                    key={key}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(44,24,16,0.08)" }}
                    className="flex flex-col rounded-3xl overflow-hidden bg-white border border-[#2C1810]/8 shadow-sm group h-full"
                  >
                    {/* Image Header */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#EDE5D8] shrink-0">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#160A05]/40 to-transparent" />
                      <div
                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] tracking-wider uppercase text-white font-medium backdrop-blur-md border"
                        style={{ background: "rgba(22,10,5,0.65)", borderColor: "rgba(255,255,255,0.15)", ...M }}
                      >
                        {cat}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9956A] mb-2 font-medium" style={M}>
                        {service.experienceNo || "Clinical Protocol"}
                      </p>
                      <h3 className="text-xl sm:text-2xl text-[#2C1810] mb-4 group-hover:text-[#C9956A] transition-colors leading-tight" style={D}>
                        {service.title} <em>{service.titleEmphasized}</em>
                      </h3>
                      <p className="text-sm text-[#5C4A42] leading-relaxed mb-6 flex-1 line-clamp-3" style={B}>
                        {service.description}
                      </p>

                      {/* Specs */}
                      {service.stats && service.stats.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 border-t border-[#2C1810]/8 pt-4 mb-6">
                          {service.stats.slice(0, 2).map((st) => (
                            <div key={st.l}>
                              <p className="text-sm text-[#C9956A] font-semibold" style={D}>{st.n}</p>
                              <p className="text-[10px] text-[#2C1810]/60 uppercase tracking-wider" style={M}>{st.l}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Action */}
                      <button
                        onClick={() => navigate(`/service/${key}`)}
                        className="w-full flex items-center justify-between py-3.5 px-5 border border-[#2C1810]/12 hover:border-[#C9956A] hover:bg-[#C9956A]/5 rounded-xl text-xs tracking-[0.15em] uppercase text-[#2C1810] font-semibold group/btn transition-all duration-300"
                        style={B}
                      >
                        Discover Treatment
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1.5 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ══ 4. BOTTOM CTA ══ */}
      <section className="relative overflow-hidden bg-[#160A05] py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 md:px-16 text-center">
          <FadeUp>
            <Tag>Consultation</Tag>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] leading-[1.1] mt-4 mb-6" style={D}>
              Ready to begin your skin story?<br /><em>Let's talk.</em>
            </h2>
            <p className="text-sm md:text-base text-[#FAF7F2]/75 max-w-lg mx-auto leading-relaxed mb-8" style={B}>
              Schedule a personalized consultation with Dr. Ruxana to diagnose your skin type and craft a customized aesthetic treatment protocol.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/book-consultation"
                whileHover={{ scale: 1.05, boxShadow: "0 0 36px rgba(201,149,106,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 px-9 py-4.5 bg-[#C9956A] text-[#FAF7F2] text-xs tracking-[0.2em] uppercase rounded-xl font-medium shadow-xl shadow-[#C9956A]/25 group"
                style={B}
              >
                Book Consultation
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="https://api.whatsapp.com/send?phone=919946336480"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4.5 border-2 border-[#FAF7F2]/20 text-[#FAF7F2] text-xs tracking-[0.18em] uppercase rounded-xl hover:border-[#C9956A] hover:text-[#C9956A] transition-all font-medium"
                style={B}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d={WA_PATH} /></svg>
                WhatsApp Dr. Ruxana
              </motion.a>
            </div>
          </FadeUp>
        </div>
      </section>
    </motion.div>
  );
}
