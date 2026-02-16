import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animation presets
export const animations = {
  fadeIn: {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
  },
  fadeInLeft: {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
  },
  fadeInRight: {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
  },
  slideUp: {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
  }
};

// Staggered animation utility
export const staggeredFadeIn = (elements, options = {}) => {
  const defaults = {
    stagger: 0.2,
    from: { opacity: 0, y: 15 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    ...options
  };

  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (elements && elements.length > 0) {
      elements.forEach(el => {
        if (el) {
          gsap.set(el, { opacity: 1, x: 0, y: 0, clearProps: 'transform' });
          if (el.classList) el.classList.add('visible');
        }
      });
    }
    return null;
  }

  return gsap.fromTo(elements, defaults.from, {
    ...defaults.to,
    stagger: defaults.stagger,
    scrollTrigger: defaults.scrollTrigger
      ? {
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true,
          ...defaults.scrollTrigger,
        }
      : undefined,
    onStart: function() {
      // Add visible class when animation starts
      if (elements && elements.length > 0) {
        elements.forEach(el => {
          if (el && el.classList) {
            el.classList.add('visible');
          }
        });
      }
    },
    onComplete: function() {
      // Ensure visible class is maintained
      if (elements && elements.length > 0) {
        elements.forEach(el => {
          if (el && el.classList) {
            el.classList.add('visible');
          }
        });
      }
    }
  });
};

// Scroll-triggered animation
export const scrollAnimation = (element, animationType = 'fadeIn', options = {}) => {
  const animation = animations[animationType] || animations.fadeIn;

  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (element) {
      gsap.set(element, { opacity: 1, x: 0, y: 0, clearProps: 'transform' });
      if (element.classList) element.classList.add('visible');
    }
    return null;
  }
  
  return gsap.fromTo(element, animation.from, {
    ...animation.to,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      invalidateOnRefresh: true,
      ...options.scrollTrigger
    },
    onStart: function() {
      // Add visible class when animation starts
      if (element && element.classList) {
        element.classList.add('visible');
      }
    },
    onComplete: function() {
      // Ensure visible class is maintained
      if (element && element.classList) {
        element.classList.add('visible');
      }
    }
  });
};

// Skill bar animation
export const animateSkillBar = (element, width = "100%") => {
  return gsap.fromTo(element, 
    { width: "0%" },
    { 
      width: width, 
      duration: 1.5, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      onStart: function() {
        // Add visible class when animation starts
        if (element && element.classList) {
          element.classList.add('visible');
        }
      },
      onComplete: function() {
        // Ensure visible class is maintained
        if (element && element.classList) {
          element.classList.add('visible');
        }
      }
    }
  );
};

// Hero text reveal animation
export const heroTextReveal = (elements) => {
  const tl = gsap.timeline();
  
  tl.fromTo(elements, 
    { opacity: 0, y: 20 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: "power3.out",
      stagger: 0.3
    }
  );
  
  return tl;
};

// Card hover effect
export const cardHoverEffect = (element) => {
  const hoverAnimation = gsap.to(element, {
    scale: 1.05,
    y: -5,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    duration: 0.3,
    ease: "power2.out",
    paused: true
  });

  element.addEventListener('mouseenter', () => hoverAnimation.play());
  element.addEventListener('mouseleave', () => hoverAnimation.reverse());
  
  return hoverAnimation;
};

// Button ripple effect
export const buttonRipple = (event, button) => {
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  
  button.appendChild(ripple);
  
  gsap.fromTo(ripple,
    { scale: 0, opacity: 1 },
    { 
      scale: 4, 
      opacity: 0, 
      duration: 0.6, 
      ease: "power2.out",
      onComplete: () => ripple.remove()
    }
  );
};

// Parallax effect
export const parallaxEffect = (element, speed = 0.5) => {
  gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};

// Form validation shake animation
export const shakeAnimation = (element) => {
  return gsap.fromTo(element,
    { x: 0 },
    { 
      x: [-10, 10, -10, 10, 0], 
      duration: 0.5, 
      ease: "power2.out" 
    }
  );
};

// Success message slide in
export const successMessageSlide = (element) => {
  return gsap.fromTo(element,
    { opacity: 0, y: -20 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.4, 
      ease: "power2.out" 
    }
  );
};

// Clean up ScrollTrigger instances
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

// Refresh ScrollTrigger (useful for dynamic content)
export const refreshScrollTriggers = () => {
  ScrollTrigger.refresh();
};
