document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 200; // Adjust this value for speed

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 10); // Adjust delay for smoother animation
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
});
