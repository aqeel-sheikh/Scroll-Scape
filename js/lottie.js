const animation = lottie.loadAnimation({
  container: document.getElementById("lottie-container"), // the container
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "assets/animations/scrollDownAnimation.json", // your animation file path
});

animation.setSpeed(0.7);

function pauseScrollAnimation() {
  const scrollY = window.scrollY;

  if (scrollY !== 0) {
    document.querySelector("#lottie-container").style.display = "none";
    document.querySelector("#section1-tagline").style.opacity = 0
  } else {
    document.querySelector("#lottie-container").style.display = "block";
    document.querySelector("#section1-tagline").style.opacity = 1
  }
}
window.addEventListener("scroll", pauseScrollAnimation, { passive: true });
pauseScrollAnimation();
