import { useEffect, useRef } from 'react';

/**
 * Adds the `is-visible` class to elements with the `reveal` class
 * when they scroll into view. Returns a ref to attach to a container;
 * if omitted, observes the whole document.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current ?? document;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>('.reveal'));
    if (nodes.length === 0) return;

    // Fallback: ensure content is visible even if observer doesn't fire
    // (e.g. when navigating to a page whose content is already in viewport)
    const fallback = setTimeout(() => {
      nodes.forEach((n) => n.classList.add('is-visible'));
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return ref;
}
