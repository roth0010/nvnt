import Screen from './Screen.js';
export default class Level extends Screen {
    levelPass;
    constructor(game) {
        super(game);
        console.log('sjehjtiawebvgtgoqyuwn');
        this.game.setScore(0);
        this.levelPass = 0;
    }
    update() {
        return this.levelPass;
    }
}
//# sourceMappingURL=Level.js.map