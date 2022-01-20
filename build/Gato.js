import KeyListener from './KeyListener.js';
import Static from './Static.js';
export default class Gato {
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
    constructor(phrase, xPosition, yPosition, game) {
        this.game = game;
        this.phrase = phrase;
        this.power = false;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.keyboard = new KeyListener();
        this.timer = 45;
        this.image = Static.loadNewImage('./assets/img/cat.png');
        this.image.height = this.game.getCanvasHeight() / 5;
        this.image.width = this.image.height * Gato.ASPECTRATIO;
        this.catHat = this.game.getCatHat();
    }
    processInput() {
        if (this.keyboard.isKeyDown(67) && this.timer >= 15) {
            this.timer = 0;
            this.power = !this.power;
        }
        else {
            this.timer += 1;
        }
        this.catHat = this.game.getCatHat();
        if (this.catHat === 1) {
            this.hat = Static.loadNewImage('./assets/img/greenhat.png');
        }
        else if (this.catHat === 2) {
            this.hat = Static.loadNewImage('./assets/img/springhat.png');
        }
        else if (this.catHat === 3) {
            this.hat = Static.loadNewImage('./assets/img/birthdayhat.png');
        }
        else if (this.catHat === 4) {
            this.hat = Static.loadNewImage('./assets/img/witchhat.png');
        }
    }
    render(ctx, canvas) {
        ctx.drawImage(this.image, this.xPosition, this.yPosition, this.image.width, this.image.height);
        if (this.catHat !== 0) {
            ctx.drawImage(this.hat, this.xPosition - 20, this.yPosition - 5, this.hat.width, this.hat.height);
        }
        if (this.power === true) {
            Static.writeTextToCanvas(canvas, `${this.phrase}`, this.xPosition - 40, this.yPosition - 40, 20, 'black');
        }
        else {
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