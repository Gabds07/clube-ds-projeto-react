import Button from "../ui/Button";
import Stat from "../ui/Stat";

export default function HeroCard({ kpis, stats }) {
  return (
    <div className="hero__card">
      <div className="card">
        <h2 className="card__title">Destaques</h2>

        <div className="kpis">
          {kpis.map((kpi) => (
            <Stat key={kpi.label} label={kpi.label} value={kpi.value} />
          ))}
        </div>

        <hr className="sep" />

        <div className="stats">
          {stats.map((stat) => (
            <Stat key={stat.label} label={stat.label} value={stat.value} variant="stat" />
          ))}
        </div>

        <p className="muted tiny">
          * A participação completa nas atividades exige matrícula ativa.
        </p>

        <Button href="atividades.html" block>
          Ver atividades
        </Button>
      </div>
    </div>
  );
}
