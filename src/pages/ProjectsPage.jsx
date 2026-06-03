import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Globe2,
  Grid3X3,
  Server,
  ShieldCheck,
} from "lucide-react";

import {
  projectFilters,
  projects,
  publicAsset,
  routes,
} from "../data/projects";

const filterIcons = {
  all: Grid3X3,
  web: Globe2,
  security: ShieldCheck,
  systems: Server,
};

function ProjectFilterButton({ filter, activeFilter, setActiveFilter, content }) {
  const Icon = filterIcons[filter.id];

  return (
    <button
      className={`projects-filter-button ${
        activeFilter === filter.id ? "active" : ""
      }`}
      type="button"
      onClick={() => setActiveFilter(filter.id)}
    >
      <Icon size={16} />
      {content.projectsPage.filters[filter.id]}
    </button>
  );
}

function ProjectOverviewCard({ project, language, index, content }) {
  const cardContent = (
    <>
      <div className="project-overview-cover">
        <img
          src={publicAsset(project.image)}
          alt={project.imageAlt[language]}
          loading="lazy"
        />
      </div>

      <div className="project-overview-content">
        <h2>{project.title}</h2>

        <p>{project.longDescription[language]}</p>

        <div className="project-tags project-tags-single-line">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-card-divider"></div>

        <div className="project-overview-action">
          {content.projectsPage.openProject}
          <ArrowRight size={16} />
        </div>
      </div>
    </>
  );

  if (project.isAvailable) {
    return (
      <motion.a
        className="project-overview-card project-overview-card-active"
        href={project.path}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.08 * index }}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.article
      className="project-overview-card project-overview-card-disabled"
      aria-disabled="true"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.08 * index }}
    >
      {cardContent}
    </motion.article>
  );
}

function ProjectsPage({ content, language }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="portfolio-main">
      <section className="route-page projects-route-page">
        <a className="back-link" href={routes.home}>
          <ArrowLeft size={16} />
          {content.projectsPage.backHome}
        </a>

        <motion.div
          className="projects-page-hero"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="projects-page-hero-content">
            <div className="projects-page-kicker">
              <span className="projects-decoration">
                <span>୨୧</span>
              </span>

              <span className="eyebrow">{content.projectsPage.eyebrow}</span>
            </div>

            <h1>{content.projectsPage.title}</h1>
            <p>{content.projectsPage.description}</p>
          </div>

          <div className="projects-page-visual">
            <img
              src={publicAsset("img/projects/projects-hero-laptop.webp")}
              alt=""
              aria-hidden="true"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="projects-visual-placeholder" aria-hidden="true"></div>
          </div>
        </motion.div>

        <div className="projects-toolbar">
          <div className="projects-filters" aria-label="Filtros de proyectos">
            {projectFilters.map((filter) => (
              <ProjectFilterButton
                key={filter.id}
                filter={filter}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                content={content}
              />
            ))}
          </div>
        </div>

        <div className="projects-overview-grid">
          {filteredProjects.map((project, index) => (
            <ProjectOverviewCard
              key={project.title}
              project={project}
              language={language}
              index={index}
              content={content}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
