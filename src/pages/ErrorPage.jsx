import { useEffect, useState } from "react";
import "../styles/error.css";
import RedirectNotice from "../components/common/RedirectNotice";
import ErrorHero from "../components/error/ErrorHero";
import ErrorTerminal from "../components/error/ErrorTerminal";
import ErrorInfoGrid from "../components/error/ErrorInfoGrid";
import ErrorActions from "../components/error/ErrorActions";

export default function ErrorPage() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const redirectTarget = "/main/";

    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = redirectTarget;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="error-page">
      <div className="scanline" aria-hidden="true"></div>

      <RedirectNotice seconds={seconds} />

      <main className="error-shell">
        <section className="error-card" aria-label="Error page">
          <div className="topbar">
            <div className="dots" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="tab-name">system/error-page.log</div>
          </div>

          <div className="content">
            <ErrorHero />
            <ErrorTerminal />
            <ErrorInfoGrid />
            <ErrorActions />

            <div className="footer-note">
              // exception handled by error page fallback
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}