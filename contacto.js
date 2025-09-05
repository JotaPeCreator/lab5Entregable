// Validación de formulario
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
 const name = document.getElementById('name').value;
 const motivo = document.getElementById('motivo').value;
 const email = document.getElementById('email').value;
 if (name === '' || motivo === '' || email === '') {
 alert('Por favor, completa todos los campos.');
 event.preventDefault();
 } else {
 alert('¡Formulario enviado correctamente!');
 }
});