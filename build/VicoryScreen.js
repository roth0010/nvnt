import Screen from './Screen.js';
import Static from './Static.js';
export default class VictoryScreen extends Screen {
    levelPass;
    taco;
    addTaco;
    constructor(game, taco) {
        super(game);
        this.levelPass = 0;
        this.taco = taco;
        this.addTaco = false;
    }
    processInput() {
        if (this.game.getScore() < this.game.getGoal()) {
            this.levelPass = 2;
        }
        else if (this.game.getScore() >= this.game.getGoal()) {
            if (this.addTaco === false) {
                this.taco.increaseTaco(this.game.getScore() * 100);
                this.addTaco = true;
            }
            this.levelPass = 1;
        }
    }
    update() {
        if (this.keyboard.isKeyDown(82) && this.levelPass === 2) {
            this.game.setScore(0);
            return this.levelPass;
        }
        if (this.levelPass === 1 && this.keyboard.isKeyDown(83)) {
            this.game.setScore(0);
            return this.levelPass;
        }
        return 0;
    }
    render(ctx, canvas) {
        Static.writeTextToCanvas(canvas, 'You beat the game! good job!', canvas.width / 2, ((canvas.height / 2) + 50), 30, 'Red');
    }
}
//# sourceMappingURL=VicoryScreen.js.map