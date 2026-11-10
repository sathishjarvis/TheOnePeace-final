import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "../lib/content";
import Words from "./ui/Words";
import Reveal from "./ui/Reveal";

/* Cards stack on top of each other while scrolling (desktop + mobile) */
function ServiceCard({ s, i, n, progress }) {
  const target = 1 - (n - 1 - i) * 0.045;
  const scale = useTransform(progress, [i / n, 1], [1, target]);
  const Icon = s.icon;
  return (
    <div className="stack-item" style={{ "--i": i, "--c1": s.c1, "--c2": s.c2 }}>
      <motion.article className="stack-card" style={{ scale }}>
        <div className="sc-copy">
          <span className="sc-count">{i + 1} / {n}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          {/* <div className="tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div> */}
          {s.link && (
            <a className="sc-link" href={s.link} target="_blank" rel="noopener noreferrer">
              Learn More <ArrowUpRight size={16} />
            </a>
          )}
        </div>
        <div className="sc-visual">
          <i className="sc-ring a" /><i className="sc-ring b" />
          <div className="sc-glyph"><img src={s.img} alt={s.title} /></div>
          {s.tags.map((t, k) => <span key={t} className={`sc-chip k${k}`}>{t}</span>)}
        </div>
      </motion.article>
    </div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"], layoutEffect: false });
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="kicker">Services</p>
            <Words text="Everything your business needs to run on" accent="good software." />
          </div>
          <Reveal delay={0.1}>
            <p className="lead">Whether you need a website, business software, mobile app or AI
              automation, we bring everything together to make your business
              smarter, simpler and ready for growth.</p>
          </Reveal>
        </div>
        <div className="stack" ref={ref}>
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} n={services.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
