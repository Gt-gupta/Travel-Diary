document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('profileImage');
            img.src = e.target.result;
            img.style.display = 'block';
            document.getElementById('uploadButton').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('uploadButton').addEventListener('click', function() {
    const imgSrc = document.getElementById('profileImage').src;
    if (imgSrc) {
        // Simulate an upload action
        alert('Photo uploaded/saved successfully!');
        
        // In a real application, you would send the image to the server here.
        // For example:
        // fetch('/upload', {
        //     method: 'POST',
        //     body: JSON.stringify({ image: imgSrc }),
        //     headers: { 'Content-Type': 'application/json' }
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));
    }
});
