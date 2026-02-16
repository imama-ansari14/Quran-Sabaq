import logo from "../assets/logo.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    courses: [
      { name: "Quran Reading", href: "#courses" },
      { name: "Quran Memorization", href: "#courses" },
      { name: "Tajweed", href: "#courses" },
      { name: "Islamic Studies", href: "#courses" },
      { name: "Kids Program", href: "#courses" },
    ],
    quickLinks: [
      { name: "About Us", href: "#about" },
      { name: "Our Teachers", href: "#teachers" },
      { name: "Pricing Plans", href: "#contact" },
      { name: "Free Trial", href: "#contact" },
      { name: "Testimonials", href: "#testimonials" },
    ],
    support: [
      { name: "Help Center", href: "#contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Contact Us", href: "#contact" },
      { name: "FAQs", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Quran Sabaq Logo" className="w-12 h-12" />
              <span className="text-2xl font-bold">Quran Sabaq</span>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Empowering students worldwide with quality Quran education through
              dedicated teachers and modern learning methods. Your journey to
              understanding the Holy Quran starts here.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-blue-200 hover:text-white transition-colors duration-300">
                <Phone className="w-5 h-5" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
                <span>info@quransabaq.com</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200 hover:text-white transition-colors duration-300">
                <MapPin className="w-5 h-5" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Courses Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Courses</h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm text-center md:text-left">
              © {currentYear} Quran Sabaq. All rights reserved. Made with ♥ for
              the Ummah.
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 ">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center ${social.color} hover:scale-110 transform transition-all duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span>•</span>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <span>•</span>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transform transition-all duration-300 z-40"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
