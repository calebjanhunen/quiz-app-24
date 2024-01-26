import { Button } from 'components';
// import { Button } from '@mui/material';
import React from 'react';
import './home.scss';

export default function Home() {
  return (
    <div className='container'>
      <div className='quiz-container'>
        <h1 className='quiz--title'>Quiz App</h1>
        <Button text='Start Quiz' />
      </div>
    </div>
  );
}
