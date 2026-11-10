import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ease } from "../../lib/content";

export default function RotatingText({ words, interval = 2200 }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);
  return (
    <span className="rotor" aria-live="off">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i]}
          className="grad"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
