import { Typography } from '@mui/material';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './single-answer.scss';

interface Props {
  selectedAns: string;
  setSelectedAns: Dispatch<SetStateAction<string>>;
  ansText: string;
}

export default function SingleAnswer({
  selectedAns,
  ansText,
  setSelectedAns,
}: Props) {
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => {
    if (selectedAns === ansText) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [selectedAns, ansText]);

  function setAnswer() {
    setSelectedAns(ansText);
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
