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

  const slideValues = [
    {
      value: 1000,
      label: '1000'
    },
    {
      value: 5000,
      label: '5000'
    },
    {
      value: 10000,
      label: '10 000'
    },
    {
      value: 50000,
      label: '50 000'
    },
    {
      value: 100000,
      label: '100 000'
    },
    {
      value: 250000,
      label: '250 000'
    },
    {
      value: 500000,
      label: '500 000'
    },
    {
      value: 1000000,
      label: '1 000 000'
    }
  ];


  // slideValues.push({ value: Number(`0`), label: (`0`) });

  // for (let i = 1; i < 10; i++) {
  //   slideValues.push({ value: Number(`${i}000000`), label: (`${i} million`) });
  // }

  // for (let i = 1; i <= 10; i++) {
  //   slideValues.push({ value: Number(`${i}0000000`), label: (`${i * 10} million`) });
  // }

  // slideValues.push({ value: Number(`150000000`), label: (`150 million`) })
  // slideValues.push({ value: Number(`2000000000`), label: (`200 million`) })

  return (
    <>
      <label for="Tokens" style={{ display: 'flex', fontSize: '15px', fontWeight: 'bold' }}>
        Tokens
      </label>
      <Select
        id="Tokens"
        defaultValue={slideValues[6]}
        isSearchable={false}
        options={slideValues}
        onChange={handleChange}
        styles={customStyles}
        placeholder="Tokens"
      />
    </>
  );
}
