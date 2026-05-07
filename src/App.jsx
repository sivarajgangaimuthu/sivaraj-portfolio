import About from "./components/About";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import ExperienceEducation from "./components/ExperienceEducation";
import FloatingSocials from "./components/FloatingSocials";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <FloatingSocials />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
