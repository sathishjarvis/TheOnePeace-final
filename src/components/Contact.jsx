import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { EMAIL, WHATSAPP } from "../lib/content";
import Words from "./ui/Words";
import Reveal from "./ui/Reveal";
import MagneticButton from "./ui/MagneticButton";

export default function Contact({ onStart }) {
  return (
    <section id="contact" className="contact">
      <div className="contact-glow g1" /><div className="contact-glow g2" />
      <div className="container contact-inner">
        <p className="kicker light">Let us build together</p>
        <Words text="Ready to turn your idea into" accent="working software?" />
        <Reveal delay={0.1}>
          <p className="contact-copy">Tell us what you want to build. We will come back with a plan, a timeline and a clear next step.</p>
        </Reveal>
        <Reveal delay={0.2}>
          <MagneticButton className="contact-btn" onClick={onStart}>
            Start a conversation <ArrowUpRight size={18} />
          </MagneticButton>
        </Reveal>
        <Reveal delay={0.3} from="scale">
          <div className="contact-meta">
            <span><Mail size={16} /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></span>
            <span><Phone size={16} /> <a href="tel:+919940447308">+91 9940447308</a></span>
            <span><MessageCircle size={16} /> <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a></span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
