let slideIndex = 1;
let images = ['pics/bg1.png', 'pics/bg2.png', 'pics/bg3.png', 'pics/bg4.png', 'pics/bg5.jpeg']; // Array of images

// Automatically show the first slide
showSlide(slideIndex);

// Function to show slides
function showSlide(n) {
    // Adjust index when it goes out of bounds
    if (n > images.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = images.length; }
    
    // Set the background image based on the slide index
    document.querySelector('.banner').style.backgroundImage = `url('${images[slideIndex - 1]}')`;

}

// Function to automatically slide through images every 5 seconds
setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 3000);  // Adjust the time as needed (3000ms = 3 seconds)

// JavaScript for toggling the menu for nav bar list
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active'); // Toggle only the nav element
});


