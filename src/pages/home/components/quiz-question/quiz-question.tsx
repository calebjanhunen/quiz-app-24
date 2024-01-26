import { Typography } from '@mui/material';
import { Button } from 'components';
import { QuizQuestionResponse } from 'interfaces/quiz-question-response';
import React, { useState } from 'react';
import SingleQuestion from '../single-question/single-question';
import './quiz-question.scss';

export default function QuizQuestion() {
  const [selectedAns, setSelectedAns] = useState<string>('Answer 1');
  return (
    <div>
      <div className='container'>
        <div className='question'>
          <div className='heading'>
            <Typography variant='h3' className='heading--title'>
              Question 1
            </Typography>
            <Typography variant='h4' className='heading--title'>
              /10
            </Typography>
          </div>

          <Typography className='question--text' variant='h4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Typography>
        </div>

        <div className='answers'>
          <SingleQuestion
            selectedAns={selectedAns}
            setSelectedAns={setSelectedAns}
            text='Answer 1'
          />
          <SingleQuestion
            selectedAns={selectedAns}
            setSelectedAns={setSelectedAns}
            text='Answer 2'
          />
          <SingleQuestion
            selectedAns={selectedAns}
            setSelectedAns={setSelectedAns}
            text='Answer 3'
          />
          <SingleQuestion
            selectedAns={selectedAns}
            setSelectedAns={setSelectedAns}
            text='Answer 4'
          />
        </div>
      </div>
      <div className='question--btns'>
        <Button text='Previous' onClick={() => {}} />
        <Button text='Next' onClick={() => {}} />
      </div>
    </div>
  );
}
