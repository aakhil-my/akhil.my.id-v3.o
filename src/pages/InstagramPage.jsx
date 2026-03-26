import { useEffect } from "react";
import "../styles/redirect.css";

export default function InstagramPage() {
  useEffect(() => {
    window.location.replace("https://instagram.com/aakhil.my");
  }, []);

  return (
    <div className="redirect-page">
      <div className="redirect-box">
        <div className="top">
          <span>$</span>
          <span>open instagram://aakhil.my</span>
        </div>

        <p>
          Anda sedang diarahkan ke halaman Instagram. Jika tidak berpindah
          otomatis, klik{" "}
          <a
            href="https://instagram.com/aakhil.my"
            target="_blank"
            rel="noreferrer"
          >
            masuk ke Instagram
          </a>.
        </p>
      </div>
    </div>
  );
}