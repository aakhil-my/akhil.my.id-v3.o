export default function AboutPersonalBox() {
  return (
    <div className="about-personal-box reveal">
      <div className="about-personal-head">
        <span className="about-personal-label">&gt; personal.data</span>
      </div>

      <div className="about-personal-grid">
        <div className="about-personal-item">
          <span className="about-personal-key">Name</span>
          <span className="about-personal-value">Gilang Akhil Azzam</span>
        </div>

        <div className="about-personal-item">
          <span className="about-personal-key">Location</span>
          <span className="about-personal-value">Jambi, Indonesia</span>
        </div>

        <div className="about-personal-item">
          <span className="about-personal-key">Date of Birth</span>
          <span className="about-personal-value">March 2010</span>
        </div>
      </div>
    </div>
  );
}