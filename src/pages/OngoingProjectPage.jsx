import { useEffect } from "react";
import "../styles/redirect.css";

export default function OngoingProjectPage() {
  useEffect(() => {
    window.location.replace("https://taupe-phoenix-0279eb.netlify.app/");
  }, []);

  return (
    <div className="redirect-page">
      <div className="redirect-box">
        <div className="top">
          <span>$</span>
          <span>open /ongoingproject</span>
        </div>

        <p>
          Anda sedang diarahkan ke halaman ongoing project. Jika tidak berpindah
          otomatis, klik{" "}
          <a
            href="https://taupe-phoenix-0279eb.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            buka halaman tujuan
          </a>.
        </p>
      </div>
    </div>
  );
}