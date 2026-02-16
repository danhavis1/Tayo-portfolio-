import { Dot } from "lucide-react";
import Drawer from "./Drawer";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Nav() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    {
      name: "Home",
      id: "home"
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Skills",
      id: "skills",
    },
    {
      name: "Achievements",
      id: "record",
    },
    {
      name: "Testimonials",
      id:"testimonials",

    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  useEffect(() => {
    // Animate nav on load
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    // Handle scroll effect
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-greenBg/90 backdrop-blur-md shadow-lg' : 'bg-greenBg/20'
      }`}
    >
      <div className="container mx-auto py-5 px-4 lg:px-8 flex justify-between items-center">
        <div className="flex items-center relative">
          <h1 className="font-semibold text-xl text-white transition-colors duration-300 hover:text-yellowBg">
            Ms.Temitayo
          </h1>
          <Dot className="text-yellowBg absolute -right-8.75"size={50} />
        </div>
        <div className="hidden lg:flex gap-6">
          {links.map((item, index) => (
            <a 
              href={`#${item.id}`} 
              key={item.id} 
              className="text-white text-sm relative group transition-colors duration-300 hover:text-yellowBg"
              onClick={(e) => handleSmoothScroll(e, item.id)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellowBg transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <div className="lg:hidden">
          <Drawer />
        </div>
      </div>
    </div>
  );
}
