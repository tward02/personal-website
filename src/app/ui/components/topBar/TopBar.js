'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import site from "@/data/site.json";
import classes from "./topBar.module.css";

const pages = [
    {title: "Home", link: "/"},
    {title: "CV", link: "/cv"},
    {title: "Contact", link: "/contact"},
];

const TopBar = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLink = (page) => (
        <Link
            key={page.link}
            href={page.link}
            className={pathname === page.link ? classes.activeLink : classes.navLink}
            aria-current={pathname === page.link ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
        >
            {page.title}
        </Link>
    );

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Link href="/" className={classes.brand} onClick={() => setMenuOpen(false)}>
                    {site.name.toLowerCase().replace(" ", ".")}
                </Link>

                <nav className={classes.desktopNav} aria-label="Main navigation">
                    {pages.map(navLink)}
                </nav>

                <button
                    type="button"
                    className={classes.menuButton}
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        {menuOpen
                            ? <path d="M6 6l12 12M18 6L6 18"/>
                            : <path d="M3 6h18M3 12h18M3 18h18"/>}
                    </svg>
                </button>
            </div>

            {menuOpen && (
                <nav className={classes.mobileNav} aria-label="Main navigation">
                    {pages.map(navLink)}
                </nav>
            )}
        </header>
    );
};

export default TopBar;
