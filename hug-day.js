// ============================================
// HUG DAY JAVASCRIPT
// ============================================

// Virtual Hug System
let hugsSent = 0;
const warmthLevels = ['❄️', '🌡️', '☀️', '🔥', '💕', '💖', '💗', '💓', '💝', '🌟'];
const hugResponses = [
    "Mmm... that's warm! 🤗",
    "Another hug? Yes please! 💕",
    "I can feel the love! 🥰",
    "Hugs are the best medicine! 💖",
    "Never stop hugging! 🤗",
    "You give the best hugs! 💕",
    "Warmth level increasing! 🔥",
    "My heart is melting! 💗",
    "Infinite hugs unlocked! ∞",
    "Maximum love achieved! 💝"
];

function sendVirtualHug() {
    hugsSent++;
    
    // Update hug count
    const countDisplay = document.getElementById('hugsSent');
    if (countDisplay) {
        countDisplay.textContent = hugsSent;
    }
    
    // Update warmth level
    updateWarmthLevel();
    
    // Animate hug button
    animateHugButton();
    
    // Create hug effect
    createHugWave();
    
    // Show hug response
    showHugResponse();
}

function updateWarmthLevel() {
    const warmthDisplay = document.getElementById('warmthLevel');
    const warmthFill = document.getElementById('warmthFill');
    
    const level = Math.min(Math.floor(hugsSent / 3), warmthLevels.length - 1);
    const fillPercent = Math.min((hugsSent / 30) * 100, 100);
    
    if (warmthDisplay) {
        warmthDisplay.textContent = warmthLevels[level];
    }
    
    if (warmthFill) {
        warmthFill.style.width = fillPercent + '%';
    }
}

function animateHugButton() {
    const btn = document.getElementById('hugBtn');
    if (btn) {
        btn.style.animation = 'none';
        btn.offsetHeight;
        btn.style.animation = 'hugButtonPulse 0.5s ease';
    }
}

function createHugWave() {
    // Create expanding circles
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const wave = document.createElement('div');
            wave.style.cssText = `
                position: fixed;
                left: 50%;
                top: 50%;
                width: 100px;
                height: 100px;
                border: 3px solid rgba(255, 143, 171, 0.6);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 1000;
                animation: hugWave 1s ease-out forwards;
            `;
            document.body.appendChild(wave);
            setTimeout(() => wave.remove(), 1000);
        }, i * 150);
    }
    
    // Create floating hearts
    const hearts = ['💕', '💖', '💗', '🤗', '💓'];
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `
                position: fixed;
                left: ${40 + Math.random() * 20}%;
                top: 50%;
                font-size: ${Math.random() * 20 + 20}px;
                pointer-events: none;
                z-index: 1000;
                animation: hugHeartRise 2s ease-out forwards;
                --drift: ${(Math.random() - 0.5) * 100}px;
            `;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 2000);
        }, i * 80);
    }
}

function showHugResponse() {
    const response = hugResponses[Math.min(hugsSent - 1, hugResponses.length - 1)];
    
    const toast = document.createElement('div');
    toast.textContent = response;
    toast.style.cssText = `
        position: fixed;
        bottom: 150px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #ff8fab, #ff6b9d);
        color: white;
        padding: 15px 30px;
        border-radius: 30px;
        font-family: 'Dancing Script', cursive;
        font-size: 1.3rem;
        z-index: 1000;
        animation: hugToast 0.5s ease;
        box-shadow: 0 10px 30px rgba(255, 107, 157, 0.4);
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'hugToastOut 0.5s ease forwards';
        setTimeout(() => toast.remove(), 500);
    }, 1500);
}

// Show Hug Type
function showHugType(type) {
    const descriptions = {
        'bear': '🐻 BEAR HUG: Wrapping you in the tightest, most protective embrace! You\'re safe with me forever! 💪💕',
        'comfort': '🤗 COMFORT HUG: A soft, gentle embrace to wash away all your worries. Everything will be okay! 💕',
        'surprise': '🎉 SURPRISE HUG: Coming up behind you when you least expect it! Gotcha! 😄💕',
        'long': '⏰ LONG HUG: The kind that lasts forever, where time stands still and only love remains! ♾️💕'
    };
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: modalFadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #ff8fab, #c9184a);
            padding: 40px;
            border-radius: 20px;
            max-width: 500px;
            margin: 20px;
            text-align: center;
            animation: modalSlideIn 0.3s ease;
        ">
            <p style="font-size: 1.2rem; line-height: 1.8;">${descriptions[type]}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="
                margin-top: 20px;
                padding: 15px 40px;
                background: white;
                color: #c9184a;
                border: none;
                border-radius: 30px;
                font-size: 1.1rem;
                cursor: pointer;
                font-weight: bold;
            ">Got my hug! 🤗</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Add animations
const hugStyles = document.createElement('style');
hugStyles.textContent = `
    @keyframes hugButtonPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    @keyframes hugWave {
        0% {
            width: 100px;
            height: 100px;
            opacity: 1;
        }
        100% {
            width: 400px;
            height: 400px;
            opacity: 0;
        }
    }
    
    @keyframes hugHeartRise {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-200px) translateX(var(--drift));
            opacity: 0;
        }
    }
    
    @keyframes hugToast {
        0% { transform: translateX(-50%) scale(0.5); opacity: 0; }
        100% { transform: translateX(-50%) scale(1); opacity: 1; }
    }
    
    @keyframes hugToastOut {
        0% { transform: translateX(-50%) scale(1); opacity: 1; }
        100% { transform: translateX(-50%) scale(0.5); opacity: 0; }
    }
    
    @keyframes modalFadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    
    @keyframes modalSlideIn {
        0% { transform: translateY(-50px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
    }
`;
document.head.appendChild(hugStyles);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Warm glow follows mouse
    document.addEventListener('mousemove', (e) => {
        const glow = document.getElementById('warmGlow');
        if (glow) {
            const x = (e.clientX / window.innerWidth - 0.5) * 100;
            const y = (e.clientY / window.innerHeight - 0.5) * 100;
            glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        }
    });
});