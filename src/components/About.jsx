import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ease } from "../lib/content";
import founder from "../assets/founder.png";
import Words from "./ui/Words";
import Reveal from "./ui/Reveal";
import '../styles/about.css';

const values = ["Full-stack expertise", "Online meeting platforms", "Product strategy"];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"], layoutEffect: false });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section id="about" className="section about">
      <div className="container two-col">
        <div>
          <p className="kicker">About Us</p>
          <Words text="Small enough to care." accent="Strong enough to deliver." />
          <Reveal delay={0.1}>
            <p className="lead about-lead">
              We are a software and automation company focused on building practical, reliable and scalable solutions for businesses of all sizes.
            </p>
          </Reveal>
          <Reveal delay={0.15} from="left">
            <div className="founder-info">
              <p className="founder-label">Founder</p>
              <h3>Sathish</h3>
              <p className="founder-role">Founder and Head of Technology</p>
              <p className="founder-bio">
                Software Engineer and product strategist who builds scalable digital products. Leads The One Peace Technology with a focus on thoughtful engineering and real business impact.
              </p>
            </div>
          </Reveal>
          <div className="founder-values">
            {values.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                <b>{i + 1}</b><span>{t}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* motion.div (the original file had a plain div here, so the reveal never ran) */}

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="founder-card"
        >
          <div className="founder-visual">

            {/* Gradient Background */}
            <div className="founder-gradient" />

            {/* Glow Effects */}
            <div className="founder-glow founder-glow-top" />
            <div className="founder-glow founder-glow-bottom" />

            {/* Dotted Pattern */}
            <div className="founder-dots" />

            {/* Founder Image */}
            <motion.img
              src={founder}
              alt="Founder of The One Peace Technology"
              className="founder-image"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
            />

            {/* Floating Badge */}
            <motion.div
              className="founder-badge"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="founder-badge-icon">
                <i />
                <i />
                <i />
                <i />
              </span>

              <span className="founder-badge-text">
                <b>Sathish - Founder & CEO</b>
                <small>Turning Ideas into Real Software</small>
              </span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
