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
  const [selectedAns, setSelectedAns] = useState<string>('');
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    setAnswers(
      shuffleArray([...question.incorrect_answers, question.correct_answer])
    );
    setSelectedAns(
      results[questionIndex] ? results[questionIndex].selectedAnswer : ''
    );
  }, [question, questionIndex, results]);

  const answerDisplay = answers.map((answer, index) => (
    <SingleAnswer
      selectedAns={selectedAns}
      setSelectedAns={setSelectedAns}
      ansText={answer}
      key={index}
    />
  ));

  function setNextQuestion() {
    // Update results state (replace existing one or add new one)
    setResults(prevResults => {
      if (prevResults[questionIndex]) {
        return prevResults.map((result, index) =>
          index === questionIndex
            ? {
                correctAnswer: question.correct_answer,
                selectedAnswer: selectedAns,
              }
            : result
        );
      } else {
        return [
          ...prevResults,
          {
            correctAnswer: question.correct_answer,
            selectedAnswer: selectedAns,
          },
        ];
      }
    });
    if (isLastQuestion) {
      setShowResults(true);
      return;
    }
    setQuestionIndex(prev => prev + 1);
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
          text={isLastQuestion ? 'Submit' : 'next'}
          onClick={setNextQuestion}
          disabled={!selectedAns}
        />
      </div>
    </div>
  );
}
