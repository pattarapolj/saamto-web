import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import { projects } from "./projects";

export default function App() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        const segment = pathname.split("/").filter(Boolean).pop();
        const title =
            projects.find((project) => project.slug === segment)?.title ??
            segment
                ?.replaceAll("-", " ")
                .replace(/\b\w/g, (letter) => letter.toUpperCase());
        document.title =
            pathname === "/"
                ? "SAAMTO+ — Interior Design & Build"
                : `${title ?? "Page"} — SAAMTO+`;
    }, [pathname]);

    return (
        <>
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
