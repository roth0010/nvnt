import Screen from './Screen.js';
export default class Level extends Screen {
    static CAT_Y_POSITION = 300;
    static CAT_X_POSITION = 200;
    levelPass;
    shop;
    constructor(game) {
        super(game);
        this.game.setScore(0);
        this.levelPass = 0;
    }
    update() {
        return this.levelPass;
    }
}
//# sourceMappingURL=Level.js.map