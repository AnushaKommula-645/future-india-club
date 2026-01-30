import TemplateCard from "./TemplateCard";

export default function Section({ title, templates }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="grid">
        {templates.map((item) => (
          <TemplateCard key={item.id} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
}
