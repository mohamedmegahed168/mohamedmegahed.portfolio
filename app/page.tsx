import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatIDo from "./components/WhatIDo";
import TimeLine from "./components/TimeLine";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <TimeLine />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
