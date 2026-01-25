import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatIDo from "./components/WhatIDo";
import TimeLine from "./components/TimeLine";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <TimeLine />
      <Projects />
      <Footer />
    </div>
  );
}
