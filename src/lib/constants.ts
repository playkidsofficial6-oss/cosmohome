import React from 'react';
import { Home, MessageCircle, ClipboardList, Sparkles, Heart, Award, Shield, AlertTriangle, CheckCircle, XCircle, Phone, BadgeCheck, Stethoscope, GraduationCap, Users } from "lucide-react";
export const D = { fontFamily: "'Fraunces', serif" };
export const M = { fontFamily: "'DM Mono', monospace" };
export const B = { fontFamily: "'DM Sans', sans-serif" };
export const GOLD = "#C9956A";
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE2: [number, number, number, number] = [0.76, 0, 0.24, 1];
export const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;
export const MACHINE_SPECS = [
      { label: "Technology", ours: "HydraFacial MD Elite — medical grade", standard: "Basic hydradermabrasion device" },
      { label: "Serum delivery", ours: "Patented Vortex-Fusion® system", standard: "Manual application" },
      { label: "Extraction", ours: "Automated vacuum spiral suction", standard: "Manual comedone extraction" },
      { label: "Customisation", ours: "Doctor-prescribed booster serums", standard: "Fixed serum selection" },
      { label: "Skin analysis", ours: "AI-assisted before & after imaging", standard: "Visual assessment only" },
      { label: "Operator", ours: "Performed by qualified dermatologist", standard: "Beauty therapist" },
    ];
export const WHO_NEEDS = [
      { tag: "Dull or tired skin", desc: "Lifestyle stress, poor sleep, or seasonal changes that leave skin looking flat and lifeless." },
      { tag: "Congested pores", desc: "Blackheads, whiteheads, and enlarged pores from sebum build-up." },
      { tag: "Uneven tone", desc: "Post-acne marks, pigmentation, sun damage, or redness." },
      { tag: "Dehydrated skin", desc: "Surface dryness and fine lines worsened by environmental exposure." },
      { tag: "Pre-event glow", desc: "Immediate luminosity boost before a wedding, photoshoot, or important occasion." },
      { tag: "Maintenance care", desc: "Ongoing skin health as part of a long-term aesthetic programme." },
    ];
export const SESSION_PLAN = [
      { n: "01", label: "Assessment Session", duration: "75 min", detail: "Dr. Ruxana analyses your skin type, concerns, and goals. A bespoke serum protocol is prescribed. Your first full Skin Renewal treatment is performed, and baseline photography documented." },
      { n: "02", label: "Intensification", duration: "60 min", detail: "Results from session one are reviewed. Serum boosters are adjusted based on your skin's response. Deeper exfoliation is introduced if the skin has tolerated session one well." },
      { n: "03", label: "Consolidation", duration: "60 min", detail: "The full Vortex-Fusion protocol is delivered at optimal parameters. Most patients report peak results after this session — clearer, brighter, and noticeably smoother skin." },
      { n: "04–06", label: "Maintenance Programme", duration: "45 min", detail: "Optional ongoing sessions every 4–6 weeks to sustain results, adapt to seasonal skin changes, and introduce new targeted boosters as needed." },
    ];
export const TIMELINE = [
      { when: "Immediately", what: "Visible brightness and hydration. Skin feels clean and plump." },
      { when: "Day 3–5", what: "Pores appear refined. Tone begins to even. No downtime or peeling." },
      { when: "Week 2–3", what: "Surface congestion cleared. Fine lines softer. Friends notice without knowing why." },
      { when: "After 3 sessions", what: "Cumulative collagen stimulation visible. Skin texture measurably improved." },
      { when: "Month 3+", what: "Long-term skin health maintained. Results hold and build with each session." },
    ];
export const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";
export const DOCTORS = [
      {
        name: "Dr. Ruxana",
        role: "Founder & Medical Director",
        spec: "Aesthetic Medicine",
        creds: "MBBS · MRCS · Dip. Aesthetic Med. · Fellow BCAM",
        img: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=600&h=800&fit=crop&auto=format&crop=faces",
        alt: "Dr. Ruxana, Founder of COSMO HOME",
        highlight: true,
      },
      {
        name: "Dr. Anas Abdulla",
        role: "Cosmetic Dermatologist",
        spec: "Dermatology & Venereology",
        creds: "MBBS · MD (D&V) · DNB",
        img: "https://images.unsplash.com/photo-1712215544003-af10130f8eb3?w=600&h=800&fit=crop&auto=format&crop=faces",
        alt: "Dr. Anas Abdulla, Cosmetic Dermatologist",
        highlight: false,
      },
      {
        name: "Dr. Mohammed Navas M",
        role: "Cosmetic Dermatologist",
        spec: "Dermatology & Venereology",
        creds: "MBBS · MD · DVL · DNB",
        img: "https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?w=600&h=800&fit=crop&auto=format&crop=faces",
        alt: "Dr. Mohammed Navas M, Cosmetic Dermatologist",
        highlight: false,
      },
      {
        name: "Dr. Marjan Abdul Nazar",
        role: "Cosmetic Dermatologist",
        spec: "Dermatology & Venereology",
        creds: "MBBS · MD · DVL · DNB",
        img: "https://images.unsplash.com/photo-1701096374092-bb70915fdc5c?w=600&h=800&fit=crop&auto=format&crop=faces",
        alt: "Dr. Marjan Abdul Nazar, Cosmetic Dermatologist",
        highlight: false,
      },
    ];
export const STANDARDS = [
      { Icon: GraduationCap, label: "Full medical degrees", body: "Every doctor at COSMO HOME holds a recognised medical degree (MBBS minimum) plus specialist postgraduate qualifications. No exceptions." },
      { Icon: BadgeCheck, label: "Board-certified specialists", body: "Our dermatologists are MD/DNB-qualified — the highest clinical standard for skin medicine in India and internationally recognised." },
      { Icon: Stethoscope, label: "Emergency-ready clinicians", body: "All practitioners are trained to recognise and immediately manage complications — including vascular occlusion and severe adverse reactions." },
      { Icon: Shield, label: "Fully insured & indemnified", body: "Every procedure is covered by comprehensive medical indemnity. Your safety is our first legal and ethical obligation." },
      { Icon: Users, label: "Named consultant care", body: "You always know who is treating you and exactly what their qualifications are. We never delegate procedures to unqualified staff." },
      { Icon: CheckCircle, label: "Honest about what we won't do", body: "We decline treatments we cannot perform safely. Knowing when to say no is the mark of a genuine clinician — not a salesperson." },
    ];
export const STEPS: Step[] = [
      { Icon: Home, n: "01", phase: "Arrival", emoji: "🏡", color: "#C9956A", desc: "You are welcomed — not checked in. Chamomile tea. A calm room. No rush. Just warmth from the moment you arrive." },
      { Icon: MessageCircle, n: "02", phase: "Conversation", emoji: "💬", color: "#B8806A", desc: "Dr. Ruxana listens first. Your 60-minute consultation begins with you talking, and her understanding who you are." },
      { Icon: ClipboardList, n: "03", phase: "Your Plan", emoji: "📋", color: "#A87060", desc: "A bespoke plan designed for you — staged, thoughtful, honest. If nothing is right for you today, she will say so." },
      { Icon: Sparkles, n: "04", phase: "Experience", emoji: "✨", color: "#C9956A", desc: "Calm music. Warm lighting. Every step narrated clearly so nothing is unexpected. You remain in control." },
      { Icon: Heart, n: "05", phase: "Aftercare", emoji: "💛", color: "#B8806A", desc: "Dr. Ruxana's direct line. A personalised aftercare guide. A 48-hour check-in. The care continues long after." },
      { Icon: Award, n: "06", phase: "Results", emoji: "🌟", color: "#A87060", desc: "Results documented with clinical photography — honouring your journey and the confidence you carry home." },
    ];

export type Step = { Icon: React.FC<{ size?: number; color?: string }>; n: string; phase: string; emoji: string; color: string; desc: string };
