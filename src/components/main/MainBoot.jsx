export default function MainBoot() {
  return (
    <div className="main-boot-page" id="mainBootPage" aria-hidden="true">
      <div className="main-boot-noise"></div>

      <div className="main-boot-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C120,88 240,20 360,60 C480,100 600,22 720,60 C840,98 960,24 1080,60 C1200,96 1320,26 1440,60" />
        </svg>
      </div>

      <div className="main-boot-panel">
        <div className="main-boot-count" id="mainBootCount">
          0
        </div>

        <div className="main-boot-progress-wrap">
          <div className="main-boot-progress-track">
            <span
              className="main-boot-progress-fill"
              id="mainBootProgress"
            ></span>
          </div>
        </div>

        <div className="main-boot-status" id="mainBootStatus">
          GILANG AKHIL AZZAM / INITIALIZING MAIN SIGNAL
        </div>
      </div>
    </div>
  );
}