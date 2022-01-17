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
        this.levelPass = 3;
    }
    update() {
        if (this.keyboard.isKeyDown(82) && this.levelPass === 3) {
            console.log(this.levelPass);
            this.game.setScore(0);
            return this.levelPass;
        }
        return 0;
    }
    render(ctx, canvas) {
        Static.writeTextToCanvas(canvas, 'You beat the game! good job!', canvas.width / 2, ((canvas.height / 2) + 50), 30, 'Red');
        Static.writeTextToCanvas(canvas, 'Press R to play again!', canvas.width / 2, ((canvas.height / 2) + 100), 20, 'Red');
    }
}
//# sourceMappingURL=VictoryScreen.js.map