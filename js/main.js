document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const respuesta = document.getElementById('respuesta');

  if(nombre && email && mensaje){
    respuesta.style.color = 'green';
    respuesta.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado correctamente.`;
    e.target.reset();
  } else {
    respuesta.style.color = 'red';
    respuesta.textContent = 'Por favor completa todos los campos.';
  }
});
