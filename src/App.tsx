import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const getRandomColor = () => {
    const digits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    const color = new Array(6)
      .fill("")
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join("");
    return `#${color}`;
  };
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  useEffect(() => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random(),
      ),
    );
  }, []);
  const checkAnswer = (answer) => {
    if (answer === color) {
      alert("you are right");
    } else {
      alert("try again ");
    }
  };
  return (
    <div className="App">
      <h2>Guess the color</h2>
      <div className="color-box" style={{ background: color }}></div>
      <ul>
        {answers.map((answer) => (
          <li onClick={() => checkAnswer(answer)}>{answer}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
