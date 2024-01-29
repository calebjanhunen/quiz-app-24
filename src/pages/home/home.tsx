import useQuizApi from 'hooks/useQuizApi';
import { Result } from 'interfaces/result';
import React, { useCallback, useState } from 'react';
import QuizQuestion from './components/quiz-question/quiz-question';
import Results from './components/results/results';
import StartQuizDisplay from './components/start-quiz-display/start-quiz-display';
import './home.scss';

export default function Home() {
  const { getQuizQuestions, questions } = useQuizApi();
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<Result[]>([]);

  const display = () => {
    if (showResults) {
      return (
        <Results
          results={results}
          totalQuestions={questions.length}
          setShowResults={setShowResults}
          setResults={setResults}
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
          results={results}
          setResults={setResults}
        />
      );
    }
    return <StartQuizDisplay getQuizQuestions={getQuizQuestions} />;
  };

  return <div className='container'>{display()}</div>;
}
