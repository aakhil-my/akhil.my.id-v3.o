import { useEffect } from "react";
import "../styles/redirect.css";

export default function MailPage() {
  useEffect(() => {
    window.location.replace("mailto:contact@akhil.my.id");
  }, []);

  return (
    <div className="redirect-page">
      <div className="redirect-box">
        <div className="top">
          <span>$</span>
          <span>open mailto:contact@akhil.my.id</span>
        </div>

        <p>
          Anda sedang diarahkan ke halaman Email. Jika tidak berpindah
          otomatis, klik{" "}
          <a
            href="mailto:contact@akhil.my.id"
            target="_blank"
            rel="noreferrer"
          >
            masuk ke Email
          </a>.
        </p>
      </div>
    </div>
  );
}