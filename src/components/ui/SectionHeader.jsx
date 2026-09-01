export default function SectionHeader({ title, description }) {
  return (
    <header className="section__header">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
