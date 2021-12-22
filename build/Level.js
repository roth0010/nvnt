import Screen from './Screen.js';
export default class Level extends Screen {
    levelPass;
    constructor() {
        super();
        this.levelPass = 0;
        this.score = 0;
    }
    update() {
        return this.levelPass;
    }
}
//# sourceMappingURL=Level.js.map