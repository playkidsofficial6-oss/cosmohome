import { motion } from "motion/react";
import { FadeUp } from "../ui/shared";
import { D, M, B } from "../../lib/constants";

const OTHER_DOCTORS = [
  {
    name: "Dr. Anas Abdulla",
    role: "Cosmetic Dermatologist",
    spec: "DERMATOLOGY &\nVENEREOLOGY",
    img: "/doctor/dr1.png",
  },
  {
    name: "Dr. Mohammed Navas M",
    role: "Cosmetic Dermatologist",
    spec: "DERMATOLOGY &\nVENEREOLOGY",
    img: "/doctor/dr2.png",
  },
  {
    name: "Dr. Marjan\nAbdul Nazar",
    role: "Cosmetic Dermatologist",
    spec: "DERMATOLOGY &\nVENEREOLOGY",
    img: "/doctor/dr3.png",
  },
];

export function TeamSection() {
  return (
    <section 
      className="relative w-full min-h-screen pt-20 pb-10 px-6 md:px-16 lg:px-24 flex items-center justify-center overflow-hidden bg-[#FAF7F2] md:bg-[url('/doctor/bg.jpeg')] bg-cover bg-center"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-0">
        
        {/* LEFT TEXT CONTENT */}
        <div className="flex flex-col justify-center pt-10 lg:pt-20 z-20">
          <FadeUp>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9956A] mb-4 font-bold" style={M}>
              Meet the team behind the standard 👨‍⚕️
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-[5rem] text-[#2C1810] leading-[1.0] mb-8" style={D}>
              Every doctor,<br /><em>board-qualified.</em>
            </h2>
            <p className="text-sm md:text-base text-[#2C1810]/80 leading-loose max-w-sm" style={B}>
              These are the faces behind the credentials.<br/>
              Every member of our clinical team holds<br/>
              postgraduate specialist qualifications —<br/>
              not weekend certifications.
            </p>
          </FadeUp>
        </div>

        {/* RIGHT RUXANA IMAGE */}
        <div className="relative flex justify-center lg:justify-end items-end h-[450px] lg:h-[650px] mt-10 lg:mt-0 z-10">
          <motion.img 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            src="/doctor/ruxana.png" 
            alt="Dr. Ruxana" 
            className="h-full w-auto object-contain object-bottom relative z-10"
          />
          
          {/* Label Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute bottom-16 sm:bottom-24 -right-4 sm:right-0 lg:-right-12 z-20 flex flex-col items-end drop-shadow-2xl"
          >
             <div className="bg-[#9c6f58] px-4 py-1.5 rounded-t-xl mr-4 sm:mr-8 shadow-inner">
               <p className="text-[9px] tracking-widest text-[#FAF7F2] uppercase font-bold" style={M}>Founder & Medical Director</p>
             </div>
             <div className="bg-[#FAF7F2] px-8 py-5 rounded-2xl rounded-tr-none text-center shadow-xl border border-[#FAF7F2]/80 backdrop-blur-sm">
               <p className="text-3xl text-[#2C1810] mb-1" style={D}>Dr. Ruxana</p>
               <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9956A] font-bold" style={M}>Aesthetic Medicine</p>
             </div>
          </motion.div>
        </div>

        {/* BOTTOM DOCTORS ROW */}
        <div className="lg:col-span-2 -mt-10 lg:-mt-16 z-30 relative">
          <FadeUp delay={0.4}>
            <div className="bg-[#FAF7F2]/95 backdrop-blur-md rounded-[24px] p-6 shadow-2xl border border-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
              {OTHER_DOCTORS.map((doc, i) => (
                <div key={i} className="flex flex-row items-center gap-4 w-full relative group">
                  {i !== 0 && <div className="absolute left-[-12px] top-[15%] bottom-[15%] w-[1px] bg-[#2C1810]/10 hidden md:block transition-all group-hover:bg-[#C9956A]/40" />}
                  <div className="w-24 h-28 md:w-32 md:h-36 shrink-0 flex items-end justify-center relative overflow-hidden rounded-xl">
                     <img src={doc.img} alt={doc.name} className="w-full h-full object-contain object-bottom drop-shadow-sm transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col justify-center text-left py-2">
                    <p className="text-sm md:text-base font-semibold text-[#2C1810] mb-1 whitespace-pre-wrap" style={D}>{doc.name}</p>
                    <p className="text-[10px] text-[#2C1810]/70 mb-2 font-medium" style={B}>{doc.role}</p>
                    <p className="text-[9px] tracking-[0.1em] text-[#C9956A] uppercase leading-relaxed whitespace-pre-wrap font-bold" style={M}>{doc.spec}</p>
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
