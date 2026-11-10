import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* Soft glow + ring that follows the mouse. Desktop with a real mouse only. */
export default function CursorGlow() {
  const [on, setOn] = useState(false);
  const [big, setBig] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 220, damping: 28, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setOn(true);
    const move = (e) => {
      x.set(e.clientX); y.set(e.clientY);
      setBig(Boolean(e.target.closest?.("a, button, [data-cursor]")));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!on) return null;
  return (
    <>
      <motion.div className="cursor-glow" style={{ x: sx, y: sy }} aria-hidden="true" />
      <motion.div className={`cursor-ring ${big ? "big" : ""}`} style={{ x: sx, y: sy }} aria-hidden="true" />
    </>
  );
}
