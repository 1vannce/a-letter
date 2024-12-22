// Animate
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".fade-in");

  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  }, observerOptions);

  revealElements.forEach((element) => {
    observer.observe(element);
  });
});

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
