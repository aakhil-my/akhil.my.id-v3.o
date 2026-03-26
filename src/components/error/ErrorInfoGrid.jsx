export default function ErrorInfoGrid() {
  return (
    <div className="info-grid">
      <div className="info-card">
        <p className="info-label">error.type</p>
        <p className="info-value">Routing / navigation error</p>
      </div>

      <div className="info-card">
        <p className="info-label">http.status</p>
        <p className="info-value">404 Not Found</p>
      </div>

      <div className="info-card">
        <p className="info-label">recommended.fix</p>
        <p className="info-value">
          Periksa link, kembali ke homepage, atau refresh path
        </p>
      </div>
    </div>
  );
}