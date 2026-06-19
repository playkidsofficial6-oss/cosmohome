import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { D, M, B, EASE, DOCTORS } from "../lib/constants";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Calendar as CalendarIcon,
  Lock,
  Check,
  CheckCircle,
  User,
  MapPin,
  Phone,
  Clock,
  Stethoscope,
  Sparkles,
} from "lucide-react";

/* ─── doctor display names for the booking form ─── */
const BOOKING_DOCTORS = [
  { ...DOCTORS[0], shortSpec: "Aesthetics", experience: "15+ years exp." },
  {
    name: "Dr. Neha",
    spec: "Dermatology",
    shortSpec: "Dermatology",
    experience: "12+ years exp.",
    img: DOCTORS[1].img,
    role: "Dermatologist",
    creds: "",
    alt: "",
    highlight: false,
  },
  {
    name: "Dr. Arjun",
    spec: "Trichology",
    shortSpec: "Trichology",
    experience: "10+ years exp.",
    img: DOCTORS[3].img,
    role: "Trichologist",
    creds: "",
    alt: "",
    highlight: false,
  },
];

const TIME_SLOTS = {
  morning: ["09:00 AM", "10:00 AM", "11:00 AM", "11:30 AM", "12:30 PM"],
  afternoon: [
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ],
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1615022702095-ff2c036f3360?w=800&q=80&fit=crop";

/* ─── helpers ─── */
function formatDate(d: Date | undefined) {
  if (!d) return "-";
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatDateShort(d: Date | undefined) {
  if (!d) return "-";
  return d.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* ─── Simple Calendar Component (matching the design) ─── */
function SimpleCalendar({
  selected,
  onSelect,
}: {
  selected: Date | undefined;
  onSelect: (d: Date) => void;
}) {
  const [viewMonth, setViewMonth] = useState(
    selected ? selected.getMonth() : new Date().getMonth()
  );
  const [viewYear, setViewYear] = useState(
    selected ? selected.getFullYear() : new Date().getFullYear()
  );

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay(); // 0=Sun

  // For desktop: MON first. For mobile: SUN first.
  // We'll detect via a prop or just render both layouts.
  // The design shows MON first on desktop, SUN first on mobile.
  // We'll handle this by rendering the same component with different day-start.

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  // Desktop: Mon=0, Mobile: Sun=0
  const desktopDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const mobileDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Calculate offset for Monday-start
  const mondayOffset = (firstDayOfWeek + 6) % 7; // Mon=0
  const sundayOffset = firstDayOfWeek; // Sun=0

  const renderGrid = (offset: number, _isMobile: boolean) => {
    type Cell = { day: number; type: "prev" | "current" | "next" };
    const cells: Cell[] = [];
    const prevMonthDays = new Date(viewYear, viewMonth, 0).getDate();
    for (let i = 0; i < offset; i++) {
      cells.push({ day: prevMonthDays - offset + 1 + i, type: "prev" });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({ day: d, type: "current" });
    }
    const remaining = 7 - (cells.length % 7);
    if (remaining < 7) {
      for (let i = 1; i <= remaining; i++) {
        cells.push({ day: i, type: "next" });
      }
    }

    return cells.map((cell, idx) => {
      if (cell.type !== "current") {
        return (
          <div
            key={`empty-${idx}`}
            className="flex items-center justify-center h-10 text-sm text-[#C4B4A8]"
            style={B}
          >
            {cell.day}
          </div>
        );
      }

      const day = cell.day;

      const cellDate = new Date(viewYear, viewMonth, day);
      const isSelected =
        selected &&
        selected.getDate() === day &&
        selected.getMonth() === viewMonth &&
        selected.getFullYear() === viewYear;
      const isToday =
        today.getDate() === day &&
        today.getMonth() === viewMonth &&
        today.getFullYear() === viewYear;
      const isPast = cellDate < today;

      return (
        <button
          key={`day-${day}`}
          onClick={() => !isPast && onSelect(new Date(viewYear, viewMonth, day))}
          disabled={isPast}
          className={`flex items-center justify-center h-10 w-10 mx-auto rounded-full text-sm transition-all duration-200
            ${
              isSelected
                ? "bg-[#986E4F] text-white font-medium"
                : isToday
                ? "text-[#986E4F] font-bold"
                : isPast
                ? "text-[#C4B4A8] cursor-not-allowed"
                : "text-[#2C1810] hover:bg-[#E5D5C5]/50"
            }`}
          style={B}
        >
          {day}
        </button>
      );
    });
  };

  return (
    <div className="w-full">
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="p-1 text-[#5C4A42] hover:text-[#2C1810] transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-lg text-[#2C1810]" style={D}>
          {monthNames[viewMonth]} {viewYear}
        </span>
        <button
          onClick={nextMonth}
          className="p-1 text-[#5C4A42] hover:text-[#2C1810] transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Desktop Calendar (MON first) */}
      <div className="hidden md:block">
        <div className="grid grid-cols-7 mb-2">
          {desktopDays.map((d) => (
            <div
              key={d}
              className="text-center text-xs text-[#986E4F] tracking-wider py-2"
              style={B}
            >
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {renderGrid(mondayOffset, false)}
        </div>
      </div>

      {/* Mobile Calendar (SUN first) */}
      <div className="md:hidden">
        <div className="grid grid-cols-7 mb-2">
          {mobileDays.map((d) => (
            <div
              key={d}
              className="text-center text-xs text-[#986E4F] tracking-wider py-2"
              style={B}
            >
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {renderGrid(sundayOffset, true)}
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile Step Indicator ─── */
function MobileStepIndicator({ current, total = 4 }: { current: number; total?: number }) {
  return (
    <div className="flex items-center justify-center gap-0 py-4">
      {Array.from({ length: total }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
              step <= current
                ? "bg-[#986E4F] text-white"
                : "bg-transparent border border-[#C4B4A8] text-[#C4B4A8]"
            }`}
            style={B}
          >
            {step}
          </div>
          {step < total && (
            <div
              className={`w-10 h-px ${
                step < current ? "bg-[#986E4F]" : "bg-[#C4B4A8]"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Desktop Stepper (vertical sidebar) ─── */
const DESKTOP_STEPS = [
  { id: 1, label: "SELECT DOCTOR" },
  { id: 2, label: "CHOOSE DATE & TIME" },
  { id: 3, label: "YOUR DETAILS" },
  { id: 4, label: "CONFIRM APPOINTMENT" },
];

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════ */
export default function BookConsultation() {
  const navigate = useNavigate();

  /* ── shared state ── */
  const [selectedDoctor, setSelectedDoctor] = useState(BOOKING_DOCTORS[0]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    treatment: "",
    branch: "Cosmo Home, Kochi",
    notes: "",
  });

  /* ── dropdown open state ── */
  const [branchOpen, setBranchOpen] = useState(false);
  const [treatmentOpen, setTreatmentOpen] = useState(false);

  /* ── mobile step wizard ── */
  const [mobileStep, setMobileStep] = useState(1); // 1-6

  /* ── desktop active step (scroll-tracked) ── */
  const [desktopActive, setDesktopActive] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const ids = [1, 2, 3, 4];
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(`desktop-step-${ids[i]}`);
        if (el && el.offsetTop <= scrollPos) {
          setDesktopActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileNext = () => setMobileStep((s) => Math.min(s + 1, 6));
  const mobileBack = () => {
    if (mobileStep === 1) {
      navigate(-1);
    } else {
      setMobileStep((s) => Math.max(s - 1, 1));
    }
  };

  const handleInput = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  /* ════════════ MOBILE LAYOUT ════════════ */
  const renderMobile = () => {
    return (
      <div className="md:hidden min-h-screen bg-[#FAF7F2] flex flex-col pt-20">
        {/* Step indicator — only for steps 1-4 */}
        {mobileStep <= 4 && (
          <div className="px-6">
            <MobileStepIndicator current={mobileStep} total={4} />
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={mobileStep}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="flex-1 flex flex-col"
          >
            {/* ── STEP 1: Select Doctor ── */}
            {mobileStep === 1 && (
              <div className="flex-1 px-6 pb-6">
                <h1
                  className="text-3xl text-[#2C1810] mt-4 mb-1 leading-tight"
                  style={D}
                >
                  Book your <br />
                  <span className="italic text-[#C9956A]">appointment</span>
                </h1>
                <p className="text-sm text-[#5C4A42] mb-6 leading-relaxed" style={B}>
                  Choose your preferred doctor to get started.
                </p>

                <p
                  className="text-xs tracking-[0.15em] uppercase text-[#2C1810] mb-4"
                  style={B}
                >
                  SELECT DOCTOR
                </p>

                <div className="flex flex-col gap-3">
                  {BOOKING_DOCTORS.map((doc) => {
                    const isSelected = selectedDoctor.name === doc.name;
                    return (
                      <button
                        key={doc.name}
                        onClick={() => setSelectedDoctor(doc)}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left ${
                          isSelected
                            ? "border-[#986E4F] bg-white shadow-sm"
                            : "border-[#E5D5C5]/60 bg-white/50"
                        }`}
                      >
                        <img
                          src={doc.img}
                          alt={doc.name}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <p className="text-[#2C1810] text-base" style={D}>
                            {doc.name}
                          </p>
                          <p
                            className="text-[#C9956A] italic text-sm"
                            style={D}
                          >
                            {doc.shortSpec}
                          </p>
                          <p className="text-[#5C4A42] text-xs mt-0.5" style={B}>
                            {doc.experience}
                          </p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                            isSelected
                              ? "border-[#986E4F] bg-[#986E4F]"
                              : "border-[#C4B4A8]"
                          }`}
                        >
                          {isSelected && <Check size={12} className="text-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── STEP 2: Choose Date & Time ── */}
            {mobileStep === 2 && (
              <div className="flex-1 px-6 pb-6">
                <h1
                  className="text-3xl text-[#2C1810] mt-4 mb-1 leading-tight"
                  style={D}
                >
                  Choose <span className="italic text-[#C9956A]">date</span>
                </h1>
                <p className="text-sm text-[#5C4A42] mb-6 leading-relaxed" style={B}>
                  Select a date and available time slot.
                </p>

                <div className="bg-white rounded-xl p-4 border border-[#E5D5C5]/50 shadow-sm mb-6">
                  <SimpleCalendar
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                  />
                </div>

                {selectedDate && (
                  <>
                    <p className="text-sm text-[#2C1810] mb-4" style={D}>
                      {formatDateShort(selectedDate)}
                    </p>

                    <p
                      className="text-xs tracking-[0.12em] uppercase text-[#5C4A42] mb-3"
                      style={B}
                    >
                      MORNING
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {TIME_SLOTS.morning.map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`py-2 px-4 rounded-lg text-xs transition-all border ${
                            selectedTime === t
                              ? "bg-[#986E4F] text-white border-[#986E4F]"
                              : "border-[#E5D5C5] text-[#5C4A42] hover:border-[#986E4F]"
                          }`}
                          style={B}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    <p
                      className="text-xs tracking-[0.12em] uppercase text-[#5C4A42] mb-3"
                      style={B}
                    >
                      AFTERNOON
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {TIME_SLOTS.afternoon.map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`py-2 px-4 rounded-lg text-xs transition-all border ${
                            selectedTime === t
                              ? "bg-[#986E4F] text-white border-[#986E4F]"
                              : "border-[#E5D5C5] text-[#5C4A42] hover:border-[#986E4F]"
                          }`}
                          style={B}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* ── STEP 3: Your Details ── */}
            {mobileStep === 3 && (
              <div className="flex-1 px-6 pb-6">
                <h1
                  className="text-3xl text-[#2C1810] mt-4 mb-1 leading-tight"
                  style={D}
                >
                  Your <span className="italic text-[#C9956A]">details</span>
                </h1>
                <p className="text-sm text-[#5C4A42] mb-6 leading-relaxed" style={B}>
                  Please provide your details to proceed.
                </p>

                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#2C1810]" style={B}>
                      Full name
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInput("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      className="px-4 py-3 border border-[#E5D5C5] rounded-lg text-sm focus:outline-none focus:border-[#986E4F] bg-white"
                      style={B}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#2C1810]" style={B}>
                      Phone number
                    </label>
                    <div className="flex">
                      <div className="flex items-center gap-1 px-3 py-3 border border-[#E5D5C5] border-r-0 rounded-l-lg bg-white text-sm">
                        <span>🇮🇳</span>
                        <span className="text-[#5C4A42]" style={B}>
                          +91
                        </span>
                      </div>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInput("phone", e.target.value)}
                        placeholder="Enter your number"
                        className="flex-1 px-4 py-3 border border-[#E5D5C5] rounded-r-lg text-sm focus:outline-none focus:border-[#986E4F] bg-white"
                        style={B}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#2C1810]" style={B}>
                      Email address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInput("email", e.target.value)}
                      placeholder="Enter your email"
                      className="px-4 py-3 border border-[#E5D5C5] rounded-lg text-sm focus:outline-none focus:border-[#986E4F] bg-white"
                      style={B}
                    />
                  </div>

                  {/* Treatment / Concern custom dropdown */}
                  <div className="flex flex-col gap-1.5 relative">
                    <label className="text-xs text-[#2C1810]" style={B}>Treatment / Concern</label>
                    <button
                      type="button"
                      onClick={() => { setTreatmentOpen(!treatmentOpen); setBranchOpen(false); }}
                      className="w-full px-4 py-3 border rounded-lg text-sm text-left flex items-center justify-between gap-2 focus:outline-none transition-colors bg-white"
                      style={{ borderColor: treatmentOpen ? "#986E4F" : "#E5D5C5", color: formData.treatment ? "#2C1810" : "#5C4A42", ...B }}
                    >
                      <span>{formData.treatment || "Select your concern"}</span>
                      <motion.svg animate={{ rotate: treatmentOpen ? 180 : 0 }} transition={{ duration: 0.25 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9956A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <polyline points="6 9 12 15 18 9" />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {treatmentOpen && (
                        <motion.ul
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-[#2C1810]/10 overflow-hidden z-50"
                        >
                          {["Acne Scar Treatment", "Skin Renewal", "Pigmentation", "Anti-Aging", "Hair Loss", "Other"].map((opt) => (
                            <li
                              key={opt}
                              onClick={() => { handleInput("treatment", opt); setTreatmentOpen(false); }}
                              className={`px-5 py-3 text-sm cursor-pointer transition-all duration-200 flex items-center gap-3 ${formData.treatment === opt ? "bg-[#C9956A]/10 text-[#C9956A]" : "text-[#2C1810] hover:bg-[#FAF7F2] hover:text-[#C9956A]"}`}
                              style={B}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${formData.treatment === opt ? "bg-[#C9956A]" : "bg-[#2C1810]/15"}`} />
                              {opt}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Preferred branch custom dropdown */}
                  <div className="flex flex-col gap-1.5 relative">
                    <label className="text-xs text-[#2C1810]" style={B}>Preferred branch</label>
                    <button
                      type="button"
                      onClick={() => { setBranchOpen(!branchOpen); setTreatmentOpen(false); }}
                      className="w-full px-4 py-3 border rounded-lg text-sm text-left flex items-center justify-between gap-2 focus:outline-none transition-colors bg-white"
                      style={{ borderColor: branchOpen ? "#986E4F" : "#E5D5C5", color: "#2C1810", ...B }}
                    >
                      <span>{formData.branch || "Select branch"}</span>
                      <motion.svg animate={{ rotate: branchOpen ? 180 : 0 }} transition={{ duration: 0.25 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9956A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <polyline points="6 9 12 15 18 9" />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {branchOpen && (
                        <motion.ul
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-[#2C1810]/10 overflow-hidden z-50"
                        >
                          {["Cosmo Home, Kochi"].map((opt) => (
                            <li
                              key={opt}
                              onClick={() => { handleInput("branch", opt); setBranchOpen(false); }}
                              className={`px-5 py-3 text-sm cursor-pointer transition-all duration-200 flex items-center gap-3 ${formData.branch === opt ? "bg-[#C9956A]/10 text-[#C9956A]" : "text-[#2C1810] hover:bg-[#FAF7F2] hover:text-[#C9956A]"}`}
                              style={B}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${formData.branch === opt ? "bg-[#C9956A]" : "bg-[#2C1810]/15"}`} />
                              {opt}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#2C1810]" style={B}>
                      Notes (optional)
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => handleInput("notes", e.target.value)}
                      placeholder="Add any notes..."
                      rows={3}
                      className="px-4 py-3 border border-[#E5D5C5] rounded-lg text-sm focus:outline-none focus:border-[#986E4F] bg-white resize-none"
                      style={B}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 4: Appointment Summary ── */}
            {mobileStep === 4 && (
              <div className="flex-1 px-6 pb-6">
                <h1
                  className="text-3xl text-[#2C1810] mt-4 mb-1 leading-tight"
                  style={D}
                >
                  Appointment <br />
                  <span className="italic text-[#C9956A]">summary</span>
                </h1>
                <p className="text-sm text-[#5C4A42] mb-8 leading-relaxed" style={B}>
                  Please review your appointment details before confirming.
                </p>

                <div className="flex flex-col gap-4">
                  {[
                    {
                      icon: <User size={16} className="text-[#986E4F]" />,
                      label: "Doctor",
                      value: selectedDoctor.name,
                      sub: selectedDoctor.shortSpec,
                    },
                    {
                      icon: <CalendarIcon size={16} className="text-[#986E4F]" />,
                      label: "Date",
                      value: formatDate(selectedDate),
                    },
                    {
                      icon: <Clock size={16} className="text-[#986E4F]" />,
                      label: "Time",
                      value: selectedTime,
                    },
                    {
                      icon: <Stethoscope size={16} className="text-[#986E4F]" />,
                      label: "Treatment",
                      value: formData.treatment || "Not selected",
                    },
                    {
                      icon: <MapPin size={16} className="text-[#986E4F]" />,
                      label: "Branch",
                      value: formData.branch,
                    },
                    {
                      icon: <Phone size={16} className="text-[#986E4F]" />,
                      label: "Phone",
                      value: formData.phone
                        ? `+91 ${formData.phone}`
                        : "Not provided",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 py-3 border-b border-[#E5D5C5]/40 last:border-0"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#F3EDE4] flex items-center justify-center shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-[#986E4F] mb-0.5" style={B}>
                          {item.label}
                        </p>
                        <p className="text-[#2C1810] text-sm" style={D}>
                          {item.value}
                        </p>
                        {item.sub && (
                          <p
                            className="text-[#C9956A] italic text-xs"
                            style={D}
                          >
                            {item.sub}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[#5C4A42] text-xs mt-8" style={B}>
                  <div className="w-8 h-8 rounded-full bg-[#F3EDE4] flex items-center justify-center">
                    <Lock size={14} className="text-[#986E4F]" />
                  </div>
                  <span>Your information is secure and confidential.</span>
                </div>
              </div>
            )}

            {/* ── STEP 5: Confirmation ── */}
            {mobileStep === 5 && (
              <div className="flex-1 px-6 pb-6 flex flex-col items-center text-center">
                <div className="mt-8 mb-6 relative">
                  <Sparkles
                    size={14}
                    className="text-[#C9956A] absolute -top-2 -left-4"
                  />
                  <div className="w-20 h-20 rounded-full bg-[#F3EDE4] flex items-center justify-center">
                    <CheckCircle size={40} className="text-[#986E4F]" />
                  </div>
                  <Sparkles
                    size={14}
                    className="text-[#C9956A] absolute -bottom-1 -right-4"
                  />
                </div>

                <h1 className="text-3xl text-[#2C1810] mb-2" style={D}>
                  Appointment <br />
                  <span className="italic text-[#C9956A]">confirmed!</span>
                </h1>
                <p
                  className="text-sm text-[#5C4A42] mb-8 leading-relaxed max-w-xs"
                  style={B}
                >
                  We've sent the details to your phone and email.
                </p>

                <div className="w-full bg-white rounded-xl border border-[#E5D5C5]/50 p-5 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <User size={16} className="text-[#986E4F]" />
                    <div>
                      <p className="text-[#2C1810] text-sm" style={D}>
                        {selectedDoctor.name}
                      </p>
                      <p className="text-[#C9956A] italic text-xs" style={D}>
                        {selectedDoctor.shortSpec}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <CalendarIcon size={16} className="text-[#986E4F]" />
                    <p className="text-[#2C1810] text-sm" style={B}>
                      {formatDate(selectedDate)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock size={16} className="text-[#986E4F]" />
                    <p className="text-[#2C1810] text-sm" style={B}>
                      {selectedTime}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-[#986E4F]" />
                    <p className="text-[#2C1810] text-sm" style={B}>
                      {formData.branch}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 6: My Appointments ── */}
            {mobileStep === 6 && (
              <div className="flex-1 px-6 pb-6">
                <h1
                  className="text-2xl text-[#2C1810] mt-4 mb-6 text-center"
                  style={D}
                >
                  My appointments
                </h1>

                {/* Tabs */}
                <div className="flex border-b border-[#E5D5C5] mb-6">
                  <button
                    className="flex-1 py-3 text-sm text-[#2C1810] border-b-2 border-[#986E4F]"
                    style={B}
                  >
                    Upcoming
                  </button>
                  <button
                    className="flex-1 py-3 text-sm text-[#C4B4A8]"
                    style={B}
                  >
                    Past
                  </button>
                </div>

                {/* Appointment Card */}
                <div className="bg-white rounded-xl border border-[#E5D5C5]/50 p-4 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#F3EDE4] rounded-lg px-3 py-2 text-center shrink-0">
                      <p
                        className="text-xs text-[#986E4F] uppercase"
                        style={B}
                      >
                        {selectedDate
                          ? selectedDate.toLocaleDateString("en-GB", {
                              month: "short",
                            })
                          : "JUN"}
                      </p>
                      <p className="text-lg text-[#2C1810]" style={D}>
                        {selectedDate ? selectedDate.getDate() : "12"}
                      </p>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <img
                          src={selectedDoctor.img}
                          alt={selectedDoctor.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-[#2C1810] text-sm" style={D}>
                            {selectedDoctor.name}
                          </p>
                          <p
                            className="text-[#C9956A] italic text-xs"
                            style={D}
                          >
                            {selectedDoctor.shortSpec}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-[#5C4A42] mt-2" style={B}>
                        {selectedTime}
                      </p>
                      <p className="text-xs text-[#5C4A42]" style={B}>
                        {formData.branch}
                      </p>
                    </div>
                    <ChevronRight size={18} className="text-[#C4B4A8] mt-2" />
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#E5D5C5]/40">
                    <span
                      className="text-xs text-[#27ae60] bg-[#27ae60]/10 px-3 py-1 rounded-full"
                      style={B}
                    >
                      Confirmed
                    </span>
                  </div>
                </div>

                {/* Book new */}
                <button
                  onClick={() => {
                    setMobileStep(1);
                    setSelectedDoctor(BOOKING_DOCTORS[0]);
                    setSelectedTime("10:00 AM");
                    setFormData({
                      fullName: "",
                      phone: "",
                      email: "",
                      treatment: "",
                      branch: "Cosmo Home, Kochi",
                      notes: "",
                    });
                  }}
                  className="w-full mt-4 py-4 border border-[#E5D5C5] rounded-xl text-sm text-[#986E4F] flex items-center justify-center gap-2 hover:bg-white transition-colors"
                  style={B}
                >
                  <span className="text-lg">+</span> Book new appointment
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Mobile Bottom Button ── */}
        <div className="px-6 pb-8 pt-4 bg-[#FAF7F2]">
          {mobileStep <= 3 && (
            <button
              onClick={mobileNext}
              className="w-full bg-[#986E4F] text-white py-4 rounded-xl text-sm tracking-[0.12em] uppercase flex items-center justify-center gap-2 hover:bg-[#8A6346] transition-colors"
              style={B}
            >
              CONTINUE <ArrowRight size={16} />
            </button>
          )}
          {mobileStep === 4 && (
            <button
              onClick={mobileNext}
              className="w-full bg-[#986E4F] text-white py-4 rounded-xl text-sm tracking-[0.12em] uppercase flex items-center justify-center gap-2 hover:bg-[#8A6346] transition-colors"
              style={B}
            >
              CONFIRM APPOINTMENT
            </button>
          )}
          {mobileStep === 5 && (
            <div className="flex flex-col gap-3">
              <button
                onClick={mobileNext}
                className="w-full bg-[#986E4F] text-white py-4 rounded-xl text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2 hover:bg-[#8A6346] transition-colors"
                style={B}
              >
                VIEW APPOINTMENTS
              </button>
              <button
                onClick={() => navigate("/")}
                className="w-full py-3 text-sm text-[#5C4A42] tracking-[0.1em] uppercase"
                style={B}
              >
                GO TO HOME
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  /* ════════════ DESKTOP LAYOUT ════════════ */
  const renderDesktop = () => {
    return (
      <div className="hidden md:block bg-[#FAF7F2] min-h-screen pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex gap-16 relative">
          {/* ── Left Column (Sticky Sidebar) ── */}
          <div className="w-[300px] shrink-0">
            <div className="sticky top-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                {/* Brand */}
                <div className="mb-10">
                  <p
                    className="text-lg tracking-[0.1em] uppercase text-[#2C1810]"
                    style={D}
                  >
                    Cosmo Home
                  </p>
                  <p
                    className="text-[8px] tracking-[0.3em] uppercase text-[#C9956A] mt-0.5"
                    style={M}
                  >
                    SKIN · HAIR · BODY
                  </p>
                </div>

                {/* Title */}
                <h1
                  className="text-4xl lg:text-[44px] text-[#2C1810] mb-4 leading-[1.15]"
                  style={D}
                >
                  Book your
                  <br />
                  <span className="italic text-[#C9956A]">appointment</span>
                </h1>
                <p
                  className="text-sm text-[#5C4A42] leading-relaxed mb-12 max-w-[240px]"
                  style={B}
                >
                  Personalised care,
                  <br />
                  just for you.
                  <br />
                  Choose your preferred
                  <br />
                  doctor, date and time.
                </p>

                {/* Vertical Stepper */}
                <div className="flex flex-col gap-7 relative mb-12">
                  <div className="absolute left-[15px] top-4 bottom-4 w-px bg-[#E5D5C5]" />
                  {DESKTOP_STEPS.map((step) => {
                    const isActive = desktopActive >= step.id;
                    return (
                      <div
                        key={step.id}
                        className="flex items-center gap-5 relative z-10"
                      >
                        <div
                          className={`w-[32px] h-[32px] rounded-full flex items-center justify-center text-xs shrink-0 transition-colors duration-300 ${
                            isActive
                              ? "bg-[#986E4F] text-white"
                              : "bg-[#FAF7F2] border border-[#E5D5C5] text-[#986E4F]"
                          }`}
                          style={B}
                        >
                          {step.id}
                        </div>
                        <span
                          className={`text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                            desktopActive === step.id
                              ? "text-[#2C1810]"
                              : "text-[#986E4F]"
                          }`}
                          style={B}
                        >
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Hero Image */}
                <div className="w-full max-w-[240px] rounded-t-[120px] overflow-hidden aspect-[3/4]">
                  <img
                    src={HERO_IMAGE}
                    alt="Cosmo Home"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── Right Column (Scrollable Content) ── */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="flex flex-col gap-12 pb-20"
            >
              {/* ─ Section 1: Select Doctor ─ */}
              <section id="desktop-step-1" className="scroll-mt-32">
                <div className="flex items-center justify-between mb-5">
                  <h2
                    className="text-sm tracking-[0.15em] uppercase text-[#2C1810]"
                    style={B}
                  >
                    1. SELECT YOUR DOCTOR
                  </h2>
                  <button
                    className="text-xs tracking-[0.1em] text-[#986E4F] flex items-center gap-1 hover:text-[#2C1810] transition-colors"
                    style={B}
                  >
                    View all doctors <ArrowRight size={14} />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {BOOKING_DOCTORS.map((doc) => {
                    const isSelected = selectedDoctor.name === doc.name;
                    return (
                      <button
                        key={doc.name}
                        onClick={() => setSelectedDoctor(doc)}
                        className={`text-left p-5 rounded-xl border-2 transition-all duration-300 relative bg-white ${
                          isSelected
                            ? "border-[#986E4F]"
                            : "border-[#E5D5C5]/60 hover:border-[#986E4F]/40"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#986E4F] text-white flex items-center justify-center">
                            <Check size={14} />
                          </div>
                        )}
                        <div className="flex items-center gap-4">
                          <img
                            src={doc.img}
                            alt={doc.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-[#2C1810] text-base" style={D}>
                              {doc.name}
                            </p>
                            <p
                              className="text-[#C9956A] italic text-sm"
                              style={D}
                            >
                              {doc.shortSpec}
                            </p>
                            <p
                              className="text-[#5C4A42] text-xs mt-0.5"
                              style={B}
                            >
                              {doc.experience}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* ─ Section 2: Choose Date & Time ─ */}
              <section id="desktop-step-2" className="scroll-mt-32">
                <h2
                  className="text-sm tracking-[0.15em] uppercase text-[#2C1810] mb-5"
                  style={B}
                >
                  2. CHOOSE DATE &amp; TIME
                </h2>

                <div className="grid grid-cols-2 gap-5">
                  {/* Calendar */}
                  <div className="bg-white rounded-xl p-6 border border-[#E5D5C5]/50 shadow-sm">
                    <SimpleCalendar
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                    />
                  </div>

                  {/* Time Slots */}
                  <div className="bg-white rounded-xl p-6 border border-[#E5D5C5]/50 shadow-sm">
                    {selectedDate && (
                      <p
                        className="text-xs tracking-[0.12em] uppercase text-[#2C1810] mb-6"
                        style={B}
                      >
                        {selectedDate
                          .toLocaleDateString("en-GB", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                          .toUpperCase()}
                      </p>
                    )}

                    {/* Morning */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-base">☀️</span>
                        <span className="text-sm text-[#2C1810]" style={D}>
                          Morning
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {TIME_SLOTS.morning.map((t) => (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`py-2.5 px-5 rounded-lg text-sm transition-all border ${
                              selectedTime === t
                                ? "bg-[#986E4F] text-white border-[#986E4F]"
                                : "border-[#E5D5C5] text-[#5C4A42] hover:border-[#986E4F]"
                            }`}
                            style={B}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Afternoon */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-base">🌤️</span>
                        <span className="text-sm text-[#2C1810]" style={D}>
                          Afternoon
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {TIME_SLOTS.afternoon.map((t) => (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`py-2.5 px-5 rounded-lg text-sm transition-all border ${
                              selectedTime === t
                                ? "bg-[#986E4F] text-white border-[#986E4F]"
                                : "border-[#E5D5C5] text-[#5C4A42] hover:border-[#986E4F]"
                            }`}
                            style={B}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ─ Section 3: Your Details ─ */}
              <section id="desktop-step-3" className="scroll-mt-32">
                <h2
                  className="text-sm tracking-[0.15em] uppercase text-[#2C1810] mb-5"
                  style={B}
                >
                  3. YOUR DETAILS
                </h2>

                <div className="bg-white rounded-xl p-8 border border-[#E5D5C5]/50 shadow-sm">
                  <div className="grid grid-cols-3 gap-x-6 gap-y-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#2C1810]" style={B}>
                        Full name
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInput("fullName", e.target.value)
                        }
                        placeholder="Enter your full name"
                        className="px-4 py-3 border border-[#E5D5C5] rounded-lg text-sm focus:outline-none focus:border-[#986E4F] bg-transparent"
                        style={B}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#2C1810]" style={B}>
                        Phone number
                      </label>
                      <div className="flex">
                        <div className="flex items-center gap-1 px-3 py-3 border border-[#E5D5C5] border-r-0 rounded-l-lg bg-transparent text-sm shrink-0">
                          <span>🇮🇳</span>
                          <span className="text-xs text-[#5C4A42]" style={B}>
                            +91
                          </span>
                          <ChevronRight
                            size={10}
                            className="text-[#C4B4A8] rotate-90"
                          />
                        </div>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInput("phone", e.target.value)
                          }
                          placeholder="Enter your number"
                          className="flex-1 px-4 py-3 border border-[#E5D5C5] rounded-r-lg text-sm focus:outline-none focus:border-[#986E4F] bg-transparent w-full"
                          style={B}
                        />
                      </div>
                    </div>

                    {/* Preferred branch – custom animated dropdown */}
                    <div className="flex flex-col gap-1.5 relative">
                      <label className="text-xs text-[#2C1810]" style={B}>Preferred branch</label>
                      <button
                        type="button"
                        onClick={() => { setBranchOpen(!branchOpen); setTreatmentOpen(false); }}
                        className="w-full px-4 py-3 border rounded-lg text-sm text-left flex items-center justify-between gap-2 focus:outline-none transition-colors bg-transparent"
                        style={{ borderColor: branchOpen ? "#986E4F" : "#E5D5C5", color: "#2C1810", ...B }}
                      >
                        <span>{formData.branch || "Select branch"}</span>
                        <motion.svg animate={{ rotate: branchOpen ? 180 : 0 }} transition={{ duration: 0.25 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9956A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                          <polyline points="6 9 12 15 18 9" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {branchOpen && (
                          <motion.ul
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-[#2C1810]/10 overflow-hidden z-50"
                          >
                            {["Cosmo Home, Kochi"].map((opt) => (
                              <li
                                key={opt}
                                onClick={() => { handleInput("branch", opt); setBranchOpen(false); }}
                                className={`px-5 py-3 text-sm cursor-pointer transition-all duration-200 flex items-center gap-3 ${formData.branch === opt ? "bg-[#C9956A]/10 text-[#C9956A]" : "text-[#2C1810] hover:bg-[#FAF7F2] hover:text-[#C9956A]"}`}
                                style={B}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${formData.branch === opt ? "bg-[#C9956A]" : "bg-[#2C1810]/15"}`} />
                                {opt}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#2C1810]" style={B}>
                        Email address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInput("email", e.target.value)
                        }
                        placeholder="Enter your email"
                        className="px-4 py-3 border border-[#E5D5C5] rounded-lg text-sm focus:outline-none focus:border-[#986E4F] bg-transparent"
                        style={B}
                      />
                    </div>

                    {/* Concern / Treatment – custom animated dropdown */}
                    <div className="flex flex-col gap-1.5 relative">
                      <label className="text-xs text-[#2C1810]" style={B}>Concern / Treatment</label>
                      <button
                        type="button"
                        onClick={() => { setTreatmentOpen(!treatmentOpen); setBranchOpen(false); }}
                        className="w-full px-4 py-3 border rounded-lg text-sm text-left flex items-center justify-between gap-2 focus:outline-none transition-colors bg-transparent"
                        style={{ borderColor: treatmentOpen ? "#986E4F" : "#E5D5C5", color: formData.treatment ? "#2C1810" : "#5C4A42", ...B }}
                      >
                        <span>{formData.treatment || "Select your concern"}</span>
                        <motion.svg animate={{ rotate: treatmentOpen ? 180 : 0 }} transition={{ duration: 0.25 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9956A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                          <polyline points="6 9 12 15 18 9" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {treatmentOpen && (
                          <motion.ul
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-[#2C1810]/10 overflow-hidden z-50"
                          >
                            {["Acne Scar Treatment", "Skin Renewal", "Pigmentation", "Anti-Aging", "Hair Loss", "Other"].map((opt) => (
                              <li
                                key={opt}
                                onClick={() => { handleInput("treatment", opt); setTreatmentOpen(false); }}
                                className={`px-5 py-3 text-sm cursor-pointer transition-all duration-200 flex items-center gap-3 ${formData.treatment === opt ? "bg-[#C9956A]/10 text-[#C9956A]" : "text-[#2C1810] hover:bg-[#FAF7F2] hover:text-[#C9956A]"}`}
                                style={B}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${formData.treatment === opt ? "bg-[#C9956A]" : "bg-[#2C1810]/15"}`} />
                                {opt}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#2C1810]" style={B}>
                        Notes (optional)
                      </label>
                      <input
                        type="text"
                        value={formData.notes}
                        onChange={(e) =>
                          handleInput("notes", e.target.value)
                        }
                        placeholder="Add any notes..."
                        className="px-4 py-3 border border-[#E5D5C5] rounded-lg text-sm focus:outline-none focus:border-[#986E4F] bg-transparent"
                        style={B}
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* ─ Section 4: Appointment Summary ─ */}
              <section id="desktop-step-4" className="scroll-mt-32">
                <div className="bg-[#F3EDE4] rounded-xl p-6 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#986E4F] shrink-0">
                    <CalendarIcon size={22} />
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-xs tracking-[0.15em] uppercase text-[#986E4F] mb-3"
                      style={B}
                    >
                      APPOINTMENT SUMMARY
                    </p>
                    <div className="flex items-center gap-6">
                      <div>
                        <p
                          className="text-[10px] uppercase tracking-wider text-[#5C4A42] mb-0.5"
                          style={B}
                        >
                          Doctor
                        </p>
                        <p className="text-[#2C1810] text-sm" style={D}>
                          {selectedDoctor.name}
                        </p>
                      </div>
                      <div className="w-px h-8 bg-[#D5C5B5]" />
                      <div>
                        <p
                          className="text-[10px] uppercase tracking-wider text-[#5C4A42] mb-0.5"
                          style={B}
                        >
                          Date
                        </p>
                        <p className="text-[#2C1810] text-sm" style={D}>
                          {formatDate(selectedDate)}
                        </p>
                      </div>
                      <div className="w-px h-8 bg-[#D5C5B5]" />
                      <div>
                        <p
                          className="text-[10px] uppercase tracking-wider text-[#5C4A42] mb-0.5"
                          style={B}
                        >
                          Time
                        </p>
                        <p className="text-[#2C1810] text-sm" style={D}>
                          {selectedTime}
                        </p>
                      </div>
                      <div className="w-px h-8 bg-[#D5C5B5]" />
                      <div>
                        <p
                          className="text-[10px] uppercase tracking-wider text-[#5C4A42] mb-0.5"
                          style={B}
                        >
                          Branch
                        </p>
                        <p className="text-[#2C1810] text-sm" style={D}>
                          {formData.branch}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ─ Actions ─ */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center gap-2 text-sm text-[#5C4A42] hover:text-[#2C1810] transition-colors"
                  style={B}
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <button
                  className="bg-[#986E4F] text-white px-10 py-4 rounded-full text-xs tracking-[0.15em] uppercase hover:bg-[#8A6346] transition-colors flex items-center gap-2 shadow-lg shadow-[#986E4F]/20"
                  style={B}
                >
                  CONFIRM APPOINTMENT <ArrowRight size={16} />
                </button>
              </div>

              <div
                className="flex items-center justify-center gap-2 text-[#5C4A42] text-xs"
                style={B}
              >
                <Lock size={12} /> Your information is secure and confidential.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {renderMobile()}
      {renderDesktop()}
    </>
  );
}
