import PageHead from "../components/ui/PageHead";
import SignupCard from "../components/cadastro/SignupCard";
import NextSteps from "../components/cadastro/NextSteps";

export default function Cadastro() {
  return (
    <main id="conteudo">
      <PageHead
        title="Cadastro de membro"
        description="Preencha para receber o calendário e entrar na lista do clube."
      />
      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            <SignupCard />
            <NextSteps />
          </div>
        </div>
      </section>
    </main>
  );
}
