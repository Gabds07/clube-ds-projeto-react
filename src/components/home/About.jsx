import Button from "../ui/Button";

const defaultChecks = [
  "Rotina de prática com entregas",
  "Comunidade e apoio entre alunos",
  "Visão de mercado e carreira",
  "Qualidade: código limpo e organização",
];

const defaultDeliverables = [
  "Repositório no GitHub bem organizado",
  "Deploy no Vercel (site no ar)",
  "Projeto com README e evidências",
  "Apresentação final (pitch técnico)",
];

export default function About({ checks = defaultChecks, deliverables = defaultDeliverables }) {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="split">
          <div className="split__content">
            <h2>O ClubeDS é um ambiente pedagógico e didático</h2>
            <p className="muted">
              Criado para fortalecer a aprendizagem no curso técnico por meio de projetos, cultura
              de colaboração e desenvolvimento contínuo.
            </p>

            <div className="checks">
              {checks.map((item) => (
                <div className="check" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="split__card card">
            <h3 className="card__title">Entrega do aluno</h3>
            <p className="muted">Ao longo do ciclo, você sai com:</p>
            <ul className="list">
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Button href="cadastro.html" block>
              Entrar no clube
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
