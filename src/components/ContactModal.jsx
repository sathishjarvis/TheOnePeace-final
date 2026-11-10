import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send, XCircle } from "lucide-react";
import { EMAIL } from "../lib/content";

const emptyForm = { name: "", email: "", phone: "", company: "", projectType: "", budget: "", message: "" };
const projectTypes = [
  "Learning management system", "CRM", "HRMS", "Marketing or campaign tool", "n8n automation",
  "Web application", "Mobile app", "Desktop app", "E-commerce", "Other",
];
const budgets = ["Under $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000+"];

export default function ContactModal({ onClose }) {
  const [formData, setFormData] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // null | "success" | "error"

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  useEffect(() => {
    if (status !== "success") return;
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [status, onClose]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    const accessKey = import.meta.env.VITE_WEB3FORMS;
    if (!accessKey) {
      console.error("Add VITE_WEB3FORMS to your .env file.");
      setStatus("error");
      setSubmitting(false);
      return;
    }
    const body = new FormData();
    body.append("access_key", accessKey);
    Object.entries(formData).forEach(([k, v]) => body.append(k, v));
    body.append("subject", `New project inquiry from ${formData.name}`);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body });
      const data = await res.json();
      if (data.success) { setStatus("success"); setFormData(emptyForm); } else setStatus("error");
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 40 }}
        transition={{ type: "spring", damping: 26, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close form"><XCircle size={24} /></button>
        <div className="modal-header">
          <h2 id="modal-title">Start your project</h2>
          <p>Tell us what you need and we will reply within 24 hours.</p>
        </div>

        {status === "success" ? (
          <motion.div className="state-box" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <div className="success-icon"><CheckCircle2 size={64} /></div>
            <h3>Thank you</h3>
            <p>We have received your project details and will reply shortly.</p>
          </motion.div>
        ) : status === "error" ? (
          <motion.div className="state-box" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <div className="error-icon">!</div>
            <h3>Your message was not sent</h3>
            <p>Please try again, or email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
            <button className="retry-btn" onClick={() => setStatus(null)}>Try again</button>
          </motion.div>
        ) : (
          <form onSubmit={onSubmit} className="modal-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={onChange} required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={onChange} required placeholder="john@example.com" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={onChange} placeholder="+91 98765 43210" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company name</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={onChange} placeholder="Your company" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="projectType">Project type *</label>
                <select id="projectType" name="projectType" value={formData.projectType} onChange={onChange} required>
                  <option value="">Select project type</option>
                  {projectTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Budget range</label>
                <select id="budget" name="budget" value={formData.budget} onChange={onChange}>
                  <option value="">Select budget range</option>
                  {budgets.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Project details *</label>
              <textarea id="message" name="message" value={formData.message} onChange={onChange} required rows="4"
                placeholder="Tell us about your project, goals and any specific requirements..." />
            </div>
            <motion.button type="submit" className="submit-btn" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={submitting}>
              {submitting ? (<><span className="spinner" />Sending...</>) : (<><Send size={18} />Send project details</>)}
            </motion.button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
