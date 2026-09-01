import Button from "./Button";

export default function Cta({ title, description, buttonLabel, buttonHref, compact = false }) {
  return (
    <div className={["cta", compact ? "cta--compact" : ""].filter(Boolean).join(" ")}>
      <div className="cta__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Button variant="primary" href={buttonHref}>
        {buttonLabel}
      </Button>
    </div>
  );
}
