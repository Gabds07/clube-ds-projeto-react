import Card from "../ui/Card";
import { activityCategories } from "../../data/activities";

export default function ActivityCategories({ items = activityCategories }) {
  return (
    <div className="grid grid--3">
      {items.map((category) => (
        <Card as="article" key={category.title}>
          <h2 className="card__title">{category.title}</h2>
          <p className="muted">{category.description}</p>
          <ul className="list">
            {category.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
