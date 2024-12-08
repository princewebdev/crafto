const marquee = document.querySelector('.marquee');

// Clone the content for a smooth loop
const clone = marquee.innerHTML;
marquee.innerHTML += clone;

