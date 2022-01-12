import Level1 from './Level1.js';
import Level2 from './Level2.js';
import GameLoop from './GameLoop.js';
import ScoreScreen from './ScoreScreen.js';
import SelectScreen from './SelectScreen.js';
import Phone5 from './Phone5.js';
import Phone1 from './Phone1.js';
import Phone2 from './Phone2.js';
import Phone3 from './Phone3.js';
import Phone4 from './Phone4.js';
import Level3 from './Level3.js';
import Phone6 from './Phone6.js';
import Level4 from './Level4.js';
import Level5 from './Level5.js';
import Phone7 from './Phone7.js';
import Phone8 from './Phone8.js';
export default class Game {
    canvas;
    levels;
    engine;
    score;
    levelNumber;
    players;
    monsterType;
    ctx;
    monsterName;
    goal;
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.levels = [];
        this.score = 0;
        this.engine = new GameLoop(this);
        this.levelNumber = 0;
        this.monsterType = '';
        this.monsterName = '';
        this.goal = 0;
        this.setUp();
        this.engine.start();
    }
    setUp() {
        this.levels[0] = new SelectScreen(this);
        this.levels[1] = new Phone5(this);
        this.levels[2] = new Phone1(this);
        this.levels[3] = new Phone2(this);
        this.levels[4] = new Phone3(this);
        this.levels[5] = new Phone4(this);
        this.levels[6] = new ScoreScreen(this);
        this.levels[7] = new Level2(this);
        this.levels[8] = new Level1(this);
        this.levels[9] = new ScoreScreen(this);
        this.levels[10] = new Level3(this);
        this.levels[11] = new Phone6(this);
        this.levels[12] = new ScoreScreen(this);
        this.levels[13] = new Level4(this);
        this.levels[14] = new Phone7(this);
        this.levels[15] = new ScoreScreen(this);
        this.levels[16] = new Level5(this);
        this.levels[17] = new Phone8(this);
        this.levels[18] = new ScoreScreen(this);
    }
    processInput() {
        this.levels[this.levelNumber].processInput();
    }
    update(step) {
        if (this.levels[this.levelNumber].update() === 1) {
            this.setLevel(this.levelNumber + 1);
        }
        if (this.levels[this.levelNumber].update() === 2) {
            this.setNewLevel(this.levelNumber - 2);
        }
        if (this.levels[this.levelNumber].update() === 3) {
            this.setNewLevel(1);
        }
        return false;
    }
    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.levels[this.levelNumber].render(this.ctx, this.canvas);
    }
    setLevel(level) {
        this.levelNumber = level;
    }
    getIndex() {
        return this.levelNumber;
    }
    getScore() {
        return this.score;
    }
    getCanvasHeight() {
        return this.canvas.height;
    }
    getCanvasWidth() {
        return this.canvas.width;
    }
    getGoal() {
        return this.goal;
    }
    setGoal(number) {
        this.goal = number;
    }
    setScore(score) {
        this.score = score;
    }
    increaseScore(score) {
        this.score += score;
    }
    setNewLevel(index) {
        if (index === 1) {
            this.levels[1] = new Level1(this);
            this.levels[2] = new Phone1(this);
            this.levels[3] = new Phone2(this);
            this.levels[4] = new Phone3(this);
            this.levels[5] = new Phone4(this);
        }
        else if (index === 7) {
            this.levels[7] = new Level2(this);
            this.levels[8] = new Phone5(this);
        }
        else if (index === 10) {
            this.levels[10] = new Level3(this);
            this.levels[11] = new Phone6(this);
        }
        else if (index === 13) {
            this.levels[13] = new Level4(this);
            this.levels[14] = new Phone7(this);
        }
        else if (index === 16) {
            this.levels[16] = new Level5(this);
            this.levels[17] = new Phone8(this);
        }
        this.levelNumber = index;
    }
    setNewSelectScreen() {
        this.levels[0] = new SelectScreen(this);
    }
    setMonsterType(type) {
        this.monsterType = type;
    }
    getMonsterType() {
        return this.monsterType;
    }
    getMonsterName() {
        return this.monsterName;
    }
    setMonsterName(customMonsterName) {
        this.monsterName = customMonsterName;
    }
}
//# sourceMappingURL=Game.js.map