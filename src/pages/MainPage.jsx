import { useEffect, useState } from "react";
import MainBoot from "../components/main/MainBoot";
import MainHero from "../components/main/MainHero";
import EnterButton from "../components/main/EnterButton";

export default function MainPage() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(
    "GILANG AKHIL AZZAM / INITIALIZING MAIN SIGNAL"
  );

  useEffect(() => {
    document.body.classList.add("page-main-only");
    document.body.classList.remove("is-main-ready");
    document.body.classList.remove("is-loaded");

    const statuses = [
      "GILANG AKHIL AZZAM / INITIALIZING MAIN SIGNAL",
      "SCANNING VISUAL SURFACE / ESTABLISHING PRESENCE",
      "LOADING CORE IDENTITY / STABILIZING INTERFACE",
      "ACCESS GRANTED / ENTERING MAIN PAGE",
    ];

    let current = 0;

    const interval = setInterval(() => {
      current += 4;

      if (current > 100) {
        current = 100;
      }

      setProgress(current);

      const statusIndex = Math.min(
        statuses.length - 1,
        Math.floor((current / 100) * statuses.length)
      );

      setStatus(statuses[statusIndex]);

      if (current >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          document.body.classList.add("is-main-ready");
          document.body.classList.add("is-loaded");
        }, 250);
      }
    }, 40);

    return () => {
      clearInterval(interval);
      document.body.classList.remove("page-main-only");
    };
  }, []);

  useEffect(() => {
    const enterButton = document.querySelector("[data-main-enter-button]");
    const page = document.querySelector("[data-main-page]");

    function handleClick(event) {
      if (!enterButton) return;
      if (event.target.closest("[data-main-enter-button]")) return;
      enterButton.click();
    }

    if (page) {
      page.addEventListener("click", handleClick);
    }

    return () => {
      if (page) {
        page.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div data-main-page>
      <MainBoot progress={progress} status={status} />

      <div className="page-shell">
        <main className="site-main main-page-content" id="mainPageContent">
          <section className="main-hero">
            <MainHero />
            <EnterButton />
          </section>
        </main>
      </div>
    </div>
  );
}