// Data
const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 70 },
    {name: 'Tailwind CSS', level: 95}
];

const projects = [
    {
        id: 1,
        title: 'Gemini-AI Page',
        description: 'Chatbot creado por mí utilizando la IA de Gemini creada por Google! <br><br><a href="https://zesty-griffin-a103d4.netlify.app/">Ver más!</a>',
        image: 'https://i.ibb.co/2jWZJJc/geminiaipreviewphoto.png'
    },
    {
        id: 2,
        title: 'Taskmanager con IA',
        description: 'Una aplicación de gestión de tareas y sincronización en tiempo real utilizando inteligencia artificial.<br><br><a href="https://managertaskai.vercel.app/">Ver más!</a>',
        image: 'https://i.ibb.co/8j8sjnx/aitaskmanager.png',
    },
    {
        id: 3,
        title: 'Empresa FTC',
        description: 'Landing page para una empresa. Utiliza animaciones modernas y una buena optimizacion!<br><br><a href="https://empresa-ficticia.vercel.app/">Ver más!</a>',
        image: 'https://i.ibb.co/Wkz8P6D/empresaftc.png'    
    },
    {
        id: 5,
        title: 'Pagina para empresa local',
        description: 'Esta pagina esta hecha con React utilizando animaciones modernas y un diseño intuitivo<br><br><a href="https://smsagenciadigital.netlify.app/">Ver más!</a>',
        image: 'https://i.ibb.co/YPT1cfN/eze.jpg'
    },
];


const experiences = [
    { id: 1, role: 'Actualmente no tengo experiencia laboral' },
];

// DOM Elements
const navbar = document.getElementById('navbar');
const mainContent = document.getElementById('main-content');
const scrollToTopButton = document.getElementById('scroll-to-top');

// Functions
function setActiveSection(sectionId) {
    const sections = mainContent.children;
    for (let section of sections) {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
            animateSection(section);
            if (sectionId === 'skills') {
                animateSkillBars();
            }
        } else {
            section.classList.add('hidden');
        }
    }

    const buttons = navbar.getElementsByTagName('button');
    for (let button of buttons) {
        if (button.dataset.section === sectionId) {
            button.classList.add('text-purple-400');
        } else {
            button.classList.remove('text-purple-400');
        }
    }
}

function animateSection(section) {
    const elements = section.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('appear');
        }, index * 200);
    });
}

function populateSkills() {
    const container = document.getElementById('skills-container');
    skills.forEach((skill, index) => {
        const skillElement = document.createElement('div');
        skillElement.className = 'bg-purple-800 p-4 rounded-lg transition-all hover:scale-105 fade-in';
        skillElement.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${skill.name}</h3>
            <div class="w-full bg-purple-200 rounded-full h-2.5">
                <div class="bg-purple-600 h-2.5 rounded-full skill-bar" data-level="${skill.level}"></div>
            </div>
        `;
        container.appendChild(skillElement);
    });
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        setTimeout(() => {
            bar.style.width = `${level}%`;
        }, 200);
    });
}

function populateProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach((project) => {
        const projectElement = document.createElement('div');
        projectElement.className = 'bg-purple-800 p-6 rounded-lg transition-all hover:scale-105 fade-in';
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover rounded-t-lg"> <!-- Imagen del proyecto -->
            <h3 class="text-2xl font-bold mb-2">${project.title}</h3>
            <p>${project.description}</p>
        `;
        container.appendChild(projectElement);
    });
}

function populateExperiences() {
    const container = document.getElementById('experience-container');
    experiences.forEach((exp, index) => {
        const expElement = document.createElement('div');
        expElement.className = 'bg-purple-800 p-6 rounded-lg fade-in';
        expElement.innerHTML = `
            <h3 class="text-2xl font-bold">${exp.role}</h3>
            <p class="text-xl">${exp.company}</p>
            <p class="text-purple-300">${exp.period}</p>
        `;
        container.appendChild(expElement);
    });
}

function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-black', 'bg-opacity-70', 'backdrop-blur-md');
        scrollToTopButton.classList.remove('opacity-0');
    } else {
        navbar.classList.remove('bg-black', 'bg-opacity-70', 'backdrop-blur-md');
        scrollToTopButton.classList.add('opacity-0');
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listeners
window.addEventListener('scroll', handleScroll);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setActiveSection('home');
    populateSkills();
    populateProjects();
    populateExperiences();

    const navButtons = navbar.getElementsByTagName('button');
    
    for (let button of navButtons) {
        button.addEventListener('click', () => setActiveSection(button.dataset.section));
    }
});

