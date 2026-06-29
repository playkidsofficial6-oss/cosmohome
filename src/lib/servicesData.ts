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
    deviceImage: "/services/hifu/3.webp",
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
    whatIsThisTitle: "This is note",
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
    deviceImage: "/services/hydrafacial-medifacial/3.webp",
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
    deviceImage: "/services/laser-pigment-reduction/3.webp",
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
    deviceImage: "/services/laser-scar-reduction/3.webp",
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
  },
  "phototherapy": {
    id: "phototherapy",
    title: "Light Rejuvenation",
    titleEmphasized: "Phototherapy.",
    experienceNo: "Signature Experience",
    description: "Medical-grade LED light therapy to heal acne, soothe inflammation, reduce redness, and charge skin cells.",
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
    deviceImage: "/services/phototherapy/3.webp",
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
  },
  "laser-hair-reduction": {
    id: "laser-hair-reduction",
    title: "Smooth Skin",
    titleEmphasized: "Lasting Confidence.",
    experienceNo: "Signature Experience",
    description: "Comfort-focused, medical-grade laser hair reduction for a wide range of skin tones and hair types using advanced triple-wavelength technology.",
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
    deviceImage: "/services/laser-hair-reduction/3.webp",
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
  },
  "muscle-sculpting": {
    id: "muscle-sculpting",
    title: "Body Definition",
    titleEmphasized: "Sculpting.",
    experienceNo: "Signature Experience",
    description: "High-intensity electromagnetic energy builds stronger muscles, improves body definition, and reduces stubborn fat—completely non-invasive with zero downtime.",
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
      { n: "01", label: "Abdominal/Gluteal Mapping", duration: "30 min", detail: "Dr. Ruxana measures target zones, outlines muscle boundaries, and sets energy levels." },
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
  },
  "exosomes-prp-gfc": {
    id: "exosomes-prp-gfc",
    title: "Advanced Regenerative",
    titleEmphasized: "PRP & GFC.",
    experienceNo: "Signature Experience",
    description: "Advanced regenerative therapies using PRP and Growth Factor Concentrate (GFC) to stimulate hair growth, improve skin quality, and support natural tissue repair.",
    heroRating: "4.9 · Rated by 280+ patients",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
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
    whatIsThisDesc2: "Instead of synthetic chemicals, these therapies harness your body's own natural growth factors (PRP/GFC) or laboratory-purified exosomes to stimulate collagen, repair scars, and reverse hair thinning. Every treatment is prepared in a sterile clinical laboratory and injected by Dr. Ruxana or our dermatologists.",
    benefits: [
      { icon: "🧬", b: "Bio-regenerative healing", d: "Uses natural cell-signaling pathways for repair" },
      { icon: "🧪", b: "Purified Growth Factors", d: "Highly concentrated growth factors support tissue repair and regeneration." },
      { icon: "✨", b: "Cellular Communication", d: "Exosomes deliver regenerative signals that support collagen production and tissue repair." },
      { icon: "🌱", b: "Hair Follicle Stimulation", d: "Helps reactivate dormant follicles to encourage healthier hair growth." }
    ],
    clinicalNote: "Blood is processed using a medical centrifuge to obtain a highly concentrated layer of growth factors and platelets.",
    sideImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    machineTitle: "Precision Growth",
    machineEmphasized: "factor isolation.",
    deviceName: "Medical PRP & GFC Preparation System",
    deviceSub: "Medical Centrifuge · Sterile Preparation · Premium Exosomes",
    deviceDesc: "Blood is processed using a medical-grade centrifuge to prepare highly concentrated PRP or purified Growth Factor Concentrate (GFC), delivering regenerative proteins while minimizing unwanted inflammatory components.",
    deviceFeatures: ["Medical-grade centrifuge", "High-concentration PRP/GFC", "Precision injection protocol", "Sterile preparation system"],
    deviceImage: "https://images.unsplash.com/photo-1631217871099-88310a909a32?w=800&h=450&fit=crop&auto=format",
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
      { n: "02", label: "Micro-Droplet Delivery", duration: "30 min", detail: "Once the numbing cream is removed, Dr. Ruxana performs precise micro-droplet injections into the targeted skin or scalp." },
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
  }
};
