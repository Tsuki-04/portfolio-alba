import { Code2, Mail, Moon, Sun } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { routes } from "../data/projects";

function Header({ content, language, setLanguage, currentRoute }) {
  const isProjectsActive =
    currentRoute === "projects" || currentRoute === "le-jardin-de-berry";

  const handleDisabledLink = (event) => {
    event.preventDefault();
  };

  return (
    <header className="site-header">
      <a className="brand" href={routes.home} aria-label={content.brandAria}>
        <span className="brand-icon">
          <Code2 size={22} />
        </span>
        <span>alba.dev</span>
      </a>

      <nav className="main-nav">
        <a className={currentRoute === "home" ? "active" : ""} href={routes.home}>
          {content.nav.home}
        </a>

        <a className={isProjectsActive ? "active" : ""} href={routes.projects}>
          {content.nav.projects}
        </a>

        <a
          className="nav-disabled"
          href="#"
          aria-disabled="true"
          onClick={handleDisabledLink}
        >
          {content.nav.stack}
        </a>

        <a
          className="nav-disabled"
          href="#"
          aria-disabled="true"
          onClick={handleDisabledLink}
        >
          {content.nav.about}
        </a>

        <a
          className="nav-disabled"
          href="#"
          aria-disabled="true"
          onClick={handleDisabledLink}
        >
          {content.nav.contact}
        </a>
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

        <a
          className="talk-button talk-button-disabled"
          href="#"
          aria-disabled="true"
          onClick={handleDisabledLink}
        >
          {content.header.talk}
          <Mail size={17} />
        </a>
      </div>
    </header>
  );
}

export default Header;
