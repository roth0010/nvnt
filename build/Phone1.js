import Phone from './Phone.js';
export default class Phone1 extends Phone {
    constructor(game) {
        super(game);
    }
    processInput() {
        if (this.wait >= 15) {
            if (this.keyboard.isKeyDown(50)) {
                this.answered = true;
                this.correct = true;
            }
            else if (this.keyboard.isKeyDown(51)
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
        else {
            this.wait += 1;
        }
    }
    render(ctx, canvas) {
        ctx.drawImage(this.image, 25, -50, this.image.width, this.image.height);
        this.writeTextToCanvas(canvas, 'Filler Stuff', ((canvas.width * 2) / 3), canvas.height - 520, 42, 'red');
        this.writeTextToCanvas(canvas, '[1] Give them your credit card number Option', ((canvas.width * 2) / 3), canvas.height - 440, 30, 'black');
        this.writeTextToCanvas(canvas, '[2] Correct Option', ((canvas.width * 2) / 3), canvas.height - 360, 30, 'black');
        this.writeTextToCanvas(canvas, '[3] Sketchy Option', ((canvas.width * 2) / 3), canvas.height - 280, 30, 'black');
        this.writeTextToCanvas(canvas, '[4] Funny Option', ((canvas.width * 2) / 3), canvas.height - 200, 30, 'black');
    }
}
//# sourceMappingURL=Phone1.js.map