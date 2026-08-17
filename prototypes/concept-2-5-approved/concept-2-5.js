const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#primary-nav");
const announcement = document.querySelector("[data-announcement]");
const announcementClose = document.querySelector("[data-announcement-close]");
const megaItems = Array.from(document.querySelectorAll(".mega-item"));
const megaTriggers = Array.from(document.querySelectorAll(".mega-trigger"));
const counters = Array.from(document.querySelectorAll("[data-counter-end]"));
const staticForms = Array.from(document.querySelectorAll("[data-static-form]"));
const heroVideos = Array.from(document.querySelectorAll("[data-hero-video]"));
const testimonialSlider = document.querySelector("[data-testimonial-slider]");
const testimonialSlides = testimonialSlider ? Array.from(testimonialSlider.querySelectorAll("[data-testimonial-slide]")) : [];
const testimonialDots = testimonialSlider ? Array.from(testimonialSlider.querySelectorAll("[data-testimonial-dot]")) : [];
const testimonialPrevious = testimonialSlider?.querySelector("[data-testimonial-prev]");
const testimonialNext = testimonialSlider?.querySelector("[data-testimonial-next]");
const reducedMotionQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
let activeTestimonialIndex = 0;
let testimonialTimer = null;

function syncHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

function syncMenuState(isOpen) {
  header?.classList.toggle("is-menu-open", isOpen);
}

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

function enableNavHover() {
  document.documentElement.classList.add("nav-hover-ready");
}

window.addEventListener("pointermove", enableNavHover, { passive: true });
window.addEventListener("mousemove", enableNavHover, { passive: true });

window.addEventListener("pageshow", () => {
  document.documentElement.classList.remove("nav-hover-ready");
  closeMegaItems();

  if (document.activeElement instanceof HTMLElement && document.activeElement.closest(".mega-item")) {
    document.activeElement.blur();
  }
});

function isHeroVideoVisible(video) {
  return window.getComputedStyle(video).display !== "none";
}

function playHeroVideo(video) {
  if (!(video instanceof HTMLVideoElement)) {
    return Promise.resolve();
  }

  video.defaultMuted = true;
  video.muted = true;
  video.playsInline = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");

  if (!isHeroVideoVisible(video)) {
    video.pause();
    return Promise.resolve();
  }

  const playback = video.play();

  if (playback?.catch) {
    return playback.catch(() => {});
  }

  return Promise.resolve();
}

function playHeroVideos() {
  return Promise.all(heroVideos.map(playHeroVideo));
}

if (heroVideos.length) {
  const unlockHeroVideo = () => {
    playHeroVideos().then(() => {
      const visibleVideoIsPlaying = heroVideos.some((video) => isHeroVideoVisible(video) && !video.paused);

      if (visibleVideoIsPlaying) {
        document.removeEventListener("touchstart", unlockHeroVideo);
        document.removeEventListener("pointerdown", unlockHeroVideo);
        document.removeEventListener("click", unlockHeroVideo);
        window.removeEventListener("scroll", unlockHeroVideo);
      }
    });
  };

  playHeroVideos();
  heroVideos.forEach((video) => {
    video.addEventListener("loadedmetadata", () => playHeroVideo(video), { once: true });
    video.addEventListener("loadeddata", () => playHeroVideo(video), { once: true });
    video.addEventListener("canplay", () => playHeroVideo(video));
  });
  window.addEventListener("load", playHeroVideos, { once: true });
  window.addEventListener("pageshow", playHeroVideos);
  document.addEventListener("touchstart", unlockHeroVideo, { passive: true });
  document.addEventListener("pointerdown", unlockHeroVideo);
  document.addEventListener("click", unlockHeroVideo);
  window.addEventListener("scroll", unlockHeroVideo, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      playHeroVideos();
    }
  });

  window.setTimeout(playHeroVideos, 400);
  window.setTimeout(playHeroVideos, 1200);
}

announcementClose?.addEventListener("click", () => {
  announcement?.setAttribute("hidden", "");
});

function closeMegaItems(exceptItem = null) {
  megaItems.forEach((item) => {
    if (item === exceptItem) {
      return;
    }

    item.classList.remove("is-active");
    item.querySelector(".mega-trigger")?.setAttribute("aria-expanded", "false");
  });
}

function formatCounterValue(value, format) {
  const roundedValue = Math.round(value);

  if (format === "plain") {
    return String(roundedValue);
  }

  return new Intl.NumberFormat("en-US").format(roundedValue);
}

function animateCounter(counter) {
  if (counter.dataset.counterAnimated === "true") {
    return;
  }

  const valueElement = counter.querySelector("[data-counter-value]");
  const startValue = Number.parseFloat(counter.dataset.counterStart || "0");
  const endValue = Number.parseFloat(counter.dataset.counterEnd || valueElement?.textContent || "0");
  const duration = Number.parseInt(counter.dataset.counterDuration || "1300", 10);
  const format = counter.dataset.counterFormat || "number";

  counter.dataset.counterAnimated = "true";

  if (
    !valueElement ||
    Number.isNaN(startValue) ||
    Number.isNaN(endValue) ||
    duration <= 0 ||
    reducedMotionQuery?.matches
  ) {
    if (valueElement && !Number.isNaN(endValue)) {
      valueElement.textContent = formatCounterValue(endValue, format);
    }

    return;
  }

  const startedAt = performance.now();
  valueElement.textContent = formatCounterValue(startValue, format);

  function tick(timestamp) {
    const elapsed = timestamp - startedAt;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = startValue + (endValue - startValue) * easedProgress;

    valueElement.textContent = formatCounterValue(currentValue, format);

    if (progress < 1) {
      requestAnimationFrame(tick);
      return;
    }

    valueElement.textContent = formatCounterValue(endValue, format);
  }

  requestAnimationFrame(tick);
}

if (counters.length) {
  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          animateCounter(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.35 }
    );

    counters.forEach((counter) => counterObserver.observe(counter));
  } else {
    counters.forEach(animateCounter);
  }
}

staticForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const status = form.querySelector("[data-form-status]");

    if (status) {
      status.textContent = form.dataset.successMessage || "Thank you. Your information has been received.";
    }

    form.reset();
  });
});

function showTestimonial(index) {
  if (!testimonialSlides.length) {
    return;
  }

  activeTestimonialIndex = (index + testimonialSlides.length) % testimonialSlides.length;

  testimonialSlides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === activeTestimonialIndex;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  testimonialDots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === activeTestimonialIndex;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-pressed", String(isActive));
  });
}

function stopTestimonialAutoscroll() {
  if (!testimonialTimer) {
    return;
  }

  window.clearInterval(testimonialTimer);
  testimonialTimer = null;
}

function startTestimonialAutoscroll() {
  const delay = Number.parseInt(testimonialSlider?.dataset.testimonialAutoscroll || "0", 10);

  if (
    !testimonialSlider ||
    testimonialSlides.length < 2 ||
    Number.isNaN(delay) ||
    delay <= 0 ||
    reducedMotionQuery?.matches
  ) {
    return;
  }

  stopTestimonialAutoscroll();
  testimonialTimer = window.setInterval(() => {
    showTestimonial(activeTestimonialIndex + 1);
  }, delay);
}

if (testimonialSlides.length) {
  showTestimonial(0);

  testimonialPrevious?.addEventListener("click", () => {
    showTestimonial(activeTestimonialIndex - 1);
    startTestimonialAutoscroll();
  });

  testimonialNext?.addEventListener("click", () => {
    showTestimonial(activeTestimonialIndex + 1);
    startTestimonialAutoscroll();
  });

  testimonialDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showTestimonial(index);
      startTestimonialAutoscroll();
    });
  });

  testimonialSlider?.addEventListener("mouseenter", stopTestimonialAutoscroll);
  testimonialSlider?.addEventListener("mouseleave", startTestimonialAutoscroll);
  testimonialSlider?.addEventListener("focusin", stopTestimonialAutoscroll);
  testimonialSlider?.addEventListener("focusout", (event) => {
    if (testimonialSlider.contains(event.relatedTarget)) {
      return;
    }

    startTestimonialAutoscroll();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopTestimonialAutoscroll();
      return;
    }

    startTestimonialAutoscroll();
  });

  startTestimonialAutoscroll();
}

menuButton?.addEventListener("click", () => {
  const nextState = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(nextState));
  navLinks?.classList.toggle("is-open", nextState);
  syncMenuState(nextState);

  if (!nextState) {
    closeMegaItems();
  }
});

megaTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".mega-item");
    const nextState = trigger.getAttribute("aria-expanded") !== "true";

    closeMegaItems(item);
    item?.classList.toggle("is-active", nextState);
    trigger.setAttribute("aria-expanded", String(nextState));
  });
});

navLinks?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuButton?.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
    syncMenuState(false);
    closeMegaItems();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menuButton?.setAttribute("aria-expanded", "false");
    navLinks?.classList.remove("is-open");
    syncMenuState(false);
    closeMegaItems();
  }
});
