import Copyright from "../components/Copyright";

export default function Contact() {
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
