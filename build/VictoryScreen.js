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
        if (this.keyboard.isKeyDown(49) && this.levelPass === 3) {
            return 3;
        }
        if (this.keyboard.isKeyDown(50) && this.levelPass === 3) {
            this.game.setScore(0);
            return 4;
        }
        if (this.keyboard.isKeyDown(51) && this.levelPass === 3) {
            this.game.setScore(0);
            return 5;
        }
        if (this.keyboard.isKeyDown(52) && this.levelPass === 3) {
            this.game.setScore(0);
            return 6;
        }
        if (this.keyboard.isKeyDown(53) && this.levelPass === 3) {
            this.game.setScore(0);
            return 7;
        }
        return 0;
    }
    render(ctx, canvas) {
        Static.writeTextToCanvas(canvas, 'You beat the game! good job!', canvas.width / 2, ((canvas.height / 2) - 50), 30, 'Red');
        Static.writeTextToCanvas(canvas, 'Want to play again?', canvas.width / 2, ((canvas.height / 2) + 50), 25, 'Red');
        Static.writeTextToCanvas(canvas, 'Press 1 to play Level 1 again', canvas.width / 2, ((canvas.height / 2) + 90), 20, 'Black');
        Static.writeTextToCanvas(canvas, 'Press 2 to play Level 2 again', canvas.width / 2, ((canvas.height / 2) + 130), 20, 'Black');
        Static.writeTextToCanvas(canvas, 'Press 3 to play Level 3 again', canvas.width / 2, ((canvas.height / 2) + 170), 20, 'Black');
        Static.writeTextToCanvas(canvas, 'Press 4 to play Level 4 again', canvas.width / 2, ((canvas.height / 2) + 210), 20, 'Black');
        Static.writeTextToCanvas(canvas, 'Press 5 to play Level 5 again', canvas.width / 2, ((canvas.height / 2) + 250), 20, 'Black');
        const image2 = Static.loadNewImage(this.game.getMonsterType());
        image2.height = canvas.height / 2;
        image2.width = (canvas.height / 2) * Static.getMonsterAR(this.game.getMonsterType());
        ctx.drawImage(image2, image2.width / 2, (canvas.height / 2 - (image2.height / 2)), image2.width, image2.height);
    }
}
//# sourceMappingURL=VictoryScreen.js.map