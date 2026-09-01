import SectionHeader from "../ui/SectionHeader";
import { team } from "../../data/team";

export default function Team({ members = team }) {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeader
          title="Coordenação e suporte"
          description="Referências do clube e organização interna."
        />

        <div className="grid grid--3">
          {members.map((member) => (
            <article className="card person" key={member.name}>
              <div className="avatar" aria-hidden="true">
                {member.name}
              </div>

              {member.photo && (
                <p>
                  <img src={member.photo} alt="" width="200" height="300" />
                </p>
              )}

              <h3 className="card__title">{member.role}</h3>

              {member.lattesUrl && (
                <a href={member.lattesUrl} target="_blank" rel="noreferrer">
                  <p className="muted">currículo lattes</p>
                </a>
              )}

              {member.note && <p className="muted">{member.note}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
