import PageHead from "../components/ui/PageHead";
import Cta from "../components/ui/Cta";
import ActivityCategories from "../components/activities/ActivityCategories";

export default function Atividades() {
  return (
    <main id="conteudo">
      <PageHead
        title="Atividades"
        description="Cursos, oficinas e palestras pensados para desenvolver técnica + portfólio."
      />
      <section className="section">
        <div className="container">
          <ActivityCategories />
          <Cta
            compact
            title="Quer receber o calendário?"
            description="Cadastre-se para receber as datas das próximas atividades."
            buttonLabel="Fazer cadastro"
            buttonHref="cadastro.html"
          />
        </div>
      </section>
    </main>
  );
}
