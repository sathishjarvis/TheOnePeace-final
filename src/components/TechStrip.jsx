
import Marquee from "./ui/Marquee";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaAws,
} from "react-icons/fa";

import {
  SiMongodb,
  SiN8N,
  SiWhatsapp,
  SiMysql,
} from "react-icons/si";

import { TbBrain } from "react-icons/tb";

const techs = [
  { name: "React", Icon: FaReact, color: "#61dafb" },
  { name: "Node.js", Icon: FaNodeJs, color: "#68a063" },
  { name: "Python", Icon: FaPython, color: "#3776ab" },
  { name: "JavaScript", Icon: FaJs, color: "#f7df1e" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { name: "AWS", Icon: FaAws, color: "#ff9900" },
  { name: "MySQL", Icon: SiMysql, color: "#2496ed" },
  { name: "n8n", Icon: SiN8N, color: "#ea4b71" },
  { name: "WhatsApp API", Icon: SiWhatsapp, color: "#25D366" },
  { name: "AI Agents", Icon: TbBrain, color: "#a855f7" },
];

export default function TechStrip() {
  return (
    <section className="tech" aria-label="Technologies we work with">
      <p className="tech-label">Technologies we work with</p>

      <ul className="sr-only">
        {techs.map((t) => (
          <li key={t.name}>{t.name}</li>
        ))}
      </ul>

      <Marquee items={techs} reverse variant="light" />
    </section>
  );
}
