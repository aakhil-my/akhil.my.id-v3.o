import "../styles/global.css";
import SiteLoader from "../components/common/SiteLoader";
import PageTransition from "../components/common/PageTransition";
import SiteHeader from "../components/common/SiteHeader";
import SiteFooter from "../components/common/SiteFooter";
import FloatingNextButton from "../components/common/FloatingNextButton";
import ResumeIntro from "../components/resume/ResumeIntro";
import ResumeColumn from "../components/resume/ResumeColumn";

const educationItems = [
  {
    title: "Olympiad Private Teacher",
    role: "Mathematics",
    date: "2018 - 2023",
    description: "Studying for the math olympiad.",
    meta: "Focus: Olympiad",
  },
  {
    title: "YPI Al Inayah Islamic Boarding School",
    role: "Junior High School",
    date: "2022 - 2025",
    description:
      "Learn about a variety of subjects, including mathematics, science, and information technology.",
    meta: "Focus: Junior High School",
  },
  {
    title: "Funtech Inovation",
    role: "Roblox Developer",
    date: "2020 - 2021",
    description: "Developed and maintained Roblox games.",
    meta: "Focus: Lua",
  },
  {
    title: "English Master",
    role: "IELTS",
    date: "2020 - 2022",
    description: "Prepared for and took the IELTS exam.",
    meta: "Focus: English Language Skills",
  },
  {
    title: "Chess Club RCJ",
    role: "Chess Trainer",
    date: "2023 - 2025",
    description: "Trained and coached students in chess strategies and tactics.",
    meta: "Focus: Chess Education",
  },
  {
    title: "Pelatihan OSN | PELATOS",
    role: "Informatics",
    date: "Ongoing",
    description:
      "Studying informatics and preparing for the National Informatics Olympiad.",
    meta: "Focus: Problem Solving, Algorithm, C++.",
  },
  {
    title: "Untitled Programming Camp",
    role: "Informatics",
    date: "Ongoing",
    description:
      "Studying informatics and preparing for the National Informatics Olympiad.",
    meta: "Focus: Problem Solving, Algorithm, C++.",
  },
  {
    title: "Kokocoder",
    role: "Informatics",
    date: "Ongoing",
    description:
      "Studying informatics and preparing for the National Informatics Olympiad.",
    meta: "Focus: Problem Solving, Algorithm, C++.",
  },
];

const experienceItems = [
  {
    title: "IVY COMMUNITY",
    role: "Founder",
    date: "2020 - 2023",
    description:
      "Founder of IVY COMMUNITY, a platform for role-playing games.",
    meta: "Focus: Game Development, Community Management.",
  },
  {
    title: "Roblox Developer",
    role: "Developer",
    date: "2021 - 2023",
    description: "Developing and maintaining games on the Roblox platform.",
    meta: "Focus: Game Development, Lua Programming.",
  },
  {
    title: "Our Creativity",
    role: "Designer",
    date: "2022 - 2024",
    description: "Designer for Our Creativity, a creative agency.",
    meta: "Focus: Adobe.",
  },
  {
    title: "Ambis Camp",
    role: "Informatics Teacher",
    date: "2023 - Present",
    description:
      "As a teacher for the national science olympiad in the field of informatics.",
    meta: "Focus: Problem Solving, Algorithm, C++.",
  },
  {
    title: "Akademi OSN",
    role: "Informatics Teacher",
    date: "2025 - Present",
    description:
      "As a teacher for the national science olympiad in the field of informatics.",
    meta: "Focus: Problem Solving, Algorithm, C++.",
  },
];

export default function ResumePage() {
  return (
    <>
      <SiteLoader />

      <div className="page-shell">
        <PageTransition />
        <SiteHeader currentPage="resume" />

        <main className="site-main">
          <ResumeIntro />

          <section className="resume-layout container">
            <ResumeColumn
              command="education.log"
              title="Education / Learning Experience"
              items={educationItems}
            />

            <ResumeColumn
              command="experience.log"
              title="Work Experience"
              items={experienceItems}
            />
          </section>
        </main>

        <SiteFooter />
      </div>

      <FloatingNextButton href="/project/" label="Next" isVisible />
    </>
  );
}