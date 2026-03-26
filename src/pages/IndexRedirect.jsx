import { useEffect } from "react";
import "../styles/redirect.css";

export default function IndexRedirect() {
  useEffect(() => {
    window.location.replace("../main/");
  }, []);

  return (
    <div className="redirect-page">
      <div className="redirect-box">
        <div className="top">
          <span>$</span>
          <span>open main</span>
        </div>

        <p>
          Anda sedang diarahkan ke halaman utama. Jika tidak berpindah
          otomatis, klik{" "}
          <a
            href="../main/"
            target="_self"
            rel="noreferrer"
          >
            masuk ke Halaman Utama
          </a>.
        </p>
      </div>
    </div>
  );
}