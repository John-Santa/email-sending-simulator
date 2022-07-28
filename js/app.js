const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');


const eventListeners = () => {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
    btnEnviar.addEventListener('click', enviarEmail);
    btnReset.addEventListener('click', resetearFormulario);
};

const iniciarApp = () => {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
};

const validarFormulario = (event) => {

    if (event.target.value.length > 0) {
        if (event.target.type === 'email') {
            validarEmail(event);
        } else {
            event.target.classList.remove('border', 'border-red-500');
            event.target.classList.add('border', 'border-green-500');
            const error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }
        }
    } else {
        event.target.classList.remove('border', 'border-green-500');
        event.target.classList.add('border', 'border-red-500');
        mostrarError();
    }

    validarVacios();

};

const validarVacios = () => {
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    } else {
        btnEnviar.disabled = true;
        btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
    }
};

const validarEmail = (event) => {
    const expresion = /\w+@\w+\.+[a-z]/;
    if (expresion.test(event.target.value)) {
        event.target.classList.remove('border', 'border-red-500');
        event.target.classList.add('border', 'border-green-500');
        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }
    } else {
        event.target.classList.remove('border', 'border-green-500');
        event.target.classList.add('border', 'border-red-500');
        mostrarError('El email no es valido');
    }
};

const mostrarError = ( mensajeError = 'Todos los campos son obligatorios') => {
    const error = document.createElement('p');
    error.textContent = mensajeError;
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
    }
};


const enviarEmail = (event) => {
    event.preventDefault();
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'flex';
    setTimeout(() => {
        spinnerGif.style.display = 'none';
        Swal.fire({
            title: '¡Gracias!',
            text: 'Mensaje enviado correctamente',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
    }, 3000);

    setTimeout(() => {
        resetearFormulario();
    }, 4000);
};

const resetearFormulario = () => {
    formulario.reset();
    iniciarApp();
};

eventListeners();