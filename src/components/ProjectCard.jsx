import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import ProjectPreview from "./ProjectPreview";

function ProjectCard({ project, language, index, content }) {
  const cardContent = (
    <>
      <ProjectPreview project={project} language={language} />

      <div className="project-info">
        <div className="project-title-row">
          <h3>{project.title}</h3>

          {project.isAvailable ? (
            <ExternalLink size={16} />
          ) : (
            <span className="project-status-pill">
              {content.projects.comingSoon}
            </span>
          )}
        </div>

        <p>{project.description[language]}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </>
  );

  if (project.isAvailable) {
    return (
      <motion.a
        className="project-card project-card-active"
        href={project.path}
        aria-label={`${content.projects.viewDetails}: ${project.title}`}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.12 * index }}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.article
      className="project-card project-card-disabled"
      aria-label={`${project.title} - ${content.projects.comingSoon}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.12 * index }}
    >
      {cardContent}
    </motion.article>
  );
}

export default ProjectCard;
