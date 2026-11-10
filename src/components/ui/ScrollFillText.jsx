import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function FillWord({ children, range, progress }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return <motion.span style={{ opacity }} className="fw">{children}</motion.span>;
}

/* Paragraph whose words light up as you scroll */
export default function ScrollFillText({ text, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"], layoutEffect: false });
  const words = text.split(" ");
  return (
    <p ref={ref} className={`fill-text ${className}`}>
      {words.map((w, i) => (
        <FillWord key={i} range={[i / words.length, (i + 1) / words.length]} progress={scrollYProgress}>
          {w}
        </FillWord>
      ))}
    </p>
  );
}
