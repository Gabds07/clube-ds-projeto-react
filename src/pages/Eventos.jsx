import PageHead from "../components/ui/PageHead";
import Card from "../components/ui/Card";
import Pill from "../components/ui/Pill";
import Button from "../components/ui/Button";
import { events } from "../data/events";

export default function Eventos() {
  return (
    <main id="conteudo">
      <PageHead
        title="Eventos"
        description="Aqui você confere as próximas oficinas/palestras e chamadas de projetos."
      />
      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {events.map((event) => (
              <Card as="article" className="event" key={event.title}>
                <div className="event__meta">
                  <Pill>{event.type}</Pill>
                  <span className="muted">Duração: {event.duration}</span>
                </div>
                <h2 className="card__title">{event.title}</h2>
                <p className="muted">{event.fullDescription ?? event.description}</p>
                <div className="event__footer">
                  <span className="muted">Data: {event.date}</span>
                  <Button variant="ghost" href={event.pageCtaHref ?? event.ctaHref}>
                    {event.pageCtaLabel ?? event.ctaLabel}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="note">
            <strong>Observação:</strong> você pode manter essa página atualizada manualmente. Se quiser,
            depois a gente ensina a gerar os eventos automaticamente via JSON.
          </div>
        </div>
      </section>
    </main>
  );
}
