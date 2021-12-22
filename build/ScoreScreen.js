import Screen from './Screen.js';
export default class ScoreScreen extends Screen {
    levelPass;
    constructor() {
        super();
        this.levelPass = 0;
    }
    processInput() {
        if (this.keyboard.isKeyDown(82)) {
            this.levelPass = 2;
        }
        else if (this.score > 2 && this.keyboard.isKeyDown(83)) {
            this.levelPass = 1;
        }
    }
    update() {
        return this.levelPass;
    }
    render(ctx, canvas) {
        if (this.levelPass === 2) {
            this.writeTextToCanvas(canvas, 'Looks like you didn`t get enough points to advance. Press R to try again!', canvas.width / 2, canvas.height / 2);
        }
        else if (this.levelPass === 1) {
            this.writeTextToCanvas(canvas, 'You nailed that! Press S to start the next level', canvas.width / 2, canvas.height / 2);
        }
    }
}
//# sourceMappingURL=ScoreScreen.js.map