import '../app.css';
import { useState } from 'react';
import { questions } from '../question';

export const TestSkill = () => {
  const [level, setLevel] = useState(null);
  const [answers, setAnswers] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});

  const handleAnswer = (questionIndex, selectedOption) => {
    const updatedAnswers = { ...answers, [questionIndex]: selectedOption };
    setAnswers(updatedAnswers);
  };

  const calculateLevel = () => {
    let correctCount = 0;
    const updatedCorrectAnswers = {};

    questions.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        correctCount++;
        updatedCorrectAnswers[index] = true;
      } else {
        updatedCorrectAnswers[index] = false;
      }
    });

    setCorrectAnswers(updatedCorrectAnswers);

    const percentage = (correctCount / questions.length) * 100;

    if (percentage >= 80) {
      setLevel('Advanced');
    } else if (percentage >= 60) {
      setLevel('Intermediate');
    } else if (percentage >= 40) {
      setLevel('Elementary');
    } else {
      setLevel('Beginner');
    }
  };

  return (
    <div className="english-test-container">
      <h1 className="english-test-heading">English Language Test</h1>
      {questions.map((question, index) => (
        <div key={index} className="question-container">
          <p className="question-text">{question.question}</p>
          <div className="options-container">
            {question.options ? (
              question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  className={`answer-button ${answers[index] === option ? 'selected' : ''} ${
                    correctAnswers[index] === true
                      ? 'correct'
                      : correctAnswers[index] === false
                      ? 'incorrect'
                      : ''
                  }`}
                  onClick={() => handleAnswer(index, option)}>
                  {option}
                </button>
              ))
            ) : (
              <input
                className="answer-input"
                type="text"
                placeholder="Your answer"
                value={answers[index] || ''}
                onChange={(e) => handleAnswer(index, e.target.value)}
              />
            )}
          </div>
        </div>
      ))}
      <button className="submit-button" onClick={calculateLevel}>
        Submit Answers
      </button>
      {level && <p className="level-text">Your English level: {level}</p>}
    </div>
  );
};
