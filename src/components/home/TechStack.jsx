import { techStack } from "../../data/techStack";

export default function TechStack({ items = techStack }) {
  return (
    <section className="section section--thin">
      <div className="container">
        <div className="logos">
          <span className="muted">Tecnologias/temas:</span>
          {items.map((item) => (
            <span className="logo-pill" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
