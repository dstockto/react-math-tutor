import React from "react";
import CorrectCheck from './CorrectCheck';
import IncorrectCheck from './IncorrectCheck';

export default function ({result}) {
  const [addend1, addend2, sum] = [result.x, result.y, result.result];
  const check = result.isCorrect() ? <CorrectCheck/> : <IncorrectCheck/>
  return (
    <div>{addend1} + {addend2} = <span>{sum}</span>{check}</div>
  )
};
