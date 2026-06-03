import { publicAsset } from "../data/projects";

function ProjectPreview({ project, language }) {
  return (
    <div className="project-preview">
      <img
        className="project-cover-image"
        src={publicAsset(project.image)}
        alt={project.imageAlt[language]}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

export default ProjectPreview;
