import React from 'react';

interface AnswerProps {
  text: string;
  onClick: () => void;
}

const Answer: React.FC<AnswerProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Answer;
