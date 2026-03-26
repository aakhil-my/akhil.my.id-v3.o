import "../styles/global.css";
import SiteLoader from "../components/common/SiteLoader";
import PageTransition from "../components/common/PageTransition";
import SiteHeader from "../components/common/SiteHeader";
import SiteFooter from "../components/common/SiteFooter";
import FloatingNextButton from "../components/common/FloatingNextButton";
import ContactIntro from "../components/contact/ContactIntro";
import ContactFormPanel from "../components/contact/ContactFormPanel";
import ContactAside from "../components/contact/ContactAside";

export default function ContactPage() {
  return (
    <>
      <SiteLoader />

      <div className="page-shell">
        <PageTransition />
        <SiteHeader currentPage="contact" />

        <main className="site-main">
          <ContactIntro />

          <section className="contact-layout container">
            <ContactFormPanel />
            <ContactAside />
          </section>
        </main>

        <SiteFooter />
      </div>

      <FloatingNextButton href="/main/" label="RESTART" isVisible />
    </>
  );
}