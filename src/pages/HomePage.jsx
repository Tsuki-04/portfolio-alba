import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  FolderGit2,
  Mail,
  Sparkles,
  Zap,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import WindowFrame from "../components/WindowFrame";
import TechnologyChip from "../components/TechnologyChip";
import ProjectCard from "../components/ProjectCard";

import {
  projects,
  publicAsset,
  routes,
  skills,
  technologies,
  visibleLimit,
} from "../data/projects";

function HomePage({ content, language, showAllTech, setShowAllTech }) {
  const visibleTechnologies = showAllTech
    ? technologies
    : technologies.slice(0, visibleLimit);

  return (
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
                  <img
                    className="welcome-avatar"
                    src={publicAsset("img/home/welcome-avatar.webp")}
                    alt=""
                    aria-hidden="true"
                  />
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
                  <a className="button button-primary" href={routes.projects}>
                    <FolderGit2 size={18} />
                    {content.hero.projectsButton}
                  </a>

                  <a
                    className="button button-secondary"
                    href={publicAsset(content.cv.path)}
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
                <TechnologyChip key={technology.name} technology={technology} />
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

              <a href={routes.projects}>
                {content.projects.viewAll} <ArrowRight size={16} />
              </a>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  language={language}
                  index={index}
                  content={content}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
