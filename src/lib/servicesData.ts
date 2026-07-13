export interface ServiceData {
  id: string;
  title: string;
  titleEmphasized: string;
  experienceNo: string;
  description: string;
  heroRating: string;
  heroImage: string;
  stats: Array<{ n: string; l: string }>;
  performedByLabel?: string;
  performedByName?: string;
  performedBySub?: string;

  // Section 2: What is this
  whatIsThisTag?: string;
  whatIsThisTitle: string;
  whatIsThisEmphasized: string;
  whatIsThisDesc1: string;
  whatIsThisDesc2: string;
  benefits: Array<{ icon: string; b: string; d: string }>;
  clinicalNote?: string;
  clinicalNoteLabel?: string;
  sideImage: string;

  // Section 3: Machine / Technology
  technologyTag?: string;
  ourDeviceLabel?: string;
  machineTitle: string;
  machineEmphasized: string;
  deviceName: string;
  deviceSub: string;
  deviceDesc: string;
  deviceFeatures: string[];
  deviceImage: string;
  comparisonTitle?: string;
  comparisonRows: Array<{ label: string; ours: string; standard: string }>;

  // Section 4: Who needs this
  whoNeedsTag?: string;
  whoNeedsTitle?: string;
  whoNeedsTitleEmphasized?: string;
  whoNeedsDesc: string;
  notSuitable: string;
  whoNeedsItems: Array<{ tag: string; desc: string }>;

  // Section 5: Session plan
  sessionPlanTag?: string;
  sessionPlanTitle?: string;
  sessionPlanTitleEmphasized?: string;
  sessionPlanDesc: string;
  sessionPlanSteps: Array<{ n: string; label: string; duration: string; detail: string }>;

  // Section 6: Results timeline
  timelineTag?: string;
  timelineTitle?: string;
  timelineTitleEmphasized?: string;
  timelineDesc: string;
  timelineItems: Array<{ when: string; what: string; icon?: string }>;

  // Section 7: Final CTA
  ctaRating: string;
  ctaTitle: string;
  ctaTitle2?: string;
  ctaEmphasized: string;
  ctaDesc: string;
  ctaQuickFacts: Array<{ label: string; val: string }>;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  ctaSecondaryButtonText?: string;
  ctaSecondaryButtonLink?: string;
  ctaTrustSignals?: string[];
  ctaImage: string;

  // Custom Labels & Form overrides
  standardClinicLabel?: string;
  notSuitableLabel?: string;
  ctaFormTitle?: string;
  ctaFormDropdownLabel?: string;
  ctaFormMessageLabel?: string;
  ctaFormMessagePlaceholder?: string;
  ctaFormButtonText?: string;
  ctaFormFooter?: string;
  ctaFormSuccessTitle?: string;
  ctaFormSuccessDesc?: string;

  // Before & After section
  beforeAfter?: {
    beforeImage: string;
    afterImage: string;
    treatmentName: string;
    testimonialText: string;
    patientName: string;
    subtitle: string;
  };
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  "hifu": {
    id: "hifu",
    title: "Non-Surgical Lift",
    titleEmphasized: "HIFU.",
    experienceNo: "Signature Experience",
    description: "Lift, tighten, and redefine your facial contours with High-Intensity Focused Ultrasound (HIFU). This advanced treatment stimulates your body's natural collagen production for firmer, smoother, and younger-looking skin—without surgery or downtime.",
    heroRating: "4.8 · Rated by 190+ patients",
    heroImage: "/services/hifu/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Doctor-Supervised Care",
    performedBySub: "Safe • Personalised • Professional",
    stats: [
      { n: "1–2", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "3-6m", l: "Months Progressive Results" },
      { n: "100%", l: "Non-Surgical" }
    ],
    whatIsThisTag: "What Is HIFU?",
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a superficial lift.",
    whatIsThisDesc1: "HIFU (High-Intensity Focused Ultrasound) works deep beneath the skin by delivering focused ultrasound energy to the SMAS layer—the same structural layer addressed during a surgical facelift. Rather than treating only the surface, it activates your body's natural collagen renewal process, gradually lifting, firming, and improving skin quality over the following months.",
    whatIsThisDesc2: "With advanced ultrasound technology, every treatment is carefully customised to your facial anatomy and aesthetic goals, creating subtle, natural-looking rejuvenation without needles, incisions, or recovery time.",
    benefits: [
      { icon: "🧬", b: "Deep Collagen Activation", d: "Stimulates collagen where structural support begins." },
      { icon: "📈", b: "Tightens & Lifts Over Time", d: "Gradual improvement with beautifully natural results." },
      { icon: "✂️", b: "No Surgery or Downtime", d: "Return to normal activities immediately." },
      { icon: "🛡️", b: "Safe & Clinically Proven", d: "A non-invasive treatment trusted worldwide." }
    ],
    clinicalNote: "Treatment parameters are carefully customised to your skin condition, facial anatomy, and aesthetic goals for precise, natural-looking results.",
    sideImage: "/services/hifu/2.webp",
    machineTitle: "Focused energy,",
    machineEmphasized: "calibrated for lifting.",
    deviceName: "Advanced Treatment Platform",
    deviceSub: "MEDICAL-GRADE • PRECISION • PERSONALISED CARE",
    deviceDesc: "We use advanced, clinically proven aesthetic technologies designed to deliver precise, consistent, and comfortable treatments. Every procedure is tailored to your skin condition and treatment goals, ensuring safe care with natural-looking results.",
    deviceFeatures: ["Medical-Grade Technology", "Precision Treatment", "Personalised Protocols", "Comfort Focused"],
    deviceImage: "/services/hifu/hifu.webp",
    comparisonTitle: "COSMO HOME vs Conventional Treatment",
    comparisonRows: [
      { label: "Technology", ours: "Medical-grade aesthetic devices", standard: "Standard equipment" },
      { label: "Treatment Plan", ours: "Personalised after skin assessment", standard: "One-size-fits-all approach" },
      { label: "Precision", ours: "Targeted treatment protocols", standard: "Limited customisation" },
      { label: "Comfort", ours: "Designed for patient comfort", standard: "May vary by device" },
      { label: "Safety", ours: "Doctor-supervised protocols", standard: "Varies by provider" }
    ],
    whoNeedsDesc: "Ideal for patients experiencing early to moderate skin laxity, softening jawlines, or loss of neck definition.",
    notSuitable: "Pregnancy, active skin infections, open wounds, metal implants in the treatment area.",
    whoNeedsItems: [
      { tag: "Sagging jawline", desc: "Improve jawline definition by tightening loose skin and restoring facial contours." },
      { tag: "Loss of elasticity", desc: "Stimulate natural collagen production to improve skin firmness and resilience." },
      { tag: "Fine Lines & Wrinkles", desc: "Smooth early signs of ageing for fresher, younger-looking skin." },
      { tag: "Cheek & Neck Laxity", desc: "Lift and firm areas affected by collagen loss without surgery." },
      { tag: "Preventive Anti-Ageing", desc: "Maintain youthful skin by boosting collagen before significant ageing occurs." },
      { tag: "Non-Surgical Rejuvenation", desc: "Perfect for those seeking visible lifting and tightening without downtime." }
    ],
    sessionPlanDesc: "Most patients require only 1 or 2 sessions to achieve their desired lifting results, with annual maintenance.",
    sessionPlanSteps: [
      { n: "01", label: "Assessment & Deep Mapping", duration: "75 min", detail: "Every HIFU journey begins with a comprehensive consultation. Your practitioner evaluates skin laxity, facial contours, and collagen quality before mapping the treatment areas to create a personalised lifting plan. The treatment is then performed using carefully selected ultrasound depths for precise, natural-looking rejuvenation." },
      { n: "02", label: "Verification & Touch-up", duration: "60 min", detail: "Your skin's response and collagen activation are carefully reviewed. If needed, targeted touch-up treatment is performed to enhance lifting, refine contours, and ensure balanced, consistent results as collagen continues to rebuild naturally." },
      { n: "03", label: "Maintenance", duration: "45 min", detail: "A maintenance session may be recommended based on your skin's ageing process and treatment goals. This helps preserve collagen production, maintain skin firmness, and prolong your naturally lifted appearance over time." }
    ],
    timelineDesc: "HIFU stimulates your body's natural collagen renewal process, so improvements appear gradually. Results continue to develop over the following weeks, revealing firmer, smoother, and naturally lifted skin.",
    timelineItems: [
      { when: "Immediately", what: "Your skin may feel slightly firmer, with subtle tightening and a refreshed appearance. Mild redness or tenderness usually settles within a few hours." },
      { when: "Day 3–7", what: "Collagen stimulation begins beneath the skin. While changes remain subtle, your skin starts feeling firmer and more resilient." },
      { when: "Week 4–8", what: "Visible lifting becomes more noticeable as collagen production increases. Facial contours appear smoother, tighter, and better defined." },
      { when: "After 3 Months", what: "Peak collagen remodelling delivers natural-looking lifting, improved skin elasticity, and enhanced facial definition." },
      { when: "Month 6+", what: "Results continue to mature as collagen strengthens over time. With proper skincare and maintenance, improvements can be long-lasting." }
    ],
    ctaRating: "190+ patients lifted",
    ctaTitle: "Ready to reveal",
    ctaTitle2: "your best skin?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Your consultation includes a comprehensive skin assessment, personalised treatment planning, and expert guidance tailored to your aesthetic goals—designed to deliver safe, natural-looking results with confidence.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹35,000 / session" },
      { label: "Duration", val: "60–90 minutes" },
      { label: "Recommended", val: "1–2 sessions" },
      { label: "Frequency", val: "Every 12 months" },
      { label: "Downtime", val: "None" },
      { label: "Performed by", val: "Doctor-Supervised Care" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
    ,
    beforeAfter: {
      beforeImage: "/services/before&after/hifu/before.webp",
      afterImage: "/services/before&after/hifu/after.webp",
      treatmentName: "HIFU Non-Surgical Facial Lift",
      testimonialText: "The sagging skin around my jawline and cheeks was keeping me from looking rested. After one session of HIFU, my face feels lifted and the contours are beautifully defined.",
      patientName: "Nadia P., 42",
      subtitle: "Facial lifting and jawline tightening case study"
    },
  },
  "hydrafacial-medifacial": {
    id: "hydrafacial-medifacial",
    title: "Skin Renewal",
    titleEmphasized: "Experience.",
    experienceNo: "Signature Experience ",
    description: "Reveal cleaner, smoother, and deeply hydrated skin with our medical-grade Hydrafacial treatment. Designed to cleanse, exfoliate, extract impurities, and nourish the skin, it restores lasting radiance with no downtime.",
    heroRating: "4.9 · Rated by 380+ patients",
    heroImage: "/services/hydrafacial-medifacial/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Medical Aesthetic Team",
    performedBySub: "Safe • Personalised • Professional",
    stats: [
      { n: "1", l: "Session shows visible glow" },
      { n: "0", l: "Days downtime" },
      { n: "30–45 Min", l: "Treatment duration" },
      { n: "All Skin Types", l: "Safe & suitable" }
    ],
    whatIsThisTag: "WHAT IS HYDRAFACIAL?",
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a salon facial.",
    whatIsThisDesc1: "Hydrafacial is a medical-grade skin rejuvenation treatment that goes beyond traditional facials. Using advanced vortex technology, it deeply cleanses, gently exfoliates, removes impurities, and infuses the skin with nourishing serums—all in one relaxing treatment.",
    whatIsThisDesc2: "Unlike conventional facials, every Hydrafacial is customised to your skin's unique needs, helping improve hydration, skin texture, clarity, and overall radiance without discomfort or downtime.",
    benefits: [
      { icon: "🧼", b: "Deep Cleansing", d: "Removes excess oil, debris, and impurities from congested pores." },
      { icon: "💧", b: "Intense Hydration", d: "Infuses antioxidant-rich serums for healthier, smoother skin." },
      { icon: "✨", b: "Instant Glow", d: "Leaves the skin visibly refreshed, brighter, and more radiant." },
      { icon: "🌿", b: "Suitable for All Skin Types", d: "Gentle, non-invasive treatment with no downtime." }
    ],
    clinicalNote: "Every Hydrafacial treatment is customised according to your skin type, concerns, and hydration needs, ensuring safe, comfortable, and naturally radiant results.",
    sideImage: "/services/hydrafacial-medifacial/2.webp",
    machineTitle: "The machine",
    machineEmphasized: "behind your glow.",
    deviceName: "HydraFacial MD® Elite",
    deviceSub: "MEDICAL-GRADE • ADVANCED HYDRATION • SKIN REJUVENATION",
    deviceDesc: "HydraFacial MD® Elite combines deep cleansing, gentle exfoliation, painless extraction, and intensive serum infusion in one advanced treatment. Using patented Vortex-Fusion® technology, it removes impurities while delivering nourishing ingredients that instantly improve skin hydration, clarity, and radiance.",
    deviceFeatures: ["Vortex-Fusion® Technology", "Medical-Grade Hydration", "Gentle Extraction", "Customised Serum Infusion"],
    deviceImage: "/services/hydrafacial-medifacial/Hydrafacial  Medifacial.webp",
    comparisonTitle: "COSMO HOME vs CONVENTIONAL FACIAL",
    comparisonRows: [
      { label: "Technology", ours: "Medical-grade HydraFacial platform", standard: "Traditional facial equipment" },
      { label: "Cleansing", ours: "Deep pore cleansing with vortex technology", standard: "Surface-level cleansing only" },
      { label: "Extraction", ours: "Gentle vacuum extraction without squeezing", standard: "Manual comedone extraction" },
      { label: "Hydration", ours: "Infuses customised antioxidant-rich serums", standard: "Basic moisturising products" },
      { label: "Customisation", ours: "Personalised treatment protocols for every skin type", standard: "Limited treatment customisation" },
      { label: "Recovery", ours: "No downtime with immediate glow", standard: "Temporary redness or irritation may occur" }
    ],
    whoNeedsDesc: "Perfect for anyone looking to improve skin health, hydration, and overall radiance. Hydrafacial is suitable for most skin types and can be personalised to address your unique skin concerns.",
    notSuitable: "Active skin infections, open wounds, severe rosacea flare-ups, or known allergies to treatment ingredients. A consultation will determine if Hydrafacial is right for you.",
    whoNeedsItems: [
      { tag: "Dull or tired skin", desc: "Restore healthy radiance and revive skin that appears tired, stressed, or lacking vitality." },
      { tag: "Congested pores", desc: "Deeply cleanse pores by removing excess oil, blackheads, and everyday impurities." },
      { tag: "Uneven Skin Tone", desc: "Improve the appearance of pigmentation, post-acne marks, and uneven complexion." },
      { tag: "Dry & Dehydrated Skin", desc: "Replenish moisture levels to leave skin soft, plump, and comfortably hydrated." },
      { tag: "Fine Lines & Rough Texture", desc: "Smooth the skin's surface while improving texture and supporting a youthful glow." },
      { tag: "Regular Skin Maintenance", desc: "An excellent monthly treatment to maintain healthy, refreshed, and radiant skin throughout the year." }
    ],
    sessionPlanDesc: "Your Hydrafacial journey is personalised to your skin's condition and goals. Each session builds on the previous one, helping restore healthier, clearer, and naturally radiant skin.",
    sessionPlanSteps: [
      { n: "01", label: "Skin Analysis & Deep Cleansing", duration: "", detail: "Your skin is professionally assessed before beginning a customised Hydrafacial. The treatment deeply cleanses, exfoliates, and removes impurities while preparing your skin for targeted serum infusion." },
      { n: "02", label: "Extraction & Hydration", duration: "", detail: "Using advanced vortex technology, congested pores are gently cleared before antioxidant-rich serums are infused to replenish hydration and restore skin balance." },
      { n: "03", label: "Nourishment & Skin Renewal", duration: "", detail: "Customised active ingredients are delivered deep into the skin to improve texture, brighten the complexion, and support long-term skin health and radiance." },
      { n: "04", label: "Maintenance & Glow", duration: "", detail: "Regular maintenance treatments help preserve hydration, minimise congestion, and keep your skin consistently smooth, healthy, and naturally glowing throughout the year." }
    ],
    timelineDesc: "Hydrafacial delivers an instant glow while continuously improving skin health with regular treatments. Here's what you can expect after each session.",
    timelineItems: [
      { when: "Immediately", what: "Your skin feels deeply cleansed, hydrated, and noticeably smoother with an instant healthy glow." },
      { when: "DAY 2–7", what: "Hydration levels improve, pores appear cleaner, and your complexion looks brighter and more refreshed." },
      { when: "WEEK 2–4", what: "Skin texture becomes smoother, tone appears more even, and overall radiance continues to improve." },
      { when: "AFTER 3 SESSIONS", what: "Consistent treatments help reduce congestion, refine pores, improve skin clarity, and support healthier-looking skin." },
      { when: "MONTH 3+", what: "With regular maintenance, your skin remains hydrated, balanced, and naturally radiant while supporting long-term skin health." }
    ],
    ctaRating: "380+ patients transformed",
    ctaTitle: "Ready for healthier,",
    ctaTitle2: "glowing skin?",
    ctaEmphasized: "Start today.",
    ctaDesc: "Your consultation includes a comprehensive skin assessment and a personalised Hydrafacial treatment plan tailored to your skin's unique needs. Experience deep cleansing, lasting hydration, and naturally radiant skin with expert care.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹15,000 / session" },
      { label: "Duration", val: "45–75 minutes" },
      { label: "Recommended", val: "3–6 sessions" },
      { label: "Frequency", val: "Every 4–6 weeks" },
      { label: "Downtime", val: "None" },
      { label: "Performed by", val: "Medical Aesthetic Team" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
    ,
    beforeAfter: {
      beforeImage: "/services/before&after/hydra facial/before.webp",
      afterImage: "/services/before&after/hydra facial/after.webp",
      treatmentName: "Hydrafacial Deep Skin Renewal",
      testimonialText: "My skin was congested and dry from travel. The Hydrafacial completely cleared out my pores and restored a soft, plump radiance that lasted for weeks.",
      patientName: "Rhea S., 29",
      subtitle: "Deep pore extraction and skin plumping"
    },
  },
  "mesopeels-carbon-peel": {
    id: "mesopeels-carbon-peel",
    title: "Surface Polish",
    titleEmphasized: "Peels.",
    experienceNo: "Signature Experience ",
    description: "Medical-grade Mesopeels and Carbon Peel treatments gently resurface the skin by exfoliating damaged cells, refining pores, reducing pigmentation, and controlling excess oil. ",
    heroRating: "4.9 · Rated by 310+ patients",
    heroImage: "/services/mesopeelscarbonpeel/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "TREATMENT BY",
    performedBySub: "Safe • Ethical • Personalised",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "0–2", l: "Days downtime" },
      { n: "24h", l: "Visible skin improvement" },
      { n: "100%", l: "Dermatologist supervised" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a beauty scrub.",
    whatIsThisDesc1: "Mesopeels and Carbon Peels utilize organic acids and laser wavelengths to target acne, sebum, and texture at the cellular level. By matching the chemical peel pH to your skin's barrier, we achieve controlled epidermal renewal.",
    whatIsThisDesc2: "The Carbon Laser Peel uses a nano-carbon paste that binds to cellular debris inside the pores. A Q-switched ND:YAG laser then sweeps over, vaporizing the carbon along with dead cells, resulting in instant pore contraction and surface smoothness.",
    benefits: [
      { icon: "🧬", b: "Cellular Renewal", d: "Stimulates healthy skin regeneration and smoother texture." },
      { icon: "🧪", b: "Personalised Peeling", d: "Medical-grade peel strength tailored to your skin." },
      { icon: "⚡", b: "Deep Pore Purification", d: "Removes excess oil, debris, and surface impurities." },
      { icon: "✨", b: "Brighter & Refined Skin", d: "Improves clarity, texture, and overall skin radiance." }
    ],
    clinicalNote: "Treatment protocols are customised according to your skin type, pigmentation, sensitivity, and aesthetic goals for safe, predictable results.",
    sideImage: "/services/mesopeelscarbonpeel/2.webp",
    machineTitle: "Double technology",
    machineEmphasized: "for clear skin.",
    deviceName: "Helios III Q-Switched Laser & Mesoestetic® Peels",
    deviceSub: "FDA CLEARED • MEDICAL-GRADE • PROFESSIONAL SKIN RESURFACING",
    deviceDesc: "The Helios III Q-Switched ND:YAG Laser works together with Mesoestetic® medical peels to deliver a dual-action skin renewal treatment. While the laser targets excess pigment, carbon particles, and impurities, the peel exfoliates damaged skin, improves texture, and stimulates healthy cellular renewal for clearer, smoother, and more radiant skin.",
    deviceFeatures: ["Q-Switched ND:YAG Laser", "Mesoestetic® Medical Peels", "Medical Skin Resurfacing", "Precision Skin Renewal"],
    deviceImage: "/services/mesopeelscarbonpeel/3.webp",
    comparisonTitle: "COSMO HOME vs Standard Clinic",
    comparisonRows: [
      { label: "Technology", ours: "Pharma-grade acids & carbon laser vaporization", standard: "Superficial cosmetic scrubs" },
      { label: "Skin Renewal", ours: "Laser-assisted target extraction", standard: "Manual squeezing only" },
      { label: "Pigmentation", ours: "Calibrated pH to skin barrier threshold", standard: "Over-the-counter high acid peels" },
      { label: "Pore Refinement", ours: "Deep thermal regulation of sebaceous glands", standard: "Temporary topical drying" },
      { label: "Recovery", ours: "Minimal, backed by medical recovery serums", standard: "Severe peeling and redness" }
    ],
    whoNeedsDesc: "Highly recommended for patients with oily skin, chronic blackheads, open pores, active acne, or post-acne pigmentation.",
    notSuitable: "Active skin infections, open wounds, severe sunburn, recent Isotretinoin (Roaccutane) therapy, or pregnancy. A dermatologist consultation is recommended before treatment.",
    whoNeedsItems: [
      { tag: "Active acne breakouts", desc: "Helps reduce active acne by deeply cleansing pores and controlling excess oil." },
      { tag: "Congested pores", desc: "Clears blackheads, whiteheads, and trapped impurities for cleaner pores." },
      { tag: "Excess oil production", desc: "Balances sebum production to reduce shine and future breakouts." },
      { tag: "Post-acne pigmentation", desc: "Gradually fades acne marks and promotes a brighter, more even complexion." },
      { tag: "Rough or uneven texture", desc: "Exfoliates damaged skin to reveal a smoother and softer surface." },
      { tag: "Enlarged pores", desc: "Refines pore appearance for a cleaner and more polished skin texture." }
    ],
    sessionPlanDesc: "A personalised treatment programme of 4–6 sessions, scheduled every 2–3 weeks, gradually improves skin clarity, texture, pore size, and pigmentation while maintaining your skin's natural balance.",
    sessionPlanSteps: [
      { n: "01", label: "Skin Assessment & Peel Selection", duration: "45 min", detail: "Your skin is carefully analysed to evaluate oil levels, pigmentation, acne, and sensitivity. A customised Mesopeel formulation is then selected to match your skin concerns safely and effectively." },
      { n: "02", label: "Mesopeel / Carbon Peel Treatment", duration: "45 min", detail: "Medical-grade peeling solutions or Carbon Laser technology exfoliate dead skin cells, unclog pores, regulate excess oil, and stimulate healthy skin renewal for a brighter complexion." },
      { n: "03", label: "Skin Recovery & Protection", duration: "30 min", detail: "The treatment concludes with calming serums, hydration, and barrier-repair products to minimise redness, restore comfort, and protect freshly renewed skin." }
    ],
    timelineDesc: "Skin becomes clearer, smoother, and more balanced with each session as healthy cell renewal continues.",
    timelineItems: [
      { when: "Immediately", what: "Texture feels smoother and fresher. Mild redness may occur and usually settles within a few hours." },
      { when: "Day 3–5", what: "Dead skin sheds naturally. Pores appear cleaner, oil production becomes more balanced, and skin looks brighter." },
      { when: "Week 2", what: "Breakouts reduce, pigmentation begins to fade, and overall skin tone becomes noticeably clearer." },
      { when: "After 3 sessions", what: "Visible improvement in acne, pores, skin texture, and complexion with healthier, more even-looking skin." },
      { when: "Month 3+", what: "Long-term collagen renewal supports smoother texture, refined pores, and radiant, balanced skin with regular maintenance." }
    ],
    ctaRating: "310+ patients purified",
    ctaTitle: "Ready to reveal",
    ctaTitle2: "clearer, healthier skin?",
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
    ,
    beforeAfter: {
      beforeImage: "/services/before&after/carbon feel/before.webp",
      afterImage: "/services/before&after/carbon feel/after.webp",
      treatmentName: "Skin Resurfacing Mesopeel",
      testimonialText: "I was struggling with skin roughness and active acne. The combination of carbon peeling and mesopeels completely polished my skin texture and cleared up breakouts.",
      patientName: "Tara M., 31",
      subtitle: "Chemical resurfacing for texture and oil control"
    },
  },
  "laser-pigment-reduction": {
    id: "laser-pigment-reduction",
    title: "Tone Correction",
    titleEmphasized: "Laser.",
    experienceNo: "Signature Experience",
    description: "Targeted laser technology safely reduces pigmentation, melasma, sun spots, and uneven skin tone by breaking down excess melanin, revealing a brighter, clearer, and more radiant complexion.",
    heroRating: "4.8 · Rated by 220+ patients",
    heroImage: "/services/laser-pigment-reduction/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Laser Specialist",
    performedBySub: "Medical Grade • Safe • Precise",
    stats: [
      { n: "3–6", l: "Sessions recommended" },
      { n: "1–3", l: "Days micro-flaking" },
      { n: "14d", l: "Visible fading begins" },
      { n: "100%", l: "Doctor supervised" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a bleaching cream.",
    whatIsThisDesc1: "Laser Pigment Reduction uses advanced laser energy to target excess melanin beneath the skin's surface without harming surrounding tissue. Melasma, sun spots, freckles, and post-inflammatory pigmentation are gradually broken into microscopic particles that your body naturally clears away.",
    whatIsThisDesc2: "Unlike topical creams that only lighten the surface, precision laser technology treats pigmentation at its source while encouraging a clearer, brighter, and more even complexion with minimal downtime.",
    benefits: [
      { icon: "🧬", b: "Precision Pigment Targeting", d: "Breaks down excess melanin while protecting healthy skin." },
      { icon: "🎯", b: "Even Skin Tone", d: "Reduces pigmentation for a brighter, more balanced complexion." },
      { icon: "✨", b: "Natural Pigment Clearance", d: "Your body gradually removes fragmented pigment after treatment." },
      { icon: "🛡️", b: "Safe for Indian Skin", d: "Doctor-calibrated settings minimise the risk of post-inflammatory pigmentation." }
    ],
    clinicalNote: "Laser parameters are calibrated to Fitzpatrick skin types to prevent post-inflammatory hyperpigmentation.",
    sideImage: "/services/laser-pigment-reduction/2.webp",
    machineTitle: "High-precision",
    machineEmphasized: "pigment shattering.",
    deviceName: "Helios III ND:YAG Laser System",
    deviceSub: "FDA CLEARED • FRACTIONAL ND:YAG • MEDICAL GRADE LASER",
    deviceDesc: "The Helios III Q-Switched ND:YAG Laser precisely targets unwanted melanin beneath the skin without damaging surrounding tissue. Its dual-wavelength fractional technology safely treats melasma, freckles, sun spots, and post-inflammatory pigmentation while supporting smoother, brighter skin with minimal downtime.",
    deviceFeatures: ["Fractional ND:YAG Technology", "Dual Wavelength (1064nm / 532nm)", "Precision Pigment Targeting", "Safe for Indian Skin"],
    deviceImage: "/services/laser-pigment-reduction/Laser Pigment Reduction.webp",
    comparisonTitle: "COSMO HOME vs Standard Clinic",
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
      { n: "01", label: "Wood's Lamp Mapping", duration: "45 min", detail: "A detailed skin assessment is performed to evaluate pigment depth. A patch test helps determine the safest and most effective laser settings." },
      { n: "02", label: "Fractional Laser Delivery", duration: "45 min", detail: "Precise laser sweeps over the pigment zones. Skin is cooled continuously for comfort." },
      { n: "03", label: "Recovery & Protection", duration: "30 min", detail: "A soothing recovery mask, antioxidant serums, and broad-spectrum SPF are applied to calm the skin and protect your results." }
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
    ,
    beforeAfter: {
      beforeImage: "/services/before&after/Laser Pigment Reduction/before.webp",
      afterImage: "/services/before&after/Laser Pigment Reduction/after.webp",
      treatmentName: "Laser Pigment Reduction",
      testimonialText: "I struggled with stubborn melasma patches on my cheeks for years. After three sessions of the Helios III laser, the pigmentation has faded dramatically and my skin tone is finally even and bright.",
      patientName: "Meera R., 34",
      subtitle: "Targeted melanin shatter for hormonal melasma and sun spots"
    },
  },
  "laser-scar-reduction": {
    id: "laser-scar-reduction",
    title: "Texture Resurfacing",
    titleEmphasized: "Laser.",
    experienceNo: "Signature Experience",
    description: "Advanced fractional laser resurfacing smooths acne scars, surgical scars, and uneven skin texture while stimulating natural collagen remodeling for healthier, smoother skin.",
    heroRating: "4.9 · Rated by 180+ patients",
    heroImage: "/services/laser-scar-reduction/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Dermatologist Supervised",
    performedBySub: "Safe • Personalised • Professional",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "2–4", l: "Days recovery redness" },
      { n: "3–4 Weeks", l: "Visible skin renewal" },
      { n: "100%", l: "Doctor performed" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a superficial skin peeling.",
    whatIsThisDesc1: "Laser Scar Reduction utilizes fractional laser resurfacing to create micro-channels of thermal energy in the scar tissue, triggering your body to replace old scarred fibers with fresh, smooth collagen.",
    whatIsThisDesc2: "At Cosmo Home, we treat acne scars (boxcar, rolling, icepick), surgical scars, and stretch marks. By adjusting the laser depth and density, each treatment is precisely customised to target scar tissue while preserving the surrounding healthy skin.",
    benefits: [
      { icon: "🧬", b: "Dermal remodeling", d: "Stimulates healthy collagen remodeling" },
      { icon: "🎯", b: "Precision Targeting", d: "Targets deep scar tissue with calibrated laser energy." },
      { icon: "⚡", b: "Fractional healing", d: "Healthy surrounding skin supports faster healing" },
      { icon: "✨", b: "Texture smoothing", d: "Improves uneven skin texture for a smoother appearance." }
    ],
    clinicalNote: "Deep, tethered scars may benefit from combination treatments such as subcision or collagen-stimulating therapies for enhanced results.",
    sideImage: "/services/laser-scar-reduction/2.webp",
    machineTitle: "Fractional remodeling",
    machineEmphasized: "for smoother skin.",
    deviceName: "CO2 Fractional / Er:YAG Laser System",
    deviceSub: "FDA Cleared · Medical Resurfacing · High-Precision Scar Targeting",
    deviceDesc: "Our fractional laser system creates microscopic thermal treatment zones (MTZs) in the skin. The surrounding untreated tissue allows for rapid healing and collagen production, dramatically reducing downtime while maximizing scar remodelling.",
    deviceFeatures: ["Fractional ablation & coagulation", "Precision spot adjustment", "Smart-scan energy delivery", "Deep tissue thermal penetration"],
    deviceImage: "/services/laser-scar-reduction/Laser Scar Reduction.webp",
    comparisonTitle: "COSMO HOME vs Standard Clinic",
    comparisonRows: [
      { label: "Laser Source", ours: "CO2 / Er:YAG fractional medical lasers", standard: "Non-fractional lasers or simple dermabrasion" },
      { label: "Skin Healing", ours: "Micro-treatment zones preserve tissue bridges", standard: "Full surface damage causes long downtime" },
      { label: "Collagen Growth", ours: "Deep thermal remodeling of fibrotic tissues", standard: "Superficial surface heating only" },
      { label: "Improvement", ours: "50%–80% texture lift in 4–6 sessions", standard: "Superficial skin softening only" },
      { label: "Risk Control", ours: "Calibrated scan grids to prevent burns", standard: "High risk of post-treatment scabbing" }
    ],
    whoNeedsDesc: "Ideal for patients with acne scars, surgical scars, injury scars, stretch marks, or uneven skin texture.",
    notSuitable: "Active cystic acne, history of keloids, pregnancy, active skin infection.",
    whoNeedsItems: [
      { tag: "Rolling acne scars", desc: "Lifting wavy, sloping scars tethered in the deep tissue." },
      { tag: "Boxcar scars", desc: "Smoothing sharp-edged crater-like acne scars." },
      { tag: "Icepick scars", desc: "Tightening deep, narrow pinprick scars." },
      { tag: "Surgical scars", desc: "Softening and flattening hard surgical incision lines." },
      { tag: "Stretch marks", desc: "Improves the appearance of stretch marks by stimulating collagen remodeling." },
      { tag: "Large pore texture", desc: "Improves enlarged pores and refines overall skin texture." }
    ],
    sessionPlanDesc: "A program of 4–6 sessions, spaced 4–6 weeks apart, yields significant texture improvement.",
    sessionPlanSteps: [
      { n: "01", label: "Structural Mapping & Numbing", duration: "60 min", detail: "Scars are mapped according to depth and density. Medical numbing cream is applied for comfort." },
      { n: "02", label: "Fractional Resurfacing", duration: "45 min", detail: "Fractional laser micro-beams are delivered to scar tissue, creating controlled micro-channels that stimulate collagen remodeling while integrated cooling enhances comfort." },
      { n: "03", label: "Growth Factor & Recovery", duration: "30 min", detail: "Medical recovery serums and barrier-repair creams are applied to soothe the skin, reduce redness, and support collagen regeneration." },
      { n: "04", label: "Healing Review", duration: "15 min", detail: "Healing progress is reviewed, skin recovery is assessed, and aftercare recommendations are adjusted for the next session." }
    ],
    timelineDesc: "Scar tissue breaks down and is replaced by fresh collagen over a 3-month cycle.",
    timelineItems: [
      { when: "Immediately", what: "Mild redness and warmth are expected. Tiny micro-treatment dots may be visible." },
      { when: "Day 2–4", what: "Tiny micro-crusts naturally shed as new skin begins to emerge. Mild tightness is normal." },
      { when: "Week 2", what: "The surface feels smoother. Early texture improvement." },
      { when: "Month 1", what: "New collagen remodeling improves scar depth and skin texture." },
      { when: "Month 3+", what: "Scar texture continues to soften, skin becomes smoother, and overall texture appears more even." }
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
      { label: "Performed by", val: "Medical Aesthetic Team" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
    ,
    beforeAfter: {
      beforeImage: "/services/before&after/Laser Scar Reduction/before.webp",
      afterImage: "/services/before&after/Laser Scar Reduction/after.webp",
      treatmentName: "Fractional Laser Scar Resurfacing",
      testimonialText: "Acne scars used to be my biggest insecurity. After four sessions of fractional laser resurfacing, my skin texture is smooth, and the rolling scars are barely visible.",
      patientName: "Kabir D., 27",
      subtitle: "Fractional skin resurfacing for acne and rolling scars"
    },
  },
  "phototherapy": {
    id: "phototherapy",
    title: "Light Rejuvenation",
    titleEmphasized: "Phototherapy.",
    experienceNo: "Signature Experience",
    description: "This medical-grade LED light therapy heals active acne, soothes inflammation, reduces redness, and recharges skin cells for a healthier, revitalized complexion.",
    heroRating: "4.9 · Rated by 150+ patients",
    heroImage: "/services/phototherapy/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Dermatologist Supervised",
    performedBySub: "Safe • Gentle • Medical Grade",
    stats: [
      { n: "6–10", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "Instant", l: "Skin soothing" },
      { n: "100%", l: "Pain-free & relaxing" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a cosmetic light mask.",
    whatIsThisDesc1: "Phototherapy utilizes high-density, medical-grade LED (Light Emitting Diode) wavelengths to stimulate cellular activity, reduce inflammation, and accelerate tissue repair.",
    whatIsThisDesc2: "At Cosmo Home, we use the Dermalux Tri-Wave MD canopy. We deliver clinically validated wavelengths (415nm Blue, 633nm Red, and 830nm Near-Infrared) simultaneously or individually to target acne-causing bacteria, calm vascular redness, and support cellular repair and promote natural healing.",
    benefits: [
      { icon: "🧬", b: "Cellular activation", d: "Increases ATP production to support cellular repair." },
      { icon: "🛡️", b: "Acne Defense", d: "Helps eliminate acne-causing bacteria and reduces active breakouts." },
      { icon: "⚡", b: "Redness Relief", d: "Calms inflammation, reduces redness, and soothes sensitive skin." },
      { icon: "🌊", b: "Collagen Support", d: "Stimulates collagen production to strengthen and repair skin tissue." }
    ],
    clinicalNote: "Phototherapy is often used immediately after active procedures to reduce redness and speed healing by 50%.",
    sideImage: "/services/phototherapy/2.webp",
    machineTitle: "Validated wavelengths",
    machineEmphasized: "for cellular health.",
    deviceName: "Dermalux Tri-Wave MD",
    deviceSub: "FDA Cleared · Multi-Award LED System · Hospital Grade",
    deviceDesc: "Dermalux Tri-Wave MD delivers three clinically validated LED wavelengths to support skin repair, reduce inflammation, and improve overall skin health at therapeutic power levels.",
    deviceFeatures: ["Simultaneous Tri-Wave Technology", "Medical-grade Narrowband LEDs", "Clinically Validated Protocols", "Non-thermal Light Therapy"],
    deviceImage: "/services/phototherapy/Phototherapy.webp",
    comparisonTitle: "COSMO HOME vs Standard Clinic",
    comparisonRows: [
      { label: "Light Source", ours: "Narrowband medical-grade LEDs", standard: "Broadband low-power consumer LEDs" },
      { label: "Therapeutic power output", ours: "High intensity target dosage", standard: "Low battery home mask lights" },
      { label: "Wavelengths", ours: "Simultaneous 415nm Blue / 633nm Red / 830nm Near-Infrared", standard: "Uncalibrated cosmetic light colors" },
      { label: "Efficacy", ours: "Clinically validated for acne and psoriasis", standard: "Temporary cosmetic relaxation" },
      { label: "Skin Health", ours: "Non-thermal LED light with zero thermal risk", standard: "Heat build-up from low-quality bulbs" }
    ],
    whoNeedsDesc: "Excellent for active acne breakouts, rosacea, generalized redness, eczema, or post-procedure skin healing.",
    notSuitable: "Photosensitising medications, light-sensitive epilepsy, or active skin cancer.",
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
      { n: "02", label: "LED Light Therapy", duration: "30 min", detail: "Medical-grade LED wavelengths are delivered to stimulate skin repair, reduce inflammation, and support cellular renewal." },
      { n: "03", label: "Hydration & Protection", duration: "15 min", detail: "Hydrating skincare and SPF protection are applied to support recovery and maintain treatment results." }
    ],
    timelineDesc: "Redness decreases and radiance increases starting from your very first session.",
    timelineItems: [
      { when: "Immediately", what: "Skin feels calmer, hydrated, and more comfortable. Redness begins to reduce." },
      { when: "Day 2–3", what: "Active breakouts begin to settle with reduced redness and inflammation." },
      { when: "Week 2", what: "Overall redness decreases; skin feels less sensitive." },
      { when: "After 6 sessions", what: "Noticeable improvement in acne and overall skin clarity." },
      { when: "Month 2+", what: "Long-term support for healthier skin, improved resilience, and lasting results." }
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
    ,
    beforeAfter: {
      beforeImage: "/services/before&after/Phototherapy/before.webp",
      afterImage: "/services/before&after/Phototherapy/after.webp",
      treatmentName: "LED Red & Blue Light Therapy",
      testimonialText: "I had severe facial redness and persistent inflammation. The LED light therapy sessions completely calmed my skin barrier and sped up healing after my peeling session.",
      patientName: "Aditi V., 25",
      subtitle: "Medical-grade LED phototherapy for healing and anti-redness"
    },
  },
  "excimer-laser": {
    id: "excimer-laser",
    title: "Targeted 308nm UVB",
    titleEmphasized: "Excimer.",
    experienceNo: "Signature Experience",
    description: "Targeted 308nm UVB light precisely treats vitiligo, psoriasis, and alopecia areata while minimizing exposure to surrounding healthy skin.",
    heroRating: "4.8 · Rated by 120+ patients",
    heroImage: "/services/excimer-laser/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Dermatologist Supervised",
    performedBySub: "Safe • Personalised • Professional",
    stats: [
      { n: "10–20", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "4–6 weeks", l: "Repigmentation may begin" },
      { n: "100%", l: "Doctor performed" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "broadband UV exposure.",
    whatIsThisDesc1: "The Excimer Laser is a specialized medical laser that delivers a highly concentrated beam of <strong>308nm monochromatic UVB light</strong> directly to affected skin patches.",
    whatIsThisDesc2: "It is the gold standard treatment for autoimmune skin conditions like vitiligo, psoriasis, and alopecia areata. By targeting only the affected areas, it minimizes UV exposure to surrounding healthy skin, stimulating melanocytes or calming hyperactive T-cells with unmatched safety.",
    benefits: [
      { icon: "🔬", b: "Monochromatic UVB", d: "Concentrated 308nm light targets only the lesion" },
      { icon: "✨", b: "Melanocyte Activation", d: "Stimulates melanocyte activity to encourage repigmentation." },
      { icon: "🛡️", b: "Local Immune Control", d: "Modulates overactive immune cells within affected skin." },
      { icon: "🎯", b: "Precision Targeting", d: "Delivers UVB only to affected skin while protecting surrounding tissue." }
    ],
    clinicalNote: "Treatment dose is personalized using Minimal Erythema Dose (MED) testing to maximize effectiveness while minimizing the risk of irritation.",
    sideImage: "/services/excimer-laser/2.webp",
    machineTitle: "Precise spot delivery",
    machineEmphasized: "of monochromatic UVB.",
    deviceName: "308nm Excimer Laser System",
    deviceSub: "FDA Cleared · Monochromatic UVB · Autoimmune Skin Solution",
    deviceDesc: "The 308nm Excimer Laser delivers high-intensity monochromatic UVB directly to vitiligo and psoriasis lesions, allowing targeted treatment while minimizing exposure to surrounding healthy skin.",
    deviceFeatures: ["Monochromatic 308nm wavelength", "Precise spot size adjustment", "High-fluence targeted delivery", "Minimal exposure to healthy skin"],
    deviceImage: "/services/excimer-laser/3.webp",
    comparisonTitle: "COSMO HOME vs Standard Clinic",
    comparisonRows: [
      { label: "Light Spectrum", ours: "Monochromatic 308nm UVB (targeted)", standard: "Broadband UV light chambers" },
      { label: "Healthy Skin Safety", ours: "Minimized exposure to surrounding healthy skin", standard: "Full-body exposure (UV damage risk)" },
      { label: "Repigmentation", ours: "Stimulates melanocyte activity for repigmentation", standard: "Slow, uneven pigment response" },
      { label: "Clearing Speed", ours: "Visible improvement with consistent treatment", standard: "Low intensity requiring months" },
      { label: "Control", ours: "Calibrated spot dosing by dermatologist", standard: "Standard non-selective UV timers" }
    ],
    whoNeedsDesc: "Indicated for patients with localized vitiligo (loss of pigment), plaque psoriasis, eczema, or patchy hair loss (alopecia areata).",
    notSuitable: "History of skin cancer, xeroderma pigmentosum, photosensitivity disorders, or active lupus.",
    whoNeedsItems: [
      { tag: "Localized vitiligo", desc: "Restoring pigment to white patches on the face, hands, or body." },
      { tag: "Plaque psoriasis", desc: "Clearing thick, scaly skin plaques on elbows, knees, or scalp." },
      { tag: "Alopecia areata", desc: "Stimulating hair follicles in circular bald patches on the scalp." },
      { tag: "Localized eczema", desc: "Persistent localized eczema not responding to conventional treatment." },
      { tag: "Localized dermatitis", desc: "Reducing inflammation in chronic localized dermatitis." }
    ],
    sessionPlanDesc: "Sessions are brief and performed 2 to 3 times a week. Significant results are usually seen in 10–20 sessions.",
    sessionPlanSteps: [
      { n: "01", label: "Dose Calibration", duration: "15 min", detail: "The treatment area is assessed and the optimal 308nm UVB dose is determined using clinical evaluation and MED testing." },
      { n: "02", label: "Targeted Excimer Delivery", duration: "20 min", detail: "The Excimer handpiece delivers targeted 308nm UVB directly to the affected skin. Most patients experience little to no discomfort." },
      { n: "03", label: "Post-Treatment Care", duration: "5 min", detail: "Protective skincare is applied and post-treatment care instructions are provided to support recovery." }
    ],
    timelineDesc: "Clinical improvement develops gradually over several weeks, depending on the treated condition and individual response.",
    timelineItems: [
      { when: "Immediately", what: "Most patients experience little to no discomfort. Mild pinkness may appear for 12–24 hours." },
      { when: "Week 2", what: "Psoriasis scaling begins to reduce and plaques gradually soften." },
      { when: "Week 4–6", what: "Visible improvement begins based on the treated condition, with early repigmentation often seen in vitiligo." },
      { when: "After 15 sessions", what: "Noticeable improvement in treated lesions with continued clinical progress." },
      { when: "Month 3+", what: "Treatment response is reviewed and maintenance sessions may be recommended when appropriate." }
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
    ,
    beforeAfter: {
      beforeImage: "/services/before&after/Excimer Laser/before.webp",
      afterImage: "/services/before&after/Excimer Laser/after.webp",
      treatmentName: "308nm UVB Target Repigmentation",
      testimonialText: "My vitiligo patches had not responded to topical creams for months. The Excimer laser started repigmenting the spots within just six sessions. Truly grateful.",
      patientName: "Manoj R., 34",
      subtitle: "Targeted UVB phototherapy for vitiligo and psoriasis patches"
    },
  },
  "laser-hair-reduction": {
    id: "laser-hair-reduction",
    title: "Smooth Skin",
    titleEmphasized: "Lasting Confidence.",
    experienceNo: "Signature Experience",
    description: "Experience medical-grade, comfort-focused laser hair reduction utilizing advanced triple-wavelength technology suitable for a wide range of skin tones.",
    heroRating: "4.9 · Rated by 450+ patients",
    heroImage: "/services/laser-hair-reduction/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Aesthetic Therapist",
    performedBySub: "Safe • Personalised • Professional",
    stats: [
      { n: "6–8", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "2 weeks", l: "Hair shedding begins" },
      { n: "100%", l: "Advanced Cooling" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "painful waxing or shaving.",
    whatIsThisDesc1: "Laser Hair Reduction precisely targets the hair follicle with controlled thermal energy, reducing future hair growth while helping keep the surrounding skin comfortable and protected.",
    whatIsThisDesc2: "At Cosmo Home, we use the triple-wavelength Soprano Titanium laser system, combining 755nm, 810nm, and 1064nm wavelengths for effective treatment across a wide range of skin tones. The integrated cooling system helps maximize comfort throughout the procedure with minimal downtime.",
    benefits: [
      { icon: "⭐", b: "Triple Wavelength", d: "Combines 755nm, 810nm & 1064nm wavelengths for comprehensive hair reduction." },
      { icon: "❄️", b: "ICE Plus™ cooling", d: "Continuous contact cooling helps maximize comfort while protecting the skin." },
      { icon: "📡", b: "In-Motion sweeps", d: "Continuous sweeping motion delivers even energy for greater treatment comfort." },
      { icon: "🛡️", b: "Wide Skin Compatibility", d: "Suitable for a wide range of skin tones with dermatologist-guided treatment." }
    ],
    clinicalNote: "A complimentary patch test and follicle check are completed prior to your first session.",
    sideImage: "/services/laser-hair-reduction/2.webp",
    machineTitle: "Triple-wavelength laser",
    machineEmphasized: "with sapphire cooling.",
    deviceName: "Soprano Titanium Laser System",
    deviceSub: "FDA Cleared · Award-Winning SHR™ Technology · Sapphire Cooling",
    deviceDesc: "The Soprano Titanium combines Alexandrite (755nm), Diode (810nm), and Nd:YAG (1064nm) wavelengths in a single handpiece. Its ICE Plus™ sapphire cooling technology helps maximize comfort while delivering effective hair reduction across a wide range of skin tones.",
    deviceFeatures: ["755nm • 810nm • 1064nm", "ICE Plus™ Sapphire Cooling", "SHR™ In-Motion Technology", "Suitable for Multiple Skin Types"],
    deviceImage: "/services/laser-hair-reduction/Laser Pigment Reduction.webp",
    comparisonTitle: "COSMO HOME vs Standard Clinic",
    comparisonRows: [
      { label: "Wavelengths", ours: "Alexandrite (755nm) + Diode (810nm) + YAG (1064nm)", standard: "Single diode wavelength or IPL" },
      { label: "Pain Level", ours: "SHR™ sweeping motion with enhanced comfort", standard: "Higher discomfort with single-shot systems" },
      { label: "Cooling Tip", ours: "ICE Plus™ continuous sapphire cooling", standard: "Basic air cooling or limited cooling" },
      { label: "Skin Safety", ours: "Suitable for a wide range of skin tones", standard: "May require extra caution for darker skin tones" },
      { label: "Applicator Size", ours: "Large treatment spot for faster sessions", standard: "Smaller treatment area" }
    ],
    whoNeedsDesc: "For anyone looking for long-term reduction of unwanted facial or body hair, relief from ingrown hairs, or a more comfortable alternative to frequent shaving or waxing.",
    notSuitable: "Pregnancy, active skin infection or cancer in the treatment area, and very light, white, or grey hair (limited laser response).",
    whoNeedsItems: [
      { tag: "Unwanted body hair", desc: "Long-term reduction of unwanted hair on the legs, arms, chest, or back." },
      { tag: "Facial hair control", desc: "Long-term facial hair reduction with less dependence on waxing or threading." },
      { tag: "Ingrown hairs", desc: "Helps reduce ingrown hairs and follicle irritation after repeated shaving or waxing." },
      { tag: "Shaving rashes", desc: "Helps reduce razor bumps and shaving-related skin irritation." },
      { tag: "Hirsutism", desc: "Supports the management of unwanted hair growth associated with hormonal conditions." }
    ],
    sessionPlanDesc: "Hair follicles are treated during their active growth phase. Most patients achieve significant long-term hair reduction over a series of 6–8 sessions.",
    sessionPlanSteps: [
      { n: "01", label: "Consultation & Patch Test", duration: "30 min", detail: "Skin type, hair characteristics, and medical history are assessed. A patch test helps determine the safest and most effective treatment settings." },
      { n: "02", label: "Laser Hair Reduction Treatment", duration: "30–90 min", detail: "A cooling gel is applied and the laser handpiece glides smoothly over the treatment area, delivering controlled energy to the hair follicles while maximizing comfort." },
      { n: "03", label: "Post-Treatment Care", duration: "10 min", detail: "Cooling products and aftercare instructions are provided to soothe the skin and support a comfortable recovery." }
    ],
    timelineDesc: "Treated hairs gradually shed over the following 1–2 weeks, while hair regrowth becomes slower and finer with each session.",
    timelineItems: [
      { when: "Immediately", what: "Mild redness around the hair follicles is normal and usually settles within a few hours." },
      { when: "Day 7–14", what: "Treated hairs naturally shed from the follicles over the next 1–2 weeks." },
      { when: "Week 4", what: "New hair growth is often finer, lighter, and slower than before treatment." },
      { when: "After 3 sessions", what: "Noticeable reduction in hair density and slower regrowth are commonly seen after several sessions." },
      { when: "Month 6+", what: "Long-term hair reduction with smoother skin and fewer ingrown hairs." }
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
    ,
    beforeAfter: {
      beforeImage: "/services/before&after/Laser Hair Reduction/before.webp",
      afterImage: "/services/before&after/Laser Hair Reduction/after.webp",
      treatmentName: "Smooth Skin Hair Reduction",
      testimonialText: "Daily shaving used to irritate my skin. The triple-wavelength laser hair reduction has completely cleared the stubble and left my skin smooth with zero bumps.",
      patientName: "Pooja K., 30",
      subtitle: "Triple-wavelength permanent hair reduction"
    },
  },
  "muscle-sculpting": {
    id: "muscle-sculpting",
    title: "Body Definition",
    titleEmphasized: "Sculpting.",
    experienceNo: "Signature Experience",
    description: "Build muscle strength, improve body definition, and reduce stubborn fat with high-intensity electromagnetic technology that is completely non-invasive.",
    heroRating: "4.8 · Rated by 160+ patients",
    heroImage: "/services/muscle-sculpting/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Body Contouring Specialist",
    performedBySub: "Safe • Personalised • Professional",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "20k", l: "Contractions in 30 mins" },
      { n: "100%", l: "Non-invasive" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a vibration belt or EMS gadget.",
    whatIsThisDesc1: "Muscle Sculpting uses High-Intensity Focused Electromagnetic (HIFEM) technology to induce supramaximal muscle contractions that are impossible to achieve through voluntary exercise.",
    whatIsThisDesc2: "During a single 30-minute session, the target muscles contract approximately 20,000 times. This intense workload forces the muscle tissue to adapt, leading to deep remodeling of its inner structure—resulting in muscle building and simultaneous localized fat reduction.",
    benefits: [
      { icon: "💪", b: "Supramaximal contraction", d: "Stimulates 100% of muscle fibers (workouts reach 40%)" },
      { icon: "📈", b: "Core Strength Enhancement", d: "Strengthens abdominal and core muscles to improve posture and stability." },
      { icon: "✨", b: "Non-surgical lifting", d: "Firm and round glutes or define abdomen safely" },
      { icon: "🔥", b: "Fat Metabolism Boost", d: "Intense muscle contractions stimulate natural fat metabolism around the treated area." }
    ],
    clinicalNote: "Treatment intensity is customized based on your body composition and goals to maximize muscle definition safely.",
    sideImage: "/services/muscle-sculpting/2.webp",
    machineTitle: "High-Intensity Muscle",
    machineEmphasized: "Contraction Technology.",
    deviceName: "HIFEM Body Sculpting System",
    deviceSub: "FDA Cleared · Medical-Grade HIFEM · Non-Invasive Toning",
    deviceDesc: "The HIFEM system penetrates deep into the subcutaneous tissue, inducing rapid muscle contractions. HIFEM technology delivers supramaximal muscle contractions that strengthen targeted muscles while stimulating natural fat metabolism—creating a firmer, more sculpted body without surgery or downtime.",
    deviceFeatures: ["HIFEM Technology", "Dual dual-paddle applicators", "Custom intensity programs", "Zero thermal energy"],
    deviceImage: "/services/muscle-sculpting/3.webp",
    comparisonTitle: "COSMO HOME vs Standard Clinic",
    comparisonRows: [
      { label: "Technology", ours: "High-Intensity Focused Electromagnetic (HIFEM)", standard: "Electrical Muscle Stimulation (EMS)" },
      { label: "Depth", ours: "Reaches deep muscle layers for maximum contraction", standard: "Superficial skin surface nerve twitching" },
      { label: "Contraction", ours: "20,000 supramaximal contractions in one session", standard: "Low frequency vibrations" },
      { label: "Fat Loss", ours: "Stimulates natural fat metabolism alongside muscle building", standard: "No effect on fat layers" },
      { label: "Safety", ours: "FDA-cleared, non-invasive body sculpting technology", standard: "Unregulated beauty spa belts" }
    ],
    whoNeedsDesc: "Ideal for individuals close to their target weight who want to build muscle definition, enhance body contours, improve posture, and reduce stubborn fat without surgery.",
    notSuitable: "Pacemakers, metal implants in the treatment area, pregnancy, active hernia.",
    whoNeedsItems: [
      { tag: "Abdominal definition", desc: "Toning and defining abdominal muscle bands." },
      { tag: "Gluteal lift", desc: "Firming and rounded lifting of the buttocks without squats." },
      { tag: "Thigh & calf sculpting", desc: "Toning and strengthening quadriceps and calf muscles." },
      { tag: "Postpartum core recovery", desc: "Helps strengthen weakened abdominal muscles after pregnancy." },
      { tag: "Arm firming", desc: "Toning triceps and biceps for structured arms." },
      { tag: "Core strengthening", desc: "Improves abdominal stability, posture, and everyday functional strength." }
    ],
    sessionPlanDesc: "A complete course consists of 4 to 6 sessions scheduled 2 to 3 days apart (completed in 2 weeks).",
    sessionPlanSteps: [
      { n: "01", label: "Abdominal/Gluteal Mapping", duration: "30 min", detail: "Our clinical specialist measures target zones, outlines muscle boundaries, and sets energy levels." },
      { n: "02", label: "Focused HIFEM Session", duration: "30 min", detail: "Applicators are secured. Intensity is slowly stepped up to your comfort ceiling. Feels like powerful but comfortable muscle contractions similar to an intense workout." },
      { n: "03", label: "Recovery & Aftercare", duration: "10 min", detail: "Applicators are removed, the treated area is assessed, and aftercare guidance is provided. Patients can immediately return to normal daily activities." }
    ],
    timelineDesc: "Muscle contractions occur immediately, while visible definition gradually develops over the following 4–6 weeks.",
    timelineItems: [
      { when: "Immediately", what: "Feels like you've completed an intense core workout. Mild muscle fatigue is normal." },
      { when: "Day 2–3", what: "Target area feels tighter and core posture feels stronger." },
      { when: "Week 2", what: "Early muscle definition becomes visible. The treated area feels firmer and more toned." },
      { when: "Week 4", what: "Muscle definition becomes more noticeable. The abdomen appears firmer and glutes look more lifted." },
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
    ,
    beforeAfter: {
      beforeImage: "/services/before&after/Muscle Sculpting/before.webp",
      afterImage: "/services/before&after/Muscle Sculpting/after.webp",
      treatmentName: "HIFEM Abdominal Definition",
      testimonialText: "Even with regular exercise, I couldn't get my core definition back after pregnancy. Four sessions of muscle sculpting completely firmed up my abdominal wall.",
      patientName: "Sarah L., 36",
      subtitle: "High-intensity electromagnetic body definition"
    },
  },
  "exosomes-prp-gfc": {
    id: "exosomes-prp-gfc",
    title: "Advanced Regenerative",
    titleEmphasized: "PRP & GFC.",
    experienceNo: "Signature Experience",
    description: "Restore hair density and improve skin structure with advanced regenerative therapies that utilize growth factors to stimulate natural cellular repair.",
    heroRating: "4.9 · Rated by 280+ patients",
    heroImage: "/services/exosomes-prp-gfc/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Doctor Supervised",
    performedBySub: "Safe • Personalised • Professional",
    stats: [
      { n: "3–4", l: "Sessions recommended" },
      { n: "12-24h", l: "Minor swelling" },
      { n: "3-4w", l: "Initial results" },
      { n: "100%", l: "Doctor performed" }
    ],
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a temporary filler.",
    whatIsThisDesc1: "Exosomes, PRP (Platelet-Rich Plasma), and GFC (Growth Factor Concentrate) are advanced bio-regenerative treatments that use naturally occurring growth factors and cell-signaling molecules to repair damaged tissue and stimulate hair follicles.",
    whatIsThisDesc2: "Instead of synthetic chemicals, these therapies harness your body's own natural growth factors (PRP/GFC) or laboratory-purified exosomes to stimulate collagen, repair scars, and reverse hair thinning. Every treatment is prepared in a sterile clinical laboratory and administered by our board-certified cosmetic dermatologists.",
    benefits: [
      { icon: "🧬", b: "Bio-regenerative healing", d: "Uses natural cell-signaling pathways for repair" },
      { icon: "🧪", b: "Purified Growth Factors", d: "Highly concentrated growth factors support tissue repair and regeneration." },
      { icon: "✨", b: "Cellular Communication", d: "Exosomes deliver regenerative signals that support collagen production and tissue repair." },
      { icon: "🌱", b: "Hair Follicle Stimulation", d: "Helps reactivate dormant follicles to encourage healthier hair growth." }
    ],
    clinicalNote: "Blood is processed using a medical centrifuge to obtain a highly concentrated layer of growth factors and platelets.",
    sideImage: "/services/exosomes-prp-gfc/2.webp",
    machineTitle: "Precision Growth",
    machineEmphasized: "factor isolation.",
    deviceName: "Medical PRP & GFC Preparation System",
    deviceSub: "Medical Centrifuge · Sterile Preparation · Premium Exosomes",
    deviceDesc: "Blood is processed using a medical-grade centrifuge to prepare highly concentrated PRP or purified Growth Factor Concentrate (GFC), delivering regenerative proteins while minimizing unwanted inflammatory components.",
    deviceFeatures: ["Medical-grade centrifuge", "High-concentration PRP/GFC", "Precision injection protocol", "Sterile preparation system"],
    deviceImage: "/services/exosomes-prp-gfc/3.webp",
    comparisonTitle: "COSMO HOME vs Standard Clinic",
    comparisonRows: [
      { label: "Active Agent", ours: "Concentrated Growth Factors & Regenerative Signals", standard: "Basic PRP containing red/white blood cells" },
      { label: "Discomfort", ours: "Minimal discomfort with precision injection techniques", standard: "Painful, inflammatory burning" },
      { label: "Active Yield", ours: "Highly concentrated regenerative growth factors", standard: "Low, uncalibrated platelet count" },
      { label: "Safety", ours: "Closed, sterile single-use medical kits", standard: "Open laboratory test tubes" },
      { label: "Method", ours: "Precision doctor-controlled injection protocol", standard: "General deep bolus syringe shots" }
    ],
    whoNeedsDesc: "Ideal for patients experiencing early to moderate hair thinning, skin aging, acne scars, or those seeking natural skin and hair regeneration.",
    notSuitable: "Bleeding disorders, blood-thinning medications, active skin infections, pregnancy, or uncontrolled medical conditions.",
    whoNeedsItems: [
      { tag: "Hair thinning & loss", desc: "Regaining volume and crown hair density." },
      { tag: "Androgenetic Alopecia", desc: "Helps improve hair density in male and female pattern hair loss." },
      { tag: "Thin, crepey skin", desc: "Improves skin thickness, elasticity, and overall skin quality." },
      { tag: "Deep acne scarring", desc: "Stimulates collagen remodeling to improve the appearance of acne scars." },
      { tag: "Under-eye circles", desc: "Improves skin quality and supports natural collagen production in the under-eye area." },
      { tag: "Skin rejuvenation", desc: "Supports collagen production for smoother, firmer, and healthier-looking skin." }
    ],
    sessionPlanDesc: "A typical treatment plan includes 3–4 sessions performed 4 weeks apart, followed by maintenance treatments as recommended by your dermatologist.",
    sessionPlanSteps: [
      { n: "01", label: "PRP/GFC Preparation", duration: "30 min", detail: "A small blood sample is collected and processed using a medical centrifuge to prepare concentrated PRP or GFC. Exosomes are prepared under sterile clinical conditions when included in the treatment." },
      { n: "02", label: "Micro-Droplet Delivery", duration: "30 min", detail: "Once the numbing cream is removed, our cosmetic dermatologist performs precise micro-droplet injections into the targeted skin or scalp." },
      { n: "03", label: "LED Red Light Recovery", duration: "15 min", detail: "LED red light therapy helps reduce post-treatment redness, supports skin recovery, and improves patient comfort." }
    ],
    timelineDesc: "Hair follicles and collagen remodeling continue to improve gradually over the following 3–6 months.",
    timelineItems: [
      { when: "Immediately", what: "Mild redness, swelling, or tenderness may occur and typically settles within 12–24 hours." },
      { when: "Week 1", what: "Early skin recovery begins. Hair shedding may gradually reduce in treated areas." },
      { when: "Month 1", what: "Early improvements in skin texture become visible. Fine new hair growth may begin to appear in treated areas." },
      { when: "Month 3", what: "Noticeable improvements in hair density, skin quality, and acne scar appearance continue to develop." },
      { when: "Month 6+", what: "Continued regeneration is supported with maintenance treatments as recommended." }
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
      { label: "Performed by", val: "Medical Aesthetic Team" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
    ,
    beforeAfter: {
      beforeImage: "/services/before&after/injections/before.webp",
      afterImage: "/services/before&after/injections/after.webp",
      treatmentName: "GFC Hair Growth Therapy",
      testimonialText: "My hair was thinning rapidly on the crown. After three sessions of Growth Factor Concentrate (GFC), my shedding has stopped completely and new thick hair has filled in.",
      patientName: "Nikhil P., 29",
      subtitle: "Autologous growth factor concentrate for hair density"
    },
  }

  ,
  "botox": {
    id: "botox",
    title: "Wrinkle Relaxing",
    titleEmphasized: "Botox.",
    experienceNo: "Signature Experience",
    description: "Soften fine lines, frown lines, and wrinkles with precision-targeted botulinum toxin injections for a naturally refreshed and youthful expression.",
    heroRating: "4.9 · Rated by 320+ patients",
    heroImage: "/services/hifu/1.webp",
    performedByLabel: "👩‍⚕️ Administered by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • Precise • Natural Results",
    stats: [
      { n: "10-15 Min", l: "Procedure time" },
      { n: "0", l: "Days downtime" },
      { n: "3-5 Days", l: "Visible onset" },
      { n: "3-6 Mo", l: "Results duration" }
    ],
    whatIsThisTag: "What is Botox?",
    whatIsThisTitle: "This is",
    whatIsThisEmphasized: "subtle smoothing.",
    whatIsThisDesc1: "Botox is a purified protein that temporarily relaxes target facial muscles, softening dynamic wrinkles caused by expressions like frowning or smiling. Our approach focuses on custom calibration to maintain your natural facial movement.",
    whatIsThisDesc2: "Every session is tailored to your unique muscle anatomy and aesthetic goals, avoiding a frozen appearance while smoothing forehead lines, crow's feet, and frown lines.",
    benefits: [
      { icon: "✨", b: "Smooths Fine Lines", d: "Visibly softens forehead lines, frown lines, and crow's feet." },
      { icon: "🛡️", b: "Preventive Care", d: "Keeps static wrinkles from forming over time." },
      { icon: "⚡", b: "Quick Procedure", d: "Done in 15 minutes with micro-needles." },
      { icon: "🌿", b: "Natural Expression", d: "Retains facial expression while softening aging signs." }
    ],
    clinicalNote: "Doses are precisely calibrated to preserve natural facial expression and muscle dynamics.",
    sideImage: "/services/hifu/2.webp",
    machineTitle: "Precision isolation",
    machineEmphasized: "for muscle relaxing.",
    deviceName: "FDA-Approved Purified Proteins",
    deviceSub: "PREMIUM BRANDS • STERILE SYSTEM • PINPOINT PRECISION",
    deviceDesc: "We exclusively use original, FDA-approved botulinum toxin formulations to guarantee maximum safety and predictable, natural-looking results.",
    deviceFeatures: ["FDA-Approved", "Original Products", "Precise Dosing", "Comfort-Focused Needle"],
    deviceImage: "/services/hifu/hifu.webp",
    comparisonTitle: "COSMO HOME vs Standard Clinic",
    comparisonRows: [
      { label: "Dosage", ours: "Calibrated micro-dosing for soft movement", standard: "Standardized high-dose frozen look" },
      { label: "Product", ours: "100% genuine FDA-approved brands", standard: "Varying or unverified formulations" },
      { label: "Injector", ours: "Board-certified cosmetic dermatologist", standard: "General staff or assistants" },
      { label: "Comfort", ours: "Ultra-fine medical needles for comfort", standard: "Standard injection needles" }
    ],
    whoNeedsDesc: "Perfect for anyone looking to soften crow's feet, forehead creases, frown lines, or seeking hyperhidrosis (excessive sweating) control.",
    notSuitable: "Pregnancy, breastfeeding, neuromuscular disorders, active skin infection at injection sites.",
    whoNeedsItems: [
      { tag: "Forehead creases", desc: "Soften horizontal forehead lines caused by expressions." },
      { tag: "Frown lines", desc: "Smooth dynamic creases between the eyebrows (glabella)." },
      { tag: "Crow's feet", desc: "Gently soften fine smile lines around the eyes." },
      { tag: "Jaw slimming", desc: "Relax masseter muscles to soften the jawline contour." }
    ],
    sessionPlanDesc: "Treatments are scheduled every 3 to 6 months depending on individual muscle metabolism and lines.",
    sessionPlanSteps: [
      { n: "01", label: "Muscle Mapping", duration: "15 min", detail: "Dr. Ruxana evaluates your facial movements, muscle strength, and anatomy to mark precise injection points." },
      { n: "02", label: "Micro-Injection", duration: "10 min", detail: "Using ultra-fine needles, the formulation is placed into target muscle bands with minimal discomfort." },
      { n: "03", label: "Review Call", duration: "5 min", detail: "A follow-up review is completed at 10-14 days to evaluate onset symmetry and perform touch-ups if needed." }
    ],
    timelineDesc: "Relaxation begins in a few days, reaching full effect by day 10.",
    timelineItems: [
      { when: "Immediately", what: "Tiny bumps at injection points typically resolve within 30 minutes. Return to normal activities." },
      { when: "Day 3–5", what: "Initial muscle relaxation becomes noticeable as dynamic lines start to soften." },
      { when: "Day 10–14", what: "Peak results are visible. Skin texture looks smoother and more refreshed." },
      { when: "Month 3+", what: "Muscle movement gradually returns, signaling the ideal window for maintenance." }
    ],
    ctaRating: "320+ refreshed stories",
    ctaTitle: "Ready to soften",
    ctaTitle2: "dynamic expression lines?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Include a private clinical mapping of your facial dynamic lines to design a natural-looking rejuvenation roadmap.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹350 / unit" },
      { label: "Duration", val: "15-20 minutes" },
      { label: "Onset", val: "3-5 days" },
      { label: "Downtime", val: "None" },
      { label: "Performed by", val: "Dermatologist" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "fillers": {
    id: "fillers",
    title: "Volume Restoration",
    titleEmphasized: "Dermal Fillers.",
    experienceNo: "Signature Experience",
    description: "Restore facial contours, enhance lip structure, and smooth deep creases with premium hyaluronic acid fillers tailored to your bone structure.",
    heroRating: "4.8 · Rated by 210+ patients",
    heroImage: "/services/hifu/1.webp",
    performedByLabel: "👩‍⚕️ Administered by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • Sculpted • Beautiful Balance",
    stats: [
      { n: "30-45 Min", l: "Procedure time" },
      { n: "0-1", l: "Days recovery bumps" },
      { n: "Instant", l: "Visible volume" },
      { n: "9-18 Mo", l: "Results duration" }
    ],
    whatIsThisTag: "What are Dermal Fillers?",
    whatIsThisTitle: "This is",
    whatIsThisEmphasized: "structural balance.",
    whatIsThisDesc1: "Dermal fillers use hyaluronic acid—a naturally occurring sugar molecule in the skin—to restore volume loss, sculpt contours, and hydrate skin layers. Our philosophy focuses on restoring lost support structures to ensure natural proportions.",
    whatIsThisDesc2: "We specialize in cheek contouring, under-eye hollows, lip refinement, and jawline definition, ensuring results blend seamlessly with your native facial anatomy.",
    benefits: [
      { icon: "✨", b: "Instant Lift & Volume", d: "Restores cheeks, temples, and lips immediately." },
      { icon: "🧬", b: "Natural Hyaluronic Acid", d: "Absorbable medical gels that hydrate the skin matrix." },
      { icon: "⚖️", b: "Proportional Harmony", d: "Rebalances facial symmetry and profile aesthetics." },
      { icon: "⏱️", b: "Long-Lasting Results", d: "Sustained improvement for 9 to 18 months." }
    ],
    clinicalNote: "We exclusively use premium, cohesive hyaluronic acid gels for smooth integration with tissue layers.",
    sideImage: "/services/hifu/2.webp",
    machineTitle: "Structural support",
    machineEmphasized: "using premium gels.",
    deviceName: "Hyaluronic Acid Fillers",
    deviceSub: "FDA-APPROVED GELS • SEAMLESS INTEGRATION • EXPERT ANATOMICAL PLACEMENT",
    deviceDesc: "We select specific gel densities (from soft lip fillers to firm structural jaw fillers) using top-tier global brands to guarantee predictable lifting and safety.",
    deviceFeatures: ["FDA-Approved GELS", "Cohesive Technology", "Anatomical Precision", "Reversible Option"],
    deviceImage: "/services/hifu/hifu.webp",
    comparisonTitle: "COSMO HOME vs Standard Clinic",
    comparisonRows: [
      { label: "Approach", ours: "Volume restoration based on bone support", standard: "Overfilling soft tissue (puffy look)" },
      { label: "Products", ours: "Premium, cohesive, clean-integration gels", standard: "Budget fillers with high swelling rates" },
      { label: "Injector", ours: "Board-certified dermatologist only", standard: "Delegated non-dermatologist injector" },
      { label: "Dissolver", ours: "Emergency hyaluronidase protocols on site", standard: "Limited safety management support" }
    ],
    whoNeedsDesc: "Ideal for patients experiencing under-eye hollows, flat cheeks, thin lips, softening jawlines, or deep nasolabial folds.",
    notSuitable: "Pregnancy, active local infections, known hypersensitivity to hyaluronic acid or lidocaine.",
    whoNeedsItems: [
      { tag: "Under-eye hollows", desc: "Refresh tired eyes by filling tear trough depressions." },
      { tag: "Lip enhancement", desc: "Refine lip border symmetry and hydration naturally." },
      { tag: "Cheek contouring", desc: "Restore volume to mid-face curves for a soft lift." },
      { tag: "Deep nasolabial folds", desc: "Smooth shadows between the nose and mouth corners." }
    ],
    sessionPlanDesc: "Sessions are planned with staged volume increases over time to allow natural gel settling.",
    sessionPlanSteps: [
      { n: "01", label: "Anatomical Assessment", duration: "20 min", detail: "Dr. Ruxana evaluates facial symmetry, skin laxity, and fat pad structure to establish a balanced placement roadmap." },
      { n: "02", label: "Volume Placement", duration: "30 min", detail: "The target regions are sanitized and fillers are placed using precision needles or blunt microcannulas for safety." },
      { n: "03", label: "Settling Review", duration: "10 min", detail: "The placement is reviewed and soft molding is done. Standard post-care guide is reviewed." }
    ],
    timelineDesc: "Volume is visible immediately, reaching final soft integration in 2 weeks.",
    timelineItems: [
      { when: "Immediately", what: "Volume is visible. Mild swelling and localized tenderness are common." },
      { when: "Day 3–5", what: "Any minor swelling or micro-bruising begins to settle as the gel integrates." },
      { when: "Week 2", what: "Gel integration is complete, revealing final soft, natural results." },
      { when: "Month 12+", what: "Volume slowly biodegrades over months, signaling the time for maintenance." }
    ],
    ctaRating: "210+ volume cases",
    ctaTitle: "Ready to restore",
    ctaTitle2: "natural contours?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Get a comprehensive volume mapping of your face to restore support structures safely.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹25,000 / syringe" },
      { label: "Duration", val: "30-45 minutes" },
      { label: "Onset", val: "Immediate" },
      { label: "Downtime", val: "1-2 days" },
      { label: "Performed by", val: "Dermatologist" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "vampire-lift": {
    id: "vampire-lift",
    title: "Regenerative Glow",
    titleEmphasized: "Vampire Lift.",
    experienceNo: "Signature Experience",
    description: "Combine microneedling with your own growth factors (PRP) to stimulate collagen synthesis, improve skin texture, and fade acne scars naturally.",
    heroRating: "4.8 · Rated by 180+ patients",
    heroImage: "/services/exosomes-prp-gfc/1.webp",
    performedByLabel: "👩‍⚕️ Administered by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • Autologous • Glowing Recovery",
    stats: [
      { n: "60 Min", l: "Procedure time" },
      { n: "1-2", l: "Days recovery redness" },
      { n: "14 Days", l: "Visible glow onset" },
      { n: "3-4", l: "Sessions recommended" }
    ],
    whatIsThisTag: "What is a Vampire Lift?",
    whatIsThisTitle: "This is",
    whatIsThisEmphasized: "organic repair.",
    whatIsThisDesc1: "The Vampire Lift combines microneedling (using Dermapen technology) with Platelet-Rich Plasma (PRP) isolated from your own blood. The micro-channels allow growth factors to penetrate deep into the dermis, triggering rapid repair.",
    whatIsThisDesc2: "This double action triggers collagen remodeling, helping fade acne scars, smooth fine lines, shrink pores, and restore a youthful, healthy glow without synthetic chemicals.",
    benefits: [
      { icon: "🧬", b: "Natural Rejuvenation", d: "Uses your own platelets to stimulate cellular growth." },
      { icon: "✨", b: "Smooths Texture", d: "Reduces pore size, fine lines, and rough patches." },
      { icon: "🎯", b: "Fades Acne Scars", d: "Breaks down old scar tissue and builds new collagen." },
      { icon: "🌟", b: "Deep Radiance", d: "Accelerates cell renewal for a lasting clinical glow." }
    ],
    clinicalNote: "We use high-concentration sterile centrifuges to harvest maximum growth factor yield safely.",
    sideImage: "/services/exosomes-prp-gfc/2.webp",
    machineTitle: "Autologous cellular",
    machineEmphasized: "skin restoration.",
    deviceName: "Medical PRP Centrifuge & Dermapen",
    deviceSub: "HIGH-SPEED SEPARATION • DERMAPEN PRECISION • STERILE SYSTEM",
    deviceDesc: "Your blood is processed in a closed sterile kit to isolate active platelets, which are then infused into the skin during automated microneedling.",
    deviceFeatures: ["Closed Sterile Kits", "High Platelet Yield", "Calibrated Microneedles", "LED Recovery Support"],
    deviceImage: "/services/exosomes-prp-gfc/3.webp",
    comparisonTitle: "COSMO HOME vs Standard Clinic",
    comparisonRows: [
      { label: "Preparation", ours: "Double-spin medical centrifuge for high yield", standard: "Single-spin lab devices with low yield" },
      { label: "Technique", ours: "Uniform microneedles with cooling mask", standard: "Painful manual roller devices" },
      { label: "Safety", ours: "Dermatologist-led sterile environment", standard: "Delegated non-medical therapists" },
      { label: "Recovery", ours: "Calming LED therapy is included to cut redness", standard: "Redness lasting for several days" }
    ],
    whoNeedsDesc: "Perfect for patients dealing with acne scars, enlarged pores, early fine lines, dull skin tone, or sun damage.",
    notSuitable: "Bleeding disorders, active skin infections, pregnancy, history of keloids.",
    whoNeedsItems: [
      { tag: "Acne scarring", desc: "Stimulate collagen to plump up depressed acne scars." },
      { tag: "Enlarged pores", desc: "Tighten skin structure to shrink pore appearance." },
      { tag: "Dull complexion", desc: "Exfoliate and infuse growth factors for radiance." },
      { tag: "Early fine lines", desc: "Soften early expression lines around cheeks and eyes." }
    ],
    sessionPlanDesc: "We recommend a course of 3 to 4 sessions, spaced 4 weeks apart, followed by seasonal maintenance.",
    sessionPlanSteps: [
      { n: "01", label: "Preparation & Numbing", duration: "30 min", detail: "A blood sample is drawn and medical numbing cream is applied to the treatment area for comfort." },
      { n: "02", label: "Platelet Separation", duration: "15 min", detail: "The sample is centrifuged using double-spin parameters to isolate highly concentrated plasma." },
      { n: "03", label: "Microneedling Infusion", duration: "25 min", detail: "Plasma is applied while the Dermapen creates micro-channels, followed by a soothing cooling recovery mask." }
    ],
    timelineDesc: "Redness fades in a couple of days, replaced by a radiant skin texture in 2 weeks.",
    timelineItems: [
      { when: "Immediately", what: "Skin looks pink or red (similar to mild sunburn). Minor tightness is expected." },
      { when: "Day 2–3", what: "Redness fades to a light pink. Skin feels dry as early renewal begins." },
      { when: "Week 2", what: "The skin feels smoother, pores look smaller, and a healthy glow becomes visible." },
      { when: "Month 2+", what: "Collagen remodeling continues to improve acne scars and skin density." }
    ],
    ctaRating: "180+ glowing transformations",
    ctaTitle: "Ready to stimulate",
    ctaTitle2: "organic collagen renewal?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Get a clinical skin barrier check and custom PRP treatment plan designed for your goals.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹12,000 / session" },
      { label: "Duration", val: "60 minutes" },
      { label: "Recommended", val: "3-4 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "1-2 days" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "thread-lift": {
    id: "thread-lift",
    title: "Non-Surgical lifting",
    titleEmphasized: "Thread Lift.",
    experienceNo: "Signature Experience",
    description: "Lift sagging cheeks, jawlines, and neck skin with absorbable PDO or PLLA medical threads for an immediate lift and long-term collagen support.",
    heroRating: "4.8 · Rated by 140+ patients",
    heroImage: "/services/hifu/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Board-Certified Cosmetic Surgeon / Dermatologist",
    performedBySub: "Medical Grade • Sterile Suite • Precise Sculpting",
    stats: [
      { n: "45-60 Min", l: "Procedure time" },
      { n: "2-4 Days", l: "Downtime recovery" },
      { n: "Immediate", l: "Visible lift onset" },
      { n: "12-18 Mo", l: "Results duration" }
    ],
    whatIsThisTag: "What is a Thread Lift?",
    whatIsThisTitle: "This is",
    whatIsThisEmphasized: "targeted tension.",
    whatIsThisDesc1: "A Thread Lift is a minimally invasive treatment that uses absorbable polydioxanone (PDO) threads placed under the skin to lift loose tissues. As the threads dissolve, they stimulate a network of natural collagen.",
    whatIsThisDesc2: "This dual action provides an immediate mechanical lift to sagging cheeks, jowls, or double chin, followed by progressive skin firming that lasts long after the threads have dissolved.",
    benefits: [
      { icon: "✨", b: "Immediate Mechanical Lift", d: "Instantly lifts sagging cheeks, jowls, and neck skin." },
      { icon: "🧬", b: "Collagen Stimulation", d: "Triggers deep collagen production around the thread vector." },
      { icon: "🛡️", b: "Absorbable Material", d: "Uses safe, bio-compatible suture material used in surgery." },
      { icon: "⚡", b: "Minimal Recovery", d: "Quick recovery compared to traditional surgical facelifts." }
    ],
    clinicalNote: "Threads are carefully placed along precise vectors to achieve a balanced, natural lift.",
    sideImage: "/services/hifu/2.webp",
    machineTitle: "Structural vectors",
    machineEmphasized: "for natural lifting.",
    deviceName: "PDO & PLLA Cog Threads",
    deviceSub: "BIO-COMPATIBLE SUTURES • STERILE THEATRE • ANATOMICAL MAPPING",
    deviceDesc: "We use premium, high-strength PDO cog threads designed to hold facial tissue securely and stimulate collagen safely.",
    deviceFeatures: ["PDO/PLLA Material", "Surgical-Grade Quality", "Precision Cannulas", "Completely Absorbable"],
    deviceImage: "/services/hifu/hifu.webp",
    comparisonTitle: "COSMO HOME vs Surgical Facelift",
    comparisonRows: [
      { label: "Invasiveness", ours: "Minimally invasive with local anesthesia", standard: "Major surgery under general anesthesia" },
      { label: "Downtime", ours: "2 to 4 days of minor swelling", standard: "4 to 6 weeks of surgical recovery" },
      { label: "Scars", ours: "No visible incisions or scars", standard: "Surgical scars hidden around ears" },
      { label: "Cost", ours: "A fraction of surgical facelift fees", standard: "High surgical and hospital costs" }
    ],
    whoNeedsDesc: "Ideal for patients with mild to moderate jowls, sagging cheeks, loss of mid-face definition, or softening neck skin.",
    notSuitable: "Severe skin laxity (better suited for surgery), active skin infections, bleeding disorders, pregnancy.",
    whoNeedsItems: [
      { tag: "Sagging jowls", desc: "Lift loose skin along the jawline to restore definition." },
      { tag: "Mid-face laxity", desc: "Restore flat cheeks by lifting tissue back to its position." },
      { tag: "Softening neck skin", desc: "Gently tighten early double chin or neck laxity." },
      { tag: "Eyebrow lift", desc: "Open up tired eyes by lifting the outer brow area." }
    ],
    sessionPlanDesc: "A single session provides results that last for 12 to 18 months, with touch-ups as needed.",
    sessionPlanSteps: [
      { n: "01", label: "Vector Mapping", duration: "15 min", detail: "Dr. Ruxana maps your face in an upright position, marking the lift vectors and entry points." },
      { n: "02", label: "Local Anesthesia", duration: "15 min", detail: "Local numbing is placed at entry points to ensure a comfortable procedure." },
      { n: "03", label: "Thread Placement", duration: "30 min", detail: "Cannulas containing the threads are placed along the vectors. The threads are secured and trimmed." }
    ],
    timelineDesc: "Mechanical lift is visible immediately, followed by skin tightening over 3 months.",
    timelineItems: [
      { when: "Immediately", what: "The lift is visible. Mild puckering, swelling, or minor soreness is normal." },
      { when: "Day 3–7", what: "Swelling and soreness settle. Return to light desk work and daily routine." },
      { when: "Week 4", what: "Threads settle completely. Collagene stimulation begins around the vectors." },
      { when: "Month 3+", what: "Peak collagen production delivers improved skin texture and firm contours." }
    ],
    ctaRating: "140+ lifted contours",
    ctaTitle: "Ready to lift",
    ctaTitle2: "and tighten sagging jowls?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a clinical vector assessment to design a safe, natural lifting roadmap.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹40,000 / session" },
      { label: "Duration", val: "45-60 minutes" },
      { label: "Onset", val: "Immediate" },
      { label: "Downtime", val: "2-4 days" },
      { label: "Performed by", val: "Doctor" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "skin-boosters": {
    id: "skin-boosters",
    title: "Deep Dewy",
    titleEmphasized: "Skin Boosters.",
    experienceNo: "Signature Experience",
    description: "Deeply hydrate and improve skin elasticity by infusing micro-droplets of hyaluronic acid and vitamins for a natural, long-lasting dewy glow.",
    heroRating: "4.9 · Rated by 260+ patients",
    heroImage: "/services/hydrafacial-medifacial/1.webp",
    performedByLabel: "👩‍⚕️ Administered by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • Deep Hydration • Glass Skin Effect",
    stats: [
      { n: "30 Min", l: "Procedure time" },
      { n: "12-24h", l: "Downtime bumps" },
      { n: "7 Days", l: "Dewy glow onset" },
      { n: "6-9 Mo", l: "Results duration" }
    ],
    whatIsThisTag: "What are Skin Boosters?",
    whatIsThisTitle: "This is not",
    whatIsThisEmphasized: "a topical serum.",
    whatIsThisDesc1: "Skin boosters utilize non-crosslinked hyaluronic acid and essential vitamins micro-injected directly into the skin layers. Rather than staying on the surface, they pull moisture from within.",
    whatIsThisDesc2: "This deep hydration improves skin elasticity, plumps fine lines, refines texture, and creates a healthy glass-skin appearance.",
    benefits: [
      { icon: "💧", b: "Intense Hydration", d: "Pulls moisture deep into the skin for a plump look." },
      { icon: "✨", b: "Dewy Glass Skin", d: "Restores a healthy, natural glow that creams cannot reach." },
      { icon: "🧬", b: "Improves Elasticity", d: "Stimulates collagen to firm up crepey skin." },
      { icon: "🌿", b: "Smooths Fine Lines", d: "Plumps superficial dryness lines on cheeks and neck." }
    ],
    clinicalNote: "Micro-injections are distributed evenly to maximize moisture and glow across target zones.",
    sideImage: "/services/hydrafacial-medifacial/2.webp",
    machineTitle: "Micro-injection",
    machineEmphasized: "moisture delivery.",
    deviceName: "Premium Skin Hydrators",
    deviceSub: "HA HYDRATORS • MICRO-DROPLET INJECTIONS • DEEP WATER BINDING",
    deviceDesc: "We use premium dermal hydrators (like Profhilo, Restylane Vital, or Juvederm Volite) based on your hydration needs and skin texture.",
    deviceFeatures: ["Pure Hyaluronic Acid", "Micro-needles", "Intense Water Retention", "Elasticity Support"],
    deviceImage: "/services/hydrafacial-medifacial/Hydrafacial  Medifacial.webp",
    comparisonTitle: "COSMO HOME vs Topical Serums",
    comparisonRows: [
      { label: "Penetration", ours: "Delivered directly into the dermis layers", standard: "Stays on the dead outer skin layer" },
      { label: "Duration", ours: "Deep hydration lasting 6 to 9 months", standard: "Washes away or fades within hours" },
      { label: "Plumping", ours: "Plumps dynamic fine lines from within", standard: "Temporary skin softening only" },
      { label: "Efficacy", ours: "Clinically proven to boost skin elasticity", standard: "Superficial cosmetic improvement" }
    ],
    whoNeedsDesc: "Excellent for patients with dry, crepey, dull, or dehydrated skin, early fine lines, or rough skin texture.",
    notSuitable: "Pregnancy, active skin infections, known allergy to treatment ingredients.",
    whoNeedsItems: [
      { tag: "Dehydrated skin", desc: "Restore moisture to skin that looks flat or dry." },
      { tag: "Crepey texture", desc: "Firm up thin, papery skin on cheeks or neck." },
      { tag: "Dull complexion", desc: "Bring back a fresh, youthful, natural glow." },
      { tag: "Fine surface lines", desc: "Plump superficial lines caused by dryness." }
    ],
    sessionPlanDesc: "Depending on the hydrator, we recommend 1 to 2 sessions followed by maintenance every 6 months.",
    sessionPlanSteps: [
      { n: "01", label: "Skin Assessment", duration: "15 min", detail: "Dr. Ruxana evaluates skin hydration, elasticity, and texture to map the injection zones." },
      { n: "02", label: "Micro-Droplet Infusion", duration: "25 min", detail: "Micro-injections are placed into the skin layers using ultra-fine needles for comfort." },
      { n: "03", label: "Calming Recovery", duration: "10 min", detail: "A soothing barrier repair cream is applied to reduce injection bumps." }
    ],
    timelineDesc: "Hydration starts showing in a few days, with maximum dewy glow at 2 weeks.",
    timelineItems: [
      { when: "Immediately", what: "Tiny injection bumps are visible, resolving within 12-24 hours." },
      { when: "Day 3–5", what: "Skin starts feeling softer, smoother, and more hydrated." },
      { when: "Day 7–14", what: "Peak dewy glass-skin appearance becomes visible." },
      { when: "Month 6+", what: "Hyaluronic acid slowly degrades, signaling the time for maintenance." }
    ],
    ctaRating: "260+ dewy glass skin cases",
    ctaTitle: "Ready for deep",
    ctaTitle2: "dewy glass-skin glow?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a clinical hydration assessment to design a custom booster plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹18,000 / session" },
      { label: "Duration", val: "30-45 minutes" },
      { label: "Onset", val: "7 days" },
      { label: "Downtime", val: "12-24 hours" },
      { label: "Performed by", val: "Dermatologist" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "mnrf": {
    id: "mnrf",
    title: "Deep Rebuilding",
    titleEmphasized: "MNRF.",
    experienceNo: "Signature Experience",
    description: "Combine microneedling with radiofrequency energy to remodel scar tissue, tighten loose skin, and smooth deep wrinkles safely.",
    heroRating: "4.8 · Rated by 190+ patients",
    heroImage: "/services/laser-scar-reduction/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • Calibrated RF • Scar Specialist",
    stats: [
      { n: "4-6", l: "Sessions recommended" },
      { n: "1-2 Days", l: "Downtime redness" },
      { n: "3-4 Weeks", l: "Visible skin renewal" },
      { n: "100%", l: "Gold-plated needles" }
    ],
    whatIsThisTag: "What is MNRF?",
    whatIsThisTitle: "This is",
    whatIsThisEmphasized: "dermal remodeling.",
    whatIsThisDesc1: "Microneedling Radiofrequency (MNRF) delivers controlled RF thermal energy deep into the dermis using insulated micro-needles. This stimulates rapid collagen production without harming the outer skin.",
    whatIsThisDesc2: "It is highly effective for smoothing stubborn acne scars, shrinking large pores, tightening jawline skin, and reducing stretch marks with minimal downtime.",
    benefits: [
      { icon: "🧬", b: "Deep Remodeling", d: "Stimulates collagen synthesis in the deep dermis layers." },
      { icon: "🎯", b: "Smoothes Acne Scars", d: "Plumps up deep rolling and boxcar scars." },
      { icon: "⚡", b: "Skin Tightening", d: "Improves skin elasticity and redefines contours." },
      { icon: "🛡️", b: "Safe for Indian Skin", d: "Fractional RF energy minimizes pigmentation risks." }
    ],
    clinicalNote: "Needle depth and RF energy are calibrated to target scar thickness safely.",
    sideImage: "/services/laser-scar-reduction/2.webp",
    machineTitle: "Focused RF energy",
    machineEmphasized: "for scar remodeling.",
    deviceName: "Medical-Grade MNRF Platform",
    deviceSub: "FDA-APPROVED • GOLD-PLATED NEEDLES • PRECISION CONTROL",
    deviceDesc: "We use premium MNRF technology with insulated gold-plated needles, allowing precise depth control (0.5mm to 3.5mm) to protect the skin barrier.",
    deviceFeatures: ["FDA-Approved", "Insulated Needles", "Precision Depth Control", "Minimal Epidermal Heat"],
    deviceImage: "/services/laser-scar-reduction/Laser Scar Reduction.webp",
    comparisonTitle: "COSMO HOME vs Standard MNRF",
    comparisonRows: [
      { label: "Needles", ours: "Insulated needles (protects outer skin)", standard: "Non-insulated needles (heats surface)" },
      { label: "Depth", ours: "Calibrated depth matching scar type", standard: "Fixed depth settings for all zones" },
      { label: "Safety", ours: "Dermatologist-led procedure", standard: "Performed by non-medical technicians" },
      { label: "Recovery", ours: "Calming growth factors included", standard: "Standard cream with dry skin issues" }
    ],
    whoNeedsDesc: "Ideal for patients with acne scars, stretch marks, loose jawline skin, or large pores.",
    notSuitable: "Pregnancy, active cystic acne, keloid history, metal implants in the treatment area.",
    whoNeedsItems: [
      { tag: "Rolling acne scars", desc: "Break up tough scar fibers and lift skin tissue." },
      { tag: "Stretch marks", desc: "Rebuild collagen to smooth and blend stretch marks." },
      { tag: "Enlarged pores", desc: "Firm up loose skin to tighten pore structures." },
      { tag: "Mild jawline laxity", desc: "Tighten loose skin to restore jawline definition." }
    ],
    sessionPlanDesc: "A course of 4 to 6 sessions, spaced 4 weeks apart, is recommended for optimal scar remodeling.",
    sessionPlanSteps: [
      { n: "01", label: "Consultation & Numbing", duration: "45 min", detail: "Scar mapping is completed and medical numbing is applied for comfort." },
      { n: "02", label: "RF Delivery", duration: "30 min", detail: "Precision MNRF sweeps are performed at calibrated depths across target zones." },
      { n: "03", label: "Barrier Soothing", duration: "15 min", detail: "Soothing recovery serums and cooling masks are applied to reduce redness." }
    ],
    timelineDesc: "Redness resolves in 1-2 days, with skin texture improving over 3 months.",
    timelineItems: [
      { when: "Immediately", what: "Skin looks pink or red with mild warmth. Small grid marks may appear." },
      { when: "Day 2–3", what: "Redness fades. Grid marks begin to flake off naturally." },
      { when: "Week 4", what: "Early texture smoothing and skin softness become noticeable." },
      { when: "Month 3+", what: "Deep collagen remodeling lifts scars and firms contours." }
    ],
    ctaRating: "190+ smooth stories",
    ctaTitle: "Ready to smooth",
    ctaTitle2: "stubborn scars and texture?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a clinical scar assessment to design a customized MNRF plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹15,000 / session" },
      { label: "Duration", val: "60 minutes" },
      { label: "Recommended", val: "4-6 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "1-2 days" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "dermapen": {
    id: "dermapen",
    title: "Microneedling",
    titleEmphasized: "Dermapen.",
    experienceNo: "Signature Experience",
    description: "Stimulate natural collagen and elastin production with automated microneedling to refine skin texture, minimize pores, and fade acne scars.",
    heroRating: "4.9 · Rated by 240+ patients",
    heroImage: "/services/hydrafacial-medifacial/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Aesthetic Specialist Team",
    performedBySub: "Safe • Controlled Microneedling • Precision Care",
    stats: [
      { n: "3-4", l: "Sessions recommended" },
      { n: "1 Day", l: "Downtime redness" },
      { n: "7 Days", l: "Visible skin renewal" },
      { n: "100%", l: "Automated precision" }
    ],
    whatIsThisTag: "What is Dermapen?",
    whatIsThisTitle: "This is",
    whatIsThisEmphasized: "precision microneedling.",
    whatIsThisDesc1: "Dermapen uses automated microneedling technology to create vertical micro-channels in the skin. This triggers a natural healing response, producing fresh collagen and elastin.",
    whatIsThisDesc2: "This treatment is highly customizable and effective for smoothing early acne scars, refining rough skin texture, and improving overall skin radiance.",
    benefits: [
      { icon: "🧬", b: "Natural Rebuilding", d: "Triggers collagen production via natural healing." },
      { icon: "✨", b: "Refines Texture", d: "Smoothes rough skin patches and dry lines." },
      { icon: "🎯", b: "Minimizes Pores", d: "Tightens the skin matrix to shrink pore appearance." },
      { icon: "⚡", b: "Minimal Downtime", d: "Rapid recovery compared to traditional peels." }
    ],
    clinicalNote: "Needle depth is adjusted dynamically to match skin sensitivity and scar structure.",
    sideImage: "/services/hydrafacial-medifacial/2.webp",
    machineTitle: "Automated needles",
    machineEmphasized: "for smooth texture.",
    deviceName: "Dermapen 4™ Platform",
    deviceSub: "FDA-APPROVED • AUTOMATED MICRONEEDLES • COMFORT TECHNOLOGY",
    deviceDesc: "We use the original Dermapen 4 system, which creates up to 1,920 micro-channels per second with comfort and minimal friction.",
    deviceFeatures: ["Automated Technology", "Adjustable Depth", "Sterile Cartridges", "Comfort-Focused Needle"],
    deviceImage: "/services/hydrafacial-medifacial/Hydrafacial  Medifacial.webp",
    comparisonTitle: "COSMO HOME vs Dermaroller",
    comparisonRows: [
      { label: "Penetration", ours: "Vertical needle entry (no skin tearing)", standard: "Angled needle entry (causes micro-tears)" },
      { label: "Speed", ours: "Automated rapid sweeps (minimal discomfort)", standard: "Manual rolling (more painful)" },
      { label: "Safety", ours: "Sterile single-use cartridges", standard: "Reusable rollers with infection risks" },
      { label: "Precision", ours: "Adjustable depth for thin facial skin", standard: "Fixed needle depth" }
    ],
    whoNeedsDesc: "Ideal for patients seeking to refine skin texture, fade light acne scars, reduce pore size, or boost skin absorption.",
    notSuitable: "Active cystic acne, active skin infections, pregnancy, keloid history.",
    whoNeedsItems: [
      { tag: "Enlarged pores", desc: "Firm up loose skin to tighten pore structures." },
      { tag: "Rough skin texture", desc: "Exfoliate dead cells and build fresh collagen." },
      { tag: "Superficial scars", desc: "Soften early acne scars and uneven patches." },
      { tag: "Dull complexion", desc: "Exfoliate and boost skin serum absorption." }
    ],
    sessionPlanDesc: "We recommend a course of 3 to 4 sessions, spaced 4 weeks apart, to achieve optimal skin texture.",
    sessionPlanSteps: [
      { n: "01", label: "Skin Preparation", duration: "30 min", detail: "Skin is cleansed and medical-grade numbing cream is applied for comfort." },
      { n: "02", label: "Dermapen Treatment", duration: "20 min", detail: "Precision microneedling is performed across target zones using customized serum infusions." },
      { n: "03", label: "Calming Mask", duration: "10 min", detail: "A soothing hyaluronic acid mask is applied to cool the skin and reduce redness." }
    ],
    timelineDesc: "Redness settles in 24 hours, with skin texture feeling smoother in 7 days.",
    timelineItems: [
      { when: "Immediately", what: "Skin looks red and feels warm. Minor tightness is normal." },
      { when: "Day 2", what: "Redness fades. Skin may feel dry or show light flaking." },
      { when: "Day 7", what: "Early skin softness and brightness become visible." },
      { when: "Month 1+", what: "Collagen remodeling continues to refine skin texture and pores." }
    ],
    ctaRating: "240+ texture cases",
    ctaTitle: "Ready to smooth",
    ctaTitle2: "skin texture and pores?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a clinical skin assessment to design a customized Dermapen plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹8,000 / session" },
      { label: "Duration", val: "60 minutes" },
      { label: "Recommended", val: "3-4 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "1 day" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "co2-laser": {
    id: "co2-laser",
    title: "Deep Laser Resurfacing",
    titleEmphasized: "CO2 Laser.",
    experienceNo: "Signature Experience",
    description: "Deeply resurface the skin to fade stretch marks, smooth severe acne scars, and improve skin tightness with fractional CO2 laser energy.",
    heroRating: "4.8 · Rated by 170+ patients",
    heroImage: "/services/laser-scar-reduction/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • Precision Resurfacing • Expert Care",
    stats: [
      { n: "3-4", l: "Sessions recommended" },
      { n: "3-5 Days", l: "Recovery downtime" },
      { n: "2 Weeks", l: "Visible skin renewal" },
      { n: "100%", l: "Doctor performed" }
    ],
    whatIsThisTag: "What is CO2 Laser?",
    whatIsThisTitle: "This is",
    whatIsThisEmphasized: "deep resurfacing.",
    whatIsThisDesc1: "Fractional CO2 Laser uses carbon dioxide laser energy to create microscopic thermal channels deep in the skin layers. This triggers a powerful healing response, replacing old tissue with fresh skin.",
    whatIsThisDesc2: "It is the gold standard for treating deep acne scars, stretch marks, and severe skin texture irregularities, providing visible smoothing results.",
    benefits: [
      { icon: "🧬", b: "Deep Collagen Remodeling", d: "Replaces old damaged fibers with fresh skin." },
      { icon: "🎯", b: "Fades Stretch Marks", d: "Smoothes stretch marks and restores skin density." },
      { icon: "✨", b: "Smoothes Severe Scars", d: "Fades rolling, boxcar, and surgical scars." },
      { icon: "⚡", b: "Improves Skin Tightness", d: "Reduces skin laxity and refines overall texture." }
    ],
    clinicalNote: "Treatment parameters are customized to protect the surrounding skin and support fast healing.",
    sideImage: "/services/laser-scar-reduction/2.webp",
    machineTitle: "Fractional CO2 beams",
    machineEmphasized: "for deep resurfacing.",
    deviceName: "Fractional CO2 Laser System",
    deviceSub: "FDA-APPROVED • PRECISION SCANNER • DEEP REMODELING",
    deviceDesc: "We use advanced fractional CO2 laser technology with a precision scanner, delivering micro-beams to target tissue layers safely.",
    deviceFeatures: ["FDA-Approved", "Precision Scanner", "Adjustable Pulse", "Comfort Cooling"],
    deviceImage: "/services/laser-scar-reduction/Laser Scar Reduction.webp",
    comparisonTitle: "COSMO HOME vs Standard Laser",
    comparisonRows: [
      { label: "Fractional", ours: "Micro-beams preserve tissue bridges (fast healing)", standard: "Ablative beams damage entire surface (slow healing)" },
      { label: "Precision", ours: "Dermatologist-calibrated pulse and scanning", standard: "Fixed settings with burning risks" },
      { label: "Comfort", ours: "Numbing cream and cold air support", standard: "High heat with minimal cooling" },
      { label: "Recovery", ours: "Calming barrier recovery system included", standard: "Standard ointment only" }
    ],
    whoNeedsDesc: "Perfect for patients with deep acne scars, stretch marks, surgical scars, or severe skin texture issues.",
    notSuitable: "Active tan, history of keloids, active skin infections, pregnancy.",
    whoNeedsItems: [
      { tag: "Deep acne scars", desc: "Break up scar fibers and lift skin tissue." },
      { tag: "Stretch marks", desc: "Rebuild collagen to smooth and blend stretch marks." },
      { tag: "Surgical scars", desc: "Soften and flatten surgical incision lines." },
      { tag: "Severe texture issues", desc: "Resurface rough, damaged skin for a smooth finish." }
    ],
    sessionPlanDesc: "A course of 3 to 4 sessions, spaced 4 to 6 weeks apart, is recommended for optimal results.",
    sessionPlanSteps: [
      { n: "01", label: "Mapping & Numbing", duration: "60 min", detail: "Skin structure is evaluated, and medical-grade numbing is applied for comfort." },
      { n: "02", label: "Laser Resurfacing", duration: "30 min", detail: "Fractional CO2 laser micro-beams are delivered across target zones at calibrated parameters." },
      { n: "03", label: "Barrier Repair", duration: "15 min", detail: "Soothing recovery creams and sunscreen are applied to protect the skin." }
    ],
    timelineDesc: "Skin heals in 3-5 days, with texture smoothing showing over 3 months.",
    timelineItems: [
      { when: "Immediately", what: "Skin looks red and feels hot. Micro-treatment dots are visible." },
      { when: "Day 2–3", what: "Redness fades to bronze. Tiny crusts begin to flake off naturally." },
      { when: "Week 2", what: "Skin heals completely, revealing a smoother, softer surface." },
      { when: "Month 3+", what: "Deep collagen remodeling continues to smooth scars and stretch marks." }
    ],
    ctaQuickFacts: [
      { label: "Price from", val: "₹18,000 / session" },
      { label: "Duration", val: "60 minutes" },
      { label: "Recommended", val: "3-4 sessions" },
      { label: "Frequency", val: "Every 4-6 weeks" },
      { label: "Downtime", val: "3-5 days" }
    ],
    ctaRating: "170+ smoothed stories",
    ctaTitle: "Ready to smooth",
    ctaTitle2: "deep scars and stretch marks?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a clinical skin assessment to design a customized CO2 laser plan.",
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "dutexome": {
    id: "dutexome",
    title: "Advanced Scalp",
    titleEmphasized: "Dutexome.",
    experienceNo: "Signature Experience",
    description: "Target hair thinning and scalp health with premium exosome formulations containing growth factors, peptides, and coenzymes.",
    heroRating: "4.9 · Rated by 120+ patients",
    heroImage: "/services/exosomes-prp-gfc/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • Biotech Exosomes • Hair Specialist",
    stats: [
      { n: "3-4", l: "Sessions recommended" },
      { n: "12-24h", l: "Downtime bumps" },
      { n: "3-4 Weeks", l: "Reduced hair shedding" },
      { n: "100%", l: "Sterile exosome yield" }
    ],
    whatIsThisTag: "What is Dutexome?",
    whatIsThisTitle: "This is",
    whatIsThisEmphasized: "cellular hair repair.",
    whatIsThisDesc1: "Dutexome is an advanced scalp rejuvenation treatment that delivers billions of purified exosomes directly to hair follicles. These exosomes carry growth factors, peptides, and coenzymes that stimulate hair cell repair.",
    whatIsThisDesc2: "This treatment targets the root causes of hair thinning, helping to prolong the hair growth phase, increase follicle density, and reduce hair shedding.",
    benefits: [
      { icon: "🧬", b: "Purified Exosomes", d: "Delivers billions of signaling vesicles for repair." },
      { icon: "🌱", b: "Follicle Stimulation", d: "Wakes up dormant follicles to support hair density." },
      { icon: "✨", b: "Scalp Rejuvenation", d: "Improves scalp health and blood circulation." },
      { icon: "⚡", b: "No Downtime", d: "Rapid recovery with comfortable injection techniques." }
    ],
    clinicalNote: "Scalp mapping is completed prior to treatment to identify target thinning areas.",
    sideImage: "/services/exosomes-prp-gfc/2.webp",
    machineTitle: "Biotech exosomes",
    machineEmphasized: "for hair density.",
    deviceName: "Dutexome Scalp System",
    deviceSub: "BIOTECH EXOSOMES • STERILE INJECTION • FOLLECTIVE CARE",
    deviceDesc: "We use premium exosome formulations prepared under sterile clinical conditions to ensure maximum safety and effectiveness.",
    deviceFeatures: ["Biotech Exosomes", "Sterile Preparation", "Micro-needles", "Dermatologist-led"],
    deviceImage: "/services/exosomes-prp-gfc/3.webp",
    comparisonTitle: "COSMO HOME vs Standard Scalp Care",
    comparisonRows: [
      { label: "Active Agent", ours: "Billions of purified exosome vesicles", standard: "Basic scalp serums or tonics" },
      { label: "Delivery", ours: "Dermatologist-led micro-injections", standard: "Superficial scalp massage" },
      { label: "Safety", ours: "Sterile clinical preparation", standard: "Over-the-counter homecare" },
      { label: "Efficacy", ours: "Clinically proven cellular signal repair", standard: "Temporary cosmetic softening only" }
    ],
    whoNeedsDesc: "Ideal for patients experiencing hair thinning, androgenetic alopecia, scalp inflammation, or general hair fall.",
    notSuitable: "Active scalp infections, bleeding disorders, pregnancy.",
    whoNeedsItems: [
      { tag: "Hair thinning", desc: "Stimulate dormant hair follicles to support density." },
      { tag: "Pattern hair loss", desc: "Manage androgenetic alopecia in men and women." },
      { tag: "Scalp inflammation", desc: "Calm scalp redness, dryness, or irritation." },
      { tag: "General hair fall", desc: "Nourish hair roots to reduce shedding." }
    ],
    sessionPlanDesc: "We recommend a course of 3 to 4 sessions, spaced 4 weeks apart, followed by seasonal maintenance.",
    sessionPlanSteps: [
      { n: "01", label: "Scalp Mapping", duration: "15 min", detail: "Dr. Ruxana evaluates scalp health and follicle density to identify target zones." },
      { n: "02", label: "Exosome Injection", duration: "30 min", detail: "Purified exosomes are delivered to target areas using precision micro-needles for comfort." },
      { n: "03", label: "Calming Phototherapy", duration: "15 min", detail: "LED phototherapy is applied to soothe the scalp and reduce redness." }
    ],
    timelineDesc: "Hair shedding reduces in 4 weeks, with density showing in 3 months.",
    timelineItems: [
      { when: "Immediately", what: "Scalp may feel warm with minor pinkness, resolving within 12-24 hours." },
      { when: "Week 4", what: "Noticeable reduction in hair shedding and improved scalp comfort." },
      { when: "Month 3", what: "Fine new hair growth begins to appear in target areas." },
      { when: "Month 6+", what: "Continued density improvements supported by maintenance sessions." }
    ],
    ctaRating: "120+ hair density cases",
    ctaTitle: "Ready to restore",
    ctaTitle2: "hair volume and scalp health?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a clinical scalp assessment to design a customized Dutexome plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹25,000 / session" },
      { label: "Duration", val: "60 minutes" },
      { label: "Recommended", val: "3-4 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "12-24 hours" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "hair-mesotherapy": {
    id: "hair-mesotherapy",
    title: "Scalp Micro-Nutrient",
    titleEmphasized: "Mesotherapy.",
    experienceNo: "Signature Experience",
    description: "Nourish hair roots and stimulate growth by infusing vitamins, minerals, and amino acids directly into the scalp.",
    heroRating: "4.8 · Rated by 150+ patients",
    heroImage: "/services/exosomes-prp-gfc/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • Nutrient Infusion • Hair Care",
    stats: [
      { n: "4-6", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "2-3 Weeks", l: "Reduced hair shedding" },
      { n: "100%", l: "Nutrient-rich cocktails" }
    ],
    whatIsThisTag: "What is Mesotherapy?",
    whatIsThisTitle: "This is",
    whatIsThisEmphasized: "scalp nourishment.",
    whatIsThisDesc1: "Scalp Mesotherapy involves micro-injections of a specialized cocktail of vitamins, minerals, amino acids, and coenzymes directly into the scalp layers. This delivers nutrients straight to the hair roots.",
    whatIsThisDesc2: "This treatment boosts blood circulation, neutralizes DHT hormones, and nourishes follicles to reduce hair fall and promote healthier, shinier hair.",
    benefits: [
      { icon: "🌱", b: "Follicle Nourishment", d: "Delivers essential vitamins directly to hair roots." },
      { icon: "⚡", b: "Improves Circulation", d: "Stimulates blood flow to support follicle health." },
      { icon: "✨", b: "Reduces Hair Fall", d: "Strengthens hair shafts and minimizes shedding." },
      { icon: "🛡️", b: "No Downtime", d: "Immediate return to daily activities." }
    ],
    clinicalNote: "Nutrient cocktails are customized based on scalp health and hair quality.",
    sideImage: "/services/exosomes-prp-gfc/2.webp",
    machineTitle: "Nutrient-rich cocktails",
    machineEmphasized: "for hair strength.",
    deviceName: "Premium Mesotherapy Cocktails",
    deviceSub: "VITAMINS & MINERALS • STERILE MICRO-INJECTION • HAIR CARE",
    deviceDesc: "We use premium, medical-grade mesotherapy cocktails containing essential vitamins and peptides to support hair growth safely.",
    deviceFeatures: ["Nutrient-Rich", "Sterile Cocktails", "Micro-needles", "DHT Blockers"],
    deviceImage: "/services/exosomes-prp-gfc/3.webp",
    comparisonTitle: "COSMO HOME vs Standard Care",
    comparisonRows: [
      { label: "Active Agent", ours: "Vitamins, minerals, amino acids, and peptides", standard: "Basic cosmetic hair tonics" },
      { label: "Delivery", ours: "Dermatologist-led micro-injections", standard: "Surface-level scalp massage" },
      { label: "Safety", ours: "Sterile clinical preparation", standard: "Over-the-counter homecare" },
      { label: "Downtime", ours: "None (zero recovery time)", standard: "None" }
    ],
    whoNeedsDesc: "Ideal for patients with early hair thinning, hair fall due to stress/diet, or dry, brittle hair.",
    notSuitable: "Active scalp infections, bleeding disorders, pregnancy.",
    whoNeedsItems: [
      { tag: "Early hair thinning", desc: "Nourish follicles to support density and thickness." },
      { tag: "Stress-related hair fall", desc: "Deliver essential nutrients to strengthen roots." },
      { tag: "Brittle hair", desc: "Improve hair quality and shine from the root." },
      { tag: "Dry scalp", desc: "Hydrate scalp layers to minimize irritation." }
    ],
    sessionPlanDesc: "We recommend a course of 4 to 6 sessions, spaced 2 to 3 weeks apart, followed by monthly maintenance.",
    sessionPlanSteps: [
      { n: "01", label: "Scalp Cleaning", duration: "15 min", detail: "The scalp is cleansed and sanitized to prepare for injection." },
      { n: "02", label: "Mesotherapy Injection", duration: "20 min", detail: "Customized nutrient cocktails are delivered to target areas using precision micro-needles." },
      { n: "03", label: "LED Therapy", duration: "15 min", detail: "LED phototherapy is applied to soothe the scalp and support absorption." }
    ],
    timelineDesc: "Hair shedding reduces in 3 weeks, with hair texture improving over 2 months.",
    timelineItems: [
      { when: "Immediately", what: "Scalp may feel warm with minor pinkness, resolving within a few hours." },
      { when: "Week 3", what: "Visible reduction in hair fall and improved scalp comfort." },
      { when: "Week 6", what: "Hair feels stronger, looks shinier, and hair fall is minimized." },
      { when: "Month 3+", what: "Continued improvements supported by monthly maintenance sessions." }
    ],
    ctaRating: "150+ hair revival stories",
    ctaTitle: "Ready to nourish",
    ctaTitle2: "your scalp and hair roots?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a clinical scalp assessment to design a customized mesotherapy plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹6,000 / session" },
      { label: "Duration", val: "45 minutes" },
      { label: "Recommended", val: "4-6 sessions" },
      { label: "Frequency", val: "Every 2-3 weeks" },
      { label: "Downtime", val: "None" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "monothreads": {
    id: "monothreads",
    title: "Scalp Rejuvenation",
    titleEmphasized: "Monothreads.",
    experienceNo: "Signature Experience",
    description: "Stimulate scalp blood circulation and strengthen hair anchoring structures with absorbable polydioxanone (PDO) monothreads.",
    heroRating: "4.8 · Rated by 110+ patients",
    heroImage: "/services/exosomes-prp-gfc/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • PDO Monothreads • Hair Expert",
    stats: [
      { n: "1 Session", l: "Recommended" },
      { n: "1-2 Days", l: "Downtime soreness" },
      { n: "4 Weeks", l: "Anchoring support onset" },
      { n: "12-18 Mo", l: "Results duration" }
    ],
    whatIsThisTag: "What are Monothreads?",
    whatIsThisTitle: "This is",
    whatIsThisEmphasized: "scalp micro-threads.",
    whatIsThisDesc1: "Scalp Monothreads utilize absorbable PDO threads placed under the scalp skin. As they dissolve, they stimulate blood circulation, trigger collagen production, and strengthen follicle anchoring.",
    whatIsThisDesc2: "This treatment is highly effective for patients with localized hair thinning, providing long-term structural support to hair roots.",
    benefits: [
      { icon: "🧬", b: "Structural Support", d: "Strengthens scalp anchoring to minimize hair loss." },
      { icon: "⚡", b: "Boosts Circulation", d: "Stimulates blood flow to target follicles." },
      { icon: "✨", b: "Collagen Stimulation", d: "Triggers natural collagen network around follicles." },
      { icon: "🛡️", b: "Absorbable Material", d: "PDO sutures dissolve safely over 6 months." }
    ],
    clinicalNote: "Threads are placed in a grid pattern to cover target thinning zones safely.",
    sideImage: "/services/exosomes-prp-gfc/2.webp",
    machineTitle: "PDO micro-threads",
    machineEmphasized: "for scalp strength.",
    deviceName: "PDO Monothreads",
    deviceSub: "PDO SUTURES • STERILE THEATRE • GRID VECTORING",
    deviceDesc: "We use premium, thin PDO monothreads designed to support scalp blood circulation and stimulate collagen safely.",
    deviceFeatures: ["PDO Material", "Medical-Grade Quality", "Absorbable Suture", "Sterile Packaging"],
    deviceImage: "/services/exosomes-prp-gfc/3.webp",
    comparisonTitle: "COSMO HOME vs Standard Care",
    comparisonRows: [
      { label: "Action", ours: "Mechanical and cellular anchoring support", standard: "Superficial hair tonics" },
      { label: "Duration", ours: "Stimulation effects last 12 to 18 months", standard: "Washes away or fades in hours" },
      { label: "Safety", ours: "Dermatologist-led sterile vectoring", standard: "Standard non-medical operators" },
      { label: "Sessions", ours: "Significant improvement in 1 session", standard: "Requires daily application for months" }
    ],
    whoNeedsDesc: "Ideal for patients with localized crown thinning, temple hair loss, or progressive hair thinning.",
    notSuitable: "Active scalp infections, bleeding disorders, pregnancy, history of keloids.",
    whoNeedsItems: [
      { tag: "Crown thinning", desc: "Support follicle anchoring in localized thinning zones." },
      { tag: "Temple hair loss", desc: "Stimulate blood flow to thinning temple areas." },
      { tag: "Progressive thinning", desc: "Build a collagen network to strengthen hair roots." },
      { tag: "Follicle laxity", desc: "Strengthen scalp skin structure to anchor follicles." }
    ],
    sessionPlanDesc: "A single session provides structural support effects that last for 12 to 18 months.",
    sessionPlanSteps: [
      { n: "01", label: "Scalp Mapping & Numbing", duration: "45 min", detail: "The scalp is marked in a grid pattern, and local anesthesia is applied for comfort." },
      { n: "02", label: "Thread Placement", duration: "30 min", detail: "PDO monothreads are placed under the scalp skin using thin needles." },
      { n: "03", label: "Post-Care Check", duration: "10 min", detail: "Sanitization is completed, and post-care guidelines are reviewed." }
    ],
    timelineDesc: "Soreness settles in 2 days, with structural effects showing over 3 months.",
    timelineItems: [
      { when: "Immediately", what: "Scalp may feel sore or tender with minor pinkness." },
      { when: "Day 2", what: "Soreness resolves. Return to normal shampoo routines." },
      { when: "Week 4", what: "Threads settle, and collagen stimulation begins." },
      { when: "Month 3+", what: "Blood flow and anchoring support improve hair strength." }
    ],
    ctaRating: "110+ scalp thread stories",
    ctaTitle: "Ready to strengthen",
    ctaTitle2: "scalp skin and hair anchoring?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a clinical scalp assessment to design a customized thread plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹20,000 / session" },
      { label: "Duration", val: "60 minutes" },
      { label: "Onset", val: "4 weeks" },
      { label: "Downtime", val: "1-2 days" },
      { label: "Performed by", val: "Dermatologist" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "exosomes": {
    id: "exosomes",
    title: "Regenerative Dermal",
    titleEmphasized: "Exosomes.",
    experienceNo: "Signature Experience",
    description: "Rejuvenate the skin at the cellular level with biotechnology-derived cellular signals to stimulate collagen and repair skin damage.",
    heroRating: "4.9 · Rated by 130+ patients",
    heroImage: "/services/hydrafacial-medifacial/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • Pure Exosomes • Cellular Repair",
    stats: [
      { n: "3-4", l: "Sessions recommended" },
      { n: "12-24h", l: "Downtime bumps" },
      { n: "7 Days", l: "Texture improvement" },
      { n: "100%", l: "Biotech pure yield" }
    ],
    whatIsThisTag: "What are Exosomes?",
    whatIsThisTitle: "This is",
    whatIsThisEmphasized: "cellular rejuvenation.",
    whatIsThisDesc1: "Exosomes are tiny vesicles derived from cells that contain growth factors, cytokines, and genetic signals. When injected, they instruct surrounding skin cells to repair and regenerate.",
    whatIsThisDesc2: "This treatment targets skin aging, acne scars, and uneven pigmentation at the cellular level, restoring skin thickness and elasticity.",
    benefits: [
      { icon: "🧬", b: "Cellular Signaling", d: "Triggers target skin cells to produce collagen and repair damage." },
      { icon: "✨", b: "Improves Density", d: "Thickens thin, papery skin on the cheeks and under-eyes." },
      { icon: "🎯", b: "Fades Pigmentation", d: "Regulates melanocytes to improve skin tone clarity." },
      { icon: "⚡", b: "No Downtime", d: "Micro-injections integrate with minimal soreness." }
    ],
    clinicalNote: "Exosomes are prepared in a sterile clinical room to protect cellular active signals.",
    sideImage: "/services/hydrafacial-medifacial/2.webp",
    machineTitle: "Biotech cellular signals",
    machineEmphasized: "for skin rejuvenation.",
    deviceName: "Premium Dermal Exosomes",
    deviceSub: "CELLULAR VEISLES • STERILE PREPARATION • MICRO-INJECTION",
    deviceDesc: "We use premium exosome formulations prepared under strict biotechnology standards to guarantee maximum safety and effectiveness.",
    deviceFeatures: ["Cellular Signaling", "Biotech Quality", "Micro-needles", "Dermatologist-led"],
    deviceImage: "/services/hydrafacial-medifacial/Hydrafacial  Medifacial.webp",
    comparisonTitle: "COSMO HOME vs Standard Care",
    comparisonRows: [
      { label: "Active Agent", ours: "Billions of exosome cellular signals", standard: "Basic peptide or vitamin serums" },
      { label: "Delivery", ours: "Micro-injections directly to the dermis", standard: "Superficial skin rubbing" },
      { label: "Safety", ours: "Sterile medical-grade preparation", standard: "Budget homecare creams" },
      { label: "Efficacy", ours: "Rebuilds dermal structure from within", standard: "Temporary moisture layer" }
    ],
    whoNeedsDesc: "Ideal for patients with thin skin, dull complexion, acne scars, or fine lines.",
    notSuitable: "Active skin infections, bleeding disorders, pregnancy.",
    whoNeedsItems: [
      { tag: "Thin skin texture", desc: "Rebuild dermal thickness and skin elasticity." },
      { tag: "Persistent dullness", desc: "Stimulate cellular turnover to brighten complexion." },
      { tag: "Acne scarring", desc: "Stimulate tissue remodeling to smooth scars." },
      { tag: "Superficial wrinkles", desc: "Plump up fine lines around eyes and neck." }
    ],
    sessionPlanDesc: "We recommend a course of 3 to 4 sessions, spaced 4 weeks apart, followed by seasonal maintenance.",
    sessionPlanSteps: [
      { n: "01", label: "Skin Assessment", duration: "15 min", detail: "Dr. Ruxana evaluates skin thickness and texture to map target areas." },
      { n: "02", label: "Exosome Injection", duration: "25 min", detail: "Exosomes are delivered to skin layers using precision micro-needles for comfort." },
      { n: "03", label: "Barrier Soothing", duration: "15 min", detail: "Soothing barrier repair creams are applied to minimize redness." }
    ],
    timelineDesc: "Skin softness improves in a few days, with maximum results at 4 weeks.",
    timelineItems: [
      { when: "Immediately", what: "Skin may show tiny injection bumps, resolving within 12-24 hours." },
      { when: "Day 3–5", what: "Skin feels softer, smoother, and more hydrated." },
      { when: "Week 4", what: "Dermal thickness and skin radiance show visible improvement." },
      { when: "Month 6+", what: "Exosome cellular signals degrade, signaling the time for maintenance." }
    ],
    ctaRating: "130+ exosome stories",
    ctaTitle: "Ready to stimulate",
    ctaTitle2: "cellular skin rejuvenation?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a clinical skin assessment to design a customized exosome plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹20,000 / session" },
      { label: "Duration", val: "45 minutes" },
      { label: "Recommended", val: "3-4 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "12-24 hours" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "laser-toning": {
    id: "laser-toning",
    title: "Brightening Laser",
    titleEmphasized: "Laser Toning.",
    experienceNo: "Signature Experience",
    description: "Gently target deep pigmentation and stimulate collagen with Q-switched laser energy for a brighter, more even skin tone.",
    heroRating: "4.8 · Rated by 160+ patients",
    heroImage: "/services/laser-pigment-reduction/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • Q-switched Nd:YAG • Brightening Expert",
    stats: [
      { n: "4-6", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "7 Days", l: "Brightness onset" },
      { n: "100%", l: "Doctor supervised" }
    ],
    whatIsThisTag: "What is Laser Toning?",
    whatIsThisTitle: "This is",
    whatIsThisEmphasized: "gentle brightening.",
    whatIsThisDesc1: "Laser Toning uses low-fluence Q-switched Nd:YAG laser energy to break up melanin pigments in the deep skin layers without damaging the outer skin.",
    whatIsThisDesc2: "This treatment is highly effective for reducing melasma, fading post-acne dark spots, and stimulating mild collagen for a bright, even skin tone with zero downtime.",
    benefits: [
      { icon: "✨", b: "Brightens Skin Tone", d: "Fades dark spots, sun spots, and melasma patches." },
      { icon: "🛡️", b: "No Downtime", d: "Immediate return to work and daily routines." },
      { icon: "🧬", b: "Stimulates Collagen", d: "Improves overall skin density and smoothness." },
      { icon: "⚡", b: "Gentle Energy", d: "Minimizes redness and irritation during treatment." }
    ],
    clinicalNote: "Laser parameters are calibrated to Fitzpatrick skin types to prevent irritation risks.",
    sideImage: "/services/laser-pigment-reduction/2.webp",
    machineTitle: "Low-fluence laser",
    machineEmphasized: "for gentle toning.",
    deviceName: "Q-Switched Nd:YAG Laser",
    deviceSub: "FDA-APPROVED • LOW-FLUENCE ACCURACY • PIGMENT TONING",
    deviceDesc: "We use advanced Q-switched laser systems to target melanin pigment clusters safely, protecting surrounding healthy cells.",
    deviceFeatures: ["FDA-Approved", "Q-switched Nd:YAG", "Calibrated Fluence", "Comfort Cooling"],
    deviceImage: "/services/laser-pigment-reduction/Laser Pigment Reduction.webp",
    comparisonTitle: "COSMO HOME vs Chemical Bleaches",
    comparisonRows: [
      { label: "Targeting", ours: "Laser energy targets melanin particles deep in skin", standard: "Chemicals dry out and strip skin surface" },
      { label: "Safety", ours: "Dermatologist-led low-fluence safety check", standard: "Over-the-counter creams with steroid risks" },
      { label: "Onset", ours: "Brightening visible in 1 to 2 sessions", standard: "Requires daily application for months" },
      { label: "Downtime", ours: "None (zero recovery time)", standard: "Irritation or redness common" }
    ],
    whoNeedsDesc: "Ideal for patients with uneven skin tone, melasma, dark acne spots, or dull skin.",
    notSuitable: "Active tan, active skin infections, pregnancy.",
    whoNeedsItems: [
      { tag: "Uneven skin tone", desc: "Restore color consistency across the face." },
      { tag: "Stubborn melasma", desc: "Fade hormonal pigment patches safely." },
      { tag: "Post-acne dark marks", desc: "Accelerate fading of brown spots after acne." },
      { tag: "Dull skin tone", desc: "Brighten complexion and stimulate mild collagen." }
    ],
    sessionPlanDesc: "We recommend a course of 4 to 6 sessions, spaced 2 to 3 weeks apart, for optimal brightening.",
    sessionPlanSteps: [
      { n: "01", label: "Skin Assessment", duration: "15 min", detail: "Dr. Ruxana maps pigmentation depth using clinical magnification." },
      { n: "02", label: "Laser Toning", duration: "20 min", detail: "Low-fluence laser sweeps are performed across target zones for comfort." },
      { n: "03", label: "Soothing & SPF", duration: "10 min", detail: "Soothing barrier serums and SPF are applied to protect target skin." }
    ],
    timelineDesc: "Complexion brightness increases in 7 days, with pigmentation fading in 4 weeks.",
    timelineItems: [
      { when: "Immediately", what: "Skin may show mild pinkness, resolving within a few hours." },
      { when: "Day 3–5", what: "Skin tone looks brighter and feels smoother." },
      { when: "Week 4", what: "Melasma patches and dark marks show visible fading." },
      { when: "Month 3+", what: "Continued improvements supported by maintenance sessions." }
    ],
    ctaRating: "160+ brightened stories",
    ctaTitle: "Ready to brighten",
    ctaTitle2: "uneven skin and dark spots?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a clinical skin assessment to design a customized laser toning plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹8,000 / session" },
      { label: "Duration", val: "45 minutes" },
      { label: "Recommended", val: "4-6 sessions" },
      { label: "Frequency", val: "Every 4-6 weeks" },
      { label: "Downtime", val: "None" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "prp": {
    id: "prp",
    title: "Scalp Growth Factor",
    titleEmphasized: "PRP.",
    experienceNo: "Signature Experience",
    description: "Stimulate hair growth and increase follicle thickness using active growth factors isolated from your own blood.",
    heroRating: "4.8 · Rated by 240+ patients",
    heroImage: "/services/exosomes-prp-gfc/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • Autologous Platelets • Hair Care",
    stats: [
      { n: "3-4", l: "Sessions recommended" },
      { n: "12-24h", l: "Downtime bumps" },
      { n: "4 Weeks", l: "Shedding reduction" },
      { n: "100%", l: "Autologous yield" }
    ],
    whatIsThisTag: "What is PRP?",
    whatIsThisTitle: "This is",
    whatIsThisEmphasized: "natural follicle repair.",
    whatIsThisDesc1: "Platelet-Rich Plasma (PRP) uses a sample of your own blood processed to isolate concentrated platelets. When injected into the scalp, these platelets release growth factors that nourish hair roots.",
    whatIsThisDesc2: "This treatment helps reverse hair thinning, wakes up dormant follicles, and strengthens hair anchoring to minimize hair loss naturally.",
    benefits: [
      { icon: "🌱", b: "Nourishes Hair Roots", d: "Delivers growth factors directly to hair follicles." },
      { icon: "🧬", b: "Reverses Hair Thinning", d: "Increases hair shaft thickness and density." },
      { icon: "✨", b: "Minimizes Hair Fall", d: "PDO micro-injections strengthen anchoring." },
      { icon: "🛡️", b: "Safe and Autologous", d: "Uses your own blood, eliminating allergy risks." }
    ],
    clinicalNote: "PRP is prepared in a closed sterile centrifuge to guarantee high active platelet count.",
    sideImage: "/services/exosomes-prp-gfc/2.webp",
    machineTitle: "Closed centrifuge",
    machineEmphasized: "for platelet isolation.",
    deviceName: "Medical PRP Centrifuge",
    deviceSub: "STERILE PREPARATION • COMFORT SYRINGE • SCALP VECTORING",
    deviceDesc: "We process your sample using double-spin parameters in a sterile system, delivering maximum platelet concentration to target follicles.",
    deviceFeatures: ["Closed Sterile Kits", "High Platelet Count", "Micro-needles", "Dermatologist-led"],
    deviceImage: "/services/exosomes-prp-gfc/3.webp",
    comparisonTitle: "COSMO HOME vs Standard PRP",
    comparisonRows: [
      { label: "Separation", ours: "Double-spin parameters for high platelet yield", standard: "Single-spin lab devices with low active count" },
      { label: "Injecting", ours: "Micro-droplet injection vectors for scalp", standard: "Deep bolus syringe shots (painful)" },
      { label: "Safety", ours: "Board-certified dermatologist-led sterile suite", standard: "Delegated non-medical operators" },
      { label: "Recovery", ours: "LED red light therapy is included to soothe scalp", standard: "Standard cleaning only" }
    ],
    whoNeedsDesc: "Ideal for patients with pattern hair thinning, androgenetic alopecia, or general hair fall.",
    notSuitable: "Bleeding disorders, blood thinners, active scalp infections, pregnancy.",
    whoNeedsItems: [
      { tag: "Pattern hair thinning", desc: "Stimulate dormant hair follicles to support density." },
      { tag: "General hair fall", desc: "Nourish hair roots to reduce daily shedding." },
      { tag: "Thin hair shafts", desc: "Deliver growth factors to increase hair thickness." },
      { tag: "DHT hair loss", desc: "Manage hormonal hair thinning in men and women." }
    ],
    sessionPlanDesc: "We recommend a course of 3 to 4 sessions, spaced 4 weeks apart, followed by seasonal maintenance.",
    sessionPlanSteps: [
      { n: "01", label: "Sample & Numbing", duration: "30 min", detail: "A blood sample is drawn, and scalp sanitization is completed for comfort." },
      { n: "02", label: "PRP Separation", duration: "15 min", detail: "The sample is centrifuged in a sterile system to isolate concentrated platelets." },
      { n: "03", label: "Precision Injection", duration: "20 min", detail: "PRP is injected into target thinning zones using precision micro-needles." }
    ],
    timelineDesc: "Hair shedding reduces in 4 weeks, with hair density improving in 3 months.",
    timelineItems: [
      { when: "Immediately", what: "Scalp may feel warm or show minor injection bumps, resolving in 12-24 hours." },
      { when: "Week 4", what: "Noticeable reduction in hair shedding and stronger hair roots." },
      { when: "Month 3", what: "Fine new hair growth begins to show in target zones." },
      { when: "Month 6+", what: "Continued density improvements supported by maintenance sessions." }
    ],
    ctaRating: "240+ hair density stories",
    ctaTitle: "Ready to reverse",
    ctaTitle2: "hair thinning and hair fall?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a clinical scalp assessment to design a customized PRP plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹10,000 / session" },
      { label: "Duration", val: "60 minutes" },
      { label: "Recommended", val: "3-4 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "12-24 hours" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "gfc": {
    id: "gfc",
    title: "Highly Purified",
    titleEmphasized: "GFC.",
    experienceNo: "Signature Experience",
    description: "Restore hair volume and scalp health with highly purified Growth Factor Concentrate derived from your own platelets for maximum effectiveness and safety.",
    heroRating: "4.9 · Rated by 270+ patients",
    heroImage: "/services/exosomes-prp-gfc/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • Purified Growth Factors • Hair Expert",
    stats: [
      { n: "3-4", l: "Sessions recommended" },
      { n: "12-24h", l: "Downtime bumps" },
      { n: "3 Weeks", l: "Reduced hair shedding" },
      { n: "100%", l: "Purified growth factors" }
    ],
    whatIsThisTag: "What is GFC?",
    whatIsThisTitle: "This is",
    whatIsThisEmphasized: "purified hair repair.",
    whatIsThisDesc1: "Growth Factor Concentrate (GFC) is an advanced hair treatment where growth factors are extracted from platelets and purified into a clear, cell-free solution. This guarantees direct action.",
    whatIsThisDesc2: "Because it contains zero red or white blood cells, it minimizes post-procedure soreness and inflammation, delivering optimal growth factors straight to target follicles.",
    benefits: [
      { icon: "🧬", b: "Purified Growth Factors", d: "High active concentration without inflammatory cells." },
      { icon: "🌱", b: "Follicle Reactivation", d: "Wakes up dormant follicles to support hair density." },
      { icon: "✨", b: "Less Soreness", d: "Cell-free solution minimizes swelling and pain." },
      { icon: "🛡️", b: "High Safety", d: "Prepared in sealed, medical-grade GFC tubes." }
    ],
    clinicalNote: "GFC tubes are processed to extract growth factors from platelets automatically.",
    sideImage: "/services/exosomes-prp-gfc/2.webp",
    machineTitle: "Purified separation",
    machineEmphasized: "for hair growth factors.",
    deviceName: "Medical GFC System",
    deviceSub: "PURIFIED EXTRACTION • STERILE SOLUTIONS • MINIMAL DISCOMFORT",
    deviceDesc: "We process your sample in specific GFC tubes to release active growth factors from platelets, creating a cell-free concentrate.",
    deviceFeatures: ["GFC Technology", "Cell-Free Solution", "Micro-needles", "Dermatologist-led"],
    deviceImage: "/services/exosomes-prp-gfc/3.webp",
    comparisonTitle: "COSMO HOME vs Standard PRP",
    comparisonRows: [
      { label: "Purity", ours: "Highly purified solution (no red/white blood cells)", standard: "Basic plasma containing inflammatory cells" },
      { label: "Soreness", ours: "Minimal swelling or post-injection soreness", standard: "Significant swelling and burning sensation" },
      { label: "Yield", ours: "Standardized high concentration of growth factors", standard: "Variable platelet count" },
      { label: "Safety", ours: "Sealed GFC tubes prevent contamination", standard: "Standard lab tubes" }
    ],
    whoNeedsDesc: "Ideal for patients with advanced hair thinning, androgenetic alopecia, or seeking rapid hair shedding control.",
    notSuitable: "Bleeding disorders, blood thinners, active scalp infections, pregnancy.",
    whoNeedsItems: [
      { tag: "Advanced hair thinning", desc: "Stimulate dormant hair follicles to support density." },
      { tag: "Pattern hair loss", desc: "Manage androgenetic alopecia in men and women." },
      { tag: "Severe hair shedding", desc: "Accelerate hair fall reduction and root anchoring." },
      { tag: "Thin hair follicles", desc: "Increase hair shaft thickness and quality." }
    ],
    sessionPlanDesc: "We recommend a course of 3 to 4 sessions, spaced 4 weeks apart, followed by seasonal maintenance.",
    sessionPlanSteps: [
      { n: "01", label: "Sample Collection", duration: "15 min", detail: "A blood sample is drawn in GFC tubes and prepared for activation." },
      { n: "02", label: "Activation & Separation", duration: "30 min", detail: "The sample is activated and centrifuged to isolate purified growth factors." },
      { n: "03", label: "GFC Injection", duration: "20 min", detail: "The cell-free concentrate is injected into target zones using precision micro-needles." }
    ],
    timelineDesc: "Hair shedding reduces in 3 weeks, with hair density improving in 3 months.",
    timelineItems: [
      { when: "Immediately", what: "Scalp may feel warm with minor pinkness, resolving in 12-24 hours." },
      { when: "Week 3", what: "Noticeable reduction in hair shedding and stronger hair roots." },
      { when: "Month 3", what: "Fine new hair growth begins to show in target zones." },
      { when: "Month 6+", what: "Continued density improvements supported by maintenance sessions." }
    ],
    ctaRating: "270+ GFC stories",
    ctaTitle: "Ready for purified",
    ctaTitle2: "hair growth factors?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a clinical scalp assessment to design a customized GFC plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹18,000 / session" },
      { label: "Duration", val: "60 minutes" },
      { label: "Recommended", val: "3-4 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "12-24 hours" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  },
  "mnrf-gfc": {
    id: "mnrf-gfc",
    title: "Combination Scar",
    titleEmphasized: "MNRF + GFC.",
    experienceNo: "Signature Experience",
    description: "Combine microneedling radiofrequency with purified growth factors (GFC) for maximum scar remodeling and skin tightening.",
    heroRating: "4.9 · Rated by 110+ patients",
    heroImage: "/services/laser-scar-reduction/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • Synergistic Remodeling • Scar Expert",
    stats: [
      { n: "3-4", l: "Sessions recommended" },
      { n: "1-2 Days", l: "Downtime redness" },
      { n: "3 Weeks", l: "Visible skin renewal" },
      { n: "100%", l: "Synergistic results" }
    ],
    whatIsThisTag: "What is MNRF + GFC?",
    whatIsThisTitle: "This is",
    whatIsThisEmphasized: "synergistic repair.",
    whatIsThisDesc1: "MNRF + GFC is a premium combination therapy that delivers radiofrequency energy deep into the skin via micro-needles, immediately followed by the infusion of purified Growth Factor Concentrate (GFC).",
    whatIsThisDesc2: "The RF energy breaks up old scar tissues, and GFC activates rapid cellular repair, providing maximum scar remodeling, pore tightening, and skin rejuvenation.",
    benefits: [
      { icon: "🧬", b: "Synergistic Action", d: "RF remodeling combined with GFC cellular repair." },
      { icon: "🎯", b: "Smoothes Deep Scars", d: "Maximizes lifting of depressed acne scars." },
      { icon: "✨", b: "Pore Tightening", d: "Firms the skin matrix to shrink pore appearance." },
      { icon: "⚡", b: "Faster Healing", d: "GFC accelerates skin barrier recovery." }
    ],
    clinicalNote: "GFC is applied immediately after MNRF to maximize absorption through micro-channels.",
    sideImage: "/services/laser-scar-reduction/2.webp",
    machineTitle: "RF and GFC",
    machineEmphasized: "for rapid repair.",
    deviceName: "MNRF Platform & GFC Preparation",
    deviceSub: "GOLD-PLATED NEEDLES • CELL-FREE CONCENTRATE • SYNERGY",
    deviceDesc: "We perform calibrated MNRF sweeps and immediately infuse cell-free GFC growth factors to trigger rapid skin repair.",
    deviceFeatures: ["MNRF Technology", "Purified GFC", "Synergistic Action", "Dermatologist-led"],
    deviceImage: "/services/laser-scar-reduction/Laser Scar Reduction.webp",
    comparisonTitle: "COSMO HOME vs Standard Care",
    comparisonRows: [
      { label: "Combination", ours: "MNRF immediately followed by activated GFC", standard: "MNRF with standard soothing gel" },
      { label: "Healing", ours: "GFC reduces post-procedure redness rapidly", standard: "Redness and swelling last for days" },
      { label: "Remodeling", ours: "Maximum collagen stimulation deep in dermis", standard: "Superficial healing only" },
      { label: "Safety", ours: "Board-certified dermatologist-led procedure", standard: "Performed by non-medical therapists" }
    ],
    whoNeedsDesc: "Ideal for patients with deep acne scars, severe skin texture issues, stretch marks, or large pores.",
    notSuitable: "Pregnancy, active cystic acne, keloid history, metal implants in the treatment area.",
    whoNeedsItems: [
      { tag: "Deep acne scars", desc: "Maximize collagen stimulation to lift deep scars." },
      { tag: "Severe texture issues", desc: "Resurface and rebuild rough skin layers." },
      { tag: "Enlarged pores", desc: "Firm up loose skin to tighten pore structures." },
      { tag: "Stretch marks", desc: "Rebuild collagen to smooth and blend stretch marks." }
    ],
    sessionPlanDesc: "We recommend a course of 3 to 4 sessions, spaced 4 weeks apart, followed by seasonal maintenance.",
    sessionPlanSteps: [
      { n: "01", label: "Numbing & GFC Draw", duration: "45 min", detail: "A blood sample is collected for GFC prep, and medical numbing is applied." },
      { n: "02", label: "MNRF Delivery", duration: "30 min", detail: "Calibrated MNRF sweeps are performed across target zones at precise depths." },
      { n: "03", label: "GFC Infusion", duration: "15 min", detail: "Purified GFC solution is infused into micro-channels, followed by a cooling mask." }
    ],
    timelineDesc: "Redness resolves in 1-2 days, with skin texture smoothing showing in 3 weeks.",
    timelineItems: [
      { when: "Immediately", what: "Skin looks red and feels hot. Minor grid marks are normal." },
      { when: "Day 2", what: "Redness fades rapidly due to GFC action. Bumps settle." },
      { when: "Week 3", what: "Visible texture smoothing and refined pores become noticeable." },
      { when: "Month 3+", what: "Peak collagen remodeling lifts deep scars and stretch marks." }
    ],
    ctaQuickFacts: [
      { label: "Price from", val: "₹28,000 / session" },
      { label: "Duration", val: "90 minutes" },
      { label: "Recommended", val: "3-4 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "1-2 days" }
    ],
    ctaRating: "110+ combination stories",
    ctaTitle: "Ready for maximum",
    ctaTitle2: "scar remodeling and repair?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a clinical scar assessment to design a customized MNRF + GFC plan.",
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format"
  }
};

