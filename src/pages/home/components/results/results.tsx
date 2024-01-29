import { Button } from 'components';
import { Result } from 'interfaces/result';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './results.scss';

interface Props {
  results: Result[];
  setShowResults: Dispatch<SetStateAction<boolean>>;
  totalQuestions: number;
  getQuizQuestions(): Promise<void>;
  setQuestionIndex: Dispatch<SetStateAction<number>>;
  setResults: Dispatch<SetStateAction<Result[]>>;
}

export default function Results({
  results,
  totalQuestions,
  setShowResults,
  getQuizQuestions,
  setQuestionIndex,
  setResults,
}: Props) {
  const [score, setScore] = useState<number>(0);
  useEffect(() => {
    results.forEach(result => {
      if (result.correctAnswer === result.selectedAnswer) {
        setScore(prev => prev + 1);
      }
    });
  }, [results]);

  async function startOver() {
    setShowResults(false);
    setQuestionIndex(0);
    setResults([]);
    await getQuizQuestions();
  }

  return (
    <div className='results--container'>
      <h2 className='results--text'>
        You scored {score} out of {totalQuestions}!
      </h2>
      <Button text='Start Over' onClick={startOver} />
    </div>
  );
}
