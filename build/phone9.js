import Phone from './Phone.js';
import Static from './Static.js';
import Gato from './Gato.js';
export default class Phone9 extends Phone {
    constructor(game) {
        super(game);
        this.cat = new Gato('hallo', this.game.getCanvasWidth() - 200, this.game.getCanvasHeight() - 200, this.game);
    }
    processInput() {
        this.cat.processInput();
        if (this.wait >= 15) {
            if (this.keyboard.isKeyDown(50)) {
                this.game.setChosenPost('./assets/img/levelOneBackground.png');
                console.log(`player chose ${this.game.getChosenPost()}`);
                this.answered = true;
                this.correct = true;
            }
            else if (this.keyboard.isKeyDown(49)) {
                this.game.setChosenPost(this.game.getMonsterType());
                console.log(`player chose ${this.game.getChosenPost()}`);
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
        Static.writeTextToCanvas(canvas, 'Which photo will you post?', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'red');
        Static.writeTextToCanvas(canvas, '[1] A photo of yourself', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
        Static.writeTextToCanvas(canvas, '[2] A photo of the forest', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
        this.cat.render(ctx, canvas);
        Static.writeTextToCanvas(canvas, 'Choose from gallery', (canvas.width / 20), (Phone.YPOSITION + 45), 40, 'white', 'left');
        Static.writeTextToCanvas(canvas, 'to post:', (canvas.width / 20), (Phone.YPOSITION + 85), 40, 'white', 'left');
        ctx.beginPath();
        ctx.rect((canvas.width / 35), (Phone.YPOSITION + 150), 440, 250);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.beginPath();
        ctx.rect((canvas.width / 35), (Phone.YPOSITION + 410), 440, 250);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        let a = Static.loadNewImage(this.game.getMonsterType());
        ctx.drawImage(a, 220, (Phone.YPOSITION + 180), (this.image.width / 5), this.image.height / 5);
        a = Static.loadNewImage('./assets/img/levelOneBackground.png');
        ctx.drawImage(a, 55, 460, 440, 250);
    }
}
//# sourceMappingURL=Phone9.js.map