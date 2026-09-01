export default function Button({ variant = "primary", href, block = false, children, ...rest }) {
  const className = ["btn", `btn--${variant}`, block ? "btn--block" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={className} href={href} {...rest}>
      {children}
    </a>
  );
}
