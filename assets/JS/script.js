document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.move-on-hover');

    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            image.style.transform = 'translateY(-10px)';
        });

        image.addEventListener('mouseout', function() {
            image.style.transform = 'translateY(0)';
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('confirmation').style.display = 'block';

    this.reset();
});

