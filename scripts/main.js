
document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".fade-on-scroll");

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target;

        // Different minimum opacity for hero vs slides
        const isHero = el.classList.contains("hero-content");
        const minOpacity = isHero ? 0 : 0.15; // hero can fade to 0, slides to 0.15

        const opacity = clamp(minOpacity + entry.intersectionRatio * (1 - minOpacity), minOpacity, 1);
        el.style.opacity = opacity.toFixed(3);
      }
    },
    {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    }
  );

  els.forEach((el) => observer.observe(el));
});
