import "../styles/link.css";
import { useEffect, useState } from "react";
import { initLinkScripts } from "../scripts/link";
import LinkProfile from "../components/link/LinkProfile";
import LinkGrid from "../components/link/LinkGrid";

const links = [
  {
    title: "Portfolio Website",
    sub: "lihat portfolio lengkap saya",
    href: "/main/",
    target: "_self",
  },
  {
    title: "GitHub",
    sub: "project, repository, dan source code",
    href: "/github/",
    target: "_blank",
  },
  {
    title: "LinkedIn",
    sub: "profil profesional dan experience",
    href: "/linkedin/",
    target: "_blank",
  },
  {
    title: "Instagram",
    sub: "update personal dan aktivitas",
    href: "/instagram/",
    target: "_blank",
  },
  {
    title: "Email",
    sub: "contact@akhil.my.id",
    href: "/contact/",
    target: "_self",
  },
];

export default function LinkPage() {
  return (
    <>
      <div className="loader" aria-hidden="true">
        <div className="loader-box">
          <div className="loader-line">
            <span className="symbol">$</span>
            <span>boot linkpage --mode developer</span>
          </div>
          <div className="loader-bar"></div>
        </div>
      </div>

      <main className="page">
        <section className="linkpage">
          <div className="top-line" aria-hidden="true">
            <span className="top-line-beam"></span>
          </div>

          <LinkProfile />
          <div className="motion-line reveal" aria-hidden="true">
            <span className="motion-line-beam"></span>
          </div>

          <LinkGrid links={links} />

          <footer className="footer reveal"></footer>
        </section>
      </main>
    </>
  );
}