import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import { steps } from "../../data/steps";

export default function HowItWorks({ items = steps }) {
  return (
    <section id="como-funciona" className="section">
      <div className="container">
        <SectionHeader
          title="Como o ClubeDS funciona"
          description="Organização simples, rotina consistente e foco no desenvolvimento do aluno."
        />

        <div className="grid grid--3">
          {items.map((step) => (
            <Card as="article" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
