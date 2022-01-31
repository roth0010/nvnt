import Phone from './Phone.js';
import Static from './Static.js';
import Gato from './Gato.js';
export default class Phone4 extends Phone {
    constructor(game) {
        super(game);
        this.cat = new Gato('Hoe minder info, hoe beter!', this.game.getCanvasWidth() - Phone.CAT_PHONE_X_POSITION, this.game.getCanvasHeight() - Phone.CAT_PHONE_Y_POSITION, this.game);
    }
    processInput() {
        this.cat.processInput();
        if (this.wait >= Phone.WAIT_TIME) {
            if (this.keyboard.isKeyDown(49)) {
                this.answered = true;
                this.correct = false;
                this.game.setProfileInfo('I live in Middelburg');
                this.game.setFeedback('Je adres kan worden gebruikt voor identiteitsdiefstal of zelfs stalken!');
            }
            else if (this.keyboard.isKeyDown(50)) {
                this.answered = true;
                this.correct = true;
                this.game.setProfileInfo(' ');
            }
            else if (this.keyboard.isKeyDown(51)) {
                this.answered = true;
                this.correct = false;
                this.game.setProfileInfo(`Mijn echte naam is ${this.game.getMonsterName()}`);
                this.game.setFeedback('Als je je echte naam in je bio zet, is het net zo erg als je naam in je gebruikersnaam zetten.');
            }
            else if (this.keyboard.isKeyDown(52)) {
                this.answered = true;
                this.correct = true;
                this.game.setProfileInfo('Een grap');
            }
            if (this.answered === true) {
                if (this.correct === true) {
                    this.game.increaseScore(3);
                }
                else {
                    this.game.increaseMistakeScore(3);
                }
                this.levelPass = 1;
            }
        }
        else {
            this.wait += 1;
        }
    }
    render(ctx, canvas) {
        const background = Static.loadNewImage('./assets/img/levelOneBackground.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(this.image, 25, -50, this.image.width, this.image.height);
        this.game.renderHP(ctx, canvas, 12);
        Static.writeTextToCanvas(canvas, 'What is in your biography?', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'black');
        Static.writeTextToCanvas(canvas, '[1] Ik woon in Middelburg', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
        Static.writeTextToCanvas(canvas, '[2] Laat het leeg', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
        Static.writeTextToCanvas(canvas, `[3] Mijn echte naam is ${this.game.getMonsterName()}`, ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
        Static.writeTextToCanvas(canvas, '[4] Een grap', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
        this.cat.render(ctx, canvas);
        Static.writeTextToCanvas(canvas, 'je profiel:', (canvas.width / 20), (Phone.YPOSITION + 45), 40, 'white', 'left');
        let textYCoord = 0;
        for (let i = 0; i < 3; i++) {
            textYCoord += 120;
            Static.writeTextToCanvas(canvas, `${this.game.getProfileArray(i)}`, (canvas.width / 20), (Phone.YPOSITION + (45 + textYCoord)), 40, 'white', 'left');
            Static.writeTextToCanvas(canvas, `${this.game.getProfileInfo(i)}`, (canvas.width / 20), (Phone.YPOSITION + (95 + textYCoord)), 40, 'white', 'left');
        }
    }
}
//# sourceMappingURL=Phone4.js.map