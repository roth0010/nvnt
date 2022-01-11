import Level1 from './Level1.js';
import Level2 from './Level2.js';
import GameLoop from './GameLoop.js';
import ScoreScreen from './ScoreScreen.js';
import SelectScreen from './SelectScreen.js';
import Phone5 from './Phone5.js';
import Phone1 from './Phone4.js';
import Phone2 from './Phone2.js';
import Phone3 from './Phone3.js';
import Phone4 from './Phone4.js';
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
        this.setUp();
        this.engine.start();
    }
    setUp() {
        this.levels[0] = new SelectScreen(this);
        this.levels[1] = new Level1(this);
        this.levels[2] = new Phone1(this);
        this.levels[3] = new Phone2(this);
        this.levels[4] = new Phone3(this);
        this.levels[5] = new Phone4(this);
        this.levels[6] = new ScoreScreen(this);
        this.levels[7] = new Level2(this);
        this.levels[8] = new Phone5(this);
        this.levels[9] = new ScoreScreen(this);
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
    getScore() {
        return this.score;
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
        else if (index === 4) {
            this.levels[4] = new Level2(this);
            this.levels[5] = new Phone5(this);
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