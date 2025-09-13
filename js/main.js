/* ------------------------------
   MAIN SCRIPT: Portafolio Panda
   ------------------------------ */

// Referencias principales
const modal = document.getElementById('modal');
const modalLogo = document.getElementById('modal-logo');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const slidesWrapper = document.getElementById('slides-wrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const projectTitle = document.getElementById('project-title');
const projectDesc = document.getElementById('project-desc');
const projectLinks = document.getElementById('project-links');

// Variables de estado
let currentLang = null;
let slideIndex = 0;

/* ------------------------------
   Datos: Lenguajes + Proyectos
   ------------------------------ */
const projectsData = {
  python: {
    img: 'assets/img/python.png',
    title: 'Python',
    desc: 'Automatización, análisis de datos y pequeños juegos.',
    projects: [
      { img: 'assets/projects/python/proyecto1.jpg', title: 'AutoBot', desc: 'Automatización de tareas diarias.', link: '#' },
      { img: 'assets/projects/python/proyecto2.jpg', title: 'Analizador', desc: 'Análisis de datos con pandas.', link: '#' }
    ]
  },

  html: {
    img: 'assets/img/html.webp',
    title: 'HTML',
    desc: 'Estructura de páginas web.',
    projects: [
      { img: 'assets/projects/html/proyecto1.jpg', title: 'Portafolio', desc: 'Mi primer portafolio en HTML.', link: '#' }
    ]
  },

  css: {
    img: 'assets/img/css.png',
    title: 'CSS',
    desc: 'Estilos modernos y diseño responsive.',
    projects: [
      { img: 'assets/projects/css/proyecto1.jpg', title: 'Landing Page', desc: 'Página moderna con estilos avanzados.', link: '#' }
    ]
  },

  javascript: {
    img: 'assets/img/javascript.webp',
    title: 'JavaScript',
    desc: 'Interactividad web y lógica de aplicaciones.',
    projects: [
      { img: 'assets/projects/javascript/proyecto1.jpg', title: 'To-Do App', desc: 'Aplicación de lista de tareas con JS.', link: '#' },
      { img: 'assets/projects/javascript/proyecto2.jpg', title: 'Juego', desc: 'Mini juego en JavaScript.', link: '#' }
    ]
  }
};

/* ------------------------------
   Abrir Modal
   ------------------------------ */
function openModal(langKey) {
  const lang = projectsData[langKey];
  if (!lang) return console.warn('Lenguaje no encontrado:', langKey);

  currentLang = langKey;
  slideIndex = 0;

  modalLogo.src = lang.img;
  modalTitle.textContent = lang.title;
  modalDesc.textContent = lang.desc;

  buildSlides(lang.projects);
  updateProjectInfo();

  modal.classList.add('open');
  window.addEventListener('keydown', keyboardHandler);
}

/* ------------------------------
   Construir Slides
   ------------------------------ */
function buildSlides(projects) {
  slidesWrapper.innerHTML = '';
  projects.forEach((p, idx) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `<img src="${p.img}" alt="${p.title}" data-index="${idx}">`;
    slidesWrapper.appendChild(slide);
  });
}

/* ------------------------------
   Actualizar Info Proyecto
   ------------------------------ */
function updateProjectInfo() {
  if (!currentLang) return;
  const lang = projectsData[currentLang];
  const proj = lang.projects[slideIndex];
  if (!proj) return;

  projectTitle.textContent = proj.title;
  projectDesc.textContent = proj.desc || '';
  projectLinks.innerHTML = proj.link
    ? `<a href="${proj.link}" target="_blank">Ver proyecto</a>`
    : '';
}

/* ------------------------------
   Slides Navegación
   ------------------------------ */
function showSlide(index) {
  const slidesCount = slidesWrapper.children.length;
  if (index < 0) index = slidesCount - 1;
  if (index >= slidesCount) index = 0;
  slideIndex = index;

  slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
  updateProjectInfo();
}
function nextSlide() { showSlide(slideIndex + 1); }
function prevSlide() { showSlide(slideIndex - 1); }

/* ------------------------------
   Cerrar Modal
   ------------------------------ */
function closeModal() {
  modal.classList.remove('open');
  slidesWrapper.innerHTML = '';
  currentLang = null;
  window.removeEventListener('keydown', keyboardHandler);
}

/* ------------------------------
   Handler teclado
   ------------------------------ */
function keyboardHandler(e) {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
}

/* ------------------------------
   Eventos
   ------------------------------ */
// Cerrar al hacer click fuera
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

// Botones carrusel
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Conectar tarjetas
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', () => {
    const langKey = card.dataset.lang;
    openModal(langKey);
  });
});

document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', () => {
    // Quitar clase activa de todas las tarjetas
    document.querySelectorAll('.skill-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    // Detectar lenguaje y aplicarlo al modal
    const lang = card.classList.contains('python') ? 'python' :
                 card.classList.contains('html') ? 'html' :
                 card.classList.contains('css') ? 'css' :
                 card.classList.contains('javascript') ? 'javascript' : '';

    const modalWrapper = document.querySelector('.modal-wrapper');
    modalWrapper.classList.remove('python','html','css','javascript');
    if(lang) modalWrapper.classList.add(lang);
  });
});

