import Static from './Static.js';
import KeyListener from './KeyListener.js';
import Screen from './Screen.js';
export default class StartScreen extends Screen {
    continue;
    count;
    ready;
    constructor(game) {
        super(game);
        this.continue = false;
        this.keyboard = new KeyListener();
        this.ready = false;
        this.count = 0;
    }
    processInput() {
        if (this.continue && this.keyboard.isKeyDown(83)) {
            this.ready = true;
        }
    }
    update() {
        if (this.count <= 1200) {
            this.count += 1;
            console.log(this.count);
        }
        if (this.continue && this.ready === true) {
            return 1;
        }
        return 0;
    }
    render(ctx, canvas) {
        const image = Static.loadNewImage('./assets/img/frame.png');
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        if (this.count > 0) {
            Static.writeTextToCanvas(canvas, 'Je bent een gelukkig monster dat aan het chillen is ', canvas.width / 2, (canvas.height * 2) / 10, 25, 'black');
            Static.writeTextToCanvas(canvas, 'wanneer je beste vriend vraagt of je de nieuwe sociale media app TACOCAT al hebt.', canvas.width / 2, (canvas.height * 5) / 20, 25, 'black');
        }
        if (this.count > 240) {
            Static.writeTextToCanvas(canvas, 'Over een paar dagen willen je vrienden een taco feest gooien ', canvas.width / 2, (canvas.height * 3) / 10, 25, 'black');
            Static.writeTextToCanvas(canvas, 'wat ze via de app gaan plannen.', canvas.width / 2, (canvas.height * 7) / 20, 25, 'black');
        }
        if (this.count > 480) {
            Static.writeTextToCanvas(canvas, 'Alleen ben je helemaal vergeten de app te downloaden!', canvas.width / 2, (canvas.height * 17) / 40, 25, 'black');
        }
        if (this.count > 720) {
            Static.writeTextToCanvas(canvas, 'In paniek en schaamte ren je naar het bos om een profiel aan te maken,', canvas.width / 2, (canvas.height * 5) / 10, 25, 'black');
            Static.writeTextToCanvas(canvas, 'maar je hebt geen idee hoe dit moet en raakt de weg kwijt.', canvas.width / 2, (canvas.height * 11) / 20, 25, 'black');
        }
        if (this.count > 960) {
            Static.writeTextToCanvas(canvas, 'Toevallig is er een aardige kat in de buurt, die je graag helpt.', canvas.width / 2, (canvas.height * 6) / 10, 25, 'black');
        }
        if (this.count >= 1200) {
            Static.writeTextToCanvas(canvas, 'Press S to Start!', canvas.width / 2, (canvas.height * 8) / 10, 30, 'black');
            this.continue = true;
        }
    }
}
//# sourceMappingURL=StartScreen.js.map