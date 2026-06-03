import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects, publicAsset, routes } from "../data/projects";

function LeJardinProjectPage({ content, language }) {
  const project = projects[0];

  return (
    <main className="portfolio-main">
      <section className="route-page">
        <a className="back-link" href={routes.projects}>
          <ArrowLeft size={16} />
          {content.detailPage.backProjects}
        </a>

        <motion.article
          className="project-detail-hero"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="project-detail-image">
            <img
              src={publicAsset(project.image)}
              alt={project.imageAlt[language]}
            />
          </div>

          <div className="project-detail-content">
            <span className="eyebrow">{content.detailPage.eyebrow}</span>
            <h1>{content.detailPage.title}</h1>

            <p className="project-detail-subtitle">
              {content.detailPage.subtitle}
            </p>

            <p>{content.detailPage.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-detail-actions">
              <button className="button button-disabled" type="button" disabled>
                <ExternalLink size={18} />
                {content.detailPage.demoDisabled}
              </button>

              <button className="button button-disabled" type="button" disabled>
                <FaGithub size={18} />
                {content.detailPage.repoDisabled}
              </button>
            </div>
          </div>
        </motion.article>

        <div className="project-detail-grid">
          <section className="project-detail-panel">
            <h2>{content.detailPage.roleTitle}</h2>
            <p>{content.detailPage.roleText}</p>
          </section>

          <section className="project-detail-panel">
            <h2>{content.detailPage.techTitle}</h2>

            <div className="project-tags">
              {["PHP", "MariaDB", "JavaScript", "HTML", "CSS", "Apache"].map(
                (tag) => (
                  <span key={tag}>{tag}</span>
                ),
              )}
            </div>
          </section>
        </div>

        <section className="project-detail-panel">
          <h2>{content.detailPage.featuresTitle}</h2>

          <div className="features-grid">
            {content.detailPage.features.map((feature) => (
              <div className="feature-item" key={feature}>
                <CheckCircle2 size={18} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default LeJardinProjectPage;
