const btnEnviar = document.querySelector('#enviar');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');


const eventListeners = () => {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
};

const iniciarApp = () => {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
};

const validarFormulario = (event) => {
    if (event.target.value.length > 0) {
        //TODO
    } else {
        event.target.classList.add('border', 'border-red-500');
        mostrarError();
    }
};

const mostrarError = () => {
    const error = document.createElement('p');
    error.textContent = 'Todos los campos son obligatorios';
    error.classList.add(
        'text-red-500',
        'mt-5',
        'text-center',
        'my-2',
        'background-red-100',
        'p-3',
        'error',
        'border',
        'border-red-500'
    );

    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
        formulario.appendChild(error);
    };
};


eventListeners();