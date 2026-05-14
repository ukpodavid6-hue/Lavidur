import { motion } from "motion/react";
import { FadeIn, StaggerContainer } from "./Animation";
import { ShieldCheck, MapPin, Building2, Handshake } from "lucide-react";

const identityItems = [
  {
    label: "Registered in Nigeria",
    value: "Corporate structure and operating presence",
    icon: <ShieldCheck size={20} />,
  },
  {
    label: "Port Harcourt operating focus",
    value: "Niger Delta energy and industrial corridor",
    icon: <MapPin size={20} />,
  },
  {
    label: "Energy and Infrastructure ventures",
    value: "Petroleum, power, and industrial mandates",
    icon: <Building2 size={20} />,
  },
  {
    label: "EPC, advisory, and project development support",
    value: "Structured execution and commercial guidance",
    icon: <Handshake size={20} />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#f6f3ec] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left: Image with mask effect */}
        <FadeIn direction="left" className="relative">
          <motion.div
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="aspect-square bg-[#022c22] rounded-[2px] overflow-hidden shadow-2xl relative group border border-[#b4975a]/30"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full bg-[url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#022c22]/75 via-[#022c22]/10 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-[#b4975a] font-bold text-4xl mb-2">15+</div>
              <div className="text-white text-xs font-bold tracking-widest uppercase">
                Years of Collective Experience
              </div>
            </div>
          </motion.div>

          {/* Decorative Gold Element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#b4975a]/30 -z-1" />
        </FadeIn>

        {/* Right: Content */}
        <div>
          <FadeIn direction="up">
            <span className="text-[#b4975a] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
              About LAVIDUR
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#022c22] mb-8 leading-tight">
              A disciplined platform for energy and infrastructure execution.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
              LAVIDUR Ventures Limited is positioned for work across petroleum,
              power, industrial infrastructure, and advisory mandates where
              technical judgment, commercial discipline, and local operating
              knowledge matter.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
              The company combines Nigerian market presence with a delivery
              model designed for joint ventures, operators, public-sector
              interfaces, and private sponsors seeking clear execution
              governance.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {identityItems.map((item, index) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                className="flex items-start gap-4 p-5 bg-[#fffdf8] shadow-sm border border-[#b4975a]/15 rounded-[2px] group hover:-translate-y-1 hover:border-[#b4975a]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 shrink-0 bg-[#f6f3ec] flex items-center justify-center text-[#b4975a] group-hover:bg-[#022c22] transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    {item.label}
                  </div>
                  <div className="text-[#022c22] font-semibold">
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
