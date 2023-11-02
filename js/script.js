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