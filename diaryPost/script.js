let currentImageIndex = 0;
let images = [];

document.getElementById('fileInput').addEventListener('change', function(event) {
    const files = event.target.files;
    const carousel = document.getElementById('carousel');
    const picDiv = document.getElementById('pic');
    const carouselImage = document.getElementById('carouselImage');
    
    if (files.length > 0) {
        // Hide the "Drag Photos Here" section
        picDiv.style.display = 'none';
        
        // Clear the images array
        images = [];
        let loadedImages = 0; // Counter to track the loaded images
        
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    images.push(e.target.result);
                    loadedImages++;

                    // Once all images are loaded, display the carousel
                    if (loadedImages === files.length) {
                        currentImageIndex = 0;
                        carouselImage.src = images[currentImageIndex];
                        carousel.style.display = 'flex';
                        updateButtons();
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    } else {
        // If no files are selected, reset everything
        images = [];
        picDiv.style.display = 'block';
        carousel.style.display = 'none';
    }
});

document.getElementById('prevButton').addEventListener('click', function() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateImage();
    }
});

document.getElementById('nextButton').addEventListener('click', function() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        updateImage();
    }
});

function updateImage() {
    document.getElementById('carouselImage').src = images[currentImageIndex];
    updateButtons();
}

function updateButtons() {
    document.getElementById('prevButton').disabled = currentImageIndex === 0;
    document.getElementById('nextButton').disabled = currentImageIndex === images.length - 1;
}


document.getElementById('postButton').addEventListener('click', function() {
    // Get input values
    const experience = document.getElementById('experience').value;
    const location = document.getElementById('location').value;
    const state = document.getElementById('stateInput').value;
    const country = document.getElementById('countryInput').value;
    const amountSpent = document.getElementById('amountSpent').value;
    const tourGuide = document.getElementById('tourGuide').value;

    // Example of how to process the input
    console.log('Experience:', experience);
    console.log('Location:', location);
    console.log('State:', state);
    console.log('Country:', country);
    console.log('Amount Spent:', amountSpent);
    console.log('Tour Guide:', tourGuide);

    // You can now send this data to your server or use it however you need
    alert('Your post has been submitted successfully!');

    // Optional: Clear the form fields after submission
    document.getElementById('experience').value = '';
    document.getElementById('location').value = '';
    document.getElementById('stateInput').value = '';
    document.getElementById('countryInput').value = '';
    document.getElementById('amountSpent').value = '';
    document.getElementById('tourGuide').value = '';
    // Clear images and reset the carousel
    images = [];
    currentImageIndex = 0;
    const picDiv = document.getElementById('pic');
    const carousel = document.getElementById('carousel');
    const carouselImage = document.getElementById('carouselImage');

    // Hide the carousel and show the "Drag Photos Here" section
    carousel.style.display = 'none';
    picDiv.style.display = 'block';
    carouselImage.src = '';  // Clear the carousel image
    updateButtons(); // Disable the buttons since there are no images
});

