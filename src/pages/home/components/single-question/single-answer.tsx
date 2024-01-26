import { Typography } from '@mui/material';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './single-answer.scss';

interface Props {
  selectedAns: number;
  setSelectedAns: Dispatch<SetStateAction<number>>;
  ansText: string;
  ansIndex: number;
}

export default function SingleQuestion({
  selectedAns,
  ansText,
  ansIndex,
  setSelectedAns,
}: Props) {
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => {
    if (selectedAns === ansIndex) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [selectedAns, ansIndex]);

  function setAnswer() {
    setSelectedAns(ansIndex);
  }

  return (
    <div
      className={`single-question ${active ? 'active' : ''}`}
      onClick={setAnswer}
    >
      <Typography className='single-question--text ' variant='h4'>
        {ansText}
      </Typography>
    </div>
  );
}
