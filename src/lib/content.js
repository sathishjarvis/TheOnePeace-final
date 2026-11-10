import {
  GraduationCap, UserCheck, Megaphone, Stethoscope, MonitorSmartphone, Workflow,
  LayoutDashboard, ShoppingCart, Users, Star, Zap, Shield, Globe,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaPython,
  FaJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import C1 from "../assets/c1.png";
import C2 from "../assets/c2.png";
import C3 from "../assets/c3.png";
import C4 from "../assets/c4.png";
import C5 from "../assets/c5.png";
import C6 from "../assets/c6.png";

export const ease = [0.22, 1, 0.36, 1];
export const NAV = ["services", "work", "about", "process", "contact"];
export const SECTION_IDS = ["home", ...NAV];
export const WHATSAPP = "https://wa.me/919940447308";
export const EMAIL = "sathish@theonepeace.in";

export const marqueeItems = [
  { name: "React", Icon: FaReact, color: "#61dafb" },
  { name: "Node.js", Icon: FaNodeJs, color: "#68a063" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { name: "AWS", Icon: FaAws, color: "#ff9900" },
  { name: "MySQL", Icon: SiMysql, color: "#4479a1" },
  { name: "Python", Icon: FaPython, color: "#3776ab" },
  { name: "JavaScript", Icon: FaJs, color: "#f7df1e" },
];

export const services = [
  {
    icon: LayoutDashboard,
    title: "Business Software",
    img: C1,
    text: "We build smart business software to manage your daily operations, customers, employees, sales and business processes in one place.",
    tags: ["ERP", "CRM", "LMS"],
    c1: "#6C5CFF",
    c2: "#3B82F6",
    link: "https://bos.theonepeace.in",
  },
  {
    icon: Workflow,
    title: "Automation & AI Solutions",
    img: C2,
    text: "We automate repetitive tasks and build AI-powered solutions that save time, reduce manual work and make your business more efficient.",
    tags: ["AI Agents", "Automation", "Workflows"],
    c1: "#FF7A59",
    c2: "#F43F5E",
    link: "https://demo.theonepeace.in/ai",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Solutions",
    img: C3,
    text: "We help businesses reach more customers through email campaigns, WhatsApp marketing, lead management and marketing automation.",
    tags: ["Email Marketing", "WhatsApp", "Campaigns"],
    c1: "#0EA5E9",
    c2: "#19D3E6",
    link: "https://demo.theonepeace.in/marketing",
  },
  {
    icon: ShoppingCart,
    title: "Websites & E-Commerce",
    img: C4,
    text: "We design and develop modern websites and online stores that showcase your brand, attract customers and help you sell online.",
    tags: ["Websites", "Online Stores", "Payments"],
    c1: "#A855F7",
    c2: "#EC4899",
    link: "https://demo.theonepeace.in/commerce",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile & Desktop Applications",
    img: C5,
    text: "We create powerful mobile and desktop applications that make your services accessible across Android, iOS, Windows and macOS.",
    tags: ["Android", "iOS", "Desktop Apps"],
    c1: "#10B981",
    c2: "#14B8A6",
    link: "https://demo.theonepeace.in/apps",
  },
  {
    icon: MonitorSmartphone,
    title: "Cloud & DevOps Solutions",
    img: C6,
    text: "We deploy, host and maintain applications on the cloud, ensuring better performance, security, scalability and reliability.",
    tags: ["Cloud Hosting", "Deployment", "Maintenance"],
    c1: "#D946EF",
    c2: "#8B5CF6",
    link: "https://demo.theonepeace.in/apps",
  },
];


export const projects = [
  {
    id: 1,
    group: "Business Management",
    icon: LayoutDashboard,
    type: "Business Management Software",
    title: "Business OS – Billing & ERP",
    text: "A complete business management platform that brings billing, POS sales, invoicing, expenses, inventory and customer management into one place. Helps business owners manage daily operations, track sales and understand business performance without switching between multiple tools.",
    tags: ["POS Billing", "Inventory", "Invoicing", "Customers", "Analytics"],
    c1: "#6C5CFF",
    c2: "#22D3EE",
    link: "https://bos.theonepeace.in",
  },

  {
    id: 2,
    group: "Business Management",
    icon: Users,
    type: "Customer Management Software",
    title: "Customer Relationship Management",
    text: "A smart CRM platform that helps businesses manage customer enquiries, track potential customers and organize sales activities. Follow every lead from the first enquiry to the final sale with lead pipelines, follow-up reminders, team assignments and sales performance reports.",
    tags: ["Lead & Team Management", "Sales Pipeline", "Follow-ups", "Reports"],
    c1: "#3B82F6",
    c2: "#8B5CF6",
    link: "https://crm.theonepeace.in",
  },

  {
    id: 3,
    group: "Business Management",
    icon: UserCheck,
    type: "Human Resource Management",
    title: "HRMS – Employee Management",
    text: "A centralized employee management system that simplifies everyday HR operations. Manage employee records, attendance, leave requests, payroll and onboarding while helping HR teams reduce paperwork, avoid manual tracking and manage their workforce efficiently.",
    tags: ["Attendance", "Leave Management", "Payroll", "Onboarding"],
    c1: "#10B981",
    c2: "#06B6D4",
    link: "https://hrms.theonepeace.in",
  },

  // 2. EDUCATION & LEARNING
  {
    id: 4,
    group: "Education & Learning",
    icon: GraduationCap,
    type: "Learning Management System",
    title: "Online Learning Platform – LMS",
    text: "A complete online learning platform for educational institutions, training centers and online educators. Create courses, organize learning materials, conduct live classes, manage student progress, evaluate assessments and issue certificates through dedicated dashboards for administrators, trainers and students.",
    tags: ["Live Classes", "Assessments", "Student Management", "Certificates"],
    c1: "#F59E0B",
    c2: "#EF4444",
    link: "https://learn.theonepeace.in",
  },

  // 3. SALES & MARKETING
  {
    id: 5,
    group: "Sales & Marketing",
    icon: Megaphone,
    type: "Digital Marketing & Campaign Management",
    title: "Campaign Marketing Suite",
    text: "A marketing platform that helps businesses connect with customers and manage campaigns from one workspace. Create and schedule email, WhatsApp and SMS campaigns, organize customer audiences, monitor delivery and engagement, and understand campaign performance through reports and analytics.",
    tags: ["Email & WhatsApp Marketing", "SMS", "Scheduling", "Analytics"],
    c1: "#EC4899",
    c2: "#F43F5E",
    link: "https://marketing.theonepeace.in",
  },

  // 4. HEALTHCARE & AUTOMATION
  {
    id: 6,
    group: "Healthcare & Automation",
    icon: Stethoscope,
    type: "Healthcare Booking Automation",
    title: "Doctor Appointment Booking System",
    text: "An automated appointment booking solution designed for clinics and healthcare providers. Patients can request, book and reschedule appointments, while automated reminders help reduce missed visits. Clinics can manage their daily schedules and appointment information with less manual coordination.",
    tags: ["Appointment Booking", "n8n Automation", "Reminders", "Workflows"],
    c1: "#FF7A59",
    c2: "#FBBF24",
    link: "https://doctor.theonepeace.in",
  },

  // 5. MOBILE & DESKTOP APPLICATIONS
  {
    id: 7,
    group: "Mobile & Desktop Applications",
    icon: MonitorSmartphone,
    type: "Cross-Platform Application Development",
    title: "Mobile & Desktop Applications",
    text: "Custom applications designed around the way your business and customers work. We develop applications for Android, iOS, Windows and macOS, helping businesses extend their services beyond the browser with convenient, user-friendly and reliable digital experiences.",
    tags: ["Android Apps", "iOS Apps", "Desktop Apps", "Cross-Platform"],
    c1: "#14B8A6",
    c2: "#84CC16",
    link: "https://apps.theonepeace.in",
  },
];


export const stats = [
  { num: 40, suffix: "+", label: "Projects delivered" },
  { num: 25, suffix: "+", label: "Happy clients" },
  { num: 100, suffix: "%", label: "Client satisfaction" },
  { num: 4, suffix: "+", label: "Years of experience" },
];

export const steps = [
  { title: "Discover", text: "We map your goals, users and workflows before a single screen is drawn.", out: ["Requirements", "Roadmap"] },
  { title: "Design", text: "Clear, intuitive interfaces you can click through and approve before we build.", out: ["Wireframes", "Prototype"] },
  { title: "Build", text: "Clean, scalable, production-ready code with a working demo every week.", out: ["Weekly demos", "Testing"] },
  { title: "Launch and grow", text: "We go live together, then keep improving based on how people really use it.", out: ["Deployment", "Support"] },
];

export const faqs = [
  ["What type of projects do you work on?", "We work with startups, growing companies and established businesses on web apps, mobile and desktop apps, business software such as LMS, CRM and HRMS, marketing tools and n8n automations."],
  ["How do you approach project discovery?", "We start by understanding your business, users and constraints. This keeps us building what you need instead of a generic template."],
  ["Can you work with existing codebases?", "Yes. We audit existing systems, modernise outdated parts and add new features without disrupting your day-to-day operations."],
  ["What is the typical project timeline?", "It depends on scope. A focused MVP often takes 6 to 12 weeks, while larger platforms take longer. You get clear milestones after discovery."],
  ["Do you provide support after launch?", "Yes. We offer maintenance, monitoring and new features after launch, and many clients keep us on a monthly retainer."],
  ["How do we get started?", "Send us a short project brief or message us on WhatsApp. We will set up a free call, talk through your goals and follow up with a proposal."],
];

export const trust = [
  { icon: Star, label: "5.0 client rating" },
  { icon: Zap, label: "On-time delivery" },
  { icon: Shield, label: "Secure by default" },
  { icon: Globe, label: "50+ clients worldwide" },
];

export const heroChips = [
  { icon: GraduationCap, label: "Learning management", top: "12%", left: "34%", d: -150 },
  { icon: Users, label: "CRM", top: "26%", left: "72%", d: -70 },
  { icon: UserCheck, label: "HRMS", top: "42%", left: "42%", d: -230 },
  { icon: Megaphone, label: "Campaign tools", top: "56%", left: "66%", d: -110 },
  { icon: Stethoscope, label: "Doctor booking", top: "72%", left: "34%", d: -190 },
  { icon: MonitorSmartphone, label: "Desktop and mobile", top: "84%", left: "62%", d: -60 },
];
