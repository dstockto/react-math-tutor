import React, {useState} from 'react';
import './App.css';
import GameResult from './Models/GameResult';
import ResultsGraph from './Components/ResultsGraph';
import PlusResult from './Components/PlusResult';
import ProblemModel from './Models/ProblemModel';
import MathProblem from './Components/MathProblem';

function getResultComponents(answers) {
  return [...answers].reverse().map((answer, i) => {
    if (answer.operator === '+') {
      return <PlusResult key={i} result={answer} />;
    }
    return null;
  });
}

function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
}


function App() {

  const [results, setResults] = useState(new GameResult());

  const [answers, setAnswers] = useState([]);

  const [values, setValues] = useState([getRandomIntInRange(100, 999), getRandomIntInRange(100, 999)]);

  function checkSubmission(x, y, operator) {
    return (answer) => {
      if (results.remaining === 0) {
        return;
      }

      if (operator === '+') {
        if ((x + y) === +answer) {
          setResults(results.reduceRemaining().incrementCorrect());
          setAnswers(answers.concat(new ProblemModel(x, y, +answer, '+')));
          setValues([getRandomIntInRange(100, 999), getRandomIntInRange(100, 999)]);
          return;
        }

        setResults(results.reduceRemaining().incrementIncorrect());
        setAnswers(answers.concat(new ProblemModel(x, y, +answer, '+')));
        setValues([getRandomIntInRange(100, 999), getRandomIntInRange(100, 999)]);
      }
    }
  }

  return (
    <div className="App">
      <h1>Eli's Math Game</h1>
      <section className={"problems"}>
        {results.remaining !== 0 &&
          <MathProblem x={values[0]} y={values[1]} operator={'+'} submit={checkSubmission(values[0], values[1], '+')}/>
        }
        {getResultComponents(answers)}
      </section>
      <section className={"results"}>
        <div><span>Correct: {results.correct}</span></div>
        <div><span>Incorrect: {results.incorrect}</span></div>
        <div><span>Remaining: {results.remaining}</span></div>
      </section>
      <section className={"graphs"}><ResultsGraph results={results} /></section>
    </div>
  );
}

export default App;
