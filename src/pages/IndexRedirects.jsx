import { useEffect } from "react";

export default function IndexRedirect() {
  useEffect(() => {
    window.location.replace("/main");
  }, []);

  return (
    <div className="redirect-page">
      <div className="redirect-box">
        <div className="top">
          <span>$</span>
          <span>cd /main</span>
        </div>
        <p>
          Anda sedang diarahkan ke halaman utama. Jika tidak berpindah otomatis,
          klik <a href="/main">masuk ke Main</a>.
        </p>
      </div>
    </div>
  );
}