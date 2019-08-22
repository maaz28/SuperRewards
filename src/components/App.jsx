import React, { Component } from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';
import Box5 from './Box5';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div>
        <Box1 />
        <Box3 />
        <Box2 />
        <Box4 />
        <Box5 />
      </div>
    );
  }
}
