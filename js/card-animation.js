const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
});

const targets = document.querySelectorAll('.why_spie, .what, .future');
targets.forEach((target) => {
  observer.observe(target);
});