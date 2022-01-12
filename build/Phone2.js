import Phone from './Phone.js';
import Static from './Static.js';
import Gato from './Gato.js';
export default class Phone2 extends Phone {
    constructor(game) {
        super(game);
        this.cat = new Gato('A good password should not be easy to guess! Use different characters', (this.game.getCanvasWidth() * 2) / 3, this.game.getCanvasHeight() - 200, this.game);
    }
    processInput() {
        this.cat.processInput();
        if (this.wait >= 60) {
            if (this.keyboard.isKeyDown(52)) {
                this.answered = true;
                this.correct = true;
            }
            else if (this.keyboard.isKeyDown(50)
                || this.keyboard.isKeyDown(49)
                || this.keyboard.isKeyDown(51)) {
                this.answered = true;
                this.correct = false;
            }
            if (this.answered === true) {
                if (this.correct === true) {
                    this.game.increaseScore(3);
                }
                this.levelPass = 1;
            }
        }
        else {
            this.wait += 1;
        }
    }
    render(ctx, canvas) {
        ctx.drawImage(this.image, 25, -50, this.image.width, this.image.height);
        Static.writeTextToCanvas(canvas, 'Pick a Password!', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'red');
        Static.writeTextToCanvas(canvas, '[1] simple', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
        Static.writeTextToCanvas(canvas, '[2] 1234', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
        Static.writeTextToCanvas(canvas, `[3] ${this.game.getMonsterName()}`, ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
        Static.writeTextToCanvas(canvas, '[4] X6s62j', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
        this.cat.render(ctx, canvas);
    }
}
//# sourceMappingURL=Phone2.js.map