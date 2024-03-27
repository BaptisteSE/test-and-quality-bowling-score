import {Test, TestingModule} from '@nestjs/testing';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {BowlingScore} from './bowling.score';

describe('AppController', () => {
    let appController: AppController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService],
        }).compile();

        appController = app.get<AppController>(AppController);
    });


    it('should calculate the total score for a game without strikes or spares', () => {
        const frames = [[3, 4], [2, 6], [1, 5], [3, 6], [2, 5], [4, 1], [0, 9], [8, 1], [2, 3], [3, 5]];
        const expectedTotalScore = 73;
        expect(appController.calculateScore({frames})).toEqual({totalScore: expectedTotalScore});
    });

    it('should handle a game of all gutter balls (zeros)', () => {
        const frames = new Array(10).fill([0, 0]);
        const expectedTotalScore = 0;
        expect(appController.calculateScore({frames})).toEqual({totalScore: expectedTotalScore});
    });

    it('should handle a game of all frames having the same score', () => {
        const frames = new Array(10).fill([5, 2]);
        const expectedTotalScore = 70;
        expect(appController.calculateScore({frames})).toEqual({totalScore: expectedTotalScore});
    });

    it('should correctly calculate the score with spares', () => {
        const frames = [[1, 4], [4, 5], [6, 4], [5, 5], [10, 0], [0, 1], [7, 3], [6, 4], [10, 0], [2, 8, 6]];
        const expectedTotalScore = 133;
        expect(appController.calculateScore({frames})).toEqual({totalScore: expectedTotalScore});
    });

    it('should correctly calculate the score with strikes', () => {
        const frames = [
            [10, 0], [10, 0], [7, 0], [5, 5], [3, 6], [10, 0], [8, 2], [6, 1], [10, 0], [10, 2, 6]
        ];
        const expectedTotalScore = 156;
        expect(appController.calculateScore({frames})).toEqual({totalScore: expectedTotalScore});
    });

    it('should correctly calculate the score with a spare in the last frame', () => {
        const frames = [
            [1, 4], [4, 5], [6, 3], [5, 4], [4, 5], [3, 2], [2, 3], [3, 4], [4, 5], [7, 3, 5]
        ];
        const expectedTotalScore = 83;
        expect(appController.calculateScore({frames})).toEqual({totalScore: expectedTotalScore});
    });
    it('should correctly calculate the score with a strike in the last frame', () => {
        const frames = [
            [1, 4], [4, 5], [6, 3], [5, 4], [4, 5], [3, 2], [2, 3], [3, 4], [4, 5], [10, 3, 7]
        ];
        const expectedTotalScore = 88;
        expect(appController.calculateScore({frames})).toEqual({totalScore: expectedTotalScore});
    });

});
