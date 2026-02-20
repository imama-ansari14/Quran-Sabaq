import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Fee from "./components/Fees";
import Testimonials from "./components/Testimonals";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Fee />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
