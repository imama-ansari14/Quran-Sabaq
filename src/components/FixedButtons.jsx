import { ArrowUp, MessageCircle } from "lucide-react";

const FixedButtons = () => {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923002207349"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-24 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-green-600 transform transition-all duration-300 z-40"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>

      {/* Scroll To Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transform transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </>
  );
};

export default FixedButtons;