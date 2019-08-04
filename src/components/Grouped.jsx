import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options = [
  'one', 'two', 'three'
]


export default () => (
  <Dropdown options={options} placeholder="Select an option" />
)
