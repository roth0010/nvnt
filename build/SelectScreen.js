import Screen from './Screen.js';
import Static from './Static.js';
export default class SelectScreen extends Screen {
    selected;
    waluigi;
    davy;
    jorgen;
    ogalybogaly;
    poppy;
    whick;
    selectedMonster;
    constructor(game) {
        super(game);
        this.waluigi = Static.loadNewImage('./assets/img/Waluigi.png');
        this.davy = Static.loadNewImage('./assets/img/Davy.png');
        this.jorgen = Static.loadNewImage('./assets/img/Jorgen.png');
        this.ogalybogaly = Static.loadNewImage('./assets/img/Ogalybogaly.png');
        this.poppy = Static.loadNewImage('./assets/img/Poppy.png');
        this.whick = Static.loadNewImage('./assets/img/Whick.png');
        this.selected = false;
    }
    processInput() {
        if (this.selected === false) {
            if (this.keyboard.isKeyDown(49)) {
                this.game.setMonsterType('./assets/img/Davy.png');
                this.selected = true;
            }
            if (this.keyboard.isKeyDown(50)) {
                this.game.setMonsterType('./assets/img/Jorgen.png');
                this.selected = true;
            }
            if (this.keyboard.isKeyDown(51)) {
                this.game.setMonsterType('./assets/img/Ogalybogaly.png');
                this.selected = true;
            }
            if (this.keyboard.isKeyDown(52)) {
                this.game.setMonsterType('./assets/img/Poppy.png');
                this.selected = true;
            }
            if (this.keyboard.isKeyDown(53)) {
                this.game.setMonsterType('./assets/img/Whick.png');
                this.selected = true;
            }
        }
        if (this.selected === true) {
            if (this.keyboard.isKeyDown(69)) {
                this.game.setNewSelectScreen();
            }
        }
    }
    update() {
        if (this.selected === true && this.keyboard.isKeyDown(32)) {
            return 1;
        }
        return 0;
    }
    render(ctx, canvas) {
        if (this.selected === false) {
            this.writeTextToCanvas(canvas, 'Press the matching number to choose the monster', canvas.width / 2, 50, 30, 'black');
            ctx.drawImage(this.davy, canvas.width / 6 - this.davy.width / 2, canvas.height / 2 - this.davy.height / 2);
            this.writeTextToCanvas(canvas, '1: Wa', canvas.width / 6, canvas.height - 50, 30, 'black');
            ctx.drawImage(this.jorgen, (canvas.width * 2) / 6 - this.jorgen.width / 2, canvas.height / 2 - this.jorgen.height / 2);
            this.writeTextToCanvas(canvas, '2: Lu', (canvas.width * 2) / 6, canvas.height - 50, 30, 'black');
            ctx.drawImage(this.ogalybogaly, (canvas.width * 3) / 6 - this.ogalybogaly.width / 2, canvas.height / 2 - this.ogalybogaly.height / 2);
            this.writeTextToCanvas(canvas, '3: i', (canvas.width * 3) / 6, canvas.height - 50, 30, 'black');
            ctx.drawImage(this.poppy, (canvas.width * 4) / 6 - this.poppy.width / 2, canvas.height / 2 - this.poppy.height / 2);
            this.writeTextToCanvas(canvas, '4: gi', (canvas.width * 4) / 6, canvas.height - 50, 30, 'black');
            ctx.drawImage(this.whick, (canvas.width * 5) / 6 - this.whick.width / 2, canvas.height / 2 - this.whick.height / 2);
            this.writeTextToCanvas(canvas, '5: irfin#dnsa ei', (canvas.width * 5) / 6, canvas.height - 50, 30, 'black');
        }
        else if (this.selected === true) {
            this.writeTextToCanvas(canvas, 'Are you sure?', canvas.width / 2, 50, 30, 'black');
            this.writeTextToCanvas(canvas, 'Press the space bar to continue, press E to go back', canvas.width / 2, canvas.height - 50, 30, 'black');
            this.selectedMonster = Static.loadNewImage(this.game.getMonsterType());
            ctx.drawImage(this.selectedMonster, (canvas.width * 3) / 6 - this.selectedMonster.width / 2, canvas.height / 2 - this.selectedMonster.height / 2);
        }
    }
}
//# sourceMappingURL=SelectScreen.js.map