import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import lavidurLogo from "../../../mobile/assets/images/Lavidur_Logo-removebg-preview.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#011a14] text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-8 group">
              <span className="h-16 w-28 overflow-hidden shrink-0">
                <img
                  src={lavidurLogo}
                  alt=""
                  aria-hidden="true"
                  className="w-28 max-w-none object-contain brightness-0 invert transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </span>
              <div className="flex flex-col justify-center whitespace-nowrap">
                <span className="text-white text-2xl font-bold leading-none tracking-wide">
                  LAVIDUR
                </span>
                <span className="mt-1 text-white/80 text-[10px] font-bold leading-none tracking-[0.18em] uppercase">
                  Venture Limited
                </span>
              </div>
            </a>
            <p className="text-white/50 font-light text-sm leading-relaxed mb-8">
              Pioneering Africa's industrial future through strategic
              engineering, technical excellence, and sustainable energy
              development.
            </p>
            <div className="flex gap-4">
              {[Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, color: "#b4975a" }}
                  href="#"
                  className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full text-white/70 transition-all border border-white/10"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-[#b4975a] mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                "Home",
                "About Us",
                "Capabilities",
                "Projects",
                "Sectors",
                "Compliance",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 hover:text-white transition-colors text-sm font-light flex items-center gap-2 group"
                  >
                    <motion.span
                      variants={{ hover: { x: 5 } }}
                      className="hidden group-hover:block transition-all"
                    >
                      <ArrowUpRight size={14} />
                    </motion.span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-[#b4975a] mb-8">
              Capabilities
            </h4>
            <ul className="space-y-4">
              {[
                "EPC Services",
                "Project Development",
                "Technical Advisory",
                "HSE Management",
                "Regulatory Alignment",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors text-sm font-light"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-[#b4975a] mb-8">
              Contact HQ
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-[#b4975a] shrink-0" />
                <span className="text-white/60 text-sm font-light leading-relaxed">
                  Port Harcourt, Rivers State,
                  <br />
                  Nigeria.
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-[#b4975a] shrink-0" />
                <span className="text-white/60 text-sm font-light">
                  +234 (0) 800 LAVIDUR
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-[#b4975a] shrink-0" />
                <span className="text-white/60 text-sm font-light">
                  info@lavidur.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs font-light tracking-widest uppercase">
            &copy; {currentYear} LAVIDUR VENTURES LIMITED. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Corporate Governance"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/30 hover:text-white text-[10px] font-bold tracking-[0.2em] uppercase transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
