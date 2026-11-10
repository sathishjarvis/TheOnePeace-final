import { useCallback, useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import "./styles/index.css";

import { SECTION_IDS, marqueeItems } from "./lib/content";
import useActiveSection from "./hooks/useActiveSection";

import Seo from "./components/Seo";
import CursorGlow from "./components/CursorGlow";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/ui/Marquee";
import Statement from "./components/Statement";
import Services from "./components/Services";
import Work from "./components/Work";
import Stats from "./components/Stats";
import TechStrip from "./components/TechStrip";
import About from "./components/About";
import Process from "./components/Process";
import Faq from "./components/Faq";
import AdSlot from "./components/AdSlot";
import Contact from "./components/Contact";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  const openModal = useCallback(() => setModal(true), []);
  const closeModal = useCallback(() => setModal(false), []);
  const finishLoading = useCallback(() => setLoading(false), []);

  return (
    /* reducedMotion="user": people who turn off animations in their device settings get a calm site */
    <MotionConfig reducedMotion="user">
      <div className="app">
        <a className="skip-link" href="#main">Skip to content</a>
        <Seo />
        <CursorGlow />
        <AnimatePresence>{loading && <Loader onDone={finishLoading} />}</AnimatePresence>

        <ScrollProgress />
        <Navbar active={active} onStart={openModal} />

        <main id="main" tabIndex={-1}>
          <Hero onStart={openModal} ready={!loading} />
          <Marquee items={marqueeItems} />
          <Statement />
          <Services />
          <Work />
          <Stats />
          <TechStrip />
          <About />
          <Process />
          <Faq />
          <AdSlot />
          <Contact onStart={openModal} />
        </main>

        <Footer />
        <FloatingButtons />

        <AnimatePresence>{modal && <ContactModal onClose={closeModal} />}</AnimatePresence>
      </div>
    </MotionConfig>
  );
}
