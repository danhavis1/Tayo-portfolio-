import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);
  const timelineRef = useRef(null);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Achievements", id: "record" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    // Create timeline for drawer animation
    const tl = gsap.timeline({ paused: true });
    
    // Overlay fade in
    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    });
    
    // Drawer slide in
    tl.fromTo(drawerRef.current,
      { x: "100%" },
      { 
        x: "0%", 
        duration: 0.4, 
        ease: "power3.out",
        onStart: () => {
          drawerRef.current.style.display = "block";
        }
      },
      "-=0.2"
    );

    // Links staggered animation
    tl.fromTo(".drawer-link",
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.3, 
        stagger: 0.1,
        ease: "power2.out"
      },
      "-=0.2"
    );

    timelineRef.current = tl;

    // Initialize overlay and drawer states
    gsap.set(overlayRef.current, { opacity: 0, display: "none" });
    gsap.set(drawerRef.current, { x: "100%", display: "none" });

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  const toggleDrawer = () => {
    if (isOpen) {
      // Close drawer
      timelineRef.current.reverse();
    } else {
      // Open drawer
      timelineRef.current.play();
    }
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    toggleDrawer();
  };

  return (
    <>
      <button 
        onClick={toggleDrawer}
        className="text-white transition-colors duration-300 hover:text-yellowBg focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 z-40 h-full"
        onClick={toggleDrawer}
        style={{ display: "none" }}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl z-50"
        style={{ display: "none" }}
      >
        <div className="p-6 h-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-deepDark">Menu</h2>
            <button
              onClick={toggleDrawer}
              className="text-deepDark transition-colors duration-300 hover:text-yellowBg focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="drawer-link block py-3 px-4 text-deepDark font-medium rounded-lg transition-all duration-300 hover:bg-yellowBg/10 hover:text-yellowBg hover:translate-x-2"
                style={{ display: "block" }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
