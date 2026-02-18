import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "03002207349",
      subdetail: "whatsapp available",
      gradient: "from-blue-600 to-purple-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "quransabaq@gmail.com",
      subdetail: "support available",
      gradient: "from-blue-600 to-purple-500",
    },
    {
      icon: Clock,
      title: "Available",
      detail: "24/7 Support",
      subdetail: "All Days of Week",
      gradient: "from-blue-600 to-purple-500",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div
          className={`grid sm:grid-cols-3 lg:grid-cols-3 gap-8 mb-16 mx-auto max-w-7xl transform transition-all duration-1000 delay-200 center  ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4 transform hover:rotate-12 transition-all duration-300`}
              >
                <info.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-700 font-medium">{info.detail}</p>
              <p className="text-gray-500 text-sm mt-1">{info.subdetail}</p>
            </div>
          ))}
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-gray-50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 outline-none transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 outline-none transition-all duration-300"
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Course
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 outline-none transition-all duration-300"
                  >
                    <option value="">Choose a course</option>
                    <option value="nazra">Quran Reading (Nazra)</option>
                    <option value="hifz">Quran Memorization (Hifz)</option>
                    <option value="tajweed">Tajweed Mastery</option>
                    <option value="tafseer">Tafseer & Translation</option>
                    <option value="islamic">Islamic Studies</option>
                    <option value="kids">Kids Quran Program</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your goals and questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Info */}
          <div
            className={`transform transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="h-full flex flex-col space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <MessageCircle className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Start Your Free Trial Today!
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Experience our teaching quality firsthand with a complimentary
                  trial class. No credit card required!
                </p>
                <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Book Free Trial Class
                </button>
              </div>

              {/* WhatsApp Contact */}
              <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      Quick Response
                    </h4>
                    <p className="text-gray-600">via WhatsApp</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Get instant answers to your questions on WhatsApp
                </p>
                <button className="w-full bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transform hover:scale-105 transition-all duration-300">
                  Chat on WhatsApp
                </button>
              </div>

              {/* FAQ Link */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h4>
                <p className="text-gray-600 mb-4">
                  Find quick answers to common questions about our courses,
                  pricing, and enrollment process.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center space-x-2">
                  <span>View FAQs</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
