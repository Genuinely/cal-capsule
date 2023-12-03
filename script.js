import CountUp from 'countup.js';

// Initialize CountUp instance
const countUp = new CountUp('counting-number', 0, 1000, 0, 2);

// Intersection Observer setup
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !countUp.error) {
      // Start counting animation when the element is in view
      countUp.start();
      observer.unobserve(entry.target); // Stop observing once the element is shown
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
