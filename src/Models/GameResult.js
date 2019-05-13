class GameResult {
  correct;
  incorrect;
  remaining;
  total;

  constructor(correct, incorrect, total, remaining = 50) {
    this.total = total || 50;
    this.correct = correct || 0;
    this.incorrect = incorrect || 0;
    this.remaining = remaining;
  }

  incrementCorrect() {
    return new GameResult(this.correct + 1, this.incorrect, this.total, this.remaining);
  }

  incrementIncorrect() {
    return new GameResult(this.correct, this.incorrect + 1, this.total, this.remaining);
  }

  reduceRemaining() {
    return new GameResult(this.correct, this.incorrect, this.total, this.remaining - 1);
  }
}

export default GameResult;
