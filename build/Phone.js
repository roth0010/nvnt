import Level from './Level.js';
import Static from './Static.js';
export default class Phone extends Level {
    static CAT_PHONE_Y_POSITION = 300;
    static CAT_PHONE_X_POSITION = 200;
    static WAIT_TIME = 20;
    static YPOSITION = 50;
    image;
    answered;
    correct;
    wait;
    cat;
    constructor(game) {
        super(game);
        this.correct = false;
        this.answered = false;
        this.wait = 0;
        this.image = Static.loadNewImage('./assets/img/Phone.png');
    }
}
//# sourceMappingURL=Phone.js.map