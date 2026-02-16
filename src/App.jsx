import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import { useEffect } from "react"
import { gsap } from "gsap"

function App() {
  useEffect(() => {
    // Page load animation
    gsap.fromTo("body", 
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    // Cleanup on unmount
    return () => {
      gsap.killTweensOf("body");
    };
  }, []);

  return (
    <div className="page-load-animation">
     <Nav/>
     <Hero/>
     <AboutMe/>
     <Footer/>
    </div>
  )
}

export default App
