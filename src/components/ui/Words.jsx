import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ease } from "../../lib/content";

/* Headline: each word slides up out of a mask. `accent` is the gradient part. */
export default function Words({ as: Tag = "h2", text, accent = "", className = "", delay = 0, immediate = false, hold = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const state = !hold && (immediate || inView) ? "show" : "hidden";
  const parts = [
    ...text.split(" ").filter(Boolean).map((w) => ({ w, a: false })),
    ...accent.split(" ").filter(Boolean).map((w) => ({ w, a: true })),
  ];
  return (
    <Tag ref={ref} className={className}>
      {parts.map(({ w, a }, i) => (
        <span className="wmask" key={i}>
          <motion.span
            className={a ? "grad" : ""}
            initial="hidden"
            animate={state}
            variants={{
              hidden: { y: "115%", rotate: 4 },
              show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease, delay: delay + i * 0.045 } },
            }}
            style={{ display: "inline-block", transformOrigin: "0 100%" }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
