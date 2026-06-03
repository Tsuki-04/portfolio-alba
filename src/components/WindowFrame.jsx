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

export default WindowFrame;
