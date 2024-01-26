import { Button } from 'components';
import React from 'react';
import './start-quiz-display.scss';

interface Props {
  getQuizQuestions(): Promise<void>;
}

export default function StartQuizDisplay({ getQuizQuestions }: Props) {
  return (
    <div className='quiz-container'>
      <h1 className='quiz--title'>Quiz App</h1>
      <Button text='Start Quiz' onClick={getQuizQuestions} />
    </div>
  );
}
