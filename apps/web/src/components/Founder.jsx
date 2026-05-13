import { motion } from "motion/react";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "./Animation";
import founderImage from "../../../mobile/assets/images/image.png";

const highlights = [
  "29+ years in project, engineering, and operational leadership",
  "600+ km of pipeline infrastructure experience",
  "3,500+ MW power generation asset exposure",
  "COREN-registered chartered engineer",
];

export default function Founder() {
  return (
    <section id="founder" className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 xl:gap-20 items-stretch">
          <FadeIn direction="right" className="flex flex-col justify-center">
            <span className="text-[#b4975a] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
              Founder & Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#022c22] leading-tight mb-8">
              Founded by Engr. Augustine Owo' Ukpong in 2018 after 29 years in
              complex energy project leadership.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
              Engr. Augustine Owo' Ukpong is a distinguished energy executive
              and chartered engineer whose career spans complex EPC and EPCIC
              projects across oil and gas, power, pipelines, and infrastructure
              sectors in the Middle East and Africa.
            </p>
            <p className="text-gray-600 leading-relaxed font-light mb-10">
              LAVIDUR Ventures Limited is being reinforced and formalised as an
              infrastructure development and management company serving the
              global energy, oil, and gas corridor, with emphasis on project
              development, funding arrangement, advisory, and future PMC
              transition opportunities.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="border-l-2 border-[#b4975a] bg-slate-50 px-5 py-4 text-sm font-semibold text-[#022c22]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <details className="group sm:min-w-[180px]">
                <summary className="inline-flex cursor-pointer list-none items-center justify-center gap-2 bg-[#022c22] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white rounded-sm hover:bg-[#064e3b] transition-colors [&::-webkit-details-marker]:hidden">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition-transform group-open:rotate-90"
                  />
                </summary>
                <div className="mt-5 max-w-2xl bg-slate-50 border border-gray-100 p-5 text-sm text-gray-600 leading-relaxed font-light">
                  He has delivered and led complex project portfolios for
                  global operators and service companies including NNPC, Shell,
                  NLNG, ExxonMobil, TotalEnergies, GE, Solar Turbines, Nestoil,
                  Desicon, and Oilserv. His prior leadership roles include
                  General Manager, Projects at Oilserv; Head of Construction at
                  Desicon; Project Portfolio Manager at Nestoil; Chief Technical
                  Officer at Eurafric Energy; and Acting Senior Service Manager
                  SSA at General Electric International. He is also a Fellow of
                  NSE, NSChE, NIMechE, IMC, and AIMFIN, and mentors emerging
                  engineers through the Engr. Augustine Ukpong Bright Future
                  Scholarship Programme.
                </div>
              </details>
              <a
                href="#"
                aria-label="LinkedIn profile"
                className="inline-flex items-center justify-center gap-2 border border-[#b4975a] px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#b4975a] rounded-sm hover:bg-[#b4975a] hover:text-white transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="flex flex-col gap-6">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative min-h-[300px] bg-[#022c22] rounded-sm overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#022c22]/80 via-transparent to-transparent" />
              <div className="absolute left-6 right-6 bottom-6">
                <div className="text-white text-2xl font-bold leading-tight max-w-sm">
                  Infrastructure development with operator-level execution
                  discipline.
                </div>
                <div className="mt-2 text-[#b4975a] text-xs font-bold uppercase tracking-[0.2em]">
                  Project placeholder image
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-[#022c22] border border-[#022c22] rounded-sm overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={founderImage}
                    alt="Engr. Augustine Owo' Ukpong"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="text-white text-lg font-bold leading-tight">
                    Engr. Augustine Owo' Ukpong
                  </div>
                  <div className="mt-2 text-[#b4975a] text-[10px] font-bold uppercase tracking-[0.18em]">
                    Founder & Executive Director
                  </div>
                </div>
              </motion.div>

            <form
              action="mailto:info@lavidur.com"
              method="post"
              encType="text/plain"
              className="bg-slate-50 border border-gray-100 p-6 flex flex-col justify-center"
            >
              <div className="text-[#022c22] text-xl font-bold mb-2">
                Request Advisory
              </div>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
                Share a project note with LAVIDUR's leadership team.
              </p>
              <input
                name="name"
                placeholder="Name"
                className="mb-4 w-full border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#b4975a]"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="mb-4 w-full border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#b4975a]"
              />
              <input
                name="subject"
                placeholder="Inquiry about"
                className="mb-4 w-full border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#b4975a]"
              />
              <textarea
                name="message"
                placeholder="Let us know what you need"
                rows={5}
                className="mb-5 w-full resize-none border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#b4975a]"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#b4975a] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white rounded-sm hover:bg-[#c5a059] transition-colors"
              >
                Send Inquiry
                <Mail size={15} />
              </button>
            </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
