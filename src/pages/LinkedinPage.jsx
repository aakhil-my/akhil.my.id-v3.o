import { useEffect } from "react";
import "../styles/redirect.css";

export default function LinkedinPage() {
  useEffect(() => {
    window.location.replace("https://www.linkedin.com/in/aakhilmy");
  }, []);

  return (
    <div className="redirect-page">
      <div className="redirect-box">
        <div className="top">
          <span>$</span>
          <span>open linkedin://aakhilmy</span>
        </div>

        <p>
          Anda sedang diarahkan ke halaman LinkedIn. Jika tidak berpindah
          otomatis, klik{" "}
          <a
            href="https://www.linkedin.com/in/aakhilmy"
            target="_blank"
            rel="noreferrer"
          >
            masuk ke LinkedIn
          </a>.
        </p>
      </div>
    </div>
  );
}