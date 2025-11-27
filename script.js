// animacion 1
let anim1 = lottie.loadAnimation({
    container: document.getElementById('animacion1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animacion1.json'
});

// animacion 2
let anim2 = null;

function irAPantalla2() {
    document.getElementById('pantalla1').classList.remove('visible');
    document.getElementById('pantalla2').classList.add('visible');

    // Destruir la animacion anterior
    if (anim2) {
        anim2.destroy();
    }

    // Cargar animación 2 una sola vez
    anim2 = lottie.loadAnimation({
        container: document.getElementById('animacion2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'animacion2.json'
    });
}

function volverInicio() {
    document.getElementById('pantalla2').classList.remove('visible');
    document.getElementById('pantalla1').classList.add('visible');

    // Destruir la animacion 2
    if (anim2) {
        anim2.destroy();
        anim2 = null;
    }
}
