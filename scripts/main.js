
// Fade slides based on how much of each slide is visible
const slides = document.querySelectorAll(".story-slide");

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      // intersectionRatio = 0..1
      // Map to opacity range (feel free to tweak)
      const opacity = clamp(0.15 + entry.intersectionRatio * 0.85, 0.15, 1);
      entry.target.style.opacity = opacity.toFixed(3);
    }
  },
  {
    // Lots of thresholds = smoother fading
    threshold: Array.from({ length: 101 }, (_, i) => i / 100),
  }
);

slides.forEach((s) => observer.observe(s));
``
