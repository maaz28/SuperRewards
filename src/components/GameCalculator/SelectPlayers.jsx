import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from 'react-select'
var converter = require('number-to-words');




const customStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white', height: '45px' }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'blue' : 'black',
    padding: 0,
  }),
  option: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? 'blue'
        : isFocused
          ? '#d6e6f8'
          : null,
      color: isSelected
        ? 'white'
        : 'black',
    };
  },
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  },
}

export default function SimpleSelect(props) {

  const handleChange = (event) => {
    console.log(event)
    props.func(event.value);
  }

  const slideValues = [];

  slideValues.push({ value: Number(`0`), label: (`0`) });

  for (let i = 1; i < 10; i++) {
    slideValues.push({ value: Number(`${i}000000`), label: (`${i} million (${i}00 000 payers)`) });
  }

  for (let i = 1; i <= 10; i++) {
    slideValues.push({ value: Number(`${i}0000000`), label: (`${i * 10} million (${i} 000 000 payers)`) });
  }

  return (
    <>
      <label for="players" style={{ display: 'flex', fontSize: '15px', fontWeight: 'bold' }}>
        Players
      </label>
      <Select
        defaultValue={slideValues[10]}
        id="players"
        isSearchable={false}
        options={slideValues}
        onChange={handleChange}
        styles={customStyles}
        placeholder="Players"
      />
    </>
  );
}
