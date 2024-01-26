import { Button } from 'components';
import useQuizApi from 'hooks/useQuizApi';
import React, { useState } from 'react';
import QuizQuestion from './components/quiz-question/quiz-question';
import StartQuizDisplay from './components/start-quiz-display/start-quiz-display';
import './home.scss';

export default function Home() {
  const { getQuizQuestions, questions, success } = useQuizApi();

  return (
    <div className='container'>
      <StartQuizDisplay getQuizQuestions={getQuizQuestions} />
      {/* <QuizQuestion /> */}
    </div>
  );
}
