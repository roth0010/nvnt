import KeyListener from './KeyListener.js';
import Static from './Static.js';
export default class Gato {
    static HAT_WIDTH = 4;
    static ASPECTRATIO = 0.72933753;
    phrase;
    power;
    xPosition;
    yPosition;
    keyboard;
    timer;
    image;
    game;
    catHat;
    hat;
    hatYPosition;
    constructor(phrase, xPosition, yPosition, game) {
        this.game = game;
        this.phrase = phrase;
        this.power = false;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.keyboard = new KeyListener();
        this.timer = 45;
        this.image = Static.loadNewImage('./assets/img/cat.png');
        this.image.height = this.game.getCanvasHeight() / 3;
        this.image.width = this.image.height * Gato.ASPECTRATIO;
        this.hatYPosition = 0;
        this.update();
    }
    processInput() {
        if (this.keyboard.isKeyDown(67) && this.timer >= 15) {
            this.timer = 0;
            this.power = !this.power;
        }
        else {
            this.timer += 1;
        }
        this.update();
    }
    update() {
        this.catHat = this.game.getCatHat();
        if (this.catHat === 1) {
            this.hat = Static.loadNewImage('./assets/img/greenhat.png');
            this.hat.width = this.image.width / Gato.HAT_WIDTH;
            this.hat.height = this.hat.width * 0.77328;
            this.hatYPosition = 5;
        }
        else if (this.catHat === 2) {
            this.hat = Static.loadNewImage('./assets/img/springhat.png');
            this.hat.width = this.image.width / Gato.HAT_WIDTH;
            this.hat.height = this.hat.width * 0.49726;
            this.hatYPosition = this.hat.height / 2;
        }
        else if (this.catHat === 3) {
            this.hat = Static.loadNewImage('./assets/img/birthdayhat.png');
            this.hat.width = this.image.width / Gato.HAT_WIDTH;
            this.hat.height = this.hat.width * 1.7;
            this.hatYPosition = -this.hat.height / 2;
        }
        else if (this.catHat === 4) {
            this.hat = Static.loadNewImage('./assets/img/witchhat.png');
            this.hat.width = this.image.width / Gato.HAT_WIDTH;
            this.hat.height = this.hat.width * 0.76411;
            this.hatYPosition = 0;
        }
        else {
            this.hat = Static.loadNewImage('./assets/img/blank.png');
            this.hat.height = this.image.height / Gato.HAT_WIDTH;
            this.hat.width = 0;
            this.hatYPosition = 0;
        }
    }
    render(ctx, canvas) {
        ctx.drawImage(this.image, this.xPosition, this.yPosition, this.image.width, this.image.height);
        if (this.catHat !== 0) {
            ctx.drawImage(this.hat, this.xPosition + (this.image.width / 5), this.yPosition + this.hatYPosition, this.hat.width, this.hat.height);
        }
        if (this.power === true) {
            Static.writeTextToCanvas(canvas, `${this.phrase}`, this.xPosition - 39, this.yPosition - 39, 20, 'white');
            Static.writeTextToCanvas(canvas, `${this.phrase}`, this.xPosition - 40, this.yPosition - 40, 20, 'black');
        }
        else {
            Static.writeTextToCanvas(canvas, 'Press C for Cat Tips', this.xPosition - 41, this.yPosition - 41, 20, 'white');
            Static.writeTextToCanvas(canvas, 'Press C for Cat Tips', this.xPosition - 40, this.yPosition - 40, 20, 'black');
        }
    }
    setPosition(xPosition, yPosition) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
    }
    setPhrase(phrase) {
        this.phrase = phrase;
    }
}
//# sourceMappingURL=Gato.js.map