import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { ease, trust } from "../lib/content";
import { go } from "../lib/scroll";
import Words from "./ui/Words";
import MagneticButton from "./ui/MagneticButton";
import RotatingText from "./ui/RotatingText";
import HeroVisual from "./HeroVisual";
import Laptop from "../assets/laptop-og.png";

const specialties = ["LMS platforms", "CRM systems", "HRMS software", "n8n automations", "AI agents", "mobile and desktop apps"];
const rise = (ready, delay, y = 25) => ({
  initial: { opacity: 0, y },
  animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y },
  transition: { duration: 0.8, delay, ease },
});

export default function Hero({ onStart, ready }) {
  const ref = useRef(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end start"], layoutEffect: false });
  const textY = useTransform(p, [0, 1], [0, 140]);
  const textO = useTransform(p, [0, 0.7], [1, 0]);
  const blobY1 = useTransform(p, [0, 1], [0, 260]);
  const blobY2 = useTransform(p, [0, 1], [0, -160]);

  return (
    <section id="home" className="hero" ref={ref} aria-label="The One Peace Technology, software company">
      <div className="hero-bg">
        <motion.i className="blob b1" style={{ y: blobY1 }} />
        <motion.i className="blob b2" style={{ y: blobY2 }} />
        <div className="hero-grid" />
      </div>
      <div className="hero-visual-column">
      <HeroVisual progress={p} ready={ready} laptopImage={Laptop} />
      </div>

      <motion.div className="container hero-content" style={{ y: textY, opacity: textO }}>
        <motion.p className="pill" {...rise(ready, 0, 20)}>
          <Sparkles size={14} /> SOFTWARES • TOOLS • AUTOMATIONS • APPS • GROWTH
        </motion.p>

        <Words as="h1" immediate hold={!ready} delay={0.15} text="We build software and automation for" accent="ambitious businesses." />

        <motion.p className="hero-rotor" {...rise(ready, 0.6)}>
          We specialised in <RotatingText words={specialties} />
        </motion.p>

        <motion.p className="hero-copy" {...rise(ready, 0.75)}>
          The One Peace Technology is a software company that turn your ideas into powerful digital solutions. From business software and websites to mobile apps, AI automation and digital marketing, we build technology that simplifies your work and helps your business grow.
        </motion.p>

        <motion.div className="hero-actions" {...rise(ready, 0.9)}>
          <MagneticButton className="btn primary" onClick={onStart}>
            Start a project <ArrowRight size={18} />
          </MagneticButton>
          <a className="text-link" href="#work" onClick={(e) => { e.preventDefault(); go("work"); }}>
            See our work <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <motion.ul className="trust" initial="hidden" animate={ready ? "show" : "hidden"} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 1.05 } } }}>
          {trust.map(({ icon: Icon, label }) => (
            <motion.li key={label} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}>
              <Icon size={16} /> {label}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.button className="scroll-cue" onClick={() => go("services")} initial={{ opacity: 0 }} animate={{ opacity: ready ? 1 : 0 }} transition={{ delay: 1.6 }} aria-label="Scroll to services">
        <span className="mouse"><i /></span>
        Scroll
      </motion.button>
    </section>
  );
}
