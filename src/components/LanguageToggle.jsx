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

export default LanguageToggle;
