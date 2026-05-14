import { motion } from "motion/react";
import { HoverArrowButton, FadeIn } from "./Animation";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#022c22]">
      {/* Cinematic Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0.4 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#022c22]/80 via-transparent to-[#022c22]"></div>
        {/* Placeholder for Industrial/Oil & Gas Image */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2400&q=82')] bg-cover bg-center mix-blend-overlay"></div>
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <FadeIn direction="down" delay={0.2}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#b4975a]/30 bg-[#b4975a]/10 text-[#b4975a] text-xs font-bold tracking-[0.3em] uppercase mb-8">
            Pioneering Energy & Infrastructure
          </span>
        </FadeIn>

        <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1]">
          {[
            "Building",
            "resilient",
            "energy",
            "and",
            "infrastructure",
            "ventures.",
          ].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4 + i * 0.1,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="inline-block mr-[0.2em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <FadeIn delay={1.2} direction="up">
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            LAVIDUR Ventures Limited supports energy, infrastructure, and
            industrial clients with project development, EPC coordination,
            technical advisory, and commercial execution support across Nigeria
            and frontier markets.
          </p>
        </FadeIn>

        <FadeIn
          delay={1.5}
          direction="up"
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <HoverArrowButton href="#capabilities">
            EXPLORE CAPABILITIES
          </HoverArrowButton>
          <HoverArrowButton href="#projects" primary={false}>
            VIEW PROJECT FOCUS
          </HoverArrowButton>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/40 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#b4975a] to-transparent"></div>
      </motion.div>
    </section>
  );
}
