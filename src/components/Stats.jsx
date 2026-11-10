import { motion } from "framer-motion";
import { stats, ease } from "../lib/content";
import Counter from "./ui/Counter";

export default function Stats() {
  return (
    <section className="stats dark">
      <div className="container stats-grid">
        {stats.map(({ num, suffix, label }, i) => (
          <motion.div
            key={label}
            className="stat"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease }}
          >
            <div className="stat-num"><Counter to={num} suffix={suffix} /></div>
            <p>{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
