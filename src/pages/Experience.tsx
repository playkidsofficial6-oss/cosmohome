import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Star, ShieldCheck, Check, Stethoscope, Lock } from "lucide-react";

import { D, M, B, GOLD, EASE, GRAIN, WA_PATH } from "../lib/constants";
import { CTAButtons, FadeUp, Tag } from "../components/ui/shared";
import { EXPERIENCES_DATA } from "../lib/experiencesData";
import { openWhatsApp } from "../lib/whatsapp";

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
          style={{
            borderBottomColor: focused ? GOLD : "rgba(44,24,16,0.2)",
            color: "#2C1810",
            ...B
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>
    </div>
  );
}

import { useSEO } from "../lib/useSEO";

export default function ExperiencePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const exp = slug ? EXPERIENCES_DATA[slug] : null;

  useSEO({
    title: exp ? `${exp.title} | Cosmo Home Signature Experience` : "Signature Experience | Cosmo Home",
    description: exp ? `${exp.description} Designed for ${exp.suitedFor} Ideal duration: ${exp.duration}.` : "Cosmo Home signature experiences for skin, aging, confidence, and hair restoration.",
  });

  const [formSent, setFormSent] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  // If experience does not exist, redirect to home
  useEffect(() => {
    if (!exp) {
      navigate("/");
    }
  }, [exp, navigate]);

  if (!exp) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={exp.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-16 bg-[#FAF7F2] min-h-screen text-[#2C1810] overflow-x-hidden"
      >
        {/* ══ 1. HERO SECTION ══ */}
        <section className="relative pt-6 pb-16 md:py-32 px-6 md:px-16 lg:px-24 bg-[#FAF6F0] overflow-hidden border-b border-[#2C1810]/5">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
          <motion.div
            className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,149,106,0.12) 0%, transparent 65%)" }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
              {/* Left Hero Column */}
              <FadeUp>
                <Tag>Signature Experience</Tag>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] mt-4 mb-6 font-light tracking-tight" style={D}>
                  {exp.title.split(" ").slice(0, -1).join(" ")}<br />
                  <span className="serif text-[#C9956A]">{exp.title.split(" ").slice(-1)[0]}</span>
                </h1>
                <p className="text-lg md:text-xl text-[#C9956A] font-medium mb-6 uppercase tracking-wider" style={M}>
                  {exp.tagline}
                </p>
                <p className="text-base sm:text-lg text-[#5C4A42] leading-relaxed max-w-2xl mb-8" style={B}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-[#5C4A42]/60 font-semibold" style={M}>Ideal Duration</span>
                    <span className="text-sm text-[#2C1810] font-medium" style={B}>{exp.duration}</span>
                  </div>
                  <div className="w-[1px] h-10 bg-[#2C1810]/10 mx-4 hidden sm:block" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-[#5C4A42]/60 font-semibold" style={M}>Suited For</span>
                    <span className="text-sm text-[#2C1810] font-medium" style={B}>{exp.suitedFor.split(".").slice(0, 1)[0]}</span>
                  </div>
                </div>
                <div className="mt-8">
                  <CTAButtons light />
                </div>
              </FadeUp>

              {/* Right Hero Image */}
              <FadeUp delay={0.15}>
                <div className="relative">
                  <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border-4 border-white shadow-2xl bg-[#EDE5D8]">
                    <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/40 via-transparent to-transparent" />
                  </div>
                  {/* Floating clinical card */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-[#2C1810] text-[#FAF7F2] max-w-[240px] shadow-xl border border-white/10 hidden sm:block"
                  >
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9956A] font-semibold block mb-1.5" style={M}>Clinical Standard</span>
                    <p className="text-xs leading-relaxed text-[#FAF7F2]/80" style={B}>
                      Every stage is custom-timed and calibrated to your skin barrier metrics under doctor supervision.
                    </p>
                  </motion.div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ══ 2. PHILOSOPHY ══ */}
        <section className="py-10 md:py-14 px-6 md:px-16 lg:px-24 bg-[#FAF7F2]">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <Tag>The Philosophy</Tag>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C1810] leading-[1.1] mt-4 mb-6" style={D}>
                Bespoke guidance, <span className="serif text-[#C9956A]">rooted in longevity.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#5C4A42] leading-loose" style={B}>
                {exp.philosophy}
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ══ 3. THE JOURNEY STAGES ══ */}
        <section className="py-10 md:py-14 bg-[#FAF6F0] border-t border-[#2C1810]/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
            <div className="text-center mb-16">
              <FadeUp>
                <Tag>The Roadmap</Tag>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C1810] leading-[1.1] mt-4" style={D}>
                  Your Journey, <span className="serif text-[#C9956A]">Stage by Stage</span>
                </h2>
              </FadeUp>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {exp.stages.map((stage, i) => (
                <FadeUp key={stage.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 280 }}
                    className="p-8 rounded-3xl h-full flex flex-col relative bg-white border border-[#2C1810]/5 shadow-sm"
                  >
                    <span className="text-5xl font-light text-[#C9956A]/20 absolute top-5 right-6" style={D}>
                      {stage.n}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#C9956A] mb-3 block" style={M}>
                      Stage {stage.n}
                    </span>
                    <h3 className="text-xl text-[#2C1810] mb-4 font-medium" style={D}>
                      {stage.title}
                    </h3>
                    <p className="text-sm text-[#5C4A42] leading-relaxed flex-1" style={B}>
                      {stage.description}
                    </p>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 4. KEY BENEFITS ══ */}
        <section className="py-10 md:py-14 px-6 md:px-16 lg:px-24 bg-[#FAF7F2]">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center">
              <FadeUp>
                <Tag>Verified Benefits</Tag>
                <h2 className="text-3xl sm:text-4xl text-[#2C1810] leading-[1.1] mt-4" style={D}>
                  What to <span className="serif text-[#C9956A]">expect.</span>
                </h2>
                <p className="text-sm text-[#5C4A42] leading-relaxed mt-4" style={B}>
                  Signature experiences prioritize skin longevity, cell communication, and safety. Every stage yields cumulative, progressive results.
                </p>
              </FadeUp>

              <div className="flex flex-col gap-4">
                {exp.benefits.map((b, i) => (
                  <FadeUp key={b} delay={i * 0.06}>
                    <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-[#2C1810]/5 shadow-sm">
                      <div className="w-5 h-5 rounded-full bg-[#C9956A]/10 flex items-center justify-center text-[#C9956A] shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <p className="text-sm text-[#2C1810] font-medium" style={B}>{b}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 5. INQUIRY FORM ══ */}
        <section id="sp-book" className="relative overflow-hidden bg-[#FAF6F0] py-20 md:py-32">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                  style={{ background: "rgba(201,149,106,0.12)", borderColor: "rgba(201,149,106,0.35)" }}>
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                  <span className="text-xs text-[#2C1810]/80" style={B}>Signature clinical pathways</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#2C1810] leading-[1.1] mb-5" style={D}>
                  Ready to begin your<br />
                  <span>{exp.title}?</span>
                </h2>
                <p className="text-base text-[#5C4A42] leading-relaxed max-w-xl mb-8" style={B}>
                  Book a clinical consultation. Dr. Ruxana will map your skin barrier, evaluate your aesthetic goals, and construct your personalised journey timeline.
                </p>
                <div className="flex flex-col sm:flex-row gap-3.5 mb-8">
                  <motion.a href="https://wa.me/919495511628" target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2, boxShadow: "0 12px 30px rgba(201,149,106,0.35)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#C9956A] text-[#FAF7F2] text-xs tracking-[0.18em] uppercase rounded-xl shadow-lg shadow-[#C9956A]/20 font-semibold group transition-all" style={B}>
                    Request Consultation
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
                  </motion.a>
                  <motion.a href="https://api.whatsapp.com/send?phone=919495511628" target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2, borderColor: "#C9956A", color: "#C9956A", backgroundColor: "rgba(201,149,106,0.03)" }} whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-[#2C1810]/15 text-[#2C1810] text-xs tracking-[0.15em] uppercase rounded-xl transition-all font-semibold" style={B}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366" className="shrink-0"><path d={WA_PATH} /></svg>
                    Ask Dr. Ruxana
                  </motion.a>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { text: "Doctor Calibrated", icon: Stethoscope },
                    { text: "Private & Secure Assessment", icon: Lock },
                    { text: "Clinically Safe Guidance", icon: ShieldCheck }
                  ].map(({ text, icon: Icon }, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#2C1810]/8 shadow-[0_2px_6px_rgba(44,24,16,0.02)]"
                    >
                      <Icon size={12} className="text-[#C9956A]" />
                      <span className="text-[11px] font-medium text-[#5C4A42] tracking-wide" style={B}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeUp>

              {/* Inquiry form card */}
              <FadeUp delay={0.2} className="shrink-0">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-white border border-[#C9956A]/20 shadow-[0_20px_50px_rgba(44,24,16,0.05)]"
                >
                  <AnimatePresence mode="wait">
                    {!formSent ? (
                      <motion.form
                        key="form"
                        exit={{ opacity: 0, y: -12 }}
                        onSubmit={(e) => {
                          e.preventDefault();
                          const form = e.currentTarget;
                          const inputs = form.querySelectorAll("input");
                          const firstName = inputs[0]?.value || "";
                          const lastName = inputs[1]?.value || "";
                          const phone = inputs[2]?.value || "";
                          const tellUsALittle = form.querySelector("textarea")?.value || "";
                          const experienceOfInterest = exp?.title || "Not specified";

                          const name = [firstName, lastName].filter(Boolean).join(" ") || "Not provided";

                          const lines = [
                            "🔔 *NEW CONSULTATION REQUEST*",
                            "",
                            "👤 *Patient Details*",
                            `• Name: ${name}`,
                            `• Phone: ${phone || "Not provided"}`,
                            "",
                            "✨ *Treatment Interest*",
                            `• ${experienceOfInterest || "General Consultation"}`,
                            "",
                            "📝 *Message*",
                            `"${tellUsALittle || "None"}"`,
                            "",
                            "━━━━━━━━━━━━━━━━━━",
                            "🏥 COSMO HOME",
                            "Aesthetic Medicine",
                            "🌐 cosmohome.in",
                          ];

                          openWhatsApp(lines.join("\n"));
                          setFormSent(true);
                        }}
                        className="flex flex-col gap-5"
                      >
                        <p className="text-lg text-[#2C1810] mb-1 text-left" style={{ ...D }}>
                          Request details for this experience. 🌸
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                          <DarkInputField label="First name" placeholder="First name" />
                          <DarkInputField label="Last name" placeholder="Last name" />
                        </div>

                        <DarkInputField label="Phone" type="tel" placeholder="+91 98765 43210" />

                        {/* Textarea */}
                        <div className="flex flex-col gap-1.5 text-left">
                          <label className="text-[10px] tracking-[0.25em] uppercase text-[#5C4A42]" style={M}>
                            Tell us a little
                          </label>
                          <div className={`transition-all duration-300 ${focusedInput === "msg" ? "shadow-[0_0_0_2px_rgba(201,149,106,0.35)] rounded-md" : ""}`}>
                            <textarea
                              rows={3}
                              placeholder="What skin or hair concerns would you like to address?"
                              style={{
                                borderBottomColor: focusedInput === "msg" ? GOLD : "rgba(44,24,16,0.2)",
                                ...B
                              }}
                              className="w-full border-b bg-transparent pb-2 pt-1 text-sm text-[#2C1810] placeholder:text-[#5C4A42]/40 focus:outline-none transition-colors resize-none"
                              onFocus={() => setFocusedInput("msg")}
                              onBlur={() => setFocusedInput(null)}
                              required
                            />
                          </div>
                        </div>

                        <motion.button
                          type="submit"
                          style={B}
                          whileHover={{ scale: 1.02, backgroundColor: GOLD, color: "#FAF7F2", boxShadow: "0 0 20px rgba(201,149,106,0.5)" }}
                          whileTap={{ scale: 0.98 }}
                          className="mt-2 group flex items-center justify-between px-6 py-3.5 bg-[#FAF7F2] text-[#160A05] text-[10px] font-semibold tracking-[0.22em] uppercase transition-all duration-300 shadow-md cursor-pointer rounded-xl border border-[#C9956A]/20"
                        >
                          Send My Inquiry
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <p className="text-[10px] text-[#5C4A42]/70 text-center" style={B}>
                          Dr. Ruxana personally reviews every request. 💛
                        </p>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="thanks"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center text-center py-10 min-h-[340px]"
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
                        <p className="text-xl text-[#2C1810] mb-3" style={{ ...D }}>
                          Thank you.
                        </p>
                        <p className="text-xs text-[#5C4A42] leading-loose max-w-[250px]" style={B}>
                          Dr. Ruxana will personally review your inquiry and be in touch within 24 hours. Your journey begins now.
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
