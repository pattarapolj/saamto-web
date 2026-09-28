import { useEffect, useState } from "react";
import {
    Link,
    NavLink,
    Route,
    Routes,
    useLocation,
    useParams,
} from "react-router-dom";
import { projects } from "./projects";

const navigation = [
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
];

function Header() {
    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const home = pathname === "/";

    useEffect(() => setMenuOpen(false), [pathname]);

    return (
        <header
            className={`site-header ${home ? "site-header--home" : ""} ${menuOpen ? "site-header--open" : ""}`}
        >
            <Link className="brand" to="/" aria-label="SAAMTO+ home">
                SAAMTO<span>+</span>
            </Link>
            <button
                className="menu-toggle"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-controls="site-nav"
            >
                {menuOpen ? "Close" : "Menu"}
                <span aria-hidden="true">{menuOpen ? "×" : "+"}</span>
            </button>
            <nav
                className={menuOpen ? "site-nav site-nav--open" : "site-nav"}
                id="site-nav"
                aria-label="Main navigation"
            >
                {navigation.map(({ label, to }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            `site-nav__link ${isActive ? "is-active" : ""}`
                        }
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}

function Copyright({ light = false }: { light?: boolean }) {
    return (
        <small className={`copyright ${light ? "copyright--light" : ""}`}>
            © {new Date().getFullYear()} SAAMTO+ All rights reserved
        </small>
    );
}

function Home() {
    const [active, setActive] = useState(0);
    const featured = [
        projects[0],
        projects[1],
        projects[2],
        projects[3],
        projects[5],
    ];

    useEffect(() => {
        const timer = window.setInterval(
            () => setActive((index) => (index + 1) % featured.length),
            6500,
        );
        return () => window.clearInterval(timer);
    }, [featured.length]);

    return (
        <main id="main" className="home">
            {featured.map((project, index) => (
                <img
                    key={project.slug}
                    className={`home__image ${index === active ? "is-visible" : ""}`}
                    src={project.images[0]}
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
                <Link to={`/projects/${featured[active].slug}`}>
                    {featured[active].title}
                    <span aria-hidden="true"> ↗</span>
                </Link>
            </div>
            <div className="home__controls" aria-label="Featured projects">
                {featured.map((project, index) => (
                    <button
                        key={project.slug}
                        className={index === active ? "is-active" : ""}
                        type="button"
                        onClick={() => setActive(index)}
                        aria-label={`Show ${project.title}`}
                        aria-current={index === active ? "true" : undefined}
                    />
                ))}
            </div>
            <Copyright light />
        </main>
    );
}

function Projects() {
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

function About() {
    return (
        <main id="main" className="split about-page">
            <div className="split__image">
                <img
                    src="/images/about-studio.jpg"
                    alt="A SAAMTO+ design presentation in the studio"
                />
            </div>
            <div className="split__content page-copy">
                <div className="page-copy__inner">
                    <p className="eyebrow eyebrow--dark">The studio</p>
                    <h1>About</h1>
                    <div className="page-copy__rule" />
                    <div className="about-columns">
                        <p>
                            At SAAMTO+, we believe that building your dream home
                            shouldn't be stressful—it should be a memorable
                            journey. We position ourselves not just as designers
                            and builders, but as your “Architect Friends”.
                        </p>
                        <p>
                            We are here to turn the complexities of construction
                            into a seamless, collaborative, and enjoyable
                            experience for you. Our mission is simple: To be
                            your safe space.
                        </p>
                    </div>
                    <div className="services">
                        <span className="eyebrow eyebrow--dark">
                            What we do
                        </span>
                        <ul>
                            <li>Interior Design</li>
                            <li>Space Planning</li>
                            <li>Furniture Selection</li>
                            <li>Project Management</li>
                            <li>Budget Controlling</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Copyright light />
        </main>
    );
}

function Contact() {
    return (
        <main id="main" className="split contact-page">
            <div className="split__image">
                <img
                    src="/images/lakewood-detail.jpg"
                    alt="Warm material detail from a SAAMTO+ interior"
                />
            </div>
            <div className="split__content page-copy">
                <div className="page-copy__inner">
                    <p className="eyebrow eyebrow--dark">
                        Start a conversation
                    </p>
                    <h1>Contact</h1>
                    <div className="page-copy__rule" />
                    <dl className="contact-list">
                        <div>
                            <dt>Address</dt>
                            <dd>
                                5 Phahon Yothin 48 Alley, Lane 5<br />
                                Bang Khen, Bangkok 10220
                                <br />
                                Thailand
                            </dd>
                        </div>
                        <div>
                            <dt>Phone</dt>
                            <dd>
                                <a href="tel:+66945156156">+66 94 515 6156</a>
                            </dd>
                        </div>
                        <div>
                            <dt>Email</dt>
                            <dd>
                                <a href="mailto:12saamto@saamto.com">
                                    12saamto@saamto.com
                                </a>
                            </dd>
                        </div>
                        <div>
                            <dt>Social</dt>
                            <dd>
                                <a
                                    href="https://www.instagram.com/saamto_interior/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Instagram ↗
                                </a>
                                <a
                                    href="https://www.facebook.com/saamtospace"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Facebook ↗
                                </a>
                            </dd>
                        </div>
                    </dl>
                    <a
                        className="contact-cta"
                        href="mailto:12saamto@saamto.com?subject=Project%20enquiry"
                    >
                        Tell us about your project{" "}
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </div>
            <Copyright light />
        </main>
    );
}

function ProjectDetail() {
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
                        <span aria-hidden="true">↗</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}

function NotFound() {
    return (
        <main id="main" className="not-found">
            <span className="eyebrow eyebrow--dark">404</span>
            <h1>Page not found</h1>
            <Link to="/projects">Explore projects ↗</Link>
        </main>
    );
}

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
