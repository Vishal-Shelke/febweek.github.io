// ============================================
// PROMISE DAY JAVASCRIPT
// ============================================

// Create Floating Ribbons
function createFloatingRibbons() {
    const container = document.getElementById('floatingRibbons');
    if (!container) return;
    
    const ribbons = ['🎀', '🎗️', '💝', '✨'];
    
    for (let i = 0; i < 20; i++) {
        const ribbon = document.createElement('span');
        ribbon.className = 'ribbon-float';
        ribbon.textContent = ribbons[Math.floor(Math.random() * ribbons.length)];
        ribbon.style.left = Math.random() * 100 + '%';
        ribbon.style.animationDuration = (Math.random() * 8 + 8) + 's';
        ribbon.style.animationDelay = Math.random() * 10 + 's';
        container.appendChild(ribbon);
    }
}

// Seal Promise
let sealedCount = 0;
function sealPromise(card) {
    if (card.classList.contains('sealed')) return;
    
    card.classList.add('sealed');
    sealedCount++;
    
    // Update counter
    const counter = document.getElementById('sealedCount');
    if (counter) {
        counter.textContent = sealedCount;
    }
    
    // Create seal animation
    createSealEffect(card);
    
    // Check if all promises are sealed
    if (sealedCount >= 7) {
        showCertificate();
    }
}

function createSealEffect(card) {
    const rect = card.getBoundingClientRect();
    
    // Create kiss emoji burst
    for (let i = 0; i < 5; i++) {
        const kiss = document.createElement('div');
        kiss.textContent = '💋';
        kiss.style.cssText = `
            position: fixed;
            left: ${rect.right - 30}px;
            top: ${rect.top + rect.height / 2}px;
            font-size: 25px;
            pointer-events: none;
            z-index: 1000;
            animation: sealBurst 0.8s ease-out forwards;
            --tx: ${(Math.random() - 0.5) * 80}px;
            --ty: ${(Math.random() - 0.5) * 80}px;
        `;
        document.body.appendChild(kiss);
        setTimeout(() => kiss.remove(), 800);
    }
    
    // Show sealed message
    showSealedMessage();
}

function showSealedMessage() {
    const messages = [
        "Promise sealed with love! 💋",
        "This promise is forever! 💕",
        "Sealed and delivered! 💝",
        "A promise from my heart! ❤️",
        "Locked in love! 🔐💕",
        "Eternally promised! ♾️💋",
        "All promises sealed! You have my heart! 💕"
    ];
    
    const toast = document.createElement('div');
    toast.textContent = messages[Math.min(sealedCount - 1, messages.length - 1)];
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #48cae4, #0077b6);
        color: white;
        padding: 15px 30px;
        border-radius: 30px;
        font-family: 'Dancing Script', cursive;
        font-size: 1.3rem;
        z-index: 1000;
        animation: messageSlide 0.5s ease;
        box-shadow: 0 10px 30px rgba(72, 202, 228, 0.4);
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'messageSlideOut 0.5s ease forwards';
        setTimeout(() => toast.remove(), 500);
    }, 2000);
}

function showCertificate() {
    const certificate = document.getElementById('certificate');
    if (certificate) {
        certificate.style.display = 'block';
        certificate.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Create celebration effect
        createPromiseCelebration();
    }
}

function createPromiseCelebration() {
    const emojis = ['💕', '💖', '💗', '💋', '🎀', '✨', '🌟'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}%;
                top: 100%;
                font-size: ${Math.random() * 20 + 20}px;
                pointer-events: none;
                z-index: 1000;
                animation: celebrationRise 3s ease-out forwards;
            `;
            document.body.appendChild(emoji);
            setTimeout(() => emoji.remove(), 3000);
        }, i * 100);
    }
}

// Add animations
const promiseStyles = document.createElement('style');
promiseStyles.textContent = `
    @keyframes sealBurst {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--tx), var(--ty)) scale(1.5);
            opacity: 0;
        }
    }
    
    @keyframes messageSlide {
        0% { transform: translateX(-50%) translateY(-30px); opacity: 0; }
        100% { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    
    @keyframes messageSlideOut {
        0% { transform: translateX(-50%) translateY(0); opacity: 1; }
        100% { transform: translateX(-50%) translateY(-30px); opacity: 0; }
    }
    
    @keyframes celebrationRise {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(promiseStyles);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createFloatingRibbons();
});