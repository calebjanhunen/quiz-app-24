import { Button } from '@mui/material';
import React from 'react';
import './button.scss';

interface Props {
  text: string;
  onClick(): Promise<void>;
}

export function CustomButton({ text, onClick }: Props) {
  return (
    <Button className='btn' variant='contained' onClick={onClick}>
      <span>{text}</span>
    </Button>
  );
}
