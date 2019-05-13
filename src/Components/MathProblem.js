import React from "react";

function keyPress(submit) {
  return (e) => {
    if (e.key === 'Enter') {
      submit(e.target.value);
      e.target.value = '';
    }
  }
}

export default function MathProblem({x, y, operator, submit}) {
  return (<div>{x} {operator} {y} = <span><input type={"text"} size={5} onKeyPress={keyPress(submit)} /></span></div>);
};
