import { afterSignupSteps, quickRules } from "../../data/cadastro";

export default function NextSteps({ steps = afterSignupSteps, rules = quickRules }) {
  return (
    <aside className="card">
      <h2 className="card__title">O que acontece depois?</h2>
      <ol className="steps">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <hr className="sep" />

      <h3>Regras rápidas</h3>
      <ul className="list">
        {rules.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
    </aside>
  );
}
