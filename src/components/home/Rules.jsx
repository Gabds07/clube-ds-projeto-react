import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import { rules } from "../../data/rules";

export default function Rules({ items = rules }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          title="Regras de participação"
          description="Transparência e organização para o clube rodar bem durante o ano."
        />

        <div className="grid grid--2">
          {items.map((rule) => (
            <Card key={rule.title}>
              <h3>{rule.title}</h3>
              <p>{rule.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
