export default class ProblemModel {
  x;
  y;
  result;
  operator;
  constructor(x, y, result, operator) {
    this.x = x;
    this.y = y;
    this.result = result;
    this.operator = operator;
  }

  isCorrect() {
    if (this.operator === '+') {
      return (this.x + this.y === this.result);
    }

    return false;
  }
};
