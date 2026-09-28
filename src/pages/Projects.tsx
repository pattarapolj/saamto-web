import { useState } from "react";
import { Link } from "react-router-dom";
import Copyright from "../components/Copyright";
import { projects } from "../projects";

export default function Projects() {
    const [active, setActive] = useState(0);

    return (
        <main id="main" className="split projects-page">
            <div className="split__image projects-page__preview">
                {projects.map((project, index) => (
                    <img
                        key={project.slug}
                        className={index === active ? "is-visible" : ""}
                        src={project.images[0]}
                        alt={
                            index === active
                                ? `${project.title} project preview`
                                : ""
                        }
                        aria-hidden={index !== active}
                    />
                ))}
                <span className="image-index">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                </span>
            </div>
            <div className="split__content projects-page__content">
                <div className="project-list">
                    <p className="eyebrow eyebrow--dark">Selected projects</p>
                    <h1 className="sr-only">Projects</h1>
                    <ol>
                        {projects.map((project, index) => (
                            <li key={project.slug}>
                                <Link
                                    to={`/projects/${project.slug}`}
                                    onMouseEnter={() => setActive(index)}
                                    onFocus={() => setActive(index)}
                                    className={
                                        active === index ? "is-active" : ""
                                    }
                                >
                                    <span>{project.title}</span>
                                    <span
                                        className="project-list__arrow"
                                        aria-hidden="true"
                                    >
                                        ↗
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ol>
                    <span className="project-list__count">
                        01 — {String(projects.length).padStart(2, "0")}
                    </span>
                </div>
            </div>
            <Copyright />
        </main>
    );
}
