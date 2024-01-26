import { Typography } from '@mui/material';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './single-question.scss';

interface Props {
  selectedAns: string;
  setSelectedAns: Dispatch<SetStateAction<string>>;
  text: string;
}

export default function SingleQuestion({
  selectedAns,
  text,
  setSelectedAns,
}: Props) {
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => {
    if (selectedAns === text) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [selectedAns, text]);

  function setAnswer() {
    setSelectedAns(text);
  }

  return (
    <div
      className={`single-question ${active ? 'active' : ''}`}
      onClick={setAnswer}
    >
      <Typography className='single-question--text ' variant='h4'>
        {text}
      </Typography>
    </div>
  );
}
