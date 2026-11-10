import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "../assets/theonepeacefinallogo.png";
import { WHATSAPP } from "../lib/content";
import { go } from "../lib/scroll";
import {
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiHeart
} from "react-icons/fi";

export default function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"], layoutEffect: false });
  const bigY = useTransform(scrollYProgress, [0, 1], ["35%", "0%"]);
  const bigO = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const quickLinks = ["Home", "Services", "Products", "About Us"];
  const supportLinks = ["FAQ", "Privacy Policy", "Terms of Service"];

  return (
    <footer className="footer" ref={ref}>
      <div className="container footer-main">

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <img
              src={logo}
              alt="The One Peace Technology"
              loading="lazy"
            />
          </a>

          <p>
            Thoughtful software, practical automation and well-made
            apps for ambitious businesses.
          </p>

          <div className="footer-socials">
            {[
              { icon: FiInstagram, href: "https://www.instagram.com/the_one_peace_tech", label: "Instagram" },
              { icon: FiTwitter, href: "https://twitter.com/the_one_peace_tech", label: "Twitter" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/sathish-surya", label: "LinkedIn" },
              { icon: FiGithub, href: "https://github.com/sathishjarvis", label: "GitHub" }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                title={social.label}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="footer-social-link"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>
        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <motion.a
                  href="#"
                  whileHover={{ x: 4, color: "#ffffff" }}
                  className="text-sm inline-block transition-colors"
                >
                  {link}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h4 className="text-white font-semibold mb-5">Support</h4>
          <ul className="space-y-3">
            {supportLinks.map((link) => (
              <li key={link}>
                <motion.a
                  href="#"
                  whileHover={{ x: 4, color: "#ffffff" }}
                  className="text-sm inline-block transition-colors"
                >
                  {link}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <motion.div className="footer-big" style={{ y: bigY, opacity: bigO }} aria-hidden="true">
        The One Peace
      </motion.div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} The One Peace Technology. All rights reserved.</span>
        <span>Built with intention and expertise.</span>
      </div>
    </footer>
  );
}
