import React from "react";
export default function App() {
  return (
    <div className="app">
      <main>
        <div className="summary-component-wrapper">
          <div className="result">
            <h2 className="result__heading">Your Result</h2>
            <div className="result__score">
              <p className="result__get-score">76</p>
              <p className="result__full-score">of 100</p>
            </div>
            <h1 className="result__title">Great</h1>
            <p className="result__description">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
          <div className="summary">
            <h2 className="summary__heading">Summary</h2>
            <ul className="summary__list">
              {data.map(item => (
                <li className={"summary__item summary__item--" + item.className}>
                <div className="summary__title">
                  <img src={item.icon} alt="" className="summary__icon" />
                  <p className="summary__text">{item.category}</p>
                </div>
                <p className="summary__score">
                  <span className="summary__score-point">{item.score}</span> / 100
                </p>
              </li>
              ))}
            </ul>
            <button className="summary__button">Continue</button>
          </div>
        </div>
      </main>
    </div>
  );
}

const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
    className: "red"
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
    className: "yellow"
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
    className: "teal"
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
    className: "blue"
  },
];
