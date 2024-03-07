import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BowlingScore } from './bowling.score';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });


  it('should calculate the total score for a game', () => {
    const frames = [5, 5, 3, 7, 6, 2, 8, 1, 9, 1];
    expect(appController.calculateScore(frames)).toBe(47);
  });  

  it('should calculate the total score for a game with spare', () => {
    const frames = [5, 5, 3, 7, 6, 2, 8, 1, 9, 1];
    expect(appController.calculateScoreWithSpare(frames)).toBe(56);
  });

  it('should calculate the total score for a game with strike', () => {
    const frames = [5, 5, 3, 7, 6, 2, 10, 5, 9, 1];
    expect(appController.calculateScoreWithStrike(frames)).toBe(67);
  });

  // it('should calculate the total score for a game with bonus on the last frame', () => {
  //   const frames = [5, 5, 3, 7, 6, 2, 8, 1, 9, 10];
  //   expect(appController.calculateScoreWithBonus(frames)).toBe(239);
  // });
});
