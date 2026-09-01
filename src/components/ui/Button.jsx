import { Link } from "react-router-dom";

function isRouterLink(href) {
  return typeof href === "string" && href.startsWith("/");
}

export default function Button({ variant = "primary", href, block = false, children, ...rest }) {
  const className = ["btn", `btn--${variant}`, block ? "btn--block" : ""]
    .filter(Boolean)
    .join(" ");

  if (isRouterLink(href)) {
    return (
      <Link className={className} to={href} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a className={className} href={href} {...rest}>
      {children}
    </a>
  );
}
