import { useEffect, useState } from "react";
import { BookOpen, Users, Award, PlayCircle, Moon } from "lucide-react";
import Quran from "../assets/quran.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-[#0a121d]"
    >
      {/* BACKGROUND LAYER: Quran Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={Quran}
          alt="Holy Quran"
          className="w-full h-full object-cover opacity-25"
        />
        {/* Darkened Radial Gradient for Text Contrast */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0a121d]/80 to-[#0a121d]"></div>

        {/* Islamic Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/islamic-art.png')`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`text-white space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Tagline with Logo Blue */}
            <div className="inline-flex items-center space-x-2 bg-blue-600/10 backdrop-blur-md px-5 py-2 rounded-full border border-blue-400/30">
              <Moon className="w-4 h-4 text-blue-400 fill-blue-400" />
              <span className="text-sm font-semibold text-blue-100 tracking-wide uppercase">
                Traditional Wisdom • Modern Learning
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Nurture Your Soul with
              {/* Text Gradient matching the Logo's Blue shades */}
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-sky-300 to-blue-600 bg-clip-text text-transparent">
                Quranic Wisdom
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl italic">
              "The best among you are those who learn the Quran and teach it."
              <span className="block text-sm not-italic mt-2 text-blue-400 font-bold">
                — Sahih Al-Bukhari
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:brightness-110 shadow-[0_10px_30px_rgba(0,129,201,0.3)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 border-b-4 border-blue-900">
                Start 3-Day Free Trial
              </button>
            </div>
          </div>

          {/* Right Content - Arched Cards with Logo Blue Borders */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transform transition-all duration-1000 delay-300 ${
              isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            {/* Feature 1 - Blue Theme */}
            <div className="relative group bg-slate-900/60 backdrop-blur-xl p-8 rounded-t-[5rem] rounded-b-2xl border-t-2 border-x border-blue-500/40 hover:border-sky-400 transition-all shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <BookOpen className="w-24 h-24 text-white" />
              </div>
              {/* Icon background matching logo circle */}
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-sky-500/20 rounded-full flex items-center justify-center mb-6 border border-blue-400/50">
                <BookOpen className="w-7 h-7 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Nazra & Tajweed
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Perfect your pronunciation with specialized exercises focused on
                articulation points (Makharij).
              </p>
            </div>

            {/* Feature 2 - Blue Theme */}
            <div className="relative group bg-slate-900/60 backdrop-blur-xl p-8 rounded-t-[5rem] rounded-b-2xl border-t-2 border-x border-blue-500/40 hover:border-sky-400 transition-all shadow-2xl mt-8 sm:mt-12 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Users className="w-24 h-24 text-white" />
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-sky-500/20 rounded-full flex items-center justify-center mb-6 border border-blue-400/50">
                <Users className="w-7 h-7 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">1-on-1 Hifz</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Personalized memorization plans designed to help you or your
                child retain the Quran for life.
              </p>
            </div>

            {/* Feature 3 - Full Width with Blue Accent */}
            <div className="sm:col-span-2 relative group bg-gradient-to-r from-blue-900/30 to-slate-900/60 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20 flex flex-col sm:flex-row items-center gap-6 hover:border-blue-400/40 transition-all">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/30">
                <Award className="w-8 h-8 text-sky-400" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-white">
                  Certified Global Faculty
                </h3>
                <p className="text-slate-400 text-sm">
                  Graduates from leading Islamic universities across Pakistan &
                  the Middle East.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Border - Bottom (Blue Gradient) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
