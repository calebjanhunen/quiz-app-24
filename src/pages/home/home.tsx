import { Typography } from '@mui/material';
import useQuizApi from 'hooks/useQuizApi';
import React, { useState } from 'react';
import QuizQuestion from './components/quiz-question/quiz-question';
import Results from './components/results/results';
import StartQuizDisplay from './components/start-quiz-display/start-quiz-display';
import './home.scss';

export default function Home() {
  const { getQuizQuestions, questions, loading } = useQuizApi();
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const display = () => {
    if (loading) {
      return <Typography variant='h1'>Loading...</Typography>;
    }
    if (showResults) {
      return (
        <Results
          score={score}
          totalQuestions={questions.length}
          setShowResults={setShowResults}
          setScore={setScore}
          getQuizQuestions={getQuizQuestions}
          setQuestionIndex={setQuestionIndex}
        />
      );
    }
    if (questions.length) {
      return (
        <QuizQuestion
          question={questions[questionIndex]}
          totalQuestions={questions.length}
          questionIndex={questionIndex}
          setQuestionIndex={setQuestionIndex}
          setShowResults={setShowResults}
          setScore={setScore}
        />
      );
    }
    return <StartQuizDisplay getQuizQuestions={getQuizQuestions} />;
  };

  return <div className='container'>{display()}</div>;
}
