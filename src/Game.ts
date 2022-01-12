import Screen from './Screen.js';
import Level1 from './Level1.js';
import Level2 from './Level2.js';
import GameLoop from './GameLoop.js';
// import Waluigi from './Waluigi.js';
import Player from './Player.js';
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
import Phone9 from './Phone9.js';
import Phone10 from './Phone10.js';
import Phone11 from './Phone11.js';
import Phone12 from './Phone12.js';




export default class Game {
  private canvas: HTMLCanvasElement;

  private levels: Screen[];

  private engine: GameLoop;

  private score: number;

  private levelNumber: number;

  private players: Player[];

  private monsterType: string;

  private ctx: CanvasRenderingContext2D;

  private monsterName: string;

  private goal: number;

  /**
   * creates a new Game class
   *
   * @param canvas the canvas
   */
  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.levels = [];
    this.score = 0;
    this.engine = new GameLoop(this);
    this.levelNumber = 0;
    // this.players = [];
    this.monsterType = '';
    this.monsterName = '';
    this.goal = 0;
    this.setUp();
    // this.players.push(new Waluigi(this.canvas.width / 2, this.canvas.height / 2));
    this.engine.start();
  }

  private setUp(): void {
    // This first one should be a monster selection screen
    this.levels[0] = new SelectScreen(this);
    this.levels[1] = new Level1(this);
    this.levels[2] = new Phone1(this);
    this.levels[3] = new Phone2(this);
    this.levels[4] = new Phone3(this);
    this.levels[5] = new Phone4(this);
    this.levels[6] = new ScoreScreen(this);
    this.levels[7] = new Level2(this);
    this.levels[8] = new Phone5(this);
    this.levels[9] = new ScoreScreen(this);
    this.levels[10] = new Level3(this);
    this.levels[11] = new Phone6(this);
    this.levels[12] = new Phone7(this);
    this.levels[13] = new Phone8(this);
    this.levels[14] = new ScoreScreen(this);
    this.levels[15] = new Level4(this);
    this.levels[16] = new ScoreScreen(this);
    this.levels[17] = new Level5(this);
    this.levels[18] = new ScoreScreen(this);
  }

  /**
   * Tells the current screen to process input
   */
  public processInput(): void {
    console.log(this.levelNumber);
    this.levels[this.levelNumber].processInput();
    // console.log(this.levelNumber);
  }

  /**
   * Updates the game
   *
   * Set levelPass to 0 to stay on the current level
   * Set levelPass to 1 to advance a level
   * Set levelPass to 2 to go back two levels (level2 only)
   * set levelPass to 3 to go back five levels (level1 only)
   *
   * @param step I don't really know yet tbh
   * @returns false. Always false or it breaks.
   */
  public update(step: number): boolean {
    // console.log(this.score);
    if (this.levels[this.levelNumber].update() === 1) {
      this.setLevel(this.levelNumber + 1);
    }
    if (this.levels[this.levelNumber].update() === 2) {
      this.setNewLevel(this.levelNumber - 2);
    }
    if (this.levels[this.levelNumber].update() === 3) {
      this.setNewLevel(1);
    }
    return false;
  }

  /**
   * renders the various aspects of the screen
   */
  public render(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.levels[this.levelNumber].render(this.ctx, this.canvas);
    // this.players.forEach((player) => {
    //   player.render(this.ctx);
    // });
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

  // TODO always adjust this after adding new levels
  private setNewLevel(index: number): void {
    if (index === 1) {
      this.levels[1] = new Level1(this);
      this.levels[2] = new Phone1(this);
      this.levels[3] = new Phone2(this);
      this.levels[4] = new Phone3(this);
      this.levels[5] = new Phone4(this);
    } else if (index === 7) {
      this.levels[7] = new Level2(this);
      this.levels[8] = new Phone5(this);
    } else if (index === 10) {
      this.levels[10] = new Level3(this);
      this.levels[11] = new Phone6(this);
    } else if (index === 13) {
      this.levels[13] = new Level4(this);
      this.levels[14] = new Phone7(this);
    } else if (index === 16) {
      this.levels[16] = new Level5(this);
      this.levels[17] = new Phone8(this);
    }
    this.levelNumber = index;
  }

  /**
   * resets the level screen to a box-standard screen
   */
  public setNewSelectScreen(): void {
    this.levels[0] = new SelectScreen(this);
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
}
