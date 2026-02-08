// ============================================
// PROPOSE DAY JAVASCRIPT - ESCAPING NO BUTTON
// ============================================

// Create Sparkles
function createSparkles() {
    const container = document.getElementById('sparkles');
    if (!container) return;
    
    const sparkles = ['✨', '⭐', '💫', '🌟'];
    
    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('span');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(sparkle);
    }
}

// Ring Box Animation
let ringBoxOpened = false;
function openRingBox() {
    const ringBox = document.getElementById('ringBox');
    const clickHint = document.getElementById('clickHint');
    
    if (!ringBoxOpened) {
        ringBox.classList.add('opened');
        ringBoxOpened = true;
        if (clickHint) clickHint.style.display = 'none';
    }
}

// Escaping No Button - THE FUN PART!
let escapeCount = 0;
const funnyMessages = [
    "Oops! Too slow! 😜",
    "Haha! Can't catch me! 🏃‍♂️",
    "Nice try! But NO means... wait, where am I going? 😂",
    "The No button is shy! 🙈",
    "Are you sure you want to say No? 🥺",
    "The button ran away! Just like my heart runs to you! 💕",
    "No is not an option when love is this strong! 💪",
    "Even the button knows you should say YES! 😉",
    "This button has commitment issues! Unlike me! 💍",
    "Keep trying... or just click YES! 💕"
];

function escapeButton() {
    const noBtn = document.getElementById('noBtn');
    const counter = document.getElementById('escapeCounter');
    
    if (!noBtn) return;
    
    escapeCount++;
    
    // Get viewport dimensions
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    
    // Calculate new random position
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    const maxX = vw - btnWidth - 50;
    const maxY = vh - btnHeight - 150;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * (maxY - 200) + 200; // Keep it below navbar
    
    // Move the button
    noBtn.style.position = 'fixed';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
    noBtn.style.transition = 'all 0.2s ease';
    noBtn.style.zIndex = '1000';
    
    // Show funny message
    if (counter) {
        counter.textContent = funnyMessages[escapeCount % funnyMessages.length];
        counter.style.animation = 'none';
        counter.offsetHeight; // Trigger reflow
        counter.style.animation = 'fadeInOut 2s ease';
    }
    
    // Make button smaller each time (max 5 times)
    if (escapeCount <= 5) {
        const scale = 1 - (escapeCount * 0.1);
        noBtn.style.transform = `scale(${scale})`;
    }
    
    // After 10 escapes, hide the button completely
    if (escapeCount >= 10) {
        noBtn.style.display = 'none';
        if (counter) {
            counter.textContent = "The No button gave up! Only YES remains! 💕";
        }
    }
}

function tryClickNo() {
    // This rarely happens, but if it does...
    escapeButton();
}

// YES Button - Celebration!
function sayYes() {
    const proposalSection = document.querySelector('.proposal-section');
    const celebration = document.getElementById('celebration');
    
    if (proposalSection) proposalSection.style.display = 'none';
    if (celebration) {
        celebration.style.display = 'block';
        createConfetti();
        createHeartExplosion();
    }
}

// Create Confetti
function createConfetti() {
    const confetti = document.getElementById('confetti');
    if (!confetti) return;
    
    const colors = ['#ff6b9d', '#ffd700', '#ff0054', '#9d4edd', '#48cae4', '#ff8fab'];
    
    for (let i = 0; i < 100; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.cssText = `
            left: ${Math.random() * 100}%;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            animation-delay: ${Math.random() * 2}s;
            animation-duration: ${Math.random() * 2 + 2}s;
        `;
        confetti.appendChild(piece);
    }
}

// Create Heart Explosion
function createHeartExplosion() {
    const hearts = ['💕', '💖', '💗', '💓', '💝', '💘', '❤️'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `
                position: fixed;
                left: 50%;
                top: 50%;
                font-size: ${Math.random() * 30 + 20}px;
                pointer-events: none;
                z-index: 1001;
                animation: heartExplode 2s ease-out forwards;
                --tx: ${(Math.random() - 0.5) * 500}px;
                --ty: ${(Math.random() - 0.5) * 500}px;
            `;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 2000);
        }, i * 50);
    }
}

// Add animations
const proposeStyles = document.createElement('style');
proposeStyles.textContent = `
    @keyframes fadeInOut {
        0%, 100% { opacity: 0; }
        20%, 80% { opacity: 1; }
    }
    
    @keyframes heartExplode {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(proposeStyles);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createSparkles();
    
    // Auto-open ring box after 1.5 seconds
    setTimeout(() => {
        if (!ringBoxOpened) {
            openRingBox();
        }
    }, 1500);
});