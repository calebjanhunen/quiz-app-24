import { Button } from '@mui/material';
import React from 'react';
import './button.scss';

interface Props {
  text: string;
  onClick(): Promise<void> | void;
  disabled?: boolean;
}

export function CustomButton({ text, onClick, disabled }: Props) {
  return (
    <Button
      className='btn'
      variant='contained'
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span>
    </Button>
  );
}
