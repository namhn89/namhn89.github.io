// Favicon / visibility
document.addEventListener("visibilitychange", function () {
  document.title = "Portfolio | Nam Nguyen";
  document.getElementById("favicon").href = "assets/img/foto/nam.png";
});

// Audio toggle
var audio = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (audio.muted) {
    audio.muted = false;
    audio.play();
    btn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    audio.muted = true;
    btn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

// Hamburger menu
const menuToggle = document.querySelector(".menu-toggle input");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("slide");
});

// Nav active on click
document.querySelectorAll("ul li").forEach(function (li) {
  li.addEventListener("click", function () {
    document.querySelectorAll("ul li").forEach(function (el) {
      el.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// Scroll spy + scroll-to-top visibility
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("ul li a");
const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", function () {
  let top = window.scrollY;

  // scroll spy
  sections.forEach(function (sec) {
    let offset = sec.offsetTop - 250;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach(function (link) { link.classList.remove("active"); });
      const active = document.querySelector('ul li a[href*="' + id + '"]');
      if (active) active.classList.add("active");
    }
  });

  // scroll-to-top button
  if (scrollTopBtn) scrollTopBtn.classList.toggle("active", top > 100);
}, { passive: true });

// Smooth scrolling with navbar offset
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const offsetTop = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  });
});

// Typing animation
var dataTyping = {
  target: "typing-text",
  text: '["Xin chào, mình là Nguyễn Hoài Nam", "Hi, I\'m Nam Hoai Nguyen", "大家好，我是软坏南"]',
  delay: "1000",
};

class textType {
  constructor(el, text, delay) {
    this.text = text;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(delay, 10) || 2000;
    this.txt = "";
    this.isDeleting = false;
    this.tick();
  }

  tick() {
    let i = this.loopNum % this.text.length;
    let fullTxt = this.text[i];

    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    this.el.innerText = this.txt;

    let timing = Math.floor(200 - Math.random() * 100);
    if (this.isDeleting) timing /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      timing = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      timing = 500;
    }

    setTimeout(() => this.tick(), timing);
  }
}

window.addEventListener("load", function () {
  // Start typing animation
  const els = document.getElementsByClassName(dataTyping.target);
  for (let el of els) {
    if (dataTyping.text) {
      new textType(el, JSON.parse(dataTyping.text), dataTyping.delay);
    }
  }

  // Preloader
  const preload = document.getElementById("preloader");
  setTimeout(function () {
    preload.classList.add("hidden");
    document.body.classList.remove("hidden");
  }, 300);
});
