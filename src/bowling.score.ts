export class BowlingScore {
  constructor(private readonly frames: number[]) {}

  calculateTotalScore(): number {
    let totalScore = 0;
    for (let i = 0; i < this.frames.length; i++) {
      totalScore += this.frames[i];
    }
    return totalScore;
  }

  calculateTotalScoreWithSpare(): number {
    let totalScore = 0;
    for (let i = 0; i < this.frames.length; i++) {
      if (i % 2 === 0 && i < this.frames.length - 2 && this.frames[i] + this.frames[i + 1] === 10) {
        totalScore += this.frames[i] + this.frames[i + 2];
      } else {
        totalScore += this.frames[i];
      }
    }
    return totalScore;
  }

  calculateTotalScoreWithStrike(): number {
    let totalScore = 0;
    for (let i = 0; i < this.frames.length; i++) {
      if (i % 2 === 0 && i < this.frames.length - 1 && this.frames[i] === 10) {
        totalScore += this.frames[i] + this.frames[i + 1] + this.frames[i + 2];
      } else {
        totalScore += this.frames[i];
      }
    }
    return totalScore;
  }

  calculateTotalScoreWithBonus(): number {
    let totalScore = 0;
    for (let i = 0; i < this.frames.length; i++) {
      if (i === this.frames.length - 3) {
          totalScore += this.frames[i] + this.frames[i + 1] + this.frames[i + 2];
      } else {
          totalScore += this.frames[i];
      }
    }
    return totalScore;
  }
  
}
  