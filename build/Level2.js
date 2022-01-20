import Level from './Level.js';
import Static from './Static.js';
import Gato from './Gato.js';
export default class Level2 extends Level {
    cat;
    constructor(game, shop) {
        super(game);
        this.cat = new Gato('Do not give personal info to strangers!', this.game.getCanvasWidth() - 200, this.game.getCanvasHeight() - 200, this.game);
        this.shop = shop;
    }
    processInput() {
        this.game.setGoal(2);
        this.shop.update();
        this.cat.processInput();
        this.shop.processInput();
        if (this.keyboard.isKeyDown(69)) {
            this.shop.setActive(false);
            this.levelPass = 1;
        }
    }
    render(ctx, canvas) {
        const image = Static.loadNewImage('./assets/img/levelTwoBackground.png');
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const image2 = Static.loadNewImage(this.game.getMonsterType());
        image2.height = canvas.height / 2;
        image2.width = (canvas.height / 2) * Static.getMonsterAR(this.game.getMonsterType());
        ctx.drawImage(image2, ((canvas.width / 2) - (image2.width / 2)), (canvas.height / 1.6 - (image2.height / 2)), image2.width, image2.height);
        Static.writeTextToCanvas(canvas, this.game.getMonsterName(), canvas.width / 2, canvas.height - 50, 60, 'black');
        Static.writeTextToCanvas(canvas, 'Level 2: An Unknown Visitor', canvas.width / 2, 50, 40, 'black');
        Static.writeTextToCanvas(canvas, 'Press E to open your phone', canvas.width / 2, 100, 30, 'black');
        this.cat.render(ctx, canvas);
        this.shop.render(canvas);
        Static.writeTextToCanvas(canvas, `Tacos: ${this.game.getTaco()}`, canvas.width / 12, 50, 40, 'black');
    }
}
//# sourceMappingURL=Level2.js.map