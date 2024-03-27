import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BowlingScore } from './bowling.score';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Post('calculate-score')
  calculateScore(@Body() body: { frames: number[][] }): { totalScore: number } {
    const {frames} = body;
    if (!frames || !Array.isArray(frames)) {
      throw new Error('Invalid input');
    }
    const totalScore = this.appService.calculateScore(frames);
    return {totalScore};
  }

}
