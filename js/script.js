// ===== GLOBAL VARIABLES =====
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const backToTopBtn = document.getElementById('back-to-top');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');
const skillItems = document.querySelectorAll('.skill-item');

// ===== MOBILE NAVIGATION =====
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== SMOOTH SCROLLING =====
function smoothScrollTo(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// ===== NAVBAR SCROLL EFFECT =====
function updateNavbarOnScroll() {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
}

// ===== ACTIVE NAV LINK =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + header.offsetHeight + 100;
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
        
        if (scrollPos >= top && scrollPos < bottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

// ===== BACK TO TOP BUTTON =====
function updateBackToTopButton() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== SKILL ANIMATIONS =====
function animateSkillBars() {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                if (progressBar && !progressBar.classList.contains('animated')) {
                    progressBar.classList.add('animated');
                    
                    // Animate the progress bar
                    const width = progressBar.style.width;
                    progressBar.style.width = '0%';
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 100);
                }
            }
        });
    }, {
        threshold: 0.5
    });

    skillItems.forEach(item => {
        skillObserver.observe(item);
    });
}

// ===== FORM HANDLING =====
function handleContactForm(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData);
    
    // Simple form validation
    if (!validateForm(formObject)) {
        return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Show success message
        showNotification('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function validateForm(data) {
    const { name, email, subject, message } = data;
    
    if (!name.trim()) {
        showNotification('Por favor, preencha seu nome.', 'error');
        return false;
    }
    
    if (!email.trim() || !isValidEmail(email)) {
        showNotification('Por favor, informe um email válido.', 'error');
        return false;
    }
    
    if (!subject.trim()) {
        showNotification('Por favor, informe o assunto.', 'error');
        return false;
    }
    
    if (!message.trim()) {
        showNotification('Por favor, escreva sua mensagem.', 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add notification styles
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            border-left: 4px solid;
            max-width: 400px;
            animation: slideInRight 0.3s ease-out;
        }
        
        .notification-success { border-left-color: #28a745; }
        .notification-error { border-left-color: #dc3545; }
        .notification-info { border-left-color: #007ACC; }
        
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
        }
        
        .notification-message {
            color: #2C3E50;
            font-weight: 500;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: #7F8C8D;
            cursor: pointer;
            margin-left: 1rem;
            font-size: 1rem;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    
    // Add styles to head if not already present
    if (!document.querySelector('#notification-styles')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'notification-styles';
        styleElement.textContent = notificationStyles;
        document.head.appendChild(styleElement);
    }
    
    // Add notification to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
function initScrollAnimations() {
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll([
        '.section-header',
        '.about-text',
        '.about-stats',
        '.about-highlights .highlight-item',
        '.skills-category',
        '.project-card',
        '.contact-item',
        '.contact-form'
    ].join(','));

    elementsToAnimate.forEach(element => {
        animationObserver.observe(element);
    });
}

// ===== PROFILE IMAGE PLACEHOLDER =====
function setupProfileImagePlaceholder() {
    const profileImg = document.getElementById('profile-img');
    
    // Create a professional placeholder SVG for dark theme
    const createPlaceholder = () => {
        const svg = `
            <svg width="150" height="150" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#64B5F6;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#FF8A65;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <circle cx="75" cy="75" r="75" fill="#1E1E1E"/>
                <circle cx="75" cy="75" r="70" fill="url(#grad1)" opacity="0.1"/>
                <circle cx="75" cy="60" r="28" fill="#64B5F6" opacity="0.8"/>
                <path d="M75 95 C55 95, 35 108, 35 125 L115 125 C115 108, 95 95, 75 95 Z" fill="#64B5F6" opacity="0.8"/>
                <text x="75" y="140" text-anchor="middle" fill="#64B5F6" font-family="Inter" font-size="10" font-weight="600">Felipe Delmondes</text>
            </svg>
        `;
        
        const blob = new Blob([svg], { type: 'image/svg+xml' });
        return URL.createObjectURL(blob);
    };
    
    profileImg.addEventListener('error', () => {
        profileImg.src = createPlaceholder();
    });
    
    // Check if the image actually exists before using placeholder
    const img = new Image();
    img.onload = function() {
        // Image loaded successfully, keep it
        profileImg.src = this.src;
    };
    img.onerror = function() {
        // Image failed to load, use placeholder
        profileImg.src = createPlaceholder();
    };
    
    // Only use placeholder if src is empty or default
    if (!profileImg.src || profileImg.src.includes('undefined') || profileImg.src === window.location.href) {
        profileImg.src = createPlaceholder();
    } else {
        // Try to load the existing src
        img.src = profileImg.src;
    }
}

// ===== TYPING ANIMATION =====
function initTypingAnimation() {
    const titleElement = document.querySelector('.hero-title');
    if (!titleElement) return;
    
    const originalText = titleElement.innerHTML;
    const name = 'Felipe Delmondes';
    const prefix = 'Olá, eu sou ';
    
    // Only animate on desktop
    if (window.innerWidth > 768) {
        titleElement.innerHTML = prefix + '<span class="text-accent typing-cursor"></span>';
        
        let i = 0;
        const typeSpeed = 100;
        
        function typeWriter() {
            if (i < name.length) {
                const currentText = prefix + '<span class="text-accent">' + name.substring(0, i + 1) + '<span class="typing-cursor">|</span></span>';
                titleElement.innerHTML = currentText;
                i++;
                setTimeout(typeWriter, typeSpeed);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    titleElement.innerHTML = originalText;
                }, 1000);
            }
        }
        
        // Start typing animation after a delay
        setTimeout(typeWriter, 1000);
    }
}

// ===== PROJECT IMAGE PLACEHOLDERS =====
function setupProjectImagePlaceholders() {
    const projectImages = document.querySelectorAll('.project-image img');
    
    const createProjectPlaceholder = (index) => {
        const colors = ['#64B5F6', '#FF8A65', '#81C784'];
        const color = colors[index % colors.length];
        
        const svg = `
            <svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="200" fill="#1E1E1E"/>
                <rect x="50" y="50" width="300" height="100" rx="8" fill="${color}40"/>
                <rect x="60" y="60" width="280" height="80" rx="6" fill="#121212"/>
                <circle cx="80" cy="80" r="6" fill="${color}"/>
                <rect x="95" y="76" width="60" height="8" rx="2" fill="${color}" opacity="0.8"/>
                <rect x="95" y="88" width="100" height="4" rx="2" fill="${color}" opacity="0.6"/>
                <rect x="270" y="76" width="50" height="16" rx="4" fill="${color}" opacity="0.7"/>
            </svg>
        `;
        
        const blob = new Blob([svg], { type: 'image/svg+xml' });
        return URL.createObjectURL(blob);
    };
    
    projectImages.forEach((img, index) => {
        img.addEventListener('error', () => {
            img.src = createProjectPlaceholder(index);
        });
        
        // If src contains placeholder names, use generated placeholder
        if (img.src.includes('project') && img.src.includes('.jpg')) {
            img.src = createProjectPlaceholder(index);
        }
    });
}

// ===== PERFORMANCE OPTIMIZATION =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== EVENT LISTENERS =====
function initEventListeners() {
    // Mobile menu toggle
    mobileMenu.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            smoothScrollTo(targetId);
            closeMobileMenu();
        });
    });
    
    // Scroll events (debounced for performance)
    const debouncedScrollHandler = debounce(() => {
        updateNavbarOnScroll();
        updateBackToTopButton();
    }, 10);
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    // Back to top button
    backToTopBtn.addEventListener('click', scrollToTop);
    
    // Contact form
    contactForm.addEventListener('submit', handleContactForm);
    
    // Close mobile menu on window resize
    window.addEventListener('resize', debounce(() => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    }, 250));
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
}

// ===== INITIALIZATION =====
function init() {
    // Setup placeholders
    setupProfileImagePlaceholder();
    setupProjectImagePlaceholders();
    
    // Initialize animations
    initScrollAnimations();
    animateSkillBars();
    initTypingAnimation();
    
    // Setup event listeners
    initEventListeners();
    
    // Initial state
    updateNavbarOnScroll();
    updateBackToTopButton();
    
    console.log('Portfolio initialized successfully! 🚀');
}

// ===== LOAD EVENT =====
document.addEventListener('DOMContentLoaded', init);

// ===== ADDITIONAL FEATURES =====

// Add CSS for typing cursor
const typingStyles = `
    .typing-cursor {
        animation: blink 1s infinite;
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    .header.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;

// Add typing styles to document
const styleElement = document.createElement('style');
styleElement.textContent = typingStyles;
document.head.appendChild(styleElement);

// ===== EASTER EGG =====
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        showNotification('🎉 Você encontrou o Easter Egg! Desenvolvedor curioso detectado!', 'success');
        konamiCode = [];
        
        // Add rainbow effect to title
        const title = document.querySelector('.hero-title');
        title.style.background = 'linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080)';
        title.style.backgroundSize = '400% 400%';
        title.style.webkitBackgroundClip = 'text';
        title.style.webkitTextFillColor = 'transparent';
        title.style.animation = 'rainbow 3s ease infinite';
        
        // Remove effect after 3 seconds
        setTimeout(() => {
            title.style = '';
        }, 3000);
    }
});

// Rainbow animation
const rainbowAnimation = `
    @keyframes rainbow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;

const rainbowStyleElement = document.createElement('style');
rainbowStyleElement.textContent = rainbowAnimation;
document.head.appendChild(rainbowStyleElement);