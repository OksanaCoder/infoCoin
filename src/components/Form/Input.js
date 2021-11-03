/* eslint-disable no-nested-ternary */
import React from 'react';
import { TextField } from '@material-ui/core';

const Input = ({
  variant = 'outlined',
  label,
  name,
  value,
  onChange,
  error,
  errorText,
  placeholder,
  inputPropsPosition,
  helperText,
  ...input
}) => (
  <TextField
    variant={variant}
    label={label}
    name={name}
    value={value}
    fullWidth
    margin="normal"
    placeholder={placeholder}
    error={error}
    helperText={errorText || helperText}
    onChange={onChange}
    {...input}
  />
);

export default Input;
