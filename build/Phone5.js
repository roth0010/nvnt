import Phone from './Phone.js';
export default class Phone5 extends Phone {
    constructor(game) {
        super(game);
        this.answered = false;
        this.correct = true;
    }
    processInput() {
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
        ctx.drawImage(this.image, 25, -50, this.image.width, this.image.height);
        this.writeTextToCanvas(canvas, 'Filler Stuff', ((canvas.width * 2) / 3), canvas.height - 520, 42, 'red');
        this.writeTextToCanvas(canvas, '[1] Sketchy Option', ((canvas.width * 2) / 3), canvas.height - 440, 30, 'black');
        this.writeTextToCanvas(canvas, '[2] Funny Option', ((canvas.width * 2) / 3), canvas.height - 360, 30, 'black');
        this.writeTextToCanvas(canvas, '[3] Correct Option', ((canvas.width * 2) / 3), canvas.height - 280, 30, 'black');
        this.writeTextToCanvas(canvas, '[4] Give them your credit card number Option', ((canvas.width * 2) / 3), canvas.height - 200, 30, 'black');
    }
}
//# sourceMappingURL=Phone5.js.map