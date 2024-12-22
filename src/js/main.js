// Animation
// gsap.registerPlugin(ScrollTrigger);
// const splitTypes = document.querySelectorAll(".main__reveal-type");

// splitTypes.forEach((char, i) => {
//   const text = new SplitType(char, { types: "chars" });

//   gsap.from(text.chars, {
//     scrollTrigger: {
//       trigger: char,
//       start: "top 60%",
//       end: "bottom 40%",
//       scrub: true,
//       markers: false,
//     },
//     opacity: 0.2,
//     stagger: 0.1,
//   });
// });

// const lenis = new Lenis();
// lenis.on("scroll", (e) => {
//   console.log(e);
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// Music
const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");
const backgroundMusic = document.getElementById("backgroundMusic");

musicToggle.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicIcon.className = "fas fa-pause"; // Change icon to pause
  } else {
    backgroundMusic.pause();
    musicIcon.className = "fas fa-play"; // Change icon to play
  }
});
