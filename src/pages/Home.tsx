import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Copyright from "../components/Copyright";
import { projects } from "../projects";

// Pick a project slug from projects.ts and a zero-based index from its images.
const featuredSelections = [
    { slug: "3506-ideo-rama9", imageIndex: 2 },
    { slug: "grand-pleno-viphavadi-rangsit", imageIndex: 2 },
    { slug: "baansiri-sukhumvit-10", imageIndex: 2 },
    { slug: "whizdom", imageIndex: 0 },
    { slug: "varinda-office", imageIndex: 4 },
];

const featured = featuredSelections.map(({ slug, imageIndex }) => {
    const project = projects.find((item) => item.slug === slug);
    const image = project?.images[imageIndex];
    if (!project || !image) {
        throw new Error(
            "Invalid featured selection: " + slug + " image " + imageIndex,
        );
    }
    return { project, image, imageIndex };
});

export default function Home() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(
            () => setActive((index) => (index + 1) % featured.length),
            6500,
        );
        return () => window.clearInterval(timer);
    }, [featured.length]);

    return (
        <main id="main" className="home">
            {featured.map(({ project, image }, index) => (
                <img
                    key={index}
                    className={`home__image ${index === active ? "is-visible" : ""}`}
                    src={image}
                    alt={
                        index === active
                            ? `${project.title} interior by SAAMTO+`
                            : ""
                    }
                    aria-hidden={index !== active}
                />
            ))}
            <div className="home__shade" />
            <div className="home__caption">
                <span className="eyebrow">Interior design & build</span>
                <Link to={`/projects/${featured[active].project.slug}`}>
                    {featured[active].project.title}
                    <span aria-hidden="true"> ↗</span>
                </Link>
            </div>
            <div className="home__controls" aria-label="Featured projects">
                {featured.map(({ project, imageIndex }, index) => (
                    <button
                        key={index}
                        className={index === active ? "is-active" : ""}
                        type="button"
                        onClick={() => setActive(index)}
                        aria-label={`Show ${project.title}, image ${imageIndex + 1}`}
                        aria-current={index === active ? "true" : undefined}
                    />
                ))}
            </div>
            <Copyright light />
        </main>
    );
}
