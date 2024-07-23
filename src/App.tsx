// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import questionData from './data/questions.json';
import Question from './components/Question';
import Answer from './components/Answer';

const App: React.FC = () => {
  const [answer, setAnswer] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  //Fonction pour gérer le clic sur une réponse
  const handleAnswer = (response: string) => {
    setIsVisible(false);
    setTimeout(() => {
      setAnswer(response);
      setIsVisible(true);
    }, 300);
  };

  return (
    <div className="App">
      <Question text={questionData.question} />
      <div className="buttons">
        <Answer text="Yes" onClick={() => handleAnswer(questionData.answers.yes)} />
        <Answer text="No" onClick={() => handleAnswer(questionData.answers.no)} />
      </div>
      <p className={isVisible ? '' : 'hidden'}>{answer}</p>
    </div>
  );
};

export default App;
