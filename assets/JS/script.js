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
    event.preventDefault();  // Prevenir el comportamiento por defecto del formulario

    // Aquí puedes añadir el código para procesar y enviar los datos del formulario
    
    // Mostrar un mensaje de confirmación
    document.getElementById('confirmation').style.display = 'block';

    // Borrar los datos del formulario
    this.reset();
});

