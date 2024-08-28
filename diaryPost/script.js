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
        
        // Populate the images array with selected images
        images = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    images.push(e.target.result);
                    if (i === 0) {
                        // Show the first image immediately
                        carouselImage.src = images[0];
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
