(() => {
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-nav");
  const progressBar = document.querySelector(".scroll-progress span");
  let transitioning = false;

  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    menuButton.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !open);
    document.body.classList.toggle("menu-open", !open);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
    }
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 28);
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${scrollable > 0 ? window.scrollY / scrollable * 100 : 0}%`;
  }, { passive: true });

  document.querySelectorAll("[data-zoom-destination]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (transitioning) {
        event.preventDefault();
        return;
      }
      const destination = new URL(link.getAttribute("href"), window.location.href);
      if (destination.href === window.location.href) {
        event.preventDefault();
        closeMenu();
        return;
      }

      event.preventDefault();
      transitioning = true;
      closeMenu();
      const bounds = link.getBoundingClientRect();
      const layer = document.createElement("div");
      const card = document.createElement("div");
      card.className = "destination-card destination-zoom-card route-zoom-card";
      card.innerHTML = '<img alt=""><span class="destination-card-shade"></span><span class="destination-card-brand">A / C</span><span class="destination-card-copy"><span class="destination-card-label">A SPACE TO FEEL, HEAL & GROW</span><span class="destination-card-title"></span></span>';
      card.querySelector("img").src = link.dataset.transitionImage || "";
      card.querySelector(".destination-card-title").textContent = link.dataset.transitionTitle || link.textContent.trim();
      card.style.setProperty("--zoom-top", `${bounds.top}px`);
      card.style.setProperty("--zoom-left", `${bounds.left}px`);
      card.style.setProperty("--zoom-width", `${bounds.width}px`);
      card.style.setProperty("--zoom-height", `${bounds.height}px`);
      layer.className = "destination-zoom";
      layer.setAttribute("aria-hidden", "true");
      layer.append(card);
      document.body.append(layer);

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      requestAnimationFrame(() => requestAnimationFrame(() => layer.classList.add("is-opening")));
      window.setTimeout(() => window.location.assign(destination.href), reduceMotion ? 80 : 760);
    });
  });

  const hero = document.querySelector(".intro-landing");
  const heroImageFrame = hero?.querySelector(".hero-image-frame");
  const heroImages = hero ? [...hero.querySelectorAll(".hero-image-frame .hero-image")] : [];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const heroNavRevealProgress = 0.78;
  let heroScrollQueued = false;

  const updateHeroScroll = () => {
    heroScrollQueued = false;
    if (!hero || !heroImageFrame) return;

    if (reduceMotion.matches) {
      document.body.classList.add("hero-zoom-complete");
      document.body.classList.add("hero-nav-revealed");
      document.body.classList.add("hero-nav-visible");
      return;
    }

    const scrollRange = hero.offsetHeight - window.innerHeight;
    const progress = scrollRange > 0
      ? Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / scrollRange))
      : 0;
    const easedProgress = progress * progress * (3 - 2 * progress);
    const fitScale = Math.max(
      window.innerWidth / heroImageFrame.offsetWidth,
      window.innerHeight / heroImageFrame.offsetHeight
    ) + .04;

    hero.style.setProperty("--hero-zoom-progress", progress.toFixed(4));
    hero.style.setProperty("--hero-zoom-scale", (1 + (fitScale - 1) * easedProgress).toFixed(4));
    hero.style.setProperty("--hero-image-scale", (1 + easedProgress * .075).toFixed(4));
    hero.style.setProperty("--hero-image-top", `${35 + 15 * easedProgress}%`);
    hero.style.setProperty("--hero-copy-opacity", String(Math.max(0, 1 - progress * 1.45)));
    hero.style.setProperty("--hero-copy-shift", `${-24 * progress}px`);
    hero.style.setProperty("--hero-type-opacity", String(Math.max(0, 1 - progress * 1.12)));
    hero.style.setProperty("--hero-type-shift", `${-9 * progress}vh`);
    if (progress > 0) {
      hero.style.setProperty("--hero-pointer-x", "0px");
      hero.style.setProperty("--hero-pointer-y", "0px");
    }
    document.body.classList.toggle("hero-zoom-complete", progress >= .92);
    if (progress >= heroNavRevealProgress) {
      document.body.classList.add("hero-nav-revealed");
    }
    document.body.classList.toggle(
      "hero-nav-visible",
      progress >= heroNavRevealProgress || document.body.classList.contains("hero-nav-revealed")
    );
  };

  const queueHeroScrollUpdate = () => {
    if (heroScrollQueued) return;
    heroScrollQueued = true;
    window.requestAnimationFrame(updateHeroScroll);
  };

  window.addEventListener("scroll", queueHeroScrollUpdate, { passive: true });
  window.addEventListener("resize", queueHeroScrollUpdate);
  updateHeroScroll();

  const heroSlides = [
    {
      src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85",
      alt: "Quiet green landscape in warm morning light"
    },
    {
      src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
      alt: "A still lake opening onto a peaceful mountain landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
      alt: "Soft daylight filtering through a quiet woodland"
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
      alt: "An open landscape beneath a calm sky"
    }
  ];

  if (hero && heroImages.length === 2) {
    let activeImage = heroImages[0];
    let slideIndex = 0;

    heroImages[0].classList.add("is-visible");
    if (!reduceMotion.matches) {
      window.setInterval(() => {
        if (document.hidden) return;
        const nextIndex = (slideIndex + 1) % heroSlides.length;
        const nextSlide = heroSlides[nextIndex];
        const nextImage = activeImage === heroImages[0] ? heroImages[1] : heroImages[0];
        const preload = new Image();

        preload.onload = () => {
          nextImage.src = nextSlide.src;
          nextImage.alt = nextSlide.alt;
          nextImage.removeAttribute("aria-hidden");
          activeImage.setAttribute("aria-hidden", "true");
          nextImage.classList.add("is-visible");
          activeImage.classList.remove("is-visible");
          activeImage = nextImage;
          slideIndex = nextIndex;
        };
        preload.src = nextSlide.src;
      }, 5600);
    }

    if (window.matchMedia("(pointer: fine)").matches && !reduceMotion.matches) {
      hero.addEventListener("pointermove", (event) => {
        if (window.scrollY > 0) return;
        const bounds = hero.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - .5;
        const y = (event.clientY - bounds.top) / bounds.height - .5;
        hero.style.setProperty("--hero-pointer-x", `${x * 10}px`);
        hero.style.setProperty("--hero-pointer-y", `${y * 10}px`);
      }, { passive: true });
      hero.addEventListener("pointerleave", () => {
        hero.style.setProperty("--hero-pointer-x", "0px");
        hero.style.setProperty("--hero-pointer-y", "0px");
      });
    }
  }
})();
