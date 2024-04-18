// Function to play YouTube video when a box is clicked
function playVideo(element) {
  // Get the YouTube video ID from the clicked box
  var videoId = element.getAttribute('data-youtube-id');
  
  // Construct the YouTube embed URL with the video ID
  var embedUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
  
  // Set the src attribute of the iframe to the constructed URL
  document.getElementById('player1').setAttribute('src', embedUrl);
}

// This function will run when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners to each box with the class 'box2'
  const boxes = document.querySelectorAll('.box2');

  // Loop through each box and add a click event listener
  boxes.forEach((box) => {
    box.addEventListener('click', function () {
      // Call the playVideo function with the clicked box as an argument
      playVideo(this);
    });
  });
});

// JavaScript for horizontal scrolling in vods2 section

// Get the container for the vods2 section
var vods2ScrollContainer = document.querySelector('.vods2-scroll-container');

// Add event listener for mouse wheel scroll
vods2ScrollContainer.addEventListener('wheel', function(event) {
  // Calculate the new scroll position
  vods2ScrollContainer.scrollLeft += event.deltaY;
});

// Function to display slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}

// This function will run when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners to each box with the class 'box'
  const boxes = document.querySelectorAll('.box');

  // Array of PDF file names. Replace these with your actual PDF file names
  const pdfNames = ['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf', 'pdf5.pdf', 'pdf6.pdf'
  , 'pdf7.pdf', 'pdf8.pdf', 'pdf9.pdf', 'pdf10.pdf', 'pdf11.pdf', 'pdf12.pdf', 'pdf13.pdf', 'pdf14.pdf'
  , 'pdf15.pdf'];

  // Loop through each box and add a click event listener
  boxes.forEach((box, index) => {
    box.addEventListener('click', function () {
      // Get the PDF file name based on the index and open it in a new tab
      const pdfPath = pdfNames[index];
      window.open(pdfPath, '_blank');
    });
  });
});
// This function will run when the DOM content is loaded for g12
document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners to each box with the class 'box'
  const boxes = document.querySelectorAll('.box_2');

  // Array of PDF file names. Replace these with your actual PDF file names
  const pdfNames = ['pdf3.pdf', 'pdf4.pdf', 'pdf5.pdf', 'pdf6.pdf'
  , 'pdf7.pdf', 'pdf8.pdf', 'pdf9.pdf', 'pdf10.pdf', 'pdf11.pdf', 'pdf12.pdf', 'pdf13.pdf', 'pdf14.pdf'
  , 'pdf15.pdf'];

  // Loop through each box and add a click event listener
  boxes.forEach((box_2, index) => {
    box.addEventListener('click', function () {
      // Get the PDF file name based on the index and open it in a new tab
      const pdfPath = pdfNames[index];
      window.open(pdfPath, '_blank');
    });
  });
});

// This function will run when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the container for VOD boxes
  const vodsContainer = document.querySelector('.vods-scroll-container');

  // Add event listener to the container for mousewheel event
  vodsContainer.addEventListener('wheel', scrollHorizontally);
});

// Function to handle horizontal scrolling
function scrollHorizontally(event) {
  event.preventDefault();
  // Adjust scrollLeft of the container based on mouse wheel movement
  this.scrollLeft += event.deltaY * 4; // Adjust the multiplier (4 in this case) to control the scrolling speed
}

// Add event listener for G11 button click
document.getElementById('g11Button').addEventListener('click', function() {
  // Call a function to display the G11 content
  displayG11Content();
});

// Add event listener for G12 button click
document.getElementById('g12Button').addEventListener('click', function() {
  // Call a function to display the G12 content
  displayG12Content();
});

// Function to display G11 content and hide G12 content
function displayG11Content() {
  // Hide all G12 content
  var g12Content = document.querySelectorAll('.box.box_2');
  g12Content.forEach(function(content) {
    content.style.display = 'none';
  });

  // Display G11 content
  var g11Content = document.querySelectorAll('.box:not(.box_2)');
  g11Content.forEach(function(content) {
    content.style.display = 'block';
  });
}

// Function to display G12 content and hide G11 content
function displayG12Content() {
  // Hide all G11 content
  var g11Content = document.querySelectorAll('.box:not(.box_2)');
  g11Content.forEach(function(content) {
    content.style.display = 'none';
  });

  // Display G12 content
  var g12Content = document.querySelectorAll('.box.box_2');
  g12Content.forEach(function(content) {
    content.style.display = 'block';
  });
}


document.addEventListener('DOMContentLoaded', function () {
  // Add event listener for Vg11Button click
  document.getElementById('Vg11Button').addEventListener('click', function () {
    // Show boxes when Vg11Button is clicked
    displayVg11Boxes();
  });

  // Add event listener for Vg11Button2 click
  document.getElementById('Vg11Button2').addEventListener('click', function () {
    // Hide boxes when Vg11Button2 is clicked
    hideVg11Boxes();
  });
});

function displayVg11Boxes() {
  // Show boxes by setting their display property to 'block'
  document.querySelectorAll('.vods .box1, .vods .box2, .vods .box3, .vods .box4, .vods .box5').forEach(function (box) {
    box.style.display = 'block';
  });
}

function hideVg11Boxes() {
  // Hide boxes by setting their display property to 'none'
  document.querySelectorAll('.vods .box1, .vods .box2, .vods .box3, .vods .box4, .vods .box5').forEach(function (box) {
    box.style.display = 'none';
  });
}
document.addEventListener('DOMContentLoaded', function () {
  // Initially hide boxes 6 to 10
  toggleBoxes(6, 10, false);

  // Add event listener for Vg11Button click
  document.getElementById('Vg11Button').addEventListener('click', function () {
    // Show boxes 1 to 5 and hide boxes 6 to 10
    toggleBoxes(1, 5, true);
    toggleBoxes(6, 10, false);
  });

  // Add event listener for Vg11Button2 click
  document.getElementById('Vg11Button2').addEventListener('click', function () {
    // Show boxes 6 to 10 and hide boxes 1 to 5
    toggleBoxes(1, 5, false);
    toggleBoxes(6, 10, true);
  });
});

function toggleBoxes(startIndex, endIndex, show) {
  // Iterate through the boxes and toggle their visibility
  for (let i = startIndex; i <= endIndex; i++) {
    const box = document.querySelector('.box' + i);
    if (box) {
      box.style.display = show ? 'block' : 'none';
    }
  }
}
document.addEventListener("DOMContentLoaded", function() {
  // Get all buttons
  var buttons = document.querySelectorAll("button[id^='Vg12Button']");

  // Get all box elements
  var boxes = document.querySelectorAll(".vods2 .container2 > div");

  // Function to hide all boxes
  function hideAllBoxes() {
    boxes.forEach(function(box) {
      box.style.display = "none";
    });
  }

  // Show default boxes
  hideAllBoxes();
  document.querySelector(".box11").style.display = "block";
  document.querySelector(".box12").style.display = "block";
  document.querySelector(".box13").style.display = "block";
  document.querySelector(".box14").style.display = "block";

  // Add click event listener to each button
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Hide all boxes
      hideAllBoxes();
      
      // Show relevant boxes based on the clicked button
      switch (button.id) {
        case "Vg12Button":
          document.querySelector(".box15").style.display = "none";
          document.querySelector(".box16").style.display = "none";
          document.querySelector(".box17").style.display = "none";
          document.querySelector(".box18").style.display = "none";
          document.querySelector(".box19").style.display = "none";
          document.querySelector(".box20").style.display = "none";
          document.querySelector(".box21").style.display = "none";
          document.querySelector(".box11").style.display = "block";
          document.querySelector(".box12").style.display = "block";
          document.querySelector(".box13").style.display = "block";
          document.querySelector(".box14").style.display = "block";
          break;
        case "Vg12Button1":
          document.querySelector(".box11").style.display = "none";
          document.querySelector(".box12").style.display = "none";
          document.querySelector(".box13").style.display = "none";
          document.querySelector(".box14").style.display = "none";
          document.querySelector(".box18").style.display = "none";
          document.querySelector(".box19").style.display = "none";
          document.querySelector(".box20").style.display = "none";
          document.querySelector(".box21").style.display = "none";
          document.querySelector(".box15").style.display = "block";
          document.querySelector(".box16").style.display = "block";
          document.querySelector(".box17").style.display = "block";
          break;
        case "Vg12Button2":
          document.querySelector(".box11").style.display = "none";
          document.querySelector(".box12").style.display = "none";
          document.querySelector(".box13").style.display = "none";
          document.querySelector(".box14").style.display = "none";
          document.querySelector(".box15").style.display = "none";
          document.querySelector(".box16").style.display = "none";
          document.querySelector(".box17").style.display = "none";
          document.querySelector(".box19").style.display = "none";
          document.querySelector(".box20").style.display = "none";
          document.querySelector(".box21").style.display = "none";
          document.querySelector(".box18").style.display = "block";
          break;
        case "Vg12Button3":
          document.querySelector(".box11").style.display = "none";
          document.querySelector(".box12").style.display = "none";
          document.querySelector(".box13").style.display = "none";
          document.querySelector(".box14").style.display = "none";
          document.querySelector(".box15").style.display = "none";
          document.querySelector(".box16").style.display = "none";
          document.querySelector(".box17").style.display = "none";
          document.querySelector(".box18").style.display = "none";
          document.querySelector(".box19").style.display = "block";
          document.querySelector(".box20").style.display = "block";
          document.querySelector(".box21").style.display = "block";
          break;
      }
    });
  });
});
document.getElementById("Vg12Button").click();
document.getElementById("g11Button").click();
document.getElementById("Vg11Button").click();

document.addEventListener("DOMContentLoaded", function() {
  // Get reference to the G12 button
  var g12Button = document.getElementById("g12Button");

  // Add click event listener to the G12 button
  g12Button.addEventListener("click", function() {
      // Show the sections when G12 button is clicked
      document.getElementById("genpy1").style.display = "block";
      document.getElementById("genpy2").style.display = "block";
      document.getElementById("genpcm1").style.display = "block";
      document.getElementById("genpcm2").style.display = "block";
      document.getElementById("basical").style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Get references to the buttons and sections
  var g11Button = document.getElementById("g11Button");
  var g12Button = document.getElementById("g12Button");
  var genpy1 = document.getElementById("genpy1");
  var genpy2 = document.getElementById("genpy2");
  var genpcm1 = document.getElementById("genpcm1");
  var genpcm2 = document.getElementById("genpcm2");
  var basical = document.getElementById("basical");

  // Add click event listener to the G11 button
  g11Button.addEventListener("click", function() {
      // Hide the sections when G11 button is clicked
      genpy1.style.display = "none";
      genpy2.style.display = "none";
      genpcm1.style.display = "none";
      genpcm2.style.display = "none";
      basical.style.display = "none";
  });

  // Add click event listener to the G12 button
  g12Button.addEventListener("click", function() {
      // Show the sections when G12 button is clicked
      genpy1.style.display = "block";
      genpy2.style.display = "block";
      genpcm1.style.display = "block";
      genpcm2.style.display = "block";
      basical.style.display = "block";
  });
});

document.getElementById("but1").addEventListener("click", function() {
  // Scroll to the learningmats section
  document.querySelector(".butL").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("but2").addEventListener("click", function() {
  // Scroll to the vods section
  document.querySelector(".butV").scrollIntoView({ behavior: 'smooth' });
});


document.getElementById("but3").addEventListener("click", function() {
  // Scroll to the prac section
  document.querySelector(".butP").scrollIntoView({ behavior: 'smooth' });
});





