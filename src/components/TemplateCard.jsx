export default function TemplateCard({ title, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <a href={image} download className="download-btn">
        Download
      </a>
    </div>
  );
}
