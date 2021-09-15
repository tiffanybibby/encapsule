import React, { Component } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
const options= [
  { value: 'summer', label: 'Summer' },
  { value: 'spring', label: 'Spring' },
  { value: 'fall', label: 'Fall' },
  { value: 'winter', label: 'Winter' }
]

export default function SeasonDropDown() {
  return (

    <Select
      label="Season"
      placeholder="Pick one or many"
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
      multiple
    />
  )
}