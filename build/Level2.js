import Level from './Level.js';
import Static from './Static.js';
export default class Level2 extends Level {
    constructor(game) {
        super(game);
    }
    processInput() {
        if (this.keyboard.isKeyDown(69)) {
            this.game.increaseScore(1);
            this.levelPass = 1;
        }
    }
    render(ctx, canvas) {
        const image = Static.loadNewImage('./assets/img/levelonebackground.png');
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        this.writeTextToCanvas(canvas, 'Press E to pass the level (syke)', canvas.width / 2, 50, 30, 'black');
    }
}
//# sourceMappingURL=Level2.js.map