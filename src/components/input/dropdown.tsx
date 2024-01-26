import { InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
// import './input.scss';

export default function Dropdown() {
  const [value, setValue] = useState<number>();

  return (
    <Select value={value} label='Number of questions'>
      <MenuItem>10</MenuItem>
      <MenuItem>15</MenuItem>
      <MenuItem>20</MenuItem>
      <MenuItem>25</MenuItem>
    </Select>
  );
}
