import Screen from './Screen.js';
import Static from './Static.js';
export default class ScoreScreen extends Screen {
    levelPass;
    taco;
    addTaco;
    constructor(game, taco) {
        super(game);
        this.levelPass = 0;
        this.taco = taco;
        this.addTaco = false;
    }
    processInput() {
        if (this.game.getScore() < this.game.getGoal()) {
            this.levelPass = 2;
        }
        else if (this.game.getScore() >= this.game.getGoal()) {
            if (this.addTaco === false) {
                this.taco.increaseTaco(this.game.getScore() * 100);
                this.addTaco = true;
            }
            this.levelPass = 1;
        }
    }
    update() {
        if (this.keyboard.isKeyDown(82) && this.levelPass === 2) {
            this.game.setScore(0);
            this.game.setMistakeScore(0);
            this.game.clearFeedback();
            return this.levelPass;
        }
        if (this.levelPass === 1 && this.keyboard.isKeyDown(83)) {
            this.game.setScore(0);
            this.game.setMistakeScore(0);
            this.game.clearFeedback();
            return this.levelPass;
        }
        return 0;
    }
    render(ctx, canvas) {
        Static.writeTextToCanvas(canvas, `Je Score: ${this.game.getScore()} points`, canvas.width / 2, ((canvas.height / 2) - 300), 30, 'Red');
        Static.writeTextToCanvas(canvas, `totaalaantal taco's: ${this.taco.getTaco()}`, canvas.width / 2, ((canvas.height / 2) - 250), 25, 'black');
        const feedbackArray = this.game.getFeedback();
        if (this.game.getMistakeScore() !== 0 && this.game.getLevelNumber() !== 5) {
            Static.writeTextToCanvas(canvas, 'Hier is wat advies voor als je het nog eens wilt proberen:', canvas.width / 2, (canvas.height / 2) - 50, 30, 'Black');
            for (let i = 0; i < this.game.getFeedback().length;) {
                Static.writeTextToCanvas(canvas, feedbackArray[i], canvas.width / 2, (canvas.height / 2) + (i * 40), 20, 'Black');
                i += 1;
            }
        }
        if (this.levelPass === 2) {
            Static.writeTextToCanvas(canvas, 'Je hebt niet genoeg punten om verder te gaan, druk op R om opnieuw te beginnen.', canvas.width / 2, ((canvas.height / 2) - 350), 30, 'Black');
            Static.writeTextToCanvas(canvas, 'Je kunt beter dan dit, druk op R om opnieuw te beginnen', canvas.width / 2, (canvas.height / 2) + 200, 30, 'Black');
        }
        else if (this.levelPass === 1) {
            Static.writeTextToCanvas(canvas, 'je hebt genoeg punten om door te gaan! druk op S voor het volgende level', canvas.width / 2, (canvas.height / 2) - 350, 30, 'Black');
        }
    }
}
//# sourceMappingURL=ScoreScreen.js.map