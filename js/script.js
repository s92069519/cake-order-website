const menubtn=document.querySelector('#menu');
const nav= document.querySelector('.naviga');


const bodyClickHandler = (event) => {
    // Check if the clicked element is not the navigation or the menu button
    if (!nav.contains(event.target) && event.target !== menubtn) {
        // Remove the 'active-nav' class
        nav.classList.remove('active-nav');
    }
};

// Add click event listeners
menubtn.addEventListener('click', () => {
    nav.classList.toggle('active-nav');
});

document.body.addEventListener('click', bodyClickHandler);

//---------------------------------------------------------------
function changeImage(index) {
    // Get all images and radio buttons
    var images = document.querySelectorAll('.autoslide img');
    var radios = document.querySelectorAll('.imgradio input');

    // Hide all images
    images.forEach(function(img) {
      img.style.display = 'none';
    });

    // Display the selected image
    images[index].style.display = 'block';

    // Uncheck all radio buttons and check the selected one
    radios.forEach(function(radio) {
      radio.checked = false;
    });
    radios[index].checked = true;
  } 




  //arrow moving

   // Get the arrow icons
   const arrowBack = document.getElementById('arrow-back');
   const arrowForward = document.getElementById('arrow-forward');

   // Get the products container
   const productsContainer = document.querySelector('.products');

   // Function to move products left
   function moveProductsLeft() {
       productsContainer.scrollLeft -= 300; // Adjust the scroll value as needed
   }

   // Function to move products right
   function moveProductsRight() {
       productsContainer.scrollLeft += 300; // Adjust the scroll value as needed
   }

   // Add click event listeners to the arrow icons
   arrowBack.addEventListener('click', moveProductsLeft);
   arrowForward.addEventListener('click', moveProductsRight);