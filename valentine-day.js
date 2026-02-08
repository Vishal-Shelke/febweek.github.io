// ============================================
// VALENTINE'S DAY JAVASCRIPT - GRAND FINALE
// ============================================

// Create Hearts Explosion Background
function createHeartsBackground() {
    const container = document.getElementById('heartsExplosion');
    if (!container) return;
    
    const hearts = ['💕', '💖', '💗', '💓', '💝', '💘', '❤️', '🩷'];
    
    setInterval(() => {
        const heart = document.createElement('span');
        heart.className = 'explosion-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        heart.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
    }, 500);
}

// Giant Heart Click Effect
function heartBurst() {
    const heart = document.getElementById('giantHeart');
    if (!heart) return;
    
    // Pulse animation
    heart.style.animation = 'none';
    heart.offsetHeight;
    heart.style.animation = 'heartBurst 0.5s ease';
    
    // Create heart explosion
    const hearts = ['💕', '💖', '💗', '💓', '💝'];
    const rect = heart.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const h = document.createElement('div');
            h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            const angle = (i / 20) * Math.PI * 2;
            const distance = 150 + Math.random() * 100;
            
            h.style.cssText = `
                position: fixed;
                left: ${centerX}px;
                top: ${centerY}px;
                font-size: ${Math.random() * 20 + 20}px;
                pointer-events: none;
                z-index: 1000;
                animation: heartFlyOut 1s ease-out forwards;
                --endX: ${Math.cos(angle) * distance}px;
                --endY: ${Math.sin(angle) * distance}px;
            `;
            document.body.appendChild(h);
            setTimeout(() => h.remove(), 1000);
        }, i * 30);
    }
}

// Start Celebration
function startCelebration() {
    // Create massive fireworks
    createFireworks();
    
    // Create heart rain
    createHeartRain();
    
    // Show celebration message
    showCelebrationMessage();
    
    // Play confetti
    createMassiveConfetti();
}

function createFireworks() {
    const container = document.getElementById('fireworks');
    if (!container) return;
    
    const colors = ['#ff0054', '#ffd700', '#ff6b9d', '#9d4edd', '#48cae4'];
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * (window.innerHeight / 2);
            
            // Create firework burst
            for (let j = 0; j < 30; j++) {
                const particle = document.createElement('div');
                const angle = (j / 30) * Math.PI * 2;
                const velocity = 100 + Math.random() * 100;
                
                particle.style.cssText = `
                    position: fixed;
                    left: ${x}px;
                    top: ${y}px;
                    width: 8px;
                    height: 8px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 1000;
                    animation: fireworkParticle 1.5s ease-out forwards;
                    --vx: ${Math.cos(angle) * velocity}px;
                    --vy: ${Math.sin(angle) * velocity}px;
                    box-shadow: 0 0 10px currentColor;
                `;
                container.appendChild(particle);
                setTimeout(() => particle.remove(), 1500);
            }
        }, i * 300);
    }
}

function createHeartRain() {
    const hearts = ['💕', '💖', '💗', '💓', '💝', '💘', '❤️'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}%;
                top: -50px;
                font-size: ${Math.random() * 30 + 20}px;
                pointer-events: none;
                z-index: 999;
                animation: heartRain 3s linear forwards;
                --drift: ${(Math.random() - 0.5) * 200}px;
            `;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }, i * 60);
    }
}

function createMassiveConfetti() {
    const colors = ['#ff0054', '#ffd700', '#ff6b9d', '#9d4edd', '#48cae4', '#ff8fab', '#c9184a'];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}%;
                top: -20px;
                width: ${Math.random() * 10 + 5}px;
                height: ${Math.random() * 15 + 10}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                pointer-events: none;
                z-index: 1001;
                animation: confettiFall 4s linear forwards;
                --rotation: ${Math.random() * 720}deg;
                --drift: ${(Math.random() - 0.5) * 300}px;
            `;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 4000);
        }, i * 20);
    }
}

function showCelebrationMessage() {
    const messages = [
        "I LOVE YOU, PRIYANKA! 💕",
        "You are my everything! 💖",
        "Forever and always! 💗",
        "My heart belongs to you! 💓",
        "Happy Valentine's Day! 💝"
    ];
    
    messages.forEach((msg, i) => {
        setTimeout(() => {
            const toast = document.createElement('div');
            toast.textContent = msg;
            toast.style.cssText = `
                position: fixed;
                top: ${20 + i * 15}%;
                left: 50%;
                transform: translateX(-50%);
                background: linear-gradient(135deg, #ff0054, #c9184a);
                color: white;
                padding: 20px 40px;
                border-radius: 50px;
                font-family: 'Pacifico', cursive;
                font-size: 1.5rem;
                z-index: 2000;
                animation: celebrationMessage 0.5s ease forwards;
                box-shadow: 0 10px 40px rgba(255, 0, 84, 0.5);
            `;
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.animation = 'celebrationMessageOut 0.5s ease forwards';
                setTimeout(() => toast.remove(), 500);
            }, 3000);
        }, i * 500);
    });
}

// Add animations
const valentineStyles = document.createElement('style');
valentineStyles.textContent = `
    @keyframes heartBurst {
        0% { transform: scale(1); }
        50% { transform: scale(1.3); }
        100% { transform: scale(1); }
    }
    
    @keyframes heartFlyOut {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(calc(-50% + var(--endX)), calc(-50% + var(--endY))) scale(1);
            opacity: 0;
        }
    }
    
    @keyframes fireworkParticle {
        0% {
            transform: translate(0, 0);
            opacity: 1;
        }
        100% {
            transform: translate(var(--vx), calc(var(--vy) + 100px));
            opacity: 0;
        }
    }
    
    @keyframes heartRain {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) translateX(var(--drift)) rotate(360deg);
            opacity: 0.5;
        }
    }
    
    @keyframes confettiFall {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) translateX(var(--drift)) rotate(var(--rotation));
            opacity: 0;
        }
    }
    
    @keyframes celebrationMessage {
        0% {
            transform: translateX(-50%) scale(0);
            opacity: 0;
        }
        100% {
            transform: translateX(-50%) scale(1);
            opacity: 1;
        }
    }
    
    @keyframes celebrationMessageOut {
        0% {
            transform: translateX(-50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateX(-50%) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(valentineStyles);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createHeartsBackground();
    
    // Auto-start mini celebration after 3 seconds
    setTimeout(() => {
        createHeartRain();
    }, 3000);
});