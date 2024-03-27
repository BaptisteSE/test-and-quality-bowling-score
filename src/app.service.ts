import {Injectable} from '@nestjs/common';
import {BowlingScore} from "./bowling.score";

@Injectable()
export class AppService {
    private bowlingScore = new BowlingScore();

    calculateScore(frames: number[][]): number {
        return this.bowlingScore.calculateTotalScore(frames);
    }

}

