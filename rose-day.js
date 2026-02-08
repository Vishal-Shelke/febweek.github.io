// ============================================
// ROSE DAY JAVASCRIPT
// ============================================

// Create Falling Petals
function createFallingPetals() {
    const container = document.getElementById('fallingPetals');
    if (!container) return;
    
    const petals = ['🌹', '🌸', '🏵️', '💮', '🪷'];
    
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('span');
        petal.className = 'petal-fall';
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDuration = (Math.random() * 5 + 8) + 's';
        petal.style.animationDelay = Math.random() * 10 + 's';
        petal.style.fontSize = (Math.random() * 15 + 15) + 'px';
        container.appendChild(petal);
    }
}

// Bouquet Collection
let bouquet = [];

function collectRose(color) {
    const roses = {
        'red': '🌹',
        'pink': '🌸',
        'white': '🤍',
        'yellow': '🌻'
    };
    
    bouquet.push(roses[color]);
    updateBouquetDisplay();
    
    // Create floating rose animation
    createFloatingRose(roses[color]);
    
    // Show love message
    showRoseMessage(color);
}

function updateBouquetDisplay() {
    const display = document.getElementById('bouquetDisplay');
    if (display) {
        display.textContent = bouquet.join(' ');
    }
}

function createFloatingRose(rose) {
    const floater = document.createElement('div');
    floater.textContent = rose;
    floater.style.cssText = `
        position: fixed;
        font-size: 40px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: roseCollect 1s ease-out forwards;
        pointer-events: none;
        z-index: 1000;
    `;
    document.body.appendChild(floater);
    
    setTimeout(() => floater.remove(), 1000);
}

function showRoseMessage(color) {
    const messages = {
        'red': '❤️ A red rose for eternal love!',
        'pink': '💗 A pink rose for gratitude and admiration!',
        'white': '🤍 A white rose for purity and innocence!',
        'yellow': '💛 A yellow rose for friendship and joy!'
    };
    
    // Create toast notification
    const toast = document.createElement('div');
    toast.textContent = messages[color];
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 107, 107, 0.9);
        color: white;
        padding: 15px 30px;
        border-radius: 30px;
        font-family: 'Dancing Script', cursive;
        font-size: 1.2rem;
        animation: toastIn 0.5s ease-out;
        z-index: 1000;
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'toastOut 0.5s ease-out forwards';
        setTimeout(() => toast.remove(), 500);
    }, 2000);
}

// Add animations
const roseStyles = document.createElement('style');
roseStyles.textContent = `
    @keyframes roseCollect {
        0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        100% { transform: translate(-50%, -200%) scale(2); opacity: 0; }
    }
    
    @keyframes toastIn {
        0% { transform: translateX(-50%) translateY(50px); opacity: 0; }
        100% { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    
    @keyframes toastOut {
        0% { transform: translateX(-50%) translateY(0); opacity: 1; }
        100% { transform: translateX(-50%) translateY(50px); opacity: 0; }
    }
`;
document.head.appendChild(roseStyles);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createFallingPetals();
});