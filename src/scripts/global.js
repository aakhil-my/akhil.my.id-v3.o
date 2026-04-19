export function initGlobalScripts() {
  setupMobileNav();
  setupRevealObserver();
  setupContactForm();
  setupFooterYear();
  setupPageTransitions();
  setupNavIndicator();
  setupMainNameMotion();
  setupAboutRunningText();
  setupCursorFollower();
  setupBottomNextButton();

  const mainBootPage = document.getElementById("mainBootPage");
  if (!mainBootPage) {
    setupLoader();
  }

  setupMainClickAnywhere();
}

function setupMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const panel = document.querySelector("[data-nav-panel]");

  if (!toggle || !panel) return;

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    panel.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    panel.classList.toggle("is-open", !isOpen);
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!panel.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMenu();
  });
}

function setupLoader() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const minDelay = prefersReducedMotion ? 0 : 500;
  const start = performance.now();

  const finishLoad = () => {
    const elapsed = performance.now() - start;
    const remaining = Math.max(0, minDelay - elapsed);

    window.setTimeout(() => {
      document.body.classList.add("is-loaded");
    }, remaining);
  };

  if (document.readyState === "complete") {
    finishLoad();
  } else {
    window.addEventListener("load", finishLoad, { once: true });
  }
}

function setupRevealObserver() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  items.forEach((item) => observer.observe(item));
}

function setupFooterYear() {
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

function setupPageTransitions() {
  const shell = document.querySelector(".page-shell");
  const links = document.querySelectorAll("a[href]");
  if (!shell || !links.length) return;

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href) return;
      if (link.hasAttribute("data-skip-page-transition")) return;

      const isExternal = link.origin !== window.location.origin;
      const isAnchor = href.startsWith("#");
      const isSpecial =
        link.hasAttribute("download") ||
        link.target === "_blank" ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:");
      const isSamePage =
        new URL(link.href, window.location.href).pathname ===
        window.location.pathname;

      if (isExternal || isAnchor || isSpecial || isSamePage) return;

      event.preventDefault();
      shell.classList.add("is-leaving");
      sessionStorage.setItem("nav-last-path", window.location.pathname);

      window.setTimeout(() => {
        window.location.href = link.href;
      }, 320);
    });
  });
}

function setupNavIndicator() {
  const panel = document.querySelector("[data-nav-panel]");
  const indicator = document.querySelector("[data-nav-indicator]");
  const active = panel?.querySelector('[aria-current="page"]');

  if (!panel || !indicator || !active || window.innerWidth <= 820) return;

  const links = [...panel.querySelectorAll(".nav-link")];
  const activeIndex = links.indexOf(active);
  const prevPath = sessionStorage.getItem("nav-last-path");

  const prevIndex = links.findIndex((link) => {
    const linkPath = new URL(link.href, window.location.href).pathname;
    return linkPath === prevPath;
  });

  const positionIndicator = (sourceLink, targetLink, animate = true) => {
    const panelRect = panel.getBoundingClientRect();
    const sourceRect = sourceLink.getBoundingClientRect();
    const targetRect = targetLink.getBoundingClientRect();

    if (!animate) indicator.style.transition = "none";
    indicator.style.transform = `translateX(${sourceRect.left - panelRect.left}px)`;
    indicator.style.width = `${sourceRect.width}px`;
    indicator.classList.add("is-ready");

    requestAnimationFrame(() => {
      if (!animate) {
        requestAnimationFrame(() => {
          indicator.style.transition = "";
        });
      }

      indicator.style.transform = `translateX(${targetRect.left - panelRect.left}px)`;
      indicator.style.width = `${targetRect.width}px`;
    });
  };

  const sourceLink = prevIndex >= 0 ? links[prevIndex] : active;
  const shouldAnimate = prevIndex >= 0 && prevIndex !== activeIndex;

  positionIndicator(sourceLink, active, shouldAnimate);

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 820) return;
    positionIndicator(active, active, false);
  });
}

function setupContactForm() {
  const form = document.querySelector("#contactForm");
  const status = document.querySelector("#formStatus");
  const iframe = document.querySelector("#contactSubmitFrame");

  if (!form || !status) return;

  const button = form.querySelector('button[type="submit"]');
  const sourcePage = form.querySelector("#sourcePage");

  let submitted = false;
  let fallbackTimer = null;

  if (sourcePage) {
    sourcePage.value = window.location.href;
  }

  form.addEventListener("submit", (event) => {
    const name = form.querySelector("#name")?.value.trim() || "";
    const email = form.querySelector("#email")?.value.trim() || "";
    const message = form.querySelector("#message")?.value.trim() || "";

    if (!name || !email || !message) {
      event.preventDefault();
      updateFormStatus(
        status,
        "Mohon isi nama, email, dan pesan terlebih dahulu.",
        "error"
      );
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      event.preventDefault();
      updateFormStatus(status, "Format email terlihat belum valid.", "error");
      return;
    }

    submitted = true;
    toggleSubmit(button, true);
    updateFormStatus(status, "Mengirim pesan...", "");

    if (fallbackTimer) {
      clearTimeout(fallbackTimer);
    }

    fallbackTimer = setTimeout(() => {
      if (!submitted) return;

      submitted = false;
      toggleSubmit(button, false);
      form.reset();

      if (sourcePage) {
        sourcePage.value = window.location.href;
      }

      updateFormStatus(status, "success.", "success");
    }, 2500);
  });

  if (iframe) {
    iframe.addEventListener("load", () => {
      if (!submitted) return;

      submitted = false;

      if (fallbackTimer) {
        clearTimeout(fallbackTimer);
        fallbackTimer = null;
      }

      toggleSubmit(button, false);
      form.reset();

      if (sourcePage) {
        sourcePage.value = window.location.href;
      }

      updateFormStatus(status, "success.", "success");
    });
  }
}

function updateFormStatus(node, text, type) {
  node.textContent = text;
  node.classList.remove("is-success", "is-error");

  if (type === "success") node.classList.add("is-success");
  if (type === "error") node.classList.add("is-error");
}

function toggleSubmit(button, loading) {
  if (!button) return;
  button.disabled = loading;
  button.style.opacity = loading ? "0.78" : "1";
  button.style.pointerEvents = loading ? "none" : "auto";
  button.textContent = loading ? "Sending..." : "Send Message";
}

function setupMainNameMotion() {
  const stack = document.querySelector(".main-name-stack");
  if (!stack) return;

  const items = [...stack.querySelectorAll(".main-name")];
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return;

  const maxX = 16;
  const maxY = 10;

  stack.addEventListener("mousemove", (event) => {
    const rect = stack.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    items.forEach((item) => {
      const depth = Number(item.dataset.depth || 0.55);

      const moveX = Math.max(-maxX, Math.min(maxX, px * maxX * 2 * depth));
      const moveY = Math.max(-maxY, Math.min(maxY, py * maxY * 2 * depth));

      const rotateY = Math.max(-6, Math.min(6, px * 10 * depth));
      const rotateX = Math.max(-5, Math.min(5, -py * 8 * depth));

      item.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  });

  stack.addEventListener("mouseleave", () => {
    items.forEach((item) => {
      item.style.transform = "";
    });
  });
}

function setupAboutRunningText() {
  const paragraphs = [
    ...document.querySelectorAll(".about-copy .body-copy p"),
  ];
  if (!paragraphs.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) return;

  const paragraphModels = paragraphs.map((paragraph) => {
    const originalText = paragraph.textContent;
    paragraph.setAttribute("aria-label", originalText);
    paragraph.textContent = "";

    const fragment = document.createDocumentFragment();
    const chars = [];

    Array.from(originalText).forEach((char, index) => {
      const span = document.createElement("span");
      span.className = "about-char";
      span.style.setProperty("--char-index", index);

      if (char === " ") {
        span.classList.add("about-space");
        span.innerHTML = "&nbsp;";
      } else {
        span.textContent = char;
      }

      fragment.appendChild(span);
      chars.push(span);
    });

    paragraph.appendChild(fragment);

    return {
      paragraph,
      chars,
    };
  });

  let ticking = false;

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const updateRunningText = () => {
    paragraphModels.forEach(({ paragraph, chars }) => {
      const rect = paragraph.getBoundingClientRect();

      const start = window.innerHeight * 0.92;
      const end = window.innerHeight * 0.34;

      let progress = (start - rect.top) / (start - end);
      progress = clamp(progress, 0, 1);

      if (rect.bottom < window.innerHeight * 0.12) {
        progress = 1;
      }

      if (rect.top > window.innerHeight) {
        progress = 0;
      }

      const visibleCount = Math.round(progress * chars.length);

      chars.forEach((char, index) => {
        if (char.classList.contains("about-space")) {
          char.classList.add("is-visible");
          return;
        }

        if (index < visibleCount) {
          char.classList.add("is-visible");
        } else {
          char.classList.remove("is-visible");
        }
      });
    });

    ticking = false;
  };

  const requestUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateRunningText);
      ticking = true;
    }
  };

  updateRunningText();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function setupCursorFollower() {
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (isTouch || prefersReducedMotion) return;

  const follower = document.createElement("div");
  const dot = document.createElement("div");

  follower.className = "cursor-follower";
  dot.className = "cursor-follower-dot";

  document.body.appendChild(follower);
  document.body.appendChild(dot);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  let followerX = mouseX;
  let followerY = mouseY;

  let dotX = mouseX;
  let dotY = mouseY;

  const render = () => {
    followerX += (mouseX - followerX) * 0.14;
    followerY += (mouseY - followerY) * 0.14;

    dotX += (mouseX - dotX) * 0.32;
    dotY += (mouseY - dotY) * 0.32;

    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
    dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(render);
  };

  window.addEventListener(
    "mousemove",
    (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      document.body.classList.add("cursor-ready");
    },
    { passive: true }
  );

  window.addEventListener("mouseout", () => {
    document.body.classList.remove("cursor-ready");
    document.body.classList.remove("cursor-hover");
  });

  document.addEventListener("mouseover", (event) => {
    const hoverTarget = event.target.closest(
      "a, button, .link-card, .nav-link, .main-name, .project-card"
    );
    document.body.classList.toggle("cursor-hover", !!hoverTarget);
  });

  render();
}

function setupMainClickAnywhere() {
  const mainPage = document.querySelector("[data-main-page]");
  const enterButton = document.querySelector("[data-main-enter-button]");
  const shell = document.querySelector(".page-shell");
  const bootPage = document.getElementById("mainBootPage");

  if (!mainPage || !enterButton) return;

  const targetHref = enterButton.getAttribute("href");
  if (!targetHref) return;

  let isNavigating = false;

  const goNext = () => {
    if (isNavigating) return;
    if (bootPage && !document.body.classList.contains("is-main-ready")) return;

    isNavigating = true;

    if (shell) {
      shell.classList.add("is-leaving");
    }

    window.setTimeout(() => {
      window.location.href = targetHref;
    }, 220);
  };

  enterButton.addEventListener("click", (event) => {
    event.preventDefault();
    goNext();
  });

  mainPage.addEventListener("click", (event) => {
    const clickedInteractive = event.target.closest(
      "a, button, input, textarea, label"
    );
    if (clickedInteractive) return;

    goNext();
  });
}

function setupBottomNextButton() {
  const button = document.querySelector("[data-next-button]");
  if (!button) return;

  const update = () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight;
    const pageHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    const scrollBottom = scrollTop + viewportHeight;
    const pageIsShort = pageHeight <= viewportHeight + 40;
    const nearBottom = scrollBottom >= pageHeight - 140;

    button.classList.toggle("is-visible", pageIsShort || nearBottom);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  window.addEventListener("load", update);
}