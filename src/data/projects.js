import {
  BrainCircuit,
  Code2,
  Database,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaReact,
  FaPython,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiMariadb,
  SiMysql,
  SiPostgresql,
  SiLaravel,
  SiApache,
  SiNginx,
  SiRedis,
  SiVite,
} from "react-icons/si";

export const routes = {
  home: "#inicio",
  projects: "#/projects",
  leJardinDetail: "#/projects/le-jardin-de-berry",
  stack: "#stack",
  about: "#inicio",
  contact: "mailto:alba.vgk.2005@gmail.com",
};

export const publicAsset = (path) => {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};

export const getCurrentRoute = () => {
  const hash = window.location.hash;

  if (hash === "#/projects") {
    return "projects";
  }

  if (hash === "#/projects/le-jardin-de-berry") {
    return "le-jardin-de-berry";
  }

  return "home";
};

export const translations = {
  es: {
    brandAria: "Inicio",
    languageLabel: "Cambiar idioma",
    themeLabel: "Cambiar tema",
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      stack: "Stack",
      about: "Sobre mí",
      contact: "Contacto",
    },
    header: {
      talk: "Hablemos",
    },
    sidebar: {
      welcomeTitle: "bienvenida.exe",
      welcomeText: "¡Gracias por visitar!",
      statusTitle: "status.txt",
      statusText: "Disponible para oportunidades",
      contactTitle: "contáctame",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      emailLabel: "Correo electrónico",
    },
    hero: {
      title: "Hola, soy",
      name: "Alba",
      rolePrefix: "Junior Developer",
      roleSuffix: "Web · SQL · Linux · Seguridad",
      descriptionOne:
        "Desarrolladora junior con experiencia práctica en desarrollo web full stack, bases de datos, entornos Linux y seguridad.",
      descriptionTwo:
        "Me apasiona construir soluciones funcionales, aprender rápido y afrontar nuevos retos en equipo.",
      projectsButton: "Ver proyectos",
      cvButton: "Descargar CV",
    },
    cv: {
      path: "cv/alba-valdunciel-cv-es.pdf",
      filename: "Alba-Valdunciel-CV-ES.pdf",
    },
    stack: {
      title: "Stack & Habilidades",
      viewAll: "Ver todas",
    },
    tech: {
      title: "Tecnologías",
      showMore: "Ver más",
      showLess: "Ver menos",
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Proyectos destacados",
      viewAll: "Ver todos los proyectos",
      viewDetails: "Ver proyecto",
      comingSoon: "Próximamente",
    },
    projectsPage: {
      eyebrow: "Proyectos",
      title: "Proyectos técnicos y desarrollo web",
      description:
        "Selección de proyectos propios y trabajos desarrollados durante mi formación y mis prácticas.\nIncluyen desarrollo web, bases de datos, seguridad, automatización y sistemas.",
      backHome: "Volver al inicio",
      openProject: "Abrir proyecto",
      filters: {
        all: "Todos",
        web: "Web",
        security: "Seguridad",
        systems: "Sistemas",
      },
    },
    detailPage: {
      backProjects: "Volver a proyectos",
      eyebrow: "Proyecto destacado",
      title: "Le Jardin de Berry",
      subtitle:
        "Aplicación web full stack para una pastelería ficticia, desarrollada como proyecto final.",
      description:
        "El proyecto incluye una web pública con catálogo, fichas de producto, carrito y sistema de pedidos, además de una zona de usuario y un panel interno de administración.",
      roleTitle: "Mi trabajo en el proyecto",
      roleText:
        "Desarrollé la estructura principal, la base de datos, las páginas públicas, la lógica de carrito y pedidos, el panel de administración y varias medidas básicas de seguridad.",
      featuresTitle: "Funcionalidades principales",
      techTitle: "Tecnologías usadas",
      demoDisabled: "Demo pendiente",
      repoDisabled: "Repositorio pendiente",
      features: [
        "Catálogo de productos",
        "Ficha individual de producto",
        "Carrito y checkout",
        "Login y registro",
        "Área de cliente",
        "Panel de administración",
        "Gestión de pedidos",
        "Formulario de contacto",
        "Base de datos MariaDB",
        "Rutas protegidas y consultas preparadas",
      ],
    },
  },

  en: {
    brandAria: "Home",
    languageLabel: "Change language",
    themeLabel: "Change theme",
    nav: {
      home: "Home",
      projects: "Projects",
      stack: "Stack",
      about: "About me",
      contact: "Contact",
    },
    header: {
      talk: "Let's talk",
    },
    sidebar: {
      welcomeTitle: "welcome.exe",
      welcomeText: "Thanks for visiting!",
      statusTitle: "status.txt",
      statusText: "Available for opportunities",
      contactTitle: "contact me",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      emailLabel: "Email",
    },
    hero: {
      title: "Hi, I'm",
      name: "Alba",
      rolePrefix: "Junior Developer",
      roleSuffix: "Web · SQL · Linux · Security",
      descriptionOne:
        "Junior developer with practical experience in full stack web development, databases, Linux environments and security.",
      descriptionTwo:
        "I enjoy building functional solutions, learning quickly and taking on new challenges as part of a team.",
      projectsButton: "View projects",
      cvButton: "Download CV",
    },
    cv: {
      path: "cv/alba-valdunciel-cv-en.pdf",
      filename: "Alba-Valdunciel-CV-EN.pdf",
    },
    stack: {
      title: "Stack & Skills",
      viewAll: "View all",
    },
    tech: {
      title: "Technologies",
      showMore: "Show more",
      showLess: "Show less",
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Featured projects",
      viewAll: "View all projects",
      viewDetails: "View project",
      comingSoon: "Coming soon",
    },
    projectsPage: {
      eyebrow: "Projects",
      title: "Technical projects and web development",
      description:
        "A selection of personal projects and work developed during my studies and internship period.\nThey include web development, databases, security, automation and systems.",
      backHome: "Back home",
      openProject: "Open project",
      filters: {
        all: "All",
        web: "Web",
        security: "Security",
        systems: "Systems",
      },
    },
    detailPage: {
      backProjects: "Back to projects",
      eyebrow: "Featured project",
      title: "Le Jardin de Berry",
      subtitle:
        "Full stack web application for a fictional bakery, developed as a final project.",
      description:
        "The project includes a public website with catalogue, product pages, cart and order system, as well as a user area and an internal admin panel.",
      roleTitle: "My work on the project",
      roleText:
        "I developed the main structure, database, public pages, cart and order logic, admin panel and several basic security measures.",
      featuresTitle: "Main features",
      techTitle: "Technologies used",
      demoDisabled: "Demo pending",
      repoDisabled: "Repository pending",
      features: [
        "Product catalogue",
        "Individual product page",
        "Cart and checkout",
        "Login and registration",
        "Customer area",
        "Admin panel",
        "Order management",
        "Contact form",
        "MariaDB database",
        "Protected routes and prepared queries",
      ],
    },
  },
};

export const skills = [
  {
    title: { es: "Frontend", en: "Frontend" },
    text: {
      es: "HTML, CSS, JavaScript, React y Vite",
      en: "HTML, CSS, JavaScript, React and Vite",
    },
    icon: Code2,
  },
  {
    title: { es: "Backend", en: "Backend" },
    text: {
      es: "PHP, Node.js, APIs y lógica de servidor",
      en: "PHP, Node.js, APIs and server-side logic",
    },
    icon: Server,
  },
  {
    title: { es: "Bases de datos", en: "Databases" },
    text: {
      es: "SQL, MariaDB, MySQL y PostgreSQL",
      en: "SQL, MariaDB, MySQL and PostgreSQL",
    },
    icon: Database,
  },
  {
    title: { es: "Sistemas", en: "Systems" },
    text: {
      es: "Ubuntu, Windows, Bash, SSH, Apache, Nginx y Docker",
      en: "Ubuntu, Windows, Bash, SSH, Apache, Nginx and Docker",
    },
    icon: Terminal,
  },
  {
    title: { es: "Seguridad", en: "Security" },
    text: {
      es: "Control de accesos, permisos, auditoría y buenas prácticas",
      en: "Access control, permissions, auditing and good practices",
    },
    icon: ShieldCheck,
  },
  {
    title: { es: "IA / Automatización", en: "AI / Automation" },
    text: {
      es: "Uso de IA, scripts, documentación y mejora de procesos",
      en: "AI usage, scripts, documentation and process improvement",
    },
    icon: BrainCircuit,
  },
];

export const technologies = [
  { name: "HTML", icon: FaHtml5, color: "#e34f26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572b6" },
  { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
  { name: "PHP", icon: FaPhp, color: "#777bb4" },
  { name: "Python", icon: FaPython, color: "#3776ab" },
  { name: "SQL", icon: Database, color: "#3b82f6" },
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "Vite", icon: SiVite, color: "#646cff" },
  { name: "Laravel", icon: SiLaravel, color: "#ff2d20" },
  { name: "Node.js", icon: FaNodeJs, color: "#5fa04e" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952b3" },
  { name: "MariaDB", icon: SiMariadb, color: "#003545" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "Redis", icon: SiRedis, color: "#dc382d" },
  { name: "Apache", icon: SiApache, color: "#d22128" },
  { name: "Nginx", icon: SiNginx, color: "#009639" },
  { name: "Docker", icon: FaDocker, color: "#2496ed" },
  { name: "GitHub", icon: FaGithub, color: "#111827" },
];

export const projectFilters = [
  { id: "all", icon: "grid" },
  { id: "web", icon: "web" },
  { id: "security", icon: "security" },
  { id: "systems", icon: "systems" },
];

export const projects = [
  {
    title: "Le Jardin de Berry",
    category: "web",
    description: {
      es: "Aplicación web full stack para una pastelería con catálogo, usuarios, carrito, pedidos, base de datos y panel de administración.",
      en: "Full stack web application for a bakery with catalogue, users, cart, orders, database and admin panel.",
    },
    longDescription: {
      es: "Proyecto web completo con zona pública, área de cliente, panel interno, sistema de pedidos y base de datos relacional.",
      en: "Complete web project with public area, customer area, internal panel, order system and relational database.",
    },
    tags: ["PHP", "MariaDB", "JavaScript"],
    image: "img/projects/homepage/le-jardin-de-berry.webp",
    imageAlt: {
      es: "Vista previa del proyecto Le Jardin de Berry",
      en: "Preview of the Le Jardin de Berry project",
    },
    path: routes.leJardinDetail,
    isAvailable: true,
  },
  {
    title: "Env Guardian",
    category: "security",
    description: {
      es: "Herramienta CLI en Python para analizar archivos .env, detectar riesgos de configuración y generar informes.",
      en: "Python CLI tool to analyse .env files, detect configuration risks and generate reports.",
    },
    longDescription: {
      es: "CLI enfocada a revisar configuraciones sensibles antes del despliegue y generar informes de seguridad.",
      en: "CLI focused on reviewing sensitive configuration files before deployment and generating security reports.",
    },
    tags: ["Python", "CLI", "Security"],
    image: "img/projects/homepage/env-guardian.webp",
    imageAlt: {
      es: "Vista previa tipo terminal del proyecto Env Guardian",
      en: "Terminal-style preview of the Env Guardian project",
    },
    path: null,
    isAvailable: false,
  },
  {
    title: "Sistema de gestión",
    category: "systems",
    description: {
      es: "Participación en un sistema interno, centrada en seguridad, permisos, auditoría, base de datos e interfaz.",
      en: "Work on an internal management system focused on security, permissions, auditing, database and interface.",
    },
    longDescription: {
      es: "Módulo interno con enfoque en roles, permisos, auditoría, trazabilidad y buenas prácticas de seguridad.",
      en: "Internal module focused on roles, permissions, auditing, traceability and security best practices.",
    },
    tags: ["Laravel", "PostgreSQL", "Docker"],
    image: "img/projects/homepage/sistema-gestion.webp",
    imageAlt: {
      es: "Vista previa abstracta del sistema de gestión",
      en: "Abstract preview of the management system",
    },
    path: null,
    isAvailable: false,
  },
];

export const visibleLimit = 10;
