import React from 'react';

interface QuestionProps {
  text: string;
}

const Question: React.FC<QuestionProps> = ({ text }) => {
  return <h1>{text}</h1>;
};

export default Question;
