import { useEffect, useState } from "react";

import "./styles/App.css";
import "./styles/project-pages.css";
import "./styles/App.responsive.css";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import LeJardinProjectPage from "./pages/LeJardinProjectPage";

import { getCurrentRoute, translations } from "./data/projects";

function App() {
  const [showAllTech, setShowAllTech] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(getCurrentRoute);
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");

    return savedLanguage === "en" ? "en" : "es";
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getCurrentRoute());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (currentRoute !== "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentRoute]);

  const content = translations[language];

  return (
    <div className="portfolio-page">
      <div className="page-glow page-glow-one"></div>
      <div className="page-glow page-glow-two"></div>

      <Header
        content={content}
        language={language}
        setLanguage={setLanguage}
        currentRoute={currentRoute}
      />

      {currentRoute === "home" && (
        <HomePage
          content={content}
          language={language}
          showAllTech={showAllTech}
          setShowAllTech={setShowAllTech}
        />
      )}

      {currentRoute === "projects" && (
        <ProjectsPage content={content} language={language} />
      )}

      {currentRoute === "le-jardin-de-berry" && (
        <LeJardinProjectPage content={content} language={language} />
      )}
    </div>
  );
}

export default App;
