import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FourPillars from "../components/FourPillars";
import About from "../components/About";
import Founder from "../components/Founder";
import Capabilities from "../components/Capabilities";
import Sectors from "../components/Sectors";
import Projects from "../components/Projects";
import HowWeWork from "../components/HowWeWork";
import Compliance from "../components/Compliance";
import Footer from "../components/Footer";

export default function LavidurWebsite() {
  return (
    <main className="min-h-screen bg-white font-inter selection:bg-[#b4975a] selection:text-white">
      <Navbar />
      <Hero />
      <FourPillars />
      <About />
      <Founder />
      <Capabilities />
      <Sectors />
      <HowWeWork />
      <Projects />
      <Compliance />

      {/* Contact Section Preview */}
      <section
        id="contact"
        className="py-24 bg-[#022c22] relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#b4975a]/5 skew-x-12 translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="bg-white p-12 md:p-20 rounded-sm shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <span className="text-[#b4975a] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
                Let's Connect
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#022c22] mb-6 leading-tight">
                Ready to Engineer Your Next Vision?
              </h2>
              <p className="text-gray-500 font-light text-lg">
                Partner with a team that understands the complexities of the
                African energy and infrastructure landscape.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <button className="px-10 py-5 bg-[#022c22] text-white font-bold tracking-widest uppercase hover:bg-[#064e3b] transition-all rounded-sm shadow-xl">
                Partner With Us
              </button>
              <button className="px-10 py-5 border-2 border-[#022c22] text-[#022c22] font-bold tracking-widest uppercase hover:bg-[#022c22] hover:text-white transition-all rounded-sm">
                Request Advisory
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&display=swap');
        
        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        ::selection {
          background: #b4975a;
          color: white;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #022c22;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #b4975a;
        }
      `}</style>
    </main>
  );
}
