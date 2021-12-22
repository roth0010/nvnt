import Static from './Static.js';
export default class Player {
    xPosition;
    yPosition;
    image;
    constructor(image, xPosition, yPosition) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.image = Static.loadNewImage(image);
    }
    setPosition(xPosition, yPosition) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
    }
    render(ctx) {
        console.log('beans');
        ctx.drawImage(this.image, this.xPosition, this.yPosition);
    }
}
//# sourceMappingURL=Player.js.map