import Level from './Level.js';
import Static from './Static.js';
export default class Level1 extends Level {
    constructor(game) {
        super(game);
    }
    processInput() {
        if (this.keyboard.isKeyDown(69)) {
            this.game.increaseScore(2);
            this.levelPass = 1;
        }
    }
    render(ctx, canvas) {
        const image = Static.loadNewImage('./assets/img/levelonebackground.png');
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        this.writeTextToCanvas(canvas, 'Press E to pass the level', canvas.width / 2, 50, 30, 'black');
        const image2 = Static.loadNewImage(this.game.getMonsterType());
        ctx.drawImage(image2, 50, 0, canvas.width, canvas.height);
        const monsterName = this.game.getMonsterName();
        this.writeTextToCanvas(canvas, monsterName, canvas.width / 2, 110, 60, 'black');
    }
}
//# sourceMappingURL=Level1.js.map