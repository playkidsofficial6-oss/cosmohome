
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "motion/react";
import { ArrowRight, Menu, X, Instagram, Facebook, Home, MessageCircle, ClipboardList, Sparkles, Heart, Award, Shield, AlertTriangle, CheckCircle, XCircle, Phone, BadgeCheck, Stethoscope, GraduationCap, Users, ChevronRight } from "lucide-react";

import { B } from "../lib/constants";
import { Preloader } from "../components/ui/shared";
import { Nav, Footer, MobileBottomCTA } from "../components/layout";
import HomePage from "../pages/Home";
import ServicePage from "../pages/Service";
import ServicesListPage from "../pages/ServicesList";
import BookConsultationPage from "../pages/BookConsultation";
import ExperiencePage from "../pages/Experience";
import DrRuxanaPage from "../pages/DrRuxana";
import JournalPage from "../pages/Journal";
export function AppContent() {
    const location = useLocation();
    const [ready, setReady] = useState(() => location.pathname !== "/");
    useEffect(() => {
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
      if (location.hash) {
        const timer = setTimeout(() => {
          const el = document.getElementById(location.hash.slice(1));
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
        return () => clearTimeout(timer);
      } else {
        window.scrollTo(0, 0);
      }
    }, [location.pathname, location.hash]);
    return (
    <div style={B} className="bg-background">
      <AnimatePresence>{!ready && <Preloader onDone={() => setReady(true)} />}</AnimatePresence>
      <motion.div initial={false} animate={ready ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6 }}>
        <Nav ready={ready} />
        <Routes>
          <Route path="/" element={<HomePage ready={ready} />} />
          <Route path="/service" element={<ServicesListPage />} />
          <Route path="/service/:slug" element={<ServicePage />} />
          <Route path="/experience/:slug" element={<ExperiencePage />} />
          <Route path="/book-consultation" element={<BookConsultationPage />} />
          <Route path="/dr-ruxana" element={<DrRuxanaPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:slug" element={<JournalPage />} />
        </Routes>
        <Footer />
      </motion.div>
      {location.pathname !== "/book-consultation" && <MobileBottomCTA />}
    </div>
    );
}

export default function App() {
    return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
    );
}
