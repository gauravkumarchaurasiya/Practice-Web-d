window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 10) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// Get all the card elements
const cards = document.querySelectorAll(".card");

// Function to handle scroll event
const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  let delay = 0;

  cards.forEach((card, index) => {
    const cardPosition = card.getBoundingClientRect().top;

    if (cardPosition < windowHeight * 0.99) {
      setTimeout(() => {
        card.classList.add("animate");
      }, delay);
      delay += 700; // Adjust the delay time between each card (in milliseconds)
    } else {
      card.classList.remove("animate");
    }
  });
};

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Trigger the animation on initial page load
handleScroll();

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.querySelector(".theme-toggle");
  const moonIcon = document.querySelector(".moon-icon");
  const sunIcon = document.querySelector(".sun-icon");
  const body = document.querySelector("body");
  // console.log(sunIcon);
  // console.log(sunIcon.classList);
  // console.log("before");
  sunIcon.classList.add("hidden");
  // console.log(sunIcon);
  // console.log(sunIcon.classList);
  themeToggle.addEventListener("click", function () {
    
    body.classList.toggle("dark-theme");
    
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("shown");
  });
});

// Function to load and render the PDF document
function loadPDF(url) {
  // Fetch the PDF document
  pdfjsLib.getDocument(url).promise.then(function(pdf) {
    // Get the first page
    pdf.getPage(1).then(function(page) {
      var scale = 1.5;
      var viewport = page.getViewport({ scale: scale });

      // Create a canvas element to render the page
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      document.getElementById("pdf-viewer").appendChild(canvas);

      // Render the page onto the canvas
      page.render({
        canvasContext: context,
        viewport: viewport
      });
    });
  });
}

// Call the loadPDF function with the URL of your PDF file
document.addEventListener("DOMContentLoaded", function() {
  loadPDF("../Gkc resume.pdf");
});