import KeyListener from './KeyListener.js';
export default class Screen {
    score;
    keyboard;
    constructor() {
        this.keyboard = new KeyListener();
    }
    getScore() {
        return this.score;
    }
    increaseScore(amount) {
        this.score += amount;
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