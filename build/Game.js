import Level1 from './Level1.js';
import Level2 from './Level2.js';
import GameLoop from './GameLoop.js';
import Waluigi from './Waluigi.js';
import ScoreScreen from './ScoreScreen.js';
export default class Game {
    canvas;
    levels;
    engine;
    score;
    levelNumber;
    players;
    ctx;
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.ctx = this.canvas.getContext('2d');
        this.levels = [];
        this.score = 0;
        this.engine = new GameLoop(this);
        this.levelNumber = 1;
        this.players = [];
        this.setUp();
        this.players.push(new Waluigi(this.canvas.width / 2, this.canvas.height / 2));
        this.engine.start();
    }
    setUp() {
        this.levels[0] = new Level1();
        this.levels[1] = new Level1();
        this.levels[2] = new ScoreScreen();
        this.levels[3] = new Level2();
        this.levels[4] = new ScoreScreen();
    }
    processInput() {
        this.levels[this.levelNumber].processInput();
    }
    update(step) {
        if (this.levels[this.levelNumber].update() === 1) {
            this.setLevel(this.levelNumber + 1);
        }
        return false;
    }
    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.levels[this.levelNumber].render(this.ctx, this.canvas);
        this.players.forEach((player) => {
            player.render(this.ctx);
        });
    }
    setLevel(level) {
        this.levelNumber = level;
    }
}
//# sourceMappingURL=Game.js.map