import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function LayoutApp() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { to: "/", label: "Inicio", icon: "bx-home-alt-2" },
        { to: "/about", label: "Sobre mí", icon: "bx-user" },
        { to: "/resume", label: "Resumen", icon: "bx-news" },
        { to: "/works", label: "Proyectos", icon: "bx-code-block" },
        { to: "/contact", label: "Contacto", icon: "bxs-id-card" },
    ];

    return (
        <div className="bg-page min-h-screen w-full md:pb-16">
            <div className="site-shell mx-auto max-w-[1240px] px-0 sm:px-6 xl:px-10">
                <header className="site-header relative z-50 flex items-center justify-between">
                    <Link to="/" className="brand text-3xl font-bold" onClick={() => setMenuOpen(false)}>
                        Alexander<span className="brand-accent">.</span>
                    </Link>
                    <button className="menu-toggle flex h-11 w-11 items-center justify-center rounded-full lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}>
                        <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"} text-2xl`} />
                    </button>
                    <nav className="hidden lg:block">
                        <ul className="flex gap-2">
                            {links.map(link => <li key={link.to}><Link to={link.to} className={`nav-link flex items-center gap-2 rounded-full px-4 py-2 text-sm ${currentPath === link.to ? "active" : ""}`}><i className={`bx ${link.icon}`} />{link.label}</Link></li>)}
                        </ul>
                    </nav>
                    {menuOpen && <nav className="mobile-menu lg:hidden"><ul className="grid gap-1">{links.map(link => <li key={link.to}><Link to={link.to} onClick={() => setMenuOpen(false)} className={`nav-link flex items-center gap-3 rounded-lg px-4 py-3 ${currentPath === link.to ? "active" : ""}`}><i className={`bx ${link.icon}`} />{link.label}</Link></li>)}</ul></nav>}
                </header>
                <main><Outlet /></main>
            </div>
        </div>
    )
}
