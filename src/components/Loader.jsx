import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import mark from "../assets/favicon.png";

const MIN_TIME = 1000;

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [minDone, setMinDone] = useState(false);
  const [pageReady, setPageReady] = useState(document.readyState === "complete");

  useEffect(() => {
    const onLoad = () => setPageReady(true);
    if (document.readyState !== "complete") window.addEventListener("load", onLoad);
    const t = setTimeout(() => setMinDone(true), MIN_TIME);
    return () => { window.removeEventListener("load", onLoad); clearTimeout(t); };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        if (pageReady && minDone) return Math.min(100, p + 6);
        if (p >= 90) return p;
        return Math.min(90, p + Math.random() * 4 + 1);
      });
    }, 50);
    return () => clearInterval(id);
  }, [pageReady, minDone]);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(onDone, 100);
      return () => clearTimeout(t);
    }
  }, [progress, onDone]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div className="loader" exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}>
      <i className="blob b1" /><i className="blob b2" />
      <div className="ld-orbit">
        <i className="ld-ring a" /><i className="ld-ring b" /><i className="ld-ring c" />
          <img src={mark} alt=""/>
      </div>
      <p className="ld-name">THE ONE PEACE</p>
      <p className="ld-sub">Websites, Apps and Tools</p>
      <div className="ld-bar"><i style={{ width: `${progress}%` }} /></div>
      <div className="ld-meta"><span>Loading</span><b>{Math.floor(progress)}%</b></div>
    </motion.div>
  );
}
