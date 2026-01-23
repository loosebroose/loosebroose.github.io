
(() => {
  const hero = document.querySelector(".hero");
  const photoLayer = document.querySelector(".hero-photo");
  const steps = document.querySelectorAll(".scroll-steps .step");

  if (!hero || !photoLayer || steps.length === 0) return;

  // Set an initial photo from the first step
  const first = steps[0].dataset.photo;
  if (first) hero.style.setProperty("--hero-photo", `url("${first}")`);

  // Preload for smoother swaps
  steps.forEach(step => {
    const src = step.dataset.photo;
    if (!src) return;
    const img = new Image();
    img.src = src;
  });

  const setPhoto = (src) => {
    if (!src) return;

    // Fade out, swap, fade in
    photoLayer.classList.add("is-fading");
    window.setTimeout(() => {
      hero.style.setProperty("--hero-photo", `url("${src}")`);
      // fade back in next frame
      requestAnimationFrame(() => photoLayer.classList.remove("is-fading"));
    }, 140);
  };

  const observer = new IntersectionObserver((entries) => {
    // pick the most visible intersecting step
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    const src = visible.target.dataset.photo;
    setPhoto(src);
  }, {
    root: null,
    threshold: [0.25, 0.5, 0.75],
  });

  steps.forEach(step => observer.observe(step));
})();
