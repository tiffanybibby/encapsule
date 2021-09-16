import React, { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

export default function SeasonDropDown(props) {

  const animatedComponents = makeAnimated();

const [selectedSeason, setSelectedSeason] = useState('')

const handleSeason = (e) => {
  console.log(props)
  console.log(e.target.value)
  if (e.target.value) {
    setSelectedSeason(e.target.value)
  }
}
const options= [
  { value: 'summer', label: 'Summer' },
  { value: 'spring', label: 'Spring' },
  { value: 'fall', label: 'Fall' },
  { value: 'winter', label: 'Winter' }
]

  return (

    <Select
      label="Season"
      placeholder="Pick one or many"
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
      multiple
      value={selectedSeason}
      onChange={handleSeason}
    />
  )
}