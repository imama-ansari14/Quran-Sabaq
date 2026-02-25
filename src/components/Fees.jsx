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

// ─────────────────────────────────────────────
//  SECTION 1 — Monthly Packages for Online Quran Courses
//  Duration sub-tabs: 30 Min | 45 Min | 60 Min | Group Class (3-5 students)
// ─────────────────────────────────────────────
const QURAN_DURATION_TABS = [
  "30 Minutes",
  "45 Minutes",
  "60 Minutes",
  "Group Class (3 to 5 students)",
];

const quranPricingData = {
  "30 Minutes": [
    { days: "2 DAYS/WEEK", priceUSD: "$37", priceGBP: "£29", duration: "30 Min / Session", lessons: "8 Classes/Month", popular: false },
    { days: "3 DAYS/WEEK", priceUSD: "$50", priceGBP: "£38", duration: "30 Min / Session", lessons: "12 Classes/Month", popular: true },
    { days: "4 DAYS/WEEK", priceUSD: "$65", priceGBP: "£50", duration: "30 Min / Session", lessons: "16 Classes/Month", popular: false },
    { days: "5 DAYS/WEEK", priceUSD: "$78", priceGBP: "£58", duration: "30 Min / Session", lessons: "20 Classes/Month", popular: false },
  ],
  "45 Minutes": [
    { days: "2 DAYS/WEEK", priceUSD: "$55", priceGBP: "£45", duration: "45 Min / Session", lessons: "8 Classes/Month", popular: false },
    { days: "3 DAYS/WEEK", priceUSD: "$75", priceGBP: "£58", duration: "45 Min / Session", lessons: "12 Classes/Month", popular: true },
    { days: "4 DAYS/WEEK", priceUSD: "$95", priceGBP: "£75", duration: "45 Min / Session", lessons: "16 Classes/Month", popular: false },
    { days: "5 DAYS/WEEK", priceUSD: "$120", priceGBP: "£85", duration: "45 Min / Session", lessons: "20 Classes/Month", popular: false },
  ],
  "60 Minutes": [
    { days: "2 DAYS/WEEK", priceUSD: "$70", priceGBP: "£55", duration: "60 Min / Session", lessons: "8 Classes/Month", popular: false },
    { days: "3 DAYS/WEEK", priceUSD: "$95", priceGBP: "£72", duration: "60 Min / Session", lessons: "12 Classes/Month", popular: true },
    { days: "4 DAYS/WEEK", priceUSD: "$120", priceGBP: "£92", duration: "60 Min / Session", lessons: "16 Classes/Month", popular: false },
    { days: "5 DAYS/WEEK", priceUSD: "$145", priceGBP: "£110", duration: "60 Min / Session", lessons: "20 Classes/Month", popular: false },
  ],
  "Group Class (3 to 5 students)": [
    { days: "2 DAYS/WEEK", priceUSD: "$21", priceGBP: "£17", duration: "45 Min / Session", lessons: "8 Classes/Month", popular: false },
    { days: "3 DAYS/WEEK", priceUSD: "$25", priceGBP: "£19", duration: "45 Min / Session", lessons: "12 Classes/Month", popular: true },
    { days: "4 DAYS/WEEK", priceUSD: "$35", priceGBP: "£27", duration: "45 Min / Session", lessons: "16 Classes/Month", popular: false },
    { days: "5 DAYS/WEEK", priceUSD: "$45", priceGBP: "£35", duration: "45 Min / Session", lessons: "20 Classes/Month", popular: false },
  ],
};

// ─────────────────────────────────────────────
//  SECTION 2 — Monthly Plans for Tafseer Quran and Advance Arabic Course
//  Duration sub-tabs: 30 Min | 45 Min | 60 Min | Group Classes (45 Min)
// ─────────────────────────────────────────────
const TAFSEER_DURATION_TABS = [
  "30 Minutes",
  "45 Minutes",
  "60 Minutes",
  "Group Classes (45 Minutes)",
];

const tafseerPricingData = {
  "30 Minutes": [
    { days: "2 DAYS/WEEK", priceUSD: "$45", priceGBP: "£40", duration: "30 Min / Session", lessons: "8 Classes/Month", popular: false },
    { days: "3 DAYS/WEEK", priceUSD: "$58", priceGBP: "£50", duration: "30 Min / Session", lessons: "12 Classes/Month", popular: true },
    { days: "4 DAYS/WEEK", priceUSD: "$75", priceGBP: "£65", duration: "30 Min / Session", lessons: "16 Classes/Month", popular: false },
    { days: "5 DAYS/WEEK", priceUSD: "$85", priceGBP: "£75", duration: "30 Min / Session", lessons: "20 Classes/Month", popular: false },
  ],
  "45 Minutes": [
    { days: "2 DAYS/WEEK", priceUSD: "$30", priceGBP: "£25", duration: "45 Min / Session", lessons: "06 Hours/Month", popular: false },
    { days: "3 DAYS/WEEK", priceUSD: "$35", priceGBP: "£30", duration: "45 Min / Session", lessons: "09 Hours/Month", popular: true },
    { days: "4 DAYS/WEEK", priceUSD: "$40", priceGBP: "£35", duration: "45 Min / Session", lessons: "12 Hours/Month", popular: false },
    { days: "5 DAYS/WEEK", priceUSD: "$45", priceGBP: "£40", duration: "45 Min / Session", lessons: "15 Hours/Month", popular: false },
  ],
  "60 Minutes": [
    { days: "2 DAYS/WEEK", priceUSD: "$85", priceGBP: "£75", duration: "60 Min / Session", lessons: "8 Hours/Month", popular: false },
    { days: "3 DAYS/WEEK", priceUSD: "$112", priceGBP: "£100", duration: "60 Min / Session", lessons: "12 Hours/Month", popular: true },
    { days: "4 DAYS/WEEK", priceUSD: "$145", priceGBP: "£125", duration: "60 Min / Session", lessons: "16 Hours/Month", popular: false },
    { days: "5 DAYS/WEEK", priceUSD: "$165", priceGBP: "£145", duration: "60 Min / Session", lessons: "20 Hours/Month", popular: false },
  ],
  "Group Classes (45 Minutes)": [
    { days: "2 DAYS/WEEK", priceUSD: "$21", priceGBP: "£17", duration: "45 Min / Session", lessons: "8 Classes/Month", popular: false },
    { days: "3 DAYS/WEEK", priceUSD: "$25", priceGBP: "£19", duration: "45 Min / Session", lessons: "12 Classes/Month", popular: true },
    { days: "4 DAYS/WEEK", priceUSD: "$32", priceGBP: "£25", duration: "45 Min / Session", lessons: "16 Classes/Month", popular: false },
    { days: "5 DAYS/WEEK", priceUSD: "$40", priceGBP: "£32", duration: "45 Min / Session", lessons: "20 Classes/Month", popular: false },
  ],
};

// ─────────────────────────────────────────────
//  Courses (unchanged from original)
// ─────────────────────────────────────────────
const courses = [
  {
    title: "Quran & Arabic",
    subtitle: "For Beginners",
    icon: BookOpen,
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
    icon: Star,
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
    subtitle: "Diploma Course",
    icon: BookOpen,
    features: [
      "Diploma Course",
      "Word by word translation",
      "Understanding Quran in Arabic",
    ],
  },
  {
    title: "Tajweed & Tarteel",
    subtitle: "Recitation Course",
    icon: Users,
    features: [
      "Recitation of Holy Quran",
      "Application of Tarteel & Tajweed rules",
    ],
  },
  {
    title: "Prayers & Duas",
    subtitle: "Basic Islamic Education",
    icon: Zap,
    features: ["Basic Islamic Education", "Learn Duas, prayers, six kalimas"],
  },
];

// ─────────────────────────────────────────────
//  Pricing Card
// ─────────────────────────────────────────────
const PricingCard = ({ item, animDelay }) => (
  <div
    className="animate-fade-in-up relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
    style={{ animationDelay: `${animDelay}ms`, animationFillMode: "both" }}
  >
    {item.popular && (
      <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
        Most Popular
      </div>
    )}
    <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-purple-700 shrink-0" />

    <div className="p-6 flex flex-col flex-1">
      {/* Days label */}
      <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-2">
        {item.days}
      </span>

      {/* Price */}
      <div className="mb-4">
        <div className="flex items-end gap-2">
          <span className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
            {item.priceUSD}
          </span>
          <span className="text-xl font-bold text-gray-400 mb-1">
            / {item.priceGBP}
          </span>
        </div>
        <p className="text-xs text-gray-400 font-medium mt-1">per month</p>
      </div>

      {/* Details */}
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-3 bg-blue-50 px-4 py-2.5 rounded-xl">
          <Clock className="w-4 h-4 text-blue-500 shrink-0" />
          <span className="text-sm text-gray-700 font-medium">{item.duration}</span>
        </div>
        <div className="flex items-center gap-3 bg-purple-50 px-4 py-2.5 rounded-xl">
          <BookOpen className="w-4 h-4 text-purple-500 shrink-0" />
          <span className="text-sm text-gray-700 font-medium">{item.lessons}</span>
        </div>
      </div>

      <a href="#contact" className="mt-6 w-full">
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-xl font-bold hover:opacity-90 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
          Choose Plan
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </a>
    </div>
  </div>
);

// ─────────────────────────────────────────────
//  Course Card
// ─────────────────────────────────────────────
const CourseCard = ({ item, animDelay }) => {
  const Icon = item.icon;
  return (
    <div
      className="animate-fade-in-up relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
      style={{ animationDelay: `${animDelay}ms`, animationFillMode: "both" }}
    >
      <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-purple-700 shrink-0" />
      <div className="p-6 flex flex-col flex-1">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-2">
          {item.subtitle}
        </span>
        <h4 className="text-2xl font-extrabold text-gray-900 mb-4">{item.title}</h4>
        <ul className="space-y-2 flex-1">
          {item.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-blue-600" />
              </span>
              <span className="text-sm text-gray-600">{f}</span>
            </li>
          ))}
        </ul>
        <a href="#contact" className="mt-6 w-full">
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-xl font-bold hover:opacity-90 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
            Enroll Now
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </a>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
//  Duration Sub-Tabs + Grid
// ─────────────────────────────────────────────
const PricingSection = ({ title, tabs, data }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [animKey, setAnimKey] = useState(0);

  const handleTab = (t) => {
    setActiveTab(t);
    setAnimKey((k) => k + 1);
  };

  const plans = data[activeTab] || [];

  return (
    <div className="mb-20">
      {/* Section title */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6">
          {title}
        </h3>

        {/* Duration tabs */}
        <div className="inline-flex flex-wrap justify-center gap-2 bg-white border border-gray-200 rounded-2xl p-2 shadow-sm">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => handleTab(t)}
              className={`px-5 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === t
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md scale-105"
                  : "text-gray-500 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <div
        key={animKey}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        style={{ alignItems: "stretch" }}
      >
        {plans.map((item, i) => (
          <div key={i} className="flex">
            <div className="w-full">
              <PricingCard item={item} animDelay={i * 60} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
//  Main Section Filter Tabs
// ─────────────────────────────────────────────
const MAIN_FILTERS = [
  "Monthly Packages for Online Quran Courses",
  "Monthly Plans for Tafseer Quran and Advance Arabic Course",
  "Courses",
];

const Fees = () => {
  const [activeFilter, setActiveFilter] = useState(MAIN_FILTERS[0]);
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
                Starting at just $21 / £17/mo
              </p>
            </div>
          </div>
        </div>

        {/* Main Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {MAIN_FILTERS.map((f) => (
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

        {/* Content */}
        <div key={animKey}>
          {activeFilter === "Monthly Packages for Online Quran Courses" && (
            <PricingSection
              title="Monthly Packages for Online Quran Courses"
              tabs={QURAN_DURATION_TABS}
              data={quranPricingData}
            />
          )}

          {activeFilter ===
            "Monthly Plans for Tafseer Quran and Advance Arabic Course" && (
            <PricingSection
              title="Monthly Plans for Tafseer Quran and Advance Arabic Course"
              tabs={TAFSEER_DURATION_TABS}
              data={tafseerPricingData}
            />
          )}

          {activeFilter === "Courses" && (
            <div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              style={{ alignItems: "stretch" }}
            >
              {courses.map((item, i) => (
                <div key={i} className="flex">
                  <div className="w-full">
                    <CourseCard item={item} animDelay={i * 60} />
                  </div>
                </div>
              ))}
            </div>
          )}
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