import Screen from './Screen.js';
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
  private canvas: HTMLCanvasElement;

  private levels: Screen[];

  private engine: GameLoop;

  private score: number;

  private levelNumber: number;

  private monsterType: string;

  private ctx: CanvasRenderingContext2D;

  private monsterName: string;

  private goal: number;

  private taco: Taco;

  private chosenPost: string;

  private profileInfo: string[];

  private profileArray: string[];

  private catHat: number;

  private shop: Shop;

  private mistakeScore: number;

  private feedback: string[];

  /**
   * creates a new Game class
   *
   * @param canvas the canvas
   */
  public constructor(canvas: HTMLCanvasElement) {
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

  private setUp(): void {
    // Technically this should be 0, but it was added later and would cause more issues otherwise.
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

  /**
   * Tells the current screen to process input
   */
  public processInput(): void {
    this.levels[this.levelNumber].processInput();
  }

  /**
   * Updates the game
   *
   * Set levelPass to 0 to stay on the current level
   * Set levelPass to 1 to advance a level
   * Set levelPass to 2 to go back
   * Set other numbers to go to specific levels
   *
   * @param step This doesn't do anything, but it breaks if it's not here.
   * @returns false. Always false or it breaks.
   */
  public update(step: number): boolean {
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

  /**
   * renders the various aspects of the screen
   */
  public render(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.levels[this.levelNumber].render(this.ctx, this.canvas);
  }

  /**
   * sets the level
   *
   * @param level the level to be set
   */
  public setLevel(level: number): void {
    this.levelNumber = level;
  }

  /**
   * getter for taco
   *
   * @returns taco count
   */
  public getTaco(): number {
    return this.taco.getTaco();
  }

  /**
   * Getter for the Level Number
   *
   * @returns the current level number
   */
  public getIndex(): number {
    return this.levelNumber;
  }

  /**
   * getter for the score
   *
   * @returns the score
   */
  public getScore(): number {
    // console.log(this.score);
    return this.score;
  }

  /**
   * Getter for the height of the canvas
   *
   * @returns the height of the canvas
   */
  public getCanvasHeight(): number {
    return this.canvas.height;
  }

  /**
   * Getter for the width of the canvas
   *
   * @returns the width of the canvas
   */
  public getCanvasWidth(): number {
    return this.canvas.width;
  }

  /**
   * Getter for the goal variable
   *
   * @returns the amount of the goal
   */
  public getGoal(): number {
    return this.goal;
  }

  /**
   * Sets Goal to a new number
   *
   * @param number the new number to set goal to
   */
  public setGoal(number: number): void {
    this.goal = number;
  }

  /**
   * Sets the score to a specific amount
   *
   * @param score the new score to be set
   */
  public setScore(score: number): void {
    this.score = score;
  }

  /**
   * Sets the score to a specific amount. Use negatives to subtract.
   *
   * @param score the amount to add to the score
   */
  public increaseScore(score: number): void {
    this.score += score;
  }

  /**
   * a
   * @param mistakeScore the new score to be set
   */
  public setMistakeScore(mistakeScore: number): void {
    this.mistakeScore = mistakeScore;
  }

  /**
   * getter for the mistake score
   * @returns mistakeScore
   */
  public getMistakeScore() : number {
    return this.mistakeScore;
  }

  /**
   * a
   * @param mistakeScore the amount to add to the score
   */
  public increaseMistakeScore(mistakeScore: number): void {
    this.mistakeScore += mistakeScore;
  }

  // TODO always adjust this after adding new levels
  /**
   * Sets the game back a level, resetting levels previously attempted
   *
   * @param index the current level number
   */
  private setNewLevel(index: number): void {
    if (index === 6) {
      this.levels[1] = new Level1(this, this.shop);
      this.levels[2] = new Phone1(this);
      this.levels[3] = new Phone2(this);
      this.levels[4] = new Phone3(this);
      this.levels[5] = new Phone4(this);
      console.log(this.levelNumber);
      this.levelNumber = 1;
    } else if (index === 9) {
      this.levels[7] = new Level2(this, this.shop);
      this.levels[8] = new Phone5(this);
      this.levelNumber = 7;
    } else if (index === 14) {
      this.levels[10] = new Level3(this, this.shop);
      this.levels[11] = new Phone6(this);
      this.levels[12] = new Phone7(this);
      this.levels[13] = new Phone8(this);
      this.levelNumber = 10;
    } else if (index === 18) {
      this.levels[15] = new Level4(this, this.shop);
      this.levels[16] = new Phone9(this);
      this.levels[17] = new Phone10(this);
      this.levelNumber = 15;
    } else if (index === 23) {
      this.levels[19] = new Level5(this, this.shop);
      this.levels[20] = new Phone13(this);
      this.levels[21] = new Phone14(this);
      this.levels[22] = new Phone15(this);
      this.levelNumber = 19;
    }
  }

  /**
   * Resets the entire game, setting the level to the desired level.
   *
   * @param target the level to set the game to
   */
  private resetLevels(target: number): void {
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

  /**
   * resets the level screen to a box-standard screen
   */
  public setNewSelectScreen(): void {
    this.levels[0] = new SelectScreen(this);
  }

  /**
   * Sets the number corrosponding to a hat that the cat will wear
   *
   * @param number the new number to set the hat to
   */
  public setCatHat(number: number): void {
    this.catHat = number;
  }

  /**
   * returns the current number for the cat hat variable
   *
   * @returns the type of hat the cat will wear
   */
  public getCatHat(): number {
    return this.catHat;
  }

  /**
   * Sets the monster type
   *
   * @param type the type of monster
   */
  public setMonsterType(type: string): void {
    this.monsterType = type;
  }

  /**
   * Returns the type of monster
   *
   * @returns The type of monster
   */
  public getMonsterType(): string {
    return this.monsterType;
  }

  /**
   * Returns the species of the selected monster
   *
   * @returns the species of the selected monster
   */
  public getMonsterName(): string {
    return this.monsterName;
  }

  /**
   * sets the species of the selected monster
   *
   * @param customMonsterName the species you want the monster
   * to have(jorgen,davy,ogalybogaly,poppy,or whick)
   */
  public setMonsterName(customMonsterName: string): void {
    this.monsterName = customMonsterName;
  }

  /**
   * getter for the chosen photo
   *
   * @returns the chosen photo to post
   */
  public getChosenPost(): string {
    return this.chosenPost;
  }

  /**
   * setter for the chosen photo
   *
   * @param chosenPost the chosen photo to post
   */
  public setChosenPost(chosenPost: string): void {
    this.chosenPost = chosenPost;
  }

  /**
   * @param element the array number to return
   * @returns this.profileInfo array
   */
  public getProfileInfo(element: number): string {
    return this.profileInfo[element];
  }

  /**
   * setter for the chosenPost
   *
   * @param profileInfo the variable to add to the array
   */
  public setProfileInfo(profileInfo: string): void {
    // console.log(`${profileInfo} was added to array`);
    this.profileInfo.push(profileInfo);
  }

  /**
   * @param element the array number to return
   * @returns this.profileArray array
   */
  public getProfileArray(element: number): string {
    return this.profileArray[element];
  }

  /**
   * @param ctx canvas rendering context
   * @param canvas canvas element
   * @param totalScore the total score you can get for a level
   */
  public renderHP(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement,
    totalScore: number): void {
    const barXPos = ((canvas.width * 2) / 3) - 200;
    const barYPos = (canvas.height - 100);
    const barThickness = 7;
    const barHeight = 40;
    const barWidth = 400;
    const image = Static.loadNewImage(this.getMonsterType());

    if (this.getMonsterType() === './assets/img/whick.png') {
      image.height = canvas.height / 3;
      image.width = (canvas.height / 3) * Static.getMonsterAR(this.getMonsterType());
      ctx.drawImage(image, ((barXPos + (barWidth / 2)) - (image.width / 2)),
        (canvas.height / 1.3 - (image.height / 2)), image.width, image.height);
    } else {
      image.height = canvas.height / 2;
      image.width = (canvas.height / 2) * Static.getMonsterAR(this.getMonsterType());
      ctx.drawImage(image, ((barXPos + (barWidth / 2)) - (image.width / 2)),
        (canvas.height / 1.55 - (image.height / 2)), image.width, image.height);
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

    ctx.beginPath(); // the bar content
    ctx.lineWidth = 20;
    ctx.rect((barXPos + barThickness), (barYPos + barThickness),

      (barWidth - (barThickness * 2)) * (1 - (this.mistakeScore) / totalScore)

      , (barHeight - (barThickness * 2)));
    ctx.fillStyle = 'red';
    ctx.fill();
  }

  /**
   * getter for the feedback
   * @returns feedback
   * @param index the index of the string to return
   */
  public getFeedback() : string[] {
    return this.feedback;
  }

  /**
   * adds feedback to the array
   * @param userFeedback the feedback to add to the array
   */
  public setFeedback(userFeedback: string) : void {
    this.feedback.push(userFeedback);
  }

  /**
   * empties the feedback array
   */
  public clearFeedback() : void {
    this.feedback = [];
  }

  /**
   * getter for the levelNumber
   * @returns this.levelNumber
   */
  public getLevelNumber() : number {
    return this.levelNumber;
  }
}
