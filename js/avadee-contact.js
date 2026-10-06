(() => {
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-nav");
  const form = document.querySelector("#contact-form");
  const formNote = document.querySelector("#form-note");
  const progressBar = document.querySelector(".scroll-progress span");
  let navigating = false;

  document.querySelectorAll('a[href="contact.html"]').forEach((link) => {
    link.setAttribute("aria-current", "page");
  });

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

  const updateScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 28);
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${scrollable > 0 ? window.scrollY / scrollable * 100 : 0}%`;
  };
  window.addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();

  document.querySelectorAll("[data-zoom-destination]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (navigating) {
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
      navigating = true;
      closeMenu();
      const bounds = link.getBoundingClientRect();
      const layer = document.createElement("div");
      const card = document.createElement("div");
      const image = link.dataset.transitionImage || "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85";
      layer.className = "destination-zoom";
      layer.setAttribute("aria-hidden", "true");
      card.className = "destination-card destination-zoom-card route-zoom-card";
      card.innerHTML = '<img alt=""><span class="destination-card-shade"></span><span class="destination-card-brand">A / C</span><span class="destination-card-copy"><span class="destination-card-label">A SPACE TO FEEL, HEAL & GROW</span><span class="destination-card-title"></span></span>';
      card.querySelector("img").src = image;
      card.querySelector(".destination-card-title").textContent = link.dataset.transitionTitle || link.textContent.trim();
      card.style.setProperty("--zoom-top", `${bounds.top}px`);
      card.style.setProperty("--zoom-left", `${bounds.left}px`);
      card.style.setProperty("--zoom-width", `${bounds.width}px`);
      card.style.setProperty("--zoom-height", `${bounds.height}px`);
      layer.append(card);
      document.body.append(layer);

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      requestAnimationFrame(() => requestAnimationFrame(() => layer.classList.add("is-opening")));
      window.setTimeout(() => window.location.assign(destination.href), reduceMotion ? 80 : 760);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    formNote.textContent = "Your note has not been sent. This preview has no secure form service connected yet.";
  });

  document.querySelectorAll("[data-current-year]").forEach((year) => {
    year.textContent = new Date().getFullYear();
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".connect-screen .reveal").forEach((element) => observer.observe(element));
  }
})();
