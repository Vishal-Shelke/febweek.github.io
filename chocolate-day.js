// ============================================
// CHOCOLATE DAY JAVASCRIPT
// ============================================

// Create Chocolate Drips
function createChocolateDrips() {
    const container = document.getElementById('chocolateDrips');
    if (!container) return;
    
    for (let i = 0; i < 15; i++) {
        const drip = document.createElement('div');
        drip.className = 'drip';
        drip.style.left = Math.random() * 100 + '%';
        drip.style.animationDuration = (Math.random() * 3 + 3) + 's';
        drip.style.animationDelay = Math.random() * 5 + 's';
        drip.style.width = (Math.random() * 20 + 20) + 'px';
        container.appendChild(drip);
    }
}

// Open Chocolate Box
let chocolateBoxOpened = false;
function openChocolateBox() {
    const box = document.getElementById('chocolateBox');
    if (box && !chocolateBoxOpened) {
        box.classList.add('opened');
        chocolateBoxOpened = true;
    }
}

// Eat Chocolate
function eatChocolate(element) {
    if (!chocolateBoxOpened) {
        openChocolateBox();
        return;
    }
    
    if (element.classList.contains('eaten')) return;
    
    const flavor = element.getAttribute('data-flavor');
    const flavorDisplay = document.getElementById('flavorDisplay');
    
    // Add eaten class
    element.classList.add('eaten');
    
    // Show flavor message
    if (flavorDisplay) {
        flavorDisplay.innerHTML = `<p>💕 ${flavor} 💕</p>`;
        flavorDisplay.style.animation = 'none';
        flavorDisplay.offsetHeight;
        flavorDisplay.style.animation = 'fadeIn 0.5s ease';
    }
    
    // Create chocolate particle effect
    createChocolateParticles(element);
    
    // Play a sweet sound effect (visual feedback instead)
    createSweetEmoji(element);
}

function createChocolateParticles(element) {
    const rect = element.getBoundingClientRect();
    const colors = ['#8b4513', '#5d3a1a', '#d4a574', '#2d1810'];
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: particleFly 0.8s ease-out forwards;
            --tx: ${(Math.random() - 0.5) * 100}px;
            --ty: ${(Math.random() - 0.5) * 100}px;
        `;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 800);
    }
}

function createSweetEmoji(element) {
    const rect = element.getBoundingClientRect();
    const emojis = ['😋', '🤤', '😍', '💕', '✨'];
    
    const emoji = document.createElement('div');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.cssText = `
        position: fixed;
        left: ${rect.left + rect.width / 2}px;
        top: ${rect.top}px;
        font-size: 30px;
        pointer-events: none;
        z-index: 1000;
        animation: emojiFloat 1s ease-out forwards;
    `;
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 1000);
}

// Add animations
const chocolateStyles = document.createElement('style');
chocolateStyles.textContent = `
    @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(10px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes particleFly {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes emojiFloat {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-50px) scale(1.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(chocolateStyles);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createChocolateDrips();
});