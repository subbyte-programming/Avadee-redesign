(() => {
  const pageJourney = [
    { page: "index.html", next: "about.html", title: "About Avadee", image: "https://avadeecounseling.com/wp-content/uploads/2015/12/Denise-2.jpeg" },
    { page: "about.html", next: "approach.html", title: "Your therapy", image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85" },
    { page: "approach.html", next: "individuals.html", title: "Individual support", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85" },
    { page: "individuals.html", next: "families.html", title: "Relationship support", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=85" },
    { page: "families.html", next: "faq.html", title: "Frequently asked questions", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85" },
    { page: "faq.html", next: "rates.html", title: "Rates & insurance", image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85" },
    { page: "rates.html", next: "contact.html", title: "Let's connect", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85" },
    { page: "contact.html", next: "index.html", title: "Avadee Counseling", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85" }
  ];
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const nextPage = pageJourney.find((entry) => entry.page === currentPage);
  let routeTransitioning = false;

  const backToTop = document.createElement("button");
  backToTop.className = "back-to-top";
  backToTop.type = "button";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.setAttribute("aria-hidden", "true");
  backToTop.tabIndex = -1;
  backToTop.innerHTML = '<span class="back-to-top-label" aria-hidden="true">BACK TO TOP</span><span class="back-to-top-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M12 19V5m-6 6 6-6 6 6"/></svg></span>';
  document.body.append(backToTop);

  let scrollUpdateQueued = false;
  const updateBackToTop = () => {
    scrollUpdateQueued = false;
    const visible = window.scrollY > 280;
    backToTop.classList.toggle("is-visible", visible);
    backToTop.setAttribute("aria-hidden", String(!visible));
    backToTop.tabIndex = visible ? 0 : -1;
  };

  window.addEventListener("scroll", () => {
    if (scrollUpdateQueued) return;
    scrollUpdateQueued = true;
    window.requestAnimationFrame(updateBackToTop);
  }, { passive: true });
  updateBackToTop();
  backToTop.addEventListener("click", () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      window.scrollTo(0, 0);
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.avadeeNavigateWithZoom = (href, title, image, source) => {
    if (routeTransitioning) return false;
    const destination = new URL(href, window.location.href);
    if (destination.href === window.location.href) return false;

    const bounds = source.getBoundingClientRect();
    const layer = document.createElement("div");
    const card = document.createElement("div");
    const picture = document.createElement("img");
    const shade = document.createElement("span");
    const brand = document.createElement("span");
    const copy = document.createElement("span");
    const label = document.createElement("span");
    const heading = document.createElement("span");

    layer.className = "destination-zoom";
    layer.setAttribute("aria-hidden", "true");
    card.className = "destination-card destination-zoom-card route-zoom-card scroll-route-card";
    picture.alt = "";
    picture.src = image;
    shade.className = "destination-card-shade";
    brand.className = "destination-card-brand";
    brand.textContent = "A / C";
    copy.className = "destination-card-copy";
    label.className = "destination-card-label";
    label.textContent = "A SPACE TO FEEL, HEAL & GROW";
    heading.className = "destination-card-title";
    heading.textContent = title;
    copy.append(label, heading);
    card.append(picture, shade, brand, copy);
    card.style.setProperty("--zoom-top", `${bounds.top}px`);
    card.style.setProperty("--zoom-left", `${bounds.left}px`);
    card.style.setProperty("--zoom-width", `${bounds.width}px`);
    card.style.setProperty("--zoom-height", `${bounds.height}px`);
    layer.append(card);
    document.body.append(layer);

    routeTransitioning = true;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => requestAnimationFrame(() => layer.classList.add("is-opening")));
    window.setTimeout(() => window.location.assign(destination.href), reducedMotion ? 80 : 900);
    return true;
  };

  const panel = document.querySelector("#primary-nav.menu-panel");
  if (!panel) return;

  if (!panel.querySelector(".menu-cards")) {
  const links = [...panel.querySelectorAll(":scope > a")];
  const primaryLinks = links.filter((link) => !link.classList.contains("menu-contact")).slice(0, 4);
  if (primaryLinks.length !== 4) return;

  const cardGrid = document.createElement("div");
  cardGrid.className = "menu-cards";
  const cardLabels = {
    "about.html": "ABOUT AVADEE",
    "approach.html": "YOUR THERAPY",
    "individuals.html": "INDIVIDUAL SUPPORT",
    "families.html": "RELATIONSHIP SUPPORT"
  };

  primaryLinks.forEach((link) => {
    const title = link.dataset.transitionTitle || link.textContent.trim();
    const image = document.createElement("img");
    image.className = "menu-card-image";
    image.src = link.dataset.transitionImage || "";
    image.alt = "";
    image.loading = "lazy";
    image.setAttribute("aria-hidden", "true");

    const shade = document.createElement("span");
    shade.className = "menu-card-shade";
    shade.setAttribute("aria-hidden", "true");

    const brand = document.createElement("span");
    brand.className = "menu-card-brand";
    brand.textContent = "A / C";
    brand.setAttribute("aria-hidden", "true");

    const copy = document.createElement("span");
    copy.className = "menu-card-copy";
    const label = document.createElement("span");
    label.className = "menu-card-label";
    label.textContent = cardLabels[link.getAttribute("href")] || "AVADEE COUNSELING";
    const heading = document.createElement("span");
    heading.className = "menu-card-title";
    heading.textContent = title;
    copy.append(label, heading);

    const arrow = document.createElement("span");
    arrow.className = "menu-card-arrow";
    arrow.textContent = "↗";
    arrow.setAttribute("aria-hidden", "true");

    link.classList.add("menu-card");
    link.setAttribute("aria-label", `${title} — ${label.textContent.toLowerCase()}`);
    link.replaceChildren(image, shade, brand, copy, arrow);
    cardGrid.append(link);
  });

  const home = document.createElement("a");
  home.className = "menu-card menu-card-home";
  home.href = "index.html";
  home.dataset.zoomDestination = "";
  home.dataset.transitionTitle = "Avadee Counseling";
  home.dataset.transitionImage = "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85";
  home.setAttribute("aria-label", "Avadee Counseling home");
  const homeImage = document.createElement("img");
  homeImage.className = "menu-card-image";
  homeImage.src = home.dataset.transitionImage;
  homeImage.alt = "";
  homeImage.loading = "lazy";
  homeImage.setAttribute("aria-hidden", "true");
  const homeShade = document.createElement("span");
  homeShade.className = "menu-card-shade";
  homeShade.setAttribute("aria-hidden", "true");
  const homeBrand = document.createElement("span");
  homeBrand.className = "menu-card-brand";
  homeBrand.textContent = "A / C";
  homeBrand.setAttribute("aria-hidden", "true");
  const homeCopy = document.createElement("span");
  homeCopy.className = "menu-card-copy";
  const homeLabel = document.createElement("span");
  homeLabel.className = "menu-card-label";
  homeLabel.textContent = "A SPACE TO FEEL, HEAL & GROW";
  const homeTitle = document.createElement("span");
  homeTitle.className = "menu-card-title";
  homeTitle.textContent = "Avadee Counseling";
  homeCopy.append(homeLabel, homeTitle);
  const homeArrow = document.createElement("span");
  homeArrow.className = "menu-card-arrow";
  homeArrow.textContent = "↗";
  homeArrow.setAttribute("aria-hidden", "true");
  home.append(homeImage, homeShade, homeBrand, homeCopy, homeArrow);
  home.classList.add("menu-card-home");
  cardGrid.append(home);

  const quickLinks = document.createElement("div");
  quickLinks.className = "menu-quicklinks";
  const quickLabel = document.createElement("span");
  quickLabel.textContent = "MORE INFORMATION";
  quickLinks.append(quickLabel, ...links.filter((link) => !primaryLinks.includes(link)));
  panel.append(cardGrid, quickLinks);
  if (document.body.classList.contains("landing-page")) {
    panel.classList.add("landing-card-navigation");
    panel.querySelector(".menu-label").textContent = "EXPLORE AVADEE COUNSELING · FIND YOUR NEXT STEP";
    document.querySelector(".intro-landing").insertAdjacentElement("afterend", panel);

    if ("IntersectionObserver" in window) {
      const cardsObserver = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      }, { threshold: 0.12 });
      cardsObserver.observe(panel);
    } else {
      panel.classList.add("is-visible");
    }
  } else {
    document.body.append(panel);
  }
  }

  if (nextPage && !document.querySelector("[data-inner-slider]") && !document.body.classList.contains("landing-page")) {
    const section = document.createElement("section");
    section.className = "scroll-route-section";
    section.setAttribute("aria-label", `Continue to ${nextPage.title}`);
    const link = document.createElement("a");
    link.className = "scroll-route-link";
    link.href = nextPage.next;
    link.dataset.zoomDestination = "";
    link.dataset.transitionTitle = nextPage.title;
    link.dataset.transitionImage = nextPage.image;
    const img = document.createElement("img");
    img.src = nextPage.image;
    img.alt = "";
    img.loading = "lazy";
    const shade = document.createElement("span");
    shade.className = "scroll-route-shade";
    const caption = document.createElement("span");
    caption.className = "scroll-route-caption";
    caption.textContent = "KEEP GOING · SCROLL TO CONTINUE";
    const title = document.createElement("span");
    title.className = "scroll-route-title";
    title.textContent = nextPage.title;
    const arrow = document.createElement("span");
    arrow.className = "scroll-route-arrow";
    arrow.textContent = "↗";
    link.append(img, shade, caption, title, arrow);
    section.append(link);

    const endContent = document.querySelector(".connect-screen") || document.querySelector(".info-main");
    if (endContent) {
      endContent.insertAdjacentElement("afterend", section);
      link.addEventListener("wheel", (event) => {
        if (event.deltaY <= 0 || event.ctrlKey) return;
        event.preventDefault();
        window.avadeeNavigateWithZoom(nextPage.next, nextPage.title, img.currentSrc || img.src, link);
      }, { passive: false });
    }
  }

  if (document.body.classList.contains("landing-page")) {
    const cardPanel = document.querySelector(".landing-card-navigation");
    const source = cardPanel?.querySelector(".menu-card-home");
    if (source && nextPage) {
      cardPanel.addEventListener("wheel", (event) => {
        const rect = cardPanel.getBoundingClientRect();
        const atEnd = rect.bottom <= window.innerHeight + 40;
        if (event.deltaY <= 0 || !atEnd || event.ctrlKey) return;
        event.preventDefault();
        window.avadeeNavigateWithZoom(nextPage.next, nextPage.title, nextPage.image, source);
      }, { passive: false });
    }
  }
})();
