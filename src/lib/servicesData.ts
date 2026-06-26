export interface ServiceData {
  id: string;
  title: string;
  titleEmphasized: string;
  experienceNo: string;
  description: string;
  heroRating: string;
  heroImage: string;
  stats: Array<{ n: string; l: string }>;

  // Section 2: What is this
  whatIsThisTitle: string;
  whatIsThisEmphasized: string;
  whatIsThisDesc1: string;
  whatIsThisDesc2: string;
  benefits: Array<{ icon: string; b: string; d: string }>;
  clinicalNote: string;
  sideImage: string;

  // Section 3: Machine / Technology
  machineTitle: string;
  machineEmphasized: string;
  deviceName: string;
  deviceSub: string;
  deviceDesc: string;
  deviceFeatures: string[];
  deviceImage: string;
  comparisonRows: Array<{ label: string; ours: string; standard: string }>;

  // Section 4: Who needs this
  whoNeedsDesc: string;
  notSuitable: string;
  whoNeedsItems: Array<{ tag: string; desc: string }>;

  // Section 5: Session plan
  sessionPlanDesc: string;
  sessionPlanSteps: Array<{ n: string; label: string; duration: string; detail: string }>;

  // Section 6: Results timeline
  timelineDesc: string;
  timelineItems: Array<{ when: string; what: string }>;

  // Section 7: Final CTA
  ctaRating: string;
  ctaTitle: string;
  ctaTitle2?: string;
  ctaEmphasized: string;
  ctaDesc: string;
  ctaQuickFacts: Array<{ label: string; val: string }>;
  ctaImage: string;
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  "hifu": {
    id: "hifu",
    title: "Non-Surgical Lift",
    titleEmphasized: "HIFU.",
    experienceNo: "Signature Experience No. 02",
    description: "Lift, tighten, and redefine your facial contours with High-Intensity Focused Ultrasound (HIFU). This advanced treatment stimulates your body's natural collagen production for firmer, smoother, and younger-looking skin—without surgery or downtime.",
    heroRating: "4.8 · Rated by 190+ patients",
    heroImage: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop",
    stats: [
      { n: "1–2", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "3-6m", l: "Months Progressive Results" },
      { n: "100%", l: "Non-Surgical" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a superficial lift.",
    whatIsThisDesc1: "HIFU (High-Intensity Focused Ultrasound) targets the <strong>SMAS layer</strong>—the deep muscle-wrapping tissue that surgeons pull during a traditional facelift. By delivering focused energy, it triggers micro-thermal changes beneath the skin.",
    whatIsThisDesc2: "What makes it different: At Cosmo Home, we use medical-grade Ultraformer III technology. Dr. Ruxana adjusts the energy parameters, vectors, and depths in real-time, matching your unique bone structure and skin thickness for a natural, elegant lift.",
    benefits: [
      { icon: "🧬", b: "Deep SMAS targeting", d: "Reaches the structural foundation layer" },
      { icon: "🩺", b: "Vector-aligned lifting", d: "Customized vector pathways for your face" },
      { icon: "⚡", b: "No recovery time", d: "Return to work or social events immediately" },
      { icon: "🔄", b: "Self-building lift", d: "Collagen increases steadily for 6 months" }
    ],
    clinicalNote: "Ultrasonic energy is delivered to precise depths of 1.5mm, 3.0mm, and 4.5mm to target multiple layers of skin tissue.",
    sideImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    machineTitle: "Focused energy,",
    machineEmphasized: "calibrated for lifting.",
    deviceName: "Ultraformer III HIFU",
    deviceSub: "Medical-Grade · FDA Cleared · Lifting Standard",
    deviceDesc: "The Ultraformer III utilizes micro- and macro-focused ultrasound (MMFU) technology to deliver precise energy to target depths, heating the tissue to stimulate collagen remodeling while sparing the surrounding skin.",
    deviceFeatures: ["MMFU Technology", "Multi-depth cartridges", "Precision targeting", "Comfort control"],
    deviceImage: "https://images.unsplash.com/photo-1631217871099-88310a909a32?w=800&h=450&fit=crop&auto=format",
    comparisonRows: [
      { label: "Technology", ours: "Ultraformer III (MMFU) — medical grade", standard: "Unbranded single-depth ultrasound" },
      { label: "Depth Options", ours: "Triple layer depth (1.5mm / 3.0mm / 4.5mm)", standard: "Single shallow depth only" },
      { label: "Comfort", ours: "High-speed transducers for lower discomfort", standard: "Slow, painful heat build-up" },
      { label: "Lifting Power", ours: "Reaches SMAS layer (surgical depth)", standard: "Superficial skin heating only" },
      { label: "Operator", ours: "Performed by Dr. Ruxana or trained dermatologist", standard: "Beauty therapist operated" }
    ],
    whoNeedsDesc: "Ideal for patients experiencing early to moderate skin laxity, softening jawlines, or loss of neck definition.",
    notSuitable: "Pregnancy, active skin infections, open wounds, metal implants in the treatment area.",
    whoNeedsItems: [
      { tag: "Sagging jawline", desc: "Redefining jawlines and softening the appearance of jowls." },
      { tag: "Loss of elasticity", desc: "Loose skin that has lost its youthful contour and bounce." },
      { tag: "Double chin laxity", desc: "Submental skin tightening to define the under-chin area." },
      { tag: "Brow drooping", desc: "Gentle non-invasive lifting of the brow line for an open gaze." },
      { tag: "Neck lines & laxity", desc: "Smoothing horizontal neck bands and firming thin neck skin." },
      { tag: "Surgical alternative", desc: "For those desiring lift without incisions or recovery downtime." }
    ],
    sessionPlanDesc: "Most patients require only 1 or 2 sessions to achieve their desired lifting results, with annual maintenance.",
    sessionPlanSteps: [
      { n: "01", label: "Assessment & Deep Mapping", duration: "75 min", detail: "Dr. Ruxana analyses facial symmetry, skin laxity, and maps the ultrasound energy vectors. The initial full treatment is completed." },
      { n: "02", label: "Verification & Touch-up", duration: "60 min", detail: "Scheduled at 8-12 weeks. We assess the early lifting response, verify collagen remodeling, and apply targeted touch-ups if needed." },
      { n: "03", label: "Maintenance", duration: "45 min", detail: "A single touch-up session recommended at 12 months to maintain the collagen lift and support long-term structure." }
    ],
    timelineDesc: "Lifting and tightening effects build progressively as your body generates new, resilient collagen.",
    timelineItems: [
      { when: "Immediately", what: "Minor tightening and plumpness. Transient mild redness." },
      { when: "Day 3–5", what: "Skin feels firmer. Sub-dermal collagen activation is underway." },
      { when: "Week 2–3", what: "Early lifting visible, particularly around the jawline and eyes." },
      { when: "After 3 Months", what: "Primary results. The jawline is noticeably defined and structured." },
      { when: "Month 6+", what: "Continued improvement as deep collagen fibers strengthen." }
    ],
    ctaRating: "190+ patients lifted",
    ctaTitle: "Ready to restore",
    ctaTitle2: "your natural contour?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Your first session includes a full facial structural analysis with Dr. Ruxana and a customized vector mapping plan. Just professional, honest care.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹35,000 / session" },
      { label: "Duration", val: "60–90 minutes" },
      { label: "Recommended", val: "1–2 sessions" },
      { label: "Frequency", val: "Every 12 months" },
      { label: "Downtime", val: "None" },
      { label: "Performed by", val: "Dr. Ruxana" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "hydrafacial-medifacial": {
    id: "hydrafacial-medifacial",
    title: "Skin Renewal",
    titleEmphasized: "Experience.",
    experienceNo: "Signature Experience No. 01",
    description: "Medical-grade skin transformation by Dr. Ruxana — restoring clarity, luminosity, and texture with zero downtime.",
    heroRating: "4.9 · Rated by 380+ patients",
    heroImage: "https://images.unsplash.com/photo-1761718209794-e0588aafbcc4?w=1000&h=1400&fit=crop&auto=format",
    stats: [
      { n: "3–6", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "1st", l: "Session shows results" },
      { n: "100%", l: "Doctor performed" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a salon facial.",
    whatIsThisDesc1: "The Skin Renewal Experience is a multi-step <strong>medical procedure</strong> — not a beauty treatment. Using our HydraFacial MD Elite system, it simultaneously cleanses, exfoliates, extracts, and infuses with doctor-prescribed serums in a single session.",
    whatIsThisDesc2: "What makes it different: every protocol is designed by Dr. Ruxana specifically for your skin biology. The serum mix you receive exists nowhere else. It is yours.",
    benefits: [
      { icon: "🧬", b: "Clinically proven", d: "Peer-reviewed efficacy data" },
      { icon: "🩺", b: "Doctor-prescribed", d: "Bespoke serum protocol" },
      { icon: "⚡", b: "Immediate glow", d: "Visible after one session" },
      { icon: "🔄", b: "Builds over time", d: "Cumulative collagen lift" }
    ],
    clinicalNote: "Treatment parameters are adjusted in real-time by Dr. Ruxana — every session is different.",
    sideImage: "https://images.unsplash.com/photo-1761819922656-d1b77eef49c0?w=800&h=1000&fit=crop&auto=format",
    machineTitle: "The machine",
    machineEmphasized: "behind your results.",
    deviceName: "HydraFacial MD Elite",
    deviceSub: "Medical-Grade · FDA Cleared · Hospital Standard",
    deviceDesc: "The gold standard for medical skin resurfacing — used in leading dermatology hospitals worldwide. Delivers simultaneous multi-step treatment with doctor-prescribed serum infusion that no standard device can replicate.",
    deviceFeatures: ["Vortex-Fusion® System", "Medical-grade suction", "AI skin analysis", "Custom serums"],
    deviceImage: "https://images.unsplash.com/photo-1631217871099-88310a909a32?w=800&h=450&fit=crop&auto=format",
    comparisonRows: [
      { label: "Technology", ours: "HydraFacial MD Elite — medical grade", standard: "Basic hydradermabrasion device" },
      { label: "Serum delivery", ours: "Patented Vortex-Fusion® system", standard: "Manual application" },
      { label: "Extraction", ours: "Automated vacuum spiral suction", standard: "Manual comedone extraction" },
      { label: "Customisation", ours: "Doctor-prescribed booster serums", standard: "Fixed serum selection" },
      { label: "Skin analysis", ours: "AI-assisted before & after imaging", standard: "Visual assessment only" },
      { label: "Operator", ours: "Performed by qualified dermatologist", standard: "Beauty therapist" }
    ],
    whoNeedsDesc: "Suitable for all skin tones and types. No recovery time. A brief clinical check is completed at your first consultation.",
    notSuitable: "Active cold sores, open wounds, severe rosacea, or Roaccutane within 6 months.",
    whoNeedsItems: [
      { tag: "Dull or tired skin", desc: "Lifestyle stress, poor sleep, or seasonal changes that leave skin looking flat and lifeless." },
      { tag: "Congested pores", desc: "Blackheads, whiteheads, and enlarged pores from sebum build-up." },
      { tag: "Uneven tone", desc: "Post-acne marks, pigmentation, sun damage, or redness." },
      { tag: "Dehydrated skin", desc: "Surface dryness and fine lines worsened by environmental exposure." },
      { tag: "Pre-event glow", desc: "Immediate luminosity boost before a wedding, photoshoot, or important occasion." },
      { tag: "Maintenance care", desc: "Ongoing skin health as part of a long-term aesthetic programme." }
    ],
    sessionPlanDesc: "Most patients see transformative results after just 3 sessions. Each session builds on the last — deeper, smarter, more targeted.",
    sessionPlanSteps: [
      { n: "01", label: "Assessment Session", duration: "75 min", detail: "Dr. Ruxana analyses your skin type, concerns, and goals. A bespoke serum protocol is prescribed. Your first full Skin Renewal treatment is performed, and baseline photography documented." },
      { n: "02", label: "Intensification", duration: "60 min", detail: "Results from session one are reviewed. Serum boosters are adjusted based on your skin's response. Deeper exfoliation is introduced if the skin has tolerated session one well." },
      { n: "03", label: "Consolidation", duration: "60 min", detail: "The full Vortex-Fusion protocol is delivered at optimal parameters. Most patients report peak results after this session — clearer, brighter, and noticeably smoother skin." },
      { n: "04–06", label: "Maintenance Programme", duration: "45 min", detail: "Optional ongoing sessions every 4–6 weeks to sustain results, adapt to seasonal skin changes, and introduce new targeted boosters as needed." }
    ],
    timelineDesc: "Results begin immediately and compound with every session. This is what most patients experience.",
    timelineItems: [
      { when: "Immediately", what: "Visible brightness and hydration. Skin feels clean and plump." },
      { when: "Day 3–5", what: "Pores appear refined. Tone begins to even. No downtime or peeling." },
      { when: "Week 2–3", what: "Surface congestion cleared. Fine lines softer. Friends notice without knowing why." },
      { when: "After 3 sessions", what: "Cumulative collagen stimulation visible. Skin texture measurably improved." },
      { when: "Month 3+", what: "Long-term skin health maintained. Results hold and build with each session." }
    ],
    ctaRating: "380+ patients transformed",
    ctaTitle: "Ready for skin",
    ctaTitle2: "you're proud of?",
    ctaEmphasized: "Start today.",
    ctaDesc: "Your first session includes a full skin analysis with Dr. Ruxana and a bespoke protocol designed for your skin alone. No generic treatments. No pressure. Just honest, expert care.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹15,000 / session" },
      { label: "Duration", val: "45–75 minutes" },
      { label: "Recommended", val: "3–6 sessions" },
      { label: "Frequency", val: "Every 4–6 weeks" },
      { label: "Downtime", val: "None" },
      { label: "Performed by", val: "Dr. Ruxana" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "mesopeels-carbon-peel": {
    id: "mesopeels-carbon-peel",
    title: "Surface Polish",
    titleEmphasized: "Peels.",
    experienceNo: "Signature Experience No. 03",
    description: "Medical-grade organic acid peeling and advanced carbon laser therapy to refine pores, clear congestion, and polish skin.",
    heroRating: "4.9 · Rated by 310+ patients",
    heroImage: "public/services/hifu/1.webp",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "0–2", l: "Days downtime" },
      { n: "24h", l: "Visible skin polish" },
      { n: "100%", l: "Clinical supervision" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a beauty scrub.",
    whatIsThisDesc1: "Mesopeels and Carbon Peels utilize organic acids and laser wavelengths to target acne, sebum, and texture at the cellular level. By matching the chemical peel pH to your skin's barrier, we achieve controlled epidermal renewal.",
    whatIsThisDesc2: "The Carbon Laser Peel uses a nano-carbon paste that binds to cellular debris inside the pores. A Q-switched ND:YAG laser then sweeps over, vaporizing the carbon along with dead cells, resulting in instant pore contraction and surface smoothness.",
    benefits: [
      { icon: "🧬", b: "Cellular turnover", d: "Accelerates epidermal shedding cycle" },
      { icon: "🩺", b: "pH-calibrated peeling", d: "Customized acid blends to match skin tolerance" },
      { icon: "⚡", b: "Carbon vaporisation", d: "Micro-explosions clear sebum blockages" },
      { icon: "🔄", b: "Pore contraction", d: "Thermal stimulation tightens pore walls" }
    ],
    clinicalNote: "Peel strength and laser settings are calibrated based on your skin type and current barrier health.",
    sideImage: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop",
    machineTitle: "Double technology",
    machineEmphasized: "for clear skin.",
    deviceName: "Helios III Q-Switched Laser & Mesoestetic Peels",
    deviceSub: "FDA Cleared · Premium Carbon Peel · Medical Exfoliation",
    deviceDesc: "The Helios III Q-Switched laser targets carbon particles inside the pores, vaporizing them along with dead skin cells and oils. Combined with Mesoestetic's range of pharmaceutical-grade peels, it offers unparalleled skin renewal.",
    deviceFeatures: ["Q-Switched ND:YAG Laser", "Mesoestetic Pharmaceutical Peels", "Precision spot targeting", "Thermal pore contraction"],
    deviceImage: "https://images.unsplash.com/photo-1631217871099-88310a909a32?w=800&h=450&fit=crop&auto=format",
    comparisonRows: [
      { label: "Exfoliation", ours: "Pharma-grade acids & carbon laser vaporization", standard: "Superficial cosmetic scrubs" },
      { label: "Pore Cleansing", ours: "Laser-assisted target extraction", standard: "Manual squeezing only" },
      { label: "Safety", ours: "Calibrated pH to skin barrier threshold", standard: "Over-the-counter high acid peels" },
      { label: "Oil Control", ours: "Deep thermal regulation of sebaceous glands", standard: "Temporary topical drying" },
      { label: "Downtime", ours: "Minimal, backed by medical recovery serums", standard: "Severe peeling and redness" }
    ],
    whoNeedsDesc: "Highly recommended for patients with oily skin, chronic blackheads, open pores, active acne, or post-acne pigmentation.",
    notSuitable: "Open wounds, active sunburn, recent Roaccutane use (within 3 months), pregnancy.",
    whoNeedsItems: [
      { tag: "Active acne breakouts", desc: "Drying up active acne lesions and sterilizing pores." },
      { tag: "Congested pores", desc: "Clearing deep blackheads and hard sebum blockages." },
      { tag: "Excess sebum production", desc: "Regulating overactive oil glands for a long-term matte finish." },
      { tag: "Post-acne pigment", desc: "Fading dark red or brown spots left behind by healed acne." },
      { tag: "Rough skin texture", desc: "Removing rough, flaky skin cells for smooth makeup application." },
      { tag: "Enlarged open pores", desc: "Stimulating contraction to minimize visible pore size." }
    ],
    sessionPlanDesc: "A program of 4–6 sessions spaced 2–3 weeks apart delivers clear, smooth skin that is easy to maintain.",
    sessionPlanSteps: [
      { n: "01", label: "Skin Mapping & Acid Selection", duration: "45 min", detail: "The doctor checks skin barrier strength. A custom formulation of glycolic, salicylic, or mandelic acid peel is selected and applied." },
      { n: "02", label: "Carbon Laser Exfoliation", duration: "45 min", detail: "Carbon paste is applied. The Helios III laser is used to vaporize the carbon, clearing pores and heating the dermis." },
      { n: "03", label: "Neutralisation & Soothing", duration: "30 min", detail: "Peels are neutralized. Calming masks, botanical serums, and LED phototherapy are applied to eliminate redness." }
    ],
    timelineDesc: "Pores shrink and inflammation decreases starting from your very first session.",
    timelineItems: [
      { when: "Immediately", what: "Texture is instantly smoother. Minor transient pinkness." },
      { when: "Day 3–5", what: "Oil production decreases. Pores look clean and smaller." },
      { when: "Week 2", what: "Active acne lesions flatten. Surface pigmentation begins to fade." },
      { when: "After 3 sessions", what: "Significant reduction in acne breakouts. Smooth, refined skin." },
      { when: "Month 3+", what: "Sustained oil balance and clean, glowing skin texture." }
    ],
    ctaRating: "310+ patients purified",
    ctaTitle: "Ready to clear",
    ctaTitle2: "your skin texture?",
    ctaEmphasized: "Start today.",
    ctaDesc: "Get a clinical skin barrier check and custom peel plan designed for your specific concerns. No generic facials, just medical expertise.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹6,500 / session" },
      { label: "Duration", val: "45–60 minutes" },
      { label: "Recommended", val: "4–6 sessions" },
      { label: "Frequency", val: "Every 2–3 weeks" },
      { label: "Downtime", val: "None to minimal" },
      { label: "Performed by", val: "Dermatologist" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "laser-pigment-reduction": {
    id: "laser-pigment-reduction",
    title: "Tone Correction",
    titleEmphasized: "Laser.",
    experienceNo: "Signature Experience No. 04",
    description: "Targeted laser energy to fracture dark spots, melasma, and sun damage safely, revealing even-toned luminosity.",
    heroRating: "4.8 · Rated by 220+ patients",
    heroImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    stats: [
      { n: "3–6", l: "Sessions recommended" },
      { n: "1–3", l: "Days micro-flaking" },
      { n: "14d", l: "First fading visible" },
      { n: "100%", l: "Doctor supervised" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a bleaching cream.",
    whatIsThisDesc1: "Laser Pigment Reduction uses advanced light energy to target and break down melanin deposits in the deeper layers of your skin without damaging the surrounding tissue. Melasma, freckles, age spots, and sun damage are treated using specific laser wavelengths that fracture the excess pigment into microscopic particles.",
    whatIsThisDesc2: "At Cosmo Home, we use fractional laser technology. By delivering precise, short pulses of light, we break down pigment deposits while avoiding epidermal heating, making it safe for deeper skin tones and minimizing downtime.",
    benefits: [
      { icon: "🧬", b: "Wavelength targeting", d: "Shatters melanin without affecting surrounding tissue" },
      { icon: "🩺", b: "Melanocyte regulation", d: "Calms active pigment-producing cells" },
      { icon: "⚡", b: "Immune sweep clearance", d: "Body sweeps shattered pigment naturally" },
      { icon: "🔄", b: "Melasma management", d: "Controlled protocols designed for chronic pigment" }
    ],
    clinicalNote: "Laser parameters are calibrated to Fitzpatrick skin types to prevent post-inflammatory hyperpigmentation.",
    sideImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    machineTitle: "High-precision",
    machineEmphasized: "pigment shattering.",
    deviceName: "Helios III ND:YAG Laser System",
    deviceSub: "FDA Cleared · Premium Pigment Laser · Multi-Wavelength System",
    deviceDesc: "The Helios III is a leading Q-switched ND:YAG laser that features fractional technology, allowing safe, high-energy treatments for deeper pigment anomalies with minimal risk of thermal damage to surrounding tissue.",
    deviceFeatures: ["Fractional Laser Mode", "Dual wavelengths (1064nm / 532nm)", "Thermal relaxation control", "Safe for darker skin tones"],
    deviceImage: "https://images.unsplash.com/photo-1631217871099-88310a909a32?w=800&h=450&fit=crop&auto=format",
    comparisonRows: [
      { label: "Laser Technology", ours: "Helios III Q-switched ND:YAG (Fractional)", standard: "Superficial IPL or uncalibrated lasers" },
      { label: "Skin Safety", ours: "Fractional beams prevent epidermal burns", standard: "High heat causes hyperpigmentation" },
      { label: "Targeting", ours: "Shatters pigment into microscopic dust", standard: "Burns pigment forming surface crusts" },
      { label: "Sessions", ours: "Clears spots in 3–5 targeted treatments", standard: "Requires 10+ sessions with low progress" },
      { label: "Supervision", ours: "Parameters verified by dermatologists", standard: "Standard non-medical operators" }
    ],
    whoNeedsDesc: "Ideal for patients with stubborn melasma, sun spots, freckles, age spots, or dark acne scars.",
    notSuitable: "Active tan, sun exposure within 2 weeks, history of keloidal scars.",
    whoNeedsItems: [
      { tag: "Stubborn melasma", desc: "Managing hormonal patches on cheeks, nose, and forehead." },
      { tag: "Sun spots & freckles", desc: "Lifting brown spots caused by UV damage." },
      { tag: "Post-acne dark marks", desc: "Fading dark brown marks that persist after acne heals." },
      { tag: "Uneven skin tone", desc: "Restoring general color consistency across the face." },
      { tag: "Age spots on hands", desc: "Removing aging pigment spots from hands and neck." },
      { tag: "Dull skin build-up", desc: "Releasing microscopic melanin to clarify skin tone." }
    ],
    sessionPlanDesc: "Most patients require 3 to 6 sessions, spaced 4 weeks apart, to clear deeper pigment deposits.",
    sessionPlanSteps: [
      { n: "01", label: "Wood's Lamp Mapping", duration: "45 min", detail: "Dr. Ruxana uses skin analysis to map pigment depth. A patch test is performed to establish safe threshold energy." },
      { n: "02", label: "Fractional Laser Delivery", duration: "45 min", detail: "Precise laser sweeps over the pigment zones. Skin is cooled continuously for comfort." },
      { n: "03", label: "Infusion & Sun Barrier", duration: "30 min", detail: "Soothing medical mask application, antioxidant serums, and high-factor physical sun block." }
    ],
    timelineDesc: "Pigment particles rise to the surface, flake off, and fade over a 4-week cycle.",
    timelineItems: [
      { when: "Immediately", what: "Pigment looks slightly dark or grey. Mild redness." },
      { when: "Day 3–5", what: "Pigment rise causes micro-flaking (feels like coffee grounds)." },
      { when: "Week 2", what: "Superficial spots show visible fading. Skin tone looks cleaner." },
      { when: "After 3 sessions", what: "Melasma patches show significant breakup. Radiance restored." },
      { when: "Month 3+", what: "Substantial clearing. Skin retains a bright, balanced tone." }
    ],
    ctaRating: "220+ patients cleared",
    ctaTitle: "Ready to clear",
    ctaTitle2: "stubborn dark spots?",
    ctaEmphasized: "Start today.",
    ctaDesc: "Include a medical-grade wood's lamp skin analysis to find the depth of your pigmentation and build a safe treatment path.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹8,000 / session" },
      { label: "Duration", val: "30–45 minutes" },
      { label: "Recommended", val: "3–6 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "1–3 days micro-flaking" },
      { label: "Performed by", val: "Dermatologist" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "laser-scar-reduction": {
    id: "laser-scar-reduction",
    title: "Texture Resurfacing",
    titleEmphasized: "Laser.",
    experienceNo: "Signature Experience No. 05",
    description: "Fractional laser resurfacing to smooth acne scars, surgical scars, and skin texture, inducing healthy dermal remodeling.",
    heroRating: "4.9 · Rated by 180+ patients",
    heroImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "2–4", l: "Days recovery redness" },
      { n: "3-4w", l: "Collagen growth starts" },
      { n: "100%", l: "Doctor performed" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a superficial skin peeling.",
    whatIsThisDesc1: "Laser Scar Reduction utilizes fractional laser resurfacing to create micro-channels of thermal energy in the scar tissue, triggering your body to replace old scarred fibers with fresh, smooth collagen.",
    whatIsThisDesc2: "At Cosmo Home, we treat acne scars (boxcar, rolling, icepick), surgical scars, and stretch marks. By adjusting the laser depth and density, Dr. Ruxana targets the precise layer where scar tissue is anchored, flattening and blending it with surrounding healthy skin.",
    benefits: [
      { icon: "🧬", b: "Dermal remodeling", d: "Replaces fibrotic scar tissue with fresh collagen" },
      { icon: "🩺", b: "Customizable depth", d: "Calibrated to reach deep tethered scars" },
      { icon: "⚡", b: "Fractional healing", d: "Surrounding healthy skin bridges speed recovery" },
      { icon: "🔄", b: "Texture smoothing", d: "Rebuilds uniform skin reflectivity and depth" }
    ],
    clinicalNote: "Deep, tethered scars are combined with subcision or medical collagen-inducing agents to maximize lifting.",
    sideImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    machineTitle: "Dermal remodeling",
    machineEmphasized: "by micro-laser.",
    deviceName: "CO2 Fractional / Er:YAG Laser System",
    deviceSub: "FDA Cleared · Medical Resurfacing · High-Precision Scar Targeting",
    deviceDesc: "Our fractional laser system creates microscopic thermal treatment zones (MTZs) in the skin. The surrounding untreated tissue allows for rapid healing and collagen production, dramatically reducing downtime while maximizing scar remodelling.",
    deviceFeatures: ["Fractional ablation & coagulation", "Precision spot adjustment", "Smart-scan energy delivery", "Deep tissue thermal penetration"],
    deviceImage: "https://images.unsplash.com/photo-1631217871099-88310a909a32?w=800&h=450&fit=crop&auto=format",
    comparisonRows: [
      { label: "Laser Source", ours: "CO2 / Er:YAG fractional medical lasers", standard: "Non-fractional lasers or simple dermabrasion" },
      { label: "Skin Healing", ours: "Micro-treatment zones preserve tissue bridges", standard: "Full surface damage causes long downtime" },
      { label: "Collagen Growth", ours: "Deep thermal remodeling of fibrotic tissues", standard: "Superficial surface heating only" },
      { label: "Improvement", ours: "50%–80% texture lift in 4–6 sessions", standard: "Superficial skin softening only" },
      { label: "Risk Control", ours: "Calibrated scan grids to prevent burns", standard: "High risk of post-treatment scabbing" }
    ],
    whoNeedsDesc: "Designed for patients seeking to smooth out acne pits, surgical scars, accident marks, or uneven skin texture.",
    notSuitable: "Active cystic acne, history of keloids, pregnancy, active skin infection.",
    whoNeedsItems: [
      { tag: "Rolling acne scars", desc: "Lifting wavy, sloping scars tethered in the deep tissue." },
      { tag: "Boxcar scars", desc: "Smoothing sharp-edged crater-like acne scars." },
      { tag: "Icepick scars", desc: "Tightening deep, narrow pinprick scars." },
      { tag: "Surgical scars", desc: "Softening and flattening hard surgical incision lines." },
      { tag: "Stretch marks", desc: "Restoring elasticity and color blending to stretch lines." },
      { tag: "Large pore texture", desc: "Overall skin contraction to reduce open pore look." }
    ],
    sessionPlanDesc: "A program of 4–6 sessions, spaced 4–6 weeks apart, yields significant texture improvement.",
    sessionPlanSteps: [
      { n: "01", label: "Structural Mapping & Numbing", duration: "60 min", detail: "Scars are mapped according to depth and density. Medical numbing cream is applied for comfort." },
      { n: "02", label: "Fractional Resurfacing", duration: "45 min", detail: "Precise scan lines are applied to the scar zones. Cold air cooling is used to manage heat." },
      { n: "03", label: "Growth Factor & Recovery", duration: "30 min", detail: "Application of growth factor serums, cooling gel sheets, and medical barrier repair creams." },
      { n: "04", label: "Healing Review", duration: "15 min", detail: "Scheduled at 1 week to evaluate skin barrier recovery and adjust home care." }
    ],
    timelineDesc: "Scar tissue breaks down and is replaced by fresh collagen over a 3-month cycle.",
    timelineItems: [
      { when: "Immediately", what: "Skin feels hot and looks sunburned with micro-treatment spots." },
      { when: "Day 2–4", what: "Redness turns bronze, micro-crusts flake off. Skin feels tight." },
      { when: "Week 2", what: "The surface feels smoother. Early texture improvement." },
      { when: "Month 1", what: "Dermal collagen growth begins to lift depressed scar pits." },
      { when: "Month 3+", what: "Scar edges soften, crater depths lift, skin looks even." }
    ],
    ctaRating: "180+ patients smoothed",
    ctaTitle: "Ready to smooth",
    ctaTitle2: "your skin texture?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Your first step is a consultation and scar mapping session to verify tissue depth and construct a safe, customized healing plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹12,000 / session" },
      { label: "Duration", val: "60 minutes" },
      { label: "Recommended", val: "4–6 sessions" },
      { label: "Frequency", val: "Every 4–6 weeks" },
      { label: "Downtime", val: "2–4 days (redness/bronzing)" },
      { label: "Performed by", val: "Dr. Ruxana" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "phototherapy": {
    id: "phototherapy",
    title: "Light Rejuvenation",
    titleEmphasized: "Phototherapy.",
    experienceNo: "Signature Experience No. 06",
    description: "Medical-grade LED light therapy to heal acne, soothe inflammation, reduce redness, and charge skin cells.",
    heroRating: "4.9 · Rated by 150+ patients",
    heroImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    stats: [
      { n: "6–10", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "Instant", l: "Skin soothing" },
      { n: "100%", l: "Pain-free & relaxing" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a cosmetic light mask.",
    whatIsThisDesc1: "Phototherapy utilizes high-density, medical-grade LED (Light Emitting Diode) wavelengths to stimulate cellular activity, reduce inflammation, and accelerate tissue repair.",
    whatIsThisDesc2: "At Cosmo Home, we use the Dermalux Tri-Wave MD canopy. We deliver clinically validated wavelengths (415nm Blue, 633nm Red, and 830nm Near-Infrared) simultaneously or individually to target acne-causing bacteria, calm vascular redness, and charge cells with energy.",
    benefits: [
      { icon: "🧬", b: "Cellular activation", d: "Increases ATP production to trigger cellular repair" },
      { icon: "🩺", b: "Anti-bacterial blue", d: "Destroys Propionibacterium acnes bacteria in pores" },
      { icon: "⚡", b: "Anti-inflammatory red", d: "Reduces redness and calms sensitive skin" },
      { icon: "🔄", b: "Deep tissue infrared", d: "Speeds up recovery and supports collagen structure" }
    ],
    clinicalNote: "Phototherapy is often used immediately after active procedures to reduce redness and speed healing by 50%.",
    sideImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    machineTitle: "Validated wavelengths",
    machineEmphasized: "for cellular health.",
    deviceName: "Dermalux Tri-Wave MD",
    deviceSub: "FDA Cleared · Multi-Award LED System · Hospital Grade",
    deviceDesc: "The Dermalux Tri-Wave MD is the global gold standard in LED phototherapy, delivering three clinically proven wavelengths simultaneously or individually at therapeutic power levels that home masks cannot match.",
    deviceFeatures: ["Simultaneous Tri-Wave technology", "High-power narrowband LEDs", "Pre-set clinical protocols", "Zero thermal damage"],
    deviceImage: "https://images.unsplash.com/photo-1631217871099-88310a909a32?w=800&h=450&fit=crop&auto=format",
    comparisonRows: [
      { label: "Light Source", ours: "Narrowband medical-grade LEDs", standard: "Broadband low-power consumer LEDs" },
      { label: "Power Output", ours: "High intensity target dosage", standard: "Low battery home mask lights" },
      { label: "Wavelengths", ours: "Simultaneous 415nm / 633nm / 830nm", standard: "Uncalibrated cosmetic light colors" },
      { label: "Efficacy", ours: "Clinically certified for acne and psoriasis", standard: "Temporary cosmetic relaxation" },
      { label: "Skin Health", ours: "Cold light energy with zero thermal risk", standard: "Heat build-up from low-quality bulbs" }
    ],
    whoNeedsDesc: "Excellent for active acne breakouts, rosacea, generalized redness, eczema, or post-procedure skin healing.",
    notSuitable: "Photosensitising medications, epilepsy triggered by flashing light, active skin cancer.",
    whoNeedsItems: [
      { tag: "Inflammatory acne", desc: "Drying up blemishes and destroying acne-causing bacteria." },
      { tag: "Rosacea & redness", desc: "Soothing flushed facial skin and reinforcing capillary walls." },
      { tag: "Post-procedure recovery", desc: "Halving downtime after peels, microneedling, or laser treatments." },
      { tag: "Eczema & skin flare-ups", desc: "Calming itchy, irritated, or inflamed skin patches." },
      { tag: "Loss of skin radiance", desc: "Recharging skin cells to boost natural hydration and glow." },
      { tag: "Wound healing", desc: "Accelerating skin healing after minor surgical procedures." }
    ],
    sessionPlanDesc: "A series of 6–10 sessions, twice weekly, delivers optimal results for acne and inflammatory conditions.",
    sessionPlanSteps: [
      { n: "01", label: "Skin Preparation", duration: "15 min", detail: "Skin is cleansed of sunscreens, oils, or makeup that can block or reflect light energy." },
      { n: "02", label: "LED Light Therapy", duration: "30 min", detail: "The Dermalux canopy is positioned over your face while you rest under warm, soothing light waves." },
      { n: "03", label: "Lock-in Hydration", duration: "15 min", detail: "Custom hydrating serums and physical sun block are applied to preserve the cellular glow." }
    ],
    timelineDesc: "Redness decreases and radiance increases starting from your very first session.",
    timelineItems: [
      { when: "Immediately", what: "Skin looks calm, plump, and hydrated. Flushed redness fades." },
      { when: "Day 2–3", what: "Acne breakouts appear dried up and less painful." },
      { when: "Week 2", what: "Overall redness decreases; skin feels less sensitive." },
      { when: "After 6 sessions", what: "Significant clearing of active acne spots. Skin looks balanced." },
      { when: "Month 2+", what: "Long-term skin barrier strength and healthy cellular turnover." }
    ],
    ctaRating: "150+ patients calmed",
    ctaTitle: "Ready to calm",
    ctaTitle2: "redness and acne?",
    ctaEmphasized: "Start today.",
    ctaDesc: "Add a medical LED session to your current skincare program to reduce inflammation and speed up barrier healing.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹2,500 / session" },
      { label: "Duration", val: "45 minutes" },
      { label: "Recommended", val: "6–10 sessions" },
      { label: "Frequency", val: "1–2 times per week" },
      { label: "Downtime", val: "None" },
      { label: "Performed by", val: "Aesthetic Therapist" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "excimer-laser": {
    id: "excimer-laser",
    title: "Targeted UVB",
    titleEmphasized: "Excimer.",
    experienceNo: "Signature Experience No. 07",
    description: "Targeted monochromatic UVB light to treat vitiligo, psoriasis, and alopecia areata safely without exposing healthy skin.",
    heroRating: "4.8 · Rated by 120+ patients",
    heroImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    stats: [
      { n: "10–20", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "4-6w", l: "Repigmentation starts" },
      { n: "100%", l: "Doctor performed" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "broadband UV exposure.",
    whatIsThisDesc1: "The Excimer Laser is a specialized medical laser that delivers a highly concentrated beam of <strong>308nm monochromatic UVB light</strong> directly to affected skin patches.",
    whatIsThisDesc2: "It is the gold standard treatment for autoimmune skin conditions like vitiligo, psoriasis, and alopecia areata. By targeting only the affected areas, it avoids exposing healthy surrounding skin to ultraviolet light, stimulating melanocytes or calming hyperactive T-cells with unmatched safety.",
    benefits: [
      { icon: "🧬", b: "Monochromatic UVB", d: "Concentrated 308nm light targets only the lesion" },
      { icon: "🩺", b: "Melanocyte stimulus", d: "Triggers pigment production in vitiligo spots" },
      { icon: "⚡", b: "Local immune control", d: "Calms hyperactive T-cells causing skin plaques" },
      { icon: "🔄", b: "Surrounding skin safety", d: "Prevents UV exposure to healthy skin areas" }
    ],
    clinicalNote: "Dosing is calculated using minimal erythema dose (MED) testing to ensure optimal therapeutic energy with zero burning.",
    sideImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    machineTitle: "Precise spot delivery",
    machineEmphasized: "of monochromatic UVB.",
    deviceName: "308nm Excimer Laser System",
    deviceSub: "FDA Cleared · Monochromatic UVB · Autoimmune Skin Solution",
    deviceDesc: "The 308nm Excimer laser represents a major advancement in the treatment of vitiligo and psoriasis. Its high-intensity spot handpiece allows high fluences to be delivered selectively to plaque or depigmented lesions, accelerating results.",
    deviceFeatures: ["Monochromatic 308nm wavelength", "Precise spot size adjustment", "High-fluence rapid treatment", "Minimal exposure to healthy skin"],
    deviceImage: "https://images.unsplash.com/photo-1631217871099-88310a909a32?w=800&h=450&fit=crop&auto=format",
    comparisonRows: [
      { label: "Light Spectrum", ours: "Monochromatic 308nm UVB (targeted)", standard: "Broadband UV light chambers" },
      { label: "Healthy Skin Safety", ours: "No exposure to healthy surrounding tissue", standard: "Full-body exposure (UV damage risk)" },
      { label: "Repigmentation", ours: "Rapid follicular melanin stimulation", standard: "Slow, uneven pigment response" },
      { label: "Clearing Speed", ours: "Plaques clear in weeks, not months", standard: "Low intensity requiring months" },
      { label: "Control", ours: "Calibrated spot dosing by dermatologist", standard: "Standard non-selective UV timers" }
    ],
    whoNeedsDesc: "Indicated for patients with localized vitiligo (loss of pigment), plaque psoriasis, eczema, or patchy hair loss (alopecia areata).",
    notSuitable: "History of skin cancer, lupus, xeroderma pigmentosum, pregnancy.",
    whoNeedsItems: [
      { tag: "Localized vitiligo", desc: "Restoring pigment to white patches on the face, hands, or body." },
      { tag: "Plaque psoriasis", desc: "Clearing thick, scaly skin plaques on elbows, knees, or scalp." },
      { tag: "Alopecia areata", desc: "Stimulating hair follicles in circular bald patches on the scalp." },
      { tag: "Chronic eczema patches", desc: "Calming stubborn, itchy skin spots resistant to steroid creams." },
      { tag: "Hypopigmented scars", desc: "Helping blend light scars back into the normal skin tone." }
    ],
    sessionPlanDesc: "Sessions are brief and performed 2 to 3 times a week. Significant results are usually seen in 10–20 sessions.",
    sessionPlanSteps: [
      { n: "01", label: "Dose Calibration", duration: "15 min", detail: "Dr. Ruxana or our dermatologist evaluates the lesions and calibrates the exact UVB dose based on skin type." },
      { n: "02", label: "Targeted Excimer Delivery", duration: "20 min", detail: "The laser handpiece is applied directly to the patches. The treatment is warm and completely pain-free." },
      { n: "03", label: "Soothing Protection", duration: "5 min", detail: "Application of anti-inflammatory creams and mineral sunscreens." }
    ],
    timelineDesc: "Inflammation decreases and pigment islands begin to form within 4 to 6 weeks.",
    timelineItems: [
      { when: "Immediately", what: "No pain. Mild pinkness may appear 12–24 hours post-treatment." },
      { when: "Week 2", what: "Psoriasis scaling decreases and plaque thickness softens." },
      { when: "Week 4–6", what: "Follicular pigment islands (small brown spots) appear in vitiligo." },
      { when: "After 15 sessions", what: "Moderate to significant clearance of patches. Regained skin tone." },
      { when: "Month 3+", what: "Sustained clearing. Periodic checks are scheduled to monitor pigment." }
    ],
    ctaRating: "120+ patients repigmented",
    ctaTitle: "Ready to treat",
    ctaTitle2: "vitiligo or psoriasis?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a private clinical assessment to determine if your patches are active and establish a safe Excimer dose program.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹3,000 / session" },
      { label: "Duration", val: "15–30 minutes" },
      { label: "Recommended", val: "10–20 sessions" },
      { label: "Frequency", val: "2–3 times per week" },
      { label: "Downtime", val: "None" },
      { label: "Performed by", val: "Dermatologist" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "laser-hair-reduction": {
    id: "laser-hair-reduction",
    title: "Smooth Skin",
    titleEmphasized: "Laser.",
    experienceNo: "Signature Experience No. 08",
    description: "Pain-free, medical-grade laser hair reduction for all skin and hair types using advanced triple-wavelength technology.",
    heroRating: "4.9 · Rated by 450+ patients",
    heroImage: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop",
    stats: [
      { n: "6–8", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "2w", l: "Shedding begins" },
      { n: "100%", l: "Pain-free technology" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "painful waxing or shaving.",
    whatIsThisDesc1: "Laser Hair Reduction targets hair follicles at the root, delivering precise thermal energy that disables the follicle's ability to grow hair while keeping the surrounding skin cool and protected.",
    whatIsThisDesc2: "At Cosmo Home, we use the triple-wavelength Soprano Titanium system—the gold standard in laser hair removal. It is completely pain-free, safe for all skin tones (including tanned skin), and can be performed year-round.",
    benefits: [
      { icon: "🧬", b: "Triple Wavelength", d: "Targets 755nm, 810nm, and 1064nm depths simultaneously" },
      { icon: "🩺", b: "ICE Plus™ cooling", d: "Sapphire cooling tip keeps skin pain-free and safe" },
      { icon: "⚡", b: "In-Motion sweeps", d: "Gradual heating avoids sudden painful energy bursts" },
      { icon: "🔄", b: "Safe for all skin", d: "Clinically proven safe for light, dark, and tanned skin" }
    ],
    clinicalNote: "A complimentary patch test and follicle check are completed prior to your first session.",
    sideImage: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop",
    machineTitle: "Painless sapphire",
    machineEmphasized: "cooling laser.",
    deviceName: "Soprano Titanium Laser System",
    deviceSub: "FDA Cleared · Award-Winning SHR™ Technology · Sapphire Cooling",
    deviceDesc: "The Soprano Titanium combines Alexandrite (755nm), Diode (810nm), and ND:YAG (1064nm) wavelengths in a single handpiece, targeting different hair depths while the ICE Plus™ cooling tip prevents surface burns and ensures absolute comfort.",
    deviceFeatures: ["Alexandrite, Diode & YAG wavelengths", "ICE Plus™ continuous cooling", "SHR™ in-motion technology", "Smart Clinic connectivity"],
    deviceImage: "https://images.unsplash.com/photo-1631217871099-88310a909a32?w=800&h=450&fit=crop&auto=format",
    comparisonRows: [
      { label: "Wavelengths", ours: "Alexandrite (755nm) + Diode (810nm) + YAG (1064nm)", standard: "Single diode wavelength or IPL" },
      { label: "Pain Level", ours: "Completely pain-free sweeping motion", standard: "Painful, hot single-shot zaps" },
      { label: "Cooling Tip", ours: "ICE Plus™ continuous sapphire contact cooling", standard: "Air cooling or no cooling tip" },
      { label: "Skin Safety", ours: "Safe for all skin tones and tanned skin", standard: "High burn risk on darker skin tones" },
      { label: "Applicator Size", ours: "4cm² spot size for rapid full body treatments", standard: "Small spot sizes taking hours" }
    ],
    whoNeedsDesc: "For anyone seeking a permanent, comfortable solution to unwanted body or facial hair, ingrown hairs, or shaving irritation.",
    notSuitable: "Pregnancy, active skin cancer, extremely light white/grey hair (lacks melanin target).",
    whoNeedsItems: [
      { tag: "Unwanted body hair", desc: "Permanent smooth results on legs, arms, chest, or back." },
      { tag: "Facial hair control", desc: "Reducing facial hair without waxing or threading irritation." },
      { tag: "Ingrown hairs", desc: "Eliminating painful hair bumps and follicle inflammation." },
      { tag: "Shaving rashes", desc: "For sensitive skin that flares up under razors." },
      { tag: "Hirsutism", desc: "Medical management of hormonal hair growth concerns." }
    ],
    sessionPlanDesc: "Hair follicles are targeted during their active growth phase. 6 to 8 sessions ensure full clearance.",
    sessionPlanSteps: [
      { n: "01", label: "Consultation & Patch Test", duration: "30 min", detail: "Evaluation of skin type, hair density, and medical history. A test patch is completed on target areas." },
      { n: "02", label: "In-Motion Laser Session", duration: "30–90 min", detail: "Treated skin is shaved, gel is applied, and the laser sweeps over the zone, feeling like a warm massage." },
      { n: "03", label: "Soothing Finish", duration: "10 min", detail: "Gel is removed. Soothing aloe vera and sunscreen are applied to keep skin calm." }
    ],
    timelineDesc: "Hair growth slows down, and treated hairs shed over a 2-week cycle.",
    timelineItems: [
      { when: "Immediately", what: "Skin looks clean. Minor transient follicle redness." },
      { when: "Day 7–14", what: "Treated hairs begin to push out and shed naturally." },
      { when: "Week 4", what: "Regrowth is significantly thinner, lighter, and slower." },
      { when: "After 3 sessions", what: "Up to 50% permanent reduction in active hair follicles." },
      { when: "Month 6+", what: "Smooth, hair-free skin with no shadow or ingrown hairs." }
    ],
    ctaRating: "450+ patients smooth",
    ctaTitle: "Ready for permanent",
    ctaTitle2: "painless smooth skin?",
    ctaEmphasized: "Start today.",
    ctaDesc: "Include a medical-grade patch test to find the optimal laser settings for your skin tone and hair thickness.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹4,500 / session" },
      { label: "Duration", val: "30–90 minutes" },
      { label: "Recommended", val: "6–8 sessions" },
      { label: "Frequency", val: "Every 4–6 weeks" },
      { label: "Downtime", val: "None" },
      { label: "Performed by", val: "Aesthetic Therapist" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "muscle-sculpting": {
    id: "muscle-sculpting",
    title: "Body Definition",
    titleEmphasized: "Sculpting.",
    experienceNo: "Signature Experience No. 09",
    description: "High-intensity focused electromagnetic energy to tone muscles and reduce stubborn fat layers non-invasively.",
    heroRating: "4.8 · Rated by 160+ patients",
    heroImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "20k", l: "Contractions in 30 mins" },
      { n: "100%", l: "Non-invasive" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a passive vibration belt.",
    whatIsThisDesc1: "Muscle Sculpting uses High-Intensity Focused Electromagnetic (HIFEM) technology to induce supramaximal muscle contractions that are impossible to achieve through voluntary exercise.",
    whatIsThisDesc2: "During a single 30-minute session, the target muscles contract approximately 20,000 times. This intense workload forces the muscle tissue to adapt, leading to deep remodeling of its inner structure—resulting in muscle building and simultaneous localized fat reduction.",
    benefits: [
      { icon: "🧬", b: "Supramaximal contraction", d: "Stimulates 100% of muscle fibers (workouts reach 40%)" },
      { icon: "🩺", b: "Core reinforcement", d: "Improves posture, core support, and back stability" },
      { icon: "⚡", b: "Non-surgical lifting", d: "Firm and round glutes or define abdomen safely" },
      { icon: "🔄", b: "Adipose lipolysis", d: "Rapid muscle workload triggers natural fat cell breakdown" }
    ],
    clinicalNote: "Specialized wave protocols are calibrated for abdominal toning, gluteal lifting, or arm firming.",
    sideImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    machineTitle: "Focused magnetic",
    machineEmphasized: "muscle contraction.",
    deviceName: "HIFEM Body Sculpting System",
    deviceSub: "FDA Cleared · Medical-Grade HIFEM · Non-Invasive Toning",
    deviceDesc: "The HIFEM system penetrates deep into the subcutaneous tissue, inducing rapid muscle contractions. The metabolic reaction in the fat cells triggers lipolysis, causing fat cells to break down and flush out naturally over the following weeks.",
    deviceFeatures: ["HIFEM Technology", "Dual dual-paddle applicators", "Custom intensity programs", "Zero thermal energy"],
    deviceImage: "https://images.unsplash.com/photo-1631217871099-88310a909a32?w=800&h=450&fit=crop&auto=format",
    comparisonRows: [
      { label: "Technology", ours: "High-Intensity Focused Electromagnetic (HIFEM)", standard: "Electrical Muscle Stimulation (EMS)" },
      { label: "Depth", ours: "Deep muscle penetration reaching structural cores", standard: "Superficial skin surface nerve twitching" },
      { label: "Contraction", ours: "Supramaximal (20,000 contractions per session)", standard: "Low frequency vibrations" },
      { label: "Fat Loss", ours: "Proven metabolic fat cell apoptosis", standard: "No effect on fat layers" },
      { label: "Safety", ours: "FDA-cleared medical tech", standard: "Unregulated beauty spa belts" }
    ],
    whoNeedsDesc: "Ideal for patients close to their target weight who want to define abdominal muscles, lift buttocks, or strengthen core support.",
    notSuitable: "Pacemakers, metal implants in the treatment area, pregnancy, active hernia.",
    whoNeedsItems: [
      { tag: "Abdominal definition", desc: "Toning and defining abdominal muscle bands." },
      { tag: "Gluteal lift", desc: "Firming and rounded lifting of the buttocks without squats." },
      { tag: "Thigh & calf sculpting", desc: "Toning and strengthening quadriceps and calf muscles." },
      { tag: "Diastasis recti repair", desc: "Strengthening separated abdominal walls postpartum." },
      { tag: "Arm firming", desc: "Toning triceps and biceps for structured arms." },
      { tag: "Core support", desc: "Building posture muscles to relieve lower back tension." }
    ],
    sessionPlanDesc: "A complete course consists of 4 to 6 sessions scheduled 2 to 3 days apart (completed in 2 weeks).",
    sessionPlanSteps: [
      { n: "01", label: "Abdominal/Gluteal Mapping", duration: "30 min", detail: "Dr. Ruxana measures target zones, outlines muscle boundaries, and sets energy levels." },
      { n: "02", label: "Focused HIFEM Session", duration: "30 min", detail: "Applicators are secured. Intensity is slowly stepped up to your comfort ceiling. Feels like intense muscle contractions." },
      { n: "03", label: "Toxin Clearance", duration: "10 min", detail: "Removal of paddles. Guided hydration to support the drainage of cellular fat release." }
    ],
    timelineDesc: "Muscles tighten immediately, and definition develops over a 4-week cycle.",
    timelineItems: [
      { when: "Immediately", what: "Feels like you completed a core workout. No lactic acid soreness." },
      { when: "Day 2–3", what: "Target area feels tighter and core posture feels stronger." },
      { when: "Week 2", what: "Early definition is visible. Improved strength in workouts." },
      { when: "Week 4", what: "Peak toning. Abdomen looks flatter and glutes look lifted." },
      { when: "Month 3+", what: "Tone is preserved with maintenance sessions and active lifestyle." }
    ],
    ctaRating: "160+ patients sculpted",
    ctaTitle: "Ready to define",
    ctaTitle2: "your core strength?",
    ctaEmphasized: "Start today.",
    ctaDesc: "Include a medical assessment of your muscle-to-fat ratio to build a customized paddle positioning and program intensity.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹15,000 / session" },
      { label: "Duration", val: "30 minutes" },
      { label: "Recommended", val: "4–6 sessions" },
      { label: "Frequency", val: "Twice weekly (2 weeks)" },
      { label: "Downtime", val: "None" },
      { label: "Performed by", val: "Aesthetic Therapist" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "exosomes-prp-gfc": {
    id: "exosomes-prp-gfc",
    title: "Bio-Regenerative",
    titleEmphasized: "PRP & GFC.",
    experienceNo: "Signature Experience No. 10",
    description: "Advanced cellular therapies and growth factor concentrate (GFC) to restore hair density and regenerate skin cells.",
    heroRating: "4.9 · Rated by 280+ patients",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    stats: [
      { n: "3–4", l: "Sessions recommended" },
      { n: "12-24h", l: "Minor swelling" },
      { n: "3-4w", l: "Cellular activation" },
      { n: "100%", l: "Doctor performed" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a synthetic injection.",
    whatIsThisDesc1: "Exosomes, PRP (Platelet-Rich Plasma), and GFC (Growth Factor Concentrate) are advanced bio-regenerative treatments that utilize cell-signaling molecules to repair damaged tissue and stimulate hair follicles.",
    whatIsThisDesc2: "Instead of synthetic chemicals, these therapies harness your body's own natural growth factors (PRP/GFC) or laboratory-purified stem cell-derived exosomes to stimulate collagen, repair scars, and reverse hair thinning. Every treatment is prepared in a sterile clinical laboratory and injected by Dr. Ruxana or our dermatologists.",
    benefits: [
      { icon: "🧬", b: "Bio-regenerative healing", d: "Uses natural cell-signaling pathways for repair" },
      { icon: "🩺", b: "Acellular GFC purity", d: "Growth factors isolated without inflammatory cell debris" },
      { icon: "⚡", b: "Dermal cell exosomes", d: "Exosomes carry billions of regenerative messages" },
      { icon: "🔄", b: "Follicular reactivation", d: "Restarts hair growth in dormant thinning follicles" }
    ],
    clinicalNote: "Blood is isolated in clinical centrifuges to achieve the highest possible platelet concentration.",
    sideImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    machineTitle: "Centrifugal & cellular",
    machineEmphasized: "factor isolation.",
    deviceName: "Remi Centrifuge & Acellular GFC Kits",
    deviceSub: "Medical Centrifuge · Sterile Preparation · Premium Exosomes",
    deviceDesc: "We use advanced growth factor extraction kits that ensure plateletes are activated to release a high concentration of growth factors (GFC) in an acellular serum, minimizing inflammatory reactions and discomfort.",
    deviceFeatures: ["Medical centrifuge isolation", "Acellular growth factor concentrate", "Pure stem-cell derived exosomes", "Sterile lab prep"],
    deviceImage: "https://images.unsplash.com/photo-1631217871099-88310a909a32?w=800&h=450&fit=crop&auto=format",
    comparisonRows: [
      { label: "Active Agent", ours: "Pure Acellular GFC & sterile exosomes", standard: "Basic PRP containing red/white blood cells" },
      { label: "Discomfort", ours: "Very low pain (no cell debris or acid activation)", standard: "Painful, inflammatory burning" },
      { label: "Active Yield", ours: "10x higher concentrated active growth factors", standard: "Low, uncalibrated platelet count" },
      { label: "Safety", ours: "Closed, sterile single-use medical kits", standard: "Open laboratory test tubes" },
      { label: "Method", ours: "Dr. Ruxana's precision micro-droplet injections", standard: "General deep bolus syringe shots" }
    ],
    whoNeedsDesc: "Highly recommended for early to moderate hair thinning, hair loss, under-eye hollows, acne scars, and aging skin.",
    notSuitable: "Bleeding disorders, anticoagulant medications, active local skin infection, pregnancy.",
    whoNeedsItems: [
      { tag: "Hair thinning & loss", desc: "Regaining volume and crown hair density." },
      { tag: "Androgenetic Alopecia", desc: "Slowing down male and female pattern baldness." },
      { tag: "Thin, crepey skin", desc: "Building dermal density under eyes and on cheeks." },
      { tag: "Deep acne scarring", desc: "Accelerating structural collagen repair inside scars." },
      { tag: "Under-eye circles", desc: "Plumping hollow tear troughs using your own cell factors." },
      { tag: "Skin rejuvenation", desc: "Boosting cellular healing for a bright, firm skin tone." }
    ],
    sessionPlanDesc: "A baseline program consists of 3 to 4 sessions, spaced 4 weeks apart, with maintenance every 6 months.",
    sessionPlanSteps: [
      { n: "01", label: "Isolation & Incubation", duration: "30 min", detail: "Blood is collected in GFC isolation tubes. Centrifuged to separate active growth factors. Exosomes are thawed in a sterile field." },
      { n: "02", label: "Micro-Droplet Delivery", duration: "30 min", detail: "Numbing is removed. Dr. Ruxana uses micro-droplet injection techniques to target follicles or skin layers." },
      { n: "03", label: "RED Phototherapy Calm", duration: "15 min", detail: "LED Red Light is applied to soothe injection points, calm swelling, and accelerate healing." }
    ],
    timelineDesc: "Follicles activate and collagen density increases over a 3-month cellular cycle.",
    timelineItems: [
      { when: "Immediately", what: "Minor bumpiness and localized swelling. Resolves in 12–24 hours." },
      { when: "Week 1", what: "Skin feels hydrated. Hair shedding rate begins to drop." },
      { when: "Month 1", what: "Fine baby hairs appear in thinning zones. Skin texture firms." },
      { when: "Month 3", what: "Peak results. Visibly denser hair and shallower acne scars." },
      { when: "Month 6+", what: "Cellular renewal continues. Maintenance maintains the density." }
    ],
    ctaRating: "280+ patients regenerated",
    ctaTitle: "Ready to restore",
    ctaTitle2: "hair volume or skin density?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Include a medical assessment of your follicle density or skin thickness to map the target injection areas.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹10,000 (PRP) / ₹18,000 (GFC)" },
      { label: "Duration", val: "60–75 minutes" },
      { label: "Recommended", val: "3–4 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "12–24 hours (swelling/bumps)" },
      { label: "Performed by", val: "Dr. Ruxana" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  }
};
