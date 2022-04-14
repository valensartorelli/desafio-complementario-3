let boton = document.querySelector('.pd_gl-cta.pd_gl-cta--primary');
let bolsa = document.querySelector('.fa-shopping-bag');
let notificacion = document.getElementById('circle');
let numero = 0;


boton.onclick = function agregarItem() {
    notificacion.classList.add('notificacion');
    numero += 1
    if (numero >= 1) {
        notificacion.innerHTML = numero
    }
}

