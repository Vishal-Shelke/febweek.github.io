// ============================================
// TEDDY DAY JAVASCRIPT
// ============================================

// Create Floating Stars
function createFloatingStars() {
    const container = document.getElementById('floatingStars');
    if (!container) return;
    
    const stars = ['⭐', '🌟', '✨', '💫'];
    
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        star.textContent = stars[Math.floor(Math.random() * stars.length)];
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (Math.random() * 4 + 4) + 's';
        star.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(star);
    }
}

// Hug Counter
let hugCount = 0;
const hugMessages = [
    "Aww! That's so warm! 🤗",
    "Another hug? You're the sweetest! 💕",
    "Teddy loves your hugs! 🧸",
    "Sending virtual hugs back! 🤗💕",
    "Can't stop hugging! 😊",
    "This teddy is so lucky! 🧸💖",
    "Hugs make everything better! 🤗",
    "You're a hug champion! 🏆💕",
    "Teddy is blushing! 🧸😊",
    "Infinite hugs for you! ∞🤗"
];

function giveTeddyHug() {
    hugCount++;
    
    const countDisplay = document.getElementById('hugCount');
    if (countDisplay) {
        countDisplay.textContent = hugCount;
        countDisplay.style.animation = 'none';
        countDisplay.offsetHeight;
        countDisplay.style.animation = 'hugPop 0.3s ease';
    }
    
    // Update teddy message
    const teddyMessage = document.getElementById('teddyMessage');
    if (teddyMessage) {
        teddyMessage.querySelector('p').textContent = hugMessages[hugCount % hugMessages.length];
    }
    
    // Create hug effect
    createHugEffect();
    
    // Animate teddy
    animateTeddy();
}

function createHugEffect() {
    const hearts = ['💕', '💖', '💗', '🤗', '🧸'];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `
                position: fixed;
                left: 50%;
                top: 40%;
                font-size: ${Math.random() * 20 + 20}px;
                pointer-events: none;
                z-index: 1000;
                animation: hugHeartFloat 1.5s ease-out forwards;
                --angle: ${(i / 8) * 360}deg;
            `;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1500);
        }, i * 50);
    }
}

function animateTeddy() {
    const teddy = document.querySelector('.teddy-bear');
    if (teddy) {
        teddy.style.animation = 'none';
        teddy.offsetHeight;
        teddy.style.animation = 'teddyHug 0.5s ease';
        
        setTimeout(() => {
            teddy.style.animation = 'teddyBounce 2s ease-in-out infinite';
        }, 500);
    }
}

// Select Teddy
function selectTeddy(color) {
    const messages = {
        'brown': 'Brownie says: "I love you beary much!" 🧸',
        'pink': 'Pinky says: "You make my heart flutter!" 🩷',
        'white': 'Snowy says: "Our love is pure as snow!" 🤍',
        'golden': 'Goldie says: "You\'re my golden treasure!" ⭐'
    };
    
    // Show message
    const toast = document.createElement('div');
    toast.textContent = messages[color];
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(244, 162, 97, 0.95);
        color: white;
        padding: 15px 30px;
        border-radius: 30px;
        font-family: 'Dancing Script', cursive;
        font-size: 1.2rem;
        z-index: 1000;
        animation: toastSlide 0.5s ease;
        white-space: nowrap;
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'toastSlideOut 0.5s ease forwards';
        setTimeout(() => toast.remove(), 500);
    }, 2500);
}

// Main teddy click
document.addEventListener('DOMContentLoaded', () => {
    createFloatingStars();
    
    const mainTeddy = document.getElementById('mainTeddy');
    if (mainTeddy) {
        mainTeddy.addEventListener('click', giveTeddyHug);
    }
});

// Add animations
const teddyStyles = document.createElement('style');
teddyStyles.textContent = `
    @keyframes hugPop {
        0% { transform: scale(1); }
        50% { transform: scale(1.3); }
        100% { transform: scale(1); }
    }
    
    @keyframes hugHeartFloat {
        0% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-100px);
            opacity: 0;
        }
    }
    
    @keyframes teddyHug {
        0% { transform: scale(1); }
        25% { transform: scale(1.1) rotate(-5deg); }
        50% { transform: scale(1.15); }
        75% { transform: scale(1.1) rotate(5deg); }
        100% { transform: scale(1); }
    }
    
    @keyframes toastSlide {
        0% { transform: translateX(-50%) translateY(50px); opacity: 0; }
        100% { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    
    @keyframes toastSlideOut {
        0% { transform: translateX(-50%) translateY(0); opacity: 1; }
        100% { transform: translateX(-50%) translateY(50px); opacity: 0; }
    }
`;
document.head.appendChild(teddyStyles);