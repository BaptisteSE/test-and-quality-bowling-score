export class BowlingScore {
    calculateTotalScore(frames: number[][]): number {
        let totalScore = 0;
        for (let i = 0; i < frames.length; i++) {
            if (i < 9) {
                if (this.isStrike(frames[i])) {
                    totalScore += 10 + this.strikeBonus(frames, i);
                } else if (this.isSpare(frames[i])) {
                    totalScore += 10 + this.spareBonus(frames, i);
                } else {
                    totalScore += this.frameScore(frames[i]);
                }
            } else {
                totalScore += this.frameScore(frames[i]);
            }
        }

        return totalScore;
    }

    isStrike(frame: number[]): boolean {
        return frame[0] === 10;
    }

    isSpare(frame: number[]): boolean {
        return frame.reduce((a, b) => a + b, 0) === 10 && frame.length === 2;
    }

    frameScore(frame: number[]): number {
        return frame.reduce((a, b) => a + b, 0);
    }

    strikeBonus(frames: number[][], index: number): number {
        if (this.isStrike(frames[index + 1])) {
            if (index + 1 < frames.length - 1) {
                return 10 + (frames[index + 2][0] !== undefined ? frames[index + 2][0] : 0);
            }
            return 10 + frames[index + 1][1];
        }
        return frames[index + 1][0] + (frames[index + 1][1] !== undefined ? frames[index + 1][1] : 0);
    }

    spareBonus(frames: number[][], index: number): number {
        return frames[index + 1][0];
    }
}
