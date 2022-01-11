import Level from './Level.js';
import Static from './Static.js';
import Gato from './Gato.js';
export default class Level2 extends Level {
    cat;
    constructor(game) {
        super(game);
        this.cat = new Gato('Do not give personal info to strangers!', this.game.getCanvasWidth() - 200, this.game.getCanvasHeight() - 200, this.game);
    }
    processInput() {
        this.cat.processInput();
        if (this.keyboard.isKeyDown(69)) {
            this.game.increaseScore(1);
            this.levelPass = 1;
        }
    }
    render(ctx, canvas) {
        const image = Static.loadNewImage('./assets/img/levelonebackground.png');
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        Static.writeTextToCanvas(canvas, 'Press E to open your phone', canvas.width / 2, 50, 30, 'black');
        this.cat.render(ctx, canvas);
    }
}
//# sourceMappingURL=Level2.js.map