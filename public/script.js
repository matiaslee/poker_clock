const entradaLista = document.getElementById('entrada-lista');


configuraciones = {
    'custom': [], 
    'torneo': [
        { tipo: 'nivel', ciegaChica:   10, ciegaGrande:   20, duracion: 10 },
        { tipo: 'nivel', ciegaChica:   20, ciegaGrande:   40, duracion: 10 },
        { tipo: 'nivel', ciegaChica:   30, ciegaGrande:   60, duracion: 10 },
        { tipo: 'nivel', ciegaChica:   50, ciegaGrande:  100, duracion: 10 },
        { tipo: 'nivel', ciegaChica:   80, ciegaGrande:  160, duracion: 10 },
        { tipo: 'nivel', ciegaChica:  100, ciegaGrande:  200, duracion: 10 },
        // 1hs
        { tipo: 'pausa', duracion: 10 },
        { tipo: 'nivel', ciegaChica:  120, ciegaGrande:  250, duracion: 8 },
        { tipo: 'nivel', ciegaChica:  150, ciegaGrande:  300, duracion: 8 },
        { tipo: 'nivel', ciegaChica:  200, ciegaGrande:  400, duracion: 8 },
        { tipo: 'nivel', ciegaChica:  300, ciegaGrande:  600, duracion: 8 },
        { tipo: 'nivel', ciegaChica:  400, ciegaGrande:  800, duracion: 8 },
        { tipo: 'nivel', ciegaChica:  500, ciegaGrande:  1000, duracion: 8 },
        // Bloque 3
        { tipo: 'nivel', ciegaChica:   800, ciegaGrande:  1600, duracion: 7 },
        { tipo: 'nivel', ciegaChica:  1000, ciegaGrande:  2000, duracion: 7 },
        { tipo: 'nivel', ciegaChica:  1200, ciegaGrande:  2500, duracion: 7 },
        { tipo: 'nivel', ciegaChica:  1500, ciegaGrande:  3000, duracion: 7 },
        { tipo: 'nivel', ciegaChica:  2000, ciegaGrande:  4000, duracion: 7 },
        { tipo: 'nivel', ciegaChica:  3000, ciegaGrande:  6000, duracion: 7 },
        // Bloque 4
        { tipo: 'nivel', ciegaChica:  4000, ciegaGrande:  8000, duracion: 5 },
        { tipo: 'nivel', ciegaChica:  5000, ciegaGrande: 10000, duracion: 5 },
        { tipo: 'nivel', ciegaChica:  7000, ciegaGrande: 15000, duracion: 5 },
        { tipo: 'nivel', ciegaChica: 10000, ciegaGrande: 20000, duracion: 5 },
        { tipo: 'nivel', ciegaChica: 12000, ciegaGrande: 25000, duracion: 5 },
        { tipo: 'nivel', ciegaChica: 15000, ciegaGrande: 30000, duracion: 5 },
        // Bloque 5
        { tipo: 'nivel', ciegaChica: 20000, ciegaGrande: 40000, duracion: 3 },
        { tipo: 'nivel', ciegaChica: 25000, ciegaGrande: 50000, duracion: 3 },
        { tipo: 'nivel', ciegaChica: 30000, ciegaGrande: 60000, duracion: 3 },
        { tipo: 'nivel', ciegaChica: 40000, ciegaGrande: 80000, duracion: 3 },
        { tipo: 'nivel', ciegaChica: 50000, ciegaGrande:100000, duracion: 3 },
        { tipo: 'nivel', ciegaChica: 60000, ciegaGrande:120000, duracion: 3 },
    ],
    'sit-and-go' : [
        { tipo: 'nivel', ciegaChica:   10, ciegaGrande:   20, duracion: 8 },
        { tipo: 'nivel', ciegaChica:   20, ciegaGrande:   40, duracion: 8 },
        { tipo: 'nivel', ciegaChica:   30, ciegaGrande:   60, duracion: 8 },
        { tipo: 'nivel', ciegaChica:   50, ciegaGrande:  100, duracion: 8 },
        { tipo: 'nivel', ciegaChica:   80, ciegaGrande:  160, duracion: 8 },
        { tipo: 'nivel', ciegaChica:  100, ciegaGrande:  200, duracion: 8 },
        // 1hs
        { tipo: 'nivel', ciegaChica:  120, ciegaGrande:  250, duracion: 6 },
        { tipo: 'nivel', ciegaChica:  150, ciegaGrande:  300, duracion: 6 },
        { tipo: 'nivel', ciegaChica:  200, ciegaGrande:  400, duracion: 6 },
        { tipo: 'nivel', ciegaChica:  300, ciegaGrande:  600, duracion: 6 },
        { tipo: 'nivel', ciegaChica:  400, ciegaGrande:  800, duracion: 6 },
        { tipo: 'nivel', ciegaChica:  500, ciegaGrande:  1000, duracion: 6 },
        // Bloque 3
        { tipo: 'nivel', ciegaChica:   800, ciegaGrande:  1600, duracion: 5 },
        { tipo: 'nivel', ciegaChica:  1000, ciegaGrande:  2000, duracion: 5 },
        { tipo: 'nivel', ciegaChica:  1200, ciegaGrande:  2500, duracion: 5 },
        { tipo: 'nivel', ciegaChica:  1500, ciegaGrande:  3000, duracion: 5 },
        { tipo: 'nivel', ciegaChica:  2000, ciegaGrande:  4000, duracion: 5 },
        { tipo: 'nivel', ciegaChica:  3000, ciegaGrande:  6000, duracion: 5 },
        // Bloque 4
        { tipo: 'nivel', ciegaChica:  4000, ciegaGrande:  8000, duracion: 4 },
        { tipo: 'nivel', ciegaChica:  5000, ciegaGrande: 10000, duracion: 4 },
        { tipo: 'nivel', ciegaChica:  7000, ciegaGrande: 15000, duracion: 4 },
        { tipo: 'nivel', ciegaChica: 10000, ciegaGrande: 20000, duracion: 4 },
        { tipo: 'nivel', ciegaChica: 12000, ciegaGrande: 25000, duracion: 4 },
        { tipo: 'nivel', ciegaChica: 15000, ciegaGrande: 30000, duracion: 4 },
        // Bloque 5
        { tipo: 'nivel', ciegaChica: 20000, ciegaGrande: 40000, duracion: 2 },
        { tipo: 'nivel', ciegaChica: 25000, ciegaGrande: 50000, duracion: 2 },
        { tipo: 'nivel', ciegaChica: 30000, ciegaGrande: 60000, duracion: 2 },
        { tipo: 'nivel', ciegaChica: 40000, ciegaGrande: 80000, duracion: 2 },
        { tipo: 'nivel', ciegaChica: 50000, ciegaGrande:100000, duracion: 2 },
        { tipo: 'nivel', ciegaChica: 60000, ciegaGrande:120000, duracion: 2 },
    ]
}

let entradas = [];

const sonidoClick = new Audio("click.waw");

function reproducirClick() {
    sonidoClick.currentTime = 0; // Reinicia el sonido por si ya se ha reproducido
    sonidoClick.play();
}

// variables para el reloj
let timerInterval;  // puntero al "timer"
let entradaActual = 0;
let tiempoRestante = 0;
let relojAndando = false;

let editandoIndex = null; // Guardamos el índice de la entrada que se está editando


// Agregar nivel a la lista
function agregarNivel() {
    const nuevoNivel = { tipo: 'nivel', ciegaChica: 10, ciegaGrande: 10, duracion: 10 };
    entradas.push(nuevoNivel);
    actualizarListaEntradas();
}

// Función para agregar una pausa directamente a la tabla con valores predeterminados
function agregarPausa() {
    const nuevaPausa = { tipo: 'pausa', duracion: 10 };
    entradas.push(nuevaPausa);
    actualizarListaEntradas();
}

// Actualizar la lista de entradas en la interfaz
function actualizarListaEntradas() {
    const tbody = document.getElementById('entrada-tabla').querySelector('tbody');
    tbody.innerHTML = ''; // Limpiar la tabla antes de actualizar

    entradas.forEach((entrada, index) => {
        const row = document.createElement('tr');

        // Columna de tipo (Nivel o Pausa)
        const tipoCell = document.createElement('td');
        tipoCell.textContent = entrada.tipo === 'nivel' ? `${index + 1}. Nivel` : `${index + 1}. Pausa`;
        row.appendChild(tipoCell);

        // Columna de ciega chica
        const ciegaChicaCell = document.createElement('td');
        if (entrada.tipo === 'nivel') {
            const ciegaChicaInput = document.createElement('input');
            ciegaChicaInput.type = 'number';
            ciegaChicaInput.value = entrada.ciegaChica;
            ciegaChicaInput.min = 1;
            ciegaChicaInput.onchange = (e) => {
                entradas[index].ciegaChica = parseInt(e.target.value);
            };
            ciegaChicaCell.appendChild(ciegaChicaInput);
        } else {
            ciegaChicaCell.textContent = '-';
        }
        row.appendChild(ciegaChicaCell);

        // Columna de ciega grande
        const ciegaGrandeCell = document.createElement('td');
        if (entrada.tipo === 'nivel') {
            const ciegaGrandeInput = document.createElement('input');
            ciegaGrandeInput.type = 'number';
            ciegaGrandeInput.value = entrada.ciegaGrande;
            ciegaGrandeInput.min = 1;
            ciegaGrandeInput.onchange = (e) => {
                entradas[index].ciegaGrande = parseInt(e.target.value);
            };
            ciegaGrandeCell.appendChild(ciegaGrandeInput);
        } else {
            ciegaGrandeCell.textContent = '-';
        }
        row.appendChild(ciegaGrandeCell);

        // Columna de duración
        const duracionCell = document.createElement('td');
        const duracionInput = document.createElement('input');
        duracionInput.type = 'number';
        duracionInput.value = entrada.duracion;
        duracionInput.min = 1;
        duracionInput.onchange = (e) => {
            entradas[index].duracion = parseInt(e.target.value);
        };
        duracionCell.appendChild(duracionInput);
        row.appendChild(duracionCell);

        // Columna de acciones (solo botón de borrar)
        const accionesCell = document.createElement('td');
        const borrarBtn = document.createElement('button');
        borrarBtn.textContent = 'Borrar';
        borrarBtn.onclick = () => borrarEntrada(index);
        accionesCell.appendChild(borrarBtn);

        row.appendChild(accionesCell);
        tbody.appendChild(row);
    });
}

// Editar una entrada
function editarEntrada(index) {
    const entrada = entradas[index];
    if (entrada.tipo === 'nivel') {
        document.getElementById('ciega-chica-nivel').value = entrada.ciegaChica;
        document.getElementById('ciega-grande-nivel').value = entrada.ciegaGrande;
        document.getElementById('duracion-nivel').value = entrada.duracion;
        mostrarFormularioNivel();
    } else if (entrada.tipo === 'pausa') {
        document.getElementById('duracion-pausa').value = entrada.duracion;
        mostrarFormularioPausa();
    }
    editandoIndex = index; // Establecer el índice de la entrada que se está editando
}

// Borrar una entrada específica
function borrarEntrada(index) {
    entradas.splice(index, 1);
    actualizarListaEntradas();
}

// Funciones para el temporizador
function resetearReloj() {
    entradaActual = 0;
    tiempoRestante = 0;
    relojAndando = false;
    clearInterval(timerInterval);
    resetearEntradaActual();
    actualizarVisibilidad();
}

function iniciarReloj() {
    if (relojAndando === false) {

        if (entradas.length === 0) {
            alert('Agrega al menos una entrada antes de iniciar el reloj.');
            return;
        }

        let entrada = entradas[entradaActual]
        if (tiempoRestante <= 0) {
            tiempoRestante = entrada.duracion * 60;
        }
        mostrarTiempoRestante();
        mostrarEntradaActual(entrada);
        mostrarEntradaSiguiente();
        iniciarTemporizador(entrada);
        relojAndando = true;
        actualizarVisibilidad();
    }
}

function mostrarTiempoRestante() {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;

    document.getElementById('timer').textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}


function iniciarTemporizador(entrada) {
    timerInterval = setInterval(() => {
        tiempoRestante--;
        mostrarTiempoRestante();
        if (tiempoRestante <= 0) {
            clearInterval(timerInterval);
            notificarCambio();
            avanzarEntrada();
        }
    }, 1000);
}

function pausarReloj(){
    if (relojAndando === true) {
        clearInterval(timerInterval);
        relojAndando = false;
    }
}

function resetearEntradaActual(entrada) {
    const info = document.getElementById('entrada-actual-info');
    info.textContent = `Presiona "Iniciar" para comenzar el reloj.`;
    document.getElementById('timer').textContent = '00:00';
}


function mostrarEntradaActual(entrada) {
    const info = document.getElementById('entrada-actual-info');
    info.textContent = entrada.tipo === 'nivel'
        ? `${entrada.ciegaChica} / ${entrada.ciegaGrande} - Duración: ${entrada.duracion} mins - Nivel: ${entradaActual + 1}`
        : `Pausa - Duración ${entrada.duracion} min`;
}

function mostrarEntradaSiguiente() {
    const info = document.getElementById('entrada-siguiente-info');
    let hay_siguiente_entrada;
    let entrada;

    hay_siguiente_entrada = entradaActual + 1 < entradas.length;

    if (hay_siguiente_entrada) {
        entrada = entradas[entradaActual + 1];
        info.textContent = entrada.tipo === 'nivel'
            ? `(Siguiente Nivel: ${entrada.ciegaChica} / ${entrada.ciegaGrande} - Duración: ${entrada.duracion} mins)`
            : `(Siguiente Nivel: Pausa - Duración ${entrada.duracion} mins)`;

    }else{
        info.textContent = `Ultima Entrada...`;
    }
}



function avanzarEntrada() {
    entradaActual++;

    if (entradaActual < entradas.length) {
        let entrada = entradas[entradaActual];

        mostrarEntradaActual(entrada);
        mostrarEntradaSiguiente();

        tiempoRestante = entrada.duracion * 60;
        iniciarTemporizador(entrada);
    } else {
        notificarCambio();
        clearInterval(timerInterval)
        document.getElementById('entrada-actual-info').textContent = 'Reloj finalizado';
        document.getElementById('timer').textContent = '00:00';
        document.getElementById('entrada-siguiente-info').textContent = '';
    }
}

function notificarCambio() {
    const audio = new Audio('sonido-notificacion.waw');
    audio.play();
}

function actualizarVisibilidad() {
    const tabla = document.getElementById("entrada-tabla");
    const agregadores = document.getElementById("agregadores");
    const inicializador = document.getElementById("inicializador");
    const controladoresreloj = document.getElementById("controladoresreloj");
    const timer = document.getElementById("timer");
    const configuraciones = document.getElementById("configuraciones");

    if (relojAndando) {
        controladoresreloj.style.display = "block";
        timer.style.display = "block";

        tabla.style.display = "none"; // Oculta la tabla
        agregadores.style.display = "none";
        inicializador.style.display = "none";
        configuraciones.style.display = "none";


    } else {
        tabla.style.display = "table"; // Muestra la tabla
        agregadores.style.display = "block";
        inicializador.style.display = "block";
        configuraciones.style.display = "block";

        controladoresreloj.style.display = "none";
        timer.style.display = "none";
    }
}

// Función para cambiar las entradas según la opción seleccionada
function setEntradas(radioButton) {
    const tipoTorneo = radioButton.value; // Obtiene el valor del radio seleccionado
    entradas = [...configuraciones[tipoTorneo]]; // Copia la configuración seleccionada a la variable `entradas`
    actualizarListaEntradas(); // Actualiza la tabla si ya está mostrando las entradas
}

actualizarListaEntradas();
actualizarVisibilidad();
