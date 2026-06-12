import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";
import {
  ArrowRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Home,
  MessageCircle,
  ClipboardList,
  Sparkles,
  Heart,
  Award,
} from "lucide-react";

/* ─── font shortcuts ─── */
const display = { fontFamily: "'Bodoni Moda', serif" };
const mono    = { fontFamily: "'DM Mono', monospace" };
const body    = { fontFamily: "'Jost', sans-serif" };

/* ─── ease curves ─── */
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;

/* ─── grain SVG (reused) ─── */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/* ══════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════ */

/** Fade + rise on scroll enter */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 52 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Splits a string into letter spans, each animating in */
function SplitReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%", opacity: 0 }}
          animate={inView ? { y: "0%", opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: delay + i * stagger, ease: EASE_OUT }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

/** Horizontal slide-in rule */
function GoldRule({ delay = 0 }: { delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 1.1, delay, ease: EASE_OUT }}
      className="origin-left h-px w-16 bg-[#C9956A] my-6"
    />
  );
}

/* ══════════════════════════════════════════════
   PRELOADER
══════════════════════════════════════════════ */
function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 3000);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#2C1810] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 1.1, ease: EASE_IN_OUT } }}
    >
      {/* Radial glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.25, scale: 1.4 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, #C9956A 0%, transparent 70%)" }}
      />

      <motion.p
        initial={{ opacity: 0, y: 20, letterSpacing: "0.6em" }}
        animate={{ opacity: 1, y: 0, letterSpacing: "0.35em" }}
        transition={{ duration: 1.4, ease: EASE_OUT }}
        className="relative text-[#FAF7F2] text-2xl md:text-3xl tracking-[0.35em] uppercase z-10"
        style={display}
      >
        Cosmo Home
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: EASE_OUT }}
        className="relative mt-8 h-px w-40 bg-[#C9956A] origin-left z-10"
      />

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative mt-5 text-[9px] tracking-[0.45em] uppercase text-[#C9956A] z-10"
        style={mono}
      >
        Beauty Feels At Home
      </motion.p>

      {/* Corner lines */}
      {[
        "top-8 left-8 border-t border-l",
        "top-8 right-8 border-t border-r",
        "bottom-8 left-8 border-b border-l",
        "bottom-8 right-8 border-b border-r",
      ].map((cls, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
          className={`absolute w-10 h-10 border-[#C9956A] ${cls}`}
        />
      ))}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   NAV
══════════════════════════════════════════════ */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Philosophy", "Dr. Ruxana", "Experiences", "Stories"];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.2, ease: EASE_OUT }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[rgba(44,24,16,0.08)]"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between py-5">
          <a href="#" className="flex flex-col leading-none">
            <span className="text-lg md:text-xl tracking-[0.12em] uppercase text-[#2C1810]" style={display}>
              Cosmo Home
            </span>
            <span className="text-[8px] tracking-[0.3em] uppercase text-[#C9956A] mt-0.5" style={mono}>
              Aesthetic Medicine
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\.\s*/g, "").replace(/\s/g, "-")}`}
                className="relative text-[13px] text-[#8C7B72] hover:text-[#2C1810] transition-colors tracking-wider font-light group"
                style={body}
              >
                {l}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#C9956A] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <a
            href="#invitation"
            className="hidden md:inline-flex text-[11px] tracking-[0.2em] uppercase px-6 py-3 border border-[#2C1810] text-[#2C1810] hover:bg-[#2C1810] hover:text-[#FAF7F2] transition-all duration-400"
            style={body}
          >
            Begin Your Journey
          </a>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-[#2C1810]">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: EASE_IN_OUT }}
            className="fixed inset-0 z-40 bg-[#FAF7F2] flex flex-col items-center justify-center gap-10"
          >
            <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-[#2C1810]">
              <X size={22} />
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase().replace(/\.\s*/g, "").replace(/\s/g, "-")}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08, ease: EASE_OUT }}
                className="text-3xl text-[#2C1810] tracking-wide hover:text-[#C9956A] transition-colors"
                style={display}
                onClick={() => setOpen(false)}
              >
                {l}
              </motion.a>
            ))}
            <motion.a
              href="#invitation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-4 text-[11px] tracking-[0.3em] uppercase text-[#C9956A]"
              style={mono}
              onClick={() => setOpen(false)}
            >
              Begin Your Journey →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ══════════════════════════════════════════════
   CHAPTER 1 — HERO
══════════════════════════════════════════════ */
function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#2C1810] flex flex-col">
      {/* Grain */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: GRAIN, backgroundRepeat: "repeat", backgroundSize: "180px" }}
      />

      {/* Parallax image */}
      <motion.div className="absolute inset-0 z-0 will-change-transform" style={{ y: imgY }}>
        <img
          src="https://images.unsplash.com/photo-1636153279424-cb5d1e00f5a2?w=1600&h=2000&fit=crop&auto=format&crop=faces"
          alt="The spirit of COSMO HOME"
          className="w-full h-full object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/85 via-[#2C1810]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/70 via-transparent to-[#2C1810]/25" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-end pb-16 md:pb-24 pt-32 px-6 md:px-16 lg:px-24 min-h-screen max-w-7xl mx-auto w-full will-change-transform"
        style={{ y: textY }}
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="text-[#C9956A] text-[10px] tracking-[0.45em] uppercase mb-8"
          style={mono}
        >
          Est. London · Aesthetic Medicine
        </motion.p>

        {/* Big headline — per-word reveal */}
        <h1 className="text-[#FAF7F2] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] mb-8 max-w-2xl" style={display}>
          <div className="overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 3.6, ease: EASE_OUT }}
            >
              Beauty
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.em
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 3.75, ease: EASE_OUT }}
            >
              Feels
            </motion.em>
          </div>
          <div className="overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 3.9, ease: EASE_OUT }}
            >
              At Home.
            </motion.span>
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 4.1 }}
          className="text-[#FAF7F2]/70 text-base md:text-lg font-light max-w-md leading-relaxed mb-12"
          style={body}
        >
          Expert-led aesthetic medicine designed around confidence, care, and your most natural beauty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.3 }}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          <motion.a
            href="#invitation"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C9956A] text-[#FAF7F2] text-[11px] tracking-[0.22em] uppercase"
            style={body}
          >
            Begin Your Journey
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <a
            href="#philosophy"
            className="inline-flex items-center gap-2 text-[#FAF7F2]/50 text-[11px] tracking-[0.22em] uppercase hover:text-[#FAF7F2] transition-colors py-4"
            style={body}
          >
            Discover Our Story
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.6 }}
          className="mt-20 pt-8 border-t border-[#FAF7F2]/15 flex flex-col sm:flex-row gap-8 sm:gap-16"
        >
          {[
            { n: "12+", l: "Years of Care" },
            { n: "3,800+", l: "Transformations" },
            { n: "One", l: "Expert. Dr. Ruxana." },
          ].map(({ n, l }, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.7 + i * 0.12, duration: 0.6 }}
            >
              <p className="text-[#C9956A] text-2xl md:text-3xl" style={display}>{n}</p>
              <p className="text-[#FAF7F2]/45 text-[9px] tracking-widest mt-1 uppercase" style={mono}>{l}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CHAPTER 2 — PHILOSOPHY
══════════════════════════════════════════════ */
function Philosophy() {
  return (
    <section id="philosophy" className="py-28 md:py-40 px-6 md:px-16 lg:px-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="mb-4">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9956A]" style={mono}>
            Chapter 02 — The Philosophy
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start mt-12">
          <div>
            <FadeUp>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#2C1810]" style={display}>
                We do not change
                <br />
                <em>faces.</em>
              </h2>
            </FadeUp>
            <GoldRule delay={0.2} />
            <FadeUp delay={0.15}>
              <p className="text-lg font-light text-[#2C1810] leading-relaxed" style={body}>
                We help you become the most radiant, confident version of yourself.
              </p>
            </FadeUp>

            {/* Floating quote block with parallax */}
            <FadeUp delay={0.3}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="mt-12 p-8 bg-[#2C1810] relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: GRAIN, backgroundSize: "180px" }}
                />
                <p className="relative text-xl text-[#FAF7F2] leading-snug" style={{ ...display, fontStyle: "italic" }}>
                  "We do not change faces. We help people become the best version of themselves."
                </p>
                <p className="relative mt-4 text-[9px] tracking-[0.3em] uppercase text-[#C9956A]" style={mono}>
                  — Dr. Ruxana, Founder
                </p>
              </motion.div>
            </FadeUp>
          </div>

          <div className="flex flex-col gap-10 lg:pt-6">
            {[
              { n: "I", title: "Beauty should feel personal", body: "No two faces are alike. No two journeys are alike. COSMO HOME was built on the belief that aesthetic medicine must begin with listening — truly listening — before it begins with treating." },
              { n: "II", title: "Expertise is an act of care", body: "The most beautiful outcomes come not from the newest technology, but from the deepest understanding of anatomy, proportion, and the subtlety of natural ageing." },
              { n: "III", title: "You deserve to feel at home here", body: "Most clinics are transactional. We built COSMO HOME to be the opposite — a place where you feel safe, heard, and genuinely cared for. Not a number. A person." },
            ].map((item, i) => (
              <FadeUp key={item.n} delay={0.1 + i * 0.12}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="flex gap-6 group"
                >
                  <motion.span
                    className="text-xs text-[#C9956A] mt-1 shrink-0 w-4 transition-transform group-hover:scale-125"
                    style={mono}
                  >
                    {item.n}
                  </motion.span>
                  <div>
                    <h3 className="text-lg text-[#2C1810] mb-2" style={{ ...display, fontStyle: "italic" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm font-light text-[#8C7B72] leading-relaxed" style={body}>
                      {item.body}
                    </p>
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

/* ══════════════════════════════════════════════
   CHAPTER 3 — DR. RUXANA
══════════════════════════════════════════════ */
function DrRuxana() {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="dr-ruxana" className="bg-[#F3EDE4] py-28 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <FadeUp>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9956A] mb-4" style={mono}>
            Chapter 03 — The Story
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 mt-12 items-center">
          <FadeUp delay={0.1} className="relative order-2 lg:order-1">
            <div ref={imgRef} className="relative aspect-[3/4] overflow-hidden bg-[#EDE5D8]">
              <motion.img
                src="https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=900&h=1200&fit=crop&auto=format&crop=faces"
                alt="Dr. Ruxana"
                className="w-full h-full object-cover object-top"
                style={{ y: imgY, scale: 1.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/30 to-transparent" />
            </div>

            {/* Floating credential */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="absolute -bottom-6 -right-2 md:right-4 bg-[#2C1810] text-[#FAF7F2] px-6 py-5 max-w-[200px]"
            >
              <p className="text-[8px] tracking-[0.3em] uppercase text-[#C9956A] mb-2" style={mono}>
                Credentials
              </p>
              <p className="text-sm font-light leading-relaxed" style={body}>
                MBBS · MRCS<br />Dip. Aesthetic Med.<br />Fellow, BCAM
              </p>
            </motion.div>

            {/* Decorative corner frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#C9956A] pointer-events-none"
            />
          </FadeUp>

          <FadeUp delay={0.2} className="order-1 lg:order-2 lg:pt-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#2C1810] mb-8" style={display}>
              Meet Dr.<br /><em>Ruxana.</em>
            </h2>
            <p className="text-base font-light text-[#2C1810] leading-relaxed mb-6" style={body}>
              Dr. Ruxana did not enter aesthetic medicine to sell treatments. She entered it because she witnessed, again and again, how much a woman's confidence shapes her entire life.
            </p>
            <p className="text-sm font-light text-[#8C7B72] leading-relaxed mb-6" style={body}>
              She trained for over a decade in reconstructive and aesthetic medicine before founding COSMO HOME — not as a clinic, but as a philosophy. A belief that the most powerful aesthetic outcomes are gentle, natural, and deeply personal.
            </p>
            <p className="text-sm font-light text-[#8C7B72] leading-relaxed mb-10" style={body}>
              Every consultation with Dr. Ruxana begins not with a treatment menu, but with a conversation. What matters to you? What do you want to feel?
            </p>

            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-l-2 border-[#C9956A] pl-6 text-xl text-[#2C1810] leading-snug"
              style={{ ...display, fontStyle: "italic" }}
            >
              "I want every patient to leave feeling more like themselves — not different. More radiant. More free."
            </motion.blockquote>
            <p className="mt-4 text-[9px] text-[#C9956A] tracking-widest" style={mono}>— Dr. Ruxana</p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CHAPTER 4 — TRANSFORMATION
══════════════════════════════════════════════ */
function Transformation() {
  const stories = [
    { name: "Sofia, 38", tag: "Confidence Restored", story: '"After two children and a decade of putting myself last, I forgot what it felt like to look in the mirror and feel proud. Dr. Ruxana gave me that back — quietly, naturally."', img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop&auto=format" },
    { name: "Amara, 45", tag: "Natural Renewal", story: '"People kept asking if I had been on holiday. That was all I wanted — to look rested, not treated. Dr. Ruxana understood that without me having to explain it twice."', img: "https://images.unsplash.com/photo-1593351799227-75df2026356b?w=800&h=1000&fit=crop&auto=format" },
    { name: "Elena, 31", tag: "New Chapter", story: '"Starting a business changes you. I needed to feel as capable on the outside as I felt within. COSMO HOME did not change me — it aligned how I look with who I have become."', img: "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?w=800&h=1000&fit=crop&auto=format" },
  ];

  return (
    <section className="py-28 md:py-40 px-6 md:px-16 lg:px-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <FadeUp>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9956A] mb-4" style={mono}>Chapter 04 — Transformation</p>
            <h2 className="text-4xl md:text-5xl leading-[1.05] text-[#2C1810]" style={display}>
              The art of<br /><em>becoming.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-sm font-light text-[#8C7B72] max-w-sm leading-relaxed" style={body}>
              Not before and after photos. Real women, real feelings. The confidence that lives in the space between.
            </p>
          </FadeUp>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <FadeUp key={s.name} delay={i * 0.12}>
              <motion.div
                className="group flex flex-col h-full"
                whileHover="hover"
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-[#EDE5D8] mb-6">
                  <motion.img
                    src={s.img}
                    alt={`${s.name} transformation story`}
                    className="w-full h-full object-cover object-top"
                    variants={{ hover: { scale: 1.07 } }}
                    transition={{ duration: 0.7, ease: EASE_OUT }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/55 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <p className="text-[9px] tracking-[0.3em] uppercase text-[#C9956A] mb-1" style={mono}>{s.tag}</p>
                    <p className="text-[#FAF7F2] text-lg" style={display}>{s.name}</p>
                  </div>
                  {/* Reveal overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-[#C9956A]/10"
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-sm font-light text-[#8C7B72] leading-relaxed flex-1" style={{ ...display, fontStyle: "italic" }}>
                  {s.story}
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CHAPTER 5 — SIGNATURE EXPERIENCES
══════════════════════════════════════════════ */
function Experiences() {
  const [active, setActive] = useState(0);

  const exps = [
    { name: "Skin Renewal Experience", tagline: "Rediscover your glow", desc: "A deeply personalised skin journey combining medical-grade analysis, bespoke topical protocols, and precision regenerative treatments. Designed to restore luminosity and texture — naturally, gradually, lastingly.", duration: "From 3 sessions", suitedFor: "All skin types seeking radiance and clarity" },
    { name: "Age Gracefully Experience", tagline: "Confidence, not correction", desc: "A staged approach to natural facial rejuvenation. We work with the architecture of your face — not against it — using subtle volume restoration and refined contouring.", duration: "Ongoing, quarterly", suitedFor: "35–60 · anyone seeking natural longevity" },
    { name: "Confidence Restoration", tagline: "Return to yourself", desc: "For those at a turning point — post-pregnancy, post-illness, post-life-change — this experience is built around rebuilding the relationship between how you feel inside and how you present to the world.", duration: "Bespoke programme", suitedFor: "Women navigating significant life transitions" },
    { name: "Hair Revival Experience", tagline: "Strength from within", desc: "A clinical and holistic approach to hair thinning and scalp health. Combining advanced growth factor therapies with nutritional and hormonal assessment to address the root cause.", duration: "6-month programme", suitedFor: "Hair thinning at any age" },
    { name: "Personalised Aesthetic Journey", tagline: "Your vision. Our expertise.", desc: "For those who want a comprehensive, long-term relationship with aesthetic care. Dr. Ruxana designs a multi-year plan aligned with your goals, lifestyle, and evolving beauty.", duration: "Annual programme", suitedFor: "Anyone committed to the long view" },
  ];

  return (
    <section id="experiences" className="py-28 md:py-40 bg-[#2C1810]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <FadeUp>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9956A] mb-4" style={mono}>Chapter 05 — Signature Experiences</p>
          <h2 className="text-4xl md:text-5xl text-[#FAF7F2] leading-[1.05] mb-16" style={display}>
            Not treatments.<br /><em>Experiences.</em>
          </h2>
        </FadeUp>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-0 border-t border-[#FAF7F2]/10">
          <div className="flex flex-col border-b border-[#FAF7F2]/10 lg:border-b-0 lg:border-r lg:border-[#FAF7F2]/10">
            {exps.map((e, i) => (
              <motion.button
                key={e.name}
                onClick={() => setActive(i)}
                whileHover={{ x: 6 }}
                className={`text-left px-0 py-7 border-b border-[#FAF7F2]/10 transition-opacity duration-300 ${active === i ? "opacity-100" : "opacity-35 hover:opacity-60"}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg md:text-xl text-[#FAF7F2]" style={display}>{e.name}</p>
                    <p className="text-[10px] tracking-[0.2em] text-[#C9956A] mt-1 uppercase" style={mono}>{e.tagline}</p>
                  </div>
                  <motion.div animate={{ x: active === i ? 6 : 0 }} transition={{ type: "spring", stiffness: 300 }}>
                    <ArrowRight size={16} className="shrink-0 text-[#C9956A]" />
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="lg:pl-16 py-8 lg:py-0 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: EASE_OUT }}
              >
                <h3 className="text-3xl text-[#FAF7F2] mb-4" style={{ ...display, fontStyle: "italic" }}>{exps[active].name}</h3>
                <p className="text-sm font-light text-[#FAF7F2]/60 leading-relaxed mb-8" style={body}>{exps[active].desc}</p>
                <div className="flex flex-col gap-3">
                  {[{ label: "Duration", val: exps[active].duration }, { label: "Suited for", val: exps[active].suitedFor }].map(({ label, val }) => (
                    <div key={label} className="flex gap-4">
                      <span className="text-[9px] tracking-[0.3em] uppercase text-[#C9956A] w-24 shrink-0 pt-0.5" style={mono}>{label}</span>
                      <span className="text-sm text-[#FAF7F2]/65 font-light" style={body}>{val}</span>
                    </div>
                  ))}
                </div>
                <motion.a
                  href="#invitation"
                  whileHover={{ x: 4 }}
                  className="mt-10 inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#C9956A] hover:text-[#FAF7F2] transition-colors"
                  style={body}
                >
                  Enquire about this experience <ArrowRight size={11} />
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CHAPTER 6 — JOURNEY (ROADMAP)
══════════════════════════════════════════════ */

const JOURNEY_STEPS = [
  { Icon: Home,          phase: "Arrival",      n: "01", color: "#C9956A", desc: "From the moment you step through our door, you are welcomed — not checked in. Chamomile tea. A calm room. No rush. Just warmth." },
  { Icon: MessageCircle, phase: "Conversation", n: "02", color: "#B8806A", desc: "Your 60-minute consultation begins with you talking. Dr. Ruxana listens. She learns who you are before she considers what she might offer." },
  { Icon: ClipboardList, phase: "Your Plan",    n: "03", color: "#A86A5A", desc: "If an experience is right for you, Dr. Ruxana designs a bespoke plan — staged, thoughtful, honest about timelines. If nothing is right today, she will tell you that too." },
  { Icon: Sparkles,      phase: "Experience",   n: "04", color: "#C9956A", desc: "Procedures are performed in our private suite. Calm music. Warm lighting. Dr. Ruxana narrates each step so nothing is unexpected." },
  { Icon: Heart,         phase: "Aftercare",    n: "05", color: "#B8806A", desc: "You receive Dr. Ruxana's direct line. A personalised aftercare guide. A 48-hour check-in call. The relationship does not end when you leave." },
  { Icon: Award,         phase: "Your Results", n: "06", color: "#A86A5A", desc: "Results are documented through our clinical photography programme — to honour the journey you have taken and the confidence you have reclaimed." },
];

function JourneyStep({
  step,
  index,
  isAbove,
}: {
  step: typeof JOURNEY_STEPS[number];
  index: number;
  isAbove: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center text-center ${isAbove ? "flex-col-reverse" : "flex-col"}`}
      initial={{ opacity: 0, y: isAbove ? 30 : -30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: EASE_OUT }}
    >
      {/* Text card */}
      <motion.div
        className={`w-36 xl:w-40 ${isAbove ? "mt-6" : "mb-6"}`}
        whileHover={{ y: isAbove ? 4 : -4 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#C9956A] mb-1" style={mono}>{step.n}</p>
        <p className="text-sm text-[#FAF7F2] mb-2 leading-tight" style={{ ...display, fontStyle: "italic" }}>{step.phase}</p>
        <p className="text-[11px] font-light text-[#FAF7F2]/45 leading-relaxed" style={body}>{step.desc}</p>
      </motion.div>

      {/* Connector line to node */}
      <motion.div
        className="w-px bg-gradient-to-b from-[#C9956A]/50 to-[#C9956A]"
        style={{ height: 40 }}
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.12 + 0.25 }}
      />

      {/* Node */}
      <motion.div
        className="relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#C9956A] bg-[#2C1810] z-10 cursor-pointer"
        whileHover={{ scale: 1.18, borderColor: "#FAF7F2" }}
        transition={{ type: "spring", stiffness: 300 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        style={{ transitionDelay: `${index * 0.12 + 0.15}s` }}
      >
        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-[#C9956A]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
        />
        <step.Icon size={20} color="#C9956A" />
      </motion.div>
    </motion.div>
  );
}

function Journey() {
  const sectionRef = useRef(null);
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  /* Animated path draw */
  const pathSpring = useSpring(0, { stiffness: 40, damping: 20 });
  useEffect(() => {
    if (inView) pathSpring.set(1);
  }, [inView, pathSpring]);

  return (
    <section id="journey" ref={sectionRef} className="py-28 md:py-40 bg-[#1C0E08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <FadeUp>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9956A] mb-4" style={mono}>
            Chapter 06 — The COSMO HOME Journey
          </p>
        </FadeUp>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
          <FadeUp delay={0.05}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FAF7F2] leading-[1.0]" style={display}>
              Imagine yourself<br /><em>here.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-sm font-light text-[#FAF7F2]/45 max-w-xs leading-relaxed" style={body}>
              Six moments. One unbroken thread of care. Follow the path from your first breath at our door to the confidence you carry home.
            </p>
          </FadeUp>
        </div>

        {/* ── DESKTOP ROADMAP ── */}
        <div className="hidden lg:block relative">
          {/* SVG winding path behind nodes */}
          <svg
            className="absolute top-1/2 left-0 w-full pointer-events-none"
            height="120"
            style={{ transform: "translateY(-50%)" }}
            preserveAspectRatio="none"
            viewBox="0 0 1000 120"
          >
            <defs>
              <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9956A" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#C9956A" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#A86A5A" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {/* Wavy path that weaves up and down */}
            <motion.path
              ref={pathRef}
              d="M 0,60 C 80,10 120,110 200,60 C 280,10 320,110 400,60 C 480,10 520,110 600,60 C 680,10 720,110 800,60 C 880,10 920,110 1000,60"
              fill="none"
              stroke="url(#pathGrad)"
              strokeWidth="1.5"
              strokeDasharray="6 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2.2, ease: EASE_OUT, delay: 0.3 }}
            />
            {/* Glowing dot traveling along path */}
            <motion.circle
              r="4"
              fill="#C9956A"
              filter="url(#glow)"
              initial={{ offsetDistance: "0%" } as any}
              animate={inView ? ({ offsetDistance: "100%" } as any) : {}}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
              style={{
                offsetPath: "path('M 0,60 C 80,10 120,110 200,60 C 280,10 320,110 400,60 C 480,10 520,110 600,60 C 680,10 720,110 800,60 C 880,10 920,110 1000,60')",
              } as any}
            />
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
          </svg>

          {/* Steps row — alternating above/below the winding path */}
          <div className="relative grid grid-cols-6 gap-0 py-10">
            {JOURNEY_STEPS.map((step, i) => (
              <JourneyStep key={step.n} step={step} index={i} isAbove={i % 2 === 0} />
            ))}
          </div>
        </div>

        {/* ── MOBILE VERTICAL TIMELINE ── */}
        <div className="lg:hidden relative pl-8">
          {/* Vertical line */}
          <motion.div
            className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-[#C9956A]/20 via-[#C9956A]/60 to-[#C9956A]/20"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.8, ease: EASE_OUT, delay: 0.3 }}
            style={{ originY: 0 }}
          />

          <div className="flex flex-col gap-12">
            {JOURNEY_STEPS.map((step, i) => {
              const ref = useRef(null);
              const visible = useInView(ref, { once: true, margin: "-40px" });
              return (
                <motion.div
                  ref={ref}
                  key={step.n}
                  initial={{ opacity: 0, x: 20 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  className="relative flex gap-6 items-start"
                >
                  {/* Node on line */}
                  <motion.div
                    className="absolute -left-8 top-0 flex items-center justify-center w-11 h-11 rounded-full border border-[#C9956A] bg-[#1C0E08] shrink-0"
                    whileHover={{ scale: 1.15 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full border border-[#C9956A]"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                    />
                    <step.Icon size={18} color="#C9956A" />
                  </motion.div>

                  <div className="pt-1">
                    <p className="text-[9px] tracking-[0.3em] uppercase text-[#C9956A] mb-1" style={mono}>{step.n}</p>
                    <p className="text-lg text-[#FAF7F2] mb-2" style={{ ...display, fontStyle: "italic" }}>{step.phase}</p>
                    <p className="text-sm font-light text-[#FAF7F2]/50 leading-relaxed" style={body}>{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <FadeUp delay={0.4}>
          <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 border-t border-[#FAF7F2]/10">
            <p className="text-sm font-light text-[#FAF7F2]/45 text-center" style={body}>
              Every journey begins with a single conversation.
            </p>
            <motion.a
              href="#invitation"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9956A] text-[#FAF7F2] text-[11px] tracking-[0.22em] uppercase"
              style={body}
            >
              Begin Step One <ArrowRight size={13} />
            </motion.a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CHAPTER 7 — REAL STORIES
══════════════════════════════════════════════ */
function Stories() {
  const stories = [
    { author: "Isabelle W., 42", context: "Entrepreneur · Skin Renewal Experience", pull: "I had forgotten what my own confidence felt like.", story: "Two years running a company, two years of putting everything else first. When I finally walked through COSMO HOME's door, I did not want a procedure. I wanted to feel like myself again. Dr. Ruxana understood that completely. Six months in, my team keeps asking what I have changed. I tell them: my relationship with myself." },
    { author: "Nadia P., 35", context: "Creative Director · Age Gracefully Experience", pull: "She listened before she said a single word about treatment.", story: "I had been to two other clinics before COSMO HOME. Both had a menu ready before I had finished a sentence. Dr. Ruxana asked me what I was feeling. That changed everything. A year later, I look the way I feel on my best days. That is all I ever wanted." },
    { author: "Claudia M., 51", context: "Architect · Personalised Aesthetic Journey", pull: "Beauty should grow with you, not fight against you.", story: "Dr. Ruxana designed a two-year plan for me. Not to look younger — to look like myself at my best. It has been the most considered, thoughtful investment I have made in myself. I am more proud of how I look at 51 than I ever was at 35." },
  ];

  return (
    <section id="stories" className="py-28 md:py-40 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <FadeUp>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9956A] mb-4" style={mono}>Chapter 07 — Real Stories</p>
          <h2 className="text-4xl md:text-5xl text-[#2C1810] leading-[1.05] mb-16" style={display}>
            People remember<br /><em>stories.</em>
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-24">
          {stories.map((s, i) => (
            <FadeUp key={s.author} delay={0.1}>
              <motion.div
                className={`grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <motion.p
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-xl md:text-2xl text-[#2C1810] leading-snug mb-4"
                    style={{ ...display, fontStyle: "italic" }}
                  >
                    "{s.pull}"
                  </motion.p>
                  <div className="h-px w-12 bg-[#C9956A] mb-4" />
                  <p className="text-sm text-[#2C1810] font-medium" style={body}>{s.author}</p>
                  <p className="text-[10px] text-[#C9956A] mt-1 tracking-wide" style={mono}>{s.context}</p>
                </div>
                <div className={`border-l border-[rgba(44,24,16,0.12)] pl-10 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <p className="text-base font-light text-[#8C7B72] leading-relaxed" style={body}>{s.story}</p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CHAPTER 8 — INVITATION
══════════════════════════════════════════════ */
function Invitation() {
  const [sent, setSent] = useState(false);

  return (
    <section id="invitation" className="relative py-28 md:py-40 overflow-hidden bg-[#2C1810]">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />

      {/* Animated ambient orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9956A 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #A86A5A 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
          <FadeUp>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9956A] mb-6" style={mono}>Chapter 08 — The Invitation</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FAF7F2] leading-[1.05] mb-8" style={display}>
              Your journey<br /><em>begins here.</em>
            </h2>
            <p className="text-base font-light text-[#FAF7F2]/60 leading-relaxed mb-10 max-w-sm" style={body}>
              Book a private consultation with Dr. Ruxana and discover what truly personalised aesthetic care feels like. No pressure. No treatment menu. Just a conversation.
            </p>
            <div className="flex flex-col gap-4 mb-12">
              {[
                { label: "Phone", value: "+44 20 7946 0512" },
                { label: "Email", value: "hello@cosmohome.co.uk" },
                { label: "Address", value: "14 Harley Street, London W1G" },
                { label: "Hours", value: "Mon–Sat · 9am–7pm" },
              ].map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex gap-6"
                >
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#C9956A] w-16 shrink-0 pt-0.5" style={mono}>{label}</span>
                  <span className="text-sm font-light text-[#FAF7F2]/60" style={body}>{value}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-[10px] text-[#FAF7F2]/25 font-light" style={body}>
              Initial consultations: £150 · Redeemable against any experience
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="bg-[#FAF7F2] p-8 md:p-10 flex flex-col gap-6"
                >
                  <p className="text-xl text-[#2C1810] mb-2" style={{ ...display, fontStyle: "italic" }}>Begin your story.</p>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {["First name", "Last name"].map((label) => (
                      <div key={label} className="flex flex-col gap-2">
                        <label className="text-[9px] tracking-[0.3em] uppercase text-[#8C7B72]" style={mono}>{label}</label>
                        <input type="text" placeholder={label} className="border-b border-[rgba(44,24,16,0.2)] bg-transparent pb-2.5 text-sm font-light text-[#2C1810] placeholder:text-[#8C7B72]/40 focus:outline-none focus:border-[#C9956A] transition-colors" style={body} />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] tracking-[0.3em] uppercase text-[#8C7B72]" style={mono}>Email</label>
                    <input type="email" placeholder="your@email.com" className="border-b border-[rgba(44,24,16,0.2)] bg-transparent pb-2.5 text-sm font-light text-[#2C1810] placeholder:text-[#8C7B72]/40 focus:outline-none focus:border-[#C9956A] transition-colors" style={body} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] tracking-[0.3em] uppercase text-[#8C7B72]" style={mono}>Experience of interest</label>
                    <select className="border-b border-[rgba(44,24,16,0.2)] bg-transparent pb-2.5 text-sm font-light text-[#2C1810] focus:outline-none focus:border-[#C9956A] transition-colors appearance-none" style={body}>
                      <option value="">I am not sure yet</option>
                      <option>Skin Renewal Experience</option>
                      <option>Age Gracefully Experience</option>
                      <option>Confidence Restoration</option>
                      <option>Hair Revival Experience</option>
                      <option>Personalised Aesthetic Journey</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] tracking-[0.3em] uppercase text-[#8C7B72]" style={mono}>Tell us a little about yourself</label>
                    <textarea rows={3} placeholder="What matters most to you right now?" className="border-b border-[rgba(44,24,16,0.2)] bg-transparent pb-2.5 text-sm font-light text-[#2C1810] placeholder:text-[#8C7B72]/40 focus:outline-none focus:border-[#C9956A] transition-colors resize-none" style={body} />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, backgroundColor: "#C9956A" }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 group flex items-center justify-between px-8 py-4 bg-[#2C1810] text-[#FAF7F2] text-[11px] tracking-[0.25em] uppercase transition-colors duration-300"
                    style={body}
                  >
                    Send My Request
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <p className="text-[10px] text-[#8C7B72] text-center" style={body}>Dr. Ruxana personally reviews every request.</p>
                </motion.form>
              ) : (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#FAF7F2] p-8 md:p-16 flex flex-col items-center justify-center text-center min-h-[400px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-16 h-16 rounded-full border-2 border-[#C9956A] flex items-center justify-center mb-8"
                  >
                    <Heart size={24} color="#C9956A" />
                  </motion.div>
                  <p className="text-2xl text-[#2C1810] mb-4" style={{ ...display, fontStyle: "italic" }}>Thank you.</p>
                  <p className="text-sm font-light text-[#8C7B72] leading-relaxed" style={body}>
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

/* ══════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-[#160A05] text-[#FAF7F2] py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[2fr_1fr_1fr] gap-12 mb-12 pb-12 border-b border-[#FAF7F2]/8">
          <div>
            <p className="text-xl tracking-[0.1em]" style={display}>Cosmo Home</p>
            <p className="text-[8px] tracking-[0.35em] uppercase text-[#C9956A] mt-1 mb-6" style={mono}>Aesthetic Medicine</p>
            <p className="text-sm font-light text-[#FAF7F2]/35 leading-relaxed max-w-xs" style={body}>
              A luxury destination where beauty, confidence, expertise, and care come together.
            </p>
            <div className="flex gap-5 mt-8">
              {[Instagram, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: "#C9956A" }}
                  className="text-[#FAF7F2]/35 transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
          {[
            { heading: "Experiences", links: ["Skin Renewal", "Age Gracefully", "Confidence Restoration", "Hair Revival", "Personalised Journey"] },
            { heading: "COSMO HOME", links: ["Our Philosophy", "Dr. Ruxana", "Real Stories", "The Journey", "Begin Your Story"] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#C9956A] mb-6" style={mono}>{heading}</p>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l}>
                    <motion.a href="#" whileHover={{ x: 4, color: "#FAF7F2" }} className="text-sm font-light text-[#FAF7F2]/35 transition-colors block" style={body}>{l}</motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-[10px] text-[#FAF7F2]/20" style={body}>© 2024 COSMO HOME Ltd. All rights reserved.</p>
          <p className="text-[10px] text-[#FAF7F2]/20" style={body}>Privacy · Terms · Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════
   APP
══════════════════════════════════════════════ */
export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={body} className="bg-background">
      <AnimatePresence>{!loaded && <Preloader onComplete={() => setLoaded(true)} />}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <Nav />
        <Hero />
        <Philosophy />
        <DrRuxana />
        <Transformation />
        <Experiences />
        <Journey />
        <Stories />
        <Invitation />
        <Footer />
      </motion.div>
    </div>
  );
}
