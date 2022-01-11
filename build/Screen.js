import KeyListener from './KeyListener.js';
export default class Screen {
    keyboard;
    game;
    constructor(game) {
        this.game = game;
        this.keyboard = new KeyListener();
    }
}
//# sourceMappingURL=Screen.js.map