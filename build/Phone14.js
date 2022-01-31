import Phone from './Phone.js';
import Static from './Static.js';
import Gato from './Gato.js';
export default class Phone14 extends Phone {
    constructor(game) {
        super(game);
        this.cat = new Gato('Welk account vind je er goed uitzien?', this.game.getCanvasWidth() - Phone.CAT_PHONE_X_POSITION, this.game.getCanvasHeight() - Phone.CAT_PHONE_Y_POSITION, this.game);
    }
    processInput() {
        this.cat.processInput();
        if (this.wait >= Phone.WAIT_TIME) {
            if (this.keyboard.isKeyDown(49)) {
                this.answered = true;
                this.correct = true;
            }
            else if (this.keyboard.isKeyDown(50)) {
                this.answered = true;
                this.correct = true;
            }
            else if (this.keyboard.isKeyDown(51)) {
                this.game.setFeedback('Hoe verleidelijk ook, cyberpesten hoort niet aangemoedigd te worden');
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
        const image = Static.loadNewImage('./assets/img/levelFiveBackground.png');
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(this.image, 25, -50, this.image.width, this.image.height);
        this.game.renderHP(ctx, canvas, 9);
        Static.writeTextToCanvas(canvas, 'Wie ga je volgen?', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'black');
        Static.writeTextToCanvas(canvas, '[1] Een profiel met politieke posts', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
        Static.writeTextToCanvas(canvas, '[2] Een profiel dat elke dag een schattig konijn post', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
        Static.writeTextToCanvas(canvas, '[3] Een profiel dat leugens verspreid over je klasgenoten', ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
        Static.writeTextToCanvas(canvas, '[4] Een profiel dat elke dag dezelfde tosti post', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
        Static.writeTextToCanvas(canvas, 'Zou je deze ', (canvas.width / 22), (Phone.YPOSITION + 45), 40, 'white', 'left');
        Static.writeTextToCanvas(canvas, 'mensen willen volgen?', (canvas.width / 22), (Phone.YPOSITION + 95), 40, 'white', 'left');
        this.cat.render(ctx, canvas);
        let a = 100;
        for (let i = 0; i < 4; i++) {
            a += 75;
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.rect((canvas.width / 35), (Phone.YPOSITION + a), 440, 70);
            ctx.strokeStyle = 'white';
            ctx.stroke();
            const nameArray = ['MonsterPoliticsReport', 'One_Bunny_Per_Day', 'HeltenUni_Rumours', 'ChandWhichPosting'];
            const bioArray = ['De actuele politieke gebeurtenissen en debatten', 'Elke dag een schattig konijn, volg ons voor cuteness overload!', ' De nieuwste roddels van Erasmus Uni ', 'Toasti. Meestal twee sneetjes brood…'];
            Static.writeTextToCanvas(canvas, nameArray[i], (canvas.width / 25), (Phone.YPOSITION + a + 35), 25, 'white', 'left');
            Static.writeTextToCanvas(canvas, bioArray[i], (canvas.width / 25), (Phone.YPOSITION + a + 55), 15, 'grey', 'left');
        }
    }
}
//# sourceMappingURL=Phone14.js.map