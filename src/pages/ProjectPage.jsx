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
    path: "projects/nirantara-sagara",
    title: "School Organization",
    description: "Website school organization.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    liveDemo: "https://osislima.netlify.app",
    github: "https://github.com/akhil-my/mpk-osis-nirantara-sagara",
    detail: "https://osislima.netlify.app/detail",
  },
  {
    path: "projects/gallery-nirantara-sagara",
    title: "School Organization Gallery",
    description: "Website gallery school organization.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    liveDemo: "https://osislima.netlify.app/gallery",
    github: "https://github.com/akhil-my/mpk-osis-nirantara-sagara",
    detail: "https://osislima.netlify.app/gallery",
  },
  {
    path: "projects/student-aspiration",
    title: "Student Aspiration",
    description: "Website for student aspiration platform.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    liveDemo: "https://osislima.netlify.app/aspirasi",
    github: "https://github.com/akhil-my/mpk-osis-nirantara-sagara",
    detail: "https://osislima.netlify.app/aspirasi",
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