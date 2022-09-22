import "./App.css";
import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import { data } from "../src/models/data.json";
import Header from "./components/Header";

export default function App() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currQuestion + 1;

    if (nextQuestion < data.length) {
      setCurrQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      <Header />
      <container>
      <Quiz data={data} />
      {showScore === true ? (
        <div className="right-answers">
          <p>
            Right answers: {score} from {data.length}
          </p>
          <button className="btn reset-quiz" onClick={resetQuiz}>
            Try your luck again
          </button>
        </div>
      ) : (
        <div className="quiz">
          <div className="quiz__question question">
            <div className="question__count">
              <span>Questions {currQuestion + 1}</span> / {data.length}
            </div>
            <div className="question__text">{data[currQuestion].text}</div>
          </div>
          <div className="quiz__answer answer">
            {data[currQuestion].answers.map((answer) => (
              <button
                key={answer._id}
                className="btn answer__variant"
                onClick={() => {
                  handleAnswer(answer.isCorrect);
                }}
              >
                {answer.text}
              </button>
            ))}
          </div>
          
        </div>
    
      )}
      </container>
    </div>
    
  );
}
