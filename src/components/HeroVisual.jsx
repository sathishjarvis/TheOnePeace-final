import { motion, useTransform } from "framer-motion";
import { heroChips, ease } from "../lib/content";

function HeroChip({ chip, progress, i, ready }) {
  const y = useTransform(progress, [0, 1], [0, chip.d]);
  const Icon = chip.icon;
  return (
    <motion.div
      className="hero-chip"
      style={{ top: chip.top, left: chip.left, y }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
      transition={{ delay: 0.5 + i * 0.12, duration: 0.7, ease }}
    >
      <div className="float" style={{ animationDelay: `${i * -1.1}s` }}>
        <span className="chip-icon"><Icon size={18} /></span>
        {chip.label}
      </div>
    </motion.div>
  );
}

export default function HeroVisual({ progress, ready, laptopImage }) {
  const rot = useTransform(progress, [0, 1], [0, 90]);
  return (
    <div className="hero-visual" aria-hidden="true">
      <motion.div className="hv-rings" style={{ rotate: rot }}>
        <i className="ring r1" /><i className="ring r2" /><i className="ring r3" />
        <motion.img
        src={laptopImage}
        alt=""
        className="hero-center-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          ready
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.8, ease }}
      />
      </motion.div>
      {heroChips.map((c, i) => <HeroChip key={c.label} chip={c} progress={progress} i={i} ready={ready} />)}
    </div>
  );
}
