import Phone from './Phone.js';
import Static from './Static.js';
import Gato from './Gato.js';
export default class Phone13 extends Phone {
    constructor(game) {
        super(game);
        this.cat = new Gato('Niet iedereen is eerlijk op het internet', this.game.getCanvasWidth() - Phone.CAT_PHONE_X_POSITION, this.game.getCanvasHeight() - Phone.CAT_PHONE_Y_POSITION, this.game);
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
                this.game.setFeedback('Als je een nep nieuws account volgt, weet je op een duur de waarheid niet meer');
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
        Static.writeTextToCanvas(canvas, '[1] Je moeder', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
        Static.writeTextToCanvas(canvas, '[2] Een onbekende van school', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
        Static.writeTextToCanvas(canvas, '[3] Een profiel dat zegt dat klimaatverandering niet echt is', ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
        Static.writeTextToCanvas(canvas, '[4] Je favoriete influencer', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
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
            const nameArray = ['Jolinda_mnst', 'CarolinL0ve', 'W4KEUP2F4K3S', 'KylePranksOfficial'];
            const bioArray = ['Trotse mama van twee zonen! ', 'Student aan de Erasmus Uni. ✨live laugh love✨', ' Vogels zijn een product van de overheid, open je ogen! Ze stoppen hex...', 'Monstuber, Prankster, Monsterwereld burger, 24, draagt bij… '];
            Static.writeTextToCanvas(canvas, nameArray[i], (canvas.width / 25), (Phone.YPOSITION + a + 35), 25, 'white', 'left');
            Static.writeTextToCanvas(canvas, bioArray[i], (canvas.width / 25), (Phone.YPOSITION + a + 55), 15, 'grey', 'left');
        }
    }
}
//# sourceMappingURL=Phone13.js.map