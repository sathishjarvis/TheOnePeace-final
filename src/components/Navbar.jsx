import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/toplogo.png";
import { NAV, ease } from "../lib/content";
import { go } from "../lib/scroll";
import MagneticButton from "./ui/MagneticButton";

const label = (id) => id[0].toUpperCase() + id.slice(1);

export default function Navbar({ active, onStart }) {
  const [menu, setMenu] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 240);
    setScrolled(latest > 24);
  });

  const nav = (e, id) => { e.preventDefault(); go(id); setMenu(false); };

  return (
    <>
      <motion.header
        className={`header ${scrolled ? "scrolled" : ""}`}
        initial={{ y: "-100%" }}
        animate={{ y: hidden && !menu ? "-100%" : "0%" }}
        transition={{ duration: 0.45, ease }}
      >
        <div className="container nav">
          <a className="brand" href="#home" onClick={(e) => nav(e, "home")} aria-label="The One Peace Technology, back to top">
            <span className="logo"><img src={logo} alt="The One Peace Technology logo" width="120" height="58" /></span>
            <span className="brand-name">The One Peace Technology</span>
          </a>

          <nav className="nav-links" aria-label="Main">
            {NAV.map((id) => (
              <a key={id} href={`#${id}`} onClick={(e) => nav(e, id)} className={active === id ? "active" : ""} aria-current={active === id ? "true" : undefined}>
                {label(id)}
                {active === id && (
                  <motion.span className="active-dot" layoutId="activeDot" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
              </a>
            ))}
          </nav>

          <MagneticButton className="nav-cta" onClick={onStart}>
            Start a project <ArrowUpRight size={16} />
          </MagneticButton>

          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu" aria-expanded={menu}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menu && (
          <motion.nav className="mobile-menu" aria-label="Mobile" initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            {NAV.map((id, i) => (
              <motion.a key={id} href={`#${id}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} onClick={(e) => nav(e, id)}>
                {label(id)} <ArrowUpRight size={16} />
              </motion.a>
            ))}
            <button className="mobile-cta" onClick={() => { setMenu(false); onStart(); }}>Start a project</button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
