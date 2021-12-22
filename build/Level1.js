import Level from './Level.js';
import Static from './Static.js';
export default class Level1 extends Level {
    constructor() {
        super();
    }
    processInput() {
        if (this.keyboard.isKeyDown(32)) {
            this.levelPass = true;
        }
    }
    render(ctx, canvas) {
        let image = Static.loadNewImage('./assets/img/levelonebackground.png');
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
}
//# sourceMappingURL=Level1.js.map