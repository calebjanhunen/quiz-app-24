import useQuizApi from 'hooks/useQuizApi';
import { Result } from 'interfaces/result';
import React, { useState } from 'react';
import QuizQuestion from './components/quiz-question/quiz-question';
import StartQuizDisplay from './components/start-quiz-display/start-quiz-display';
import './home.scss';

export default function Home() {
  const { getQuizQuestions, questions } = useQuizApi();
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<Result[]>([]);

  return (
    <div className='container'>
      {questions.length ? (
        <QuizQuestion
          question={questions[questionIndex]}
          totalQuestions={questions.length}
          questionIndex={questionIndex}
          setQuestionIndex={setQuestionIndex}
          setShowResults={setShowResults}
          results={results}
          setResults={setResults}
        />
      ) : (
        <StartQuizDisplay getQuizQuestions={getQuizQuestions} />
      )}
    </div>
  );
}
