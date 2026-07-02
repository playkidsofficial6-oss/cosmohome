export interface ExperienceData {
  id: string;
  title: string;
  tagline: string;
  subtitle: string;
  description: string;
  duration: string;
  suitedFor: string;
  philosophy: string;
  image: string;
  stages: {
    n: string;
    title: string;
    description: string;
  }[];
  benefits: string[];
}

export const EXPERIENCES_DATA: Record<string, ExperienceData> = {
  "skin-renewal": {
    id: "skin-renewal",
    title: "Skin Renewal Experience",
    tagline: "Rediscover your glow",
    subtitle: "Bespoke Epidermal Restoration",
    description: "A deeply personalised skin journey combining medical-grade analysis, bespoke topical protocols, and precision regenerative treatments. Designed to restore luminosity, clarity, and texture — naturally, gradually, and lastingly.",
    duration: "From 3 sessions",
    suitedFor: "All skin types seeking clarity, texture refinement, and a natural radiance.",
    philosophy: "Healthy skin begins at the cellular level. Rather than masking imperfections with temporary superficial treatments, the Skin Renewal Experience rebuilds the epidermal barrier, targets hyperpigmentation, and optimizes cellular turnover.",
    image: "/services/hydrafacial-medifacial/1.webp",
    stages: [
      {
        n: "01",
        title: "Clinical Analysis & Mapping",
        description: "We begin with a multi-spectral skin scan and wood's lamp analysis to locate deep pigmentation, measure hydration levels, and evaluate structural health."
      },
      {
        n: "02",
        title: "Controlled Resurfacing",
        description: "A custom mesopeel formulation and carbon laser treatment gently sweep away damaged epidermal cells, refine pores, and stimulate cellular turnover."
      },
      {
        n: "03",
        title: "Regenerative Infusion",
        description: "The treatment concludes with an infusion of pure hyaluronic acid, antioxidants, and growth factors, sealed under calming phototherapy to accelerate barrier repair."
      }
    ],
    benefits: [
      "Visibly refined skin texture and smaller pore appearance",
      "Noticeable reduction in sun spots, melasma, and hyperpigmentation",
      "Enhanced epidermal barrier function and deep hydration",
      "Restored natural, healthy luminosity and skin clarity"
    ]
  },
  "age-gracefully": {
    id: "age-gracefully",
    title: "Age Gracefully Experience",
    tagline: "Confidence, not correction",
    subtitle: "Structural Rejuvenation & Longevity",
    description: "A staged approach to natural facial rejuvenation. We work with the unique architecture of your face — not against it — using subtle structural restoration and advanced collagen stimulation.",
    duration: "Ongoing, quarterly sessions",
    suitedFor: "Individuals aged 35–60 seeking natural longevity, subtle lifting, and volume restoration.",
    philosophy: "Aging is a privilege, and rejuvenation should look entirely like you. We believe in soft calibrations that restore structural volume and stimulate deep collagen production to maintain your natural features rather than freezing them.",
    image: "/services/hifu/1.webp",
    stages: [
      {
        n: "01",
        title: "Structural Evaluation",
        description: "Dr. Ruxana completes a detailed assessment of bone structure, facial muscle tone, fat pad distribution, and skin elasticity to map volume loss."
      },
      {
        n: "02",
        title: "Deep Collagen Activation",
        description: "Utilizing medical-grade High-Intensity Focused Ultrasound (HIFU), we target the SMAS layer beneath the skin to lift and tighten facial contours naturally."
      },
      {
        n: "03",
        title: "Refinement & Hydration",
        description: "Subtle hyaluronic acid mapping or autologous growth factors restore key support structures around the jawline and mid-face, followed by skin plumping."
      }
    ],
    benefits: [
      "Natural-looking lift and tightening along the jawline and cheeks",
      "Restored structural volume in areas of gradual depletion",
      "Long-term collagen synthesis for firmer, more resilient skin",
      "Softer fine lines and wrinkles with zero unnatural frozen appearance"
    ]
  },
  "confidence-restoration": {
    id: "confidence-restoration",
    title: "Confidence Restoration",
    tagline: "Return to yourself",
    subtitle: "Post-Transition Cellular Repair",
    description: "For those at a major turning point — post-pregnancy, post-illness, or post-stress — this experience is designed to rebuild your skin barrier and restore your relationship with your reflection.",
    duration: "Bespoke 3 to 6-month programme",
    suitedFor: "Anyone navigating life transitions, hormonal shifts, or recovery seeking skin comfort.",
    philosophy: "Our bodies reflect our life's journeys. The Confidence Restoration experience is a gentle, supportive, and restorative path focusing on healing vascular redness, restoring skin elasticity, and calming inflammation.",
    image: "/services/phototherapy/1.webp",
    stages: [
      {
        n: "01",
        title: "Barrier Assessment",
        description: "We evaluate skin sensitivity, transepidermal water loss, and vascular reactivity to establish a baseline for gentle repair."
      },
      {
        n: "02",
        title: "Vascular & Redness Relief",
        description: "Using medical-grade LED phototherapy and soothing antioxidants, we calm inflamed tissues and strengthen fragile capillaries."
      },
      {
        n: "03",
        title: "Textural Polish & Rehydration",
        description: "Gentle enzymes and deep water-binding serums polish rough patches and restore volume, leaving the skin feeling comfortable and hydrated."
      }
    ],
    benefits: [
      "Repaired skin barrier function and significantly reduced sensitivity",
      "Calmed facial redness, vascular flushing, and inflammation",
      "Restored skin softness, elasticity, and comfort",
      "A peaceful, supportive clinical environment centered on wellness"
    ]
  },
  "hair-revival": {
    id: "hair-revival",
    title: "Hair Revival Experience",
    tagline: "Strength from within",
    subtitle: "Regenerative Scalp & Follicle Therapy",
    description: "A clinical and holistic approach to hair thinning and scalp health. Addresses the root causes of hair loss through advanced growth factor therapies and personalized nutrition guidelines.",
    duration: "6-month clinical programme",
    suitedFor: "Men and women experiencing gradual thinning, hair fall, or dry, inflamed scalp conditions.",
    philosophy: "Healthy hair is an extension of scalp health. By isolating and delivering high concentrations of autologous growth factors directly to dormant hair follicles, we stimulate active growth and increase hair density.",
    image: "/services/exosomes-prp-gfc/1.webp",
    stages: [
      {
        n: "01",
        title: "Follicular Mapping",
        description: "We inspect the scalp using high-resolution trichoscopy to evaluate follicle density, hair diameter, and sebum levels."
      },
      {
        n: "02",
        title: "Growth Factor Concentrate (GFC)",
        description: "Using a medical centrifuge, we isolate concentrated growth factors from your own blood and deliver them to target thinning zones."
      },
      {
        n: "03",
        title: "Scalp Renewal & Homecare",
        description: "We calm the scalp with phototherapy and establish a daily topical protocol combined with nutritional support to maintain active growth."
      }
    ],
    benefits: [
      "Noticeable reduction in hair fall and follicle shedding",
      "Improved hair shaft thickness, volume, and scalp coverage",
      "Reactivated dormant hair follicles in thinning zones",
      "Balanced scalp pH with reduced oiliness or dryness"
    ]
  },
  "personalised-journey": {
    id: "personalised-journey",
    title: "Personalised Journey",
    tagline: "Your vision. Our expertise.",
    subtitle: "Long-term Aesthetic Partnership",
    description: "A comprehensive, long-term relationship with aesthetic medicine. Dr. Ruxana designs a multi-year care plan aligned with your unique goals, lifestyle, and evolving beauty.",
    duration: "Annual signature programme",
    suitedFor: "Patients seeking a proactive, preventative, and long-term approach to aesthetic maintenance.",
    philosophy: "Great aesthetics are not achieved overnight. The Personalised Journey is a multi-year partnership where treatments are timed, paced, and calibrated to align with your seasonal needs and long-term goals.",
    image: "/services/laser-pigment-reduction/1.webp",
    stages: [
      {
        n: "01",
        title: "Annual Consultative Roadmap",
        description: "We align on your long-term skin goals, review your clinical history, and build a calendar pacing treatments over the year."
      },
      {
        n: "02",
        title: "Seasonal Treatment Calibrations",
        description: "Treatments are adapted each season: deep hydration and barrier repair in dry months, and advanced laser resurfacing in cooler months."
      },
      {
        n: "03",
        title: "Continuous Evaluation",
        description: "Quarterly follow-ups allow us to document progress, adjust settings, and calibrate homecare protocols for sustained excellence."
      }
    ],
    benefits: [
      "A customized, structured yearly schedule for all your aesthetic needs",
      "Proactive, preventative care that prevents concerns before they arise",
      "Continuous direct monitoring and guidance by Dr. Ruxana",
      "Priority booking and access to advanced clinical assessments"
    ]
  }
};
