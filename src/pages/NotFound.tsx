import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main id="main" className="not-found">
            <span className="eyebrow eyebrow--dark">404</span>
            <h1>Page not found</h1>
            <Link to="/projects">Explore projects ↗</Link>
        </main>
    );
}
