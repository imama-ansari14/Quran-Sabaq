import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const testimonials = [
    {
      name: "Sarah Ahmed",
      location: "Karachi, Pakistan",
      course: "Quran Reading (Nazra)",
      rating: 5,
      text: "Quran Sabaq has been a blessing for our family. My daughter learned to read Quran beautifully within 8 months. The teachers are so patient and dedicated. Highly recommend!",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Mohammed Ali",
      location: "London, UK",
      course: "Tajweed Mastery",
      rating: 5,
      text: "As someone living abroad, finding quality Quran education was challenging. Quran Sabaq made it so easy with flexible timings and amazing teachers. My Tajweed improved significantly.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Fatima Khan",
      location: "Dubai, UAE",
      course: "Hifz Program",
      rating: 5,
      text: "My son is in the Hifz program and the progress has been remarkable. The teachers use effective memorization techniques and provide regular feedback. Alhamdulillah!",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Abdullah Hassan",
      location: "Lahore, Pakistan",
      course: "Islamic Studies",
      rating: 5,
      text: "The Islamic Studies course opened my eyes to the beauty of our Deen. The teachers explain everything with such clarity and patience. Worth every penny!",
      gradient: "from-green-500 to-teal-500",
    },
    {
      name: "Aisha Malik",
      location: "Toronto, Canada",
      course: "Kids Quran Program",
      rating: 5,
      text: "My kids absolutely love their Quran classes! The teachers make learning fun and engaging. They actually look forward to their daily lessons. Thank you Quran Sabaq!",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "Yusuf Ibrahim",
      location: "Islamabad, Pakistan",
      course: "Tafseer & Translation",
      rating: 5,
      text: "Understanding the Quran has transformed my spiritual journey. The Tafseer classes are incredibly insightful and the teachers are highly knowledgeable. Truly grateful!",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Student{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students and parents about their transformative
            learning experiences
          </p>
        </div>

        {/* Featured Testimonial - Large Card */}
        <div
          className={`mb-12 transform transition-all duration-1000 delay-200 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div
            className={`bg-gradient-to-br ${testimonials[activeIndex].gradient} rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 opacity-10">
              <Quote className="w-64 h-64 transform rotate-12" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-white text-white" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                "{testimonials[activeIndex].text}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl font-bold">
                    {testimonials[activeIndex].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-xl">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-blue-100">
                    {testimonials[activeIndex].location}
                  </div>
                  <div className="text-sm text-blue-200 mt-1">
                    {testimonials[activeIndex].course}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-3 pt-4 border-t">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold`}
                >
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "5000+", label: "Happy Students" },
            { value: "2500+", label: "Five Star Reviews" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
