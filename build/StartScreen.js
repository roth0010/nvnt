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
            Static.writeTextToCanvas(canvas, 'You are a happy monster minding your own business when your best friend', canvas.width / 2, (canvas.height * 2) / 10, 25, 'black');
            Static.writeTextToCanvas(canvas, 'asks you if you have downloaded the new social media app TACOCAT.', canvas.width / 2, (canvas.height * 5) / 20, 25, 'black');
        }
        if (this.count > 240) {
            Static.writeTextToCanvas(canvas, 'In a few days everyone in your friend group is getting together for a taco party.', canvas.width / 2, (canvas.height * 3) / 10, 25, 'black');
            Static.writeTextToCanvas(canvas, 'and they are planning the party through the app.', canvas.width / 2, (canvas.height * 7) / 20, 25, 'black');
        }
        if (this.count > 480) {
            Static.writeTextToCanvas(canvas, 'You panic because you have not yet downloaded the app!', canvas.width / 2, (canvas.height * 17) / 40, 25, 'black');
        }
        if (this.count > 720) {
            Static.writeTextToCanvas(canvas, 'To hide your shame you run to a near by forest to get started on creating a profile,', canvas.width / 2, (canvas.height * 5) / 10, 25, 'black');
            Static.writeTextToCanvas(canvas, 'but you have no idea what you’re doing and are completely lost.', canvas.width / 2, (canvas.height * 11) / 20, 25, 'black');
        }
        if (this.count > 960) {
            Static.writeTextToCanvas(canvas, 'A wondering cat notices your struggles and offers to help whenever asked.', canvas.width / 2, (canvas.height * 6) / 10, 25, 'black');
        }
        if (this.count >= 1200) {
            Static.writeTextToCanvas(canvas, 'Press S to Start!', canvas.width / 2, (canvas.height * 8) / 10, 30, 'black');
            this.continue = true;
        }
    }
}
//# sourceMappingURL=StartScreen.js.map