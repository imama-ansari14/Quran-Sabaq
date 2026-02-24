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
  ChevronRight,
} from "lucide-react";

const FILTERS = ["All Courses", "Weekday Plans", "Weekend Plans", "Courses"];

const arabicPlans = [
  {
    title: "2 Days",
    tag: "Weekday Plans",
    frequency: "2 Days Every Week",
    duration: "30 Min / Session",
    lessons: "8 Lessons / Month",
    priceUSD: "$37",
    priceGBP: "£29",
    color: "from-blue-600 to-purple-700",
  },
  {
    title: "3 Days",
    tag: "Weekday Plans",
    frequency: "3 Days Every Week",
    duration: "30 Min / Session",
    lessons: "12 Lessons / Month",
    priceUSD: "$50",
    priceGBP: "£38",
    color: "from-blue-600 to-purple-700",
    popular: true,
  },
  {
    title: "4 Days",
    tag: "Weekday Plans",
    frequency: "4 Days Every Week",
    duration: "30 Min / Session",
    lessons: "16 Lessons / Month",
    priceUSD: "$65",
    priceGBP: "£50",
    color: "from-blue-600 to-purple-700",
  },
  {
    title: "5 Days",
    tag: "Weekday Plans",
    frequency: "5 Days Every Week",
    duration: "30 Min / Session",
    lessons: "20 Lessons / Month",
    priceUSD: "$78",
    priceGBP: "£58",
    color: "from-blue-600 to-purple-700",
  },
];

const weekendPlans = [
  {
    title: "Weekend Basic",
    tag: "Weekend Plans",
    frequency: "Sat & Sun",
    duration: "30 Min / Session",
    lessons: "8 Lessons / Month",
    priceUSD: "$37",
    priceGBP: "£29",
    color: "from-blue-600 to-purple-700",
  },
  {
    title: "Weekend Extended",
    tag: "Weekend Plans",
    frequency: "Sat & Sun",
    duration: "45 Min / Session",
    lessons: "8 Lessons / Month",
    priceUSD: "$40",
    priceGBP: "£30",
    color: "from-blue-600 to-purple-700",
  },
];

const courses = [
  {
    title: "Quran & Arabic",
    subtitle: "For Beginners",
    tag: "Courses",
    icon: BookOpen,
    color: "from-blue-600 to-purple-700",
    features: [
      "Identify Arabic Alphabets",
      "Read Holy Quran with Tajweed Rules",
      "Step by step guidance",
      "Basic Islamic principles",
      "Memorization of last 20 Surahs",
      "Memorization of 40 Duas",
      "Six Kalimas",
    ],
  },
  {
    title: "Arabic Course",
    subtitle: "Language & Grammar",
    tag: "Courses",
    icon: Star,
    color: "from-blue-600 to-purple-700",
    features: [
      "Arabic Alphabets to language",
      "Arabic grammar rules",
      "Arabic Vocabulary",
      "Vocabulary from Quran",
      "Grammar rules per Quran",
    ],
  },
  {
    title: "Quran Memorization",
    subtitle: "Hifz & Tafseer",
    tag: "Courses",
    icon: Award,
    color: "from-blue-600 to-purple-700",
    features: [
      "Memorize Quran by heart",
      "Memorize Tajweed rules",
      "Learn Qirat",
      "Revisions",
    ],
  },
  {
    title: "Quran Translation",
    subtitle: "Diploma Course",
    tag: "Courses",
    icon: BookOpen,
    color: "from-blue-600 to-purple-700",
    features: [
      "Diploma Course",
      "Word by word translation",
      "Understanding Quran in Arabic",
    ],
  },
  {
    title: "Tajweed & Tarteel",
    subtitle: "Recitation Course",
    tag: "Courses",
    icon: Users,
    color: "from-blue-600 to-purple-700",
    features: [
      "Recitation of Holy Quran",
      "Application of Tarteel & Tajweed rules",
    ],
  },
  {
    title: "Prayers & Duas",
    subtitle: "Basic Islamic Education",
    tag: "Courses",
    icon: Zap,
    color: "from-blue-600 to-purple-700",
    features: ["Basic Islamic Education", "Learn Duas, prayers, six kalimas"],
  },
];

const allItems = [...arabicPlans, ...weekendPlans, ...courses];

const PlanCard = ({ item }) => {
  const isPricing = !!item.priceUSD;
  const Icon = item.icon;

  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col w-full h-full">
      {item.popular && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
          Most Popular
        </div>
      )}

      {/* Top color bar */}
      <div className={`h-2 w-full bg-gradient-to-r ${item.color} shrink-0`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Fixed-height top zone: icon placeholder or icon — keeps tag/title aligned */}
        <div className="h-16 shrink-0 flex items-start">
          {!isPricing && Icon ? (
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
              <Icon className="w-6 h-6 text-white" />
            </div>
          ) : null}
        </div>

        {/* Tag / subtitle */}
        <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-2">
          {isPricing ? item.tag : item.subtitle}
        </span>

        <h4 className="text-2xl font-extrabold text-gray-900 mb-1">
          {item.title}
        </h4>

        {/* Fixed-height price zone — keeps content below aligned across card types */}
        <div className="h-20 shrink-0">
          {isPricing && (
            <div className="mt-3">
              <div className="flex items-end gap-2">
                <span
                  className={`text-4xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                >
                  {item.priceUSD}
                </span>
                <span className="text-xl font-bold text-gray-400 mb-1">
                  / {item.priceGBP}
                </span>
              </div>
              <p className="text-xs text-gray-400 font-medium mt-1">
                per month
              </p>
            </div>
          )}
        </div>

        {/* Flex-grow content area */}
        <div className="flex-1">
          {isPricing && (
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-blue-50 px-4 py-2.5 rounded-xl">
                <Calendar className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="text-sm text-gray-700 font-medium">
                  {item.frequency}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-purple-50 px-4 py-2.5 rounded-xl">
                <Clock className="w-4 h-4 text-purple-500 shrink-0" />
                <span className="text-sm text-gray-700 font-medium">
                  {item.duration}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-indigo-50 px-4 py-2.5 rounded-xl">
                <BookOpen className="w-4 h-4 text-indigo-500 shrink-0" />
                <span className="text-sm text-gray-700 font-medium">
                  {item.lessons}
                </span>
              </div>
            </div>
          )}

          {!isPricing && (
            <ul className="space-y-2">
              {item.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-blue-600" />
                  </span>
                  <span className="text-sm text-gray-600">{f}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <a href="#contact" className="mt-6 w-full">
          <button
            className={`w-full bg-gradient-to-r ${item.color} text-white py-3 rounded-xl font-bold hover:opacity-90 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group shrink-0`}
          >
            {isPricing ? "Choose Plan" : "Enroll Now"}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </a>
      </div>
    </div>
  );
};

const Fees = () => {
  const [activeFilter, setActiveFilter] = useState("All Courses");
  const [isVisible, setIsVisible] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const filtered =
    activeFilter === "All Courses"
      ? allItems
      : allItems.filter((item) => item.tag === activeFilter);

  const handleFilter = (f) => {
    setActiveFilter(f);
    setAnimKey((k) => k + 1);
  };

  return (
    <section
      id="fees"
      ref={sectionRef}
      className="py-24 bg-slate-50 overflow-hidden relative"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06]">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-blue-500 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-500 rounded-full filter blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block bg-blue-600/10 border border-blue-400/30 text-blue-600 font-bold tracking-widest uppercase text-xs px-5 py-2 rounded-full mb-4">
            Flexible & Affordable
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Transparent pricing designed to make quality Quran education
            accessible to everyone
          </p>

          {/* Banners */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
            <div className="flex-1 bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 animate-pulse shrink-0" />
              <p className="font-bold text-sm md:text-base">
                Available 24/7 · First week FREE trial!
              </p>
              <Sparkles className="w-5 h-5 animate-pulse shrink-0" />
            </div>
            <div className="flex-1 bg-white border-2 border-blue-500 px-6 py-4 rounded-2xl shadow-lg text-center">
              <p className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Starting at just $23 / £19/mo
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => handleFilter(f)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border-2 ${
                activeFilter === f
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg scale-105"
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {f}
              {activeFilter === f && (
                <span className="ml-2 inline-block w-1.5 h-1.5 bg-white rounded-full align-middle" />
              )}
            </button>
          ))}
        </div>

        {/* Count badge */}
        <div className="text-center mb-8">
          <span className="text-sm text-gray-400 font-medium">
            Showing{" "}
            <span className="font-bold text-blue-600">{filtered.length}</span>{" "}
            {activeFilter === "All Courses"
              ? "plans & courses"
              : activeFilter.toLowerCase()}
          </span>
        </div>

        {/* Grid — flex items stretch to fill row height equally */}
        <div
          key={animKey}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          style={{ alignItems: "stretch" }}
        >
          {filtered.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="animate-fade-in-up flex"
              style={{
                animationDelay: `${i * 60}ms`,
                animationFillMode: "both",
              }}
            >
              <PlanCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Fees;
