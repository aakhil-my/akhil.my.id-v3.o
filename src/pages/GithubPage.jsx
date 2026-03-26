import { useEffect } from "react";
import "../styles/redirect.css";

export default function GithubPage() {
  useEffect(() => {
    window.location.replace("https://github.com/aakhil-my");
  }, []);

  return (
    <div className="redirect-page">
      <div className="redirect-box">
        <div className="top">
          <span>$</span>
          <span>open github://aakhil-my</span>
        </div>

        <p>
          Anda sedang diarahkan ke halaman GitHub. Jika tidak berpindah
          otomatis, klik{" "}
          <a
            href="https://github.com/aakhil-my"
            target="_blank"
            rel="noreferrer"
          >
            masuk ke GitHub
          </a>.
        </p>
      </div>
    </div>
  );
}