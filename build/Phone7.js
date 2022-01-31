import Phone from './Phone.js';
import Static from './Static.js';
import Gato from './Gato.js';
export default class Phone7 extends Phone {
    constructor(game) {
        super(game);
        this.cat = new Gato('Ken je deze persoon?', this.game.getCanvasWidth() - Phone.CAT_PHONE_X_POSITION, this.game.getCanvasHeight() - Phone.CAT_PHONE_Y_POSITION, this.game);
    }
    processInput() {
        this.cat.processInput();
        if (this.wait >= Phone.WAIT_TIME) {
            if (this.keyboard.isKeyDown(49)) {
                this.game.setFeedback('You should always be wary of strangers, and spamming messages may mean this person has bad intentions');
                this.answered = true;
                this.correct = false;
            }
            else if (this.keyboard.isKeyDown(50)) {
                this.answered = true;
                this.correct = true;
            }
            else if (this.keyboard.isKeyDown(51)) {
                this.game.setFeedback('You should always be wary of strangers, and spamming messages may mean this person has bad intentions');
                this.answered = true;
                this.correct = false;
            }
            else if (this.keyboard.isKeyDown(52)) {
                this.answered = true;
                this.correct = true;
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
        const background = Static.loadNewImage('./assets/img/levelThreeBackground.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(this.image, 25, -50, this.image.width, this.image.height);
        this.game.renderHP(ctx, canvas, 9);
        Static.writeTextToCanvas(canvas, 'Een onbekende heeft een vriendschapsverzoek', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'white');
        Static.writeTextToCanvas(canvas, ' gestuurd en spamt je DM`s!', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 42, 'white');
        Static.writeTextToCanvas(canvas, '[1] Zeg dat hij hiermee moet stoppen', ((canvas.width * 2) / 3), Phone.YPOSITION + 90, 25, 'black');
        Static.writeTextToCanvas(canvas, '[2] Negeer het verzoek', ((canvas.width * 2) / 3), Phone.YPOSITION + 130, 25, 'black');
        Static.writeTextToCanvas(canvas, '[3] Accepteer het verzoek', ((canvas.width * 2) / 3), Phone.YPOSITION + 170, 25, 'black');
        Static.writeTextToCanvas(canvas, '[4] Blokkeer', ((canvas.width * 2) / 3), Phone.YPOSITION + 210, 25, 'black');
        Static.writeTextToCanvas(canvas, 'Je hebt 1 verzoek', (canvas.width / 20), (Phone.YPOSITION + 45), 40, 'white', 'left');
        Static.writeTextToCanvas(canvas, 'van:', (canvas.width / 20), (Phone.YPOSITION + 90), 40, 'white', 'left');
        this.cat.render(ctx, canvas);
        ctx.drawImage(Static.loadNewImage('./assets/img/scary.png'), (canvas.width / 10), (Phone.YPOSITION + 150), 150, 150);
        Static.writeTextToCanvas(canvas, 'RaquishBoss563', (canvas.width / 15), (Phone.YPOSITION + 345), 40, 'white', 'left');
        Static.writeTextToCanvas(canvas, 'bio: "don ka shendi akem zalec"', (canvas.width / 15), (Phone.YPOSITION + 385), 25, 'grey', 'left');
    }
}
//# sourceMappingURL=Phone7.js.map