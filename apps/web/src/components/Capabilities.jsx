import { motion } from "motion/react";
import { FadeIn, StaggerContainer } from "./Animation";
import {
  Zap,
  Construction,
  ClipboardCheck,
  Lightbulb,
  TrendingUp,
  ShieldAlert,
} from "lucide-react";

const capabilities = [
  {
    title: "EPC Services",
    description:
      "Engineering, Procurement, and Construction for oil, gas, and renewable energy infrastructure.",
    icon: <Construction size={32} />,
  },
  {
    title: "Project Development",
    description:
      "End-to-end conceptualization, feasibility studies, and project structuring.",
    icon: <Lightbulb size={32} />,
  },
  {
    title: "Technical Advisory",
    description:
      "Deep-dive technical consulting and regulatory alignment for energy stakeholders.",
    icon: <TrendingUp size={32} />,
  },
  {
    title: "Compliance Management",
    description:
      "Navigating NCDMB, NUPRC, and NMDPRA regulations with local content expertise.",
    icon: <ClipboardCheck size={32} />,
  },
  {
    title: "Energy Infrastructure",
    description:
      "Developing resilient pipelines, storage facilities, and power distribution systems.",
    icon: <Zap size={32} />,
  },
  {
    title: "HSE Frameworks",
    description:
      "Implementing world-class Health, Safety, and Environment protocols.",
    icon: <ShieldAlert size={32} />,
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn direction="up">
            <span className="text-[#b4975a] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#022c22] mb-6">
              World-Class Capabilities
            </h2>
            <p className="text-gray-500 font-light text-lg">
              We leverage local knowledge and international standards to deliver
              exceptional value across the energy value chain.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover="hover"
              className="relative p-10 bg-slate-50 border border-gray-100 rounded-sm overflow-hidden transition-all duration-500 group cursor-default"
            >
              {/* Background Reveal */}
              <motion.div
                variants={{
                  hover: { opacity: 1, scale: 1 },
                }}
                initial={{ opacity: 0, scale: 1.1 }}
                className="absolute inset-0 bg-[#022c22] z-0"
              />

              {/* Gold Line */}
              <motion.div
                variants={{
                  hover: { width: "40px" },
                }}
                className="absolute top-10 right-10 w-0 h-[2px] bg-[#b4975a] z-10 transition-all duration-300"
              />

              <div className="relative z-10">
                <motion.div
                  variants={{
                    hover: { color: "#b4975a", scale: 1.1 },
                  }}
                  className="text-[#022c22] mb-8 transition-colors duration-300"
                >
                  {cap.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-[#022c22] mb-4 group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
                  {cap.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {cap.description}
                </p>

                <div className="mt-10 flex items-center gap-2 text-[10px] font-bold text-[#b4975a] tracking-widest uppercase">
                  Learn More
                  <motion.span
                    variants={{
                      hover: { x: 8 },
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
