import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const RadioGroups = ({ data, title, name, value, onChange }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">{title}</FormLabel>
    <RadioGroup name={name} value={value} onChange={onChange}>
      {data.map(item => (
        <FormControlLabel
          key={item.id}
          value={item.id}
          label={item.name}
          control={<Radio color="primary" />}
        />
      ))}
    </RadioGroup>
  </FormControl>
);
export default RadioGroups;
