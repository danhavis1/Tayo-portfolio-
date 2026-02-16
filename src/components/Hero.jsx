import { Download, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import { heroTextReveal, buttonRipple } from "../utils/animations";

export default function Hero() {
  const heroRef = useRef(null);
  const textRefs = useRef([]);
  const avatarRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    // Animate hero text on load
    const textElements = textRefs.current.filter((ref) => ref);
    heroTextReveal(textElements);

    // Parallax effect for background
    // (disabled) Parallax can move the Hero section and expose the background below,
    // creating a gap between sections on some screens.

    // Avatar slide-in animation
    if (avatarRef.current) {
      // Simple fade-in for avatar
      avatarRef.current.style.opacity = "0";
      setTimeout(() => {
        avatarRef.current.style.transition = "opacity 1s ease-out";
        avatarRef.current.style.opacity = "1";
      }, 800);
    }

    // Button ripple effects
    buttonRefs.current.forEach((button) => {
      if (button) {
        const handleClick = (e) => buttonRipple(e, button);
        button.addEventListener("click", handleClick);
        return () => button.removeEventListener("click", handleClick);
      }
    });
  }, []);

  const addToTextRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  const addToButtonRefs = (el) => {
    if (el && !buttonRefs.current.includes(el)) {
      buttonRefs.current.push(el);
    }
  };

  return (
    <div className="heroBg py-8" id="home" ref={heroRef}>
      <div className="container mx-auto px-4 lg:px-8 lg:grid grid-cols-2 gap-4 min-h-dvh">
        <div className="flex flex-col pt-50 lg:pt-0 lg:justify-center lg:item-center h-full">
          <p className="text-white font-medium" ref={addToTextRefs}>
            Welcome I'm,
          </p>
          <div className="space-y-6 mb-4">
            <h1
              className="text-4xl lg:text-[3.875rem] font-bold text-white animate-item"
              ref={addToTextRefs}
            >
              Ms. Temitayo Olayinka
            </h1>
            <p
              className="text-yellowBg font-semibold animate-item"
              ref={addToTextRefs}
            >
              Teacher & Academic Coach
            </p>
          </div>
          <p
            className="hidden lg:block text-white text-[1rem] animate-item"
            ref={addToTextRefs}
          >
            Helping students excel academically and build <br />
            confidence through personalized learning strategies.
          </p>
          <p
            className="lg:hidden text-white text-[1.3rem] animate-item"
            ref={addToTextRefs}
          >
            Helping students excel academically and build confidence through
            personalized learning strategies.
          </p>
          <div className="mt-8 flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-start">
            <a href="mailto:ccccc@gmail.com">
              <button
                className="btn btn-animate border-none bg-yellowBg text-white h-12 w-[90vw] lg:w-56 rounded-md"
                ref={addToButtonRefs}
              >
                <Mail /> Get In Touch
              </button>
            </a>
            <a href="https://gmail.com" target="_blank">
              <button
                className="btn btn-animate border bg-transparent text-white h-12 w-[90vw] lg:w-56 rounded-md"
                ref={addToButtonRefs}
              >
                <Download /> Download Resume
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col pt-20 lg:pt-10 lg:justify-center lg:item-center h-full">
          <div
            className="w-auto xl:w-[600px] h-[400px] xl:h-auto mx-auto lg:mx-0 lg:ml-auto"
            ref={avatarRef}
          >
            <img
              src="/avatar2.png"
              alt="avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
