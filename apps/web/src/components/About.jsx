import { motion } from "motion/react";
import { FadeIn, StaggerContainer } from "./Animation";
import { ShieldCheck, Globe, MapPin, Building2, Landmark } from "lucide-react";

const identityItems = [
  { label: "RC Number", value: "RC-1234567", icon: <Landmark size={20} /> },
  {
    label: "Registered in Nigeria",
    value: "Corporate Affairs Commission",
    icon: <ShieldCheck size={20} />,
  },
  {
    label: "Focus",
    value: "Energy & Infrastructure",
    icon: <Building2 size={20} />,
  },
  {
    label: "HQ Presence",
    value: "Port Harcourt, Rivers State",
    icon: <MapPin size={20} />,
  },
  {
    label: "Perspective",
    value: "Global Industry Outlook",
    icon: <Globe size={20} />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left: Image with mask effect */}
        <FadeIn direction="left" className="relative">
          <motion.div
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="aspect-square bg-[#022c22] rounded-sm overflow-hidden shadow-2xl relative group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full bg-[url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#022c22]/60 to-transparent" />

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
              Our Identity
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#022c22] mb-8 leading-tight">
              Driving Strategic Energy Development in Africa
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
              LAVIDUR Ventures Limited stands at the intersection of technical
              excellence and strategic insight. We are a Nigerian-registered
              entity focused on bridging the infrastructure gap through
              innovative engineering and advisory.
            </p>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {identityItems.map((item, index) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-4 p-4 bg-white shadow-sm border border-gray-100 rounded-sm group hover:border-[#b4975a]/30 transition-colors"
              >
                <div className="w-10 h-10 bg-slate-50 flex items-center justify-center text-[#b4975a] group-hover:bg-[#b4975a] group-hover:text-white transition-colors">
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
