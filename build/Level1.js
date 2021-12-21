import Level from './Level.js';
export default class Level1 extends Level {
    pointlessVariable;
    constructor() {
        super();
        this.pointlessVariable = false;
    }
    checkLevelUp() {
        if (this.keyboard.isKeyDown(32)) {
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=Level1.js.map