import Card from "../ui/Card";
import Pill from "../ui/Pill";
import SectionHeader from "../ui/SectionHeader";
import { events } from "../../data/events";

export default function UpcomingEvents({ items = events }) {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeader
          title="Próximos encontros"
          description="Você pode atualizar aqui manualmente (depois automatizamos com JSON)."
        />

        <div className="grid grid--2">
          {items.map((event) => (
            <Card as="article" className="event" key={event.title}>
              <div className="event__meta">
                <Pill>{event.type}</Pill>
                <span className="muted">Duração: {event.duration}</span>
              </div>
              <h3 className="card__title">{event.title}</h3>
              <p className="muted">{event.description}</p>
              <div className="event__footer">
                <span className="muted">Data: {event.date}</span>
                <a className="btn btn--ghost" href={event.ctaHref}>
                  {event.ctaLabel}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
