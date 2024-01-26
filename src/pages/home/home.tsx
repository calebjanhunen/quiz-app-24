import Button from 'components/button/button';
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
