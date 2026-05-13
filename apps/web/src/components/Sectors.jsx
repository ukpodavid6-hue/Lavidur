import { motion } from "motion/react";
import { FadeIn, StaggerContainer } from "./Animation";

const sectors = [
  {
    title: "Oil & Gas",
    image: "https://source.unsplash.com/gZbjx2K7s9I/2000x1400",
    description:
      "Upstream and midstream infrastructure development and optimization.",
  },
  {
    title: "Renewable Energy",
    image: "https://source.unsplash.com/GEisAZ8wVLs/2000x1400",
    description:
      "Solar and sustainable energy solutions for industrial applications.",
  },
  {
    title: "Power Generation",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000&auto=format&fit=crop",
    description:
      "Reliable thermal and captive power systems for critical infrastructure.",
  },
  {
    title: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    description: "Large-scale EPC projects for regional industrial clusters.",
  },
];

export default function Sectors() {
  return (
    <section id="sectors" className="py-24 bg-[#022c22]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <FadeIn direction="right" className="max-w-2xl">
            <span className="text-[#b4975a] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
              Our Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Sectors Driving Global Growth
            </h2>
          </FadeIn>
          <FadeIn direction="left">
            <p className="text-white/60 font-light max-w-sm">
              We focus on the most critical sectors for Africa's industrial and
              economic transformation.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                show: { opacity: 1, scale: 1 },
              }}
              whileHover="hover"
              className="relative overflow-hidden group rounded-sm h-full cursor-pointer"
            >
              {/* Background Image */}
              <motion.div
                variants={{
                  hover: { scale: 1.1 },
                }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s]"
                style={{ backgroundImage: `url(${sector.image})` }}
              />

              {/* Overlay */}
              <motion.div
                variants={{
                  hover: { backgroundColor: "rgba(2, 44, 34, 0.85)" },
                }}
                className="absolute inset-0 bg-[#022c22]/40 transition-colors duration-500"
              />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  variants={{
                    hover: { y: -10 },
                  }}
                  className="transition-transform duration-500"
                >
                  <div className="w-12 h-[2px] bg-[#b4975a] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">
                    {sector.title}
                  </h3>

                  <motion.p
                    variants={{
                      hover: { opacity: 1, height: "auto" },
                    }}
                    initial={{ opacity: 0, height: 0 }}
                    className="text-white/70 text-sm font-light leading-relaxed mb-6 overflow-hidden"
                  >
                    {sector.description}
                  </motion.p>

                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#b4975a] tracking-widest uppercase">
                    View Portfolio
                    <motion.span
                      variants={{
                        hover: { x: 5 },
                      }}
                    >
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
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
