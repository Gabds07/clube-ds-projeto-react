// variant "kpi"  -> usado nos destaques do hero (.kpi)
// variant "stat" -> usado nos números pequenos do card lateral (.stat)
export default function Stat({ label, value, variant = "kpi" }) {
  if (variant === "stat") {
    return (
      <div className="stat">
        <span className="muted">{label}</span>
        <strong>{value}</strong>
      </div>
    );
  }

  return (
    <div className="kpi">
      <strong>{label}</strong>
      <span>{value}</span>
    </div>
  );
}
