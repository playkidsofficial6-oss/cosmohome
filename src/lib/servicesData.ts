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
    subtitle?: string;
  };
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  "hifu": {
    id: "hifu",
    title: "Non-Surgical Lift",
    titleEmphasized: "HIFU.",
    experienceNo: "Signature Experience",
    description: "Rediscover the elegant architecture of your face. Our signature HIFU lift works deep within the SMAS layer—where structural definition begins—to gently sculpt, lift, and refine your contours. No surgeries, no downtime, just the quiet confidence of your natural beauty restored.",
    heroRating: "4.8 · Rated by 190+ patients",
    heroImage: "/services/hifu/hifu-new1.webp",
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
    whatIsThisTitle: "A journey to",
    whatIsThisEmphasized: "your skin's structural core.",
    whatIsThisDesc1: "True rejuvenation does not mask or pull; it rebuilds. The Cosmo Home HIFU experience delivers calibrated ultrasound energy deep into the SMAS layer—the same structural foundation lifted during surgery. By stimulating your cells from within, it triggers a gentle, progressive renewal that honors your natural expressions.",
    whatIsThisDesc2: "Guided by Dr. Ruxana's medical artistry, parameters are personalized to the unique contours of your face. As new collagen develops over the coming months, your skin lifts and firms naturally—revealing a refreshed, timeless version of yourself.",
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
    deviceImage: "/services/products-tech-images/ultraformer.webp",
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
    description: "A sanctuary for tired, dull skin. Our bespoke Hydrafacial and Medifacial experience combines clinical precision with deep nourishment. By purifying pores, gently polishing texture, and infusing moisture, we restore your skin's natural, healthy luminescence in a soothing home ambience.",
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
    whatIsThisTitle: "A clinical ritual",
    whatIsThisEmphasized: "for timeless skin health.",
    whatIsThisDesc1: "Beyond the surface of standard beauty facials lies true epidermal restoration. Our Hydrafacial treatment uses patented vortex technology to gently draw out impurities, clear congestion, and sweep away dry cells, preparing your skin to receive clinical-grade nourishment.",
    whatIsThisDesc2: "Every ritual is custom-formulated with antioxidants, peptides, and hyaluronic acid tailored to your skin barrier. You leave with an immediate, dewy radiance and a skin barrier that feels calm, balanced, and deeply cared for.",
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
    description: "Refine, clarify, and balance. Our dual-action resurfacing experience pairs medical-grade Mesopeels with carbon laser technology. Designed to gently dissolve dry skin, refine enlarged pores, and calm active breakouts, it reveals a polished, velvet-smooth skin texture.",
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
    whatIsThisTitle: "A targeted polish",
    whatIsThisEmphasized: "for epidermal clarity.",
    whatIsThisDesc1: "True skin refinement requires balance, not abrasion. Our curated peels utilize medical-grade organic acids calibrated to your skin's natural pH threshold. By gently dissolving dead cell bonds, they stimulate cell turnover without compromising your skin barrier.",
    whatIsThisDesc2: "For deeper purification, our Carbon Laser Peel uses organic carbon particles that sink into the pores. A Q-switched laser gently vaporizes the carbon, instantly lifting congestion, minimizing pores, and leaving your skin feeling clean, light, and beautifully balanced.",
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
    description: "Define and strengthen your natural core. Using high-intensity electromagnetic waves, this treatment induces powerful muscle contractions to build deep core strength, lift glutes, and sculpt definition, completely non-invasively.",
    heroRating: "4.8 · Rated by 160+ patients",
    heroImage: "/services/Muscle Sculpting/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Body Contouring Specialist",
    performedBySub: "Safe • Personalised • Professional",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "20k", l: "Contractions in 30 mins" },
      { n: "100%", l: "Non-invasive" }
    ],
    whatIsThisTitle: "Deep active toning",
    whatIsThisEmphasized: "for core muscle architecture.",
    whatIsThisDesc1: "True strength is built from within. Our muscle-defining treatment uses focused electromagnetic energy to bypass the skin and target deep muscle layers, inducing thousands of contractions that go far beyond voluntary workouts.",
    whatIsThisDesc2: "In a brief 30-minute session, targeted muscles undergo active structural remodeling. This rapid workload prompts fibers to adapt and strengthen, enhancing muscle density, refining definition, and boosting local metabolism.",
    benefits: [
      { icon: "💪", b: "Supramaximal contraction", d: "Stimulates 100% of muscle fibers (workouts reach 40%)" },
      { icon: "📈", b: "Core Strength Enhancement", d: "Strengthens abdominal and core muscles to improve posture and stability." },
      { icon: "✨", b: "Non-surgical lifting", d: "Firm and round glutes or define abdomen safely" },
      { icon: "🔥", b: "Fat Metabolism Boost", d: "Intense muscle contractions stimulate natural fat metabolism around the treated area." }
    ],
    clinicalNote: "Treatment intensity is customized based on your body composition and goals to maximize muscle definition safely.",
    sideImage: "/services/Muscle Sculpting/2.webp",
    machineTitle: "High-Intensity Muscle",
    machineEmphasized: "Contraction Technology.",
    deviceName: "HIFEM Body Sculpting System",
    deviceSub: "FDA Cleared · Medical-Grade HIFEM · Non-Invasive Toning",
    deviceDesc: "The HIFEM system penetrates deep into the subcutaneous tissue, inducing rapid muscle contractions. HIFEM technology delivers supramaximal muscle contractions that strengthen targeted muscles while stimulating natural fat metabolism—creating a firmer, more sculpted body without surgery or downtime.",
    deviceFeatures: ["HIFEM Technology", "Dual dual-paddle applicators", "Custom intensity programs", "Zero thermal energy"],
    deviceImage: "/services/products-tech-images/cm-slim.webp",
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
      beforeImage: "/services/Muscle Sculpting/before.webp",
      afterImage: "/services/Muscle Sculpting/after.webp",
      treatmentName: "HIFEM Abdominal Definition",
      testimonialText: "Even with regular exercise, I couldn't get my core definition back after pregnancy. Four sessions of muscle sculpting completely firmed up my abdominal wall.",
      patientName: "Aneena L., 31",
      subtitle: "High-intensity electromagnetic body definition"
    },
  },
  "body-contouring": {
    id: "body-contouring",
    title: "Precision Body",
    titleEmphasized: "Contouring.",
    experienceNo: "Signature Experience",
    description: "Honor your natural proportions, redefine your silhouette. Our personalized body contouring experiences combine advanced energy-based technologies to target stubborn fat pockets, sculpt contours, and reveal your natural proportions.",
    heroRating: "4.8 · Rated by 120+ patients",
    heroImage: "/services/body-contouring/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Body Contouring Specialist",
    performedBySub: "Safe • Personalised • Professional",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "100%", l: "Non-invasive" },
      { n: "4.8★", l: "Patient satisfaction" }
    ],
    whatIsThisTitle: "A bespoke contouring",
    whatIsThisEmphasized: "plan tailored to your silhouette.",
    whatIsThisDesc1: "Every body tells a unique story. We map your muscle-to-fat distribution and design a tailored protocol, combining radiofrequency and contouring energies to target specific zones like the abdomen, flanks, arms, and thighs.",
    whatIsThisDesc2: "We avoid standard templates. By focusing on your natural proportions, we deliver a gentle, progressive contouring experience that refines your curves and firms loose skin, helping you feel comfortable in your own skin.",
    benefits: [
      { icon: "✦", b: "Targeted fat reduction", d: "Precisely treats stubborn deposits resistant to diet and exercise" },
      { icon: "📐", b: "Natural silhouette shaping", d: "Restores your body's natural proportions and curves" },
      { icon: "✨", b: "Zero surgery", d: "Non-invasive protocols with no incisions or scarring" },
      { icon: "🔄", b: "Customised protocols", d: "Treatment plan tailored to your specific body zones and goals" }
    ],
    clinicalNote: "A body composition assessment is performed before treatment to identify target zones and select the most suitable contouring technology.",
    sideImage: "/services/body-contouring/2.webp",
    whoNeedsDesc: "Ideal for individuals looking to address localized fat deposits, improve body shape proportions, and contour specific regions such as thighs, hips, abdomen, and arms.",
    notSuitable: "Active infections in the treatment area, pregnancy, severe circulatory disorders, severe liver or kidney disease.",
    whoNeedsItems: [
      { tag: "Silhouette reshaping", desc: "Redefining natural body curves and proportions." },
      { tag: "Stubborn pockets", desc: "Reducing fat in areas resistant to diet and exercise." },
      { tag: "Cellulite smoothing", desc: "Smoothing out skin dimples on thighs and buttocks." },
      { tag: "Asymmetric contouring", desc: "Correcting contour irregularities for a balanced look." }
    ],
    machineTitle: "Advanced Body",
    machineEmphasized: "Reshaping Technology.",
    deviceName: "Multi-Modal Body Contouring System",
    deviceSub: "Clinically Validated · Non-Invasive · Personalised",
    deviceDesc: "Our body contouring system combines multiple energy modalities—radiofrequency, ultrasound, and electromagnetic—to target different tissue layers simultaneously. This multi-modal approach delivers superior results by addressing subcutaneous fat, skin laxity, and muscle tone in a single coordinated protocol.",
    deviceFeatures: ["Multi-modal energy delivery", "Real-time temperature monitoring", "Comfort-optimised applicators", "Zero thermal damage risk"],
    deviceImage: "/services/products-tech-images/cm-slim.webp",
    comparisonTitle: "COSMO HOME vs Standard Clinic",
    comparisonRows: [
      { label: "Approach", ours: "Personalised multi-modal protocol", standard: "Single device, fixed program" },
      { label: "Assessment", ours: "Full body composition mapping", standard: "Visual assessment only" },
      { label: "Technology", ours: "Latest FDA-cleared devices", standard: "Older generation equipment" },
      { label: "Downtime", ours: "Zero", standard: "Variable" }
    ],
    sessionPlanDesc: "A standard contouring program consists of 4 to 6 sessions spaced 1 to 2 weeks apart, depending on target areas.",
    sessionPlanSteps: [
      { n: "01", label: "Consultation & Mapping", duration: "15 min", detail: "We evaluate skin laxity, fat thickness, and body symmetry to outline the optimal treatment grid." },
      { n: "02", label: "Multi-Modal Treatment", duration: "45 min", detail: "Applicators deliver controlled radiofrequency and mechanical vacuum to heat fat layers and smooth tissue. Feels like a deep, warm massage." },
      { n: "03", label: "Post-Treatment Soothing", duration: "10 min", detail: "Skin is cleansed and a specialized soothing, firming complex is applied." }
    ],
    timelineDesc: "Skin tightness improves gradually, with significant contour refinements visible over 4 to 8 weeks.",
    timelineItems: [
      { when: "Immediately", what: "Treated skin feels warm, firm, and slightly flushed." },
      { when: "Week 2", what: "Local circulation increases, leading to a smoother skin texture." },
      { when: "Week 4", what: "Contours appear more defined as localized fat layers begin to thin out." },
      { when: "Month 2+", what: "Optimal silhouette contours and smoother skin texture are fully visible." }
    ],
    ctaRating: "120+ patients contoured",
    ctaTitle: "Ready to reshape",
    ctaTitle2: "your silhouette?",
    ctaEmphasized: "Book today.",
    ctaDesc: "A body composition assessment ensures we design the most targeted and effective contouring protocol for your specific goals.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹12,000 / session" },
      { label: "Duration", val: "45–60 minutes" },
      { label: "Recommended", val: "4–6 sessions" },
      { label: "Frequency", val: "Weekly" },
      { label: "Downtime", val: "None" },
      { label: "Performed by", val: "Contouring Specialist" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/body-contouring/before.webp",
      afterImage: "/services/body-contouring/after.webp",
      treatmentName: "Precision Body Contouring",
      testimonialText: "I had stubborn fat around my waist that wouldn't budge despite dieting. After 5 body contouring sessions, my waistline is completely transformed.",
      patientName: "Priya M., 34",
      subtitle: "Advanced non-surgical body reshaping"
    },
  },
  "fat-reduction": {
    id: "fat-reduction",
    title: "Advanced Fat",
    titleEmphasized: "Reduction.",
    experienceNo: "Signature Experience",
    description: "Target and release stubborn fat pockets with precision. Our advanced fat reduction experiences use non-invasive cooling and energy platforms to target subcutaneous fat cells, allowing your body to naturally clear them for a refined contour.",
    heroRating: "4.9 · Rated by 95+ patients",
    heroImage: "/services/Fat Reduction Body/1 .webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Body Specialist",
    performedBySub: "Safe • Personalised • Professional",
    stats: [
      { n: "3–5", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "25%", l: "Fat layer reduction" },
      { n: "100%", l: "Non-surgical" }
    ],
    whatIsThisTitle: "Targeted cell clearance",
    whatIsThisEmphasized: "for a refined silhouette.",
    whatIsThisDesc1: "When persistent fat deposits do not respond to diet or exercise, we use advanced cooling technology to selectively target subcutaneous fat cells. The cold prompts the cells to break down naturally without harming surrounding tissues.",
    whatIsThisDesc2: "Over the following weeks, your body's natural processes sweep away the cleared cells. You see a gradual, lasting reduction in the treated zone—restoring balanced proportions with zero surgery or downtime.",
    benefits: [
      { icon: "🔥", b: "Permanent fat cell elimination", d: "Targeted cells are permanently destroyed and naturally eliminated" },
      { icon: "📏", b: "Measurable fat reduction", d: "Up to 25% reduction in fat layer thickness per treatment course" },
      { icon: "⚡", b: "No surgery required", d: "Completely non-invasive with no incisions or anaesthesia" },
      { icon: "🌿", b: "Natural elimination", d: "Body processes destroyed fat cells through the lymphatic system" }
    ],
    clinicalNote: "Fat thickness is measured before and after treatment using clinical assessment tools to track and document reduction progress.",
    sideImage: "/services/Fat Reduction Body/2.webp",
    whoNeedsDesc: "Designed for individuals looking to eliminate stubborn fat bulges in areas like the belly, love handles, back fat, or under the chin.",
    notSuitable: "Cryoglobulinemia, cold urticaria, pregnancy, active hernia in the treatment zone.",
    whoNeedsItems: [
      { tag: "Love handles & flanks", desc: "Reducing stubborn fat pockets on the sides of the waist." },
      { tag: "Under-chin fat", desc: "Defining the jawline by reducing submental fat." },
      { tag: "Abdominal bulges", desc: "Eliminating localized fat in the upper and lower belly." },
      { tag: "Thigh & back fat", desc: "Slimming down targeted bulges for a smoother fit in clothing." }
    ],
    machineTitle: "Clinical Fat",
    machineEmphasized: "Elimination Technology.",
    deviceName: "Advanced Fat Reduction System",
    deviceSub: "FDA Cleared · Clinically Proven · Non-Invasive",
    deviceDesc: "Our fat reduction system uses controlled energy delivery to selectively target and destroy subcutaneous fat cells while leaving surrounding tissue unharmed. The precise targeting ensures consistent, measurable results across all treatment zones.",
    deviceFeatures: ["Selective fat cell targeting", "Surrounding tissue protection", "Real-time monitoring", "Comfortable treatment experience"],
    deviceImage: "/services/products-tech-images/cm-slim.webp",
    comparisonTitle: "COSMO HOME vs Standard Clinic",
    comparisonRows: [
      { label: "Technology", ours: "Latest-gen energy platforms", standard: "Older generation devices" },
      { label: "Tracking", ours: "Pre/post fat thickness measurement", standard: "Visual assessment only" },
      { label: "Protocol", ours: "Personalised zone targeting", standard: "Generic applicator placement" },
      { label: "Results", ours: "Measurable, documented reduction", standard: "Variable outcomes" }
    ],
    sessionPlanDesc: "A course of 3 to 5 sessions spaced 4 weeks apart is typically recommended for optimal results.",
    sessionPlanSteps: [
      { n: "01", label: "Fat Thickness Analysis", duration: "15 min", detail: "We measure and mark fat deposits to position the applicators for maximum coverage and symmetry." },
      { n: "02", label: "Cryo-Sculpting Session", duration: "45 min", detail: "Targeted fat is vacuum-drawn into the cooling panel. Cold sensation transitions to numbness within 5-10 minutes." },
      { n: "03", label: "Active Massage", duration: "5 min", detail: "A vital manual massage breaks up frozen fat crystals to accelerate the cellular elimination process." }
    ],
    timelineDesc: "The body naturally processes and flushes out the destroyed fat cells over a 2 to 3 month period.",
    timelineItems: [
      { when: "Immediately", what: "The area feels cold, firm, and temporary numbness or redness is expected." },
      { when: "Week 2", what: "Numbness fades, and the body's natural lymphatic clearance process begins." },
      { when: "Week 6", what: "First visible reduction in fat layer thickness. Clothes start fitting looser." },
      { when: "Month 3", what: "Maximum fat reduction (up to 25% of treated fat layer) is fully realized." }
    ],
    ctaRating: "95+ patients treated",
    ctaTitle: "Ready to eliminate",
    ctaTitle2: "stubborn fat permanently?",
    ctaEmphasized: "Start now.",
    ctaDesc: "A body assessment maps your target fat zones and designs the most effective reduction protocol for lasting results.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹18,000 / session" },
      { label: "Duration", val: "45 minutes" },
      { label: "Recommended", val: "3–5 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "None" },
      { label: "Performed by", val: "Body Specialist" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/Fat Reduction Body/before.webp",
      afterImage: "/services/Fat Reduction Body/after.webp",
      treatmentName: "Advanced Fat Reduction",
      testimonialText: "The fat on my abdomen that diet and exercise couldn't touch is now gone. Completely non-invasive and zero downtime.",
      patientName: "Ananya R., 31",
      subtitle: "Permanent non-surgical fat elimination"
    },
  },
  "body-tightening": {
    id: "body-tightening",
    title: "Skin & Body",
    titleEmphasized: "Tightening.",
    experienceNo: "Signature Experience",
    description: "Firm and restore your skin's natural elasticity. Our body tightening experiences deliver focused radiofrequency heat deep into the dermal tissue, stimulating a powerful collagen remodel to firm loose skin on the abdomen, thighs, and arms.",
    heroRating: "4.8 · Rated by 110+ patients",
    heroImage: "/services/Body Tightening/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Aesthetic Specialist",
    performedBySub: "Safe • Personalised • Professional",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "6 mo", l: "Progressive improvement" },
      { n: "100%", l: "Non-invasive" }
    ],
    whatIsThisTitle: "Deep thermal vectors",
    whatIsThisEmphasized: "for skin elasticity.",
    whatIsThisDesc1: "Loose skin requires structural repair at the dermal level. We deliver multi-polar radiofrequency energy deep into the tissues, warming the skin matrix to stimulate the cells responsible for elasticity.",
    whatIsThisDesc2: "This targeted warmth triggers a natural contraction of collagen fibers and prompts the synthesis of new elastin. Over a series of sessions, loose skin firms up, textures soften, and your body contours feel tightened and renewed.",
    benefits: [
      { icon: "🔬", b: "Deep collagen stimulation", d: "Energy penetrates to tissue layers that control skin structure" },
      { icon: "📈", b: "Progressive improvement", d: "Results continue to improve over 3–6 months post-treatment" },
      { icon: "✨", b: "Natural-looking results", d: "Gradual tightening looks natural, not surgical" },
      { icon: "💧", b: "Skin quality improvement", d: "Improves texture, tone, and overall skin elasticity" }
    ],
    clinicalNote: "Skin elasticity and firmness are assessed before and after treatment. Radiofrequency temperature is monitored in real-time to ensure safe, effective collagen stimulation.",
    sideImage: "/services/Body Tightening/2.webp",
    whoNeedsDesc: "Ideal for anyone experiencing mild to moderate skin laxity, crepey skin, or sagging after pregnancy or weight fluctuations.",
    notSuitable: "Pacemakers, internal defibrillators, metal implants in the treatment zone, pregnancy.",
    whoNeedsItems: [
      { tag: "Post-pregnancy tightening", desc: "Restoring abdominal skin firmness and elasticity." },
      { tag: "Upper arms laxity", desc: "Tightening sagging skin underneath the arms ('bat wings')." },
      { tag: "Inner & outer thighs", desc: "Smoothing and firming loose skin around the thighs." },
      { tag: "Crepey knee skin", desc: "Revitalizing skin structure and elasticity around the joints." }
    ],
    machineTitle: "Deep Collagen",
    machineEmphasized: "Remodelling Technology.",
    deviceName: "Radiofrequency Body Tightening System",
    deviceSub: "FDA Cleared · Collagen Stimulating · Non-Invasive",
    deviceDesc: "Our radiofrequency tightening system delivers controlled thermal energy to the deep dermis and subdermal tissue. The precise temperature targets activate fibroblasts—the cells responsible for collagen and elastin production—without damaging overlying skin.",
    deviceFeatures: ["Deep dermis thermal targeting", "Real-time temperature control", "Multi-polar RF delivery", "Skin cooling protection"],
    deviceImage: "/services/products-tech-images/cm-slim.webp",
    comparisonTitle: "COSMO HOME vs Standard Clinic",
    comparisonRows: [
      { label: "Depth", ours: "Deep dermis & subdermal layers", standard: "Surface level only" },
      { label: "Monitoring", ours: "Real-time temperature tracking", standard: "Manual estimation" },
      { label: "Protocol", ours: "Customised per skin zone", standard: "Generic applicator" },
      { label: "Results timeline", ours: "Progressive over 6 months", standard: "Variable and short-lived" }
    ],
    sessionPlanDesc: "We recommend a sequence of 4 to 6 sessions scheduled 2 to 3 weeks apart to allow collagen remodeling.",
    sessionPlanSteps: [
      { n: "01", label: "Skin Assessment", duration: "15 min", detail: "We test skin elasticity, measure hydration, and map the treatment zones for precise energy depth." },
      { n: "02", label: "Thermal Collagen Induction", duration: "45 min", detail: "Radiofrequency or focused ultrasound energy is delivered. Feels like pleasant, pulsing deep warmth." },
      { n: "03", label: "Collagen Boost Infusion", duration: "10 min", detail: "A nourishing clinical serum rich in peptides and hyaluronic acid is massaged into the warm, receptive skin." }
    ],
    timelineDesc: "Initial tightening is visible from heat-induced collagen contraction, with progressive improvements as new collagen grows.",
    timelineItems: [
      { when: "Immediately", what: "Skin feels tighter and warmer. A temporary plumped, healthy glow is visible." },
      { when: "Week 2", what: "Early collagen synthesis begins, resulting in smoother and more hydrated skin texture." },
      { when: "Month 2", what: "Significant tightening is visible as new collagen fibers organize and strengthen." },
      { when: "Month 6", what: "Optimal tightening and skin lift achieved. Skin feels firm, bouncy, and youthful." }
    ],
    ctaRating: "110+ patients tightened",
    ctaTitle: "Ready to restore",
    ctaTitle2: "your skin's firmness?",
    ctaEmphasized: "Book now.",
    ctaDesc: "A skin assessment ensures we target the correct tissue depth and select the most effective tightening protocol for your specific concern.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹10,000 / session" },
      { label: "Duration", val: "45–60 minutes" },
      { label: "Recommended", val: "4–6 sessions" },
      { label: "Frequency", val: "Every 2–3 weeks" },
      { label: "Downtime", val: "None" },
      { label: "Performed by", val: "Aesthetic Specialist" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/Body Tightening/before.webp",
      afterImage: "/services/Body Tightening/after.webp",
      treatmentName: "Body Skin Tightening",
      testimonialText: "After losing weight, I had loose skin on my abdomen and arms. The body tightening sessions have noticeably firmed everything up without surgery.",
      patientName: "Meena S., 34",
      subtitle: "Deep radiofrequency collagen remodelling"
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
    technologyTag: "🧬 Regenerative Science",
    ourDeviceLabel: "✅ Autologous Method",
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
      subtitle: "Growth Factor Concentrate for hair density",
    },
  },
  "botox": {
    id: "botox",
    title: "Wrinkle Relaxing",
    titleEmphasized: "Botox.",
    experienceNo: "Signature Experience",
    description: "Confidence, never correction. Soften the trace of expressive lines with our precision-targeted wrinkle relaxing treatments. Our philosophy is rooted in subtle, dynamic calibration—relaxing tension while preserving the natural warmth and movement of your expressions.",
    heroRating: "4.9 · Rated by 320+ patients",
    heroImage: "/services/Botox/1.webp",
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
    whatIsThisTitle: "The art of",
    whatIsThisEmphasized: "preserved expression.",
    whatIsThisDesc1: "A dynamic face is a beautiful face. We use premium, FDA-approved purified proteins to gently relax hyperactive muscles that cause forehead creases, frown lines, and crow's feet. Instead of freezing movement, we calibrate the dose to soften shadows.",
    whatIsThisDesc2: "Administered with Dr. Ruxana's precise understanding of facial muscle networks, the treatment takes minutes but offers months of restfulness. You look refreshed, relaxed, and entirely like yourself.",
    benefits: [
      { icon: "✨", b: "Smooths Fine Lines", d: "Visibly softens forehead lines, frown lines, and crow's feet." },
      { icon: "🛡️", b: "Preventive Care", d: "Keeps static wrinkles from forming over time." },
      { icon: "⚡", b: "Quick Procedure", d: "Done in 15 minutes with micro-needles." },
      { icon: "🌿", b: "Natural Expression", d: "Retains facial expression while softening aging signs." }
    ],
    clinicalNote: "Doses are precisely calibrated to preserve natural facial expression and muscle dynamics.",
    technologyTag: "🧪 The Formulation",
    ourDeviceLabel: "✅ Premium Brands",
    sideImage: "/services/Botox/2.webp",
    machineTitle: "Precision isolation",
    machineEmphasized: "for muscle relaxing.",
    deviceName: "FDA-Approved Purified Proteins",
    deviceSub: "PREMIUM BRANDS • STERILE SYSTEM • PINPOINT PRECISION",
    deviceDesc: "We exclusively use original, FDA-approved botulinum toxin formulations to guarantee maximum safety and predictable, natural-looking results.",
    deviceFeatures: ["FDA-Approved", "Original Products", "Precise Dosing", "Comfort-Focused Needle"],
    deviceImage: "/services/Botox/3.webp",
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
      { n: "01", label: "Muscle Mapping", duration: "15 min", detail: "Our dermatologist evaluates your facial movements, muscle strength, and anatomy to mark precise injection points." },
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
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/Botox/before.webp",
      afterImage: "/services/Botox/after.webp",
      treatmentName: "Botox Wrinkle Relaxing",
      testimonialText: "I wanted to soften my frown lines without looking frozen. The results are subtle, natural, and precisely what I hoped for.",
      patientName: "Priyanka M., 34",
      subtitle: "Dynamic wrinkle relaxation for expression lines"
    },
  },
  "fillers": {
    id: "fillers",
    title: "Volume Restoration",
    titleEmphasized: "Dermal Fillers.",
    experienceNo: "Signature Experience",
    description: "Restore volume, honor your proportions. Our bespoke dermal filler treatments are designed to rebuild structural support and contour flat zones with soft hyaluronic acid gels. We focus on harmony and light, refining your cheeks, lips, and jawline with natural elegance.",
    heroRating: "4.8 · Rated by 210+ patients",
    heroImage: "/services/fillers/1.webp",
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
    whatIsThisTitle: "Symmetry, harmony,",
    whatIsThisEmphasized: "and structural support.",
    whatIsThisDesc1: "With time, the deep support structures of the face naturally shift. We use premium hyaluronic acid gels to replace lost volume, gently lifting shadow lines around the mouth and eyes, and accentuating the cheek and jawline architecture.",
    whatIsThisDesc2: "Our artistic approach values understatement. By mapping your native bone structure, we place small amounts of filler precisely where they enhance light and shadow—keeping your expressions soft, balanced, and completely authentic.",
    benefits: [
      { icon: "✨", b: "Instant Lift & Volume", d: "Restores cheeks, temples, and lips immediately." },
      { icon: "🧬", b: "Natural Hyaluronic Acid", d: "Absorbable medical gels that hydrate the skin matrix." },
      { icon: "⚖️", b: "Proportional Harmony", d: "Rebalances facial symmetry and profile aesthetics." },
      { icon: "⏱️", b: "Long-Lasting Results", d: "Sustained improvement for 9 to 18 months." }
    ],
    clinicalNote: "We exclusively use premium, cohesive hyaluronic acid gels for smooth integration with tissue layers.",
    technologyTag: "✨ The Formulation",
    ourDeviceLabel: "✅ Premium Gels",
    sideImage: "/services/fillers/2.webp",
    machineTitle: "Structural support",
    machineEmphasized: "using premium gels.",
    deviceName: "Hyaluronic Acid Fillers",
    deviceSub: "FDA-APPROVED GELS • SEAMLESS INTEGRATION • EXPERT ANATOMICAL PLACEMENT",
    deviceDesc: "We select specific gel densities (from soft lip fillers to firm structural jaw fillers) using top-tier global brands to guarantee predictable lifting and safety.",
    deviceFeatures: ["FDA-Approved GELS", "Cohesive Technology", "Anatomical Precision", "Reversible Option"],
    deviceImage: "/services/fillers/3.webp",
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
      { n: "01", label: "Anatomical Assessment", duration: "20 min", detail: "Our dermatologist evaluates facial symmetry, skin laxity, and fat pad structure to establish a balanced placement roadmap." },
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
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/fillers/before.webp",
      afterImage: "/services/fillers/after.webp",
      treatmentName: "Dermal Fillers Volume Restoration",
      testimonialText: "My cheeks and jawline feel beautifully contoured and restored. The treatment was comfortable and the results look completely natural.",
      patientName: "Shweta K., 38",
      subtitle: "Hyaluronic acid dermal fillers for volume restoration"
    },
  },
  "vampire-lift": {
    id: "vampire-lift",
    title: "Regenerative Glow",
    titleEmphasized: "Vampire Lift.",
    experienceNo: "Signature Experience",
    description: "Activate the self-repairing power of your own skin. The Vampire Lift is an organic cellular therapy combining precision microneedling with your body's pure growth factors. Designed to remodel scar tissue, shrink pores, and restore elasticity with natural chemistry.",
    heroRating: "4.8 · Rated by 180+ patients",
    heroImage: "/services/Vampire Lift/1.webp",
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
    whatIsThisTitle: "The organic power",
    whatIsThisEmphasized: "of cellular self-repair.",
    whatIsThisDesc1: "Your skin holds the blueprint for its own healing. We isolate platelet-rich growth factors from a small sample of your own blood, and infuse them deep into the dermis using automated microneedling to trigger a rapid cellular rebuild.",
    whatIsThisDesc2: "This autologous therapy is free of synthetic chemicals or additives. It breaks up fibrous scar tissue, stimulates fresh collagen, and leaves your skin feeling dense, smooth, and lit from within.",
    benefits: [
      { icon: "🧬", b: "Natural Rejuvenation", d: "Uses your own platelets to stimulate cellular growth." },
      { icon: "✨", b: "Smooths Texture", d: "Reduces pore size, fine lines, and rough patches." },
      { icon: "🎯", b: "Fades Acne Scars", d: "Breaks down old scar tissue and builds new collagen." },
      { icon: "🌟", b: "Deep Radiance", d: "Accelerates cell renewal for a lasting clinical glow." }
    ],
    clinicalNote: "We use high-concentration sterile centrifuges to harvest maximum growth factor yield safely.",
    technologyTag: "🧬 Regenerative Science",
    ourDeviceLabel: "✅ Autologous Method",
    sideImage: "/services/Vampire Lift/2.webp",
    machineTitle: "Autologous cellular",
    machineEmphasized: "skin restoration.",
    deviceName: "Medical PRP Centrifuge & Dermapen",
    deviceSub: "HIGH-SPEED SEPARATION • DERMAPEN PRECISION • STERILE SYSTEM",
    deviceDesc: "Your blood is processed in a closed sterile kit to isolate active platelets, which are then infused into the skin during automated microneedling.",
    deviceFeatures: ["Closed Sterile Kits", "High Platelet Yield", "Calibrated Microneedles", "LED Recovery Support"],
    deviceImage: "/services/Vampire Lift/3.webp",
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
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/Vampire Lift/before.webp",
      afterImage: "/services/Vampire Lift/after.webp",
      treatmentName: "Vampire Lift Regenerative Therapy",
      testimonialText: "My acne scars have smoothed out significantly and my skin has a healthy, refreshed glow that I haven't seen in years.",
      patientName: "Aman S., 28",
      subtitle: "Platelet-rich plasma combined with microneedling"
    },
  },
  "thread-lift": {
    id: "thread-lift",
    title: "Non-Surgical lifting",
    titleEmphasized: "Thread Lift.",
    experienceNo: "Signature Experience",
    description: "Redefine your profile with structural precision. Our non-surgical thread lift uses medical-grade, fully absorbable sutures to lift sagging cheeks, soften jowls, and restore a firm, defined jawline. A gentle, modern alternative to surgical contouring.",
    heroRating: "4.8 · Rated by 140+ patients",
    heroImage: "/services/thread lift/1.webp",
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
    whatIsThisTitle: "Precision vectors",
    whatIsThisEmphasized: "for a non-surgical lift.",
    whatIsThisDesc1: "We place medical-grade PDO threads along targeted lift vectors beneath the skin. This provides an immediate, gentle lift to sagging facial contours, restoring the classic triangle of youth without major surgery or scars.",
    whatIsThisDesc2: "As the threads gradually and safely dissolve over the following months, they stimulate a lasting framework of fresh collagen. Your skin becomes firmer and holds its youthful lift naturally and progressively.",
    benefits: [
      { icon: "✨", b: "Immediate Mechanical Lift", d: "Instantly lifts sagging cheeks, jowls, and neck skin." },
      { icon: "🧬", b: "Collagen Stimulation", d: "Triggers deep collagen production around the thread vector." },
      { icon: "🛡️", b: "Absorbable Material", d: "Uses safe, bio-compatible suture material used in surgery." },
      { icon: "⚡", b: "Minimal Recovery", d: "Quick recovery compared to traditional surgical facelifts." }
    ],
    clinicalNote: "Threads are carefully placed along precise vectors to achieve a balanced, natural lift.",
    technologyTag: "🧵 Suture Vectors",
    ourDeviceLabel: "✅ Premium Threads",
    sideImage: "/services/thread lift/2.webp",
    machineTitle: "Structural vectors",
    machineEmphasized: "for natural lifting.",
    deviceName: "PDO & PLLA Cog Threads",
    deviceSub: "BIO-COMPATIBLE SUTURES • STERILE THEATRE • ANATOMICAL MAPPING",
    deviceDesc: "We use premium, high-strength PDO cog threads designed to hold facial tissue securely and stimulate collagen safely.",
    deviceFeatures: ["PDO/PLLA Material", "Surgical-Grade Quality", "Precision Cannulas", "Completely Absorbable"],
    deviceImage: "/services/thread lift/3.webp",
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
      { n: "01", label: "Vector Mapping", duration: "15 min", detail: "Our dermatologist maps your face in an upright position, marking the lift vectors and entry points." },
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
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/thread lift/before.webp",
      afterImage: "/services/thread lift/after.webp",
      treatmentName: "Thread Lift Contour Sculpting",
      testimonialText: "I noticed an immediate lift in my lower face and jawline. The recovery was quick and the contours look beautifully defined.",
      patientName: "Renu G., 46",
      subtitle: "Absorbable PDO thread lifting for facial contouring"
    },
  },
  "skin-boosters": {
    id: "skin-boosters",
    title: "Deep Dewy",
    titleEmphasized: "Skin Boosters.",
    experienceNo: "Signature Experience",
    description: "The ultimate hydration ritual. Skin Boosters infuse the deeper layers of your skin with micro-droplets of pure, non-crosslinked hyaluronic acid and essential nutrients. Experience the true glass-skin effect—elastic, plump, and deeply hydrated from within.",
    heroRating: "4.9 · Rated by 260+ patients",
    heroImage: "/services/Skin Boosters/1.webp",
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
    whatIsThisTitle: "Moisture unlocked",
    whatIsThisEmphasized: "from the deep dermis.",
    whatIsThisDesc1: "No amount of topical moisturizer can mimic the radiance of deep dermal hydration. Skin Boosters work by delivering pure, water-binding hyaluronic acid molecules directly into the dermis, creating a moisture reservoir beneath the surface.",
    whatIsThisDesc2: "This treatment restores elasticity, plumps superficial dryness lines, and refines texture across the face and neck. The result is a natural, dewy, lit-from-within glow that looks healthy and youthful.",
    benefits: [
      { icon: "💧", b: "Intense Hydration", d: "Pulls moisture deep into the skin for a plump look." },
      { icon: "✨", b: "Dewy Glass Skin", d: "Restores a healthy, natural glow that creams cannot reach." },
      { icon: "🧬", b: "Improves Elasticity", d: "Stimulates collagen to firm up crepey skin." },
      { icon: "🌿", b: "Smooths Fine Lines", d: "Plumps superficial dryness lines on cheeks and neck." }
    ],
    clinicalNote: "Micro-injections are distributed evenly to maximize moisture and glow across target zones.",
    technologyTag: "💧 The Formulation",
    ourDeviceLabel: "✅ Premium Hydrators",
    sideImage: "/services/Skin Boosters/2.webp",
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
      { n: "01", label: "Skin Assessment", duration: "15 min", detail: "Our dermatologist evaluates skin hydration, elasticity, and texture to map the injection zones." },
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
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/injections/before.webp",
      afterImage: "/services/before&after/injections/after.webp",
      treatmentName: "Skin Boosters Deep Hydration",
      testimonialText: "My dry skin has transformed completely. It feels hydrated, plump, and has a steady, natural glow every day.",
      patientName: "Divya N., 31",
      subtitle: "Micro-injections of hyaluronic acid for deep skin hydration"
    },
  },
  "skin-boosters-anti-ageing": {
    id: "skin-boosters-anti-ageing",
    title: "Anti-Ageing",
    titleEmphasized: "Skin Boosters.",
    experienceNo: "Signature Experience",
    description: "Rejuvenate and restore skin volume. Our Anti-Ageing Skin Boosters restore youthful plumpness, smooth fine lines, and rebuild structural hydration from within. Experience a natural, lifted, and refreshed glow.",
    heroRating: "4.9 · Rated by 120+ patients",
    heroImage: "/services/Skin Boosters/1.webp",
    performedByLabel: "👩‍⚕️ Administered by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • Deep Hydration • Lift & Firm Effect",
    stats: [
      { n: "30 Min", l: "Procedure time" },
      { n: "12-24h", l: "Downtime bumps" },
      { n: "7 Days", l: "Dewy glow onset" },
      { n: "6-9 Mo", l: "Results duration" }
    ],
    whatIsThisTag: "What are Skin Boosters?",
    whatIsThisTitle: "Volume restored",
    whatIsThisEmphasized: "from the deep dermis.",
    whatIsThisDesc1: "With age, the skin's natural hyaluronic acid content decreases, leading to fine lines and loss of elasticity. Our Anti-Ageing Skin Boosters deliver water-binding hyaluronic acid molecules directly into the dermis layers to replenish and lift.",
    whatIsThisDesc2: "This treatment restores skin density, softens crepey skin on the cheeks and neck, and stimulates healthy collagen production. You leave with a firmer, smoother, and youthful-looking complexion.",
    benefits: [
      { icon: "🧬", b: "Restores Elasticity", d: "Stimulates collagen synthesis to firm up sagging skin." },
      { icon: "💧", b: "Intense Hydration", d: "Pulls moisture deep into the skin to restore lost volume." },
      { icon: "🌿", b: "Smooths Fine Lines", d: "Plumps superficial wrinkles and crepey neck texture." },
      { icon: "✨", b: "Youthful Radiance", d: "Delivers a natural, refreshed, and hydrated appearance." }
    ],
    clinicalNote: "Treatment parameters are customized to target specific aging zones like cheeks, neck, and hands.",
    technologyTag: "💧 The Formulation",
    ourDeviceLabel: "✅ Premium Hydrators",
    sideImage: "/services/Skin Boosters/2.webp",
    machineTitle: "Micro-injection",
    machineEmphasized: "collagen stimulation.",
    deviceName: "Premium Skin Hydrators",
    deviceSub: "HA HYDRATORS • MICRO-DROPLET INJECTIONS • DEEP WATER BINDING",
    deviceDesc: "We use premium dermal hydrators (like Profhilo or Restylane Vital) based on your aging pattern and skin texture.",
    deviceFeatures: ["Pure Hyaluronic Acid", "Micro-needles", "Intense Water Retention", "Elasticity Support"],
    deviceImage: "/services/Skin Boosters/3.webp",
    comparisonTitle: "COSMO HOME vs Topical Serums",
    comparisonRows: [
      { label: "Penetration", ours: "Delivered directly into the dermis layers", standard: "Stays on the dead outer skin layer" },
      { label: "Duration", ours: "Deep hydration lasting 6 to 9 months", standard: "Washes away or fades within hours" },
      { label: "Plumping", ours: "Plumps dynamic fine lines from within", standard: "Temporary skin softening only" },
      { label: "Efficacy", ours: "Clinically proven to boost skin elasticity", standard: "Superficial cosmetic improvement" }
    ],
    whoNeedsDesc: "Excellent for patients looking to address dry, crepey, or thinning skin, fine lines, or loss of facial volume.",
    notSuitable: "Pregnancy, active skin infections, known allergy to treatment ingredients.",
    whoNeedsItems: [
      { tag: "Loss of volume", desc: "Restore youthful plumpness to aging facial contours." },
      { tag: "Crepey skin", desc: "Firm up thin, papery skin on cheeks or neck." },
      { tag: "Fine surface lines", desc: "Plump wrinkles caused by collagen loss and dehydration." },
      { tag: "Dull skin", desc: "Bring back a healthy, natural, youthful glow." }
    ],
    sessionPlanDesc: "Depending on the hydrator, we recommend 1 to 2 sessions followed by maintenance every 6 months.",
    sessionPlanSteps: [
      { n: "01", label: "Skin Assessment", duration: "15 min", detail: "Our dermatologist evaluates skin aging patterns and texture to map the injection zones." },
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
    ctaRating: "120+ dewy glass skin cases",
    ctaTitle: "Ready for deep",
    ctaTitle2: "youthful, dewy glow?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a clinical hydration assessment to design a custom booster plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹18,000 / session" },
      { label: "Duration", val: "30-45 minutes" },
      { label: "Onset", val: "7 days" },
      { label: "Downtime", val: "12-24 hours" },
      { label: "Performed by", val: "Dermatologist" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/Skin Boosters/before.webp",
      afterImage: "/services/Skin Boosters/after.webp",
      treatmentName: "Anti-Ageing Skin Boosters",
      testimonialText: "My fine lines are much softer, and my skin has a steady, plump radiance that makes me look and feel refreshed.",
      patientName: "Mini V., 45",
      subtitle: "Micro-injections of hyaluronic acid for deep skin hydration and volume"
    },
  },
  "skin-boosters-acne": {
    id: "skin-boosters-acne",
    title: "Acne & Texture",
    titleEmphasized: "Skin Boosters.",
    experienceNo: "Signature Experience",
    description: "Balance and refine your complexion. Our specialized Skin Boosters for acne-prone skin improve hydration without clogging pores, smoothing post-acne texture and calming inflammation.",
    heroRating: "4.8 · Rated by 90+ patients",
    heroImage: "/services/Skin Boosters/1.webp",
    performedByLabel: "👩‍⚕️ Administered by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • Non-Comedogenic Hydration • Texture Refinement",
    stats: [
      { n: "30 Min", l: "Procedure time" },
      { n: "12-24h", l: "Downtime bumps" },
      { n: "7 Days", l: "Texture smoothing onset" },
      { n: "6-9 Mo", l: "Results duration" }
    ],
    whatIsThisTag: "What are Skin Boosters?",
    whatIsThisTitle: "Balanced hydration",
    whatIsThisEmphasized: "for post-acne skin.",
    whatIsThisDesc1: "Acne-prone skin is often dry beneath the surface due to harsh topical acne treatments. Our specialized skin boosters deliver deep hydration using non-comedogenic hyaluronic acid formulations to soothe and restore balance.",
    whatIsThisDesc2: "This treatment refines uneven skin texture, minimizes the appearance of minor post-acne scarring, and calms redness. The result is a smooth, balanced, and healthy-looking complexion.",
    benefits: [
      { icon: "💧", b: "Non-Comedogenic", d: "Deeply hydrates the skin without blocking or clogging pores." },
      { icon: "✨", b: "Refines Texture", d: "Smooths out minor post-acne scarring and rough patches." },
      { icon: "🌿", b: "Calms Redness", d: "Soothes inflammation and irritation caused by acne treatments." },
      { icon: "🧬", b: "Supports Healing", d: "Promotes healthy cell regeneration and skin barrier repair." }
    ],
    clinicalNote: "Formulated specifically to ensure deep hydration without triggering active acne breakouts.",
    technologyTag: "💧 The Formulation",
    ourDeviceLabel: "✅ Premium Hydrators",
    sideImage: "/services/Skin Boosters/2.webp",
    machineTitle: "Micro-injection",
    machineEmphasized: "pore refinement.",
    deviceName: "Non-Comedogenic Skin Hydrators",
    deviceSub: "HYALURONIC ACID • BARRIER REPAIR • TEXTURE RESURFACING",
    deviceDesc: "We select specialized, light-textured dermal hydrators (like Juvederm Volite or Restylane) that deliver maximum hydration without oiliness.",
    deviceFeatures: ["Non-Comedogenic HA", "Micro-needles", "Texture Smoothing", "Skin Barrier Support"],
    deviceImage: "/services/hydrafacial-medifacial/Hydrafacial  Medifacial.webp",
    comparisonTitle: "COSMO HOME vs Standard Moisturizers",
    comparisonRows: [
      { label: "Pore Clogging", ours: "Oil-free deep hydration, zero clogged pores", standard: "Thick creams can trap sebum and cause breakouts" },
      { label: "Penetration", ours: "Delivered to target layers under the surface", standard: "Sits on the surface, leaving skin greasy" },
      { label: "Texture Smoothing", ours: "Improves minor scarring from within", standard: "Temporary softening of surface skin" },
      { label: "Redness Control", ours: "Calms inflammation from the dermis level", standard: "Provides only brief cooling relief" }
    ],
    whoNeedsDesc: "Ideal for patients recovering from acne, with uneven post-acne skin texture, dryness from acne medications, or minor scarring.",
    notSuitable: "Active, severe cystic acne flare-ups in the immediate injection sites, pregnancy.",
    whoNeedsItems: [
      { tag: "Post-acne dryness", desc: "Restore hydration after drying topical acne treatments." },
      { tag: "Uneven texture", desc: "Smooth minor superficial scarring and rough skin." },
      { tag: "Inflamed skin", desc: "Calm lingering redness and support skin barrier repair." },
      { tag: "Dull complexion", desc: "Bring back a healthy, natural, oil-free glow." }
    ],
    sessionPlanDesc: "We recommend 1 to 2 sessions followed by maintenance every 6 months depending on skin healing progress.",
    sessionPlanSteps: [
      { n: "01", label: "Skin Assessment", duration: "15 min", detail: "Our dermatologist evaluates acne history and skin texture to select the safest hydrator." },
      { n: "02", label: "Micro-Droplet Infusion", duration: "25 min", detail: "Micro-injections are precisely placed in targeted zones using fine needles." },
      { n: "03", label: "Barrier Soothing", duration: "10 min", detail: "A cooling, anti-inflammatory treatment is applied to soothe the skin." }
    ],
    timelineDesc: "Hydration starts showing in a few days, with maximum texture improvement at 2 weeks.",
    timelineItems: [
      { when: "Immediately", what: "Injection bumps and mild pinkness resolve within 12-24 hours." },
      { when: "Day 3–5", what: "Skin feels calmer, smoother, and deeply hydrated." },
      { when: "Day 7–14", what: "Visible improvement in skin texture and tone." },
      { when: "Month 6+", what: "Hyaluronic acid slowly degrades, signaling the time for maintenance." }
    ],
    ctaRating: "90+ texture refinement cases",
    ctaTitle: "Ready for clearer,",
    ctaTitle2: "hydrated skin?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a clinical hydration assessment to design a custom booster plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹18,000 / session" },
      { label: "Duration", val: "30-45 minutes" },
      { label: "Onset", val: "7 days" },
      { label: "Downtime", val: "12-24 hours" },
      { label: "Performed by", val: "Dermatologist" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/injections/before.webp",
      afterImage: "/services/before&after/injections/after.webp",
      treatmentName: "Skin Boosters for Acne & Texture",
      testimonialText: "My skin was dry and peeling from acne meds. This booster hydrated my skin completely without causing any new breakouts.",
      patientName: "Maya K., 30",
      subtitle: "Micro-injections of hyaluronic acid for post-acne skin repair"
    },
  },
  "skin-boosters-skin-renewal": {
    id: "skin-boosters-skin-renewal",
    title: "Skin Renewal",
    titleEmphasized: "Skin Boosters.",
    experienceNo: "Signature Experience",
    description: "The ultimate skin renewal and hydration ritual. Skin Boosters infuse the deeper layers of your skin with micro-droplets of pure, non-crosslinked hyaluronic acid and essential nutrients. Experience the true glass-skin effect—elastic, plump, and deeply hydrated from within.",
    heroRating: "4.9 · Rated by 260+ patients",
    heroImage: "/services/Skin Boosters/1.webp",
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
    whatIsThisTitle: "Moisture unlocked",
    whatIsThisEmphasized: "from the deep dermis.",
    whatIsThisDesc1: "No amount of topical moisturizer can mimic the radiance of deep dermal hydration. Skin Boosters work by delivering pure, water-binding hyaluronic acid molecules directly into the dermis, creating a moisture reservoir beneath the surface.",
    whatIsThisDesc2: "This treatment restores elasticity, plumps superficial dryness lines, and refines texture across the face and neck. The result is a natural, dewy, lit-from-within glow that looks healthy and youthful.",
    benefits: [
      { icon: "💧", b: "Intense Hydration", d: "Pulls moisture deep into the skin for a plump look." },
      { icon: "✨", b: "Dewy Glass Skin", d: "Restores a healthy, natural glow that creams cannot reach." },
      { icon: "🧬", b: "Improves Elasticity", d: "Stimulates collagen to firm up crepey skin." },
      { icon: "🌿", b: "Smooths Fine Lines", d: "Plumps superficial dryness lines on cheeks and neck." }
    ],
    clinicalNote: "Micro-injections are distributed evenly to maximize moisture and glow across target zones.",
    technologyTag: "💧 The Formulation",
    ourDeviceLabel: "✅ Premium Hydrators",
    sideImage: "/services/Skin Boosters/2.webp",
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
      { n: "01", label: "Skin Assessment", duration: "15 min", detail: "Our dermatologist evaluates skin hydration, elasticity, and texture to map the injection zones." },
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
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/injections/before.webp",
      afterImage: "/services/before&after/injections/after.webp",
      treatmentName: "Skin Boosters Deep Hydration",
      testimonialText: "My dry skin has transformed completely. It feels hydrated, plump, and has a steady, natural glow every day.",
      patientName: "Divya N., 31",
      subtitle: "Micro-injections of hyaluronic acid for deep skin hydration"
    },
  },
  "mnrf": {
    id: "mnrf",
    title: "Deep Rebuilding",
    titleEmphasized: "MNRF.",
    experienceNo: "Signature Experience",
    description: "Rebuild structural skin density. Our advanced MNRF treatment combines precision microneedling with radiofrequency energy to break down fibrous scar tissue, shrink open pores, and lift sagging jowls from within.",
    heroRating: "4.8 · Rated by 190+ patients",
    heroImage: "/services/MNRF/1.webp",
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
    whatIsThisTitle: "Deep thermal vectors",
    whatIsThisEmphasized: "for scar restructuring.",
    whatIsThisDesc1: "We use insulated, gold-plated micro-needles to deliver radiofrequency thermal energy directly into the deep dermis layers. By leaving the outer skin intact, we trigger powerful collagen remodeling with minimal surface redness.",
    whatIsThisDesc2: "This treatment is highly effective for lifting depressed acne scars, tightening a softening jawline, and refining skin texture. The parameters are carefully calibrated by Dr. Ruxana to suit your skin structure.",
    benefits: [
      { icon: "🧬", b: "Deep Remodeling", d: "Stimulates collagen synthesis in the deep dermis layers." },
      { icon: "🎯", b: "Smoothes Acne Scars", d: "Plumps up deep rolling and boxcar scars." },
      { icon: "⚡", b: "Skin Tightening", d: "Improves skin elasticity and redefines contours." },
      { icon: "🛡️", b: "Safe for Indian Skin", d: "Fractional RF energy minimizes pigmentation risks." }
    ],
    clinicalNote: "Needle depth and RF energy are calibrated to target scar thickness safely.",
    sideImage: "/services/MNRF/2.webp",
    machineTitle: "Focused RF energy",
    machineEmphasized: "for scar remodeling.",
    deviceName: "Medical-Grade MNRF Platform",
    deviceSub: "FDA-APPROVED • GOLD-PLATED NEEDLES • PRECISION CONTROL",
    deviceDesc: "We use premium MNRF technology with insulated gold-plated needles, allowing precise depth control (0.5mm to 3.5mm) to protect the skin barrier.",
    deviceFeatures: ["FDA-Approved", "Insulated Needles", "Precision Depth Control", "Minimal Epidermal Heat"],
    deviceImage: "/services/products-tech-images/scarlet.webp",
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
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/MNRF/before.webp",
      afterImage: "/services/MNRF/after.webp",
      treatmentName: "MNRF Skin Tightening",
      testimonialText: "My skin feels firmer, tighter, and my open pores are much less visible. The improvement in texture is remarkable.",
      patientName: "Vikram R., 35",
      subtitle: "Microneedling Fractional Radiofrequency for skin tightening"
    },
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
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/Laser Scar Reduction/before.webp",
      afterImage: "/services/before&after/Laser Scar Reduction/after.webp",
      treatmentName: "Dermapen Collagen Induction",
      testimonialText: "A gentle but effective treatment. My acne marks have faded and my skin texture feels incredibly smooth.",
      patientName: "Anjali P., 26",
      subtitle: "Micro-needling therapy for texture and pigmentation"
    },
  },
  "co2-laser": {
    id: "co2-laser",
    title: "Deep Laser Resurfacing",
    titleEmphasized: "CO2 Laser.",
    experienceNo: "Signature Experience",
    description: "Resurface, rebuild, renew. The fractional CO2 laser is the gold standard for severe skin texture irregularities, fine wrinkles, and deep acne scars, replacing damaged tissue with fresh, smooth skin.",
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
    whatIsThisTitle: "Fractional micro-beams",
    whatIsThisEmphasized: "for absolute skin renewal.",
    whatIsThisDesc1: "Our fractional scanner delivers microscopic laser beams that penetrate into the deep dermal layers, creating precise thermal channels while preserving healthy skin bridges to ensure fast healing and safety.",
    whatIsThisDesc2: "This targeted heat triggers a powerful cellular response that breaks down old scarred tissue and replaces it with fresh, smooth, and firm collagen fibers, restoring uniform texture over several weeks.",
    benefits: [
      { icon: "🧬", b: "Deep Collagen Remodeling", d: "Replaces old damaged fibers with fresh skin." },
      { icon: "🎯", b: "Reduces Fine Lines", d: "Softens deep wrinkles and improves skin firmness." },
      { icon: "✨", b: "Smoothes Severe Scars", d: "Fades rolling, boxcar, and surgical scars." },
      { icon: "⚡", b: "Improves Skin Tightness", d: "Reduces skin laxity and refines overall texture." }
    ],
    clinicalNote: "Treatment parameters are customized to protect the surrounding skin and support fast healing.",
    technologyTag: "🔬 The Technology",
    ourDeviceLabel: "✅ Our Technology",
    sideImage: "/services/laser-scar-reduction/2.webp",
    machineTitle: "Fractional CO2 beams",
    machineEmphasized: "for deep resurfacing.",
    deviceName: "Fractional CO2 Laser System",
    deviceSub: "FDA-APPROVED • PRECISION SCANNER • DEEP REMODELING",
    deviceDesc: "We use advanced fractional CO2 laser technology with a precision scanner, delivering micro-beams to target tissue layers safely.",
    deviceFeatures: ["FDA-Approved", "Precision Scanner", "Adjustable Pulse", "Comfort Cooling"],
    deviceImage: "/services/products-tech-images/micro-cell.webp",
    comparisonTitle: "COSMO HOME vs Standard Laser",
    comparisonRows: [
      { label: "Fractional", ours: "Micro-beams preserve tissue bridges (fast healing)", standard: "Ablative beams damage entire surface (slow healing)" },
      { label: "Precision", ours: "Dermatologist-calibrated pulse and scanning", standard: "Fixed settings with burning risks" },
      { label: "Comfort", ours: "Numbing cream and cold air support", standard: "High heat with minimal cooling" },
      { label: "Recovery", ours: "Calming barrier recovery system included", standard: "Standard ointment only" }
    ],
    whoNeedsDesc: "Perfect for patients with deep acne scars, surgical scars, open pores, or severe skin texture issues.",
    notSuitable: "Active tan, history of keloids, active skin infections, pregnancy.",
    whoNeedsItems: [
      { tag: "Deep acne scars", desc: "Break up scar fibers and lift skin tissue." },
      { tag: "Fine lines & wrinkles", desc: "Stimulates deep collagen production to plump aged skin." },
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
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/Laser Scar Reduction/before.webp",
      afterImage: "/services/before&after/Laser Scar Reduction/after.webp",
      treatmentName: "CO2 Laser Resurfacing",
      testimonialText: "The fractional CO2 laser worked wonders on my deep scars. The texture of my skin has improved dramatically.",
      patientName: "Roshni J., 28",
      subtitle: "Fractional CO2 laser resurfacing for deep skin remodelling"
    },
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
    technologyTag: "🧬 Regenerative Science",
    ourDeviceLabel: "✅ Cellular Shield",
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
      { n: "01", label: "Scalp Mapping", duration: "15 min", detail: "Our dermatologist evaluates scalp health and follicle density to identify target zones." },
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
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/injections/before.webp",
      afterImage: "/services/before&after/injections/after.webp",
      treatmentName: "Dutexome Exosome Therapy",
      testimonialText: "Combining exosome therapy with microneedling gave me rapid healing and an incredible boost in skin brightness and firmness.",
      patientName: "Kavitha L., 40",
      subtitle: "Premium dual-chamber exosome therapy for cellular regeneration"
    },
  },
  "hair-mesotherapy": {
    id: "hair-mesotherapy",
    title: "Scalp Micro-Nutrient",
    titleEmphasized: "Mesotherapy.",
    experienceNo: "Signature Experience",
    description: "A nourishing rain for your hair roots. Scalp Mesotherapy delivers a customized blend of essential vitamins, minerals, and amino acids directly into the dermal layer of the scalp, reviving thinning hair and restoring its healthy, glossy strength.",
    heroRating: "4.8 · Rated by 150+ patients",
    heroImage: "/services/Hair Mesotherapy/1.webp",
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
    whatIsThisTitle: "Deep root feeding",
    whatIsThisEmphasized: "for hair vitality.",
    whatIsThisDesc1: "Healthy hair begins with a nourished scalp. We deliver targeted micro-injections of a clinical-grade cocktail—rich in vitamins, active minerals, and peptides—directly to the hair follicles, providing immediate nourishment where generic treatments cannot reach.",
    whatIsThisDesc2: "This nutrient infusion wakes up tired roots, improves circulation, and helps block the hormones responsible for premature hair fall. Your hair grows back stronger, shinier, and visibly denser.",
    benefits: [
      { icon: "🌱", b: "Follicle Nourishment", d: "Delivers essential vitamins directly to hair roots." },
      { icon: "⚡", b: "Improves Circulation", d: "Stimulates blood flow to support follicle health." },
      { icon: "✨", b: "Reduces Hair Fall", d: "Strengthens hair shafts and minimizes shedding." },
      { icon: "🛡️", b: "No Downtime", d: "Immediate return to daily activities." }
    ],
    clinicalNote: "Nutrient cocktails are customized based on scalp health and hair quality.",
    technologyTag: "🧪 The Formulation",
    ourDeviceLabel: "✅ Active Serums",
    sideImage: "/services/Hair Mesotherapy/2.webp",
    machineTitle: "Nutrient-rich cocktails",
    machineEmphasized: "for hair strength.",
    deviceName: "Premium Mesotherapy Cocktails",
    deviceSub: "VITAMINS & MINERALS • STERILE MICRO-INJECTION • HAIR CARE",
    deviceDesc: "We use premium, medical-grade mesotherapy cocktails containing essential vitamins and peptides to support hair growth safely.",
    deviceFeatures: ["Nutrient-Rich", "Sterile Cocktails", "Micro-needles", "DHT Blockers"],
    deviceImage: "/services/Hair Mesotherapy/3.webp",
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
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/Hair Mesotherapy/before.webp",
      afterImage: "/services/Hair Mesotherapy/after.webp",
      treatmentName: "Scalp Micro-Nutrient Mesotherapy",
      testimonialText: "The results of my scalp micro-nutrient mesotherapy treatment exceeded my expectations. My hair feels stronger and healthier.",
      patientName: "Ananya K., 29",
      subtitle: "Scalp nutrient infusion for hair shedding and root health"
    },
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
    technologyTag: "🧵 Suture Vectors",
    ourDeviceLabel: "✅ Absorbable Threads",
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
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/injections/before.webp",
      afterImage: "/services/before&after/injections/after.webp",
      treatmentName: "Scalp PDO Monothreads",
      testimonialText: "I had significant thinning around my crown. PDO monothreads have anchored my hair roots, reducing fall and improving density.",
      patientName: "Karthik S., 36",
      subtitle: "PDO thread grid vectoring for follicle anchoring and scalp support"
    },
  },
  "exosomes-face": {
    id: "exosomes-face",
    title: "Regenerative Dermal",
    titleEmphasized: "Exosomes.",
    experienceNo: "Face Renewal Experience",
    description: "The frontier of facial rejuvenation. Dermal Exosome therapy delivers billions of highly concentrated, biotechnology-derived cell-signaling molecules deep into the facial dermis, prompting rapid skin repair, refining acne scars, and smoothing fine lines.",
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
    whatIsThisTitle: "Biotech cell signals",
    whatIsThisEmphasized: "for skin resurfacing and renewal.",
    whatIsThisDesc1: "Dermal Exosomes are microscopic cell-signaling vesicles harvested from pure stem cells, rich in growth factors and structural proteins. When delivered directly into the facial skin layers, they signal fibroblast cells to produce new collagen and elastin.",
    whatIsThisDesc2: "This treatment dramatically increases skin thickness, refines stubborn post-acne scarring, tightens pores, and softens fine dryness lines around the eyes and cheeks—all without using synthetic fillers.",
    benefits: [
      { icon: "🧬", b: "Collagen Rebuilding", d: "Instructs facial skin cells to dramatically increase collagen and elastin." },
      { icon: "✨", b: "Refines Skin Texture", d: "Helps smooth out post-acne scarring and refines enlarged pores." },
      { icon: "🎯", b: "Fades Pigmentation", d: "Balances melanin production to clear up sun damage and uneven tone." },
      { icon: "⚡", b: "Fast Dermal Healing", d: "Accelerates skin barrier repair with minimal downtime bumps." }
    ],
    clinicalNote: "Exosome formulations are kept frozen and prepared immediately before treatment in a sterile clinical room to preserve active cell-signaling states.",
    technologyTag: "🧬 Regenerative Science",
    ourDeviceLabel: "✅ Cellular Vesicles",
    sideImage: "/services/hydrafacial-medifacial/2.webp",
    machineTitle: "Biotech exosomes",
    machineEmphasized: "for dermal regeneration.",
    deviceName: "Premium Dermal Exosomes",
    deviceSub: "CELLULAR SIGNALING • SKIN TEXTURE REPAIR • PH BUFFERED",
    deviceDesc: "We utilize premium exosome serums (like ASCE+) containing billions of active vesicles to trigger deep cellular remodeling.",
    deviceFeatures: ["ASCE+ Exosomes", "Cell-signaling Vesicles", "Microneedling Delivery", "Dermatologist-formulated"],
    deviceImage: "/services/hydrafacial-medifacial/Hydrafacial  Medifacial.webp",
    comparisonTitle: "COSMO HOME vs Topical Serums",
    comparisonRows: [
      { label: "Active Agent", ours: "Billions of exosome cellular signals", standard: "Basic cosmetic peptide creams" },
      { label: "Delivery Depth", ours: "Delivered directly into the dermis", standard: "Sits superficially on dead skin layer" },
      { label: "Scar Remodeling", ours: "Clinically proven to repair acne scars", standard: "No effect on structural skin scarring" },
      { label: "Efficacy Onset", ours: "Visible glow and elasticity in 7 days", standard: "Takes months for minor hydration changes" }
    ],
    whoNeedsDesc: "Perfect for patients with thin papery skin, persistent dullness, superficial wrinkles, or post-acne scarring.",
    notSuitable: "Active skin infections in target injection sites, pregnancy, bleeding disorders.",
    whoNeedsItems: [
      { tag: "Acne & texture scars", desc: "Stimulates dermal tissue remodeling to smooth out uneven indentations." },
      { tag: "Thin under-eye skin", desc: "Increases dermal thickness to soften dark circles and crepey skin." },
      { tag: "Superficial wrinkles", desc: "Plump early fine lines across cheeks, mouth, and forehead." },
      { tag: "Dull damaged skin", desc: "Restores healthy skin barrier function and lit-from-within glow." }
    ],
    sessionPlanDesc: "We recommend a course of 3 to 4 sessions, spaced 4 weeks apart, followed by maintenance every 6 months.",
    sessionPlanSteps: [
      { n: "01", label: "Facial Mapping", duration: "15 min", detail: "Our dermatologist maps target skin zones and selects the optimal exosome formulation." },
      { n: "02", label: "Serums Infusion", duration: "25 min", detail: "Exosome signaling vesicles are infused into target dermis layers using micro-injection sweeps." },
      { n: "03", label: "Soothing Recovery", duration: "15 min", detail: "A professional calming barrier repair mask is applied to minimize redness." }
    ],
    timelineDesc: "Initial skin hydration and softness return in 3 days, with structural improvements visible by week 4.",
    timelineItems: [
      { when: "Immediately", what: "Skin feels plump and tight, with minor redness resolving in 12-24 hours." },
      { when: "Day 3–5", what: "Facial skin texture feels smoother, softer, and deeply hydrated." },
      { when: "Week 4", what: "Dermal density improves and fine dryness lines appear softened." },
      { when: "Month 6+", what: "Exosome cell signals degrade, signaling the time for maintenance." }
    ],
    ctaRating: "130+ skin renewal stories",
    ctaTitle: "Ready to restore",
    ctaTitle2: "your skin's density?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a skin assessment to design a custom dermal exosome plan with our dermatologist.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹20,000 / session" },
      { label: "Duration", val: "45 minutes" },
      { label: "Recommended", val: "3-4 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "12-24 hours" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/injections/before.webp",
      afterImage: "/services/before&after/injections/after.webp",
      treatmentName: "Dermal Exosome Therapy",
      testimonialText: "My skin has completely renewed. The texture is smoother, my acne scars are softer, and it looks so healthy.",
      patientName: "Sneha V., 33",
      subtitle: "Dermal exosome therapy for facial skin rejuvenation and scar repair"
    },
  },
  "exosomes-injectables": {
    id: "exosomes-injectables",
    title: "Cellular Injectable",
    titleEmphasized: "Exosomes.",
    experienceNo: "Signature Injectable Experience",
    description: "Advanced regenerative medicine. Our Injectable Exosomes deliver billions of highly purified, stem-cell-derived signaling vesicles directly to targeted tissue layers to accelerate healing, restore cellular health, and promote deep tissue repair.",
    heroRating: "4.9 · Rated by 130+ patients",
    heroImage: "/services/exosomes-injectables/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Board-Certified Dermatologist",
    performedBySub: "Safe • Pure Exosomes • Cellular Repair",
    stats: [
      { n: "3-4", l: "Sessions recommended" },
      { n: "12-24h", l: "Downtime bumps" },
      { n: "7 Days", l: "Texture improvement" },
      { n: "100%", l: "Biotech pure yield" }
    ],
    whatIsThisTag: "What are Injectable Exosomes?",
    whatIsThisTitle: "Pure regenerative vesicles",
    whatIsThisEmphasized: "for structural tissue healing.",
    whatIsThisDesc1: "Injectable Exosomes are highly concentrated active vesicles containing growth factors, co-enzymes, and amino acids. Prepared under strict clinical standards, they act as intercellular messengers, signaling target tissues to repair damage and generate new healthy cells.",
    whatIsThisDesc2: "This autologous-free regenerative therapy triggers deep dermal cell repair, targets chronic inflammation, and boosts collagen synthesis at a structural level without adding synthetic volume.",
    benefits: [
      { icon: "🧬", b: "Deep Tissue Repair", d: "Triggers target tissue cells to repair damage and synthesize collagen." },
      { icon: "✨", b: "Cellular Signaling", d: "Acts as intercellular messengers to activate natural healing mechanisms." },
      { icon: "🎯", b: "Calms Inflammation", d: "Strong anti-inflammatory signals calm irritated or compromised tissues." },
      { icon: "⚡", b: "Safe Pure Formula", d: "Ultra-pure biotech preparation ensures high safety and predictable results." }
    ],
    clinicalNote: "Exosomes are kept in deep-freeze environments and reconstituted immediately before injection to maintain cell signaling active states.",
    technologyTag: "🧬 Regenerative Science",
    ourDeviceLabel: "✅ Cellular Vesicles",
    sideImage: "/services/exosomes-injectables/2.webp",
    machineTitle: "Biotech exosomes",
    machineEmphasized: "for cellular injectables.",
    deviceName: "Clinical Injectable Exosomes",
    deviceSub: "STEM CELL VESICLES • CELLULAR SIGNALLING • STRUCTURAL REPAIR",
    deviceDesc: "We select standardized clinical exosome formulations containing highly concentrated growth factor signals to trigger target cell renewal.",
    deviceFeatures: ["Purified Stem Cell Vesicles", "Intercellular Messaging", "Clinical-grade Formulation", "Sterile Preparation"],
    deviceImage: "/services/exosomes-injectables/3.webp",
    comparisonTitle: "COSMO HOME vs Standard Care",
    comparisonRows: [
      { label: "Active Agent", ours: "Billions of exosome cell-signaling vesicles", standard: "Basic vitamin or peptide injections" },
      { label: "Purity", ours: "Highly purified biotechnology standards", standard: "Basic chemical compounds" },
      { label: "Action Mechanism", ours: "Signals cells to repair and regenerate", standard: "Provides raw material only" },
      { label: "Safety", ours: "Completely sterile clinical preparation", standard: "Standard salon care" }
    ],
    whoNeedsDesc: "Ideal for patients looking for advanced cell regeneration, deep tissue healing, and non-surgical restoration.",
    notSuitable: "Active skin infections, bleeding disorders, pregnancy.",
    whoNeedsItems: [
      { tag: "Advanced skin aging", desc: "Restores healthy cellular communication to reverse aging signs." },
      { tag: "Compromised skin barrier", desc: "Calms chronic inflammation and accelerates tissue healing." },
      { tag: "Structured cell damage", desc: "Stimulates dermal tissue remodeling for overall tissue strength." },
      { tag: "Non-filler volume boost", desc: "Improves skin health and tone without synthetics." }
    ],
    sessionPlanDesc: "We recommend a personalized protocol of 3 to 4 sessions, spaced 4 weeks apart, for optimal tissue repair.",
    sessionPlanSteps: [
      { n: "01", label: "Clinical Assessment", duration: "15 min", detail: "Our dermatologist conducts a medical evaluation of tissue health to plan target zones." },
      { n: "02", label: "Targeted Injection", duration: "25 min", detail: "The reconstituted exosome serum is delivered to target tissue layers using micro-needles." },
      { n: "03", label: "Post-procedure Care", duration: "15 min", detail: "Skin is cleansed and a specialized recovery ointment is applied to protect injection points." }
    ],
    timelineDesc: "Cellular healing begins immediately, with noticeable tissue strength and texture improvement by week 4.",
    timelineItems: [
      { when: "Immediately", what: "Minor injection site bumps may appear, settling within 12-24 hours." },
      { when: "Day 3–5", what: "Treated area feels softer, more hydrated, and less irritated." },
      { when: "Week 4", what: "Visible improvement in skin thickness, texture, and resilience." },
      { when: "Month 6+", what: "Maintenance session is recommended to sustain active cell signaling." }
    ],
    ctaRating: "130+ cellular recovery stories",
    ctaTitle: "Ready to start",
    ctaTitle2: "cellular tissue repair?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book an expert assessment to design a customized injectable exosome plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹20,000 / session" },
      { label: "Duration", val: "45 minutes" },
      { label: "Recommended", val: "3-4 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "12-24 hours" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/exosomes-injectables/before.webp",
      afterImage: "/services/exosomes-injectables/after.webp",
      treatmentName: "Injectable Exosome Therapy",
      testimonialText: "After my Exosome Therapy sessions, I noticed a remarkable reduction in hair fall. My hair feels thicker, healthier, and new growth has become visible. The treatment was comfortable, and the results exceeded my expectations.",
      patientName: "Mariyam., 45",
      subtitle: "Injectable exosome therapy for deep tissue repair and cellular health"
    },
  },
  "laser-toning": {
    id: "laser-toning",
    title: "Brightening Laser",
    titleEmphasized: "Laser Toning.",
    experienceNo: "Signature Experience",
    description: "Glow with absolute clarity. Our gentle Q-switched Laser Toning treatment breaks down deep melanin clusters beneath the skin's surface, fading stubborn spots and restoring a bright, even skin tone with zero downtime.",
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
    whatIsThisTitle: "Precision toning",
    whatIsThisEmphasized: "for deep color correction.",
    whatIsThisDesc1: "We deliver low-fluence Q-switched laser sweeps that target deep pigment deposits. The energy shatters melanin into microscopic dust that your body naturally clears away, all while protecting the outer skin barrier.",
    whatIsThisDesc2: "This clinical approach is highly effective for managing hormonal melasma and post-inflammatory dark marks, gently brightening your overall complexion and stimulating mild collagen for a smooth texture.",
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
    deviceImage: "/services/products-tech-images/q-laze.webp",
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
      { n: "01", label: "Skin Assessment", duration: "15 min", detail: "Our dermatologist maps pigmentation depth using clinical magnification." },
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
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/Laser Pigment Reduction/before.webp",
      afterImage: "/services/before&after/Laser Pigment Reduction/after.webp",
      treatmentName: "Laser Toning Brightening",
      testimonialText: "My skin tone is much brighter and even. The dullness is gone, and there was zero downtime after the laser sessions.",
      patientName: "Megha S., 29",
      subtitle: "Q-Switched laser toning for skin brightening and pigmentation"
    },
  },
  "prp": {
    id: "prp",
    title: "Autologous Platelet",
    titleEmphasized: "PRP Therapy.",
    experienceNo: "Signature Injectable Experience",
    description: "A pure, organic cellular restoration. Our signature autologous PRP experience isolates the platelet-rich growth factors from your own blood, delivering them directly into your skin to trigger deep rejuvenation and cellular repair naturally.",
    heroRating: "4.9 · Rated by 280+ patients",
    heroImage: "/services/prp-injectable/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Doctor Supervised",
    performedBySub: "Safe • Personalised • Professional",
    stats: [
      { n: "3–4", l: "Sessions recommended" },
      { n: "12-24h", l: "Minor swelling" },
      { n: "3-4w", l: "Initial results" },
      { n: "100%", l: "Doctor performed" }
    ],
    whatIsThisTitle: "Harvesting your body's",
    whatIsThisEmphasized: "indigenous healing power.",
    whatIsThisDesc1: "Your cells hold the blueprint for skin health. Platelet-Rich Plasma (PRP) utilizes a concentrated pool of your own platelets. When micro-injected, these active cells release natural growth factors that stimulate tissue repair, smooth lines, and support dermal regeneration.",
    whatIsThisDesc2: "Prepared in a sterile closed system under Dr. Ruxana's medical guidance, the blood sample is centrifuged to separate active platelets from unwanted red and white blood cells. This pure plasma is then delivered precisely to restore density and radiance.",
    benefits: [
      { icon: "🧬", b: "Bio-regenerative healing", d: "Uses natural cell-signaling pathways for repair" },
      { icon: "🧪", b: "Collagen Remodelling", d: "Improves skin elasticity, fine lines, and under-eye hollows." },
      { icon: "✨", b: "Restores Radiance", d: "Gently clears away dry, dead skin cell build-up that causes dullness." },
      { icon: "🛡️", b: "High Safety Standard", d: "Completely autologous treatment eliminates allergic risk." }
    ],
    clinicalNote: "Blood is processed using a medical centrifuge to obtain a highly concentrated layer of growth factors and platelets.",
    technologyTag: "🧬 Regenerative Science",
    ourDeviceLabel: "✅ Autologous Method",
    sideImage: "/services/prp-injectable/2 (2).webp",
    machineTitle: "Centrifuged platelet",
    machineEmphasized: "isolation system.",
    deviceName: "Medical Centrifuge System",
    deviceSub: "Centrifugation · Sterile Preparation · Platelet Concentration",
    deviceDesc: "Blood is processed using a medical-grade centrifuge to isolate the highest concentration of active platelets while removing red and white blood cells that cause inflammation.",
    deviceFeatures: ["Medical-grade centrifuge", "High-concentration PRP", "Precision injection protocol", "Sterile preparation system"],
    deviceImage: "/services/prp-injectable/3.webp",
    comparisonTitle: "COSMO HOME vs Standard Clinic",
    comparisonRows: [
      { label: "Active Agent", ours: "Concentrated growth factor isolated platelets", standard: "Basic PRP containing red/white blood cells" },
      { label: "Discomfort", ours: "Minimal discomfort with precision injection techniques", standard: "Painful, inflammatory burning" },
      { label: "Active Yield", ours: "Highly concentrated regenerative growth factors", standard: "Low, uncalibrated platelet count" },
      { label: "Safety", ours: "Closed, sterile single-use medical kits", standard: "Open laboratory test tubes" },
      { label: "Method", ours: "Precision doctor-controlled injection protocol", standard: "General deep bolus syringe shots" }
    ],
    whoNeedsDesc: "Ideal for patients looking for natural anti-aging, under-eye rejuvenation, acne scar repair, or skin restoration without synthetic chemicals.",
    notSuitable: "Bleeding disorders, blood-thinning medications, active skin infections, pregnancy, or uncontrolled medical conditions.",
    whoNeedsItems: [
      { tag: "Thin, crepey skin", desc: "Improves skin thickness, elasticity, and overall skin quality." },
      { tag: "Deep acne scarring", desc: "Stimulates collagen remodeling to improve the appearance of acne scars." },
      { tag: "Under-eye circles", desc: "Improves skin quality and supports natural collagen production in the under-eye area." },
      { tag: "Skin rejuvenation", desc: "Supports collagen production for smoother, firmer, and healthier-looking skin." }
    ],
    sessionPlanDesc: "A typical treatment plan includes 3–4 sessions performed 4 weeks apart, followed by maintenance treatments as recommended by your dermatologist.",
    sessionPlanSteps: [
      { n: "01", label: "Centrifugation", duration: "30 min", detail: "A small blood sample is collected and processed using a medical centrifuge to isolate the platelet-rich layer." },
      { n: "02", label: "Micro-Droplet Delivery", duration: "30 min", detail: "Once the numbing cream is removed, our cosmetic dermatologist performs precise micro-droplet injections into the targeted skin." },
      { n: "03", label: "LED Red Light Recovery", duration: "15 min", detail: "LED red light therapy helps reduce post-treatment redness, supports skin recovery, and improves patient comfort." }
    ],
    timelineDesc: "Collagen remodeling continues to improve gradually over the following 3–6 months.",
    timelineItems: [
      { when: "Immediately", what: "Mild redness, swelling, or tenderness may occur and typically settles within 12–24 hours." },
      { when: "Week 1", what: "Early skin recovery begins. Skin feels smoother and more hydrated." },
      { when: "Month 1", what: "Early improvements in skin texture and overall radiance become visible." },
      { when: "Month 3", what: "Noticeable improvements in skin quality, density, and acne scar appearance continue to develop." },
      { when: "Month 6+", what: "Continued regeneration is supported with maintenance treatments as recommended." }
    ],
    ctaRating: "280+ patients regenerated",
    ctaTitle: "Ready to restore",
    ctaTitle2: "skin volume or skin density?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Include a medical assessment of your skin thickness to map the target injection areas.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹10,000 / session" },
      { label: "Duration", val: "60–75 minutes" },
      { label: "Recommended", val: "3–4 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "12–24 hours (swelling/bumps)" },
      { label: "Performed by", val: "Medical Aesthetic Team" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/prp-injectable/before.webp",
      afterImage: "/services/prp-injectable/after.webp",
      treatmentName: "Dermal PRP Therapy",
      testimonialText: "My skin texture has improved dramatically. The fine lines around my eyes are softer, and my skin looks and feels much thicker and healthier.",
      patientName: "Annama R., 44",
      subtitle: "Dermal Platelet-Rich Plasma for facial skin rejuvenation and texture"
    },
  },
  "gfc": {
    id: "gfc",
    title: "Purified Growth Factor",
    titleEmphasized: "GFC Therapy.",
    experienceNo: "Signature Injectable Experience",
    description: "The peak of regenerative aesthetics. GFC therapy delivers a highly concentrated, cell-free concentrate of your body's own growth proteins directly to skin layers, prompting rapid regeneration with unmatched comfort and minimal downtime.",
    heroRating: "4.9 · Rated by 280+ patients",
    heroImage: "/services/GFC-Injectable/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Doctor Supervised",
    performedBySub: "Safe • Personalised • Professional",
    stats: [
      { n: "3–4", l: "Sessions recommended" },
      { n: "12-24h", l: "Minor swelling" },
      { n: "3-4w", l: "Initial results" },
      { n: "100%", l: "Doctor performed" }
    ],
    whatIsThisTitle: "Pure, cell-free gold",
    whatIsThisEmphasized: "for maximum skin repair and tightening.",
    whatIsThisDesc1: "GFC represents a clinical advancement over traditional PRP. Platelets are activated in specialized tubes to release their entire growth factor content before separation. The blood cells are then completely filtered out, yielding a pure, cell-free gold concentrate.",
    whatIsThisDesc2: "By removing cellular debris, GFC delivers a highly potent clinical effect directly to targeted dermal layers. Because the serum is purified, injections are exceptionally comfortable, and post-procedure swelling is virtually eliminated.",
    benefits: [
      { icon: "🧪", b: "High-Purity Concentrate", d: "Completely cell-free growth factors for high potency." },
      { icon: "🛡️", b: "Zero Inflammation & Pain", d: "Absence of red/white cells minimizes post-procedure soreness." },
      { icon: "🧬", b: "Rapid Dermal Repair", d: "Highly direct cellular signaling for faster collagen stimulation." },
      { icon: "✨", b: "Restores Radiance", d: "Improves overall skin density and softens signs of aging." }
    ],
    clinicalNote: "GFC is prepared in specialized tubes that activate platelets to release growth factors prior to centrifuge separation.",
    technologyTag: "🧬 Regenerative Science",
    ourDeviceLabel: "✅ Pure Concentrate",
    sideImage: "/services/GFC-Injectable/2.webp",
    machineTitle: "Cell-free growth factor",
    machineEmphasized: "activation protocol.",
    deviceName: "Advanced GFC System",
    deviceSub: "Activation Tubes · Centrifugation · Cell-free Isolation",
    deviceDesc: "Our GFC preparation uses advanced pre-activated tubes that trigger platelets to release growth factors before centrifuge separation, yielding a highly concentrated therapeutic serum.",
    deviceFeatures: ["Pre-activated tubes", "Cell-free separation", "Sterile preparation", "Dermatologist-led"],
    deviceImage: "/services/GFC-Injectable/3.webp",
    comparisonTitle: "COSMO HOME vs Standard Clinic",
    comparisonRows: [
      { label: "Active Agent", ours: "Pure cell-free concentrated growth factors", standard: "Basic PRP containing red/white blood cells" },
      { label: "Discomfort", ours: "Minimal discomfort with cell-free formulation", standard: "Painful, inflammatory burning" },
      { label: "Active Yield", ours: "Maximized growth factor concentration", standard: "Low, uncalibrated platelet count" },
      { label: "Safety", ours: "Closed, sterile single-use medical kits", standard: "Open laboratory test tubes" },
      { label: "Method", ours: "Precision doctor-controlled injection protocol", standard: "General deep bolus syringe shots" }
    ],
    whoNeedsDesc: "Ideal for patients seeking a highly potent, virtually painless alternative to standard PRP for advanced skin repair and anti-aging.",
    notSuitable: "Bleeding disorders, blood-thinning medications, active skin infections, pregnancy, or uncontrolled medical conditions.",
    whoNeedsItems: [
      { tag: "Deep acne scars", desc: "Stimulates structural tissue remodeling to smooth scars." },
      { tag: "Aged skin & wrinkles", desc: "Accelerates collagen synthesis for overall skin tightening." },
      { tag: "Under-eye hollows", desc: "Promotes natural volume and tissue repair in periorbital layers." },
      { tag: "Skin dullness", desc: "Deeply hydrates and restores skin vitality from within." }
    ],
    sessionPlanDesc: "A typical treatment plan includes 3–4 sessions performed 4 weeks apart, followed by maintenance treatments as recommended by your dermatologist.",
    sessionPlanSteps: [
      { n: "01", label: "Activation & Centrifugation", duration: "35 min", detail: "A blood sample is drawn into GFC tubes, incubated for activation, and centrifuged to isolate the cell-free growth factor concentrate." },
      { n: "02", label: "Micro-Droplet Delivery", duration: "30 min", detail: "Once the numbing cream is removed, our cosmetic dermatologist performs precise micro-droplet injections into the targeted skin layers." },
      { n: "03", label: "LED Red Light Recovery", duration: "15 min", detail: "LED red light therapy helps reduce post-treatment redness, supports skin recovery, and improves patient comfort." }
    ],
    timelineDesc: "Dermal thickness and collagen remodeling continue to improve gradually over the following 3–6 months.",
    timelineItems: [
      { when: "Immediately", what: "Mild redness, swelling, or tenderness may occur and typically settles within 12–24 hours." },
      { when: "Week 1", what: "Early skin recovery begins. Skin feels smoother and has a healthy glow." },
      { when: "Month 1", what: "Early improvements in skin texture become visible." },
      { when: "Month 3", what: "Noticeable improvements in skin density, firmness, and acne scar appearance continue to develop." },
      { when: "Month 6+", what: "Continued regeneration is supported with maintenance treatments as recommended." }
    ],
    ctaRating: "280+ patients regenerated",
    ctaTitle: "Ready to restore",
    ctaTitle2: "skin density?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Include a medical assessment of your skin thickness to map the target injection areas.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹18,000 / session" },
      { label: "Duration", val: "60–75 minutes" },
      { label: "Recommended", val: "3–4 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "12–24 hours (swelling/bumps)" },
      { label: "Performed by", val: "Medical Aesthetic Team" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/GFC-Injectable/before.webp",
      afterImage: "/services/GFC-Injectable/after.webp",
      treatmentName: "HAIR GFC THERAPY",
      testimonialText: "The GFC treatment was far more comfortable than I expected. Within a few sessions, my hair fall reduced noticeably, and I could see healthier, thicker hair growing back. My confidence has truly returned.",
      patientName: "Rera M., 32",
      subtitle: "Autologous growth factor concentrate for skin texture and scars"
    },
  },
  "mnrf-gfc": {
    id: "mnrf-gfc",
    title: "Combination Scar",
    titleEmphasized: "MNRF + GFC.",
    experienceNo: "Signature Experience",
    description: "The ultimate synergy in scar remodeling. MNRF + GFC pairs deep radiofrequency energy with highly concentrated Growth Factor Concentrate, accelerating cell repair and restoring structural smoothness to scarred skin.",
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
    whatIsThisTitle: "Double-action cellular",
    whatIsThisEmphasized: "restoration.",
    whatIsThisDesc1: "We deliver calibrated radiofrequency energy deep into the dermis using micro-needles, instantly creating pathways. We immediately apply your purified Growth Factor Concentrate (GFC), allowing it to absorb directly where repair is needed.",
    whatIsThisDesc2: "This combination is exceptionally powerful. The RF energy breaks down tough fibrous scar tissue, while the GFC triggers rapid collagen production and speeds skin barrier healing, minimizing recovery time.",
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
    deviceImage: "/services/products-tech-images/scarlet.webp",
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
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/Laser Scar Reduction/before.webp",
      afterImage: "/services/before&after/Laser Scar Reduction/after.webp",
      treatmentName: "MNRF + GFC Combination Therapy",
      testimonialText: "Combining MNRF with GFC was the best decision for my acne scars. The healing was faster and the results are amazing.",
      patientName: "Aditya N., 31",
      subtitle: "Combined microneedling radiofrequency and growth factors"
    },
  }
  ,

  "mesopeels-acne": {
    id: "mesopeels-acne",
    title: "Acne Control",
    titleEmphasized: "Mesopeels.",
    experienceNo: "Signature Acne Experience",
    description: "Directly target active breakouts, regulate excess oil production, and fade stubborn post-acne marks with our customized chemical peeling treatments, specifically calibrated for acne-prone skin.",
    heroRating: "4.8 · Rated by 195+ patients",
    heroImage: "/services/Mesophils/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Clinical Aesthetic Expert",
    performedBySub: "Safe • Botanical Peels • Resurfacing",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "1–3", l: "Days mild flaking" },
      { n: "48h", l: "Texture smoothing" },
      { n: "100%", l: "Medical-grade acids" }
    ],
    whatIsThisTag: "What is Acne Mesopeel?",
    whatIsThisTitle: "A deep chemical purge",
    whatIsThisEmphasized: "for congested and oily skin.",
    whatIsThisDesc1: "Acne Mesopeels utilize clinical-grade organic salicylic acid and mandelic acid blends. These lipophilic beta-hydroxy acids (BHAs) penetrate deep into oily pores, dissolving sebum plugs, calming red inflammation, and destroying acne-causing bacteria.",
    whatIsThisDesc2: "By removing the outer layer of dead cells that trap oils, the peel prevents new acne blockages from forming, while glycolic components speed up the fading of post-acne dark marks (PIH).",
    benefits: [
      { icon: "🧪", b: "Salicylic Acid Blends", d: "Formulated specifically to penetrate and purify oily pore structures." },
      { icon: "✨", b: "Calms Active Acne", d: "Anti-inflammatory properties soothe red, painful blemishes quickly." },
      { icon: "🎯", b: "Controls Excess Sebum", d: "Regulates sebaceous glands to reduce skin oiliness over time." },
      { icon: "⚡", b: "Fades Post-Acne Marks", d: "Accelerates cell turnover to lift stubborn hyperpigmentation." }
    ],
    clinicalNote: "Peel strength and exposure times are customized according to the severity of your acne and skin sensitivity.",
    technologyTag: "🧪 The Formulation",
    ourDeviceLabel: "✅ Calibrated Serums",
    sideImage: "/services/Mesophils/2.webp",
    machineTitle: "Salicylic & Mandelic acids",
    machineEmphasized: "for acne purification.",
    deviceName: "Acne Purifying Mesopeels",
    deviceSub: "CLINICAL SALICYLIC BLENDS • SEBUM CONTROL • PH BALANCED",
    deviceDesc: "We select the precise combination of BHAs at a controlled pH level to safely exfoliate and target acne breakouts at their root.",
    deviceFeatures: ["Salicylic & Mandelic Acid", "Sebum Regulation", "Anti-Inflammatory", "Dermatologist-formulated"],
    deviceImage: "/services/hydrafacial-medifacial/Hydrafacial  Medifacial.webp",
    comparisonTitle: "COSMO HOME vs Standard Care",
    comparisonRows: [
      { label: "Acid Potency", ours: "Medical BHA targeting acne depth", standard: "Weak over-the-counter exfoliants" },
      { label: "Pore Cleansing", ours: "Dissolves deep blockages inside follicles", standard: "Surface level cleansing only" },
      { label: "Inflammation", ours: "Calms blemish redness and irritation", standard: "Scrubs irritate active acne further" },
      { label: "Post-Acne Fading", ours: "Accelerates fading of dark marks (PIH)", standard: "Takes months to fade marks" }
    ],
    whoNeedsDesc: "Highly recommended for patients struggling with active acne, blackheads, excessive oiliness, or post-inflammatory dark marks.",
    notSuitable: "Active skin infections in treatment sites, pregnancy, use of oral isotretinoin within past 6 months.",
    whoNeedsItems: [
      { tag: "Active acne breakouts", desc: "Salicylic formulations calm inflammation and clear pore blockages." },
      { tag: "Excessive oil production", desc: "Balances sebum production to reduce future pore blockages." },
      { tag: "Blackheads & whiteheads", desc: "Purges trapped skin cells and debris from clogged pores." },
      { tag: "Post-acne dark marks", desc: "Lifts pigmented cells to reveal a clearer, more even skin tone." }
    ],
    sessionPlanDesc: "Performed as a progressive course of 4 to 6 sessions, scheduled every 2 to 3 weeks for optimal acne clearance.",
    sessionPlanSteps: [
      { n: "01", label: "Acne Zone Mapping", duration: "10 min", detail: "The skin is deep cleansed, degreased, and target acne zones mapped for custom peel layers." },
      { n: "02", label: "Peel Delivery", duration: "15 min", detail: "The salicylic/mandelic formulation is layered over breakouts and monitored closely for target activation." },
      { n: "03", label: "Neutralization & Calm", duration: "15 min", detail: "The peel is neutralized and a soothing, anti-inflammatory clinical mask is applied." }
    ],
    timelineDesc: "Blemishes begin to dry up in 48 hours, with overall skin clarity improving over a 4-week cycle.",
    timelineItems: [
      { when: "Immediately", what: "Skin feels cleaner and tight. Blemish redness begins to settle." },
      { when: "Day 2–3", what: "Mild, superficial flaking may occur around active breakouts." },
      { when: "Day 5", what: "Active acne begins drying up and skin texture feels smoother." },
      { when: "Week 2", what: "New breakouts are significantly reduced and oil levels are balanced." },
      { when: "Month 2+", what: "Stubborn post-acne dark marks fade, revealing a clear complexion." }
    ],
    ctaRating: "195+ acne cleared cases",
    ctaTitle: "Ready for clearer,",
    ctaTitle2: "acne-free skin?",
    ctaEmphasized: "Start today.",
    ctaDesc: "Book a clinical skin check to identify the ideal Mesopeel formula for your acne type and skin barrier.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹3,500 / session" },
      { label: "Duration", val: "40 minutes" },
      { label: "Recommended", val: "4–6 sessions" },
      { label: "Frequency", val: "Every 2–3 weeks" },
      { label: "Downtime", val: "1–3 days mild flaking" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/carbon feel/before.webp",
      afterImage: "/services/before&after/carbon feel/after.webp",
      treatmentName: "Acne Control Mesopeel",
      testimonialText: "My active acne dried up within two sessions, and the dark marks on my cheeks have faded dramatically.",
      patientName: "Sandra K., 24",
      subtitle: "Acne control BHA peel for active breakouts and dark marks"
    },
  },
  "mesopeels-skin-renewal": {
    id: "mesopeels-skin-renewal",
    title: "Skin Renewal",
    titleEmphasized: "Mesopeels.",
    experienceNo: "Signature Renewal Experience",
    description: "Reveal a brighter, smoother, and more youthful complexion. Our Skin Renewal Mesopeels utilize clinical organic acids to gently dissolve dull outer cell layers and stimulate healthy cellular regeneration.",
    heroRating: "4.8 · Rated by 190+ patients",
    heroImage: "/services/Mesophils/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Clinical Aesthetic Expert",
    performedBySub: "Safe • Botanical Peels • Resurfacing",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "1–3", l: "Days mild flaking" },
      { n: "48h", l: "Texture smoothing" },
      { n: "100%", l: "Medical-grade acids" }
    ],
    whatIsThisTag: "What is Renewal Mesopeel?",
    whatIsThisTitle: "A dynamic resurfacing",
    whatIsThisEmphasized: "for skin glow and cell turnover.",
    whatIsThisDesc1: "Skin Renewal Mesopeels combine glycolic acid, lactic acid, and citric acid formulations. These alpha-hydroxy acids (AHAs) break down the dead protein bonds on the skin's surface, triggering rapid cell turnover and collagen production in the layers underneath.",
    whatIsThisDesc2: "This organic peeling treatment lifts superficial sun spots, softens fine dryness lines, improves skin elasticity, and restores a hydrated, dewy glass-skin glow.",
    benefits: [
      { icon: "🧪", b: "Glycolic & Lactic Blends", d: "Formulated specifically to speed up cellular renewal and hydration." },
      { icon: "✨", b: "Restores Natural Glow", d: "Gently clears away dry, dead skin cell build-up that causes dullness." },
      { icon: "🎯", b: "Evens Out Complexion", d: "Targets surface melanin to lift sun spots and uneven pigmentation." },
      { icon: "⚡", b: "Softens Fine Lines", d: "Stimulates dermal collagen to plump fine dryness lines." }
    ],
    clinicalNote: "AHA peel parameters are carefully calibrated to your skin's natural pH threshold for safe, progressive renewal.",
    technologyTag: "🧪 The Formulation",
    ourDeviceLabel: "✅ Calibrated Serums",
    sideImage: "/services/Mesophils/2.webp",
    machineTitle: "Glycolic & Lactic acids",
    machineEmphasized: "for cell renewal.",
    deviceName: "Renewal Resurfacing Mesopeels",
    deviceSub: "CLINICAL GLYCOLIC BLENDS • CELL TURNOVER • MOISTURE INFUSION",
    deviceDesc: "We select the optimal combination of AHAs at a controlled pH level to safely resurface skin texture and restore hydration.",
    deviceFeatures: ["Glycolic & Lactic Acid", "Cell Regeneration", "Hydration Boost", "Dermatologist-formulated"],
    deviceImage: "/services/hydrafacial-medifacial/Hydrafacial  Medifacial.webp",
    comparisonTitle: "COSMO HOME vs Home Peels",
    comparisonRows: [
      { label: "Acid Potency", ours: "Medical-grade AHA concentrations", standard: "Weak over-the-counter exfoliants" },
      { label: "pH Calibration", ours: "Buffers prevent skin barrier damage", standard: "Acidic home solutions risk burns" },
      { label: "Texture Lift", ours: "Stimulates deep collagen and turnover", standard: "Slight surface exfoliation only" },
      { label: "Recovery Support", ours: "Includes soothing barrier-repair masks", standard: "Peeled skin left dry and sensitive" }
    ],
    whoNeedsDesc: "Ideal for patients looking to address dull or tired skin, sun damage, uneven pigmentation, early fine lines, or rough texture.",
    notSuitable: "Active sunburn, eczema, open wounds, pregnancy.",
    whoNeedsItems: [
      { tag: "Dull or tired skin", desc: "Lifts dead cells to restore healthy, youthful radiance." },
      { tag: "Sun spots & pigmentation", desc: "Fades superficial pigmentation and sun damage." },
      { tag: "Rough skin texture", desc: "Smooths out rough patches and refines skin texture." },
      { tag: "Early fine lines", desc: "Supports natural collagen to plump fine lines." }
    ],
    sessionPlanDesc: "We recommend a course of 4 to 6 sessions, spaced 2 to 3 weeks apart to allow healthy cell regeneration.",
    sessionPlanSteps: [
      { n: "01", label: "Skin Hydration Check", duration: "10 min", detail: "The skin barrier and hydration levels are assessed before selecting the custom AHA peel." },
      { n: "02", label: "Resurfacing Application", duration: "15 min", detail: "The AHA peel is layered onto the skin and timed under close observation." },
      { n: "03", label: "Nourishing Lock", duration: "15 min", detail: "The peel is neutralized and a hydrating, barrier-repair mask is applied." }
    ],
    timelineDesc: "Superficial flaking completes in 5 days, revealing a soft, refreshed, and dewy glass-skin glow.",
    timelineItems: [
      { when: "Immediately", what: "Skin feels plump, tight, and warm with a temporary rosy glow." },
      { when: "Day 2–3", what: "Very light, superficial flaking begins around the nose and mouth." },
      { when: "Day 5", what: "Flaking completes, revealing extremely soft and radiant skin." },
      { when: "Week 2", what: "Pigmentation begins to fade and texture feels noticeably smoother." },
      { when: "Month 2+", what: "Collagen production increases, softening fine lines and maintaining glow." }
    ],
    ctaRating: "190+ renewal stories",
    ctaTitle: "Ready to restore",
    ctaTitle2: "your skin's radiance?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a skin assessment to design a customized renewal peel plan tailored to your skin type.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹3,500 / session" },
      { label: "Duration", val: "40 minutes" },
      { label: "Recommended", val: "4–6 sessions" },
      { label: "Frequency", val: "Every 2–3 weeks" },
      { label: "Downtime", val: "1–3 days mild flaking" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/carbon feel/before.webp",
      afterImage: "/services/before&after/carbon feel/after.webp",
      treatmentName: "Skin Renewal Mesopeel",
      testimonialText: "My skin has completely renewed. The rough patches and dullness are gone, and I have a steady glow every day.",
      patientName: "Sandra K., 24",
      subtitle: "Skin renewal AHA peel for tone and brightness"
    },
  },
  "carbon-peel": {
    id: "carbon-peel",
    title: "Laser Pore Cleansing",
    titleEmphasized: "Carbon Peel.",
    experienceNo: "Acne & Glow Experience",
    description: "Experience the ultimate skin purification. The Carbon Laser Peel combines natural carbon particles with precision laser sweeps to draw out impurities, instantly contract enlarged pores, and leave your skin feeling clean, matte, and radiant.",
    heroRating: "4.9 · Rated by 210+ patients",
    heroImage: "/services/laser-pigment-reduction/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Laser Aesthetic Therapist",
    performedBySub: "Safe • Q-Switched Nd:YAG • Deep Cleansing",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "Immediate", l: "Refined pores & glow" },
      { n: "100%", l: "Non-invasive laser" }
    ],
    whatIsThisTag: "What is a Carbon Peel?",
    whatIsThisTitle: "Thermal activation",
    whatIsThisEmphasized: "for instant skin polish.",
    whatIsThisDesc1: "We apply a fine layer of liquid carbon cream that binds to oils and debris deep within the pores. As the Q-switched laser sweeps over, it vaporizes the carbon particles, lifting impurities and dead skin instantly.",
    whatIsThisDesc2: "This thermal action also stimulates the deep collagen layer, prompting pores to contract and reducing skin oiliness. You leave the clinic immediately with a fresh, glowing, and matte complexion.",
    benefits: [
      { icon: "⚫", b: "Carbon Absorption", d: "Pulls oil, dirt, and cellular debris out of deep pore chambers." },
      { icon: "💥", b: "Laser Vaporization", d: "Instantly breaks up carbon to clear skin and exfoliate." },
      { icon: "✨", b: "Instant Radiance", d: "Leaves skin looking immediately bright and refreshed." },
      { icon: "🛡️", b: "Pore Shrinkage", d: "Thermal stimulation tightens loose pore structures." }
    ],
    clinicalNote: "A gentle carbon lotion layer is applied for 10 minutes prior to laser sweeps to ensure deep penetration.",
    sideImage: "/services/laser-pigment-reduction/2.webp",
    machineTitle: "Q-switched Nd:YAG",
    machineEmphasized: "for instant glow.",
    deviceName: "Acro Q-Switched Laser System",
    deviceSub: "1064nm LASER • CARBON LOTION • THERMAL RESURFACING",
    deviceDesc: "Our high-precision Q-switched Nd:YAG laser target-blasts the carbon layer to exfoliate and shrink pores without outer skin injury.",
    deviceFeatures: ["1064nm Nd:YAG Laser", "Carbon Paste Attractor", "Instant Exfoliation", "Pore Refiner"],
    deviceImage: "/services/Carbon Peel/3.webp",
    comparisonTitle: "COSMO HOME vs Standard Facials",
    comparisonRows: [
      { label: "Cleansing Depth", ours: "Laser-blasted deep carbon exfoliation", standard: "Surface steam and scrub rubs only" },
      { label: "Pore Action", ours: "Thermal stimulation shrinks pore size", standard: "Pores left stretched after extraction" },
      { label: "Oil Control", ours: "Laser energy reduces sebaceous glands", standard: "Short-lived superficial oil removal" },
      { label: "Downtime", ours: "Zero redness, walk-out glowing", standard: "Redness from painful hand extractions" }
    ],
    whoNeedsDesc: "Ideal for patients with oily skin, blackheads, enlarged pores, acne, or dull skin looking for an instant refresh.",
    notSuitable: "Active skin infection, sunburn, severe dry eczema.",
    whoNeedsItems: [
      { tag: "Enlarged open pores", desc: "Laser energy targets pore walls to contract and tighten them." },
      { tag: "Excessive skin oil", desc: "Helps regulate sebaceous activity to keep skin matte longer." },
      { tag: "Blackheads & whiteheads", desc: "Carbon bonding pulls stubborn impactions out of pores." },
      { tag: "Dull, textured skin", desc: "Immediate exfoliation reveals smooth, glowing skin." }
    ],
    sessionPlanDesc: "Performed as a course of 4 to 6 sessions, spaced 2 to 3 weeks apart for maximum cumulative results.",
    sessionPlanSteps: [
      { n: "01", label: "Carbon Application", duration: "15 min", detail: "A layer of premium carbon paste is applied to the face and allowed to dry and sink into the pores." },
      { n: "02", label: "Laser Sweeps", duration: "20 min", detail: "The Q-switched laser is passed over the face, blasting away the carbon paste along with dead skin and oils." },
      { n: "03", label: "Calming Infusion", duration: "10 min", detail: "Skin is cleansed of residual carbon, followed by hydrating and soothing serum application." }
    ],
    timelineDesc: "Enjoy an immediate pore tightening and skin brightening right after the session.",
    timelineItems: [
      { when: "Immediately", what: "Skin looks instantly brighter, smoother, and pores appear smaller." },
      { when: "Day 1", what: "Skin oiliness is noticeably reduced and texture feels softer." },
      { when: "Week 2", what: "Acne breakouts show drying and rapid healing." },
      { when: "Month 1", what: "Pore size is visibly refined and skin tone is more even." },
      { when: "Month 3+", what: "With repeated sessions, skin remains clearer and less oily." }
    ],
    ctaRating: "210+ carbon glow stories",
    ctaTitle: "Ready for immediate",
    ctaTitle2: "pore clearance and glow?",
    ctaEmphasized: "Book today.",
    ctaDesc: "Experience the Hollywood-favorite carbon laser peel for skin purification.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹5,000 / session" },
      { label: "Duration", val: "45 minutes" },
      { label: "Recommended", val: "4–6 sessions" },
      { label: "Frequency", val: "Every 2–3 weeks" },
      { label: "Downtime", val: "None" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/carbon feel/before.webp",
      afterImage: "/services/before&after/carbon feel/after.webp",
      treatmentName: "Carbon Laser Peel",
      testimonialText: "I loved the immediate glow. The carbon peel cleared out my pores and left my skin feeling clean and refreshed.",
      patientName: "Neha R., 28",
      subtitle: "Carbon-assisted laser peel for pore purification and glow"
    },
  },
  "led-therapy": {
    id: "led-therapy",
    title: "Cellular Phototherapy",
    titleEmphasized: "LED Therapy.",
    experienceNo: "Soothe & Heal Experience",
    description: "Breathe life back into your skin cells. Our cellular phototherapy uses clinically validated LED wavelengths to calm vascular redness, clear acne-causing bacteria, and accelerate healing in a tranquil, warm environment.",
    heroRating: "4.8 · Rated by 150+ patients",
    heroImage: "/services/LED Theraphy/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Clinical Therapist",
    performedBySub: "Safe • Medical LED Wavelengths • Healing",
    stats: [
      { n: "6–8", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "24h", l: "Inflammation soothing" },
      { n: "100%", l: "Non-thermal light" }
    ],
    whatIsThisTag: "What is LED Therapy?",
    whatIsThisTitle: "Pure light energy",
    whatIsThisEmphasized: "for cellular repair.",
    whatIsThisDesc1: "We use therapeutic narrowband light wavelengths to stimulate cell recovery. Blue light (415nm) destroys bacteria responsible for breakouts, while Red light (633nm) increases cellular ATP to accelerate tissue repair and soothe inflammation.",
    whatIsThisDesc2: "This non-thermal light therapy is safe, pain-free, and deeply relaxing. It is the perfect standalone rejuvenation treatment or an upgrade to calm skin immediately after active peels or laser sessions.",
    benefits: [
      { icon: "💡", b: "Calibrating Wavelengths", d: "Uses specific colors to target distinct layers and concerns." },
      { icon: "🔵", b: "Blue Light (415nm)", d: "Destroys acne-causing bacteria and regulates oil production." },
      { icon: "🔴", b: "Red Light (633nm)", d: "Stimulates ATP production to speed up tissue healing." },
      { icon: "🛡️", b: "Zero Discomfort", d: "A soothing, warm, and relaxing light exposure experience." }
    ],
    clinicalNote: "Can be performed as a standalone service or as an upgrade following chemical peels and micro-needling.",
    sideImage: "/services/LED Theraphy/2.webp",
    machineTitle: "Medical LED canopy",
    machineEmphasized: "for targeted healing.",
    deviceName: "Omnilux Medical LED Platform",
    deviceSub: "NARROW-BAND LED • BLUE / RED / INFRARED • HEALING LIGHT",
    deviceDesc: "Our medical-grade LED canopy delivers highly concentrated, narrow-band wavelengths to optimize cell activation and tissue recovery.",
    deviceFeatures: ["Narrow-band LEDs", "Acne Bacteria Clearing", "Tissue Repair Acceleration", "Calming Warmth"],
    deviceImage: "/services/LED Theraphy/3.webp",
    comparisonTitle: "COSMO HOME vs Home Masks",
    comparisonRows: [
      { label: "Light Intensity", ours: "Medical-grade clinical panel output", standard: "Weak battery-powered home masks" },
      { label: "Wavelength Purity", ours: "Narrow-band calibrated wavelengths", standard: "Broad-spectrum colored bulbs" },
      { label: "Coverage", ours: "Full face panel with consistent distance", standard: "Uneven mask contact on contours" },
      { label: "Medical Safety", ours: "Protective eyewear and therapist-guided", standard: "Unguided direct eye exposure risk" }
    ],
    whoNeedsDesc: "Ideal for patients with active acne, inflamed sensitive skin, rosacea, or following invasive treatments to speed up recovery.",
    notSuitable: "Photosensitive epilepsy, use of photosensitizing medications (e.g. Roaccutane) currently, pregnancy.",
    whoNeedsItems: [
      { tag: "Inflamed acne", desc: "Blue light kills bacteria while Red light calms sore bumps." },
      { tag: "Post-treatment redness", desc: "Accelerates healing of skin following lasers or peels." },
      { tag: "Sensitive skin barrier", desc: "Yellow and Red light help build barrier strength." },
      { tag: "Rosacea & flushing", desc: "Calms dilated blood vessels to reduce redness." }
    ],
    sessionPlanDesc: "Usually performed in a series of 6 to 8 sessions, scheduled twice a week for optimal bacterial clearance.",
    sessionPlanSteps: [
      { n: "01", label: "Skin Cleansing", duration: "10 min", detail: "Skin is cleansed and sunscreen or makeup is removed to allow light penetration." },
      { n: "02", label: "LED Exposure", duration: "20 min", detail: "Protective goggles are placed and you rest under the warm LED light canopy." },
      { n: "03", label: "Barrier Repair", duration: "10 min", detail: "Soothing clinical moisturizers and SPF are applied to protect the skin." }
    ],
    timelineDesc: "Redness and soreness show visible improvement within 24 hours of exposure.",
    timelineItems: [
      { when: "Immediately", what: "Skin feels warm and looks calm and less inflamed." },
      { when: "Day 1", what: "Active cystic acne feels less painful and redness is reduced." },
      { when: "Week 2", what: "New breakout activity slows down as bacteria levels drop." },
      { when: "Week 4", what: "Skin looks calmer, stronger, and more resilient." },
      { when: "Month 2+", what: "Breakouts are significantly controlled with healthier skin texture." }
    ],
    ctaRating: "150+ soothing reviews",
    ctaTitle: "Ready to calm",
    ctaTitle2: "and heal your skin?",
    ctaEmphasized: "Inquire today.",
    ctaDesc: "Add LED phototherapy to your next service for rapid healing.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹2,000 / session" },
      { label: "Duration", val: "30 minutes" },
      { label: "Recommended", val: "6–8 sessions" },
      { label: "Frequency", val: "Twice a week" },
      { label: "Downtime", val: "None" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/LED Theraphy/before.webp",
      afterImage: "/services/LED Theraphy/after.webp",
      treatmentName: "LED Phototherapy",
      testimonialText: "It's a very relaxing treatment. The red and blue light therapy calmed my skin redness and cleared my breakouts.",
      patientName: "Varun K., 24",
      subtitle: "Narrowband LED light therapy for healing and acne defense"
    },
  },
  "skin-mnrf": {
    id: "skin-mnrf",
    title: "Stretch Mark MNRF",
    titleEmphasized: "MNRF.",
    experienceNo: "Body Restoration Experience",
    description: "Restore structural harmony to your skin. Our bespoke body MNRF treatment delivers calibrated radiofrequency energy deep into the dermis, initiating a powerful cellular renewal process to tighten loose skin and smooth stretch marks from within.",
    heroRating: "4.9 · Rated by 130+ patients",
    heroImage: "/services/Skin-MNRF/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Clinical Expert",
    performedBySub: "Safe • Gold-plated Needles • Deep Remodeling",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "2–3", l: "Days grid redness" },
      { n: "3 Weeks", l: "Collagen start" },
      { n: "100%", l: "Dermal targeting" }
    ],
    whatIsThisTag: "What is MNRF for Stretch Marks?",
    whatIsThisTitle: "A deep rebuild",
    whatIsThisEmphasized: "for your skin's architecture.",
    whatIsThisDesc1: "Beneath the surface of stretched skin lies a network of compromised elastic fibers. Our specialized body MNRF handpiece uses gold-plated, insulated micro-needles to deliver precise radiofrequency heat directly to these deeper dermal tears.",
    whatIsThisDesc2: "This targeted energy breaks down stubborn scar tissue and prompts the body to synthesize fresh, thick collagen. Over the weeks, stretch marks narrow, texture softens, and the skin regains its firm, resilient bounce.",
    benefits: [
      { icon: "🎯", b: "Dermal Targeting", d: "Delivers thermal energy directly to deep stretch mark lines." },
      { icon: "🧬", b: "Collagen Remodeling", d: "Rebuilds elastic skin matrix to narrow stretch mark width." },
      { icon: "✨", b: "Texture Smoothing", d: "Improves loose, papery skin overlying stretch mark lines." },
      { icon: "🛡️", b: "Epidermal Safety", d: "Saves outer skin layer to minimize pigmentation risks." }
    ],
    clinicalNote: "Medical numbing cream is applied for 45 minutes prior to the procedure to ensure comfort.",
    sideImage: "/services/Skin-MNRF/2.webp",
    machineTitle: "Gold-plated RF tips",
    machineEmphasized: "for dermal remodeling.",
    deviceName: "Fractional MNRF System",
    deviceSub: "RF NEEDLING • COLLAGEN INDUCTION • TEXTURE REBUILD",
    deviceDesc: "Our specialized body MNRF handpiece uses gold-plated insulated needles to treat deep dermal tear lines safely.",
    deviceFeatures: ["Gold-insulated Needles", "Fractional RF Energy", "Adjustable Needle Depth", "Body Resurfacing Tip"],
    deviceImage: "/services/products-tech-images/scarlet.webp",
    comparisonTitle: "COSMO HOME vs Topical Creams",
    comparisonRows: [
      { label: "Dermal Reach", ours: "Needles deliver energy 1.0 - 3.5mm deep", standard: "Creams sit on superficial epidermis only" },
      { label: "Collagen Impact", ours: "Thermal stimulation rebuilds fiber tears", standard: "Temporary hydration only" },
      { label: "Efficacy", ours: "Visible narrowing and fading of marks", standard: "No structural improvement in tears" },
      { label: "Treatment Safety", ours: "Insulated needles protect dark skin types", standard: "Peeling creams risk skin discoloration" }
    ],
    whoNeedsDesc: "Perfect for patients looking to fade and smooth stretch marks on the abdomen, thighs, hips, or breasts.",
    notSuitable: "Pregnancy, active skin infections, keloid scarring history.",
    whoNeedsItems: [
      { tag: "Red & purple stretch marks", desc: "Early vascular stretch marks respond rapidly to RF healing." },
      { tag: "White silvery stretch marks", desc: "Older, mature tears require deeper thermal remodeling to blend." },
      { tag: "Loose, crepey skin", desc: "Thermal energy contracts skin fibers to tighten laxity." },
      { tag: "Post-pregnancy skin stretch", desc: "Helps rebuild abdominal wall skin elasticity." }
    ],
    sessionPlanDesc: "Usually performed in a series of 4 to 6 sessions, spaced 4 to 6 weeks apart.",
    sessionPlanSteps: [
      { n: "01", label: "Numbing Application", duration: "45 min", detail: "A strong topical anesthetic is applied to the treatment area to ensure comfort." },
      { n: "02", label: "MNRF Sweeps", duration: "30 min", detail: "The RF needles are applied systematically across the stretch mark lines at calibrated depths." },
      { n: "03", label: "Post-RF Care", duration: "15 min", detail: "Soothe and protect creams are applied to calm heat and redness." }
    ],
    timelineDesc: "Redness settles in 2 days, with structural skin smoothing showing in 3 weeks.",
    timelineItems: [
      { when: "Immediately", what: "Skin looks red and feels hot. Minor needle point grid marks are normal." },
      { when: "Day 3", what: "Redness settles and minor scabbing/grid lines begin to flake off." },
      { when: "Week 3", what: "Collagen rebuilding begins, and skin feels firmer." },
      { when: "Month 2", what: "Stretch marks show narrowing and blend better with surrounding skin." },
      { when: "Month 6+", what: "Cumulative remodeling significantly smooths deep silver tears." }
    ],
    ctaRating: "130+ body stories",
    ctaTitle: "Ready to smooth",
    ctaTitle2: "and tighten stretch marks?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a clinical consultation to design your personalized MNRF stretch mark plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹12,000 / session" },
      { label: "Duration", val: "60 minutes" },
      { label: "Recommended", val: "4–6 sessions" },
      { label: "Frequency", val: "Every 4–6 weeks" },
      { label: "Downtime", val: "2–3 days grid redness" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/Skin-MNRF/before.webp",
      afterImage: "/services/Skin-MNRF/after.webp",
      treatmentName: "Skin MNRF Tightening",
      testimonialText: "My skin elasticity has improved significantly. It feels firmer, smoother, and younger.",
      patientName: "Latha M., 42",
      subtitle: "Microneedling fractional radiofrequency for face and neck tightening"
    },
  },
  "skin-dermapen": {
    id: "skin-dermapen",
    title: "Stretch Mark Microneedling",
    titleEmphasized: "Dermapen.",
    experienceNo: "Body Restoration Experience",
    description: "A natural pathway to texture restoration. Utilizing advanced automated needling, this treatment creates thousands of microscopic pathways in compromised skin, triggering a gentle, chemical-free cellular renewal to smooth stretch marks.",
    heroRating: "4.8 · Rated by 115+ patients",
    heroImage: "/services/laser-scar-reduction/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Aesthetic Expert",
    performedBySub: "Safe • Vertical Needle Penetration • Collagen induction",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "1–2", l: "Days mild pinkness" },
      { n: "4 Weeks", l: "Interval between sessions" },
      { n: "100%", l: "Natural collagen" }
    ],
    whatIsThisTag: "What is Dermapen for Stretch Marks?",
    whatIsThisTitle: "A gentle, natural",
    whatIsThisEmphasized: "awakening of collagen.",
    whatIsThisDesc1: "No heat, no chemicals—just your skin's organic power to heal. The Dermapen glides smoothly over stretch marks, creating vertical micro-channels that prompt a rapid cellular repair response.",
    whatIsThisDesc2: "During the sweeps, we infuse active skin-restoring serums deep into these channels. This dual action stimulates fresh collagen and elastin, helping silvery stretch lines fade, narrow, and blend beautifully.",
    benefits: [
      { icon: "🖋️", b: "Vertical Needling", d: "Minimizes pain and tearing compared to traditional rollers." },
      { icon: "🧬", b: "Collagen Induction", d: "Fills in silvers and tears with fresh structural proteins." },
      { icon: "💧", b: "Infusion Channels", d: "Maximizes penetration of nourishing clinical serums." },
      { icon: "⚡", b: "Rapid Healing", d: "Channels close quickly with minimal skin barrier disruption." }
    ],
    clinicalNote: "Skin hydration and healing serums are infused concurrently during needle sweeps.",
    sideImage: "/services/laser-scar-reduction/2.webp",
    machineTitle: "Vertical micro-needles",
    machineEmphasized: "for natural skin repair.",
    deviceName: "Dermapen 4 Platform",
    deviceSub: "DIGITAL NEEDLING • AUTO-CALIBRATED SPEED • MULTI-DEPTH",
    deviceDesc: "The Dermapen 4 delivers rapid vertical needle sweeps to target stretch marks precisely at deep dermal layer tiers.",
    deviceFeatures: ["Automated Vertical Needling", "Adjustable Needle Depth", "Disposable Sterile Tips", "Concomitant Serum Infusion"],
    deviceImage: "/services/laser-scar-reduction/Laser Scar Reduction.webp",
    comparisonTitle: "COSMO HOME vs Dermarollers",
    comparisonRows: [
      { label: "Needle Entry", ours: "Strictly vertical 90-degree puncture", standard: "Angled entry tears and grazes skin" },
      { label: "Safety", ours: "Disposable sterile needle cartridges", standard: "Reusable rollers risk infection" },
      { label: "Penetration", ours: "Auto-calibrated depth up to 2.5mm", standard: "Manual pressure lacks depth control" },
      { label: "Redness", ours: "Quick healing, resolves in 24 hours", standard: "Scratches require days to heal" }
    ],
    whoNeedsDesc: "Perfect for patients with mild to moderate stretch marks seeking a laser-free, natural skin remodeling treatment.",
    notSuitable: "Active skin infection in area, history of keloid scars, pregnancy.",
    whoNeedsItems: [
      { tag: "Mild stretch marks", desc: "Helps contract silvers and improve local texture." },
      { tag: "silvery mature tears", desc: "Triggers remodeling to narrow silvers." },
      { tag: "Crepey body skin", desc: "Collagen stimulation restores elasticity." },
      { tag: "Follicle roughness", desc: "Improves overall surrounding skin softness." }
    ],
    sessionPlanDesc: "Dermapen sessions are performed in a series of 4 to 6 sessions, spaced 4 weeks apart.",
    sessionPlanSteps: [
      { n: "01", label: "Skin Cleansing", duration: "10 min", detail: "Area is deep cleaned and prepped with topical sanitizers." },
      { n: "02", label: "Dermapen Sweeps", duration: "25 min", detail: "The Dermapen handpiece glides over target stretch marks with customized active serum infusing." },
      { n: "03", label: "Cooling Application", duration: "10 min", detail: "A hydrating barrier recovery cream is massaged to soothe the area." }
    ],
    timelineDesc: "Pinkness resolves in 1–2 days, with collagen remodeling showing from week 4.",
    timelineItems: [
      { when: "Immediately", what: "Skin looks pinkish, similar to mild sunburn, and feels tight." },
      { when: "Day 2", what: "Pinkness fades completely and skin barrier closes." },
      { when: "Week 2", what: "Skin texture begins to feel softer and more hydrated." },
      { when: "Week 4", what: "Visible improvement in stretch mark depth and tightness is noted." },
      { when: "Month 4+", what: "Silvery stretch marks appear narrower and blend better." }
    ],
    ctaRating: "115+ dermapen reviews",
    ctaTitle: "Ready to smooth",
    ctaTitle2: "stretch marks naturally?",
    ctaEmphasized: "Begin today.",
    ctaDesc: "Book a consultation to map out a customized Dermapen plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹7,500 / session" },
      { label: "Duration", val: "45 minutes" },
      { label: "Recommended", val: "4–6 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "1–2 days mild pinkness" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/Laser Scar Reduction/before.webp",
      afterImage: "/services/before&after/Laser Scar Reduction/after.webp",
      treatmentName: "Skin Dermapen Resurfacing",
      testimonialText: "I notice a huge difference in my skin texture. Dermapen made my skin look smoother and brighter.",
      patientName: "Nisha T., 27",
      subtitle: "Collagen induction therapy for skin texture and marks"
    },
  },
  "skin-co2-laser": {
    id: "skin-co2-laser",
    title: "Stretch Mark CO2 Laser",
    titleEmphasized: "CO2 Laser.",
    experienceNo: "Body Restoration Experience",
    description: "Complete texture resurfacing for your body. The fractional CO2 laser delivers precise micro-beams to vaporize columns of damaged stretch mark tissue, prompting the body to replace them with smooth, fresh, and dense skin.",
    heroRating: "4.9 · Rated by 140+ patients",
    heroImage: "/services/skin-co2-laser/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Laser Specialist",
    performedBySub: "Safe • Fractional CO2 • Intense Resurfacing",
    stats: [
      { n: "3–4", l: "Sessions recommended" },
      { n: "5–7", l: "Days social downtime" },
      { n: "4 Weeks", l: "Skin resurfacing onset" },
      { n: "100%", l: "Medical fractional laser" }
    ],
    whatIsThisTag: "What is CO2 Laser for Stretch Marks?",
    whatIsThisTitle: "Deep micro-beams",
    whatIsThisEmphasized: "for absolute skin polishing.",
    whatIsThisDesc1: "For deep or mature stretch marks, we use fractional carbon dioxide laser energy. Microscopic beams create precise thermal channels in the skin, safely vaporizing damaged fibers while leaving surrounding tissue untouched.",
    whatIsThisDesc2: "This fractional approach triggers a powerful cellular rebuild, drawing on the healthy surrounding cells to heal the channels quickly. Old silvery scars are replaced by fresh, smooth collagen, minimizing texture depth.",
    benefits: [
      { icon: "⚡", b: "Micro-beam Fractional", d: "Vaporizes tiny columns of skin to trigger complete remodeling." },
      { icon: "🧬", b: "Intense Collagen", d: "Forces maximum fiber reconstruction in torn skin layers." },
      { icon: "✨", b: "Surrounding Repair", d: "Intact surrounding cells accelerate healing of treated columns." },
      { icon: "🛡️", b: "Deep Resurfacing", d: "Smooths the texture difference of deep stretch mark channels." }
    ],
    clinicalNote: "A protective recovery ointment must be applied continuously for 5 days post-procedure.",
    sideImage: "/services/laser-pigment-reduction/2.webp",
    machineTitle: "Fractional carbon dioxide laser",
    machineEmphasized: "for deep resurfacing.",
    deviceName: "Fractional CO2 Laser Platform",
    deviceSub: "10600nm CO2 • PRECISION FRACTIONAL SCANNER • TEXTURE RESET",
    deviceDesc: "Our advanced CO2 laser delivers fractional micro-beams to vaporize scar tissues and contract skin collagen matrix.",
    deviceFeatures: ["10600nm Carbon Dioxide Laser", "Adjustable Fractional Scan Patterns", "Deep Penetration Scanner", "Laser Specialist Calibrated"],
    deviceImage: "/services/products-tech-images/micro-cell.webp",
    comparisonTitle: "COSMO HOME vs Standard Lasers",
    comparisonRows: [
      { label: "Energy Delivery", ours: "Precision micro-beams reduce burn risk", standard: "Broad continuous beams damage healthy skin" },
      { label: "Collagen Trigger", ours: "Intense vaporization resets skin matrix", standard: "Superficial heating only" },
      { label: "Healing Time", ours: "5-7 days with post-care protocols", standard: "Redness can persist for weeks" },
      { label: "Results Depth", ours: "Lifts and smooths deep silver stretch marks", standard: "Very mild skin softening only" }
    ],
    whoNeedsDesc: "Perfect for patients with mature, deep silvery stretch marks on the abdomen or thighs seeking aggressive texturing.",
    notSuitable: "Pregnancy, active tan or recent sun exposure, darker Fitzpatrick skin types V-VI (requires custom care).",
    whoNeedsItems: [
      { tag: "Deep silvery stretch marks", desc: "Vaporization narrows and flattens deep tears." },
      { tag: "Post-pregnancy abdominal laxity", desc: "Helps tighten loose skin overlying abdominal stretch marks." },
      { tag: "Wide body stretch lines", desc: "Remodeling narrows wide silvers." },
      { tag: "Uneven textured scars", desc: "Provides full resurfacing of rough tissue layers." }
    ],
    sessionPlanDesc: "CO2 laser sessions are performed in a series of 3 to 4 sessions, spaced 6 to 8 weeks apart.",
    sessionPlanSteps: [
      { n: "01", label: "Deep Numbing", duration: "60 min", detail: "A thick layer of prescription numbing gel is applied to ensure full comfort." },
      { n: "02", label: "Laser Treatment", duration: "25 min", detail: "The fractional CO2 scanner is swept across the target stretch marks." },
      { n: "03", label: "Barrier Ointment", duration: "10 min", detail: "Cooling compresses are applied, followed by a sterile recovery ointment." }
    ],
    timelineDesc: "Laser grid scabs form in 2 days and flake off by day 7, revealing smooth skin.",
    timelineItems: [
      { when: "Immediately", what: "Skin feels hot like sunburn, and looks red and swollen." },
      { when: "Day 3", what: "Swelling drops and tiny brown grid dots form across the treated skin." },
      { when: "Day 7", what: "Grid scabs flake off, revealing pink, fresh, and smooth skin." },
      { when: "Week 4", what: "Pinkness fades to normal skin color, and stretch marks look smoother." },
      { when: "Month 3+", what: "Dermal remodeling continues, showing dramatic narrowing of silvers." }
    ],
    ctaRating: "140+ CO2 laser stories",
    ctaTitle: "Ready for deep",
    ctaTitle2: "stretch mark resurfacing?",
    ctaEmphasized: "Consult today.",
    ctaDesc: "Book a clinical evaluation to see if CO2 laser is the best path for your skin type.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹15,000 / session" },
      { label: "Duration", val: "45 minutes" },
      { label: "Recommended", val: "3–4 sessions" },
      { label: "Frequency", val: "Every 6–8 weeks" },
      { label: "Downtime", val: "5–7 days grid scabbing" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/skin-co2-laser/before.webp",
      afterImage: "/services/skin-co2-laser/after.webp",
      treatmentName: "Skin CO2 Laser Resurfacing",
      testimonialText: "The laser treatment smoothed my uneven skin. The texture has improved and scars are barely noticeable.",
      patientName: "Ramya K., 30",
      subtitle: "Fractional CO2 laser resurfacing for skin texture improvement"
    },
  },
  "skin-prp": {
    id: "skin-prp",
    title: "Platelet-Rich Plasma",
    titleEmphasized: "Skin PRP.",
    experienceNo: "Natural Repair Experience",
    description: "A natural, autologous restoration. By concentrating the growth factors found in your own blood platelets, this bio-rebuilding treatment repairs stretch marks from within, helping them fade and blend naturally.",
    heroRating: "4.8 · Rated by 120+ patients",
    heroImage: "/services/hydrafacial-medifacial/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Clinical Expert",
    performedBySub: "Safe • Autologous Platelets • Regenerative",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "1–2", l: "Days mild swelling" },
      { n: "4 Weeks", l: "Interval" },
      { n: "100%", l: "Autologous active" }
    ],
    whatIsThisTag: "What is Skin PRP?",
    whatIsThisTitle: "Harnessing your body's",
    whatIsThisEmphasized: "indigenous healing power.",
    whatIsThisDesc1: "Your cells hold the key to skin repair. We collect a small sample of your blood and process it to isolate Platelet-Rich Plasma, concentrating the natural proteins that instruct cells to rebuild.",
    whatIsThisDesc2: "By infusing this concentrated plasma directly into stretch mark lines, we trigger rapid cell division and collagen synthesis. Over time, skin density increases and stretch marks fade into the surrounding tone.",
    benefits: [
      { icon: "🩸", b: "Autologous Plasma", d: "Uses your own blood plasma, avoiding synthetic chemical side effects." },
      { icon: "🧬", b: "Active Growth Factors", d: "Platelets release PDGF, TGF-b, and VEGF to signal tissue repair." },
      { icon: "✨", b: "Dermal Repair", d: "Heals structural tears from within the stretch mark bed." },
      { icon: "🛡️", b: "Natural Rebuilding", d: "Stimulates organic collagen remodeling for gradual skin blending." }
    ],
    clinicalNote: "Typically combined with Microneedling (Dermapen) to maximize tissue absorption.",
    technologyTag: "🧬 Regenerative Science",
    ourDeviceLabel: "✅ Autologous Method",
    sideImage: "/services/hydrafacial-medifacial/2.webp",
    machineTitle: "Centrifuge separation",
    machineEmphasized: "for pure platelets.",
    deviceName: "Calibrated Centrifuge System",
    deviceSub: "AUTOLOGOUS PLATELETS • GEL SEPARATION • PURE CONCENTRATE",
    deviceDesc: "We spin blood in specialized gel-tubes to isolate the platelet-rich buffy coat layer cleanly and safely.",
    deviceFeatures: ["Aesthetic Centrifuge", "Gel Barrier Separation Tubes", "Sterile Preparation Kit", "Precise Micro-needle Delivery"],
    deviceImage: "/services/hydrafacial-medifacial/Hydrafacial  Medifacial.webp",
    comparisonTitle: "COSMO HOME vs Standard PRP",
    comparisonRows: [
      { label: "Tube Quality", ours: "Gel-separation tubes yield higher platelet counts", standard: "Standard lab tubes yield poor platelet yield" },
      { label: "Safety", ours: "Double-spun sterile isolation kit", standard: "Open syringe transfers risk contamination" },
      { label: "Delivery", ours: "Precision dermal micro-needling combo", standard: "Superficial skin wiping only" },
      { label: "Comfort", ours: "Topical numbing reduces injection pinch", standard: "Injections done without numbing" }
    ],
    whoNeedsDesc: "Ideal for patients seeking a natural, autologous treatment to improve stretch mark texture and color.",
    notSuitable: "Pregnancy, bleeding disorders, low platelet counts, active infection in treatment area.",
    whoNeedsItems: [
      { tag: "Silvery mature stretch marks", desc: "Triggers tissue repair to blend tears." },
      { tag: "Post-pregnancy abdomen lines", desc: "Supports local skin recovery and tissue repair." },
      { tag: "Crepey skin texture", desc: "Growth factors rebuild dermal thickness." },
      { tag: "Sun-damaged body skin", desc: "Regenerative factors brighten and smooth skin." }
    ],
    sessionPlanDesc: "Performed as a course of 4 to 6 sessions, scheduled 4 weeks apart.",
    sessionPlanSteps: [
      { n: "01", label: "Blood Draw & Spin", duration: "25 min", detail: "A blood sample is drawn from the arm and spun in our centrifuge to isolate the PRP." },
      { n: "02", label: "Topical Numbing", duration: "35 min", detail: "Topical numbing is applied to the treatment area to ensure comfort." },
      { n: "03", label: "PRP Infusion", duration: "30 min", detail: "The PRP is infused into stretch marks using precision microneedling or micro-injections." }
    ],
    timelineDesc: "Mild swelling settles in 24 hours, with texture softeness starting in 2 weeks.",
    timelineItems: [
      { when: "Immediately", what: "Skin shows mild swelling and small injection bumps." },
      { when: "Day 2", what: "Swelling and needle bumps settle completely." },
      { when: "Week 2", what: "Skin texture begins to feel softer and more hydrated." },
      { when: "Week 4", what: "Visible improvement in stretch mark depth becomes noticeable." },
      { when: "Month 4+", what: "Dermal thickness shows improvement, blending stretch marks cleanly." }
    ],
    ctaRating: "120+ skin PRP stories",
    ctaTitle: "Ready to regenerate",
    ctaTitle2: "your skin naturally?",
    ctaEmphasized: "Inquire today.",
    ctaDesc: "Book a skin evaluation to prepare your autologous PRP protocol.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹10,000 / session" },
      { label: "Duration", val: "90 minutes" },
      { label: "Recommended", val: "4–6 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "1–2 days mild swelling" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1579684389782-64d84b5e901d?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/injections/before.webp",
      afterImage: "/services/before&after/injections/after.webp",
      treatmentName: "Skin PRP Rejuvenation",
      testimonialText: "My skin has a natural, healthy glow. The texture feels plump and rejuvenated.",
      patientName: "Deepika R., 33",
      subtitle: "Autologous Platelet-Rich Plasma for facial rejuvenation"
    },
  },
  "skin-gfc": {
    id: "skin-gfc",
    title: "Growth Factor Concentrate",
    titleEmphasized: "Skin GFC.",
    experienceNo: "Natural Repair Experience",
    description: "Next-generation cellular repair. Our advanced GFC therapy delivers a highly concentrated, cell-free serum of your body's own growth factors directly into stretch mark lines, prompting rapid dermal regeneration with minimal downtime.",
    heroRating: "4.9 · Rated by 125+ patients",
    heroImage: "/services/laser-scar-reduction/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Aesthetic Expert",
    performedBySub: "Safe • Pure Growth Factors • Advanced Repair",
    stats: [
      { n: "3–4", l: "Sessions recommended" },
      { n: "1", l: "Day downtime redness" },
      { n: "3 Weeks", l: "Visible skin smoothing" },
      { n: "100%", l: "Cell-free concentrate" }
    ],
    whatIsThisTag: "What is Skin GFC?",
    whatIsThisTitle: "A cell-free concentrate",
    whatIsThisEmphasized: "of pure growth proteins.",
    whatIsThisDesc1: "GFC represents a major advancement in regenerative aesthetics. We activate your platelets in specialized incubation tubes to release their entire growth factor content directly into the serum.",
    whatIsThisDesc2: "The red and white blood cells are completely filtered out, leaving a pure, cell-free gold concentrate. This highly purified concentrate is infused into stretch marks, delivering maximum regenerative signals with minimal post-treatment redness.",
    benefits: [
      { icon: "🧬", b: "Cell-Free GFC", d: "Pure growth factor concentrate without blood cell debris, reducing irritation." },
      { icon: "✨", b: "Max Active Signal", d: "Platelets are fully activated in vitro, releasing maximum growth factor yield." },
      { icon: "🎯", b: "Rebuilds Dermis", d: "Triggers rapid collagen and elastin synthesis in stretch marks." },
      { icon: "⚡", b: "Minimal Downtime", d: "Highly purified serum integrates cleanly with minimal soreness." }
    ],
    clinicalNote: "GFC tubes are incubated for 30 minutes to ensure full platelet activation before centrifugation.",
    technologyTag: "🧬 Regenerative Science",
    ourDeviceLabel: "✅ Pure Concentrate",
    sideImage: "/services/laser-scar-reduction/2.webp",
    machineTitle: "Incubation activation",
    machineEmphasized: "for pure GFC.",
    deviceName: "Calibrated Incubation System",
    deviceSub: "PLATELET ACTIVATION TUBE • ACCELERATED DRY CENTRIFUGE",
    deviceDesc: "We use specialized GFC tubes containing platelet activators to trigger maximum growth factor release prior to spinning.",
    deviceFeatures: ["Platelet Activation Incubator", "Dry Centrifuge Separator", "Filter Cartridges", "Micro-needle Delivery System"],
    deviceImage: "/services/laser-scar-reduction/Laser Scar Reduction.webp",
    comparisonTitle: "COSMO HOME vs Standard PRP",
    comparisonRows: [
      { label: "Purity", ours: "Cell-free concentrate prevents cell debris pain", standard: "Red/white blood cells cause pain and swelling" },
      { label: "Active Yield", ours: "Incubation releases up to 10x growth factors", standard: "Standard spin yields unactivated platelets" },
      { label: "Pain Level", ours: "Extremely comfortable with pure serum", standard: "Burning sensation from blood cell acidity" },
      { label: "Redness", ours: "Settles in under 24 hours", standard: "Redness and swelling persist for days" }
    ],
    whoNeedsDesc: "Ideal for patients seeking advanced growth factor therapy to repair stretch marks and loose skin.",
    notSuitable: "Pregnancy, bleeding disorders, severe liver disease, active local skin infection.",
    whoNeedsItems: [
      { tag: "Deep stretch mark silvers", desc: "High growth factor concentration repairs dermal tears." },
      { tag: "Post-pregnancy skin stretch", desc: "Stimulates collagen to firm abdominal skin laxity." },
      { tag: "Uneven skin texture", desc: "Accelerates cell renewal to smooth out scars." },
      { tag: "Thinning skin barrier", desc: "Thickens the dermal layer for resilient skin." }
    ],
    sessionPlanDesc: "We recommend a course of 3 to 4 sessions, spaced 4 weeks apart.",
    sessionPlanSteps: [
      { n: "01", label: "Blood Draw & Incubation", duration: "40 min", detail: "Blood is collected in GFC tubes, incubated to trigger growth factors, and spun." },
      { n: "02", label: "Topical Numbing", duration: "35 min", detail: "Topical numbing gel is applied to target skin zones." },
      { n: "03", label: "GFC Delivery", duration: "25 min", detail: "The purified growth factor serum is infused into stretch marks using precision microneedling." }
    ],
    timelineDesc: "Redness fades in 24 hours, with texture softening visible by week 3.",
    timelineItems: [
      { when: "Immediately", what: "Skin looks slightly pink and feels warm. Minimal swelling is normal." },
      { when: "Day 1", what: "Redness and heat fade completely, leaving skin comfortable." },
      { when: "Week 2", what: "Skin feels smoother, softer, and more hydrated." },
      { when: "Week 4", what: "Stretch marks show initial tightening and narrowing." },
      { when: "Month 3+", what: "New collagen fiber synthesis visibly smooths silvery stretch lines." }
    ],
    ctaRating: "125+ skin GFC stories",
    ctaTitle: "Ready for advanced",
    ctaTitle2: "growth factor skin repair?",
    ctaEmphasized: "Start today.",
    ctaDesc: "Book a GFC consultation to design your personalized repair protocol.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹14,000 / session" },
      { label: "Duration", val: "90 minutes" },
      { label: "Recommended", val: "3–4 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "1 day mild redness" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/injections/before.webp",
      afterImage: "/services/before&after/injections/after.webp",
      treatmentName: "Skin GFC Therapy",
      testimonialText: "Growth factors really helped my skin. The dullness has completely disappeared and my skin looks radiant.",
      patientName: "Aiswarya J., 30",
      subtitle: "Growth Factor Concentrate for facial brightening and tone"
    },
  },
  "skin-exosomes": {
    id: "skin-exosomes",
    title: "Stretch Mark Exosomes",
    titleEmphasized: "Exosomes.",
    experienceNo: "Cellular Rebuilding Experience",
    description: "The height of biotechnology in body care. Exosome therapy infuses billions of purified cellular signaling vesicles directly into stretch mark channels, directing surrounding cells to remodel torn fibers and restore density.",
    heroRating: "4.9 · Rated by 105+ patients",
    heroImage: "/services/hydrafacial-medifacial/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Aesthetic Expert",
    performedBySub: "Safe • Pure Exosomes • Cellular Repair",
    stats: [
      { n: "3-4", l: "Sessions recommended" },
      { n: "12-24h", l: "Downtime bumps" },
      { n: "7 Days", l: "Texture improvement" },
      { n: "100%", l: "Biotech pure yield" }
    ],
    whatIsThisTag: "What are Exosomes for Stretch Marks?",
    whatIsThisTitle: "Biotech signaling",
    whatIsThisEmphasized: "for deep cellular rebuilding.",
    whatIsThisDesc1: "Exosomes are microscopic messenger vesicles that coordinate cellular communication. When delivered directly into stretch mark tears, they instruct local fibroblasts to accelerate tissue repair and collagen synthesis.",
    whatIsThisDesc2: "This cutting-edge therapy operates on a cellular level, thickening thin, papery skin overlying stretch marks, reducing redness, and restoring a firm, uniform texture without synthetic fillers.",
    benefits: [
      { icon: "🧬", b: "Cellular Signaling", d: "Triggers fibroblasts to synthesize collagen and repair tears." },
      { icon: "✨", b: "Thickens Skin Matrix", d: "Rebuilds dermal thickness inside thin silvery stretch mark lines." },
      { icon: "🎯", b: "Accelerated Healing", d: "Reduces post-treatment recovery and skin redness rapidly." },
      { icon: "⚡", b: "Biotech Pure Yield", d: "Ultra-pure vesicles maximize cellular response and healing." }
    ],
    clinicalNote: "Exosomes are stored in a deep-freeze environment and reconstituted immediately before treatment.",
    technologyTag: "🧬 Regenerative Science",
    ourDeviceLabel: "✅ Cellular Vesicles",
    sideImage: "/services/hydrafacial-medifacial/2.webp",
    machineTitle: "Biotech cellular signals",
    machineEmphasized: "for stretch mark repair.",
    deviceName: "Premium Dermal Exosomes",
    deviceSub: "CELLULAR VESICLES • STERILE PREPARATION • TEXTURE REBUILD",
    deviceDesc: "We use biotech-isolated exosome signals to stimulate deep tissue repair in compromised skin layers.",
    deviceFeatures: ["Cellular Signaling", "Biotech Quality", "Micro-needling delivery", "Dermatologist-formulated"],
    deviceImage: "/services/hydrafacial-medifacial/Hydrafacial  Medifacial.webp",
    comparisonTitle: "COSMO HOME vs Standard Care",
    comparisonRows: [
      { label: "Active Agent", ours: "Billions of exosome cellular signals", standard: "Basic peptide or vitamin serums" },
      { label: "Delivery", ours: "Precision microneedling delivery", standard: "Superficial skin wiping only" },
      { label: "Efficacy", ours: "Rebuilds torn dermal fibers", standard: "Temporary hydration only" },
      { label: "Safety", ours: "Sterile medical-grade preparation", standard: "Budget homecare creams" }
    ],
    whoNeedsDesc: "Ideal for patients with wide, deep, or mature stretch marks seeking advanced cellular repair.",
    notSuitable: "Pregnancy, active skin infections, bleeding disorders.",
    whoNeedsItems: [
      { tag: "Wide silver stretch marks", desc: "Exosomes signal rapid collagen remodeling to narrow silvers." },
      { tag: "Crepey stretched skin", desc: "Restores elasticity and skin density." },
      { tag: "Post-pregnancy skin damage", desc: "Speeds up tissue repair and abdominal wall healing." },
      { tag: "Thin skin stretch lines", desc: "Thickens thin, papery skin overlying stretch mark lines." }
    ],
    sessionPlanDesc: "We recommend a course of 3 to 4 sessions, spaced 4 weeks apart.",
    sessionPlanSteps: [
      { n: "01", label: "Skin Assessment", duration: "15 min", detail: "Dermal thickness is assessed and target stretch mark zones mapped." },
      { n: "02", label: "Exosome Infusion", duration: "25 min", detail: "Exosomes are delivered to skin layers using precision microneedling." },
      { n: "03", label: "Barrier Soothing", duration: "15 min", detail: "Calming barrier repair creams are applied to soothe the area." }
    ],
    timelineDesc: "Skin feels softer in days, with maximum texture results visible at 4 weeks.",
    timelineItems: [
      { when: "Immediately", what: "Skin feels tight and shows mild pinkness." },
      { when: "Day 2", what: "Pinkness and heat settle completely." },
      { when: "Week 2", what: "Treated skin feels softer and texture begins to smooth." },
      { when: "Week 4", what: "Silvery stretch marks look tighter and less deep." },
      { when: "Month 3+", what: "Peak cellular collagen remodeling narrows stretch mark lines." }
    ],
    ctaRating: "105+ exosome stories",
    ctaTitle: "Ready for advanced",
    ctaTitle2: "cellular stretch mark repair?",
    ctaEmphasized: "Start today.",
    ctaDesc: "Book a consultation to map out a customized exosome plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹18,000 / session" },
      { label: "Duration", val: "60 minutes" },
      { label: "Recommended", val: "3–4 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "12-24 hours" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/injections/before.webp",
      afterImage: "/services/before&after/injections/after.webp",
      treatmentName: "Skin Exosome Rejuvenation",
      testimonialText: "This exosome treatment did wonders for my fine lines. My skin looks so refreshed and glowing.",
      patientName: "Malini V., 45",
      subtitle: "Advanced exosome therapy for anti-ageing and cell renewal"
    },
  },
  "hair-prp": {
    id: "hair-prp",
    title: "Platelet-Rich Plasma",
    titleEmphasized: "Hair PRP.",
    experienceNo: "Hair Restoration Experience",
    description: "Activate natural follicle renewal. Our signature Hair PRP therapy concentrates the regenerative growth factors from your own blood platelets, delivering them directly to the hair roots to stimulate thinning areas and naturally increase density.",
    heroRating: "4.8 · Rated by 320+ patients",
    heroImage: "/services/Hair-PRP/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Hair Expert",
    performedBySub: "Safe • Autologous Platelets • Hair Regrowth",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "Every 4 weeks", l: "Frequency" },
      { n: "100%", l: "Autologous active" }
    ],
    whatIsThisTag: "What is Hair PRP?",
    whatIsThisTitle: "Re-awakening hair roots",
    whatIsThisEmphasized: "with your own cells.",
    whatIsThisDesc1: "We isolate Platelet-Rich Plasma from a small sample of your own blood. Rich in natural cellular repair signals, this concentrated serum is delivered directly into the areas of thinning or hair loss to reactivate compromised roots.",
    whatIsThisDesc2: "The platelets act as direct cellular messengers, signaling dormant hair follicles to enter the active growth phase. Over a series of sessions, local blood supply increases, shedding slows down, and hair shafts thicken naturally.",
    benefits: [
      { icon: "🩸", b: "Autologous Platelets", d: "Uses your own blood plasma, avoiding synthetic chemical side effects." },
      { icon: "🧬", b: "Follicle Reactivation", d: "Wakes up dormant follicles to promote new hair growth." },
      { icon: "🌱", b: "Thickens Hair Shaft", d: "Extends active growth phase to prevent premature shedding." },
      { icon: "🛡️", b: "Natural Restoration", d: "Improves hair density and scalp health organically." }
    ],
    clinicalNote: "A clean scalp mapping is performed to identify target thinning areas before injections.",
    technologyTag: "🧬 Regenerative Science",
    ourDeviceLabel: "✅ Autologous Method",
    sideImage: "/services/Hair-PRP/2.webp",
    machineTitle: "Centrifuge separation",
    machineEmphasized: "for pure platelets.",
    deviceName: "Calibrated Centrifuge System",
    deviceSub: "AUTOLOGOUS PLATELETS • GEL SEPARATION • SCALP DELIVERY",
    deviceDesc: "We spin and separate blood to isolate active platelets cleanly and deliver them to hair roots.",
    deviceFeatures: ["Aesthetic Centrifuge", "Gel Separation Tubes", "Scale Mapping Grid", "Precision Micro-injections"],
    deviceImage: "/services/Hair-PRP/3.webp",
    comparisonTitle: "COSMO HOME vs Home Serums",
    comparisonRows: [
      { label: "Active Agent", ours: "Autologous active platelets and growth factors", standard: "Over-the-counter topical hair oils" },
      { label: "Follicle Depth", ours: "Delivered 1.5 - 2.5mm deep to hair roots", standard: "Serums sit on superficial scalp surface" },
      { label: "Efficacy", ours: "Clinically proven follicle reactivation", standard: "Temporary hydration of hair shafts only" },
      { label: "Scalp Safety", ours: "Sterile clinical preparation", standard: "Home oils can clog follicles and cause dandruff" }
    ],
    whoNeedsDesc: "Perfect for patients experiencing early-stage hair thinning, pattern baldness, or excessive shedding.",
    notSuitable: "Pregnancy, bleeding disorders, advanced scar alopecia, active scalp infection.",
    whoNeedsItems: [
      { tag: "Early hair thinning", desc: "Helps thicken fine hairs to increase volume." },
      { tag: "Pattern hair loss", desc: "Reactivates follicles in crown and parting areas." },
      { tag: "Excessive hair shedding", desc: "Extends growth phase to reduce shedding rate." },
      { tag: "Post-transplant support", desc: "Nourishes scalp to support new hair grafts." }
    ],
    sessionPlanDesc: "Hair PRP is performed in a course of 4 to 6 sessions, spaced 4 weeks apart.",
    sessionPlanSteps: [
      { n: "01", label: "Blood Draw & Spin", duration: "25 min", detail: "A blood sample is drawn and centrifuged to isolate the platelet-rich plasma." },
      { n: "02", label: "Scalp Cleansing", duration: "10 min", detail: "Scalp is prepared with medical sanitizers and mapped into target grids." },
      { n: "03", label: "Micro-injections", duration: "25 min", detail: "The PRP is injected into the mapped areas using micro-needles for comfort." }
    ],
    timelineDesc: "Shedding slows down in weeks, with new baby hair growth starting in 3 months.",
    timelineItems: [
      { when: "Immediately", what: "Scalp feels slightly tight or heavy. Bumps resolve in a few hours." },
      { when: "Week 4", what: "Hair fall slows down down." },
      { when: "Month 3", what: "Fine baby hair growth becomes visible in treated areas." },
      { when: "Month 6", what: "Hair density increases and hair shafts feel thicker." },
      { when: "Month 12+", what: "Sustained hair thickness with seasonal maintenance." }
    ],
    ctaRating: "320+ hair PRP stories",
    ctaTitle: "Ready to combat thinning",
    ctaTitle2: "and restore your hair?",
    ctaEmphasized: "Inquire today.",
    ctaDesc: "Book a scalp evaluation to prepare your autologous PRP protocol.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹8,000 / session" },
      { label: "Duration", val: "60 minutes" },
      { label: "Recommended", val: "4–6 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "None" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/Hair-PRP/before.webp",
      afterImage: "/services/Hair-PRP/after.webp",
      treatmentName: "Hair PRP Restoration",
      testimonialText: "My hair shedding has reduced substantially, and my hair feels thicker and healthier.",
      patientName: "Sandra K., 31",
      subtitle: "Platelet-Rich Plasma therapy for hair restoration and growth"
    },
  },
  "hair-gfc": {
    id: "hair-gfc",
    title: "Growth Factor Concentrate",
    titleEmphasized: "Hair GFC.",
    experienceNo: "Hair Restoration Experience",
    description: "Advanced next-generation hair restoration. GFC delivers an ultra-pure, cell-free concentrate of your body's own activated growth factors directly to the hair roots, slowing hair fall and promoting thicker, healthier growth with maximum comfort.",
    heroRating: "4.9 · Rated by 380+ patients",
    heroImage: "/services/Hair GFC/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Hair Expert",
    performedBySub: "Safe • Pure Growth Factors • Scalp Therapy",
    stats: [
      { n: "3–4", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "Every 4 weeks", l: "Frequency" },
      { n: "100%", l: "Cell-free purity" }
    ],
    whatIsThisTag: "What is Hair GFC?",
    whatIsThisTitle: "Pure cell-free gold",
    whatIsThisEmphasized: "for scalp regeneration.",
    whatIsThisDesc1: "GFC represents a clinical evolution in hair therapy. By incubating your platelets in specialized tubes, we activate them to release their entire growth factor content before separation, obtaining a highly concentrated serum.",
    whatIsThisDesc2: "The serum is completely filtered to remove red and white blood cells, resulting in a pure, cell-free concentrate. It is micro-injected into the scalp, delivering maximum growth signals directly to the hair roots with minimal soreness.",
    benefits: [
      { icon: "🧬", b: "Incubated Activation", d: "Platelets are fully activated to release maximum growth factors." },
      { icon: "✨", b: "Cell-Free Purity", d: "No red or white blood cells, reducing scalp inflammation and pain." },
      { icon: "🌱", b: "Follicle Nourishment", d: "Feeds hair roots directly to accelerate growth and stop shedding." },
      { icon: "🛡️", b: "Consistent Results", d: "Highly standardized growth factor yield per session." }
    ],
    clinicalNote: "GFC tubes are incubated for 30 minutes to activate platelets before dry centrifugation.",
    technologyTag: "🧬 Regenerative Science",
    ourDeviceLabel: "✅ Pure Concentrate",
    sideImage: "public/services/Hair GFC/2.webp",
    machineTitle: "Incubation activation",
    machineEmphasized: "for hair growth.",
    deviceName: "Calibrated Incubation System",
    deviceSub: "PLATELET ACTIVATION TUBE • DRY CENTRIFUGE • HAIR DELIVERY",
    deviceDesc: "We use GFC tube technology to trigger maximum growth factor release, delivering pure active proteins to hair roots.",
    deviceFeatures: ["Platelet Activation Incubator", "Dry Centrifuge Separator", "Scalp Mapping Grid", "Precision Micro-injections"],
    deviceImage: "/services/Hair GFC/3.webp",
    comparisonTitle: "COSMO HOME vs Standard PRP",
    comparisonRows: [
      { label: "Purity", ours: "Cell-free serum avoids cell debris pain", standard: "Red/white blood cells cause scalp soreness" },
      { label: "Active Yield", ours: "Incubation releases up to 10x growth factors", standard: "Standard spin yields unactivated platelets" },
      { label: "Pain Level", ours: "Extremely comfortable scalp injections", standard: "Acidity of blood cells causes burning" },
      { label: "Shedding Stop", ours: "Noticeable results in 2 sessions", standard: "Takes 4+ sessions to see changes" }
    ],
    whoNeedsDesc: "Ideal for patients with progressive hair thinning, male/female pattern baldness, or telogen effluvium.",
    notSuitable: "Pregnancy, bleeding disorders, advanced scar alopecia, active scalp infection.",
    whoNeedsItems: [
      { tag: "Pattern hair loss", desc: "Nourishes miniaturized follicles to regrow thicker hair." },
      { tag: "Sudden hair shedding", desc: "Calms follicle inflammation to stop shedding." },
      { tag: "Thin, weak hair", desc: "Increases hair shaft thickness and tensile strength." },
      { tag: "Receding hairline", desc: "Supports dormant hair roots in hairline zones." }
    ],
    sessionPlanDesc: "We recommend a course of 3 to 4 sessions, spaced 4 weeks apart.",
    sessionPlanSteps: [
      { n: "01", label: "Blood Draw & Incubation", duration: "40 min", detail: "Blood is collected in GFC tubes, incubated to trigger growth factors, and spun." },
      { n: "02", label: "Scalp Preparation", duration: "10 min", detail: "Scalp is cleaned and mapped into injection zones." },
      { n: "03", label: "GFC Injection", duration: "25 min", detail: "The purified growth factor serum is micro-injected into hair roots." }
    ],
    timelineDesc: "Hair shedding slows in 4 weeks, with density improvements in 3 months.",
    timelineItems: [
      { when: "Immediately", what: "Scalp feels comfortable with minimal soreness." },
      { when: "Week 4", what: "Hair fall slows down and hair feels stronger." },
      { when: "Month 3", what: "Baby hair growth and improved scalp coverage become visible." },
      { when: "Month 6", what: "Hair density increases and parting line appears narrower." },
      { when: "Month 12+", what: "Sustained hair density with seasonal GFC boosters." }
    ],
    ctaRating: "380+ hair GFC stories",
    ctaTitle: "Ready for advanced",
    ctaTitle2: "growth factor hair restoration?",
    ctaEmphasized: "Start today.",
    ctaDesc: "Book a scalp GFC consultation to design your personalized restoration protocol.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹12,000 / session" },
      { label: "Duration", val: "60 minutes" },
      { label: "Recommended", val: "3–4 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "None" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/Hair GFC/before.webp",
      afterImage: "/services/Hair GFC/after.webp",
      treatmentName: "Hair GFC Therapy",
      testimonialText: "After 3 sessions of GFC, the density of my hair has improved and the shedding has stopped completely.",
      patientName: "Ramya., 27",
      subtitle: "Growth Factor Concentrate therapy for hair density and health"
    },
  },
  "hair-exosome": {
    id: "hair-exosome",
    title: "Cellular Hair Therapy",
    titleEmphasized: "Hair Exosomes.",
    experienceNo: "Hair Restoration Experience",
    description: "The pinnacle of regenerative science for hair loss. Exosome therapy delivers billions of biotech-purified messenger vesicles directly to the scalp, instructing dormant hair follicles to reactivate and regrow thick, healthy hair.",
    heroRating: "4.9 · Rated by 110+ patients",
    heroImage: "/services/hair exosome/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Hair Specialist",
    performedBySub: "Safe • Pure Exosomes • Cellular Regeneration",
    stats: [
      { n: "3-4", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "Every 4 weeks", l: "Frequency" },
      { n: "100%", l: "Biotech pure yield" }
    ],
    whatIsThisTag: "What are Hair Exosomes?",
    whatIsThisTitle: "Biotechnology signaling",
    whatIsThisEmphasized: "for follicle awakening.",
    whatIsThisDesc1: "Dormant hair roots require active signals to rebuild. Scalp Exosomes are biotech-isolated extracellular vesicles rich in active growth factors and cell-signaling proteins that communicate directly with hair stem cells.",
    whatIsThisDesc2: "When micro-injected into the scalp, they transfer direct instructions to wake up dormant follicles and prolong the hair's active growth phase, reversing thinning and increasing hair density on a cellular level.",
    benefits: [
      { icon: "🧬", b: "Cellular Signaling", d: "Directly instructs hair follicle stem cells to start growing hair." },
      { icon: "✨", b: "Reactivates Follicles", d: "Wakes up dormant roots in thinning parting and crown areas." },
      { icon: "🌱", b: "Reduces Inflammation", d: "Calms scalp inflammation that causes premature hair loss." },
      { icon: "⚡", b: "Biotech Purity", d: "Highly concentrated vesicles for rapid follicle activation." }
    ],
    clinicalNote: "Exosomes are prepared in a sterile room and injected immediately to protect cell signaling active states.",
    technologyTag: "🧬 Regenerative Science",
    ourDeviceLabel: "✅ Cellular Vesicles",
    sideImage: "/services/hair exosome/2.webp",
    machineTitle: "Biotech cellular signals",
    machineEmphasized: "for hair regrowth.",
    deviceName: "Premium Scalp Exosomes",
    deviceSub: "CELLULAR VESICLES • STERILE SCALP INJECTIONS • DEEP FOLLICLE FEED",
    deviceDesc: "We use premium exosome formulations prepared under biotechnology standards to ensure maximum follicle stimulation.",
    deviceFeatures: ["Cellular Signaling", "Biotech Quality", "Micro-needle Scalp Delivery", "Scalp Mapping Grid"],
    deviceImage: "/services/hair exosome/3.webp",
    comparisonTitle: "COSMO HOME vs Standard Care",
    comparisonRows: [
      { label: "Active Agent", ours: "Billions of exosome cellular signals", standard: "Basic peptide hair tonics" },
      { label: "Delivery", ours: "Micro-injections directly to hair roots", standard: "Surface rubbing on hair strands" },
      { label: "Efficacy", ours: "Wakes up dormant hair follicle stem cells", standard: "Temporary hydration of hair only" },
      { label: "Purity", ours: "Sterile medical-grade exosome preparation", standard: "Over-the-counter cosmetic serums" }
    ],
    whoNeedsDesc: "Ideal for patients with progressive hair thinning, androgenetic alopecia, or thinning crown areas seeking advanced therapy.",
    notSuitable: "Pregnancy, bleeding disorders, advanced scar alopecia, active scalp infection.",
    whoNeedsItems: [
      { tag: "Progressive thinning", desc: "Signals miniaturized follicles to regrow thicker hair." },
      { tag: "Widening parting line", desc: "Supports density restoration in thinning areas." },
      { tag: "Dormant hair roots", desc: "Wakes up roots to promote new hair growth." },
      { tag: "Chronic hair shedding", desc: "Calms inflammatory signals to prevent shedding." }
    ],
    sessionPlanDesc: "We recommend a course of 3 to 4 sessions, spaced 4 weeks apart.",
    sessionPlanSteps: [
      { n: "01", label: "Scalp Assessment", duration: "15 min", detail: "Scalp health is evaluated and target hair thinning areas mapped." },
      { n: "02", label: "Exosome Injection", duration: "25 min", detail: "Exosomes are micro-injected into hair roots using fine needles for comfort." },
      { n: "03", label: "Post-injection care", duration: "10 min", detail: "Scalp is cleaned and soothing peptide serums are applied." }
    ],
    timelineDesc: "Shedding slows in weeks, with new baby hair growth starting in 3 months.",
    timelineItems: [
      { when: "Immediately", what: "Scalp feels comfortable with minimal soreness." },
      { when: "Week 4", what: "Hair fall slows down and hair feels stronger." },
      { when: "Month 3", what: "Baby hair growth and improved scalp coverage become visible." },
      { when: "Month 6", what: "Hair density increases and parting line appears narrower." },
      { when: "Month 12+", what: "Sustained hair density with seasonal exosome boosters." }
    ],
    ctaRating: "110+ hair exosome stories",
    ctaTitle: "Ready for advanced",
    ctaTitle2: "cellular follicle restoration?",
    ctaEmphasized: "Start today.",
    ctaDesc: "Book a scalp consultation to design your personalized exosome plan.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹20,000 / session" },
      { label: "Duration", val: "60 minutes" },
      { label: "Recommended", val: "3–4 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "None" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/before&after/injections/before.webp",
      afterImage: "/services/before&after/injections/after.webp",
      treatmentName: "Hair Exosome Therapy",
      testimonialText: "Exosomes gave my hair the ultimate boost. The thinning has reversed and my scalp feels healthier.",
      patientName: "Megha D., 35",
      subtitle: "Regenerative exosome therapy for advanced hair thinning"
    },
  },
  "hair-dutexome": {
    id: "hair-dutexome",
    title: "Hormonal & Cellular Shield",
    titleEmphasized: "Dutexome.",
    experienceNo: "Hair Restoration Experience",
    description: "The ultimate dual-action shield against pattern hair loss. Dutexome combines powerful DHT blockers with advanced exosome vesicles, targeting follicle miniaturization at its source while signaling rapid new hair growth.",
    heroRating: "4.9 · Rated by 90+ patients",
    heroImage: "/services/hair-dutexome/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Hair Specialist",
    performedBySub: "Safe • DHT Blockers • Exosomes",
    stats: [
      { n: "4–6", l: "Sessions recommended" },
      { n: "0", l: "Days downtime" },
      { n: "Every 4 weeks", l: "Frequency" },
      { n: "100%", l: "Targeted DHT shield" }
    ],
    whatIsThisTag: "What is Dutexome?",
    whatIsThisTitle: "Hormonal block",
    whatIsThisEmphasized: "and cellular growth synergy.",
    whatIsThisDesc1: "Pattern hair loss (androgenetic alopecia) is driven by DHT hormones that shrink hair follicles. Dutexome delivers a localized infusion of Dutasteride to block DHT, paired with pure exosome vesicles to stimulate growth.",
    whatIsThisDesc2: "This targeted therapy stops follicle miniaturization without the systemic side effects of oral medications. The exosomes deliver billions of cellular signals that wake up dormant hair roots, restoring natural density and volume.",
    benefits: [
      { icon: "🛡️", b: "DHT Hormone Block", d: "Dutasteride blocks the hormones responsible for male/female pattern hair loss." },
      { icon: "🧬", b: "Exosome Growth", d: "Vesicles signal stem cells to start growing thicker hair shafts." },
      { icon: "🌱", b: "Reverses Thinning", d: "Rebuilds hair thickness and follicle volume in crown areas." },
      { icon: "⚡", b: "No Oral Side Effects", d: "Local scalp delivery avoids the systemic side effects of oral pills." }
    ],
    clinicalNote: "Scalp numbing or cooling is applied to ensure full comfort during injections.",
    technologyTag: "🧬 Regenerative Science",
    ourDeviceLabel: "✅ Cellular Shield",
    sideImage: "/services/hair-dutexome/2.webp",
    machineTitle: "Hormonal block & growth",
    machineEmphasized: "for hair roots.",
    deviceName: "Dutexome Delivery Platform",
    deviceSub: "DUTASTERIDE INFUSION • EXOSOME VESICLES • SCALP INJECTIONS",
    deviceDesc: "We combine medical-grade DHT blockers with exosome growth signals for direct scalp micro-injections.",
    deviceFeatures: ["Dutasteride DHT Block", "Cellular Exosomes", "Scalp Mapping Grid", "Precision Micro-needles"],
    deviceImage: "/services/hair-dutexome/3.webp",
    comparisonTitle: "COSMO HOME vs Oral Finasteride",
    comparisonRows: [
      { label: "Side Effect Risk", ours: "Local scalp action avoids systemic side effects", standard: "Oral pills carry risk of hormonal side effects" },
      { label: "Follicle Target", ours: "Injected directly to the root bulb layer", standard: "Pills distribute throughout the whole body" },
      { label: "Growth Boost", ours: "Exosome signals active follicle stem cells", standard: "Pills only block DHT, no growth signal" },
      { label: "Consistency", ours: "Standardized clinical sessions every 4 weeks", standard: "Requires taking daily pills continuously" }
    ],
    whoNeedsDesc: "Perfect for patients with progressive pattern hair loss (androgenetic alopecia) seeking a highly effective therapy.",
    notSuitable: "Pregnancy, active scalp infection, bleeding disorders, advanced scar alopecia.",
    whoNeedsItems: [
      { tag: "Pattern hair loss (AGA)", desc: "Directly targets hormonal hair loss in crown and parting." },
      { tag: "Miniaturized hair roots", desc: "Helps thicken fine hairs before follicles shrink fully." },
      { tag: "Receding hair line", desc: "Blocks DHT at the frontal hairline to support growth." },
      { tag: "Post-transplant thinning", desc: "Supports surrounding native hairs to prevent loss." }
    ],
    sessionPlanDesc: "Dutexome is performed as a course of 4 to 6 sessions, spaced 4 weeks apart.",
    sessionPlanSteps: [
      { n: "01", label: "Scalp Mapping", duration: "15 min", detail: "Scalp health is evaluated and pattern hair loss zones mapped." },
      { n: "02", label: "Dutexome Injection", duration: "25 min", detail: "The Dutexome formula is micro-injected into target scalp zones." },
      { n: "03", label: "Post-care soothing", duration: "10 min", detail: "Scalp is cleaned and soothing clinical serums applied." }
    ],
    timelineDesc: "Shedding slows down in weeks, with hair density improving in 3 months.",
    timelineItems: [
      { when: "Immediately", what: "Scalp feels comfortable with minor temporary soreness." },
      { when: "Week 4", what: "Hair fall slows down significantly as DHT is blocked." },
      { when: "Month 3", what: "Fine baby hair regrowth becomes visible in parting zones." },
      { when: "Month 6", what: "Hair density increases and hair shafts feel thicker." },
      { when: "Month 12+", what: "Long-term hair density with seasonal maintenance boosters." }
    ],
    ctaRating: "90+ Dutexome stories",
    ctaTitle: "Ready to shield",
    ctaTitle2: "and restore your hair density?",
    ctaEmphasized: "Start today.",
    ctaDesc: "Book a scalp consultation to see if Dutexome is the best match for your hair goals.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹15,000 / session" },
      { label: "Duration", val: "60 minutes" },
      { label: "Recommended", val: "4–6 sessions" },
      { label: "Frequency", val: "Every 4 weeks" },
      { label: "Downtime", val: "None" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/hair-dutexome/before.webp",
      afterImage: "/services/hair-dutexome/after.webp",
      treatmentName: "Hair Dutexome Therapy",
      testimonialText: "Dutexome was highly effective for my hair loss. New hair growth is clearly visible and stronger.",
      patientName: "Meera R., 25",
      subtitle: "Dual-action exosome therapy for robust hair growth"
    },
  },
  "hair-monothreads": {
    id: "hair-monothreads",
    title: "Thread Lift Anchor",
    titleEmphasized: "Scalp Monothreads.",
    experienceNo: "Hair Restoration Experience",
    description: "Anchor your hair follicles with structural support. Scalp Monothreads place ultra-fine, absorbable medical sutures in the dermal layer of the scalp, creating a collagen network that grips thinning roots and improves scalp circulation.",
    heroRating: "4.8 · Rated by 80+ patients",
    heroImage: "/services/hair-monothreads/1.webp",
    performedByLabel: "👩‍⚕️ Performed by",
    performedByName: "Hair Expert",
    performedBySub: "Safe • Medical PDO Threads • Follicle Anchor",
    stats: [
      { n: "1–2", l: "Sessions recommended" },
      { n: "1–2", l: "Days mild scalp tightness" },
      { n: "4 Weeks", l: "Interval" },
      { n: "100%", l: "Absorbable PDO threads" }
    ],
    whatIsThisTag: "What are Scalp Monothreads?",
    whatIsThisTitle: "A structural framework",
    whatIsThisEmphasized: "to secure hair roots.",
    whatIsThisDesc1: "We insert ultra-fine, absorbable PDO (polydioxanone) threads into the dermal layer of the scalp. As these threads rest beneath the surface, they trigger a continuous, localized collagen synthesis.",
    whatIsThisDesc2: "The threads slowly and safely dissolve over 6 months, prompting new blood vessels to nourish the follicles while building a dense collagen matrix that physically anchors hair roots, minimizing premature shedding.",
    benefits: [
      { icon: "🧵", b: "Medical PDO Threads", d: "Uses safe absorbable threads that dissolve cleanly in 6 months." },
      { icon: "📡", b: "Follicle Anchoring", d: "Collagen surrounding the thread grips hair roots securely." },
      { icon: "🌱", b: "Vascular Synthesis", d: "Promotes new blood vessel growth to increase root nutrition." },
      { icon: "🛡️", b: "Long-lasting Action", d: "Maintains active collagen induction for up to 12 months." }
    ],
    clinicalNote: "Topical numbing gel is applied for 45 minutes to ensure full comfort during insertion.",
    technologyTag: "🧵 Suture Vectors",
    ourDeviceLabel: "✅ Absorbable Threads",
    sideImage: "/services/hair-monothreads/2.webp",
    machineTitle: "Absorbable threads",
    machineEmphasized: "for scalp collagen.",
    deviceName: "PDO Monothread Needles",
    deviceSub: "ABSORBABLE THREADS • STERILE NEEDLES • INDUCTION SHEATH",
    deviceDesc: "We insert sterile, ultra-fine PDO threads into the scalp dermal layers to trigger sustained collagen production.",
    deviceFeatures: ["Absorbable PDO Threads", "Ultra-fine Insertion Needles", "Sterile Packaging", "Hair Expert Calibrated"],
    deviceImage: "/services/hair-monothreads/3.webp",
    comparisonTitle: "COSMO HOME vs Standard Care",
    comparisonRows: [
      { label: "Collagen Lifespan", ours: "Threads stimulate collagen continuously for 6+ months", standard: "Serums stimulate scalp for hours only" },
      { label: "Follicle Grip", ours: "Collagen matrix anchors follicle bulbs physically", standard: "No physical anchoring of roots" },
      { label: "Blood Supply", ours: "Vascular synthesis increases oxygen to roots", standard: "Temporary circulation increase from massage" },
      { label: "Sessions", ours: "Requires only 1-2 sessions per year", standard: "Requires daily home care applications" }
    ],
    whoNeedsDesc: "Ideal for patients with persistent hair thinning at the hairline or crown, looking for long-term follicle support.",
    notSuitable: "Pregnancy, bleeding disorders, local scalp infections, keloid scarring history.",
    whoNeedsItems: [
      { tag: "Frontal hairline thinning", desc: "Anchors hair roots in high-tension areas." },
      { tag: "Crown hair thinning", desc: "Stimulates collagen to increase hair density." },
      { tag: "Miniaturized hair roots", desc: "Helps thicken fine hairs to prevent loss." },
      { tag: "Persistent shedding", desc: "Anchors roots physically to reduce shedding rate." }
    ],
    sessionPlanDesc: "Scalp Monothreads are performed in a series of 1 to 2 sessions, spaced 6 months apart.",
    sessionPlanSteps: [
      { n: "01", label: "Numbing Application", duration: "45 min", detail: "A strong topical anesthetic gel is applied to the scalp grids." },
      { n: "02", label: "Thread Insertion", duration: "30 min", detail: "PDO threads are inserted into mapped scalp zones using micro-needles." },
      { n: "03", label: "Scalp Cleaning", duration: "10 min", detail: "Scalp is cleaned and antiseptic protective sprays are applied." }
    ],
    timelineDesc: "Tightness settles in 2 days, with density improvements starting in 3 months.",
    timelineItems: [
      { when: "Immediately", what: "Scalp feels tight and slightly sore. Minor swelling is normal." },
      { when: "Day 3", what: "Scalp tightness and soreness settle completely." },
      { when: "Week 4", what: "Collagen synthesis begins, and scalp circulation improves." },
      { when: "Month 3", what: "Baby hair growth and increased hair shaft thickness are noted." },
      { when: "Month 6", what: "Maximal anchoring effect with visible parting line narrowing." }
    ],
    ctaRating: "80+ monothread reviews",
    ctaTitle: "Ready to anchor",
    ctaTitle2: "and support your hair roots?",
    ctaEmphasized: "Inquire today.",
    ctaDesc: "Book a scalp consultation to see if Monothreads are the best fit for your hair.",
    ctaQuickFacts: [
      { label: "Price from", val: "₹18,000 / session" },
      { label: "Duration", val: "90 minutes" },
      { label: "Recommended", val: "1–2 sessions" },
      { label: "Frequency", val: "Every 6 months" },
      { label: "Downtime", val: "1–2 days mild tightness" }
    ],
    ctaImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&h=900&fit=crop&auto=format",
    beforeAfter: {
      beforeImage: "/services/hair-monothreads/before.webp",
      afterImage: "services/hair-monothreads/after.webp",
      treatmentName: "Hair Monothreads Anchoring",
      testimonialText: "PDO threads helped anchor my thinning hair. The crown density has improved and hair fall is minimized.",
      patientName: "Amala, 25",
      subtitle: "PDO monothreads grid vectors for scalp structural support"
    },
  }

};