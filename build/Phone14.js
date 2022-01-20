import Phone from './Phone.js';
import Static from './Static.js';
import Gato from './Gato.js';
export default class Phone14 extends Phone {
    constructor(game) {
        super(game);
        this.cat = new Gato('What kind of account do you want to support?', this.game.getCanvasWidth() - 200, this.game.getCanvasHeight() - 200, this.game);
    }
    processInput() {
        this.cat.processInput();
        if (this.wait >= 15) {
            if (this.keyboard.isKeyDown(49)) {
                this.answered = true;
                this.correct = true;
            }
            else if (this.keyboard.isKeyDown(50)) {
                this.answered = true;
                this.correct = true;
            }
            else if (this.keyboard.isKeyDown(51)) {
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
        Static.writeTextToCanvas(canvas, 'What page will you follow?', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'black');
        Static.writeTextToCanvas(canvas, '[1] An account about politics', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
        Static.writeTextToCanvas(canvas, '[2] An account that posts a fluffy bunny once per day', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
        Static.writeTextToCanvas(canvas, '[3] An account thast posts posts bad rumours about your classmates', ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
        Static.writeTextToCanvas(canvas, '[4] An account that posts the same cheese sandwich every day', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
        Static.writeTextToCanvas(canvas, 'Would you like to', (canvas.width / 22), (Phone.YPOSITION + 45), 40, 'white', 'left');
        Static.writeTextToCanvas(canvas, 'follow these people?', (canvas.width / 22), (Phone.YPOSITION + 95), 40, 'white', 'left');
        this.cat.render(ctx, canvas);
        let a = 100;
        for (let i = 0; i < 4; i++) {
            a += 75;
            ctx.beginPath();
            ctx.rect((canvas.width / 35), (Phone.YPOSITION + a), 440, 70);
            ctx.strokeStyle = 'white';
            ctx.stroke();
            const nameArray = ['MonsterPoliticsReport', 'One_Bunny_Per_Day', 'HeltenUni_Rumours', 'ChandWhichPosting'];
            const bioArray = ['Current Political Information And Debates', 'One fluffy bunny per day, follow for more fluffyness! 🐇🐇🐇', 'Juicy rumours and gossip and about the class of Helten U...', 'chandwhich. [noun] most commonly, two slices of bread...'];
            Static.writeTextToCanvas(canvas, nameArray[i], (canvas.width / 25), (Phone.YPOSITION + a + 35), 25, 'white', 'left');
            Static.writeTextToCanvas(canvas, bioArray[i], (canvas.width / 25), (Phone.YPOSITION + a + 55), 15, 'grey', 'left');
        }
    }
}
//# sourceMappingURL=Phone14.js.map