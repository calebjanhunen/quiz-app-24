import { Button } from 'components';
import React, { Dispatch, SetStateAction } from 'react';
import { PageToDisplay } from 'types/page-to-display';
import './start-quiz-display.scss';

interface Props {
  getQuizQuestions(): Promise<void>;
  setPageToDisplay: Dispatch<SetStateAction<PageToDisplay>>;
}

export default function StartQuizDisplay({
  getQuizQuestions,
  setPageToDisplay,
}: Props) {
  async function getQuestions() {
    await getQuizQuestions();
    setPageToDisplay('quiz-question');
  }

  return (
    <div className='quiz-container'>
      <h1 className='quiz--title'>Quiz App</h1>
      <Button text='Start Quiz' onClick={getQuestions} />
    </div>
  );
}
