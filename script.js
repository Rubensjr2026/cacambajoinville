(() => {
  const counters = [...document.querySelectorAll('[data-count]')];
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const format = new Intl.NumberFormat('pt-BR');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      observer.unobserve(el);
      const target = Number(el.dataset.count);
      const start = performance.now();
      const tick = now => {
        const progress = Math.min((now - start) / 1800, 1);
        el.textContent = format.format(Math.round(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, {threshold: 0.4});
  counters.forEach(el => observer.observe(el));
})();
