import Screen from './Screen.js';
export default class ScoreScreen extends Screen {
    levelPass;
    constructor(game) {
        super(game);
        this.levelPass = 0;
    }
    processInput() {
        if (this.game.getScore() < 2) {
            this.levelPass = 2;
        }
        else if (this.game.getScore() >= 2) {
            this.levelPass = 1;
        }
    }
    update() {
        if (this.levelPass === 2 && this.keyboard.isKeyDown(82)) {
            return this.levelPass;
        }
        if (this.levelPass === 1 && this.keyboard.isKeyDown(83)) {
            return this.levelPass;
        }
        return 0;
    }
    render(ctx, canvas) {
        if (this.levelPass === 2) {
            this.writeTextToCanvas(canvas, 'Looks like you didn`t get enough points to advance. Press R to try again!', canvas.width / 2, canvas.height / 2, 30, 'Black');
        }
        else if (this.levelPass === 1) {
            this.writeTextToCanvas(canvas, 'You nailed that! Press S to start the next level', canvas.width / 2, canvas.height / 2, 30, 'Black');
        }
    }
}
//# sourceMappingURL=ScoreScreen.js.map