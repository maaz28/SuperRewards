import React from 'react';
import Select from 'react-select'


const customStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white', height: '45px' }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'blue' : 'black',
    padding: 0,
  }),
  // menu: (provided, state) => ({
  //   height: "100%"
  // }),
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
    props.func(event.value);
  }

  const slideValues = [];
  for (let i = 10; i <= 50; i = i + 2) {
    slideValues.push({ value: i, label: i });
  }

  return (
    <>
      <label for="investment" style={{ display: 'flex', fontSize: '15px', fontWeight: 'bold' }}>
        Average purchase
      </label>
      <div>
        <Select
          id="purchase"
          isSearchable={false}
          defaultValue={slideValues[9]}
          options={slideValues}
          onChange={handleChange}
          styles={customStyles}
          placeholder="Average purchase"
        />
      </div>
    </>
  );
}
