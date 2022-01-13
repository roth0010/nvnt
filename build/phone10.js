import Phone from './Phone.js';
import Static from './Static.js';
import Gato from './Gato.js';
export default class Phone10 extends Phone {
    constructor(game) {
        super(game);
        this.cat = new Gato('10', this.game.getCanvasWidth() - 200, this.game.getCanvasHeight() - 200, this.game);
    }
    processInput() {
        this.cat.processInput();
        if (this.wait >= 15) {
            if (this.keyboard.isKeyDown(50)) {
                this.answered = true;
                this.correct = true;
            }
            else if (this.keyboard.isKeyDown(49)) {
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
        Static.writeTextToCanvas(canvas, 'will you add your location to the photo?', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'red');
        Static.writeTextToCanvas(canvas, '[1] Yes', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
        Static.writeTextToCanvas(canvas, '[2] No', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
        Static.writeTextToCanvas(canvas, 'add location tag?', (canvas.width / 20), (Phone.YPOSITION + 45), 40, 'white', 'left');
        this.cat.render(ctx, canvas);
        ctx.beginPath();
        ctx.rect((canvas.width / 35), (Phone.YPOSITION + 150), 440, 250);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        if (this.game.getChosenPost() === './assets/img/levelOneBackground.png') {
            const a = Static.loadNewImage(this.game.getChosenPost());
            ctx.drawImage(a, 55, 200, 440, 250);
        }
        else {
            const a = Static.loadNewImage(this.game.getMonsterType());
            ctx.drawImage(a, 220, (Phone.YPOSITION + 180), (this.image.width / 5), this.image.height / 5);
        }
    }
}
//# sourceMappingURL=Phone10.js.map