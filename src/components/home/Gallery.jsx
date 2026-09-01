import SectionHeader from "../ui/SectionHeader";

// Enquanto não há fotos reais, gera 6 placeholders — passe `images`
// (array de { src, alt }) quando as fotos estiverem disponíveis.
const placeholders = Array.from({ length: 6 }, (_, i) => ({ label: `Imagem ${i + 1}` }));

export default function Gallery({ images }) {
  const items = images && images.length ? images : placeholders;

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          title="Galeria"
          description="Espaço para fotos das oficinas, palestras e apresentações."
        />

        <div className="gallery">
          {items.map((item, index) =>
            item.src ? (
              <img
                key={item.src}
                src={item.src}
                alt={item.alt || ""}
                className="gallery__item"
              />
            ) : (
              <div className="gallery__item" key={item.label || index}>
                {item.label}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
