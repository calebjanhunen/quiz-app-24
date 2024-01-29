import { Typography } from '@mui/material';
import { Button } from 'components';
import { QuizQuestionResponse } from 'interfaces/quiz-question-response';
import { Result } from 'interfaces/result';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { shuffleArray } from 'utils/array-shuffle';
import SingleAnswer from '../single-answer/single-answer';
import './quiz-question.scss';

interface Props {
  question: QuizQuestionResponse;
  totalQuestions: number;
  questionIndex: number;
  setQuestionIndex: Dispatch<SetStateAction<number>>;
  setShowResults: Dispatch<SetStateAction<boolean>>;
  results: Result[];
  setResults: Dispatch<SetStateAction<Result[]>>;
}

export default function QuizQuestion({
  question,
  totalQuestions,
  questionIndex,
  setQuestionIndex,
  setShowResults,
  results,
  setResults,
}: Props) {
  const isLastQuestion = questionIndex === totalQuestions - 1;
  const [selectedAns, setSelectedAns] = useState<string>(
    results[questionIndex] ? results[questionIndex].selectedAnswer : ''
  );
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    setAnswers(
      shuffleArray([...question.incorrect_answers, question.correct_answer])
    );
  }, [question]);

  const answerDisplay = answers.map((answer, index) => (
    <SingleAnswer
      selectedAns={selectedAns}
      setSelectedAns={setSelectedAns}
      ansText={answer}
      key={index}
    />
  ));

  function setNextQuestion() {
    setResults(prevResults => [
      ...prevResults,
      { correctAnswer: question.correct_answer, selectedAnswer: selectedAns },
    ]);
    setSelectedAns('');
    setAnswers([]);
    if (isLastQuestion) {
      setShowResults(true);
      return;
    }
    setQuestionIndex(prev => prev + 1);
  }

  function setPreviousQuestion() {
    if (questionIndex === 0) {
      return;
    }
  }

  return (
    <div>
      <div className='question--container'>
        <div className='question'>
          <div className='heading'>
            <Typography variant='h3' className='heading--title'>
              Question {questionIndex + 1}
            </Typography>
            <Typography variant='h4' className='heading--title'>
              /{totalQuestions}
            </Typography>
          </div>

          <Typography className='question--text' variant='h4'>
            {question.question}
          </Typography>
        </div>

        <div className='answers'>{answerDisplay}</div>
      </div>
      <div className='question--btns'>
        <Button
          text='Previous'
          onClick={() => {}}
          disabled={questionIndex === 0}
        />
        <Button
          text={isLastQuestion ? 'Submit' : 'next'}
          onClick={setNextQuestion}
          disabled={!selectedAns}
        />
      </div>
    </div>
  );
}
