(() => {
  const photo = (id, width = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
  const pages = {
    about: {
      title: "Meet Ava D. Phillips, MS, LMFT.",
      eyebrow: "ABOUT AVADEE COUNSELING",
      intro: "Ava is a California-licensed Marriage and Family Therapist who has served her community since 2001. Her work is grounded in hope, empathy, honest reflection, and care shaped around each person.",
      image: "https://avadeecounseling.com/wp-content/uploads/2015/12/Denise-2.jpeg",
      imageAlt: "Portrait of the therapist at Avadee Counseling",
      chapter: "MEET AVA",
      storyTitle: "Therapy shaped around you—not a template.",
      story: "Ava D. Phillips, MS, LMFT has worked in the mental health field for more than 20 years and has supported people across ages, ethnicities, and socioeconomic backgrounds. She offers a safe, productive setting where you can explore your strengths and decide on next steps that fit your life. Her work emphasizes hope, clarity, empathy, and validation.",
      chapters: [
        {
          label: "MORE THAN 20 YEARS IN MENTAL HEALTH",
          title: "Experience grounded in human connection.",
          body: "Ava has served the community in the mental health field for over two decades. She has had the privilege of working with people from many ages and backgrounds, offering support without assuming every person's story or goals are the same.",
          image: photo("photo-1470770841072-f978cf4d019e", 1400),
          alt: "A quiet mountain lake opening into a broad, peaceful landscape"
        },
        {
          label: "CARE THAT FITS YOUR GOALS",
          title: "There is no one-size-fits-all therapy.",
          body: "Ava customizes interventions and the therapeutic approach to your needs and goals. Through empathy, validation, and thoughtful reality testing, she helps you draw on your own insight and discover steps that feel possible for you.",
          image: photo("photo-1448375240586-882707db888b", 1400),
          alt: "A gentle woodland path winding between tall green trees"
        }
      ],
      slides: [
        { image: photo("photo-1470252649378-9c29740c9fa8", 1100), alt: "Warm sunlight over a peaceful open landscape", label: "HOPE AND CLARITY", title: "Find your next step.", caption: "A supportive place to explore what could help you move forward." },
        { image: photo("photo-1470770841072-f978cf4d019e", 1100), alt: "A still lake surrounded by quiet mountains", label: "YOUR OWN STRENGTHS", title: "You have a place to begin.", caption: "Therapy can help you reconnect with strengths you already carry." },
        { image: photo("photo-1448375240586-882707db888b", 1100), alt: "A gentle path winding between tall trees", label: "PERSONALIZED CARE", title: "A plan made with you.", caption: "Your needs, hopes, and goals help shape the work together." }
      ],
      next: "approach",
      nextLabel: "Explore our approach"
    },
    approach: {
      title: "A balanced, thoughtful approach to therapy.",
      eyebrow: "YOUR THERAPY",
      intro: "Therapy at Avadee Counseling combines empathy, nurturing, and encouragement with honest reflection. Together, you can look at how thoughts affect feelings and behavior, then shape a plan around your strengths, needs, hopes, and goals.",
      image: photo("photo-1470252649378-9c29740c9fa8"),
      imageAlt: "Sunlight breaking through the clouds over a quiet landscape",
      chapter: "IN PRACTICE",
      storyTitle: "Honest support, with hope for change.",
      story: "Ava describes her practice as balanced and humanistic. She offers empathy, nurturing, encouragement, and hope, while being willing to reflect on thoughts that may contribute to anxiety, depression, or confusion. Therapy provides a safe, neutral ground for individuals and families to share feelings and discover strengths.",
      chapters: [
        {
          label: "IN TREATMENT",
          title: "Understand the link between thoughts and feelings.",
          body: "The work explores how thoughts can shape feelings, actions, and reactions. By noticing those connections together, you can better understand what is happening and identify ways to respond to the stressors in your life.",
          image: photo("photo-1500530855697-b586d89ba3ee", 1400),
          alt: "An open landscape with a path stretching toward distant hills"
        },
        {
          label: "MY COMMITMENT",
          title: "Build a plan around your strengths.",
          body: "Ava works with you to form a plan for change based on your strengths, needs, hopes, and desires. Her commitment is to help you recognize what you already carry and move toward the life you want with greater clarity and confidence.",
          image: photo("photo-1441974231531-c6227db76b6e", 1400),
          alt: "Soft daylight filtering through a quiet forest"
        }
      ],
      slides: [
        { image: photo("photo-1441974231531-c6227db76b6e", 1100), alt: "Sunbeams passing through a forest canopy", label: "01 / LISTENING", title: "First, we make space.", caption: "Your experience gets to be heard in your own words." },
        { image: photo("photo-1500530855697-b586d89ba3ee", 1100), alt: "A winding path through a sunlit open landscape", label: "02 / REFLECTING", title: "Then, we get curious.", caption: "Together, we can explore what might be underneath the hard parts." },
        { image: photo("photo-1470770841072-f978cf4d019e", 1100), alt: "Mountains reflected in a still lake", label: "03 / FINDING STRENGTH", title: "At your own pace.", caption: "We make room for hope and change without rushing your story." }
      ],
      next: "individuals",
      nextLabel: "Explore individual support"
    },
    individuals: {
      title: "Support for depression, anxiety, and more.",
      eyebrow: "INDIVIDUAL THERAPY",
      intro: "Depression and anxiety can affect how you think, feel, and take part in everyday life. Therapy offers validation, perspective, and practical ways to work with thoughts and feelings that may be keeping you stuck.",
      image: photo("photo-1500530855697-b586d89ba3ee"),
      imageAlt: "A broad, open landscape beneath a calm sky",
      chapter: "DEPRESSION & ANXIETY",
      storyTitle: "Reaching out is a courageous first step.",
      story: "Avadee Counseling focuses on helping people work through depression and anxiety symptoms. Counseling can help you understand what you are experiencing, develop coping skills, and work toward renewed motivation, perspective, and wellbeing. Treatment is tailored to your needs and goals.",
      chapters: [
        {
          label: "UNDERSTANDING WHAT YOU FEEL",
          title: "Your experience deserves to be understood.",
          body: "Depression and anxiety can be difficult for other people to see, and their effects may be misunderstood. Therapy offers a place to talk through what has been happening and consider how thoughts and feelings affect daily life.",
          image: photo("photo-1470252649378-9c29740c9fa8", 1400),
          alt: "Warm first light falling over a broad green field"
        },
        {
          label: "CHRISTIAN COUNSELING",
          title: "Faith can be part of your support.",
          body: "For clients who want a Christian perspective, faith-based counseling can incorporate Christian beliefs and experience into the work. Ava meets clients where they are in their faith journey and uses their beliefs as part of a supportive approach to healing and restoration.",
          image: photo("photo-1470770841072-f978cf4d019e", 1400),
          alt: "Still water and distant mountains beneath a soft open sky"
        }
      ],
      slides: [
        { image: photo("photo-1470252649378-9c29740c9fa8", 1100), alt: "A quiet field warmed by the first light of morning", label: "DEPRESSION & ANXIETY", title: "Feel heard and understood.", caption: "Explore the thoughts and feelings affecting your everyday life." },
        { image: photo("photo-1448375240586-882707db888b", 1100), alt: "A peaceful trail winding through the trees", label: "COPING SKILLS", title: "Find tools that fit.", caption: "Work together on ways to cope with your particular stressors." },
        { image: photo("photo-1470770841072-f978cf4d019e", 1100), alt: "Still water reflecting distant mountains", label: "CHRISTIAN COUNSELING", title: "Bring your faith, too.", caption: "Faith-based support is available for clients who want it included." }
      ],
      next: "families",
      nextLabel: "Explore family support"
    },
    families: {
      title: "Build stronger relationships together.",
      eyebrow: "RELATIONSHIP COUNSELING",
      intro: "Couples and families can use counseling to strengthen emotional connection and create more harmony at home. Sessions offer a supportive, neutral setting to understand the family as a whole and each person within it.",
      image: photo("photo-1511895426328-dc8714191300"),
      imageAlt: "Loved ones sharing a quiet moment together outdoors",
      chapter: "RELATIONSHIPS",
      storyTitle: "A change in perspective can change a lot.",
      story: "Family therapy provides a neutral place to talk about challenges and possible solutions. Sessions can include family members whether or not they live in the home. Understanding how a family works as a unit—and as individuals—can help strengthen relationships.",
      chapters: [
        {
          label: "COUPLES & FAMILIES",
          title: "Strengthen emotional connection.",
          body: "Relationship counseling can support couples and families who want to strengthen their connection and create more harmony at home. Sessions make room to discuss relationship concerns and consider practical ways to move forward.",
          image: photo("photo-1511632765486-a01980e01a18", 1400),
          alt: "Loved ones sitting together outdoors in a calm moment"
        },
        {
          label: "FAMILY AS A WHOLE",
          title: "Every member can be part of the work.",
          body: "Family sessions consider how each person contributes to the family as a unit. Members involved in therapy may participate whether they currently live in the home or not, helping the conversation reflect the relationships that matter.",
          image: photo("photo-1511895426328-dc8714191300", 1400),
          alt: "Family sharing time together in a peaceful outdoor setting"
        }
      ],
      slides: [
        { image: photo("photo-1511632765486-a01980e01a18", 1100), alt: "Loved ones sitting together outdoors", label: "COUPLES & FAMILIES", title: "Reconnect with care.", caption: "Make space for conversation about your relationship." },
        { image: photo("photo-1511895426328-dc8714191300", 1100), alt: "A family sharing time together outdoors", label: "FAMILY THERAPY", title: "Understand the whole picture.", caption: "Each person and the family as a unit both matter." },
        { image: photo("photo-1441974231531-c6227db76b6e", 1100), alt: "A peaceful trail through the trees", label: "A NEUTRAL SPACE", title: "Find a way forward.", caption: "Explore concerns and possible solutions in a supportive setting." }
      ],
      next: "faq",
      nextLabel: "Questions about therapy"
    }
  };

  const page = pages[document.body.dataset.page];
  const main = document.querySelector("#page-content");
  if (!page || !main) return;

  document.title = `${page.eyebrow.replace("SUPPORT FOR ", "")} — Avadee Counseling`;
  document.querySelectorAll('a[href$=".html"]').forEach((link) => {
    if (link.getAttribute("href") === `${document.body.dataset.page}.html`) {
      link.setAttribute("aria-current", "page");
    }
  });
  const nextPageImages = {
    faq: photo("photo-1470770841072-f978cf4d019e", 1400)
  };
  const nextPageImage = pages[page.next]?.image || nextPageImages[page.next];
  const slides = page.slides.map((slide, index) => `
    <button class="inner-slide" type="button" data-cascade-slide="${index}" aria-label="${index + 1} of ${page.slides.length}: ${slide.title}" aria-current="${index === 0 ? "true" : "false"}" tabindex="${index === 0 ? "0" : "-1"}">
      <img src="${slide.image}" alt="${slide.alt}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} draggable="false">
      <span class="inner-slide-shade"></span>
      <div class="inner-slide-copy">
        <span>${slide.label}</span>
        <h3>${slide.title}</h3>
        <p>${slide.caption}</p>
      </div>
      <span class="inner-slide-index">${String(index + 1).padStart(2, "0")}</span>
    </button>`).join("");
  const slideDots = page.slides.map((slide, index) => `
    <button class="inner-gallery-dot" type="button" data-slide-to="${index}" aria-label="Go to image ${index + 1}: ${slide.title}" aria-current="${index === 0 ? "true" : "false"}"></button>`).join("");
  const chapters = page.chapters.map((chapter, index) => `
    <article class="inner-chapter ${index % 2 ? "inner-chapter-reverse" : ""}">
      <div class="inner-chapter-image reveal"><img src="${chapter.image}" alt="${chapter.alt}" loading="lazy"><span>${String(index + 1).padStart(2, "0")} / ${chapter.label}</span></div>
      <div class="inner-chapter-copy reveal"><p class="inner-chapter-label">${chapter.label}</p><h2>${chapter.title}</h2><p>${chapter.body}</p></div>
    </article>`).join("");

  main.innerHTML = `
    <section class="inner-hero" aria-labelledby="inner-page-title">
      <img class="inner-hero-image" src="${page.image}" alt="${page.imageAlt}" fetchpriority="high">
      <span class="inner-hero-shade"></span>
      <div class="inner-hero-top"><span><i></i>${page.eyebrow}</span><span>AVADEE COUNSELING&nbsp; / &nbsp;${page.next.toUpperCase()}</span></div>
      <div class="inner-hero-type" aria-hidden="true">${page.chapter}</div>
      <div class="inner-hero-copy">
        <p class="inner-hero-index">A SAFE, NEUTRAL SPACE&nbsp; · &nbsp;A HUMAN CONNECTION</p>
        <h1 id="inner-page-title">${page.title}</h1>
        <p class="inner-hero-intro">${page.intro}</p>
        <a class="inner-hero-cta" href="contact.html">Whenever you're ready <span aria-hidden="true">↗</span></a>
      </div>
      <a class="inner-scroll-cue" href="#page-story">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
      <span class="inner-hero-count">01 <i>/</i> 03</span>
    </section>
    <div class="inner-marquee" aria-hidden="true"><div>${page.chapter}&nbsp; ✳ &nbsp;${page.eyebrow}&nbsp; ✳ &nbsp;${page.chapter}&nbsp; ✳ &nbsp;${page.eyebrow}&nbsp; ✳ &nbsp;</div><div>${page.chapter}&nbsp; ✳ &nbsp;${page.eyebrow}&nbsp; ✳ &nbsp;${page.chapter}&nbsp; ✳ &nbsp;${page.eyebrow}&nbsp; ✳ &nbsp;</div></div>
    <section class="inner-story section-shell" id="page-story">
      <div class="section-kicker reveal"><span>01</span><span class="kicker-line"></span><span>${page.chapter}</span></div>
      <div class="inner-story-grid">
        <h2 class="display-heading reveal">${page.storyTitle}</h2>
        <div class="inner-story-copy reveal"><p>${page.story}</p><a class="underlined-link" href="contact.html">Start a conversation <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
    <section class="inner-chapters section-shell" aria-label="More about ${page.eyebrow.toLowerCase()}">
      <div class="section-kicker reveal"><span>MORE TO EXPLORE</span><span class="kicker-line"></span><span>${page.chapter}</span></div>
      ${chapters}
    </section>
    <section class="inner-gallery" aria-labelledby="inner-gallery-title">
      <div class="inner-gallery-head section-shell">
        <div><div class="section-kicker reveal"><span>02</span><span class="kicker-line"></span><span>A few gentle reminders</span></div><h2 class="display-heading reveal" id="inner-gallery-title">There is room<br><em>for the next step.</em></h2></div>
        <div class="inner-gallery-controls reveal"><span class="inner-gallery-count"><span data-slide-current aria-live="polite">01</span> / ${String(page.slides.length).padStart(2, "0")}</span><button type="button" data-slide-step="-1" aria-label="Previous image">←</button><button type="button" data-slide-step="1" aria-label="Next image">→</button></div>
      </div>
      <p class="inner-gallery-intro section-shell reveal">Move through the images at your own pace. Each one offers a moment to pause, breathe, and remember you can begin right where you are.</p>
      <div class="inner-slider reveal" data-inner-slider tabindex="0" role="region" aria-roledescription="carousel" aria-label="Counseling reflections">
        <div class="inner-slider-track">${slides}</div>
      </div>
      <div class="inner-gallery-dots section-shell" role="group" aria-label="Choose an image">${slideDots}</div>
      <div class="inner-gallery-progress section-shell"><span data-slide-progress></span></div>
      <p class="inner-gallery-hint section-shell">SWIPE, DRAG, TRACKPAD OR USE THE ARROWS <span>↔</span></p>
    </section>
    <section class="inner-note section-shell">
      <div class="inner-note-mark" aria-hidden="true">✳</div><p class="inner-note-quote reveal">“You do not have to have it all figured out to <em>take one small step.</em>”</p><span class="inner-note-caption">A REMINDER FROM AVADEE COUNSELING</span>
    </section>
    <section class="inner-next section-shell">
      <div><div class="section-kicker reveal"><span>03</span><span class="kicker-line"></span><span>Keep exploring</span></div><h2 class="display-heading reveal">${page.nextLabel}<br><em>when you're ready.</em></h2></div>
      <a class="inner-next-card reveal" href="${page.next}.html" data-zoom-destination data-transition-title="${page.nextLabel}" data-transition-image="${nextPageImage}">
        <img src="${nextPageImage}" alt="" loading="lazy"><span class="destination-card-shade"></span><span class="inner-next-card-label">THE NEXT SMALL STEP</span><span class="inner-next-card-title">${page.nextLabel}</span><span class="inner-next-card-arrow" aria-hidden="true">↗</span>
      </a>
      <a class="inner-contact-link reveal" href="contact.html">Or get in touch with Avadee <span aria-hidden="true">↗</span></a>
    </section>`;

  document.querySelectorAll("[data-current-year]").forEach((year) => {
    year.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('a[href^="index.html"], a[href="contact.html"]').forEach((link) => {
    link.dataset.transitionTitle = link.getAttribute("href") === "contact.html" || link.getAttribute("href").includes("#contact")
      ? "Let's connect"
      : link.getAttribute("href").includes("#questions")
        ? "Frequently asked questions"
        : link.getAttribute("href").includes("#journey")
          ? "Your journey"
          : "Avadee Counseling";
    link.dataset.transitionImage = page.image;
    link.setAttribute("data-zoom-destination", "");
  });

  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-nav");
  const progressBar = document.querySelector(".scroll-progress span");
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
    }
  });
  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 28);
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${scrollableHeight > 0 ? window.scrollY / scrollableHeight * 100 : 0}%`;
  }, { passive: true });
  const updateScrollProgress = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${scrollableHeight > 0 ? window.scrollY / scrollableHeight * 100 : 0}%`;
  };
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  updateScrollProgress();

  let routeTransitioning = false;
  document.querySelectorAll("[data-zoom-destination]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (routeTransitioning) {
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
      routeTransitioning = true;
      closeMenu();
      const bounds = link.getBoundingClientRect();
      const layer = document.createElement("div");
      const card = document.createElement("div");
      const image = link.querySelector("img")?.currentSrc || link.dataset.transitionImage || page.image;
      const title = link.dataset.transitionTitle || link.querySelector(".destination-card-title")?.textContent.trim() || link.textContent.trim();
      layer.className = "destination-zoom";
      layer.setAttribute("aria-hidden", "true");
      card.className = "destination-card destination-zoom-card route-zoom-card";
      card.innerHTML = `<img src="${image}" alt=""><span class="destination-card-shade"></span><span class="destination-card-brand">A / C</span><span class="destination-card-copy"><span class="destination-card-label">A SPACE TO FEEL, HEAL & GROW</span><span class="destination-card-title"></span></span>`;
      card.querySelector(".destination-card-title").textContent = title;
      card.style.setProperty("--zoom-top", `${bounds.top}px`);
      card.style.setProperty("--zoom-left", `${bounds.left}px`);
      card.style.setProperty("--zoom-width", `${bounds.width}px`);
      card.style.setProperty("--zoom-height", `${bounds.height}px`);
      layer.append(card);
      document.body.append(layer);
      requestAnimationFrame(() => requestAnimationFrame(() => layer.classList.add("is-opening")));
      window.setTimeout(() => window.location.assign(destination.href), matchMedia("(prefers-reduced-motion: reduce)").matches ? 50 : 760);
    });
  });

  const slider = document.querySelector("[data-inner-slider]");
  const sliderSlides = [...slider.querySelectorAll(".inner-slide")];
  const currentSlideLabel = document.querySelector("[data-slide-current]");
  const slideProgress = document.querySelector("[data-slide-progress]");
  const slideDotsButtons = [...document.querySelectorAll("[data-slide-to]")];
  let activeSlide = 0;
  let pointerStartX = 0;
  let isDragging = false;
  let suppressSlideClick = false;
  const showSlide = (index) => {
    activeSlide = Math.max(0, Math.min(index, sliderSlides.length - 1));
    currentSlideLabel.textContent = String(activeSlide + 1).padStart(2, "0");
    slideProgress.style.width = `${(activeSlide + 1) / sliderSlides.length * 100}%`;
    const cardWidth = sliderSlides[activeSlide].getBoundingClientRect().width;
    const horizontalStep = Math.min(cardWidth * .31, 150);
    sliderSlides.forEach((slide, index) => {
      const distance = index - activeSlide;
      const absDistance = Math.abs(distance);
      slide.style.setProperty("--cascade-x", `${distance * horizontalStep}px`);
      slide.style.setProperty("--cascade-y", `${distance * cardWidth * .17}px`);
      slide.style.setProperty("--cascade-angle", `${distance * 9}deg`);
      slide.style.setProperty("--cascade-scale", String(Math.max(.62, 1 - absDistance * .16)));
      slide.style.zIndex = String(sliderSlides.length - absDistance);
      slide.style.visibility = absDistance > 2 ? "hidden" : "visible";
      slide.tabIndex = index === activeSlide ? 0 : -1;
      slide.setAttribute("aria-current", String(index === activeSlide));
      slideDotsButtons[index].setAttribute("aria-current", String(index === activeSlide));
    });
    document.querySelector('[data-slide-step="-1"]').disabled = activeSlide === 0;
    document.querySelector('[data-slide-step="1"]').disabled = activeSlide === sliderSlides.length - 1;
  };
  showSlide(0);
  document.querySelectorAll("[data-slide-step]").forEach((button) => {
    button.addEventListener("click", () => showSlide(activeSlide + Number(button.dataset.slideStep)));
  });
  slideDotsButtons.forEach((button) => {
    button.addEventListener("click", () => showSlide(Number(button.dataset.slideTo)));
  });
  sliderSlides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
      if (suppressSlideClick) return;
      if (index !== activeSlide) showSlide(index);
    });
  });
  slider.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    pointerStartX = event.clientX;
    isDragging = false;
    slider.setPointerCapture(event.pointerId);
  });
  slider.addEventListener("pointermove", (event) => {
    if (!slider.hasPointerCapture(event.pointerId) || Math.abs(event.clientX - pointerStartX) < 10) return;
    isDragging = true;
    if (event.cancelable) event.preventDefault();
  });
  slider.addEventListener("pointerup", (event) => {
    if (!slider.hasPointerCapture(event.pointerId)) return;
    slider.releasePointerCapture(event.pointerId);
    if (!isDragging) return;
    suppressSlideClick = true;
    showSlide(activeSlide + (event.clientX < pointerStartX ? 1 : -1));
    window.setTimeout(() => { suppressSlideClick = false; }, 0);
  });
  slider.addEventListener("pointercancel", () => {
    isDragging = false;
  });
  let lastWheelChange = 0;
  slider.addEventListener("wheel", (event) => {
    const now = Date.now();
    if (now - lastWheelChange < 450) return;
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY) && Math.abs(event.deltaX) >= 18) {
      event.preventDefault();
      lastWheelChange = now;
      if (event.deltaX > 0 && activeSlide === sliderSlides.length - 1) {
        const slideImage = sliderSlides[activeSlide].querySelector("img");
        window.avadeeNavigateWithZoom(
          `${page.next}.html`,
          page.nextLabel,
          slideImage.currentSrc || slideImage.src,
          sliderSlides[activeSlide]
        );
      } else {
        showSlide(activeSlide + (event.deltaX > 0 ? 1 : -1));
      }
      return;
    }
    if (Math.abs(event.deltaY) < 18) return;
    if (event.deltaY < 0 && activeSlide === 0) return;
    event.preventDefault();
    lastWheelChange = now;
    if (event.deltaY > 0 && activeSlide === sliderSlides.length - 1) {
      const slideImage = sliderSlides[activeSlide].querySelector("img");
      window.avadeeNavigateWithZoom(
        `${page.next}.html`,
        page.nextLabel,
        slideImage.currentSrc || slideImage.src,
        sliderSlides[activeSlide]
      );
    } else {
      showSlide(activeSlide + (event.deltaY > 0 ? 1 : -1));
    }
  }, { passive: false });
  slider.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      showSlide(activeSlide + (event.key === "ArrowRight" ? 1 : -1));
    }
  });

  window.addEventListener("resize", () => showSlide(activeSlide));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".inner-main .reveal").forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll(".inner-main .reveal").forEach((element) => element.classList.add("is-visible"));
  }
})();
