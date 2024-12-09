document.addEventListener('DOMContentLoaded', function () {
  const feature = Atropos({
    el: '.feature-atropos',
    activeOffset: 40,
    shadow: false,
  });
});

// custom js for testimonail button
document.addEventListener('DOMContentLoaded', function () {
  let testiBoxes = document.querySelectorAll(".testimonial-box");
  let testiBtn = document.querySelector(".testi-btn");
  let allShown = false; // Track whether all boxes are shown

  // Function to show limited boxes based on screen size
  function showLimitedBoxes() {
      const width = window.innerWidth;

      testiBoxes.forEach((box, index) => {
          if (width >= 1200 && index < 8) { 
              box.style.display = "block"; 
          } else if (width >= 768 && width < 1200 && index < 5) { 
              box.style.display = "block"; 
          } else if (width < 768 && index < 3) {
              box.style.display = "block"; 
          } else {
              box.style.display = "none"; 
          }
      });
  }

  showLimitedBoxes();

  testiBtn.addEventListener("click", () => {
      if (allShown) {
          showLimitedBoxes();
          allShown = false;
          testiBtn.style.display= "none"
      } else {
          // Show all boxes
          testiBoxes.forEach(box => {
              box.style.display = "block";
            testiBtn.style.display= "none"

          });
          allShown = true;
      }
  });

  window.addEventListener('resize', showLimitedBoxes);
});
