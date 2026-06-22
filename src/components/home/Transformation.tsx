import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { D, M, B, EASE } from "../../lib/constants";
import { FadeUp, Tag } from "../ui/shared";

export function Transformation() {
  return (
    <section className="py-6 md:py-12 bg-[#FAF7F2]">
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between md:justify-start items-start md:items-end mb-10 gap-8 px-4 sm:px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <FadeUp>
            <Tag>Chapter 04 — Transformation</Tag>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#2C1810] mt-4" style={D}>
              The art of<br /><em>becoming.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="border-l border-[#2C1810]/15 pl-6 md:pl-8 py-1 hidden lg:block">
              <p className="text-[#2C1810]/80 text-base leading-relaxed" style={B}>
                Real stories.<br />
                Real people.<br />
                Real confidence.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* The Grid Container with white gaps */}
        <div className="p-2 md:p-0 flex flex-col gap-2 md:gap-1 w-full shadow-sm">
          {/* Top Row: Sofia */}
          <FadeUp delay={0.2} className="w-full">
            <div className="flex flex-col md:flex-row w-full gap-2 md:gap-0">
              {/* Image */}
              <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] overflow-hidden bg-[#E8DDD1]">
                <motion.img
                  src="/transformation/1.webp"
                  alt="Sofia"
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: EASE }}
                />
              </div>
              {/* Text */}
              <div className="w-full md:w-1/2 bg-[#FAF7F2] flex flex-col justify-center p-6 md:p-10 lg:p-12">
                <p className="text-[11px] tracking-[0.25em] uppercase text-[#C9956A] mb-4 font-medium" style={M}>Featured Story</p>
                <h3 className="text-3xl md:text-4xl text-[#2C1810] mb-6" style={D}>Sofia, 38</h3>
                <p className="text-[#2C1810]/80 text-base md:text-base leading-relaxed mb-10 max-w-lg" style={{ ...D, fontStyle: "italic" }}>
                  "After two children and a decade of putting myself last, I forgot what it felt like to look in the mirror and feel proud. Dr. Ruxana gave me that back — quietly, naturally."
                </p>
                <a href="#stories" className="group inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#C9956A] font-medium transition-opacity hover:opacity-80 mt-auto md:mt-0" style={M}>
                  Read Sofia's Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Bottom Row: Amara & Elena */}
          <div className="flex flex-col lg:flex-row w-full gap-2 md:gap-1">

            {/* Amara */}
            <FadeUp delay={0.3} className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row h-full gap-2 md:gap-0">
                <div className="relative w-full sm:w-1/2 aspect-square lg:aspect-[5/4] xl:aspect-[4/3] overflow-hidden bg-[#E8DDD1]">
                  <motion.img
                    src="/transformation/2.webp"
                    alt="Amara"
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: EASE }}
                  />
                </div>
                <div className="w-full sm:w-1/2 bg-[#FAF7F2] flex flex-col justify-center p-5 md:p-6 lg:p-8">
                  <p className="text-[11px] tracking-[0.25em] uppercase text-[#C9956A] mb-3 flex items-center gap-2 font-medium" style={M}>
                    Story 🌿
                  </p>
                  <h3 className="text-2xl text-[#2C1810] mb-4" style={D}>Amara, 45</h3>
                  <p className="text-[#2C1810]/80 text-base leading-relaxed mb-6" style={{ ...D, fontStyle: "italic" }}>
                    "People kept asking if I had been on holiday. That was all I wanted — to look rested, not treated. Dr. Ruxana understood that without me having to explain it twice."
                  </p>
                  <a href="#stories" className="group mt-auto inline-flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase text-[#C9956A] font-medium transition-opacity hover:opacity-80" style={M}>
                    Read Amara's Story <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Elena */}
            <FadeUp delay={0.4} className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row h-full gap-2 md:gap-0">
                <div className="relative w-full sm:w-1/2 aspect-square lg:aspect-[5/4] xl:aspect-[4/3] overflow-hidden bg-[#E8DDD1]">
                  <motion.img
                    src="/transformation/3.webp"
                    alt="Elena"
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: EASE }}
                  />
                </div>
                <div className="w-full sm:w-1/2 bg-[#FAF7F2] flex flex-col justify-center p-5 md:p-6 lg:p-8">
                  <p className="text-[11px] tracking-[0.25em] uppercase text-[#C9956A] mb-3 flex items-center gap-2 font-medium" style={M}>
                    Story 🦋
                  </p>
                  <h3 className="text-2xl text-[#2C1810] mb-4" style={D}>Elena, 31</h3>
                  <p className="text-[#2C1810]/80 text-base leading-relaxed mb-6" style={{ ...D, fontStyle: "italic" }}>
                    "Starting a business changes you. I needed to feel as capable on the outside as I felt within. COSMO HOME did not change me — it aligned how I look with who I have become."
                  </p>
                  <a href="#stories" className="group mt-auto inline-flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase text-[#C9956A] font-medium transition-opacity hover:opacity-80" style={M}>
                    Read Elena's Story <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>

        {/* Footer text */}
        <FadeUp delay={0.5}>
          <div className="mt-6 flex justify-center px-4 sm:px-6 md:px-16 lg:px-24">
            <p className="text-[11px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-[#C9956A] font-medium" style={M}>3,800+ Transformations and Counting</p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
