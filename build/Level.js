import KeyListener from './KeyListener.js';
export default class Level {
    keyboard;
    constructor() {
        this.keyboard = new KeyListener();
    }
    update() {
        let levelUp = false;
        levelUp = this.checkLevelUp();
        return levelUp;
    }
}
//# sourceMappingURL=Level.js.map