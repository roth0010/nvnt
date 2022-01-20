import Static from './Static.js';
export default class Character {
    xPosition;
    yPosition;
    game;
    image;
    constructor(xPosition, yPosition, game) {
        this.image = Static.loadNewImage(this.game.getMonsterType());
        this.update();
    }
    processInput() {
    }
    update() {
    }
    render(ctx, canvas) {
        ctx.drawImage(this.image, this.xPosition, this.yPosition, this.image.width, this.image.height);
    }
}
//# sourceMappingURL=Character.js.map