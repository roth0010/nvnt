import Screen from './Screen.js';
import Level1 from './Level1.js';
import Level2 from './Level2.js';
import GameLoop from './GameLoop.js';
// import Waluigi from './Waluigi.js';
import Player from './Player.js';
import ScoreScreen from './ScoreScreen.js';
import SelectScreen from './SelectScreen.js';

export default class Game {
  private canvas: HTMLCanvasElement;

  private levels: Screen[];

  private engine: GameLoop;

  private score: number;

  private levelNumber: number;

  private players: Player[];

  private monsterType: string;

  private ctx: CanvasRenderingContext2D;

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
    this.setUp();
    // this.players.push(new Waluigi(this.canvas.width / 2, this.canvas.height / 2));
    this.engine.start();
  }

  private setUp(): void {
    // This first one should be a monster selection screen
    this.levels[0] = new SelectScreen(this);
    this.levels[1] = new Level1(this);
    this.levels[2] = new ScoreScreen(this);
    this.levels[3] = new Level2(this);
    this.levels[4] = new ScoreScreen(this);
  }

  /**
   * Tells the current screen to process input
   */
  public processInput(): void {
    this.levels[this.levelNumber].processInput();
    // console.log(this.levelNumber);
  }

  /**
   * Updates the game
   *
   * @param step I don't really know yet tbh
   * @returns false. Always false or it breaks.
   */
  public update(step: number): boolean {
    console.log(this.score);
    if (this.levels[this.levelNumber].update() === 1) {
      this.setLevel(this.levelNumber + 1);
    }
    if (this.levels[this.levelNumber].update() === 2) {
      this.setNewLevel(this.levelNumber - 1);
    }
    return false;
  }

  /**
   * buzz off, it's not implemented yet.
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
   * getter for the score
   *
   * @returns the score
   */
  public getScore(): number {
    // console.log(this.score);
    return this.score;
  }

  /**
   * Sets the score to a specific amount
   *
   * @param score the new score to be set
   */
  public setScore(score: number): void {
    this.score = score;
  }

  private setNewLevel(index: number): void {
    if (index === 1) {
      this.levels[1] = new Level1(this);
    } else if (index === 3) {
      this.levels[3] = new Level2(this);
    }
    this.levelNumber = index;
  }

  public setNewSelectScreen(): void {
    this.levels[0] = new SelectScreen(this);
  }

  public setMonsterType(type: string): void {
    this.monsterType = type;
  }

  public getMonsterType(): string {
    return this.monsterType;
  }
}
