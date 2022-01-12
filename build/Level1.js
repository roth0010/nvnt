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
        this.game.setGoal(11);
        this.cat.processInput();
        if (this.keyboard.isKeyDown(69)) {
            this.levelPass = 1;
        }
    }
    render(ctx, canvas) {
        const image = Static.loadNewImage('./assets/img/levelonebackground.png');
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        Static.writeTextToCanvas(canvas, 'Press E to open phone', canvas.width / 2, 50, 30, 'black');
        Static.writeTextToCanvas(canvas, 'Start making a Social Media account!', canvas.width / 2, 100, 30, 'black');
        const image2 = Static.loadNewImage(this.game.getMonsterType());
        image2.height = canvas.height / 2;
        image2.width = (canvas.height / 2) * Static.getMonsterAR(this.game.getMonsterType());
        ctx.drawImage(image2, ((canvas.width / 2) - (image2.width / 2)), (canvas.height / 2 - (image2.width / 2)), image2.width, image2.height);
        const monsterName = this.game.getMonsterName();
        Static.writeTextToCanvas(canvas, monsterName, canvas.width / 2, canvas.height - 50, 60, 'black');
        this.cat.render(ctx, canvas);
    }
}
//# sourceMappingURL=Level1.js.map