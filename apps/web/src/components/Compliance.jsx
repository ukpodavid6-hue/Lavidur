import { motion } from "motion/react";
import { FadeIn, StaggerContainer } from "./Animation";
import {
  Shield,
  CheckCircle2,
  Award,
  FileCheck,
  Landmark,
  Users,
} from "lucide-react";

const badges = [
  {
    name: "HSE Framework",
    icon: <Shield size={24} />,
    status: "Framework Established",
  },
  {
    name: "Quality Management",
    icon: <Award size={24} />,
    status: "ISO Standards Alignment",
  },
  {
    name: "NCDMB Alignment",
    icon: <Landmark size={24} />,
    status: "Local Content Driven",
  },
  {
    name: "NUPRC Alignment",
    icon: <FileCheck size={24} />,
    status: "Regulatory Readiness",
  },
  {
    name: "NMDPRA Alignment",
    icon: <CheckCircle2 size={24} />,
    status: "Midstream Compliance",
  },
  {
    name: "ISO Documentation",
    icon: <FileCheck size={24} />,
    status: "Documentation in Progress",
  },
  {
    name: "Local Content",
    icon: <Users size={24} />,
    status: "Strategic Alignment",
  },
];

export default function Compliance() {
  return (
    <section id="compliance" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <FadeIn direction="right" className="max-w-2xl">
            <span className="text-[#b4975a] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
              Our Commitment
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#022c22] leading-tight">
              Compliance & Regulatory Standards
            </h2>
          </FadeIn>
          <FadeIn direction="left">
            <p className="text-gray-500 font-light max-w-sm">
              LAVIDUR maintains strict adherence to Nigerian regulatory bodies
              and international safety frameworks.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1 },
              }}
              whileHover={{
                y: -5,
                borderColor: "#b4975a",
                transition: { duration: 0.3 },
              }}
              className="bg-white p-8 border border-gray-100 rounded-sm shadow-sm transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-[#b4975a] mb-6 group-hover:bg-[#022c22] group-hover:text-white transition-colors duration-500">
                {badge.icon}
              </div>
              <h3 className="text-sm font-bold text-[#022c22] mb-2 uppercase tracking-widest">
                {badge.name}
              </h3>
              <p className="text-[10px] text-[#b4975a] font-medium uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                {badge.status}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn
          direction="up"
          className="mt-20 p-8 bg-[#022c22] rounded-sm text-center"
        >
          <p className="text-white/60 text-sm italic font-light">
            * We operate with a policy of transparency. Certifications listed
            are based on active framework alignment, internal documentation, and
            ongoing regulatory readiness.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
