import React from 'react';
import './button.scss';

interface Props {
  text: string;
}

export default function Button({ text }: Props) {
  return (
    <button className='button'>
      <span>{text}</span>
    </button>
  );
}
