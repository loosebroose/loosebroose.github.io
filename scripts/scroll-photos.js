

(() => {
  // Slides: include hero + story slides
  const slides = [
    document.querySelector(".hero"),
    ...document.querySelectorAll(".story-slide"),
  ].filter(Boolean);

  if (slides.length === 0) return;

  // Ensure hero participates in fade system if you want it to fade too:
  // (CSS targets .story-slide.is-active, but hero doesn't have that class.)
  // We'll just toggle is-active on hero too; it won't hurt.
  // Optionally, you can add `.hero.is-active { opacity: 1; }` in CSS if you
  // want hero to behave identically. Otherwise hero is always visible until you scroll.

  // Reduced motion support
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Make sure at least one slide is active on load
  slides.forEach((s, i) => s.classList.toggle("is-active", i === 0));

  let activeEl = slides[0];
  let prevEl = null;
  let prevTimer = null;

  const setActive = (nextEl) => {
    if (!nextEl || nextEl === activeEl) return;

    // Keep previous active briefly to guarantee overlap for cross-fade
    prevEl = activeEl;
    activeEl = nextEl;

    activeEl.classList.add("is-active");

    // In reduced motion mode, switch immediately (no overlap)
    if (prefersReduced) {
      if (prevEl) prevEl.classList.remove("is-active");
      return;
    }

    // Clear any prior timers to avoid race conditions
    if (prevTimer) window.clearTimeout(prevTimer);

    // Leave prev active just long enough for fade overlap
    prevTimer = window.setTimeout(() => {
      if (prevEl) prevEl.classList.remove("is-active");
      prevEl = null;
    }, 350); // should be < your CSS fade duration (e.g., 900ms)
  };

  const observer = new IntersectionObserver(
    (entries) => {
      // Pick the most visible intersecting slide
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      setActive(visible.target);
    },
    {
      root: null,
      threshold: [0.25, 0.5, 0.75],
    }
  );

  slides.forEach((s) => observer.observe(s));
})();

