import { Button } from 'components';
import React, { Dispatch, SetStateAction } from 'react';
import './results.scss';

interface Props {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  setShowResults: Dispatch<SetStateAction<boolean>>;
  totalQuestions: number;
  getQuizQuestions(): Promise<void>;
  setQuestionIndex: Dispatch<SetStateAction<number>>;
}

export default function Results({
  score,
  totalQuestions,
  setShowResults,
  getQuizQuestions,
  setQuestionIndex,
  setScore,
}: Props) {
  async function startOver() {
    setShowResults(false);
    setQuestionIndex(0);
    setScore(0);
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
