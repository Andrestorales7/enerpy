
import { useEffect } from 'react';

const AnimationHandler = () => {
  useEffect(() => {
    // Initialize animation observer for elements with .animated-section class
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            
            // Optional: unobserve after animation is triggered
            // animationObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // Trigger when at least 15% of the element is visible
        rootMargin: '0px 0px -10% 0px' // Trigger a bit before the element is in view
      }
    );

    // Observe all elements with .animated-section class
    document.querySelectorAll('.animated-section').forEach((el) => {
      animationObserver.observe(el);
    });

    // Cleanup
    return () => {
      document.querySelectorAll('.animated-section').forEach((el) => {
        animationObserver.unobserve(el);
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AnimationHandler;
