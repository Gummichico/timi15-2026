export function Card({ title, text, image, authorName }) {
  return (
    <div className="card">
      <h2>{title} </h2>
      <p>{text} </p>
      <img src={image} height={300} />
      <p>Author:{authorName} </p>
    </div>
  );
}
