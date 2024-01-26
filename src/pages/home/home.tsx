import { Button } from 'components';
import useQuizApi from 'hooks/useQuizApi';
import React, { useState } from 'react';
import QuizQuestion from './components/quiz-question/quiz-question';
import './home.scss';

export default function Home() {
  const { getQuizQuestions, questions, success } = useQuizApi();

  return (
    <div className='container'>
      <div className='quiz-container'>
        {/* <h1 className='quiz--title'>Quiz App</h1> */}
        {/* <Button text='Start Quiz' onClick={getQuizQuestions} /> */}
        <QuizQuestion />
      </div>
    </div>
  );
}
