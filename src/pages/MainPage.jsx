import { useEffect } from "react";
import MainBoot from "../components/main/MainBoot";
import MainHero from "../components/main/MainHero";
import EnterButton from "../components/main/EnterButton";

export default function MainPage() {
  useEffect(() => {
    document.body.classList.add("page-main-only");

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
      document.body.classList.remove("page-main-only");
      if (page) {
        page.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div data-main-page>
      <MainBoot />

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