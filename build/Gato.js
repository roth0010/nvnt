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
    constructor(phrase, xPosition, yPosition, game) {
        this.game = game;
        this.phrase = phrase;
        this.power = false;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.keyboard = new KeyListener();
        this.timer = 15;
        this.image = Static.loadNewImage('./assets/img/cat.png');
        this.image.height = this.game.getCanvasHeight() / 5;
        this.image.width = this.image.height * Gato.ASPECTRATIO;
    }
    processInput() {
        if (this.keyboard.isKeyDown(67) && this.timer >= 15) {
            this.timer = 0;
            this.power = !this.power;
        }
        else {
            this.timer += 1;
        }
    }
    render(ctx, canvas) {
        console.log('donde esta el gatito?');
        ctx.drawImage(this.image, this.xPosition, this.yPosition, this.image.width, this.image.height);
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