
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

import { wrap } from "../../lib/scroll";

export default function Marquee({
  items = [],
  reverse = false,
  variant = "",
}) {
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  const smooth = useSpring(velocity, {
    damping: 50,
    stiffness: 400,
  });

  const factor = useTransform(smooth, [0, 1000], [0, 5], {
    clamp: false,
  });

  const dir = useRef(1);

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    let move = dir.current * -2.2 * (delta / 1000);

    const f = factor.get();

    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;

    move += dir.current * move * f;

    baseX.set(baseX.get() + (reverse ? -move : move));
  });

  const row = [...items, ...items];

  return (
    <div className={`marquee ${variant}`} aria-hidden="true">
      <motion.div className="marquee-track" style={{ x }}>
        {[0, 1].map((k) => (
          <div className="marquee-row" key={k}>
            {row.map((item, i) => {
              // Supports both string and object items
              const isObject = typeof item === "object" && item !== null;

              const Icon = isObject ? item.Icon : null;
              const name = isObject ? item.name : item;
              const color = isObject ? item.color : "inherit";

              return (
                <span
                  key={`${k}-${i}`}
                  className="marquee-item"
                >
                  {Icon && (
                    <Icon
                      size={42}
                      style={{ color, flexShrink: 0 }}
                    />
                  )}

                  {name}
                </span>
              );
            })}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
