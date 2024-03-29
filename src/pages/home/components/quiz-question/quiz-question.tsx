import { Typography } from '@mui/material';
import { Button } from 'components';
import { QuizQuestionResponse } from 'interfaces/quiz-question-response';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { PageToDisplay } from 'types/page-to-display';
import { shuffleArray } from 'utils/array-shuffle';
import { renderHTML } from 'utils/decode-html-entities';
import SingleAnswer from '../single-answer/single-answer';
import './quiz-question.scss';

interface Props {
  question: QuizQuestionResponse;
  totalQuestions: number;
  questionIndex: number;
  setQuestionIndex: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
  setPageToDisplay: Dispatch<SetStateAction<PageToDisplay>>;
}

export default function QuizQuestion({
  question,
  totalQuestions,
  questionIndex,
  setQuestionIndex,
  setScore,
  setPageToDisplay,
}: Props) {
  const isLastQuestion = questionIndex === totalQuestions - 1;
  const [selectedAns, setSelectedAns] = useState<string>('');
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    setAnswers(
      shuffleArray([...question.incorrect_answers, question.correct_answer])
    );
  }, [question]);

  function setNextQuestion() {
    setSelectedAns('');
    if (selectedAns === question.correct_answer) {
      setScore(prevScore => prevScore + 1);
    }
    if (isLastQuestion) {
      setPageToDisplay('results');
      return;
    }
    setQuestionIndex(prev => prev + 1);
  }

  const answerDisplay = answers.map((answer, index) => (
    <SingleAnswer
      selectedAns={selectedAns}
      setSelectedAns={setSelectedAns}
      ansText={answer}
      key={index}
    />
  ));

  return (
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
          {renderHTML(question.question)}
        </Typography>
      </div>

      <div className='answers'>{answerDisplay}</div>
      <Button
        text={isLastQuestion ? 'Submit' : 'next'}
        onClick={setNextQuestion}
        disabled={!selectedAns}
      />
    </div>
  );
}
