import Button from "../ui/Button";
import HeroCard from "./HeroCard";

const miniInfo = [
  { label: "Foco", value: "Portfólio + mercado" },
  { label: "Rotina", value: "Oficinas e projetos" },
  { label: "Base", value: "Git + Deploy" },
];

const bullets = [
  "Trilhas por nível (iniciante → avançado)",
  "Projetos em equipe e portfólio",
  "Prática com Git/GitHub e deploy",
];

const kpis = [
  { label: "Oficinas", value: "hands-on semanais" },
  { label: "Palestras", value: "carreira e mercado" },
  { label: "Projetos", value: "cases para portfólio" },
];

const stats = [
  { label: "Ciclos", value: "Mensais" },
  { label: "Formato", value: "Prático" },
  { label: "Entrega", value: "Git + Deploy" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <h1>Um clube para construir projetos de verdade - com método, colaboração e evolução.</h1>
          <p className="hero__lead">
            O ClubeDS é um espaço de aprendizagem prática para alunos do curso técnico, com
            oficinas, palestras, trilhas e projetos guiados.
          </p>

          <div className="hero__actions">
            <Button href="/cadastro">Quero me cadastrar</Button>
            <Button href="#como-funciona" variant="ghost">
              Como funciona
            </Button>
          </div>

          <div className="hero__mini">
            {miniInfo.map((item) => (
              <div className="mini" key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </div>
            ))}
          </div>

          <ul className="hero__bullets">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>

        <HeroCard kpis={kpis} stats={stats} />
      </div>
    </section>
  );
}
