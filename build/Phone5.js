import Phone from './Phone.js';
import Static from './Static.js';
import Gato from './Gato.js';
export default class Phone5 extends Phone {
    constructor(game) {
        super(game);
        this.cat = new Gato('Not everyone on the internet is a good person!', this.game.getCanvasWidth() - 200, this.game.getCanvasHeight() - 200, this.game);
    }
    processInput() {
        this.cat.processInput();
        if (this.keyboard.isKeyDown(51)) {
            this.answered = true;
            this.correct = true;
        }
        else if (this.keyboard.isKeyDown(50)
            || this.keyboard.isKeyDown(49)
            || this.keyboard.isKeyDown(52)) {
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
    render(ctx, canvas) {
        const background = Static.loadNewImage('./assets/img/leveltwobackground.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(this.image, 25, -50, this.image.width, this.image.height);
        this.renderDM(ctx, canvas, 'raquish', './assets/img/scary.png', 'Could you transfer me money?', 'I promise i will pay you back', 'double the amount tomorrow');
        Static.writeTextToCanvas(canvas, 'How do you respond to this stranger?', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'black');
        Static.writeTextToCanvas(canvas, '[1] Give them your bank details', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
        Static.writeTextToCanvas(canvas, '[2] Share his account with all your friends', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
        Static.writeTextToCanvas(canvas, '[3] Block Them', ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
        Static.writeTextToCanvas(canvas, '[4] Have a normal conversation with them', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
        this.cat.render(ctx, canvas);
    }
    renderDM(ctx, canvas, sender, senderProfilePicture, receivedMessage, line2, line3, line4, line5) {
        const senderRenderedProfilePicture = Static.loadNewImage(senderProfilePicture);
        ctx.drawImage(senderRenderedProfilePicture, 55, 40, (this.image.width / 5), this.image.height / 10);
        const a = (arguments.length - 4);
        for (let i = 0; i < a; i++) {
            Static.writeTextToCanvas(canvas, (arguments[i + 4]), (Phone.YPOSITION + 40), (Phone.YPOSITION + (600 + (20 * i))), 20, 'white', 'left');
        }
        Static.writeTextToCanvas(canvas, sender, (canvas.width / 8), (Phone.YPOSITION + 45), 40, 'white', 'left');
    }
}
//# sourceMappingURL=Phone5.js.map