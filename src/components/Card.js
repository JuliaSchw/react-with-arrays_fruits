import "./Card.css";

export default function Card({ name, emoji, color }) {
  const cardStyle = {
    backgroundColor: color,
  };
  console.log(color);
  return (
    <p className="card" style={cardStyle}>
      {name}
      {"  "}
      {emoji}
    </p>
  );
}
