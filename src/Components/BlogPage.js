/** @format */

export default function BlogPage({ title, description, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <p>{content}</p>
    </div>
  );
}
