import { motion } from "framer-motion";
import { ease } from "../../lib/content";

/* from: "up" | "down" | "left" | "right" | "scale" */
export default function Reveal({ children, delay = 0, y = 40, className = "", amount = 0.2, from = "up" }) {
  const start = { up: { y }, down: { y: -y }, left: { x: -y }, right: { x: y }, scale: { scale: 0.9 } }[from];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...start }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
