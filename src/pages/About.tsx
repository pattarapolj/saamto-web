import Copyright from "../components/Copyright";

export default function About() {
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
