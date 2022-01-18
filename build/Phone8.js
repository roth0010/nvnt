import Phone from './Phone.js';
import Static from './Static.js';
import Gato from './Gato.js';
export default class Phone8 extends Phone {
    constructor(game) {
        super(game);
        this.cat = new Gato('Does this person seem good?', this.game.getCanvasWidth() - 200, this.game.getCanvasHeight() - 200, this.game);
    }
    processInput() {
        this.cat.processInput();
        if (this.wait >= 15) {
            if (this.keyboard.isKeyDown(49)) {
                this.answered = true;
                this.correct = false;
            }
            else if (this.keyboard.isKeyDown(50)) {
                this.answered = true;
                this.correct = false;
            }
            else if (this.keyboard.isKeyDown(51)) {
                this.answered = true;
                this.correct = true;
            }
            else if (this.keyboard.isKeyDown(52)) {
                this.answered = true;
                this.correct = true;
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
        const background = Static.loadNewImage('./assets/img/levelthreebackground.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(this.image, 25, -50, this.image.width, this.image.height);
        Static.writeTextToCanvas(canvas, 'A friend request from a famous person', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 42, 'black');
        Static.writeTextToCanvas(canvas, '[1] Send them a message!', ((canvas.width * 2) / 3), Phone.YPOSITION + 250, 30, 'black');
        Static.writeTextToCanvas(canvas, '[2] Accept the request', ((canvas.width * 2) / 3), Phone.YPOSITION + 300, 30, 'black');
        Static.writeTextToCanvas(canvas, '[3] Deny the request', ((canvas.width * 2) / 3), Phone.YPOSITION + 350, 30, 'black');
        Static.writeTextToCanvas(canvas, '[4] Block them', ((canvas.width * 2) / 3), Phone.YPOSITION + 400, 30, 'black');
        Static.writeTextToCanvas(canvas, 'You have 1 request', (canvas.width / 20), (Phone.YPOSITION + 45), 40, 'white', 'left');
        Static.writeTextToCanvas(canvas, 'from:', (canvas.width / 20), (Phone.YPOSITION + 90), 40, 'white', 'left');
        ctx.drawImage(Static.loadNewImage('./assets/img/MarkRutte.png'), (canvas.width / 10), (Phone.YPOSITION + 150), 150, 150);
        Static.writeTextToCanvas(canvas, 'markrutten3543', (canvas.width / 20), (Phone.YPOSITION + 345), 40, 'white', 'left');
        Static.writeTextToCanvas(canvas, 'bio: "hoi. dit is het akkound van', (canvas.width / 20), (Phone.YPOSITION + 385), 25, 'grey', 'left');
        Static.writeTextToCanvas(canvas, 'mark rutte"', (canvas.width / 20), (Phone.YPOSITION + 410), 25, 'grey', 'left');
        this.cat.render(ctx, canvas);
    }
}
//# sourceMappingURL=Phone8.js.map