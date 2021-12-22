import Level from './Level.js';
import Static from './Static.js';
export default class Level2 extends Level {
    constructor() {
        super();
    }
    processInput() {
        if (this.keyboard.isKeyDown(32)) {
            this.levelPass = true;
        }
    }
    render(ctx, canvas) {
        let image = Static.loadNewImage('./assets/img/Waluigi.png');
        ctx.drawImage(image, canvas.width / 2, canvas.height / 2);
    }
}
//# sourceMappingURL=Level2.js.map