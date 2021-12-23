import KeyListener from './KeyListener.js';
export default class Screen {
    keyboard;
    game;
    constructor(game) {
        this.game = game;
        this.keyboard = new KeyListener();
    }
    writeTextToCanvas(canvas, text, xCoordinate, yCoordinate, fontSize = 20, color = 'red', alignment = 'center') {
        const ctx = canvas.getContext('2d');
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
}
//# sourceMappingURL=Screen.js.map