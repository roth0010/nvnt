import Level from './Level.js';
import Static from './Static.js';
import Gato from './Gato.js';
export default class Level1 extends Level {
    cat;
    constructor(game, shop) {
        super(game);
        console.log('constructor');
        this.cat = new Gato('Hi, I`m here to help you!', this.game.getCanvasWidth() - Level.CAT_X_POSITION, this.game.getCanvasHeight() - Level.CAT_Y_POSITION, this.game);
        this.shop = shop;
    }
    processInput() {
        this.game.setGoal(11);
        this.shop.update();
        this.cat.processInput();
        this.shop.processInput();
        if (this.keyboard.isKeyDown(69)) {
            this.shop.setActive(false);
            this.levelPass = 1;
        }
    }
    render(ctx, canvas) {
        const image = Static.loadNewImage('./assets/img/levelOneBackground.png');
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const image2 = Static.loadNewImage(this.game.getMonsterType());
        image2.height = canvas.height / 2;
        image2.width = (canvas.height / 2) * Static.getMonsterAR(this.game.getMonsterType());
        ctx.drawImage(image2, ((canvas.width / 2) - (image2.width / 2)), (canvas.height / 1.6 - (image2.height / 2)), image2.width, image2.height);
        Static.writeTextToCanvas(canvas, this.game.getMonsterName(), canvas.width / 2, canvas.height - 50, 60, 'black');
        Static.writeTextToCanvas(canvas, 'Level 1: Making Your Account!', canvas.width / 2, 50, 40, 'black');
        Static.writeTextToCanvas(canvas, 'Press E to open your phone', canvas.width / 2, 100, 30, 'black');
        this.cat.render(ctx, canvas);
        this.shop.render(canvas);
        Static.writeTextToCanvas(canvas, `Tacos: ${this.game.getTaco()}`, canvas.width / 12, 50, 40, 'red');
    }
}
//# sourceMappingURL=Level1.js.map