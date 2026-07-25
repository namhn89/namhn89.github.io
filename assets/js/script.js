// Favicon / title
document.addEventListener("visibilitychange", function () {
  document.title = "Portfolio | Nam Nguyen";
});

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinksList = document.getElementById("nav-links");
menuBtn.addEventListener("click", function () {
  navLinksList.classList.toggle("open");
});
navLinksList.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinksList.classList.remove("open"));
});

// Audio toggle
const audio = document.getElementById("bg-audio");
const audioBtn = document.getElementById("audio-btn");

function setAudioIcon() {
  audioBtn.querySelector("i").className = audio.muted
    ? "fas fa-volume-mute"
    : "fas fa-volume-up";
}

function tryUnmute() {
  audio.muted = false;
  audio.play().catch(() => {});
  setAudioIcon();
}

// Try to autoplay with sound right away; browsers that block it will
// keep it muted until the first user interaction unmutes it below.
tryUnmute();
if (audio.muted) {
  ["click", "touchstart", "keydown"].forEach((evt) =>
    document.addEventListener(evt, tryUnmute, { once: true })
  );
}

audioBtn.addEventListener("click", function () {
  audio.muted = !audio.muted;
  if (!audio.muted) audio.play().catch(() => {});
  setAudioIcon();
});

// Nav active highlight (scroll spy)
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#nav-links a[href^='#']");
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === "#" + entry.target.id
        );
      });
    });
  },
  { rootMargin: "-25% 0px -65% 0px" }
);
sections.forEach((sec) => navObserver.observe(sec));

// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Typing effect
const typingTexts = [
  "Xin chào, mình là Nguyễn Hoài Nam",
  "Hi, I'm Nam Hoai Nguyen",
  "大家好，我是软坏南",
];
function startTyping() {
  const el = document.getElementById("typing-text");
  if (!el) return;
  let ti = 0,
    ci = 0,
    deleting = false;
  const tick = () => {
    const cur = typingTexts[ti];
    if (deleting) {
      ci = Math.max(0, ci - 1);
      el.textContent = cur.substring(0, ci);
      if (ci <= 0) {
        deleting = false;
        ti = (ti + 1) % typingTexts.length;
      }
      setTimeout(tick, 45);
    } else {
      ci++;
      el.textContent = cur.substring(0, ci);
      if (ci >= cur.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 75);
    }
  };
  tick();
}

// Scroll-to-top button visibility
const scrollTopBtn = document.getElementById("scroll-top");
window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 400);
});

// Preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("hidden");
    setTimeout(() => preloader.remove(), 500);
    document.body.classList.remove("hidden");
  }, 300);
  startTyping();
});
