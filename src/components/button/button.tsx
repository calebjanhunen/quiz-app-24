import { Button } from '@mui/material';
import React from 'react';
import './button.scss';

interface Props {
  text: string;
}

export function CustomButton({ text }: Props) {
  return (
    <Button className='btn' variant='contained'>
      <span>{text}</span>
    </Button>
  );
}
