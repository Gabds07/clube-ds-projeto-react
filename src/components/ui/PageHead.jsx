export default function PageHead({ title, description }) {
  return (
    <section className="pagehead">
      <div className="container">
        <h1>{title}</h1>
        {description && <p className="muted">{description}</p>}
      </div>
    </section>
  );
}
