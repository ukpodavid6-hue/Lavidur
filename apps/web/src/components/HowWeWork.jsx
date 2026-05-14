import { motion } from "motion/react";
import { FadeIn, StaggerContainer } from "./Animation";

const steps = [
  {
    id: "01",
    title: "Identify",
    description:
      "Detecting high-potential infrastructure and energy opportunities.",
  },
  {
    id: "02",
    title: "Structure",
    description:
      "Defining project frameworks, funding models, and risk mitigations.",
  },
  {
    id: "03",
    title: "Engineer",
    description:
      "Executing detailed technical design and procurement strategies.",
  },
  {
    id: "04",
    title: "Deliver",
    description:
      "Ensuring safe, on-time, and within-budget project completion.",
  },
  {
    id: "05",
    title: "Manage",
    description:
      "Providing ongoing operational support and maintenance advisory.",
  },
];

export default function HowWeWork() {
  return (
    <section id="approach" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <FadeIn direction="up">
            <span className="text-[#b4975a] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#022c22] mb-6">
              Execution Excellence
            </h2>
            <p className="text-gray-500 font-light">
              Our systematic approach ensures that every project meets
              international standards and local requirements.
            </p>
          </FadeIn>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            className="hidden lg:block absolute top-[60px] left-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#b4975a] to-transparent z-0"
          />

          {/* Mobile Connecting Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "90%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            className="lg:hidden absolute top-0 left-[35px] w-[1px] bg-gradient-to-b from-transparent via-[#b4975a] to-transparent z-0"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <FadeIn
                key={step.id}
                direction={index % 2 === 0 ? "up" : "down"}
                delay={0.2 + index * 0.1}
                className="flex lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 lg:gap-8"
              >
                {/* Step Indicator */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#022c22",
                    color: "#fff",
                  }}
                  className="w-[70px] h-[70px] min-w-[70px] rounded-full border-2 border-[#b4975a] flex items-center justify-center bg-white text-[#b4975a] font-bold text-xl transition-colors duration-300 shadow-lg"
                >
                  {step.id}
                </motion.div>

                <div>
                  <h3 className="text-xl font-bold text-[#022c22] mb-4 uppercase tracking-widest">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
