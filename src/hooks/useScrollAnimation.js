import { useEffect, useRef } from "react";
import {
  scrollAnimation,
  staggeredFadeIn,
  animateSkillBar,
  cardHoverEffect,
} from "../utils/animations";

export const useScrollAnimation = (animationType = "fadeIn", options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animation = scrollAnimation(element, animationType, options);

    return () => {
      if (animation && typeof animation.kill === "function") {
        animation.kill();
      }
    };
  }, [animationType, options]);

  return ref;
};

export const useStaggeredAnimation = (
  selector = ".animate-item",
  options = {},
) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (elements.length === 0) return;

    const animation = staggeredFadeIn(elements, {
      ...options,
      scrollTrigger: { trigger: container },
    });

    return () => {
      if (animation && typeof animation.kill === "function") {
        animation.kill();
      }
    };
  }, [selector, options]);

  return containerRef;
};

export const useSkillBarAnimation = (width = "100%") => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animation = animateSkillBar(element, width);

    return () => {
      if (animation && typeof animation.kill === "function") {
        animation.kill();
      }
    };
  }, [width]);

  return ref;
};

export const useCardHover = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const hoverAnimation = cardHoverEffect(element);

    // Add mouse enter/leave event listeners
    const handleMouseEnter = () => {
      hoverAnimation.play();
    };

    const handleMouseLeave = () => {
      hoverAnimation.reverse();
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      // Clean up event listeners
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      hoverAnimation.kill();
    };
  }, []);

  return ref;
};
