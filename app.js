// Quiz Questions Data
const questions = [
    {
        id: 'tools',
        text: "What's in your toolbox?",
        options: [
            { text: "Just basics (Screwdriver, tape, etc.)", value: "basic", icon: "🔧" },
            { text: "Electronics Kit (Soldering iron, multimeter)", value: "electronics", icon: "⚡" },
            { text: "3D Printer / CAD", value: "3d-printer", icon: "🖨️" },
            { text: "Full Workshop (Power tools, etc.)", value: "workshop", icon: "🏭" }
        ]
    },
    {
        id: 'skill',
        text: "How would you rate your engineering skills?",
        options: [
            { text: "Total Beginner (I want to learn)", value: 1, icon: "🌱" },
            { text: "Tinkerer (I've built a few kits)", value: 2, icon: "🔨" },
            { text: "Hobbyist (I can code/solder a bit)", value: 3, icon: "👓" },
            { text: "Pro / Student (Challenge me)", value: 5, icon: "🎓" }
        ]
    },
    {
        id: 'interest',
        text: "What gets you most excited?",
        options: [
            { text: "Coding & Software", value: "coding", icon: "💻" },
            { text: "Robots & Moving Parts", value: "robotics", icon: "🤖" },
            { text: "Useful Gadgets for my Room", value: "home", icon: "🏠" },
            { text: "Artistic & Visual Projects", value: "art", icon: "🎨" }
        ]
    },
    {
        id: 'goal',
        text: "What's the main goal?",
        options: [
            { text: "Make something Useful", value: "Useful", icon: "🛠️" },
            { text: "Just for Fun / Cool Factor", value: "Fun", icon: "😎" },
            { text: "Build a Portfolio / Impress Colleges", value: "Portfolio", icon: "💼" }
        ]
    }
];

// State
let currentQuestionIndex = 0;
let userAnswers = {};

// DOM Elements
const heroSection = document.getElementById('hero');
const quizSection = document.getElementById('quiz');
const resultsSection = document.getElementById('results');
const startBtn = document.getElementById('start-btn');
const questionCard = document.getElementById('question-card');
const progressFill = document.getElementById('progress-fill');
const prevBtn = document.getElementById('prev-btn');
const projectsGrid = document.getElementById('projects-grid');
const restartBtn = document.getElementById('restart-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', prevQuestion);
restartBtn.addEventListener('click', restartApp);
closeModal.addEventListener('click', () => modal.classList.remove('visible'));
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('visible');
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter projects
        const filter = btn.dataset.filter;
        renderProjects(filter);
    });
});

// Functions
function startQuiz() {
    heroSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    renderQuestion();
}

function renderQuestion() {
    const question = questions[currentQuestionIndex];

    // Update Progress
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;

    // Render Card
    questionCard.innerHTML = `
        <h2 class="animate-up">${question.text}</h2>
        <div class="options-grid animate-up delay-1">
            ${question.options.map((opt, idx) => `
                <div class="option-btn" onclick="handleAnswer('${question.id}', '${opt.value}')">
                    <span class="option-icon">${opt.icon}</span>
                    <span>${opt.text}</span>
                </div>
            `).join('')}
        </div>
    `;

    // Show/Hide Prev Button
    if (currentQuestionIndex > 0) {
        prevBtn.classList.remove('hidden');
    } else {
        prevBtn.classList.add('hidden');
    }
}

function handleAnswer(questionId, value) {
    userAnswers[questionId] = value;

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function showResults() {
    quizSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');

    // Initial render of all recommended projects
    renderProjects('all');
}

function getRecommendedProjects() {
    // Simple scoring algorithm
    return projects.map(p => {
        let score = 0;

        // 1. Goal Match (High Weight)
        if (p.category === userAnswers.goal) score += 10;

        // 2. Skill Level (Filter out too hard)
        // If project difficulty is way higher than user skill, penalize
        const skillDiff = p.difficulty - userAnswers.skill;
        if (skillDiff > 1) score -= 50; // Too hard
        if (skillDiff === 0) score += 5; // Perfect match

        // 3. Interest Match (Tags)
        if (p.tags.includes(userAnswers.interest)) score += 5;

        // 4. Tools Match
        // If user has 'basic', penalize projects needing '3d-printer' or 'electronics' unless they said they have it
        if (userAnswers.tools === 'basic') {
            if (p.tags.includes('3d-printer')) score -= 20;
            if (p.tags.includes('electronics') && p.difficulty > 2) score -= 10;
        }

        return { ...p, score };
    }).sort((a, b) => b.score - a.score); // Sort by score desc
}

function renderProjects(filter) {
    const rankedProjects = getRecommendedProjects();
    projectsGrid.innerHTML = '';

    rankedProjects.forEach((project, index) => {
        // Filter Logic
        if (filter !== 'all' && project.category.toLowerCase() !== filter) return;

        // Don't show projects with very low scores (irrelevant)
        if (project.score < -10) return;

        const card = document.createElement('div');
        card.className = 'project-card animate-up';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="card-image">
                <!-- Placeholder for now, or use a generic gradient/icon -->
                <div style="width:100%; height:100%; background: linear-gradient(45deg, #2a2a30, #1c1c21); display:flex; align-items:center; justify-content:center; font-size:3rem;">
                    ${getCategoryIcon(project.category)}
                </div>
            </div>
            <div class="card-content">
                <div class="card-tags">
                    <span class="tag" style="background:var(--primary-glow); color:var(--primary);">${project.category}</span>
                    <span class="tag">Lvl ${project.difficulty}</span>
                </div>
                <h3 class="card-title">${project.title}</h3>
                <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.4;">${project.description}</p>
                <div class="card-meta">
                    <span>⏱️ ${project.time}</span>
                    <span>💰 ${project.cost}</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            window.location.href = `project.html?id=${project.id}`;
        });
        projectsGrid.appendChild(card);
    });
}

function getCategoryIcon(category) {
    if (category === 'Useful') return '🛠️';
    if (category === 'Fun') return '🎮';
    if (category === 'Portfolio') return '🚀';
    return '📦';
}

function openModal(project) {
    modalBody.innerHTML = `
        <div style="margin-bottom:2rem;">
            <span class="tag" style="background:var(--primary-glow); color:var(--primary); margin-bottom:1rem; display:inline-block;">${project.category}</span>
            <h2 style="font-size:2.5rem; line-height:1.1; margin-bottom:1rem;">${project.title}</h2>
            <p style="font-size:1.2rem; color:var(--text-muted);">${project.description}</p>
        </div>

        <div style="background:rgba(255,255,255,0.03); padding:1.5rem; border-radius:16px; margin-bottom:2rem; border:1px solid var(--border);">
            <h3 style="margin-bottom:1rem; color:var(--accent);">✨ The Wow Factor</h3>
            <p>${project.wowFactor}</p>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:2rem; margin-bottom:2rem;">
            <div>
                <h3 style="margin-bottom:1rem;">📦 Parts Needed</h3>
                <ul style="list-style-position:inside; color:var(--text-muted);">
                    ${project.parts.map(p => `<li style="margin-bottom:0.5rem;">${p}</li>`).join('')}
                </ul>
            </div>
            <div>
                <h3 style="margin-bottom:1rem;">🗺️ Roadmap</h3>
                <div style="display:flex; flex-direction:column; gap:1rem;">
                    ${project.roadmap.map((step, idx) => `
                        <div style="display:flex; gap:1rem;">
                            <div style="background:var(--border); width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.8rem; flex-shrink:0;">${idx + 1}</div>
                            <p style="font-size:0.9rem; color:var(--text-muted);">${step}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    modal.classList.add('visible');
}

function restartApp() {
    currentQuestionIndex = 0;
    userAnswers = {};
    resultsSection.classList.add('hidden');
    heroSection.classList.remove('hidden');
}

// Initialize
// (Nothing needed here as event listeners handle the start)
