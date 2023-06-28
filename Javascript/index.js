window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 10) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  });


// Get all the card elements
const cards = document.querySelectorAll('.card');

// Function to handle scroll event
const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  let delay = 0;

  cards.forEach((card, index) => {
    const cardPosition = card.getBoundingClientRect().top;

    if (cardPosition < windowHeight * 0.99) {
      setTimeout(() => {
        card.classList.add('animate');
      }, delay);
      delay += 700; // Adjust the delay time between each card (in milliseconds)
    } else {
      card.classList.remove('animate');
    }
  });
};

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger the animation on initial page load
handleScroll();


  


// const themeToggle = document.querySelector('.theme-toggle');
// const moonIcon = document.querySelector('.moon-icon');
// const sunIcon = document.querySelector('.sun-icon');
// const body = document.querySelector('body');
// console.log(themeToggle);
// themeToggle.addEventListener('click', toggleTheme);

// function toggleTheme() {
//     console.log("clicked");
//   body.classList.toggle('dark-theme');
//   moonIcon.classList.toggle('hidden');
//   sunIcon.classList.toggle('hidden');
// }


document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');
    const body = document.querySelector('body');
  console.log("uinderf");
  console.log(moonIcon);
  console.log(sunIcon);
  themeToggle.addEventListener('click', function () {
    console.log("clicked");
    console.log(body.classList);
    body.classList.toggle('dark-theme');
    console.log(body.classList);
    moonIcon.classList.toggle('hidden');
    console.log(body.classList);
        sunIcon.classList.toggle('hidden');
      });});


//       const target = {
//         clicked: 0,
//         currentFollowers: 90,
//         btn: document.querySelector("a.btn"),
//         fw: document.querySelector("span.followers")
//       };
      
//       const follow = () => {
//         target.clicked += 1;
//         target.btn.innerHTML = 'Following <i class="fas fa-user-times"></i>';
      
//         if (target.clicked % 2 === 0) {
//           target.currentFollowers -= 1;
//           target.btn.innerHTML = 'Follow <i class="fas fa-user-plus"></i>';
//         }
//         else {
//           target.currentFollowers += 1;
//         }
      
//         target.fw.textContent = target.currentFollowers;
//         target.btn.classList.toggle("following");
//       }
      