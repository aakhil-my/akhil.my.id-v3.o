import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initGlobalScripts } from "./scripts/global";


import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import LinkPage from "./pages/LinkPage";
import InstagramPage from "./pages/InstagramPage";
import GithubPage from "./pages/GithubPage";
import LinkedinPage from "./pages/LinkedinPage";
import MailPage from "./pages/MailPage";
import IndexRedirect from "./pages/IndexRedirect";

function AppContent() {
  useEffect(() => {
    const cleanup = initGlobalScripts();
    return () => cleanup?.();
  });

  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/link" element={<LinkPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/instagram" element={<InstagramPage />} />
      <Route path="/github" element={<GithubPage />} />
      <Route path="/linkedin" element={<LinkedinPage />} />
      <Route path="/mail" element={<MailPage />} />
      <Route path="/" element={<IndexRedirect />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}