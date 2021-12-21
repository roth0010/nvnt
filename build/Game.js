import Level1 from './Level1.js';
import Level2 from './Level2.js';
import GameLoop from './GameLoop.js';
export default class Game {
    canvas;
    stop;
    level;
    engine;
    levelUp;
    constructor(canvas) {
        this.canvas = canvas;
        this.level = new Level1();
        this.stop = false;
        this.levelUp = false;
        this.engine = new GameLoop(this);
        this.engine.start();
    }
    processInput() {
    }
    update(step) {
        if (this.level.update()) {
            this.level = new Level2();
            console.log(this.level);
        }
        return false;
    }
    render() {
    }
    setLevelUp(input) {
        this.levelUp = input;
    }
}
//# sourceMappingURL=Game.js.map