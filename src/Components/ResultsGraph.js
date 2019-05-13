import React from "react";

function ResultsGraph({results}) {
  return (
    <div>Graph for {results.remaining} / {results.total}, {results.correct} - {results.incorrect}</div>
  )
}

export default ResultsGraph;
