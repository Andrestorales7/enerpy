
import { useEffect } from 'react';

const AnimationHandler = () => {
  useEffect(() => {
    // Enhanced animation observer with better performance and smooth transitions
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add appear class for animation
            entry.target.classList.add('appear');
            
            // Add staggered animation for child elements if they exist
            const childElements = entry.target.querySelectorAll('.animated-child');
            childElements.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('appear');
              }, index * 100); // 100ms delay between each child
            });
            
            // Unobserve after animation to improve performance
            animationObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger 50px before element enters viewport
      }
    );

    // Enhanced hero animation observer
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('translate-y-10');
            heroObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    // Observe all animated elements
    const animatedSections = document.querySelectorAll('.animated-section');
    const heroElements = document.querySelectorAll('.hero-animate');

    animatedSections.forEach((el) => {
      animationObserver.observe(el);
    });

    heroElements.forEach((el) => {
      heroObserver.observe(el);
    });

    // Add smooth scroll behavior to all internal links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId) as HTMLElement;
          if (targetElement) {
            const navbarHeight = 80;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    // Cleanup function
    return () => {
      animationObserver.disconnect();
      heroObserver.disconnect();
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AnimationHandler;
