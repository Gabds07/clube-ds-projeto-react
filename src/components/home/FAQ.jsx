import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";
import { faq } from "../../data/faq";

export default function FAQ({ items = faq }) {
  return (
    <section id="faq" className="section section--alt">
      <div className="container">
        <SectionHeader
          title="Perguntas frequentes"
          description="Respostas rápidas para dúvidas comuns."
        />

        <div className="faq">
          {items.map((item) => (
            <details className="faq__item" key={item.question}>
              <summary>{item.question}</summary>
              <p className="muted">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="cta">
          <div className="cta__content">
            <h3>Pronto para entrar?</h3>
            <p>Faça seu cadastro e receba as próximas datas de oficinas e palestras.</p>
          </div>
          <Button href="/cadastro">Cadastrar agora</Button>
        </div>
      </div>
    </section>
  );
}
