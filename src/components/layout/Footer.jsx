import { Link } from "react-router-dom";
import { footerLinks } from "../../data/nav";

function isRouterLink(href) {
  return href.startsWith("/");
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="brand brand--footer">
            <span className="brand__logo" aria-hidden="true">
              {"</>"}
            </span>
            <span className="brand__text">
              <strong>ClubeDS</strong>
              <small>Clube de Programação</small>
            </span>
          </div>
          <p className="muted">
            Um ambiente pedagógico e didático focado no desenvolvimento prático dos alunos.
          </p>
        </div>

        <nav className="footer__links">
          {footerLinks.map((link) =>
            isRouterLink(link.href) ? (
              <Link key={link.href} to={link.href}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="footer__meta muted">
          <p>© {new Date().getFullYear()} ClubeDS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
