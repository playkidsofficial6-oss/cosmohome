import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Star, ShieldCheck, ChevronLeft, ChevronRight, Stethoscope, Lock, Clock, Check } from "lucide-react";

import { D, M, B, GOLD, EASE, GRAIN, WA_PATH } from "../lib/constants";
import { CTAButtons, FadeUp, Tag } from "../components/ui/shared";
import { SERVICES_DATA } from "../lib/servicesData";

function BeforeAfterSlider({ beforeImage, afterImage }: { beforeImage: string; afterImage: string }) {
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
        src={beforeImage}
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
          src={afterImage}
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

function DarkInputField({ label, type = "text", placeholder, name }: { label: string; type?: string; placeholder: string; name?: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-1.5 text-left">
      <label className="text-[10px] tracking-[0.25em] uppercase text-[#5C4A42] font-semibold" style={M}>{label}</label>
      <div className={`relative transition-all duration-300 ${focused ? "shadow-[0_0_0_2px_rgba(201,149,106,0.35)] rounded-md" : ""}`}>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          required
          className="w-full border-b bg-transparent pb-2 pt-1 text-sm text-[#2C1810] placeholder:text-[#5C4A42]/40 focus:outline-none transition-colors"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ borderBottomColor: focused ? GOLD : "rgba(44,24,16,0.2)", ...B }}
        />
      </div>
    </div>
  );
}

const slugToOptionMap: Record<string, string> = {
  "hifu": "HIFU",
  "hydrafacial-medifacial": "Hydrafacial / Medifacial",
  "mesopeels-carbon-peel": "Mesopeels / Carbon Peel",
  "laser-pigment-reduction": "Laser Pigment Reduction",
  "laser-scar-reduction": "Laser Scar Reduction",
  "phototherapy": "Phototherapy",
  "excimer-laser": "Excimer Laser",
  "laser-hair-reduction": "Laser Hair Reduction",
  "muscle-sculpting": "Muscle Sculpting",
  "exosomes-prp-gfc": "Exosomes / PRP / GFC"
};

const getTrustIcon = (text: string) => {
  const clean = text.toLowerCase();
  if (clean.includes("doctor") || clean.includes("supervised") || clean.includes("physician") || clean.includes("medical")) {
    return Stethoscope;
  }
  if (clean.includes("private") || clean.includes("secure") || clean.includes("consultation")) {
    return Lock;
  }
  if (clean.includes("time") || clean.includes("downtime") || clean.includes("minimal")) {
    return Clock;
  }
  if (clean.includes("safe") || clean.includes("clinical")) {
    return ShieldCheck;
  }
  return Check;
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES_DATA[slug || "hydrafacial-medifacial"] || SERVICES_DATA["hydrafacial-medifacial"];
  const [activeSession, setActiveSession] = useState(0);

  const [formSent, setFormSent] = useState(false);
  const [selected, setSelected] = useState("");
  const [dropOpen, setDropOpen] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveSession(0);
    setFormSent(false);
    setDropOpen(false);
  }, [slug]);

  useEffect(() => {
    const currentSlug = slug || "hydrafacial-medifacial";
    if (slugToOptionMap[currentSlug]) {
      setSelected(slugToOptionMap[currentSlug]);
    } else if (service) {
      setSelected(service.title + (service.titleEmphasized ? " " + service.titleEmphasized.replace(/\.$/, "") : ""));
    }
  }, [slug, service]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const options = [
    "I am not sure yet",
    "HIFU",
    "Hydrafacial / Medifacial",
    "Mesopeels / Carbon Peel",
    "Laser Pigment Reduction",
    "Laser Scar Reduction",
    "Phototherapy",
    "Excimer Laser",
    "Laser Hair Reduction",
    "Muscle Sculpting",
    "Exosomes / PRP / GFC"
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={service.id}
        style={B}
        className="min-h-screen bg-[#FAF7F2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* ══ 1. CINEMATIC HERO ══ */}
        <section className="relative min-h-screen lg:h-screen flex flex-col lg:grid lg:grid-cols-2 bg-[#FAF6F0] pt-16 overflow-hidden">
          {/* Left — content */}
          <div className="relative z-10 flex flex-col justify-center px-5 sm:px-10 md:px-16 pt-6 pb-12 md:py-20 lg:py-0">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              {/* Social proof badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                style={{ background: "rgba(201,149,106,0.12)", borderColor: "rgba(201,149,106,0.3)" }}>
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-xs text-[#2C1810]/80" style={B}>{service.heroRating}</span>
              </div>
            </motion.div>

            <FadeUp>
              <p className="text-xs tracking-[0.35em] uppercase text-[#C9956A] mb-3" style={M}>{service.experienceNo}</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-7xl text-[#2C1810] leading-[1.0] mb-6" style={D}>
                {service.title}<br /><em>{service.titleEmphasized}</em>
              </h1>
              <p className="text-base md:text-lg text-[#5C4A42] max-w-md leading-loose mb-8" style={B}>
                {service.description}
              </p>
            </FadeUp>

            {/* Inline key stats */}
            <FadeUp delay={0.1}>
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-sm">
                {service.stats.map(({ n, l }) => (
                  <div key={l} className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(201,149,106,0.25)", backdropFilter: "blur(8px)" }}>
                    <p className="text-2xl text-[#C9956A]" style={D}>{n}</p>
                    <p className="text-xs text-[#5C4A42] mt-0.5" style={B}>{l}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <CTAButtons />
            </FadeUp>
          </div>

          {/* Right — full image */}
          <div className="relative min-h-[50vh] lg:min-h-full hidden lg:block">
            <img src={service.heroImage}
              alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0] via-transparent to-transparent lg:from-transparent lg:via-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0]/60 to-transparent lg:from-[#FAF6F0]/10" />
            {/* Floating trust card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="absolute bottom-6 right-6 p-5 rounded-2xl max-w-[220px]"
              style={{ background: "rgba(250,247,242,0.92)", backdropFilter: "blur(12px)", border: "1px solid rgba(201,149,106,0.3)", boxShadow: "0 8px 32px rgba(44,24,16,0.1)" }}>
              <p className="text-xs tracking-[0.18em] uppercase text-[#C9956A] mb-2" style={M}>
                {service.performedByLabel || "👩‍⚕️ Performed by"}
              </p>
              <p className="text-base text-[#2C1810]" style={{ ...D, fontStyle: "italic" }}>
                {service.performedByName || "Doctor-Supervised Care"}
              </p>
              <p className="text-xs text-[#5C4A42] mt-1" style={B}>
                {service.performedBySub || "Safe • Personalised • Professional"}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══ 2. WHAT IS THIS ══ */}
        <section className="pt-6 pb-12 md:py-28 px-5 sm:px-10 md:px-16 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-20 items-center">
              <FadeUp>
                <Tag>{service.whatIsThisTag || "What Is This?"}</Tag>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C1810] leading-[1.05] mt-3 mb-6" style={D}>
                  {service.whatIsThisTitle}<br /><em>{service.whatIsThisEmphasized}</em>
                </h2>
                <p className="text-base text-[#2C1810] leading-loose mb-4" style={B} dangerouslySetInnerHTML={{ __html: service.whatIsThisDesc1 }} />
                <p className="text-base text-[#2C1810] leading-loose mb-8" style={B} dangerouslySetInnerHTML={{ __html: service.whatIsThisDesc2 }} />

                {/* Benefit grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {service.benefits.map(({ icon, b, d }) => (
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
                    <img src={service.sideImage}
                      alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/50 to-transparent" />
                  </div>
                  {/* Clinical note */}
                  {service.clinicalNote && (
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="relative sm:absolute mt-6 sm:mt-0 bottom-auto left-auto sm:-bottom-5 sm:-left-8 p-5 rounded-2xl w-full sm:w-auto sm:max-w-[260px]"
                      style={{ background: "#2C1810", boxShadow: "0 20px 60px rgba(44,24,16,0.25)" }}
                    >
                      <p className="text-xs tracking-[0.2em] uppercase text-[#C9956A] mb-1.5" style={M}>
                        {service.clinicalNoteLabel || "Clinical note"}
                      </p>
                      <p className="text-sm text-[#FAF7F2]/90 leading-relaxed font-normal" style={B}>{service.clinicalNote}</p>
                    </motion.div>
                  )}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ══ 3. MACHINE ══ */}
        <section className="py-6 md:py-28 bg-[#FAF6F0] relative overflow-hidden border-t border-[#2C1810]/5">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
          <motion.div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,149,106,0.1) 0%, transparent 65%)" }}
            animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 9, repeat: Infinity }} />

          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-16 relative z-10">
            <div className="text-center mb-14">
              <FadeUp>
                <Tag>{service.technologyTag || "🔬 The Technology"}</Tag>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C1810] leading-[1.05] mt-3" style={D}>
                  {service.machineTitle}<br /><em>{service.machineEmphasized}</em>
                </h2>
              </FadeUp>
            </div>

            {/* Side-by-side machine showcase + comparison table */}
            <div className="grid lg:grid-cols-[1fr_1fr] gap-10">
              {/* Machine card */}
              <FadeUp delay={0.05}>
                <div className="relative rounded-3xl overflow-hidden h-full flex flex-col"
                  style={{ background: "linear-gradient(145deg, #FFFFFF, #FAF7F2)", border: "1px solid rgba(201,149,106,0.25)", boxShadow: "0 8px 32px rgba(44,24,16,0.06)" }}>
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5 px-4 py-1.5 rounded-full text-xs text-[#C9956A] font-medium z-10" style={{ background: "rgba(250,247,242,0.92)", backdropFilter: "blur(8px)", border: "1px solid rgba(201,149,106,0.35)", ...M }}>
                    {service.ourDeviceLabel || "✅ Our Technology"}
                  </div>
                  <div className="relative aspect-[16/9] overflow-hidden shrink-0">
                    <img src={service.deviceImage}
                      alt={service.deviceName} className="w-full h-full object-cover opacity-75" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAF7F2]/60" />
                  </div>
                  <div className="p-7 relative z-10">
                    <h3 className="text-2xl text-[#2C1810] mb-1" style={{ ...D, fontStyle: "italic" }}>{service.deviceName}</h3>
                    <p className="text-xs text-[#C9956A] tracking-widest uppercase mb-4" style={M}>{service.deviceSub}</p>
                    <p className="text-base text-[#5C4A42] leading-loose mb-5" style={B}>
                      {service.deviceDesc}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {service.deviceFeatures.map(f => (
                        <span key={f} className="px-4 py-1.5 rounded-full text-xs text-[#2C1810] font-medium"
                          style={{ background: "rgba(201,149,106,0.12)", border: "1px solid rgba(201,149,106,0.4)", letterSpacing: "0.05em", ...B }}>{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* Comparison table */}
              <FadeUp delay={0.12}>
                <div className="flex flex-col gap-3 md:gap-4 mt-2 lg:mt-0">
                  <p className="text-xs tracking-[0.2em] uppercase text-[#5C4A42]/70 mb-1 md:mb-2" style={M}>
                    {service.comparisonTitle || "COSMO HOME vs Conventional Treatment1"}
                  </p>
                  {service.comparisonRows.map((row, i) => (
                    <motion.div key={row.label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                      className="flex flex-col md:grid md:grid-cols-[auto_1fr_1fr] gap-4 md:gap-3 items-start rounded-xl p-5 md:p-4"
                      style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(201,149,106,0.15)", boxShadow: "0 2px 12px rgba(44,24,16,0.03)" }}>
                      <p className="text-sm md:text-xs text-[#C9956A] md:pt-0.5 md:w-24 shrink-0 border-b border-[#C9956A]/10 md:border-0 pb-2 md:pb-0 w-full" style={M}>{row.label}</p>

                      <div className="flex flex-col gap-1.5 w-full">
                        <div className="flex gap-3 md:gap-2 items-start">
                          <span className="text-base md:text-sm shrink-0 mt-0.5 md:mt-0">✅</span>
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-[#5C4A42]/60 md:hidden block mb-0.5" style={M}>Cosmo Home</span>
                            <p className="text-sm md:text-xs text-[#2C1810] leading-relaxed" style={B}>{row.ours}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5 w-full mt-1 md:mt-0 pt-3 border-t border-white/5 md:border-0 md:pt-0">
                        <div className="flex gap-3 md:gap-2 items-start">
                          <span className="text-base md:text-sm shrink-0 mt-0.5 md:mt-0">⚠️</span>
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-[#5C4A42]/60 md:hidden block mb-0.5" style={M}>
                              {service.standardClinicLabel || "Standard Clinic"}
                            </span>
                            <p className="text-sm md:text-xs text-[#5C4A42]/70 leading-relaxed" style={B}>{row.standard}</p>
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
                <Tag>{service.whoNeedsTag || "Is This For You?"}</Tag>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C1810] leading-[1.05] mt-3 mb-5" style={D}>
                  {service.whoNeedsTitle || "You need"}<br /><em>{service.whoNeedsTitleEmphasized || "this if…"}</em>
                </h2>
                <p className="text-base text-[#5C4A42] leading-loose mb-6" style={B}>
                  {service.whoNeedsDesc}
                </p>
                {/* Contraindication */}
                <div className="p-5 rounded-2xl border-l-4 border-[#C9956A] mb-8"
                  style={{ background: "rgba(201,149,106,0.07)" }}>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#C9956A] mb-2" style={M}>
                    {service.notSuitableLabel || "⚠️ Not suitable if"}
                  </p>
                  <p className="text-sm text-[#5C4A42] leading-relaxed" style={B}>
                    {service.notSuitable}
                  </p>
                </div>
                <CTAButtons light />
              </FadeUp>

              <div className="grid sm:grid-cols-2 gap-4">
                {service.whoNeedsItems.map((item, i) => (
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
        <section className="py-6 md:py-28 bg-[#FAF6F0] relative overflow-hidden border-t border-[#2C1810]/5">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-16 relative z-10">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-20 items-start">
              <FadeUp>
                <Tag>{service.sessionPlanTag || "Your Treatment Plan"}</Tag>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C1810] leading-[1.05] mt-3 mb-6" style={D}>
                  {service.sessionPlanTitle || "What happens"}<br /><em>{service.sessionPlanTitleEmphasized || "in each session."}</em>
                </h2>
                <p className="text-base text-[#5C4A42] leading-loose mb-8" style={B}>
                  {service.sessionPlanDesc}
                </p>
                {/* Session selector */}
                <div className="flex flex-col gap-2">
                  {service.sessionPlanSteps.map((s, i) => (
                    <div key={s.n} className="flex flex-col gap-2">
                      <motion.button onClick={() => setActiveSession(i)}
                        whileHover={{ x: 4 }}
                        className={`text-left px-5 py-4 rounded-xl transition-all duration-250 flex items-center justify-between gap-4 ${activeSession === i ? "bg-[#8C5D47] text-[#FAF7F2]" : "text-[#5C4A42] hover:text-[#2C1810]"}`}
                        style={{ background: activeSession === i ? "#8C5D47" : "rgba(255,255,255,0.8)", border: `1px solid ${activeSession === i ? "#8C5D47" : "rgba(44,24,16,0.1)"}`, boxShadow: "0 2px 12px rgba(44,24,16,0.04)" }}>
                        <div className="flex items-center gap-4">
                          <span className="text-sm w-10 shrink-0" style={M}>{s.n}</span>
                          <div>
                            <p className="text-sm font-medium" style={B}>{s.label}</p>
                            {s.duration && <p className="text-xs opacity-70 mt-0.5" style={B}>{s.duration}</p>}
                          </div>
                        </div>
                        <motion.div animate={{ rotate: activeSession === i ? 90 : 0 }} className="lg:hidden shrink-0 transition-transform">
                          <ArrowRight size={14} />
                        </motion.div>
                        <ArrowRight size={14} className={`hidden lg:block shrink-0 transition-transform ${activeSession === i ? "translate-x-1" : ""}`} />
                      </motion.button>

                      {/* Mobile Accordion Content */}
                      <AnimatePresence initial={false}>
                        {activeSession === i && (
                          <motion.div
                            className="lg:hidden overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: EASE }}
                          >
                            <div className="pt-2 pb-4">
                              <div className="relative p-6 rounded-2xl overflow-hidden"
                                style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(201,149,106,0.2)", boxShadow: "0 8px 32px rgba(44,24,16,0.05)" }}>
                                {/* Ghost number */}
                                <span className="absolute -top-4 -right-2 text-[80px] font-bold leading-none select-none pointer-events-none"
                                  style={{ ...D, color: "rgba(201,149,106,0.06)" }}>{activeSession + 1}</span>
                                <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9956A] mb-2" style={M}>
                                  Session {service.sessionPlanSteps[activeSession].n}{service.sessionPlanSteps[activeSession].duration && ` · ${service.sessionPlanSteps[activeSession].duration}`}
                                </p>
                                <h3 className="text-xl text-[#2C1810] mb-3" style={{ ...D, fontStyle: "italic" }}>
                                  {service.sessionPlanSteps[activeSession].label}
                                </h3>
                                <div className="h-px w-8 bg-[#C9956A]/50 mb-4" />
                                <p className="text-sm text-[#5C4A42] leading-relaxed" style={B}>
                                  {service.sessionPlanSteps[activeSession].detail}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </FadeUp>

              <div className="hidden lg:block lg:pt-16">
                <AnimatePresence mode="wait">
                  <motion.div key={activeSession} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease: EASE }}>
                    <div className="relative p-8 rounded-3xl overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(201,149,106,0.2)", boxShadow: "0 8px 32px rgba(44,24,16,0.05)" }}>
                      {/* Ghost number */}
                      <span className="absolute -top-4 -right-2 text-[120px] font-bold leading-none select-none pointer-events-none"
                        style={{ ...D, color: "rgba(201,149,106,0.06)" }}>{activeSession + 1}</span>
                      <p className="text-xs tracking-[0.25em] uppercase text-[#C9956A] mb-3" style={M}>
                        Session {service.sessionPlanSteps[activeSession].n}{service.sessionPlanSteps[activeSession].duration && ` · ${service.sessionPlanSteps[activeSession].duration}`}
                      </p>
                      <h3 className="text-2xl text-[#2C1810] mb-4" style={{ ...D, fontStyle: "italic" }}>
                        {service.sessionPlanSteps[activeSession].label}
                      </h3>
                      <div className="h-px w-12 bg-[#C9956A]/50 mb-5" />
                      <p className="text-base text-[#5C4A42] leading-loose" style={B}>
                        {service.sessionPlanSteps[activeSession].detail}
                      </p>
                    </div>

                    {/* Progress indicator */}
                    <div className="flex gap-2 mt-5">
                      {service.sessionPlanSteps.map((_, i) => (
                        <motion.div key={i} className="h-1 flex-1 rounded-full"
                          animate={{ backgroundColor: i <= activeSession ? "#C9956A" : "rgba(201,149,106,0.2)" }}
                          transition={{ duration: 0.3 }} />
                      ))}
                    </div>
                    <p className="text-xs text-[#5C4A42]/60 mt-2" style={B}>
                      Session {activeSession + 1} of {service.sessionPlanSteps.length}
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
                <Tag>{service.timelineTag || "What to Expect"}</Tag>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C1810] leading-[1.05] mt-3" style={D}>
                  {service.timelineTitle || "Your skin, transformed"}<br /><em>{service.timelineTitleEmphasized || "step by step."}</em>
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-sm text-[#5C4A42] max-w-xs leading-loose" style={B}>
                  {service.timelineDesc}
                </p>
              </FadeUp>
            </div>

            {/* Desktop: staggered cards */}
            <div className="hidden lg:grid grid-cols-5 gap-4">
              {service.timelineItems.map((t, i) => (
                <FadeUp key={t.when} delay={i * 0.1}>
                  <motion.div whileHover={{ y: -8, boxShadow: "0 16px 48px rgba(201,149,106,0.18)" }}
                    transition={{ type: "spring", stiffness: 240 }}
                    className={`relative p-5 rounded-2xl flex flex-col ${i % 2 === 1 ? "mt-8" : ""}`}
                    style={{ background: "#FFFFFF", border: "1px solid rgba(201,149,106,0.2)", boxShadow: "0 4px 20px rgba(44,24,16,0.05)" }}>
                    <span className="text-2xl mb-3">{t.icon || ["✨", "🌱", "🌿", "🌸", "🏆"][i]}</span>
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
              {service.timelineItems.map((t, i) => (
                <FadeUp key={t.when} delay={i * 0.08}>
                  <div className="relative mb-8 last:mb-0">
                    <div className="absolute -left-9 top-1 w-5 h-5 rounded-full border-2 border-[#C9956A] bg-[#FAF7F2] flex items-center justify-center text-[10px]">
                      {t.icon || ["✨", "🌱", "🌿", "🌸", "🏆"][i]}
                    </div>
                    <p className="text-xs tracking-[0.22em] uppercase text-[#C9956A] mb-1" style={M}>{t.when}</p>
                    <p className="text-base text-[#2C1810] leading-loose" style={B}>{t.what}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ══ BEFORE & AFTER COMPARISON SLIDER ══ */}
        {service.beforeAfter && (
          <section className="py-24 px-5 sm:px-10 md:px-16 bg-[#FAF7F2] border-t border-[#2C1810]/5">
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
                      "{service.beforeAfter.testimonialText}"
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex gap-0.5 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-[#2C1810] font-semibold" style={B}>{service.beforeAfter.patientName}</span>
                      <span className="text-[10px] text-[#5C4A42]/60 uppercase tracking-widest font-semibold" style={M}>— {service.beforeAfter.treatmentName}</span>
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
                    <span className="text-[10px] sm:text-xs text-[#C9956A] uppercase tracking-widest font-bold" style={M}>{service.beforeAfter.treatmentName}</span>
                  </div>
                  <BeforeAfterSlider
                    beforeImage={service.beforeAfter.beforeImage}
                    afterImage={service.beforeAfter.afterImage}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ══ 7. FINAL CTA ══ */}
        <section id="sp-book" className="relative overflow-hidden bg-[#FAF6F0]">
          {/* Full bleed background */}
          <div className="absolute inset-0">
            <img src={service.ctaImage}
              alt="Confident body beauty" className="w-full h-full object-cover object-top opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0]/95 via-[#FAF6F0]/80 to-[#FAF6F0]/40" />
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
                  <span className="text-xs text-[#2C1810]/80" style={B}>{service.ctaRating}</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#2C1810] leading-[1.0] mb-5" style={D}>
                  {service.ctaTitle}<br />
                  {service.ctaTitle2 ? <>{service.ctaTitle2}<br /></> : null}
                  <em>{service.ctaEmphasized}</em>
                </h2>
                <div className="flex flex-col sm:flex-row gap-3.5 mb-8">
                  <motion.a href={service.ctaButtonLink || "/book-consultation"}
                    whileHover={{ scale: 1.03, y: -2, boxShadow: "0 12px 30px rgba(201,149,106,0.35)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#C9956A] text-[#FAF7F2] text-xs tracking-[0.18em] uppercase rounded-xl shadow-lg shadow-[#C9956A]/20 font-semibold group transition-all" style={B}>
                    {service.ctaButtonText || "Book My Consultation"}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
                  </motion.a>
                  <motion.a href={service.ctaSecondaryButtonLink || "https://api.whatsapp.com/send?phone=919946336480"} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2, borderColor: "#C9956A", color: "#C9956A", backgroundColor: "rgba(201,149,106,0.03)" }} whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-[#2C1810]/15 text-[#2C1810] text-xs tracking-[0.15em] uppercase rounded-xl transition-all font-semibold" style={B}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366" className="shrink-0"><path d={WA_PATH} /></svg>
                    {service.ctaSecondaryButtonText || "Ask Dr. Ruxana"}
                  </motion.a>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-2.5">
                  {(service.ctaTrustSignals || ["👩‍⚕️ Doctor Supervised", "⏱️ Minimal Downtime", "🔒 Private Consultation"]).map((t, idx) => {
                    // strip emoji
                    const cleanText = t.replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, '').trim();
                    const Icon = getTrustIcon(cleanText);
                    return (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#2C1810]/8 shadow-[0_2px_6px_rgba(44,24,16,0.02)]"
                      >
                        <Icon size={12} className="text-[#C9956A]" />
                        <span className="text-[11px] font-medium text-[#5C4A42] tracking-wide" style={B}>
                          {cleanText}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </FadeUp>

              {/* Compact info card */}
              <FadeUp delay={0.2} className="hidden lg:block shrink-0">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl w-[360px]"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(201,149,106,0.25)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
                  }}
                >
                  <AnimatePresence mode="wait">
                    {!formSent ? (
                      <motion.form
                        key="form"
                        exit={{ opacity: 0, y: -12 }}
                        onSubmit={(e) => {
                          e.preventDefault();
                          setFormSent(true);
                        }}
                        className="flex flex-col gap-5"
                      >
                        <p className="text-lg text-[#2C1810] mb-1 text-left" style={{ ...D, fontStyle: "italic" }}>
                          {service.ctaFormTitle || "Begin your story. 🌸"}
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                          <DarkInputField label="First name" placeholder="First name" />
                          <DarkInputField label="Last name" placeholder="Last name" />
                        </div>

                        <DarkInputField label="Phone" type="tel" placeholder="+91 98765 43210" />

                        {/* Custom Dropdown */}
                        <div ref={dropRef} className="flex flex-col gap-1.5 relative text-left">
                          <label className="text-[10px] tracking-[0.25em] uppercase text-[#5C4A42]" style={M}>
                            {service.ctaFormDropdownLabel || "Experience of interest"}
                          </label>
                          <button
                            type="button"
                            onClick={() => setDropOpen(!dropOpen)}
                            className="w-full border-b bg-transparent pb-2 pt-1 text-sm text-left flex items-center justify-between gap-2 focus:outline-none transition-colors"
                            style={{
                              borderBottomColor: dropOpen ? GOLD : "rgba(44,24,16,0.2)",
                              color: selected ? "#2C1810" : "rgba(44,24,16,0.4)",
                              ...B
                            }}
                          >
                            <span>{selected || "I am not sure yet"}</span>
                            <motion.svg
                              animate={{ rotate: dropOpen ? 180 : 0 }}
                              transition={{ duration: 0.25 }}
                              width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9956A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                              className="shrink-0"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </motion.svg>
                          </button>
                          <AnimatePresence>
                            {dropOpen && (
                              <motion.ul
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                transition={{ duration: 0.2 }}
                                className="absolute bottom-full left-0 right-0 mb-2 max-h-48 overflow-y-auto bg-white rounded-xl shadow-2xl border border-[#2C1810]/10 z-50 custom-scrollbar origin-bottom"
                              >
                                {options.map((opt) => (
                                  <li
                                    key={opt}
                                    onClick={() => {
                                      setSelected(opt === "I am not sure yet" ? "" : opt);
                                      setDropOpen(false);
                                    }}
                                    className={`px-4 py-2.5 text-xs cursor-pointer transition-all duration-200 flex items-center gap-2.5 ${selected === opt || (!selected && opt === "I am not sure yet")
                                      ? "bg-[#C9956A]/20 text-[#C9956A]"
                                      : "text-[#5C4A42] hover:bg-[#C9956A]/5 hover:text-[#C9956A]"
                                      }`}
                                    style={B}
                                  >
                                    <span className={`w-1 h-1 rounded-full shrink-0 transition-colors ${selected === opt || (!selected && opt === "I am not sure yet")
                                      ? "bg-[#C9956A]"
                                      : "bg-[#5C4A42]/20"
                                      }`} />
                                    {opt}
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Textarea */}
                        <div className="flex flex-col gap-1.5 text-left">
                          <label className="text-[10px] tracking-[0.25em] uppercase text-[#5C4A42]" style={M}>
                            {service.ctaFormMessageLabel || "Tell us a little"}
                          </label>
                          <div className={`transition-all duration-300 ${focusedInput === "msg" ? "shadow-[0_0_0_2px_rgba(201,149,106,0.35)] rounded-md" : ""}`}>
                            <textarea
                              rows={2}
                              placeholder={service.ctaFormMessagePlaceholder || "What matters most to you right now?"}
                              style={{
                                borderBottomColor: focusedInput === "msg" ? GOLD : "rgba(44,24,16,0.2)",
                                ...B
                              }}
                              className="w-full border-b bg-transparent pb-2 pt-1 text-sm text-[#2C1810] placeholder:text-[#5C4A42]/40 focus:outline-none transition-colors resize-none"
                              onFocus={() => setFocusedInput("msg")}
                              onBlur={() => setFocusedInput(null)}
                            />
                          </div>
                        </div>

                        <motion.button
                          type="submit"
                          style={B}
                          whileHover={{ scale: 1.02, backgroundColor: GOLD, color: "#FAF7F2", boxShadow: "0 0 20px rgba(201,149,106,0.5)" }}
                          whileTap={{ scale: 0.98 }}
                          className="mt-2 group flex items-center justify-between px-6 py-3.5 bg-[#FAF7F2] text-[#160A05] text-[10px] font-semibold tracking-[0.22em] uppercase transition-all duration-300 shadow-md cursor-pointer rounded-xl"
                        >
                          {service.ctaFormButtonText || "Send My Request"}
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <p className="text-[10px] text-[#5C4A42]/70 text-center" style={B}>
                          {service.ctaFormFooter || "Dr. Ruxana personally reviews every request. 💛"}
                        </p>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="thanks"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center text-center py-10 min-h-[360px]"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                          className="w-12 h-12 rounded-full border border-[#C9956A] flex items-center justify-center mb-6"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9956A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C9956A]">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        </motion.div>
                        <p className="text-3xl mb-3">🌸</p>
                        <p className="text-xl text-[#2C1810] mb-3" style={{ ...D, fontStyle: "italic" }}>
                          {service.ctaFormSuccessTitle || "Thank you."}
                        </p>
                        <p className="text-xs text-[#5C4A42] leading-loose max-w-[250px]" style={B}>
                          {service.ctaFormSuccessDesc || "Dr. Ruxana will personally review your request and be in touch within 24 hours. Your journey begins now."}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </FadeUp>
            </div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}
