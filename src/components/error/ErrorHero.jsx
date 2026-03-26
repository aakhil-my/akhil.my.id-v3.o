export default function ErrorHero() {
  return (
    <>
      <div className="alert-line">
        <span className="prompt">$</span>
        <span>runtime exception detected</span>
      </div>

      <div className="headline-wrap">
        <h1 className="error-code" data-text="404">
          404
        </h1>
        <h2 className="title">Page Error: resource not found</h2>
        <p className="desc">
          Halaman yang Anda cari tidak tersedia, dipindahkan, atau URL yang
          dimasukkan tidak valid. Periksa kembali alamat URL, atau klik tombol
          di bawah untuk kembali ke halaman utama.
        </p>
      </div>
    </>
  );
}