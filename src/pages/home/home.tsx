import { Typography } from '@mui/material';
import useQuizApi from 'hooks/useQuizApi';
import React, { useState } from 'react';
import { PageToDisplay } from 'types/page-to-display';
import QuizQuestion from './components/quiz-question/quiz-question';
import Results from './components/results/results';
import StartQuizDisplay from './components/start-quiz-display/start-quiz-display';
import './home.scss';

export default function Home() {
  const { getQuizQuestions, questions, loading } = useQuizApi();
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [pageToDisplay, setPageToDisplay] =
    useState<PageToDisplay>('start-quiz');

  const display = () => {
    if (loading) {
      return <Typography variant='h1'>Loading...</Typography>;
    }
    switch (pageToDisplay) {
      case 'start-quiz':
        return (
          <StartQuizDisplay
            getQuizQuestions={getQuizQuestions}
            setPageToDisplay={setPageToDisplay}
          />
        );
      case 'quiz-question':
        return (
          <QuizQuestion
            question={questions[questionIndex]}
            totalQuestions={questions.length}
            questionIndex={questionIndex}
            setQuestionIndex={setQuestionIndex}
            setScore={setScore}
            setPageToDisplay={setPageToDisplay}
          />
        );
      case 'results':
        return (
          <Results
            score={score}
            totalQuestions={questions.length}
            setScore={setScore}
            setQuestionIndex={setQuestionIndex}
            setPageToDisplay={setPageToDisplay}
          />
        );
      default:
        return <p>Page does not exist</p>;
    }
  };

  return <div className='container'>{display()}</div>;
}
