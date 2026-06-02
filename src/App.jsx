import { useEffect, useState } from "react";
import "./App.css";
import { motion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Database,
  Download,
  ExternalLink,
  FolderGit2,
  Mail,
  Moon,
  Server,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  Zap,
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
  FaLinkedin,
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

const translations = {
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
      href: "/cv/alba-valdunciel-cv-es.pdf",
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
      href: "/cv/alba-valdunciel-cv-en.pdf",
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
    },
  },
};

const skills = [
  {
    title: {
      es: "Frontend",
      en: "Frontend",
    },
    text: {
      es: "HTML, CSS, JavaScript, React y Vite",
      en: "HTML, CSS, JavaScript, React and Vite",
    },
    icon: Code2,
  },
  {
    title: {
      es: "Backend",
      en: "Backend",
    },
    text: {
      es: "PHP, Node.js, APIs y lógica de servidor",
      en: "PHP, Node.js, APIs and server-side logic",
    },
    icon: Server,
  },
  {
    title: {
      es: "Bases de datos",
      en: "Databases",
    },
    text: {
      es: "SQL, MariaDB, MySQL y PostgreSQL",
      en: "SQL, MariaDB, MySQL and PostgreSQL",
    },
    icon: Database,
  },
  {
    title: {
      es: "Sistemas",
      en: "Systems",
    },
    text: {
      es: "Ubuntu, Windows, Bash, SSH, Apache, Nginx y Docker",
      en: "Ubuntu, Windows, Bash, SSH, Apache, Nginx and Docker",
    },
    icon: Terminal,
  },
  {
    title: {
      es: "Seguridad",
      en: "Security",
    },
    text: {
      es: "Control de accesos, permisos, auditoría y buenas prácticas",
      en: "Access control, permissions, auditing and good practices",
    },
    icon: ShieldCheck,
  },
  {
    title: {
      es: "IA / Automatización",
      en: "AI / Automation",
    },
    text: {
      es: "Uso de IA, scripts, documentación y mejora de procesos",
      en: "AI usage, scripts, documentation and process improvement",
    },
    icon: BrainCircuit,
  },
];

const technologies = [
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

const projects = [
  {
    title: "Le Jardin de Berry",
    description: {
      es: "Aplicación web full stack para una pastelería con catálogo, usuarios, carrito, pedidos, base de datos y panel de administración.",
      en: "Full stack web application for a bakery with catalogue, users, cart, orders, database and admin panel.",
    },
    tags: ["PHP", "MariaDB", "JavaScript"],
    image: "/img/projects/homepage/le-jardin-de-berry.webp",
    imageAlt: {
      es: "Vista previa del proyecto Le Jardin de Berry",
      en: "Preview of the Le Jardin de Berry project",
    },
  },
  {
    title: "Env Guardian",
    description: {
      es: "Herramienta CLI en Python para analizar archivos .env, detectar riesgos de configuración y generar informes.",
      en: "Python CLI tool to analyse .env files, detect configuration risks and generate reports.",
    },
    tags: ["Python", "CLI", "Security"],
    image: "/img/projects/homepage/env-guardian.webp",
    imageAlt: {
      es: "Vista previa tipo terminal del proyecto Env Guardian",
      en: "Terminal-style preview of the Env Guardian project",
    },
  },
  {
    title: "Sistema de gestión",
    description: {
      es: "Participación en un sistema interno, centrada en seguridad, permisos, auditoría, base de datos e interfaz.",
      en: "Work on an internal management system focused on security, permissions, auditing, database and interface.",
    },
    tags: ["Laravel", "PostgreSQL", "Docker"],
    image: "/img/projects/homepage/sistema-gestion.webp",
    imageAlt: {
      es: "Vista previa abstracta del sistema de gestión",
      en: "Abstract preview of the management system",
    },
  },
];

const visibleLimit = 10;

function WindowControls() {
  return (
    <div className="window-controls" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

function WindowFrame({ title, accent = "pink", children }) {
  return (
    <section className={`window-panel ${accent}`}>
      <div className="window-topbar">
        <div className="window-title">
          <span className="window-bullet"></span>
          <span>{title}</span>
        </div>

        <WindowControls />
      </div>

      <div className="window-body">{children}</div>
    </section>
  );
}

function LanguageToggle({ language, setLanguage, label }) {
  return (
    <div className="language-toggle" aria-label={label}>
      <button
        className={language === "es" ? "active" : ""}
        type="button"
        onClick={() => setLanguage("es")}
        aria-pressed={language === "es"}
      >
        ES
      </button>

      <button
        className={language === "en" ? "active" : ""}
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}

function TechnologyChip({ technology }) {
  const Icon = technology.icon;

  return (
    <motion.span
      layout
      className="tech-chip"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Icon
        className="tech-icon"
        size={18}
        style={{ color: technology.color }}
      />
      {technology.name}
    </motion.span>
  );
}

function ProjectPreview({ project, language }) {
  return (
    <div className="project-preview">
      <img
        className="project-cover-image"
        src={project.image}
        alt={project.imageAlt[language]}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

function App() {
  const [showAllTech, setShowAllTech] = useState(false);
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");

    return savedLanguage === "en" ? "en" : "es";
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const content = translations[language];

  const visibleTechnologies = showAllTech
    ? technologies
    : technologies.slice(0, visibleLimit);

  return (
    <div className="portfolio-page">
      <div className="page-glow page-glow-one"></div>
      <div className="page-glow page-glow-two"></div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label={content.brandAria}>
          <span className="brand-icon">
            <Code2 size={22} />
          </span>
          <span>alba.dev</span>
        </a>

        <nav className="main-nav">
          <a className="active" href="#inicio">
            {content.nav.home}
          </a>
          <a href="#proyectos">{content.nav.projects}</a>
          <a href="#stack">{content.nav.stack}</a>
          <a href="#sobre-mi">{content.nav.about}</a>
          <a href="#contacto">{content.nav.contact}</a>
        </nav>

        <div className="header-actions">
          <LanguageToggle
            language={language}
            setLanguage={setLanguage}
            label={content.languageLabel}
          />

          <button className="theme-toggle" aria-label={content.themeLabel}>
            <Sun size={17} />
            <Moon size={16} />
          </button>

          <a className="talk-button" href="#contacto">
            {content.header.talk}
            <Mail size={17} />
          </a>
        </div>
      </header>

      <main className="portfolio-main">
        <div className="dashboard-layout">
          <aside className="dashboard-sidebar">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
            >
              <WindowFrame title={content.sidebar.welcomeTitle} accent="blue">
                <div className="cat-card">
                  <div className="cat-placeholder">
                    <span className="cat-emoji">🐱</span>
                  </div>

                  <p className="cat-text">{content.sidebar.welcomeText}</p>
                </div>
              </WindowFrame>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <WindowFrame title={content.sidebar.statusTitle} accent="lavender">
                <div className="status-window-content">
                  <div className="availability-line compact">
                    <span className="status-dot"></span>
                    <strong>{content.sidebar.statusText}</strong>
                  </div>
                </div>
              </WindowFrame>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
            >
              <WindowFrame title={content.sidebar.contactTitle} accent="pink">
                <div className="social-links-grid">
                  <a
                    className="social-link"
                    href="https://github.com/Tsuki-04"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={content.sidebar.githubLabel}
                  >
                    <FaGithub size={28} />
                  </a>

                  <a
                    className="social-link"
                    href="https://www.linkedin.com/in/alba-valdunciel-gonz%C3%A1lez-6a7176295/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={content.sidebar.linkedinLabel}
                  >
                    <FaLinkedin size={28} />
                  </a>

                  <a
                    className="social-link"
                    href="mailto:alba.vgk.2005@gmail.com"
                    aria-label={content.sidebar.emailLabel}
                  >
                    <Mail size={26} />
                  </a>
                </div>
              </WindowFrame>
            </motion.div>
          </aside>

          <div className="dashboard-content">
            <section id="inicio" className="hero-section">
              <motion.div
                className="hero-card"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <div className="hero-inner">
                  <h1>
                    {content.hero.title} <strong>{content.hero.name}</strong>
                  </h1>

                  <p className="hero-subtitle">
                    <span>{content.hero.rolePrefix}</span> |{" "}
                    {content.hero.roleSuffix}
                  </p>

                  <p className="hero-description">
                    {content.hero.descriptionOne}
                  </p>

                  <p className="hero-description">
                    {content.hero.descriptionTwo}
                  </p>

                  <div className="hero-buttons hero-buttons-compact">
                    <a className="button button-primary" href="#proyectos">
                      <FolderGit2 size={18} />
                      {content.hero.projectsButton}
                    </a>

                    <a
                      className="button button-secondary"
                      href={content.cv.href}
                      download={content.cv.filename}
                    >
                      <Download size={18} />
                      {content.hero.cvButton}
                    </a>
                  </div>
                </div>

                <div className="hero-stickers">
                  <Sparkles size={18} />
                </div>
              </motion.div>

              <motion.aside
                id="stack"
                className="stack-panel"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.15 }}
              >
                <div className="panel-header">
                  <div>
                    <span className="small-icon">
                      <Zap size={18} />
                    </span>
                    <h2>{content.stack.title}</h2>
                  </div>

                  <a href="#stack">
                    {content.stack.viewAll} <ArrowRight size={16} />
                  </a>
                </div>

                <div className="skills-grid">
                  {skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <article className="skill-card" key={skill.title.es}>
                        <span className="skill-icon">
                          <Icon size={28} />
                        </span>
                        <h3>{skill.title[language]}</h3>
                        <p>{skill.text[language]}</p>
                      </article>
                    );
                  })}
                </div>
              </motion.aside>
            </section>

            <section className="tech-section" aria-labelledby="tech-title">
              <div className="tech-header">
                <h2 id="tech-title">{content.tech.title}</h2>

                <button
                  className="show-more-tech"
                  type="button"
                  onClick={() => setShowAllTech((currentValue) => !currentValue)}
                >
                  {showAllTech ? content.tech.showLess : content.tech.showMore}
                  <ArrowRight size={16} />
                </button>
              </div>

              <motion.div
                layout
                className={`tech-list ${
                  showAllTech ? "tech-list-expanded" : "tech-list-collapsed"
                }`}
              >
                {visibleTechnologies.map((technology) => (
                  <TechnologyChip
                    key={technology.name}
                    technology={technology}
                  />
                ))}
              </motion.div>
            </section>

            <section
              id="proyectos"
              className="projects-section"
              aria-labelledby="projects-title"
            >
              <div className="section-heading">
                <div>
                  <span className="eyebrow">{content.projects.eyebrow}</span>
                  <h2 id="projects-title">{content.projects.title}</h2>
                </div>

                <a href="#proyectos">
                  {content.projects.viewAll} <ArrowRight size={16} />
                </a>
              </div>

              <div className="projects-grid">
                {projects.map((project, index) => (
                  <motion.article
                    className="project-card"
                    key={project.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.12 * index }}
                  >
                    <ProjectPreview project={project} language={language} />

                    <div className="project-info">
                      <div className="project-title-row">
                        <h3>{project.title}</h3>
                        <ExternalLink size={16} />
                      </div>

                      <p>{project.description[language]}</p>

                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;