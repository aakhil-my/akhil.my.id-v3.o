export default function SiteHeader({ currentPage }) {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Navigasi utama">
        <a className="brand" href="../main/">
          <span className="brand-mark">_&lt;</span>
          <span className="brand-text">
            <span className="brand-title">akhil.my.id</span>
            <span className="brand-subtitle">Develop With Akhil _&lt;</span>
          </span>
        </a>

        <div className="nav-right">
          <button
            className="nav-toggle"
            type="button"
            aria-label="Buka navigasi"
            aria-expanded="false"
            data-nav-toggle
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="nav-panel" data-nav-panel>
            <a className={`nav-link ${currentPage === "about" ? "is-active" : ""}`} href="../about/">
              About
            </a>
            <a className={`nav-link ${currentPage === "resume" ? "is-active" : ""}`} href="../resume/">
              Resume
            </a>
            <a className={`nav-link ${currentPage === "project" ? "is-active" : ""}`} href="../project/">
              Project
            </a>
            <a className={`nav-link ${currentPage === "contact" ? "is-active" : ""}`} href="../contact/">
              Contact
            </a>
            <span className="nav-indicator" data-nav-indicator aria-hidden="true"></span>
          </div>
        </div>

        <span className="header-line" aria-hidden="true"></span>
      </nav>
    </header>
  );
}