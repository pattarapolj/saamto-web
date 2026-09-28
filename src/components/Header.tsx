import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navigation = [
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
];

export default function Header() {
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
