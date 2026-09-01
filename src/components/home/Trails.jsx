import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import { trails } from "../../data/trails";

export default function Trails({ items = trails }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          title="Trilhas do ClubeDS"
          description="Um caminho claro para evoluir, sem pular etapas importantes."
        />

        <div className="grid grid--3">
          {items.map((trail) => (
            <Card as="article" key={trail.title}>
              <h3>{trail.title}</h3>
              <p className="muted">{trail.description}</p>
              <ul className="list">
                {trail.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
