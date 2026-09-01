import Card from "../ui/Card";
import { googleFormUrl } from "../../data/cadastro";

export default function SignupCard() {
  return (
    <Card className="form">
      <img src="img/cadastro.gif" alt="Ilustração de cadastro" className="form__image" width="200" />
      <a
        className="btn btn--primary btn--block"
        href={googleFormUrl}
        target="_blank"
        rel="noreferrer"
      >
        Clique aqui para realizar o cadastro
      </a>
    </Card>
  );
}
