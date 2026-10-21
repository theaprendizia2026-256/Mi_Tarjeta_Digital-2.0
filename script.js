const carousel = document.getElementById('carousel');
const box = document.getElementById('box');
const cards = document.querySelectorAll('.card-3d');

let currentRotation = 0;
let startX = 0;
let isDragging = false;
let dragStartX = 0;

function updateActiveCard() {
    let normalized = ((-currentRotation % 360) + 360) % 360;
    let activeIndex = Math.round(normalized / 30) % 12;

    cards.forEach((card, index) => {
        if (index === activeIndex) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

function setRotation(deg, smooth = false) {
    if (smooth) {
        box.classList.add('smooth');
    } else {
        box.classList.remove('smooth');
    }
    currentRotation = deg;
    box.style.setProperty('--rot', `${currentRotation}deg`);
    updateActiveCard();
}

// INICIO TÁCTIL O MOUSE
function handleStart(clientX) {
    isDragging = true;
    startX = clientX;
    dragStartX = currentRotation;
    box.classList.remove('smooth');
}

// MOVIMIENTO (TIEMPO REAL)
function handleMove(clientX) {
    if (!isDragging) return;
    const deltaX = clientX - startX;
    // Factor de sensibilidad para que el arrastre sea cómodo
    const sensitivity = 0.4; 
    currentRotation = dragStartX + (deltaX * sensitivity);
    box.style.setProperty('--rot', `${currentRotation}deg`);
    updateActiveCard();
}

// FIN DE ARRASTRE (SNAP AUTOMÁTICO A LA TARJETA MÁS CERCANA)
function handleEnd() {
    if (!isDragging) return;
    isDragging = false;
    
    // Calcular el múltiplo de 30 grados más cercano
    let nearestCardIndex = Math.round(currentRotation / 30);
    let targetRotation = nearestCardIndex * 30;
    
    setRotation(targetRotation, true);
}

// Eventos Táctiles (Móvil)
carousel.addEventListener('touchstart', (e) => handleStart(e.touches[0].clientX), { passive: true });
window.addEventListener('touchmove', (e) => { if (isDragging) handleMove(e.touches[0].clientX); }, { passive: true });
window.addEventListener('touchend', handleEnd);

// Eventos de Mouse (Escritorio)
carousel.addEventListener('mousedown', (e) => {
    handleStart(e.clientX);
    carousel.style.cursor = 'grabbing';
});
window.addEventListener('mousemove', (e) => {
    if (isDragging) handleMove(e.clientX);
});
window.addEventListener('mouseup', () => {
    if (isDragging) {
        handleEnd();
        carousel.style.cursor = 'grab';
    }
});

// Rueda del ratón
carousel.addEventListener('wheel', (e) => {
    e.preventDefault();
    let nearestCardIndex = Math.round(currentRotation / 30);
    const direction = e.deltaY > 0 ? -1 : 1;
    let targetRotation = (nearestCardIndex + direction) * 30;
    setRotation(targetRotation, true);
}, { passive: false });

// Inicializar posición
updateActiveCard();
