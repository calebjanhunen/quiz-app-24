import { Typography } from '@mui/material';
import { Button } from 'components';
import { QuizQuestionResponse } from 'interfaces/quiz-question-response';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { shuffleArray } from 'utils/array-shuffle';
import SingleQuestion from '../single-question/single-answer';
import './quiz-question.scss';

interface Props {
  question: QuizQuestionResponse;
  totalQuestions: number;
  questionIndex: number;
  setQuestionIndex: Dispatch<SetStateAction<number>>;
  setShowResults: Dispatch<SetStateAction<boolean>>;
}

export default function QuizQuestion({
  question,
  totalQuestions,
  questionIndex,
  setQuestionIndex,
  setShowResults,
}: Props) {
  const isLastQuestion = questionIndex === totalQuestions - 1;
  const [selectedAns, setSelectedAns] = useState<string>('');
  const [answers, setAnswers] = useState<string[]>(
    shuffleArray([...question.incorrect_answers, question.correct_answer])
  );

  function setNextQuestion() {
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

        {/* <div className='answers'>{question}</div> */}
      </div>
      <div className='question--btns'>
        <Button text='Previous' onClick={() => {}} />
        <Button
          text={isLastQuestion ? 'Submit' : 'next'}
          onClick={setNextQuestion}
        />
      </div>
    </div>
  );
}
