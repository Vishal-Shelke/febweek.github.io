// ============================================
// MAIN JAVASCRIPT - Valentine's Week Website
// For Priyanka from Vishal
// ============================================

// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Create Floating Hearts
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    if (!container) return;
    
    const hearts = ['💕', '💖', '💗', '💓', '💝', '💘', '❤️', '🩷'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.animationDelay = Math.random() * 10 + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        container.appendChild(heart);
    }
}

// Envelope Animation
let envelopeOpened = false;
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const heroText = document.getElementById('heroText');
    
    if (!envelopeOpened) {
        envelope.classList.add('opened');
        envelopeOpened = true;
        
        setTimeout(() => {
            heroText.classList.add('visible');
            startLoveMeter();
        }, 800);
    }
}

// Love Meter Animation
function startLoveMeter() {
    const meter = document.getElementById('loveMeter');
    if (meter) {
        setTimeout(() => {
            meter.style.width = '100%';
        }, 500);
    }
}

// Countdown Timer
function updateCountdown() {
    const valentineDate = new Date('February 14, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = valentineDate - now;
    
    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    } else {
        // It's Valentine's Day!
        const countdownContainer = document.querySelector('.countdown-container');
        if (countdownContainer) {
            countdownContainer.innerHTML = `
                <h3>💕 It's Valentine's Day! 💕</h3>
                <p style="font-size: 1.5rem; color: #ff6b9d;">Happy Valentine's Day, My Love! 💕</p>
            `;
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Auto-open envelope after 2 seconds on homepage
    if (document.querySelector('.love-envelope')) {
        setTimeout(() => {
            if (!envelopeOpened) {
                openEnvelope();
            }
        }, 2000);
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add sparkle effect on click
document.addEventListener('click', (e) => {
    createSparkle(e.clientX, e.clientY);
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        font-size: 20px;
        animation: sparkleAnim 0.6s ease-out forwards;
        z-index: 9999;
    `;
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 600);
}

// Add sparkle animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnim {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        100% { transform: scale(1.5) rotate(180deg); opacity: 0; }
    }
`;
document.head.appendChild(style);