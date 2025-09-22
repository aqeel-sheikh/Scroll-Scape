gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

const tl = gsap.timeline();
tl.from("#section3", { xPercent: -100 })
  .from("#section4", { xPercent: 100 })
  .from("#section5", { yPercent: -100 });

ScrollTrigger.create({
  animation: tl,
  trigger: ".wrapper",
  start: "top top",
  end: "+=4000",
  scrub: true,
  pin: true,
  snap: 1 / 3,
  anticipatePin: 1,
});

// Section 1 - Header
const headerTitle = document.querySelector("#section1-title");
const headerTagLine = document.querySelector("#section1-tagline");
const socialLinks = document.querySelectorAll(".social-links a");

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

// Section 4 - The Rise
const card = document.getElementById("section4-narrative-card");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width;
  const y = e.clientY - rect.top - rect.height;
  const rotateY = (y / 15).toFixed(2);
  const rotateX = (x / 15).toFixed(2);
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0deg) rotateY(0deg)";
});
