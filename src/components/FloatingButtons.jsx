import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronUp } from "lucide-react";
import WhatsAppChat from "./WhatsAppChat";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setShowTop(v > 900));

  return (
    <>
      <AnimatePresence>
        {showTop && (
          <motion.button
            className="to-top"
            initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <svg className="tt-ring" viewBox="0 0 52 52" aria-hidden="true">
              <circle cx="26" cy="26" r="24" className="tt-track" />
              <motion.circle cx="26" cy="26" r="24" className="tt-fill" style={{ pathLength: scrollYProgress }} />
            </svg>
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
      <WhatsAppChat />
    </>
  );
}
