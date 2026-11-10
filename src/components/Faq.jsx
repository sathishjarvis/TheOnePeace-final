import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs, ease } from "../lib/content";
import Words from "./ui/Words";

export default function Faq() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="section faq">
      <div className="container two-col">
        <div>
          <p className="kicker">FAQ</p>
          <Words text="Questions before" accent="we start?" />
        </div>
        <div>
          {faqs.map(([q, a], i) => (
            <motion.div
              className={`faq-item ${open === i ? "open" : ""}`}
              key={q}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease }}
            >
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span>{q}</span>
                <motion.span className="plus" animate={{ rotate: open === i ? 180 : 0 }}>
                  <ChevronDown size={18} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    {a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
