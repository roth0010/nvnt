import Level1 from './Level1.js';
import Level2 from './Level2.js';
import GameLoop from './GameLoop.js';
import Waluigi from './Waluigi.js';
export default class Game {
    canvas;
    stop;
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
        this.stop = false;
        this.levelUp = false;
        this.engine = new GameLoop(this);
        this.levelNumber = 1;
        this.players = [];
        this.players.push(new Waluigi(this.canvas.height / 2, this.canvas.width / 2));
        console.log(this.canvas.width);
        console.log(this.canvas.height);
        this.engine.start();
    }
    processInput() {
    }
    update(step) {
        if (this.level.update()) {
            this.increaseLevel(this.levelNumber + 1);
        }
        return false;
    }
    render() {
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