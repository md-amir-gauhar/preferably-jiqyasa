import { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';

import '../../styles/Quiz.css';

interface Props {
  name: string;
  questions: any;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setQuestions: React.Dispatch<React.SetStateAction<string[]>>;
}

const Quiz: React.FC<Props> = ({ name, questions, score }) => {
  const [options, setOptions] = useState<string[]>();
  const [currQues, setCurrentQues] = useState(0);

  const handleShuffle = (optionss: string[]) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    console.log(questions);
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  });

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>
      {questions ? (
        <>Questions</>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
