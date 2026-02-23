// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Scroll Reveal Animations for Sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Animate Progress Bars on Scroll (for Skills)
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skills-list').forEach(skills => {
    progressObserver.observe(skills);
});

// Projects: Click to Show Detail View
const projectCards = document.querySelectorAll('.project-card');
const projectDetail = document.getElementById('project-detail');
const projectContent = document.getElementById('project-content');
const backBtn = document.getElementById('back-btn');

// Sample project details (can be expanded)
const projectDetails = {
    1: {
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform built with React for the frontend, Node.js for the backend, and Stripe for payments. Features include user authentication, product catalog, shopping cart, and order management.',
        tech: 'React, Node.js, MongoDB, Stripe',
        link: '#'
    },
    2: {
        title: 'AI-Powered Chatbot',
        description: 'An intelligent chatbot using natural language processing with Python and TensorFlow. Integrates with APIs for real-time responses and supports multiple languages.',
        tech: 'Python, TensorFlow, Flask, NLP',
        link: '#'
    },
    3: {
        title: 'Portfolio Website',
        description: 'This very portfolio website, designed with modern UI principles, glassmorphism, and responsive layouts. Showcases projects, skills, and contact information.',
        tech: 'HTML, CSS, JavaScript',
        link: '#'
    }
};

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const detail = projectDetails[projectId];
        projectContent.innerHTML = `
            <h3>${detail.title}</h3>
            <p>${detail.description}</p>
            <p><strong>Technologies:</strong> ${detail.tech}</p>
            <a href="${detail.link}" class="btn" target="_blank">View Project</a>
        `;
        projectDetail.classList.add('show');
        projectDetail.scrollIntoView({ behavior: 'smooth' });
    });
});

backBtn.addEventListener('click', () => {
    projectDetail.classList.remove('show');
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Contact Form Validation and Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit'), (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim}