import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn, StaggerContainer } from "./Animation";
import { Filter } from "lucide-react";

const projectData = [
  {
    id: 1,
    title: "Regional Pipeline EPC",
    sector: "Oil & Gas",
    status: "In Progress",
    location: "Rivers State, NG",
  },
  {
    id: 2,
    title: "Solar Microgrid Grid",
    sector: "Renewables",
    status: "Completed",
    location: "Lagos, NG",
  },
  {
    id: 3,
    title: "Industrial Storage Facility",
    sector: "Infrastructure",
    status: "Planning",
    location: "Delta State, NG",
  },
  {
    id: 4,
    title: "Technical Feasibility Study",
    sector: "Advisory",
    status: "Completed",
    location: "Abuja, NG",
  },
  {
    id: 5,
    title: "Port Facility Rehabilitation",
    sector: "Infrastructure",
    status: "In Progress",
    location: "Port Harcourt, NG",
  },
  {
    id: 6,
    title: "Gas-to-Power Project",
    sector: "Oil & Gas",
    status: "Planning",
    location: "Bayelsa State, NG",
  },
];

const categories = [
  "All",
  "Oil & Gas",
  "Renewables",
  "Infrastructure",
  "Advisory",
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((p) => p.sector === filter);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-[#b4975a] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#022c22] mb-12">
              Strategic Project Focus
            </h2>
          </FadeIn>

          {/* Filters */}
          <FadeIn
            direction="up"
            delay={0.2}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                  filter === cat
                    ? "bg-[#022c22] text-white border-[#022c22]"
                    : "bg-white text-gray-400 border-gray-200 hover:border-[#b4975a] hover:text-[#b4975a]"
                }`}
              >
                {cat}
              </button>
            ))}
          </FadeIn>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative bg-slate-50 border border-gray-100 p-8 rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-[#b4975a]/10 text-[#b4975a] text-[10px] font-bold tracking-widest uppercase rounded-full">
                    {project.sector}
                  </span>
                  <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#022c22] mb-4 group-hover:text-[#b4975a] transition-colors duration-300 leading-tight uppercase tracking-wider">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-400 text-xs mb-8">
                  <span className="w-4 h-[1px] bg-[#b4975a]" />
                  {project.location}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200/50">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#022c22] tracking-widest uppercase">
                    Project Details
                  </div>
                  <motion.div whileHover={{ x: 5 }} className="text-[#b4975a]">
                    <svg
                      width="20"
                      height="20"
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
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
