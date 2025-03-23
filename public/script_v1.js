const entradaLista = document.getElementById('entrada-lista');
const entryType = document.getElementById('entry-type');
const nivelFields = document.getElementById('nivel-fields');
const duracionInput = document.getElementById('duracion');
const ciegaChicaInput = document.getElementById('ciega-chica');
const ciegaGrandeInput = document.getElementById('ciega-grande');

let entradas = []; // Array para almacenar las entradas

// Muestra u oculta campos adicionales según el tipo de entrada
entryType.addEventListener('change', () => {
    if (entryType.value === 'nivel') {
        nivelFields.style.display = 'block';
    } else {
        nivelFields.style.display = 'none';
    }
});

// Función para agregar una entrada a la lista
function agregarEntrada() {
    const tipo = entryType.value;
    const duracion = parseInt(duracionInput.value);

    if (isNaN(duracion) || duracion <= 0) {
        alert('Por favor ingresa una duración válida.');
        return;
    }

    if (tipo === 'nivel') {
        const ciegaChica = parseInt(ciegaChicaInput.value);
        const ciegaGrande = parseInt(ciegaGrandeInput.value);

        if (isNaN(ciegaChica) || isNaN(ciegaGrande) || ciegaChica <= 0 || ciegaGrande <= 0) {
            alert('Por favor ingresa valores válidos para las ciegas.');
            return;
        }

        // Agrega un nivel a la lista de entradas
        entradas.push({ tipo: 'nivel', ciegaChica, ciegaGrande, duracion });
    } else {
        // Agrega una pausa a la lista de entradas
        entradas.push({ tipo: 'pausa', duracion });
    }

    // Resetea los campos del formulario
    ciegaChicaInput.value = '';
    ciegaGrandeInput.value = '';
    duracionInput.value = '';
    actualizarListaEntradas();
}

// Función para mostrar la lista de entradas
function actualizarListaEntradas() {
    entradaLista.innerHTML = '';
    entradas.forEach((entrada, index) => {
        const li = document.createElement('li');
        if (entrada.tipo === 'nivel') {
            li.textContent = `Nivel ${index + 1}: Ciega Chica: ${entrada.ciegaChica}, Ciega Grande: ${entrada.ciegaGrande}, Duración: ${entrada.duracion} min`;
        } else {
            li.textContent = `Pausa ${index + 1}: Duración: ${entrada.duracion} min`;
        }
        entradaLista.appendChild(li);
    });
}

// Función para iniciar el reloj (lo desarrollaremos en el siguiente chunk)
function iniciarReloj() {
    if (entradas.length === 0) {
        alert('Agrega al menos una entrada antes de iniciar el reloj.');
        return;
    }

    alert('Reloj iniciado. ¡Vamos al próximo chunk para configurar el timer!');
}


//
// Código temporizador
//

let entradaActual = 0; // Índice de la entrada actual
let timerInterval; // Intervalo para el temporizador

// Función para iniciar el temporizador del reloj
function iniciarReloj() {
    if (entradas.length === 0) {
        alert('Agrega al menos una entrada antes de iniciar el reloj.');
        return;
    }

    entradaActual = 0; // Inicia en la primera entrada
    iniciarTemporizador(entradas[entradaActual]);
}

// Función que inicia el temporizador para una entrada específica
function iniciarTemporizador(entrada) {
    let tiempoRestante = entrada.duracion * 60; // Convierte minutos a segundos

    // Muestra información de la entrada actual
    mostrarEntradaActual(entrada);

    timerInterval = setInterval(() => {
        const minutos = Math.floor(tiempoRestante / 60);
        const segundos = tiempoRestante % 60;

        document.getElementById('timer').textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

        // Si el tiempo llega a cero, cambia a la siguiente entrada
        if (tiempoRestante <= 0) {
            clearInterval(timerInterval);
            notificarCambio();
            avanzarEntrada();
        }

        tiempoRestante--;
    }, 1000);
}

// Función para mostrar la entrada actual
function mostrarEntradaActual(entrada) {
    const info = document.getElementById('entrada-actual-info');
    if (entrada.tipo === 'nivel') {
        info.textContent = `Nivel: Ciega Chica ${entrada.ciegaChica}, Ciega Grande ${entrada.ciegaGrande}, Duración: ${entrada.duracion} min`;
    } else {
        info.textContent = `Pausa: Duración: ${entrada.duracion} min`;
    }
}

// Función para avanzar a la siguiente entrada
function avanzarEntrada() {
    entradaActual++;
    if (entradaActual < entradas.length) {
        iniciarTemporizador(entradas[entradaActual]);
    } else {
        // Fin del reloj de póquer, no quedan más entradas
        document.getElementById('entrada-actual-info').textContent = 'Reloj finalizado';
        document.getElementById('timer').textContent = '00:00';
        notificarCambio(); // Sonido al final
    }
}



// Función para notificar cambio de nivel o pausa
function notificarCambio() {
    const audio = new Audio('sonido-notificacion.waw'); // Archivo de sonido (agregar en la carpeta 'public')
    audio.play();
}
