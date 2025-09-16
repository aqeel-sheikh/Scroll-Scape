const headerTitle = document.querySelector("#header-title");
const headerTagLine = document.querySelector("#header-tagline");
const socialLinks = document.querySelectorAll(".social-links a");
const rocket = document.querySelector(".rocket")

function onScroll() {
  const scrollY = window.scrollY;

  headerTitle.style.marginBottom = `${scrollY * 0.9}px`;

  headerTagLine.style.marginTop = scrollY + "px";


  for (let link of socialLinks) {
    link.style.paddingBottom = `${scrollY * 0.9}px`;
  }
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
