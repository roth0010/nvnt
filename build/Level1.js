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
        Static.writeTextToCanvas(canvas, 'Press E to open phone', canvas.width / 2, 50, 30, 'black');
=======
        Static.writeTextToCanvas(canvas, 'Press E to open your phone', canvas.width / 2, 50, 30, 'black');
        this.cat.render(ctx, canvas);
>>>>>>> 6d4c2a8a4d582e22c9a172e50dbb742747aea19f
        const image2 = Static.loadNewImage(this.game.getMonsterType());
        image2.height = canvas.height / 2;
        image2.width = (canvas.height / 2) * Static.getMonsterAR(this.game.getMonsterType());
        ctx.drawImage(image2, ((canvas.width / 2) - (image2.width / 2)), (canvas.height / 2 - (image2.width / 2)), image2.width, image2.height);
        const monsterName = this.game.getMonsterName();
        Static.writeTextToCanvas(canvas, monsterName, canvas.width / 2, 110, 60, 'black');
<<<<<<< HEAD
        this.cat.render(ctx, canvas);
=======
>>>>>>> 6d4c2a8a4d582e22c9a172e50dbb742747aea19f
    }
}
//# sourceMappingURL=Level1.js.map