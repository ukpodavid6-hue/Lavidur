import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "./Animation";
import founderImage from "../../../mobile/assets/images/image.png";
import founderFieldImage from "../../../mobile/assets/images/founder-field.jpeg";

export default function Founder() {
  return (
    <section id="leadership" className="bg-slate-50 py-24 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1.05fr_0.72fr_0.85fr] gap-10 xl:gap-14 items-stretch">
          <FadeIn direction="right" className="flex min-h-[560px] flex-col">
            <h2 className="text-3xl md:text-4xl xl:text-[2.7rem] font-extrabold text-[#022c22] leading-tight mb-8">
              Founded by{" "}
              <span className="text-[#b4975a]">
                Engr. Augustine O. Ukpong.
              </span>{" "}
              In 2018 after 29 years in complex energy project leadership
            </h2>
            <p className="text-gray-600 leading-relaxed font-light max-w-xl">
              Engr. Augustine O. Ukpong is a distinguished energy executive
              and chartered engineer whose career spans complex EPC and EPCIC
              projects across the oil and gas, power, pipelines, and
              infrastructure sectors in the Middle East and Africa. Building on
              this depth of technical, commercial, and project leadership
              experience, LAVIDUR Ventures Limited is being reinforced and
              formalised as an infrastructure development and management
              company serving the global energy, oil, and gas corridor, with
              emphasis on project development, funding arrangement, advisory,
              and future PMC transition opportunities.
            </p>

            <div className="mt-auto grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end pt-14">
              <div className="flex items-center gap-5">
                <img
                  src={founderImage}
                  alt="Engr. Augustine O. Ukpong"
                  className="h-20 w-20 rounded-full object-cover ring-4 ring-white shadow-lg"
                />
                <div>
                  <div className="text-[#022c22] font-extrabold leading-tight">
                    Engr. Augustine O. Ukpong
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    Founder & Executive Director
                  </div>
                  <a
                    href="https://ng.linkedin.com/in/augustineowoukpong"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                    className="mt-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b4975a]"
                  >
                    <Linkedin size={14} />
                    LinkedIn
                  </a>
                </div>
              </div>

              <details className="group">
                <summary className="inline-flex cursor-pointer list-none items-center justify-center gap-2 bg-[#022c22] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white rounded-sm hover:bg-[#064e3b] transition-colors [&::-webkit-details-marker]:hidden">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition-transform group-open:rotate-90"
                  />
                </summary>
                <div className="mt-5 sm:absolute sm:left-12 sm:right-12 lg:left-auto lg:right-auto lg:max-w-xl bg-white border border-gray-100 p-5 text-sm text-gray-600 leading-relaxed font-light shadow-xl z-20">
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
            </div>
          </FadeIn>

          <FadeIn
            direction="up"
            className="relative min-h-[520px] overflow-hidden bg-[#022c22] shadow-2xl"
          >
              <img
                src={founderFieldImage}
                alt="Engr. Augustine O. Ukpong on a project site"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#022c22]/85 via-[#022c22]/15 to-transparent" />
              <div className="absolute left-8 right-8 bottom-8">
                <div className="text-white text-xl font-bold leading-tight">
                  Project development, engineering governance, and execution
                  strategy.
                </div>
                <div className="mt-2 text-[#b4975a] text-xs font-bold uppercase tracking-[0.2em]">
                  Energy & Infrastructure
                </div>
              </div>
          </FadeIn>

          <FadeIn direction="left" className="flex min-h-[560px] items-center">
            <form
              action="mailto:info@lavidur.com"
              method="post"
              encType="text/plain"
              className="w-full"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <input
                  name="name"
                  placeholder="Name*"
                  className="w-full border border-gray-200 bg-white px-5 py-4 text-sm italic outline-none focus:border-[#b4975a]"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email*"
                  className="w-full border border-gray-200 bg-white px-5 py-4 text-sm italic outline-none focus:border-[#b4975a]"
                />
              </div>
              <input
                name="subject"
                placeholder="Inquiry about"
                className="mb-5 w-full border border-gray-200 bg-white px-5 py-4 text-sm italic outline-none focus:border-[#b4975a]"
              />
              <textarea
                name="message"
                placeholder="Let us know what you need"
                rows={7}
                className="mb-6 w-full resize-none border border-gray-200 bg-white px-5 py-4 text-sm italic outline-none focus:border-[#b4975a]"
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#b4975a] px-9 py-4 text-xs font-bold uppercase tracking-widest text-white rounded-sm hover:bg-[#c5a059] transition-colors"
                >
                  Get a Quote
                  <Mail size={15} />
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
