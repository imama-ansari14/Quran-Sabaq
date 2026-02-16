import { useEffect, useRef, useState } from "react";
import {
  Target,
  Heart,
  Star,
  TrendingUp,
  CheckCircle2,
  Users,
  Globe,
  BookOpen,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Making sacred knowledge accessible through modern technology.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Our Vision",
      description:
        "Nurturing a generation connected to the Quran by heart and mind.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Star,
      title: "Expert Tutors",
      description:
        "Certified Qaris and scholars with years of teaching experience.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Personalized",
      description:
        "One-on-one sessions tailored to every student’s unique pace.",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
            Empowering Through Faith
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Quran Sabaq
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            More than just an academy—we are a global bridge connecting students
            to the beauty of the Quran through personalized, expert-led online
            education.
          </p>
        </div>

        {/* Main Content - Visual Focus */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Side: Stats Grid (More attractive than long paragraphs) */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <Users className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold text-gray-800">1,000+</h4>
              <p className="text-gray-500 text-sm">Active Students</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-3xl shadow-lg text-white transform translate-y-8">
              <Globe className="w-10 h-10 text-blue-200 mb-4" />
              <h4 className="text-2xl font-bold">Global</h4>
              <p className="text-blue-100 text-sm">Pakistan & International</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <BookOpen className="w-10 h-10 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold">15+ Yrs</h4>
              <p className="text-gray-500 text-sm">Academic Excellence</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group transform translate-y-8">
              <CheckCircle2 className="w-10 h-10 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold">Ijazah</h4>
              <p className="text-gray-500 text-sm">Certified Teachers</p>
            </div>
          </div>

          {/* Right Side: High-Value Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-500 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
              Why Parents Trust Us With Their{" "}
              <span className="text-blue-600">Child's Education</span>
            </h3>

            <div className="space-y-4">
              {[
                {
                  title: "Personalized Attention",
                  desc: "1-on-1 classes ensuring your child never gets left behind.",
                },
                {
                  title: "Safe & Secure Learning",
                  desc: "A comfortable, monitored environment for kids and sisters.",
                },
                {
                  title: "Progress Reports",
                  desc: "Monthly feedback for parents to track Quranic fluency.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">{item.title}</h5>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid - Animated on Scroll */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:rotate-[360deg] transition-transform duration-700 shadow-lg`}
              >
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {value.title}
              </h4>
              <p className="text-gray-500 leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
