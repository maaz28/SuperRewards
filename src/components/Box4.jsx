import React from 'react'
import Investment from './Investment';
import Game from './TheGame';
import Network from './TheNetwork'
import Concept from './TheConcept';

export default function Box4() {
  return (
    <div id="box-4">
      <Concept />
      <br />
      <Game />
      <br />
      <Network />
      <br />
      <Investment />
    </div>
  )
}
