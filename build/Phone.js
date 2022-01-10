import Level from './Level.js';
import Static from './Static.js';
export default class Phone extends Level {
    image;
    constructor(game) {
        super(game);
        this.image = Static.loadNewImage('./assets/img/Phone.png');
    }
}
//# sourceMappingURL=Phone.js.map