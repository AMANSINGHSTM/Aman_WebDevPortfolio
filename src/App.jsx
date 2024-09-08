import AboutMe from "./components/AboutMe/AboutMe";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContextMe from "./components/ContextMe/ContextMe";
import Footer from "./components/Footer/Footer";
import GoToTheTop from "./components/GoToTheTop/GoToTheTop";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <ContextMe />
      <Footer />
      <GoToTheTop />
    </>
  );
}

export default App;
