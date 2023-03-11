//boton curriculum

const btnDocumento = document.getElementById("btn-documento");

    btnDocumento.addEventListener("click", function() {
      window.open('assets/data/Profile.pdf', "_blank");
    });

//ver certificados

const ai = document.getElementById("certificado-AI");
const agility = document.getElementById("certificado-agility");
const desarrollo = document.getElementById("certificado-desarrollo");
const htmlAlura = document.getElementById("certificado-html");
const progAlura = document.getElementById("certificado-programacionAlura");
const progEGG = document.getElementById("certificado-programacionEGG");
const progTel = document.getElementById("certificado-programacionTelefonica");
const transp = document.getElementById("certificado-transporte");
const utn = document.getElementById("certificado-utn");
const itTelef = document.getElementById("certificado-IT");

ai.addEventListener("click", function() {
  window.open('assets/img/certificados/certificado_AI.png', "_blank");
});

agility.addEventListener("click", function() {
  window.open('assets/img/certificados/certificado_ALURA_agility.png', "_blank");
});

htmlAlura.addEventListener("click", function() {
  window.open('assets/img/certificados/certificado_ALURA_html.png', "_blank");
});

progAlura.addEventListener("click", function() {
  window.open('assets/img/certificados/certificado_ALURA_programacion.png', "_blank");
});

progEGG.addEventListener("click", function() {
  window.open('assets/img/certificados/certificado_EGG_programacion.png', "_blank");
});

progTel.addEventListener("click", function() {
  window.open('assets/img/certificados/certificado_FT_programacion.png', "_blank");
});

transp.addEventListener("click", function() {
  window.open('assets/img/certificados/certificado_FT_transporte.png', "_blank");
});

utn.addEventListener("click", function() {
  window.open('assets/img/certificados/certificado_UTN.png', "_blank");
});

desarrollo.addEventListener("click", function() {
  window.open('assets/img/certificados/certificado_ALURA_desarrollo.png', "_blank");
});
itTelef.addEventListener("click", function() {
  window.open('assets/img/certificados/certificado_FT_IT.png', "_blank");
});



//formulario

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');

if (!form || !nameInput || !emailInput || !subjectInput || !messageInput || !submitBtn) {
  console.error('Error: faltan elementos o hay campos vacios.');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();
  
  if (subject.length < 2 || subject.length > 50 || message.length < 2 || message.length > 300) {
    alert('Por favor, completa todos los campos y asegúrate de que el campo de mensaje tenga hasta 300 caracteres y el campo Tema tenga entre 2 y 50 caracteres.');
  } else if (nameInput.value === '') {
    alert('El campo de nombre es obligatorio.');
  } else if (emailInput.value === '') {
    alert('El campo de correo electrónico es obligatorio.');
  } else if (!isValidEmail(emailInput.value)) {
    alert('El correo electrónico ingresado no es válido.');
  } else {
    alert('Mensaje enviado con éxito!');
    form.reset();
    submitBtn.disabled = true;
  }
});

nameInput.addEventListener('input', checkInputs);
emailInput.addEventListener('input', checkInputs);
subjectInput.addEventListener('input', checkInputs);
messageInput.addEventListener('input', checkInputs);

function checkInputs() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  if (name !== '' && email !== '' && isValidEmail(email) && subject.length >= 2 && subject.length <= 50 && message.length >= 2 && message.length <= 300) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function isValidEmail(email) {
  // validar "@" y "."
  return email.includes('@') && email.includes('.');
}
