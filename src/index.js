/* src/index.css */

/* Darkmode Hintergrund */
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #121212;
  color: #ffffff;
}

/* Container zentriert & responsiv */
.quiz-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
}

/* Kartenstil */
.card {
  background-color: #1f1f1f;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  margin-bottom: 2rem;
}

/* Fragen-Buttons */
.answer-button {
  display: block;
  width: 100%;
  margin: 0.5rem 0;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #2a2a2a;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.answer-button:hover {
  background-color: #3f3f3f;
}

/* Richtig/Falsch Markierung */
.correct {
  background-color: #2e7d32 !important; /* grün */
}

.wrong {
  background-color: #c62828 !important; /* rot */
}

/* Start-Button */
.start-button {
  background-color: #2196f3;
  color: white;
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;
}

.start-button:hover {
  background-color: #1976d2;
}

/* Ergebnis-Liste */
.result-item {
  background-color: #2c2c2c;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: left;
}

/* Mobile Optimierung */
@media (max-width: 600px) {
  .card {
    padding: 1rem;
  }

  .answer-button {
    font-size: 0.95rem;
  }
}
