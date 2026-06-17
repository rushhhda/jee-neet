import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const handleCorrect = () => {
    setScore(score + 4);
    setCorrect(correct + 1);
  };

  const handleWrong = () => {
    setScore(score - 1);
    setWrong(wrong + 1);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🎯 JEE / NEET Marks Calculator</h1>
        <p className="subtitle">Calculate your score instantly</p>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="scheme">
          <span>✅ +4 Correct</span>
          <span>❌ -1 Wrong</span>
        </div>

        <div className="buttons">
          <button className="correctBtn" onClick={handleCorrect}>
            Correct +4
          </button>

          <button className="wrongBtn" onClick={handleWrong}>
            Wrong -1
          </button>
        </div>

        <div className="result">
          <h2>{name || "Student"} scored</h2>

          <div className="scoreCircle">{score}</div>

          <div className="stats">
            <div>
              <h3>{correct}</h3>
              <p>Correct</p>
            </div>

            <div>
              <h3>{wrong}</h3>
              <p>Wrong</p>
            </div>
          </div>
        </div>
      </div>
      <a href="https://digitalheroesco.com/" className="button">
        Built for Digital Heroes
      </a>
      <h3>Built by RUSHDA</h3>
      <a href="mailto:rushdasajid0210@gmail.com" className="contact">
        CONTACT
      </a>
    </div>
  );
}

export default App;
