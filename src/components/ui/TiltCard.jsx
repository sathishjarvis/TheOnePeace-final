import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* 3D tilt that follows the mouse (ignored on touch screens) */
export default function TiltCard({ as = "div", children, className = "", style, max = 7 }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });
  const Tag = motion[as];
  const move = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = ref.current.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * max * 2);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * max * 2);
  };
  const leave = () => { rx.set(0); ry.set(0); };
  return (
    <Tag ref={ref} className={className} onPointerMove={move} onPointerLeave={leave}
      style={{ ...style, rotateX: srx, rotateY: sry, transformPerspective: 900 }}>
      {children}
    </Tag>
  );
}
