// Lightbox: activates only once real <img> tags replace the placeholder slots.
(function () {
  const items = Array.from(document.querySelectorAll(".masonry-item"));
  let lbIdx = 0;

  function getImages() {
    return items
      .map((item) => item.querySelector("img"))
      .filter(Boolean)
      .map((img) => img.src);
  }

  function ensureLightbox() {
    if (document.getElementById("lightbox")) return;
    const lb = document.createElement("div");
    lb.id = "lightbox";
    lb.style.cssText =
      "display:none;position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:9000;align-items:center;justify-content:center;backdrop-filter:blur(8px);";
    lb.innerHTML =
      '<button id="lb-close" style="position:absolute;top:20px;right:24px;background:rgba(255,255,255,.1);border:none;color:#fff;width:44px;height:44px;border-radius:50%;cursor:pointer;font-size:1.1rem;"><i class="fas fa-times"></i></button>' +
      '<button id="lb-prev" style="position:absolute;left:16px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,.1);border:none;color:#fff;width:48px;height:48px;border-radius:50%;cursor:pointer;font-size:1rem;"><i class="fas fa-chevron-left"></i></button>' +
      '<button id="lb-next" style="position:absolute;right:16px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,.1);border:none;color:#fff;width:48px;height:48px;border-radius:50%;cursor:pointer;font-size:1rem;"><i class="fas fa-chevron-right"></i></button>' +
      '<img id="lb-img" src="" alt="" style="max-width:90vw;max-height:88vh;border-radius:10px;object-fit:contain;box-shadow:0 20px 60px rgba(0,0,0,.8);" />' +
      '<p id="lb-counter" style="position:absolute;bottom:20px;left:50%;transform:translateX(-50%);font-size:.82rem;color:rgba(255,255,255,.45);"></p>';
    document.body.appendChild(lb);

    document.getElementById("lb-close").addEventListener("click", closeLB);
    document.getElementById("lb-prev").addEventListener("click", () => step(-1));
    document.getElementById("lb-next").addEventListener("click", () => step(1));
    lb.addEventListener("click", (e) => {
      if (e.target === lb) closeLB();
    });
    document.addEventListener("keydown", (e) => {
      if (lb.style.display !== "flex") return;
      if (e.key === "Escape") closeLB();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
  }

  function openAt(idx) {
    const imgs = getImages();
    if (!imgs.length) return;
    ensureLightbox();
    lbIdx = Math.min(idx, imgs.length - 1);
    document.getElementById("lb-img").src = imgs[lbIdx];
    document.getElementById("lb-counter").textContent = `${lbIdx + 1} / ${imgs.length}`;
    document.getElementById("lightbox").style.display = "flex";
  }

  function closeLB() {
    const lb = document.getElementById("lightbox");
    if (lb) lb.style.display = "none";
  }

  function step(dir) {
    const imgs = getImages();
    if (!imgs.length) return;
    lbIdx = (lbIdx + dir + imgs.length) % imgs.length;
    openAt(lbIdx);
  }

  items.forEach((item, i) => {
    item.addEventListener("click", () => openAt(i));
  });
})();
