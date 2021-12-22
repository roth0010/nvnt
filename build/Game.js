import Level1 from './Level1.js';
import Level2 from './Level2.js';
import GameLoop from './GameLoop.js';
import Waluigi from './Waluigi.js';
export default class Game {
    canvas;
    level;
    engine;
    levelUp;
    levelNumber;
    players;
    ctx;
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.ctx = this.canvas.getContext('2d');
        this.level = new Level1();
        this.levelUp = false;
        this.engine = new GameLoop(this);
        this.levelNumber = 1;
        this.players = [];
        this.players.push(new Waluigi(this.canvas.width / 2, this.canvas.height / 2));
        this.players.push(new Waluigi(0, 0));
        console.log(this.canvas.width);
        console.log(this.canvas.height);
        this.engine.start();
    }
    processInput() {
        this.level.processInput();
    }
    update(step) {
        if (this.level.update()) {
            this.increaseLevel(this.levelNumber + 1);
        }
        return false;
    }
    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.level.render(this.ctx, this.canvas);
        this.players.forEach((player) => {
            player.render(this.ctx);
        });
    }
    setLevelUp(input) {
        this.levelUp = input;
    }
    increaseLevel(level) {
        if (level === 1) {
            this.level = new Level1();
        }
        else if (level === 2) {
            this.level = new Level2();
        }
        this.levelNumber = level;
    }
}
//# sourceMappingURL=Game.js.map