import KeyListener from './KeyListener.js';
export default class Level {
    keyboard;
    levelPass;
    constructor() {
        this.keyboard = new KeyListener();
        this.levelPass = false;
    }
    update() {
        return this.levelPass;
    }
}
//# sourceMappingURL=Level.js.map