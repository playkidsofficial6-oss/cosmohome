export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Skin Science' | 'Dermatology Tips' | 'Treatments Explained' | 'Lifestyle & Wellness';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags: string[];
  sections: {
    heading?: string;
    content: string;
    quote?: string;
    callout?: string;
  }[];
}

export const JOURNAL_CATEGORIES = [
  'All Articles',
  'Skin Science',
  'Dermatology Tips',
  'Treatments Explained',
  'Lifestyle & Wellness'
] as const;

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: 'science-of-collagen-stimulation-hifu-vs-rf-microneedling',
    title: 'The Science of Collagen Stimulation: HIFU vs. RF Microneedling',
    excerpt: 'Understanding how non-invasive dermal lifting technologies activate autologous collagen production at distinct cellular depth layers.',
    category: 'Skin Science',
    author: {
      name: 'Dr. Ruxana',
      role: 'Founder & Medical Director',
      avatar: '/doctor/ruxana.webp'
    },
    publishedAt: 'July 18, 2026',
    readTime: '6 min read',
    image: '/Journal/jounal-.jfif',
    featured: true,
    tags: ['HIFU', 'Collagen', 'RF Microneedling', 'Anti-Ageing'],
    sections: [
      {
        heading: 'Introduction: Why Collagen Matters After 25',
        content: 'From our mid-twenties onward, natural dermal collagen synthesis declines by approximately 1% per year. Combined with environmental stressors and micro-inflammation, this structural depletion leads to loss of skin elasticity, fine lines, and tissue laxity. Modern aesthetic medicine focuses not merely on filling gaps, but on stimulating your body’s own neocollagenesis mechanism.'
      },
      {
        heading: 'High-Intensity Focused Ultrasound (HIFU)',
        content: 'HIFU delivers micro-focused ultrasound energy to precise depths within the skin, including the SMAS (Superficial Muscular Aponeurotic System) layer—the exact structural foundation addressed during traditional surgical facelifts. Thermal coagulation points created at 65–70°C trigger a natural wound-healing cascade, stimulating fresh type-I and type-III collagen synthesis without breaking the epidermis.',
        quote: 'HIFU reaches deeper structural layers (up to 4.5mm) to provide foundational lifting, while RF Microneedling rebuilds textural quality at mid-dermal depths.'
      },
      {
        heading: 'Radiofrequency (RF) Microneedling (MNRF)',
        content: 'MNRF combines mechanical micro-perforations with insulated gold-plated needles that emit targeted radiofrequency heat into the reticular dermis. This dual-action approach remodels scar tissue, refines pore architecture, and tightens lax skin on both facial and body zones.'
      },
      {
        heading: 'Clinical Guidance: Which Is Right For You?',
        content: 'Rather than treating HIFU and MNRF as competing procedures, clinical evidence supports tailored combination protocols. While HIFU establishes deep structural tightening and jawline contour definition, RF Microneedling refines surface texture, fine lines, and open pores.',
        callout: 'Doctor’s Note: Always ensure your diagnostic consultation includes high-resolution ultrasound or skin analysis to verify dermal depth parameters before undergoing collagen induction treatments.'
      }
    ]
  },
  {
    slug: 'exosomes-in-regenerative-dermatology-the-next-frontier',
    title: 'Exosomes in Regenerative Dermatology: Beyond Traditional Growth Factors',
    excerpt: 'How nano-scale extracellular vesicles are revolutionising cellular rejuvenation, post-laser healing, and hair follicle restoration.',
    category: 'Treatments Explained',
    author: {
      name: 'Dr. Anas Abdulla',
      role: 'Cosmetic Dermatologist',
      avatar: '/doctor/dr2.webp'
    },
    publishedAt: 'July 10, 2026',
    readTime: '5 min read',
    image: '/services/exosomes-prp-gfc/1.webp',
    featured: false,
    tags: ['Exosomes', 'Regenerative Medicine', 'Skin Rejuvenation', 'Hair Revival'],
    sections: [
      {
        heading: 'What Are Exosomes?',
        content: 'Exosomes are extracellular vesicles (nano-sized bubbles between 30 and 150 nanometers) secreted by stem cells. They act as essential messenger packets, transporting lipids, proteins, microRNA, and growth factor signals directly to target skin cells.'
      },
      {
        heading: 'Superior Signal Transmission',
        content: 'Unlike traditional topical serums or isolated PRP growth factors, exosomes possess lipid bilayer membranes that protect their molecular payload. When introduced into the dermis following microneedling or fractional laser channels, they instruct damaged or ageing skin cells to repair DNA, calm inflammation, and synthesize matrix proteins.',
        quote: 'Exosome signaling reduces post-laser recovery downtime from days to hours while doubling fibroblast activity.'
      },
      {
        heading: 'Applications in Hair & Skin Care',
        content: 'In hair restoration (Dutexome and Exosome scalp therapy), exosome signals awaken dormant telogen hair follicles and transition them into active anagen growth phases. In facial rejuvenation, exosome infusions accelerate dermal barrier repair and eliminate post-inflammatory hyperpigmentation.'
      }
    ]
  },
  {
    slug: 'post-treatment-aftercare-guide-maximizing-results',
    title: 'The Essential Post-Treatment Aftercare Protocol',
    excerpt: 'A comprehensive medical guide on protecting your skin barrier, preventing PIH, and extending clinical treatment longevity.',
    category: 'Dermatology Tips',
    author: {
      name: 'Dr. Ruxana',
      role: 'Founder & Medical Director',
      avatar: '/doctor/ruxana.webp'
    },
    publishedAt: 'June 28, 2026',
    readTime: '4 min read',
    image: '/services/laser-pigment-reduction/1.webp',
    featured: false,
    tags: ['Aftercare', 'Skin Barrier', 'Sun Protection', 'Dermatology'],
    sections: [
      {
        heading: 'The 48-Hour Dermal Recovery Window',
        content: 'The first 48 hours following clinical procedures—whether chemical peels, laser resurfacing, or injectable therapies—are critical. During this timeframe, skin permeability is elevated, rendering the epidermal barrier sensitive to environmental exposure and active irritants.'
      },
      {
        heading: 'Golden Rules of Post-Procedure Care',
        content: '1. Avoid direct sunlight and apply broad-spectrum mineral zinc SPF 50+ every 2–3 hours.\n2. Pause all active exfoliants (AHAs, BHAs, Retinoids, Vitamin C) for 5 to 7 days.\n3. Focus strictly on barrier repair using ceramide-rich, non-comedogenic emollients and hyaluronic acid serums.',
        callout: 'Essential Advice: Never pick or force skin shedding after peels or micro-dermabrasion. Natural desquamation ensures scar-free healing.'
      }
    ]
  },
  {
    slug: 'holistic-approach-to-adult-acne-and-pigmentation',
    title: 'A Holistic Clinical Approach to Adult Acne & Hyperpigmentation',
    excerpt: 'Why treating persistent adult breakouts requires addressing gut health, hormonal equilibrium, and targeted medical peels.',
    category: 'Lifestyle & Wellness',
    author: {
      name: 'Dr. Mohammed Navas M',
      role: 'Cosmetic Dermatologist',
      avatar: '/doctor/dr3.webp'
    },
    publishedAt: 'June 14, 2026',
    readTime: '7 min read',
    image: '/services/Derma-pen-Skin/1.webp',
    featured: false,
    tags: ['Adult Acne', 'Pigmentation', 'Mesopeels', 'Holistic Health'],
    sections: [
      {
        heading: 'Unpacking Adult Hormonal Acne',
        content: 'Adult acne differs fundamentally from adolescent breakouts. It is often characterized by deeper inflammatory papules located along the lower third of the face, jawline, and chin. It stems from androgen sensitivity, chronic cortisol stress, and compromised sebum quality.'
      },
      {
        heading: 'Combination Medical Therapies',
        content: 'At Cosmo Home, we address adult acne through multi-modal therapy: tailored Mesopeels (Salicylic, Mandelic, and Azelaic acid formulations) to decongest pilosebaceous units, coupled with LED blue-light therapy to eradicate P. acnes bacteria without oral antibiotics.',
        quote: 'True skin clarity comes from aligning internal metabolic health with targeted dermatological interventions.'
      }
    ]
  },
  {
    slug: 'demystifying-skin-boosters-vs-dermal-fillers',
    title: 'Demystifying Aesthetics: Skin Boosters vs. Dermal Fillers',
    excerpt: 'Clarifying the distinction between structural volumetric augmentation and deep dermal bio-remodelling.',
    category: 'Treatments Explained',
    author: {
      name: 'Dr. Marjan Abdul Nazar',
      role: 'Cosmetic Dermatologist',
      avatar: '/doctor/dr4.webp'
    },
    publishedAt: 'May 30, 2026',
    readTime: '5 min read',
    image: '/services/Skin Boosters/1.webp',
    featured: false,
    tags: ['Skin Boosters', 'Fillers', 'Hyaluronic Acid', 'Injectables'],
    sections: [
      {
        heading: 'Volumization vs. Hydration',
        content: 'Many patients assume all hyaluronic acid (HA) injectables serve the same purpose. However, structural dermal fillers utilize cross-linked HA designed to hold shape and restore volume losses in cheeks, lips, or chin. Skin Boosters (such as Profhilo or non-crosslinked micro-HA) spread uniformly under the skin to hydrate and stimulate fibroblasts without altering facial anatomy.'
      },
      {
        heading: 'The Natural Aesthetic Philosophy',
        content: 'If your goal is to look refreshed, hydrated, and radiant without adding volume or changing your facial features, skin boosters are the gold standard solution in modern aesthetic medicine.'
      }
    ]
  }
];
