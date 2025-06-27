import { useState } from 'react';
import { quizData } from './quizData';

export default function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (index) => {
    setAnswers([...answers, index]);
    if (index === quizData[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      {!showResult ? (
        <div>
          <h2>Frage {current + 1} von {quizData.length}</h2>
          <p>{quizData[current].question}</p>
          {quizData[current].options.map((opt, idx) => (
            <button key={idx} onClick={() => handleAnswer(idx)} style={{ display: 'block', margin: '8px 0' }}>
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Ergebnis</h2>
          <p>Du hast {score} von {quizData.length} Fragen richtig beantwortet.</p>
          {quizData.map((q, idx) => (
            <div key={idx} style={{ marginBottom: '12px' }}>
              <strong>{idx + 1}. {q.question}</strong><br />
              Deine Antwort: {q.options[answers[idx]] || "-"}<br />
              Richtige Antwort: {q.options[q.answer]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
