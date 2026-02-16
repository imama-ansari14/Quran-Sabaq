import { useEffect, useState } from "react";
import { BookOpen, Users, Award, Globe } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d7a] via-[#2563eb] to-[#7c3aed]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`text-white space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Learn Quran
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                With Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Join thousands of students worldwide in their journey to learn and
              understand the Holy Quran with our expert teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { icon: Users, label: "Students", value: "5000+" },
                { icon: BookOpen, label: "Courses", value: "15+" },
                { icon: Award, label: "Teachers", value: "50+" },
                { icon: Globe, label: "Countries", value: "30+" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center transform hover:scale-110 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div
            className={`relative h-[500px] transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="absolute top-0 left-0 w-64 h-80 bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:rotate-2">
              <div className="w-full h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl mb-4 flex items-center justify-center">
                <BookOpen className="w-20 h-20 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Quran Reading
              </h3>
              <p className="text-gray-600">
                Master Tajweed with certified teachers
              </p>
            </div>

            <div className="absolute top-20 right-0 w-64 h-80 bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:-rotate-2">
              <div className="w-full h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl mb-4 flex items-center justify-center">
                <Users className="w-20 h-20 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                One-on-One
              </h3>
              <p className="text-gray-600">Personalized learning experience</p>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-80 bg-white rounded-2xl shadow-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="w-full h-40 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl mb-4 flex items-center justify-center">
                <Award className="w-20 h-20 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Certification
              </h3>
              <p className="text-gray-600">Get certified upon completion</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
