import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/nav";

function isRouterLink(href) {
  return href.startsWith("/");
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="brand" to="/" aria-label="Página inicial ClubeDS" onClick={closeMenu}>
          <span className="brand__logo" aria-hidden="true">
            <img src="img/logo2.png" alt="Logo ClubeDS" />
          </span>
          <span className="brand__text">
            <strong>ClubeDS</strong>
            <small>Clube de Programação</small>
          </span>
        </Link>

        <button
          className="nav__toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav__toggle-lines" aria-hidden="true" />
        </button>

        <nav className={["nav", open ? "nav--open" : ""].filter(Boolean).join(" ")}>
          {navLinks.map((link) =>
            isRouterLink(link.href) ? (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  ["nav__link", isActive ? "is-active" : ""].filter(Boolean).join(" ")
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ) : (
              <a key={link.href} href={link.href} className="nav__link" onClick={closeMenu}>
                {link.label}
              </a>
            )
          )}
          <a href="cadastro.html" className="nav__link nav__cta">
            Quero participar
          </a>
        </nav>
      </div>
    </header>
  );
}
