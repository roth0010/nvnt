import Level1 from './Level1.js';
import Level2 from './Level2.js';
import GameLoop from './GameLoop.js';
import ScoreScreen from './ScoreScreen.js';
import SelectScreen from './SelectScreen.js';
import Phone5 from './Phone5.js';
import Phone1 from './Phone1.js';
import Phone2 from './Phone2.js';
import Phone3 from './Phone3.js';
import Phone4 from './Phone4.js';
import Level3 from './Level3.js';
import Phone6 from './Phone6.js';
import Level4 from './Level4.js';
import Level5 from './Level5.js';
import Phone7 from './Phone7.js';
import Phone8 from './Phone8.js';
import Phone9 from './Phone 9.js';
import Phone10 from './Phone 10.js';
import Phone13 from './Phone13.js';
import Phone15 from './Phone15.js';
import Phone14 from './Phone14.js';
import Taco from './Taco.js';
import VictoryScreen from './VictoryScreen.js';
import Shop from './Shop.js';
import Static from './Static.js';
import StartScreen from './StartScreen.js';
export default class Game {
    canvas;
    levels;
    engine;
    score;
    levelNumber;
    monsterType;
    ctx;
    monsterName;
    goal;
    taco;
    chosenPost;
    profileInfo;
    profileArray;
    catHat;
    shop;
    mistakeScore;
    feedback;
    constructor(canvas) {
        console.log('version 1.1.7');
        this.canvas = canvas;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.levels = [];
        this.score = 0;
        this.engine = new GameLoop(this);
        this.taco = new Taco();
        this.shop = new Shop(this.taco, this);
        this.levelNumber = -1;
        this.monsterType = '';
        this.monsterName = '';
        this.catHat = 0;
        this.goal = 0;
        this.mistakeScore = 0;
        this.profileInfo = [];
        this.feedback = [];
        this.profileArray = ['gebruikersnaam:', 'wachtwoord:', 'privacy:', 'biografie:'];
        this.setUp();
        this.engine.start();
    }
    setUp() {
        this.levels[-1] = new StartScreen(this);
        this.levels[0] = new SelectScreen(this);
        this.levels[1] = new Level1(this, this.shop);
        this.levels[2] = new Phone1(this);
        this.levels[3] = new Phone2(this);
        this.levels[4] = new Phone3(this);
        this.levels[5] = new Phone4(this);
        this.levels[6] = new ScoreScreen(this, this.taco);
        this.levels[7] = new Level2(this, this.shop);
        this.levels[8] = new Phone5(this);
        this.levels[9] = new ScoreScreen(this, this.taco);
        this.levels[10] = new Level3(this, this.shop);
        this.levels[11] = new Phone6(this);
        this.levels[12] = new Phone7(this);
        this.levels[13] = new Phone8(this);
        this.levels[14] = new ScoreScreen(this, this.taco);
        this.levels[15] = new Level4(this, this.shop);
        this.levels[16] = new Phone9(this);
        this.levels[17] = new Phone10(this);
        this.levels[18] = new ScoreScreen(this, this.taco);
        this.levels[19] = new Level5(this, this.shop);
        this.levels[20] = new Phone13(this);
        this.levels[21] = new Phone14(this);
        this.levels[22] = new Phone15(this);
        this.levels[23] = new ScoreScreen(this, this.taco);
        this.levels[24] = new VictoryScreen(this);
    }
    processInput() {
        this.levels[this.levelNumber].processInput();
    }
    update(step) {
        if (this.levels[this.levelNumber].update() === 1) {
            this.levelNumber += 1;
        }
        if (this.levels[this.levelNumber].update() === 2) {
            this.setNewLevel(this.levelNumber);
        }
        if (this.levels[this.levelNumber].update() === 3) {
            this.resetLevels(1);
        }
        if (this.levels[this.levelNumber].update() === 4) {
            this.resetLevels(2);
        }
        if (this.levels[this.levelNumber].update() === 5) {
            this.resetLevels(3);
        }
        if (this.levels[this.levelNumber].update() === 6) {
            this.resetLevels(4);
        }
        if (this.levels[this.levelNumber].update() === 7) {
            this.resetLevels(5);
        }
        return false;
    }
    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.levels[this.levelNumber].render(this.ctx, this.canvas);
    }
    setLevel(level) {
        this.levelNumber = level;
    }
    getTaco() {
        return this.taco.getTaco();
    }
    getIndex() {
        return this.levelNumber;
    }
    getScore() {
        return this.score;
    }
    getCanvasHeight() {
        return this.canvas.height;
    }
    getCanvasWidth() {
        return this.canvas.width;
    }
    getGoal() {
        return this.goal;
    }
    setGoal(number) {
        this.goal = number;
    }
    setScore(score) {
        this.score = score;
    }
    increaseScore(score) {
        this.score += score;
    }
    setMistakeScore(mistakeScore) {
        this.mistakeScore = mistakeScore;
    }
    getMistakeScore() {
        return this.mistakeScore;
    }
    increaseMistakeScore(mistakeScore) {
        this.mistakeScore += mistakeScore;
    }
    setNewLevel(index) {
        if (index === 6) {
            this.levels[1] = new Level1(this, this.shop);
            this.levels[2] = new Phone1(this);
            this.levels[3] = new Phone2(this);
            this.levels[4] = new Phone3(this);
            this.levels[5] = new Phone4(this);
            console.log(this.levelNumber);
            this.levelNumber = 1;
        }
        else if (index === 9) {
            this.levels[7] = new Level2(this, this.shop);
            this.levels[8] = new Phone5(this);
            this.levelNumber = 7;
        }
        else if (index === 14) {
            this.levels[10] = new Level3(this, this.shop);
            this.levels[11] = new Phone6(this);
            this.levels[12] = new Phone7(this);
            this.levels[13] = new Phone8(this);
            this.levelNumber = 10;
        }
        else if (index === 18) {
            this.levels[15] = new Level4(this, this.shop);
            this.levels[16] = new Phone9(this);
            this.levels[17] = new Phone10(this);
            this.levelNumber = 15;
        }
        else if (index === 23) {
            this.levels[19] = new Level5(this, this.shop);
            this.levels[20] = new Phone13(this);
            this.levels[21] = new Phone14(this);
            this.levels[22] = new Phone15(this);
            this.levelNumber = 19;
        }
    }
    resetLevels(target) {
        if (target <= 5) {
            this.levels[19] = new Level5(this, this.shop);
            this.levels[20] = new Phone13(this);
            this.levels[21] = new Phone14(this);
            this.levels[22] = new Phone15(this);
            this.levels[23] = new ScoreScreen(this, this.taco);
            this.levels[24] = new VictoryScreen(this);
            this.levelNumber = 19;
        }
        if (target <= 4) {
            this.levels[15] = new Level4(this, this.shop);
            this.levels[16] = new Phone9(this);
            this.levels[17] = new Phone10(this);
            this.levels[18] = new ScoreScreen(this, this.taco);
            this.levelNumber = 15;
        }
        if (target <= 3) {
            this.levels[10] = new Level3(this, this.shop);
            this.levels[11] = new Phone6(this);
            this.levels[12] = new Phone7(this);
            this.levels[13] = new Phone8(this);
            this.levels[14] = new ScoreScreen(this, this.taco);
            this.levelNumber = 10;
        }
        if (target <= 2) {
            this.levels[7] = new Level2(this, this.shop);
            this.levels[8] = new Phone5(this);
            this.levels[9] = new ScoreScreen(this, this.taco);
            this.levelNumber = 7;
        }
        if (target === 1) {
            this.levels[1] = new Level1(this, this.shop);
            this.levels[2] = new Phone1(this);
            this.levels[3] = new Phone2(this);
            this.levels[4] = new Phone3(this);
            this.levels[5] = new Phone4(this);
            this.levels[6] = new ScoreScreen(this, this.taco);
            this.levelNumber = 1;
        }
    }
    setNewSelectScreen() {
        this.levels[0] = new SelectScreen(this);
    }
    setCatHat(number) {
        this.catHat = number;
    }
    getCatHat() {
        return this.catHat;
    }
    setMonsterType(type) {
        this.monsterType = type;
    }
    getMonsterType() {
        return this.monsterType;
    }
    getMonsterName() {
        return this.monsterName;
    }
    setMonsterName(customMonsterName) {
        this.monsterName = customMonsterName;
    }
    getChosenPost() {
        return this.chosenPost;
    }
    setChosenPost(chosenPost) {
        this.chosenPost = chosenPost;
    }
    getProfileInfo(element) {
        return this.profileInfo[element];
    }
    setProfileInfo(profileInfo) {
        this.profileInfo.push(profileInfo);
    }
    getProfileArray(element) {
        return this.profileArray[element];
    }
    renderHP(ctx, canvas, totalScore) {
        const barXPos = ((canvas.width * 2) / 3) - 200;
        const barYPos = (canvas.height - 100);
        const barThickness = 7;
        const barHeight = 40;
        const barWidth = 400;
        const image = Static.loadNewImage(this.getMonsterType());
        if (this.getMonsterType() === './assets/img/whick.png') {
            image.height = canvas.height / 3;
            image.width = (canvas.height / 3) * Static.getMonsterAR(this.getMonsterType());
            ctx.drawImage(image, ((barXPos + (barWidth / 2)) - (image.width / 2)), (canvas.height / 1.3 - (image.height / 2)), image.width, image.height);
        }
        else {
            image.height = canvas.height / 2;
            image.width = (canvas.height / 2) * Static.getMonsterAR(this.getMonsterType());
            ctx.drawImage(image, ((barXPos + (barWidth / 2)) - (image.width / 2)), (canvas.height / 1.55 - (image.height / 2)), image.width, image.height);
        }
        ctx.beginPath();
        ctx.lineWidth = 20;
        ctx.rect((barXPos), (barYPos), (barWidth), (barHeight));
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = barThickness;
        ctx.rect(barXPos, barYPos, barWidth, barHeight);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.beginPath();
        ctx.lineWidth = 20;
        ctx.rect((barXPos + barThickness), (barYPos + barThickness), (barWidth - (barThickness * 2)) * (1 - (this.mistakeScore) / totalScore), (barHeight - (barThickness * 2)));
        ctx.fillStyle = 'red';
        ctx.fill();
    }
    getFeedback() {
        return this.feedback;
    }
    setFeedback(userFeedback) {
        this.feedback.push(userFeedback);
    }
    clearFeedback() {
        this.feedback = [];
    }
    getLevelNumber() {
        return this.levelNumber;
    }
}
//# sourceMappingURL=Game.js.map