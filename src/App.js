import { Fragment } from "react";
import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      name: "banana",
      id: 123,
      color: "yellow",
      emoji: "🍌",
    },
    {
      name: "tomato",
      id: 124,
      color: "red",
      emoji: "🍅",
    },
    {
      name: "blueberry",
      id: 125,
      color: "blue",
      emoji: "🫐",
    },
    {
      name: "orange",
      id: 126,
      color: "orange",
      emoji: "🍊",
    },
    {
      name: "lemon",
      id: 127,
      color: "yellow",
      emoji: "🍋",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color, emoji }) => (
        <Card key={id} name={name} emoji={emoji} color={color}></Card>
      ))}
    </div>
  );
}
