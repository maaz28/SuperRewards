import React from 'react';
import Select from 'react-select'


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


export default function SimpleSelect({ func, label, id, values, default_value_index }) {

  const handleChange = (event) => {
    func(event.value, id);
  }

  return (
    <>
      <label for={id} style={{ display: 'flex', fontSize: '15px', fontWeight: 'bold' }}>
        {label}
      </label>
      <div>
        <Select
          id={id}
          isSearchable={false}
          defaultValue={values[default_value_index]}
          options={values}
          onChange={handleChange}
          styles={customStyles}
          placeholder={label}
        />
      </div>
    </>
  );
}
