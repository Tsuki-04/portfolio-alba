import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { publicAsset } from "../data/projects";

function ProjectImageGallery({ items, language }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  const showPreviousImage = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? items.length - 1 : currentIndex - 1,
    );
  };

  const showNextImage = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === items.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <div className="le-jardin-hero-image le-jardin-gallery">
      <img
        className="le-jardin-gallery-image"
        src={publicAsset(activeItem.src)}
        alt={activeItem.alt[language]}
      />

      <button
        className="le-jardin-gallery-control le-jardin-gallery-control-prev"
        type="button"
        onClick={showPreviousImage}
        aria-label="Ver imagen anterior"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        className="le-jardin-gallery-control le-jardin-gallery-control-next"
        type="button"
        onClick={showNextImage}
        aria-label="Ver imagen siguiente"
      >
        <ChevronRight size={22} />
      </button>

      <div className="le-jardin-gallery-info">
        <span>{activeItem.title[language]}</span>
        <small>
          {activeIndex + 1} / {items.length}
        </small>
      </div>
    </div>
  );
}

export default ProjectImageGallery;
