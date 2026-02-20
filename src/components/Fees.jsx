import { useEffect, useRef, useState } from "react";
import {
  Check,
  Star,
  Clock,
  BookOpen,
  Calendar,
  Award,
  Zap,
  Users,
  Sparkles,
} from "lucide-react";

const Fee = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const arabicPlans = [
    {
      title: "2 Days Package",
      frequency: "2 Days Every Week",
      duration: "30 Minutes Each Session",
      lessons: "8 Lessons Per Month",
      priceUSD: "$39",
      priceGBP: "£25",
    },
    {
      title: "3 Days Package",
      frequency: "3 Days Every Week",
      duration: "30 Minutes Each Session",
      lessons: "12 Lessons Per Month",
      priceUSD: "$45",
      priceGBP: "£30",
    },
    {
      title: "4 Days Package",
      frequency: "4 Days Every Week",
      duration: "30 Minutes Each Lesson",
      lessons: "16 Lessons Per Month",
      priceUSD: "$59",
      priceGBP: "£35",
    },
    {
      title: "5 Days Package",
      frequency: "5 Days Every Week",
      duration: "30 Minutes Each Lesson",
      lessons: "20 Lessons Per Month",
      priceUSD: "$69",
      priceGBP: "£39",
    },
  ];

  const weekendPlans = [
    {
      title: "Weekend Basic",
      frequency: "2 Days Every Week (Sat./Sun.)",
      duration: "30 Minutes Each Session",
      lessons: "8 Lessons Per Month",
      priceUSD: "$23",
      priceGBP: "£19",
      icon: Clock,
    },
    {
      title: "Weekend Extended",
      frequency: "2 Days Every Week (Sat./Sun.)",
      duration: "Weekends 45 Minutes",
      lessons: "8 Lessons Per Month",
      priceUSD: "$35",
      priceGBP: "£24",
      icon: Calendar,
    },
  ];

  const courses = [
    {
      title: "Quran and Arabic Courses",
      subtitle: "(For Beginners)",
      icon: BookOpen,
      features: [
        "Identify Arabic Alphabets",
        "Read Holy Quran with Tajweed Rules",
        "Step by step guidance from teachers",
        "Basic islamic principles",
        "Memorization of last 20 soorah",
        "Memorization of 40 duas",
        "Memorization of six kalimas",
      ],
    },
    {
      title: "Arabic Course",
      subtitle: "",
      icon: BookOpen,
      features: [
        "Learn Arabic Alphabets to language",
        "Learn Arabic grammar rules",
        "Learn Arabic Vocabulary",
        "Learn Vocabulary from Quran",
        "Learn Grammar rules according to Quran",
      ],
    },
    {
      title: "Quran Memorization and Tafseer",
      subtitle: "",
      icon: Award,
      features: [
        "Memorize Quran by heart",
        "Memorize Tajweed rules",
        "Learn Qirat",
        "Revisions",
      ],
    },
    {
      title: "Quran Translation",
      subtitle: "",
      icon: BookOpen,
      features: [
        "Diploma Course",
        "Word by word translation of Holy Quran",
        "Understanding Quran in Arabic",
      ],
    },
    {
      title: "Tajweed and Tarteel Course",
      subtitle: "",
      icon: Star,
      features: [
        "Recitation of Holy Quran",
        "Application of Tarteel and Tajweed rules",
      ],
    },
    {
      title: "Prayers, Dua's and Memorization of Sura's",
      subtitle: "",
      icon: Users,
      features: ["Basic Islamic Education", "Learn Duas, prayers, six kalimas"],
    },
  ];

  return (
    <section
      id="fee"
      ref={sectionRef}
      className="py-24 bg-slate-50 overflow-hidden relative"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm space-x-2 bg-blue-600/10 backdrop-blur-md px-5 py-2 rounded-full border border-blue-400/30 inline-block mb-4">
            Flexible & Affordable
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transparent pricing designed to make quality Quran education
            accessible to everyone
          </p>

          {/* Highlight Banners with Animations */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-5 rounded-2xl shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 border-2 border-white/20">
              <div className="flex items-center justify-center gap-3">
                <Sparkles className="w-6 h-6 animate-pulse" />
                <p className="text-lg md:text-xl font-bold">
                  We are available 24/7. First week FREE trial lessons!
                </p>
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
            </div>
            <div className="bg-white border-4 border-blue-600 px-8 py-5 rounded-2xl shadow-xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Starting at just $23 / £19 per month!
              </p>
            </div>
          </div>
        </div>

        {/* Courses Section with Advanced Animations */}
        <div
          className={`mb-24 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Available{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Courses
              </span>
            </h3>
            <p className="text-gray-600 text-lg">
              Comprehensive programs for every level
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 shadow-xl group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-700">
                  <course.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h4>
                {course.subtitle && (
                  <p className="text-sm text-blue-600 font-semibold mb-5">
                    {course.subtitle}
                  </p>
                )}
                <ul className="space-y-3">
                  {course.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 group/item"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 group-hover/item:bg-blue-600 transition-colors">
                        <Check className="w-3 h-3 text-blue-600 group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Arabic Course Pricing with Premium Animations */}
        <div
          className={`mb-24 transform transition-all duration-1000 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Arabic Course{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h3>
            <p className="text-gray-600 text-lg">
              Choose the perfect schedule for your learning journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {arabicPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative group bg-white rounded-3xl p-8 shadow-xl border-2 transform hover:-translate-y-4 hover:rotate-2 transition-all duration-500 ${
                  plan.popular
                    ? "border-blue-600 shadow-2xl scale-105"
                    : "border-gray-200 hover:border-blue-400"
                }`}
              >
                <div className="w-full h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-xl mb-6 group-hover:h-2 transition-all"></div>

                <h4 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                  {plan.title}
                </h4>

                <div className="mb-8">
                  <div className="flex items-baseline justify-center mb-3">
                    <span className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {plan.priceUSD}
                    </span>
                    <span className="text-3xl font-bold text-gray-400 ml-3">
                      / {plan.priceGBP}
                    </span>
                  </div>
                  <p className="text-center text-sm text-gray-500 font-medium">
                    per month
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                    <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">
                      {plan.frequency}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors">
                    <Clock className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">
                      {plan.duration}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-xl group-hover:bg-indigo-100 transition-colors">
                    <BookOpen className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">
                      {plan.lessons}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-white">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Weekend Packages with Stunning Animations */}
        <div
          className={`mb-20 transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Weekend{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Packages
              </span>
            </h3>
            <p className="text-gray-600 text-lg">
              Perfect for busy weekday schedules
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {weekendPlans.map((plan, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100 transform hover:-translate-y-4 hover:rotate-1 hover:border-blue-400 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-8 mx-auto shadow-2xl group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-700">
                  <plan.icon className="w-10 h-10 text-white" />
                </div>

                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-blue-600 transition-colors">
                  {plan.title}
                </h4>

                <div className="mb-8">
                  <div className="flex items-baseline justify-center mb-3">
                    <span className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {plan.priceUSD}
                    </span>
                    <span className="text-4xl font-bold text-gray-400 ml-3">
                      / {plan.priceGBP}
                    </span>
                  </div>
                  <p className="text-center text-sm text-gray-500 font-medium">
                    per month
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl group-hover:from-blue-100 group-hover:to-purple-100 transition-colors">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-700">
                      {plan.frequency}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl group-hover:from-purple-100 group-hover:to-blue-100 transition-colors">
                    <Clock className="w-6 h-6 text-purple-600" />
                    <span className="text-sm font-semibold text-gray-700">
                      {plan.duration}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl group-hover:from-indigo-100 group-hover:to-blue-100 transition-colors">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                    <span className="text-sm font-semibold text-gray-700">
                      {plan.lessons}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-white">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA with Animation */}
        <div
          className={`transform transition-all duration-1000 delay-800 ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-10 opacity-0 scale-95"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mb-32 animate-pulse animation-delay-2000"></div>

            <div className="relative z-10">
              <Zap className="w-16 h-16 mx-auto mb-6 animate-bounce" />
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let our expert counselors help you choose the perfect plan for
                your learning journey
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a href="#contact">
                  <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-110 hover:-rotate-2 transition-all duration-300">
                    Contact Us Now
                  </button>
                </a>
                <a
                  href="https://wa.me/923002207349"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border-3 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-2">
                    WhatsApp Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fee;
