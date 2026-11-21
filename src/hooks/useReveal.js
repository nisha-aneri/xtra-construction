import { useEffect } from 'react';

/**
 * Adds the `is-visible` class to every element carrying `data-reveal`
 * once it enters the viewport. Elements start hidden in CSS and are
 * revealed with a short stagger, which mirrors the theme's scroll animations.
 */
export function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!items.length) return undefined;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      items.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}
