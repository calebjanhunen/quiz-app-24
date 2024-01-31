import { Button } from 'components';
import React, { Dispatch, SetStateAction } from 'react';
import { PageToDisplay } from 'types/page-to-display';
import './results.scss';

interface Props {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  totalQuestions: number;
  setQuestionIndex: Dispatch<SetStateAction<number>>;
  setPageToDisplay: Dispatch<SetStateAction<PageToDisplay>>;
}

export default function Results({
  score,
  totalQuestions,
  setQuestionIndex,
  setScore,
  setPageToDisplay,
}: Props) {
  function startOver() {
    setScore(0);
    setQuestionIndex(0);
    setPageToDisplay('start-quiz');
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
