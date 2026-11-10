import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { steps } from "../lib/content";
import Words from "./ui/Words";
import Reveal from "./ui/Reveal";

function TimelineStep({ s, i, n, progress }) {
  const a = i / n;
  const opacity = useTransform(progress, [a - 0.05, a + 0.1], [0.25, 1]);
  const scale = useTransform(progress, [a - 0.05, a + 0.1], [0.7, 1]);
  const x = useTransform(progress, [a - 0.05, a + 0.1], [30, 0]);
  return (
    <motion.div className="tl-step" style={{ opacity, x }}>
      <motion.span className="tl-dot" style={{ scale }}>{i + 1}</motion.span>
      <div>
        <h3>{s.title}</h3>
        <p>{s.text}</p>
        <div className="tags dark">{s.out.map((o) => <span key={o}>{o}</span>)}</div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.65"], layoutEffect: false });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <section id="process" className="section process">
      <div className="container process-grid">
        <div className="process-sticky">
          <p className="kicker">How we work</p>
          <Words text="A clear process." accent="Proven results." />
          <Reveal delay={0.1}>
            <p className="lead">You always know what is happening, what is next and when you will see it.</p>
          </Reveal>
        </div>
        <div className="timeline" ref={ref}>
          <div className="tl-track"><motion.div className="tl-fill" style={{ scaleY: line }} /></div>
          {steps.map((s, i) => (
            <TimelineStep key={s.title} s={s} i={i} n={steps.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
