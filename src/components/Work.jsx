import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import TiltCard from "./ui/TiltCard";
import { projects } from "../lib/content";
import Words from "./ui/Words";

function ProjectCard({ p }) {
  const Icon = p.icon;
  return (
    <TiltCard as="article" className="hcard" style={{ "--c1": p.c1, "--c2": p.c2 }}>
      <div className="hc-visual">
        <div className="hc-glyph"><Icon size={30} strokeWidth={1.7} /></div>
        <div className="bars">
          {[42, 70, 52, 88, 60, 96, 72].map((h, k) => (
            <i key={k} style={{ "--h": `${h}%`, animationDelay: `${k * 0.22}s` }} />
          ))}
        </div>
        <span className="hc-type">{p.type}</span>
      </div>
      <div className="hc-body">
        <h3>{p.title}</h3>
        <p>{p.text}</p>
        <div className="tags dark">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
        {p.link && (
          <a className="hc-link" href={p.link} target="_blank" rel="noopener noreferrer">
            Visit live site <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </TiltCard>
  );
}

/* Pinned section that scrolls sideways (desktop + mobile) */
export default function Work() {
  const ref = useRef(null);
  const trackRef = useRef(null);
  const [dist, setDist] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"], layoutEffect: false });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const barScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const calc = () => {
      if (!trackRef.current) return;
      setDist(Math.max(0, trackRef.current.scrollWidth - document.documentElement.clientWidth));
    };
    calc();
    const t = setTimeout(calc, 600);
    window.addEventListener("resize", calc);
    window.addEventListener("load", calc);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", calc);
      window.removeEventListener("load", calc);
    };
  }, []);

  return (
    <section id="work" className="dark work" ref={ref} style={{ height: `calc(100svh + ${dist}px)` }}>
      <div className="work-pin">
        <div className="container work-head">
          <div>
            <p className="kicker light">Selected work</p>
            <Words text="Products we have built for" accent="real businesses." />
          </div>
          <p className="lead">Explore the applications we've built to help
            businesses manage their work, serve customers, automate
            processes and grow with technology.</p>
        </div>
        <motion.div className="work-track" ref={trackRef} style={{ x }}>
          {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
        </motion.div>
        <div className="container work-progress">
          <div className="wp-line"><motion.i style={{ scaleX: barScale }} /></div>
          <span>{projects.length} projects</span>
          <motion.span className="wp-hint" aria-hidden="true" animate={{ x: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}><ArrowRight size={16} /></motion.span>
        </div>
      </div>
    </section>
  );
}
