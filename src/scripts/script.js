document.addEventListener('DOMContentLoaded', () => {
  setupLoader();
  setupReveal();
});

function setupLoader() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const delay = prefersReducedMotion ? 0 : 500;

  window.addEventListener(
    'load',
    () => {
      window.setTimeout(() => {
        document.body.classList.add('is-loaded');
      }, delay);
    },
    { once: true }
  );
}

function setupReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  items.forEach((item) => observer.observe(item));
}