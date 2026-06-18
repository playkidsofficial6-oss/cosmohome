
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "motion/react";
import { ArrowRight, Menu, X, Instagram, Facebook, Home, MessageCircle, ClipboardList, Sparkles, Heart, Award, Shield, AlertTriangle, CheckCircle, XCircle, Phone, BadgeCheck, Stethoscope, GraduationCap, Users, ChevronRight } from "lucide-react";

import { B } from "../lib/constants";
import { Preloader } from "../components/ui/shared";
import { Nav, Footer, MobileBottomCTA } from "../components/layout";
import HomePage from "../pages/Home";
import ServicePage from "../pages/Service";
export function AppContent() {
    const location = useLocation();
    const [ready, setReady] = useState(() => location.pathname !== "/");
    useEffect(() => {
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
    <div style={B} className="bg-background">
      <AnimatePresence>{!ready && <Preloader onDone={() => setReady(true)} />}</AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}>
        <Nav ready={ready} />
        <Routes>
          <Route path="/" element={<HomePage ready={ready} />} />
          <Route path="/service" element={<ServicePage />} />
        </Routes>
        <Footer />
      </motion.div>
      <MobileBottomCTA />
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
