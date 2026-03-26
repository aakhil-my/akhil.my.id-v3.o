export default function PageTransition() {
  return (
    <div className="page-transition" aria-hidden="true">
      <div className="page-transition__box">
        <div className="page-transition__text">
          <span className="symbol">&gt;</span>
          <span>switch_page()</span>
        </div>
        <div className="loader-text">Membuka halaman berikutnya...</div>
        <div className="page-transition__bar"></div>
      </div>
    </div>
  );
}