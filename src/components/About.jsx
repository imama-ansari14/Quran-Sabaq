import { useEffect, useRef, useState } from 'react';
import { Target, Heart, Star, TrendingUp } from 'lucide-react';

const About = () => {
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

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To make Quran education accessible to students worldwide through innovative online learning methods.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'Building a global community of Quran learners connected through faith, knowledge, and excellence.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Star,
      title: 'Our Values',
      description: 'Excellence in teaching, dedication to students, and commitment to preserving Islamic knowledge.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      title: 'Our Approach',
      description: 'Personalized learning paths, expert guidance, and flexible scheduling to fit your lifestyle.',
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Quran Sabaq</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students across Pakistan and around the world with quality Quran education through dedicated teachers and modern learning methods.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Image/Visual */}
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-3xl font-bold text-white mb-2">15+ Years</h3>
                    <p className="text-blue-100">Of Excellence in Quran Education</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-3xl font-bold text-white mb-2">Certified Teachers</h3>
                    <p className="text-blue-100">Qualified Qaris & Scholars</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-3xl font-bold text-white mb-2">Flexible Schedule</h3>
                    <p className="text-blue-100">Learn at Your Own Pace</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className={`flex flex-col justify-center space-y-6 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <h3 className="text-3xl font-bold text-gray-900">
              Why Choose Quran Sabaq?
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Quran Sabaq, we believe that every student deserves access to high-quality Quran education. Our academy combines traditional Islamic teaching methods with modern technology to create an engaging and effective learning environment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our experienced teachers are not just instructors—they are mentors who care deeply about each student's progress. With personalized one-on-one sessions, we ensure that every learner receives the attention and guidance they need to excel.
            </p>
            <div className="space-y-4">
              {[
                'Personalized one-on-one classes',
                'Flexible scheduling to fit your routine',
                'Expert teachers with Ijazah certification',
                'Interactive learning materials',
                'Progress tracking and regular assessments',
                'Affordable pricing with quality education',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 transform hover:translate-x-2 transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 transform hover:rotate-12 transition-all duration-300`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;