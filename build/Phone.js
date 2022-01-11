import Level from './Level.js';
import Static from './Static.js';
export default class Phone extends Level {
    image;
    answered;
    correct;
    wait;
    static YPOSITION = 50;
    cat;
    constructor(game) {
        super(game);
        this.correct = false;
        this.answered = false;
        this.wait = 0;
        console.log('tests');
        this.image = Static.loadNewImage('./assets/img/Phone.png');
    }
}
//# sourceMappingURL=Phone.js.map