(() => {
  "use strict";

  document.querySelectorAll(".carousel").forEach((root) => {
    const track = root.querySelector(".carousel-track");
    const slides = Array.from(root.querySelectorAll(".carousel-slide"));
    const prevBtn = root.querySelector(".carousel-prev");
    const nextBtn = root.querySelector(".carousel-next");
    const dotsWrap = root.querySelector(".carousel-dots");
    const dots = Array.from(root.querySelectorAll(".carousel-dot"));
    if (!track || slides.length <= 1) {
      if (prevBtn) prevBtn.hidden = true;
      if (nextBtn) nextBtn.hidden = true;
      if (dotsWrap) dotsWrap.hidden = true;
      return;
    }

    function currentIndex() {
      return Math.round(track.scrollLeft / track.clientWidth);
    }

    function updateActive() {
      const index = currentIndex();
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index === slides.length - 1;
    }

    function goTo(index) {
      const clamped = Math.max(0, Math.min(slides.length - 1, index));
      track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
    }

    if (prevBtn) prevBtn.addEventListener("click", () => goTo(currentIndex() - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => goTo(currentIndex() + 1));
    dots.forEach((dot, i) => dot.addEventListener("click", () => goTo(i)));

    let ticking = false;
    track.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    });

    updateActive();
  });
})();
