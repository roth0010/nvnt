import Phone from './Phone.js';
export default class Phone2 extends Phone {
    processInput() {
        if (this.keyboard.isKeyDown(65)) {
            this.game.setScore(2);
            this.levelPass = 1;
        }
    }
    render(ctx, canvas) {
        ctx.drawImage(this.image, (canvas.width / 100), canvas.width / 100 - 50, this.image.width, this.image.height);
        this.writeTextToCanvas(canvas, 'Press A to pass the level', canvas.width / 2, 50, 30, 'black');
    }
}
//# sourceMappingURL=Phone2.js.map