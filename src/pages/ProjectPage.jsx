import "../styles/global.css";
import SiteLoader from "../components/common/SiteLoader";
import PageTransition from "../components/common/PageTransition";
import SiteHeader from "../components/common/SiteHeader";
import SiteFooter from "../components/common/SiteFooter";
import FloatingNextButton from "../components/common/FloatingNextButton";
import ProjectIntro from "../components/project/ProjectIntro";
import ProjectGrid from "../components/project/ProjectGrid";

const projects = [
    {
    path: "projects/investigate-us",
    title: "Education App | Game",
    description: "Education App",
    tags: ["Next JS", "CSS", "JavaScript", "Responsive UI"],
    liveDemo: "https://investigateus.com",
    github: "https://github.com/akhil-my",
    detail: "https://investigateus.com/",
  },
    {
    path: "projects/ivora",
    title: "Startup",
    description: "Startup Akhil",
    tags: ["Nextjs", "CSS", "JavaScript", "Responsive UI"],
    liveDemo: "https://ivora.id",
    github: "https://github.com/akhil-my",
    detail: "https://ivora.id/",
  },
  {
    path: "projects/nirantara-sagara",
    title: "School Organization",
    description: "Website school organization.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    liveDemo: "https://osislima.web.id",
    github: "https://github.com/akhil-my/mpk-osis-nirantara-sagara",
    detail: "https://osislima.netlify.app/detail",
  },
];

export default function ProjectPage() {
  return (
    <>
      <SiteLoader />

      <div className="page-shell">
        <PageTransition />
        <SiteHeader currentPage="project" />

        <main className="site-main">
          <ProjectIntro />
          <ProjectGrid projects={projects} />
        </main>

        <SiteFooter />
      </div>

      <FloatingNextButton href="/contact/" label="Next" isVisible />
    </>
  );
}
