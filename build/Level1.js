import Level from './Level.js';
import Static from './Static.js';
import Gato from './Gato.js';
export default class Level1 extends Level {
    cat;
    constructor(game) {
        super(game);
        this.cat = new Gato('Do not feed the seagulls', this.game.getCanvasWidth() - 200, this.game.getCanvasHeight() - 200, this.game);
    }
    processInput() {
        this.cat.processInput();
        if (this.keyboard.isKeyDown(69)) {
            this.game.increaseScore(2);
            this.levelPass = 1;
        }
    }
    render(ctx, canvas) {
        const image = Static.loadNewImage('./assets/img/levelonebackground.png');
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
<<<<<<< HEAD
        this.writeTextToCanvas(canvas, 'Press E to pass the level', canvas.width / 2, 50, 30, 'black');
        const image2 = Static.loadNewImage(this.game.getMonsterType());
        ctx.drawImage(image2, 50, 0, canvas.width, canvas.height);
        const monsterName = this.game.getMonsterName();
        this.writeTextToCanvas(canvas, monsterName, canvas.width / 2, 110, 60, 'black');
=======
        Static.writeTextToCanvas(canvas, 'Press E to open your phone', canvas.width / 2, 50, 30, 'black');
        this.cat.render(ctx, canvas);
>>>>>>> 8f437c5bf5e62d98fe7970851f98756526ebdb4a
    }
}
//# sourceMappingURL=Level1.js.map