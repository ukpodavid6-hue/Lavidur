import { motion } from "motion/react";
import { Eye, Target, Compass } from "lucide-react";
import { FadeIn } from "./Animation";

const statements = [
  {
    title: "Vision",
    icon: <Eye size={28} />,
    text: "To become a trusted infrastructure development and management company serving the global energy, oil, and gas corridor.",
  },
  {
    title: "Mission",
    icon: <Target size={28} />,
    text: "To structure, advise, and manage high-impact energy and infrastructure opportunities with technical discipline, commercial clarity, and execution focus.",
  },
  {
    title: "Mandate",
    icon: <Compass size={28} />,
    text: "To help projects move from concept to bankable development, with pathways for funding arrangement, advisory, and future PMC transition.",
  },
];

export default function VisionMission() {
  return (
    <section id="vision-mission" className="bg-[#022c22] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
          <FadeIn direction="right">
            <span className="text-[#b4975a] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
              Vision & Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Built to turn strategic infrastructure ambition into executable
              project pathways.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            {statements.map((statement, index) => (
              <FadeIn key={statement.title} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="h-full border border-white/10 bg-white/[0.04] p-8"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center border border-[#b4975a] text-[#b4975a]">
                    {statement.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold uppercase tracking-wider text-white">
                    {statement.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-white/65">
                    {statement.text}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
