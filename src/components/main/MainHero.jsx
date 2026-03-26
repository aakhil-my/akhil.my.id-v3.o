export default function MainHero() {
  return (
    <div className="main-stage reveal">
      <div className="main-name-stack" aria-label="Nama utama portfolio">
        <span
          className="main-name main-name--ghost"
          data-ghost="GILANG"
          data-depth="0.55"
        >
          GILANG
        </span>

        <span
          className="main-name main-name--focus"
          data-ghost="AKHIL"
          data-depth="1"
        >
          AKHIL
        </span>

        <span
          className="main-name main-name--ghost"
          data-ghost="AZZAM"
          data-depth="0.55"
        >
          AZZAM
        </span>
      </div>

      <div className="main-enter-hint">
        click anywhere to enter <span>/</span> or click enter button
      </div>
    </div>
  );
}