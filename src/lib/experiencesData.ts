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
  "face-rejuvenation": {
    id: "face-rejuvenation",
    title: "Face Rejuvenation Experience",
    tagline: "Lift. Smooth. Restore.",
    subtitle: "Non-Surgical Facial Harmonisation",
    description: "Medical-grade anti-ageing protocols tailored to facial harmony.",
    duration: "From 3 sessions",
    suitedFor: "Individuals seeking subtle structural lifting, smoothing of lines, and restored facial harmony.",
    philosophy: "True rejuvenation is about harmony, not over-correction. We work with your unique bone structure and facial dynamics to lift, smooth, and restore natural contours using precision medical-grade protocols.",
    image: "/services/hifu/1.webp",
    stages: [
      {
        n: "01",
        title: "Structural Assessment",
        description: "We analyze your facial architecture, volume distribution, and skin elasticity to draft a customized anti-ageing strategy."
      },
      {
        n: "02",
        title: "Precision Calibration",
        description: "Utilizing advanced technologies like HIFU to target the deep SMAS layer, we stimulate lasting collagen synthesis and firm contours."
      },
      {
        n: "03",
        title: "Volume & Smooth Refinement",
        description: "Subtle applications of injectables, fillers, or skin boosters restore volume loss and smooth fine lines for a cohesive, natural finish."
      }
    ],
    benefits: [
      "Natural structural lift along the jawline, cheeks, and brow",
      "Smoothed fine lines and dynamic expression wrinkles",
      "Restored youthful volume and optimized facial symmetry",
      "Long-term collagen and elastin regeneration for resilient skin"
    ]
  },
  "skin-transformation": {
    id: "skin-transformation",
    title: "Skin Transformation Experience",
    tagline: "Healthy skin begins with diagnosis.",
    subtitle: "Epidermal Renewal & Repair",
    description: "Designed for acne, pigmentation, scars and texture improvement.",
    duration: "From 3 sessions",
    suitedFor: "Acne, pigmentation, scars, and texture issues.",
    philosophy: "Healthy skin begins with an accurate diagnosis. By understanding your skin's specific needs, we design targeted protocols incorporating medical-grade peels, advanced lasers, and regenerative therapies to restore skin health at a cellular level.",
    image: "/services/laser-pigment-reduction/1.webp",
    stages: [
      {
        n: "01",
        title: "Advanced Diagnosis",
        description: "We perform a multi-spectral scan to analyze depth of pigmentation, sebum production, and scar tissue distribution."
      },
      {
        n: "02",
        title: "Targeted Purge & Resurface",
        description: "Utilizing custom Mesopeels or Carbon Peels to target acne and pigment, followed by CO₂ Laser or MNRF to rebuild scar tissue."
      },
      {
        n: "03",
        title: "Dermal Repair & Infusion",
        description: "Exosome therapy accelerates skin repair, stimulating healthy cell turnover and collagen production for refined texture."
      }
    ],
    benefits: [
      "Cleared active acne and balanced sebum production",
      "Faded pigmentation, sun spots, and post-acne marks",
      "Smoother skin texture and refined acne scar appearance",
      "Enhanced skin barrier repair and accelerated cell regeneration"
    ]
  },
  "body-contouring": {
    id: "body-contouring",
    title: "Body Contouring Experience",
    tagline: "Shape with confidence.",
    subtitle: "Non-surgical Sculpting & Tightening",
    description: "Non-surgical body sculpting and tightening.",
    duration: "From 4 sessions",
    suitedFor: "Individuals seeking non-invasive fat reduction, muscle toning, or skin tightening.",
    philosophy: "Body contouring is about feeling confident in your own shape. We design targeted, non-surgical treatment plans using advanced technologies to reduce fat, sculpt muscle, and tighten skin safely and gradually.",
    image: "/services/Muscle Sculpting/1.webp",
    stages: [
      {
        n: "01",
        title: "Composition & Mapping",
        description: "We analyze your muscle mass, body fat distribution, and skin elasticity to select custom treatments."
      },
      {
        n: "02",
        title: "Precision Sculpting",
        description: "Utilizing muscle sculpting or fat reduction technology to target specific areas of fat loss or muscle building."
      },
      {
        n: "03",
        title: "Dermal Tightening",
        description: "Applying radiofrequency or focused energies to tighten loose skin and contour body shapes."
      }
    ],
    benefits: [
      "Noticeable reduction in localized stubborn fat deposits",
      "Increased muscle definition and core strength in target areas",
      "Tightened and smoothed skin texture in contouring zones",
      "Completely non-surgical protocols with zero downtime"
    ]
  },
  "hair-restoration": {
    id: "hair-restoration",
    title: "Hair Restoration Experience",
    tagline: "Stronger hair. Healthier scalp.",
    subtitle: "Regenerative Scalp Therapy",
    description: "Evidence-based treatments for thinning and hair loss.",
    duration: "From 3 sessions",
    suitedFor: "Individuals experiencing hair thinning, hair fall, or dry, inflamed scalp conditions.",
    philosophy: "Healthy hair starts with a healthy scalp. Our Hair Restoration protocols combine growth factor concentrates, exosomes, and mesotherapy to stimulate active hair follicles, increase density, and restore hair thickness naturally and effectively.",
    image: "/services/exosomes-prp-gfc/1.webp",
    stages: [
      {
        n: "01",
        title: "Follicular Assessment",
        description: "We analyze your scalp using high-resolution trichoscopy to evaluate hair density and follicular health."
      },
      {
        n: "02",
        title: "Active Stimulation",
        description: "Utilizing PRP or GFC to deliver high concentrations of growth factors directly to thinning zones."
      },
      {
        n: "03",
        title: "Regenerative Polish",
        description: "Exosomes and clinical mesotherapy nourish hair follicles, strengthening the shaft and speeding up regrowth."
      }
    ],
    benefits: [
      "Reactivated dormant hair follicles in thinning zones",
      "Significant reduction in hair shedding and fall",
      "Improved hair shaft density, thickness, and volume",
      "Calmed, balanced, and hydrated scalp environment"
    ]
  },
  "regenerative-aesthetics": {
    id: "regenerative-aesthetics",
    title: "Regenerative Aesthetics",
    tagline: "Repair. Regenerate. Rejuvenate.",
    subtitle: "Advanced Regenerative Therapy",
    description: "Advanced regenerative therapies for natural results.",
    duration: "From 3 sessions",
    suitedFor: "Individuals seeking naturally refreshed skin, volume restoration, or tissue repair.",
    philosophy: "True rejuvenation comes from within. Our Regenerative Aesthetics protocols use autologous growth factors and cellular exosomes to trigger your body's natural healing mechanisms, repairing skin at a cellular level.",
    image: "/services/exosomes-injectables/1.webp",
    stages: [
      {
        n: "01",
        title: "Cellular Profiling",
        description: "We analyze your skin's health and aging factors to map out a precise cell-stimulating protocol."
      },
      {
        n: "02",
        title: "Therapeutic Delivery",
        description: "Delivering high concentrations of PRP, GFC, or clinical exosomes deep into target treatment areas."
      },
      {
        n: "03",
        title: "Regenerative Lock-in",
        description: "Nourishing cellular recovery and using soothing light therapy to optimize tissue healing and collagen synthesis."
      }
    ],
    benefits: [
      "Naturally stimulated collagen and elastin production",
      "Faded fine lines, wrinkles, and acne scars",
      "Restored hydration, elasticity, and youthful radiance",
      "Accelerated skin repair with minimal to no social downtime"
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
