import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import lavidurLogo from "../../../mobile/assets/images/Lavidur_Logo-removebg-preview.png";

const navLinks = [
  {
    name: "ABOUT",
    href: "#about",
    dropdown: [
      { name: "COMPANY OVERVIEW", href: "#about" },
      { name: "LEADERSHIP", href: "#leadership" },
      { name: "VISION & MISSION", href: "#vision-mission" },
      { name: "APPROACH", href: "#approach" },
    ],
  },
  {
    name: "CAPABILITIES",
    href: "#capabilities",
    dropdown: [
      { name: "EPC SERVICES", href: "#capabilities" },
      { name: "PROJECT DEVELOPMENT", href: "#capabilities" },
      { name: "TECHNICAL ADVISORY", href: "#capabilities" },
      { name: "COMPLIANCE MANAGEMENT", href: "#capabilities" },
      { name: "ENERGY INFRASTRUCTURE", href: "#capabilities" },
      { name: "HSE FRAMEWORKS", href: "#capabilities" },
    ],
  },
  { name: "SECTORS", href: "#sectors" },
  { name: "PROJECTS", href: "#projects" },
  { name: "COMPLIANCE", href: "#compliance" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#022c22]/95 backdrop-blur-md py-4 shadow-xl"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
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
              Ventures Limited
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-[#b4975a] transition-colors duration-300 py-2"
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                )}
              </a>

              {/* Gold Underline */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#b4975a] transition-all duration-300 group-hover:w-full" />

              {/* Dropdown */}
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#022c22] border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-2xl rounded-sm py-4">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-6 py-2 text-xs text-white/70 hover:text-[#b4975a] hover:bg-white/5 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-2.5 border border-[#b4975a]/70 bg-[#b4975a] text-white text-xs font-bold tracking-widest rounded-[2px] hover:bg-[#c5a059] transition-all shadow-lg"
          >
            START A DISCUSSION →
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 top-0 bg-[#022c22] z-40 lg:hidden flex flex-col pt-32 px-12 pb-12 gap-8 overflow-y-auto"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-3">
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-[#b4975a] transition-colors"
                >
                  {link.name}
                </a>
                {link.dropdown && (
                  <div className="flex flex-col gap-3 border-l border-[#b4975a]/40 pl-5">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm font-bold tracking-widest text-white/60 hover:text-[#b4975a] transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-8 py-4 bg-[#b4975a] text-white font-bold text-center rounded-sm"
            >
              START A DISCUSSION →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
