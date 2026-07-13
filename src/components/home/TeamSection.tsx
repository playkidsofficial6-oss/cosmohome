import { motion } from "motion/react";
import { FadeUp } from "../ui/shared";
import { D, M, B } from "../../lib/constants";

const OTHER_DOCTORS = [
  {
    name: "Dr. Marjan Abdul Nazeer",
    role: "Cosmetic Dermatologist",
    spec: "MBBS, MD, DVL, DNB",
    img: "/doctor/dr3.webp",
  },
  {
    name: "Dr. Anas P Abdullah",
    role: "Cosmetic Dermatologist",
    spec: "MBBS, MD(D&V), DNB",
    img: "/doctor/dr1.webp",
  },
  {
    name: "Dr. Shifa M",
    role: "Cosmetic Dermatologist",
    spec: "MBBS, MD, DVL",
    img: "/doctor/dr2.webp",
  },

  {
    name: "Dr. Ridha Padiyath",
    role: "Cosmetic Dermatologist",
    spec: "MBBS, MD, DVL",
    img: "/doctor/dr4.webp",
  },
];

export function TeamSection() {
  return (
    <section
      className="relative w-full pt-12 pb-16 md:pt-12 md:pb-16 px-6 md:px-16 lg:px-24 overflow-hidden bg-[#F8EFE6]"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-0">

        {/* LEFT TEXT CONTENT */}
        <div className="flex flex-col justify-center pt-0 lg:pt-20 z-20">
          <FadeUp>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9956A] mb-4 font-bold" style={M}>
              Meet the team behind the standard 👨‍⚕️
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-[5rem] text-[#2C1810] leading-[1.0] mb-8" style={D}>
              Every doctor,<br />board-qualified.
            </h2>
            <p className="text-base md:text-base text-[#2C1810]/80 leading-loose max-w-sm" style={B}>
              These are the faces behind the credentials.<br />
              Every member of our clinical team holds<br />
              postgraduate specialist qualifications —<br />
              not weekend certifications.
            </p>
          </FadeUp>
        </div>

        {/* RIGHT RUXANA IMAGE */}
        <div className="relative flex justify-center items-end h-[380px] lg:h-[520px] mt-10 lg:mt-0 z-10">

          {/* Inner unified container for Dr Ruxana elements */}
          <div className="relative h-full w-[300px] sm:w-[380px] lg:w-[460px] flex justify-center items-end">

            {/* Arch Background Shape */}
            <div className="absolute bottom-0 left-0 w-full h-[360px] sm:h-[450px] lg:h-[520px] bg-[#EBE0D3] rounded-t-[300px] z-0" />

            <motion.img
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              src="/doctor/ruxana.webp"
              alt="Dr. Ruxana"
              className="h-[95%] w-auto object-contain object-bottom relative z-10 drop-shadow-xl"
            />

            {/* Label Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-0 -right-2 sm:-right-6 lg:-right-8 z-20 flex flex-col items-end drop-shadow-2xl translate-y-[1px]"
            >
              <div className="bg-[#9c6f58] px-5 py-1.5 rounded-t-xl self-end shadow-inner relative right-[-1px]">
                <p className="text-[9px] tracking-widest text-[#FAF7F2] uppercase font-bold" style={M}>Founder & Medical Director</p>
              </div>
              <div className="bg-[#FAF7F2] px-8 py-5 rounded-tl-2xl rounded-tr-none rounded-b-none text-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-x border-[#FAF7F2]/80 backdrop-blur-sm relative z-20 w-[260px] sm:w-[280px]">
                <p className="text-3xl text-[#2C1810] mb-1" style={D}>Dr. Ruxana</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9956A] font-bold" style={M}>Aesthetic Medicine</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM DOCTORS ROW */}
        <div className="lg:col-span-2 mt-0 z-30 relative">
          <FadeUp delay={0.4}>
            <div className="bg-[#FAF7F2]/95 backdrop-blur-md rounded-[24px] rounded-tr-none p-4 sm:p-6 lg:p-8 shadow-2xl border border-white flex flex-col md:flex-row items-start md:items-stretch justify-between gap-6 md:gap-4 overflow-hidden relative z-10">
              {OTHER_DOCTORS.map((doc, i) => (
                <div key={i} className="flex flex-row md:flex-col xl:flex-row items-center md:items-start xl:items-center gap-4 w-full relative group">
                  {i !== 0 && <div className="absolute left-[-12px] md:left-[-8px] xl:left-[-12px] top-[10%] bottom-[10%] w-[1px] bg-[#2C1810]/10 hidden md:block transition-all group-hover:bg-[#C9956A]/40" />}
                  <div className="w-28 h-36 sm:w-32 sm:h-40 md:w-full md:h-44 lg:h-52 xl:w-32 xl:h-40 shrink-0 flex items-end justify-center relative overflow-hidden rounded-xl">
                    <img src={doc.img} alt={doc.name} className="w-full h-full object-contain object-bottom drop-shadow-sm transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center text-left py-2 md:py-0 xl:py-2 md:w-full md:mt-2 xl:mt-0">
                    <p className="text-sm md:text-base font-semibold text-[#2C1810] mb-1" style={D}>{doc.name}</p>
                    <p className="text-[10px] text-[#2C1810]/70 mb-2 font-medium" style={B}>{doc.role}</p>
                    <p className="text-[9px] tracking-[0.1em] xl:tracking-[0.15em] text-[#C9956A] uppercase leading-relaxed whitespace-pre-wrap font-bold" style={M}>{doc.spec}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}
