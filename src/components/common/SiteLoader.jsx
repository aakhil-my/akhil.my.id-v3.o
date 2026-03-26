export default function SiteLoader() {
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader-box">
        <div className="loader-command">
          <span className="symbol">$</span>
          <span>boot portfolio --mode developer</span>
        </div>
        <div className="loader-text">
          Memuat antarmuka development by Develop With Akhil _&lt;
        </div>
        <div className="loader-bar"></div>
      </div>
    </div>
  );
}