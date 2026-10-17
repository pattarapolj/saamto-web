import { Link, useParams } from "react-router-dom";
import { projects } from "../projects";
import NotFound from "./NotFound";

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = projects.find((item) => item.slug === slug);
    if (!project) return <NotFound />;
    const next = projects[(projects.indexOf(project) + 1) % projects.length];

    return (
        <main id="main" className="split detail-page">
            <div className="split__image detail-gallery">
                {project.images.map((src, index) => (
                    <img
                        key={src}
                        src={src}
                        alt={`${project.title}, view ${index + 1}`}
                        loading={index === 0 ? "eager" : "lazy"}
                    />
                ))}
            </div>
            <div className="split__content detail-copy">
                <div className="detail-copy__inner">
                    <Link className="back-link" to="/projects">
                        ← All projects
                    </Link>
                    <p className="eyebrow eyebrow--dark">
                        SAAMTO+ / Selected work
                    </p>
                    <h1>{project.title}</h1>
                    <div className="page-copy__rule" />
                    <dl className="detail-meta">
                        <div>
                            <dt>Project</dt>
                            <dd>{project.title}</dd>
                        </div>
                        <div>
                            <dt>Type</dt>
                            <dd>{project.category}</dd>
                        </div>
                        {project.area && (
                            <div>
                                <dt>Area</dt>
                                <dd>{project.area}</dd>
                            </div>
                        )}
                        {project.location && (
                            <div>
                                <dt>Location</dt>
                                <dd>{project.location}</dd>
                            </div>
                        )}
                        {project.year && (
                            <div>
                                <dt>Year</dt>
                                <dd>{project.year}</dd>
                            </div>
                        )}
                        {project.scope && (
                            <div>
                                <dt>Scope</dt>
                                <dd>{project.scope}</dd>
                            </div>
                        )}
                    </dl>
                    {project.description && (
                        <p className="detail-description">
                            {project.description}
                        </p>
                    )}
                    <Link
                        className="next-project"
                        to={`/projects/${next.slug}`}
                    >
                        <span>Next project</span>
                        <strong>{next.title}</strong>
                        <span aria-hidden="true">↗︎</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
