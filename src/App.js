import React, {useState} from 'react';
import './App.css';
import GameResult from './Models/GameResult';
import ResultsGraph from './Components/ResultsGraph';
import PlusResult from './Components/PlusResult';
import useInterval from './Helpers/useInterval';
import ProblemModel from './Models/ProblemModel';

function getResultComponents(answers) {
  return answers.map((answer, i) => {
    if (answer.operator === '+') {
      return <PlusResult key={i} result={answer} />;
    }
    return null;
  });
}

function App() {

  const [results, setResults] = useState(new GameResult());

  const [answers, setAnswers] = useState([]);

  useInterval(() => {
    if (results.remaining > 0) {
      let correct = Math.floor(Math.random() * 4) > 0;
      if (correct) {
        setResults(results.reduceRemaining().incrementCorrect());

        let x = Math.floor(Math.random() * 899) + 100;
        let y = Math.floor(Math.random() * 899) + 100;
        let sum = x + y;
        setAnswers(answers.concat(new ProblemModel(x, y, sum, '+')));
      } else {
        setResults(results.reduceRemaining().incrementIncorrect());

        let x = Math.floor(Math.random() * 899) + 100;
        let y = Math.floor(Math.random() * 899) + 100;
        let sum = x + Math.floor(Math.random() * 1000 - y);
        setAnswers(answers.concat(new ProblemModel(x, y, sum, '+')));
      }
    }
  }, 200);

  return (
    <div className="App">
      <h1>Eli's Math Game</h1>
      <section className={"problems"}>
        {getResultComponents(answers)}

        <div>105 + 416 = <span><input type={"text"} size={5}/></span></div>
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
