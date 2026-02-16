import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { useEffect, lazy, Suspense } from "react";
import { gsap } from "gsap";
import SuspenseUi from "./components/SuspenseUi";
const Hero = lazy(() => import("./components/Hero"));
const AboutMe = lazy(() => import("./components/AboutMe"));

function App() {
  useEffect(() => {
    // Page load animation
    gsap.fromTo(
      "body",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" },
    );

    // Cleanup on unmount
    return () => {
      gsap.killTweensOf("body");
    };
  }, []);

  return (
    <Suspense fallback={<SuspenseUi />}>
      <div className="page-load-animation">
        <Nav />
        <Hero />
        <AboutMe />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
