import { motion } from "motion/react";
import { StaggerContainer, FadeIn } from "./Animation";
import { Hammer, Briefcase, BarChart3, Settings } from "lucide-react";

const pillars = [
  {
    title: "Develop",
    description:
      "Strategically conceptualizing and structuring energy and infrastructure projects from the ground up.",
    icon: <Settings className="text-[#b4975a]" size={32} />,
  },
  {
    title: "Engineer",
    description:
      "Providing world-class EPC services with precision, safety, and technical excellence.",
    icon: <Hammer className="text-[#b4975a]" size={32} />,
  },
  {
    title: "Manage",
    description:
      "Ensuring seamless execution and operational efficiency through rigorous project management.",
    icon: <Briefcase className="text-[#b4975a]" size={32} />,
  },
  {
    title: "Advise",
    description:
      "Strategic technical and regulatory advisory for navigating complex energy markets.",
    icon: <BarChart3 className="text-[#b4975a]" size={32} />,
  },
];

export default function FourPillars() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y divide-white/10 md:divide-y-0 border border-[#b4975a]/20 shadow-2xl">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              whileHover="hover"
              className="relative p-10 bg-[#022c22] overflow-hidden group cursor-default"
            >
              {/* Hover Background */}
              <motion.div
                variants={{
                  hover: { opacity: 0.12 },
                }}
                className="absolute inset-0 bg-[#b4975a] opacity-0 transition-opacity duration-300"
              />

              {/* Top Accent Line */}
              <motion.div
                variants={{
                  hover: { width: "100%" },
                }}
                className="absolute top-0 left-0 w-0 h-[3px] bg-[#b4975a] transition-all duration-500"
              />

              <motion.div
                variants={{
                  hover: { y: -5 },
                }}
                className="mb-6 transition-transform duration-300"
              >
                {pillar.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">
                {pillar.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                {pillar.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-[#b4975a] tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Explore More
                <svg
                  width="12"
                  height="12"
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
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
