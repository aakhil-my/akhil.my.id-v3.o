import "../styles/global.css";
import SiteLoader from "../components/common/SiteLoader";
import PageTransition from "../components/common/PageTransition";
import SiteHeader from "../components/common/SiteHeader";
import SiteFooter from "../components/common/SiteFooter";
import FloatingNextButton from "../components/common/FloatingNextButton";
import AboutIntro from "../components/about/AboutIntro";
import AboutSidebar from "../components/about/AboutSidebar";
import AboutPersonalBox from "../components/about/AboutPersonalBox.jsx";
import AboutBodyCopy from "../components/about/AboutBodyCopy";
import AboutInfoStrip from "../components/about/AboutInfoStrip";

export default function AboutPage() {
  return (
    <>
      <SiteLoader />
      
      <div className="page-shell">
        <PageTransition />

        <SiteHeader currentPage="about" />

        <main className="site-main">
          <AboutIntro />

          <section className="about-layout container">
            <AboutSidebar />

            <div className="about-copy reveal">
              <div className="command-line">
                <span className="symbol">&gt;</span>
                <span>whoami</span>
              </div>

              <h2 className="section-title">Gilang Akhil Azzam</h2>
              <p className="section-lead">Who doesn't like sophistication?.</p>

              <AboutPersonalBox />
              <AboutBodyCopy />
              <AboutInfoStrip />
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>

      <FloatingNextButton href="/resume/" label="Next" isVisible />
    </>
  );
}