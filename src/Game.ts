import Screen from './Screen.js';
import Level1 from './Level1.js';
import Level2 from './Level2.js';
import GameLoop from './GameLoop.js';
import Waluigi from './Waluigi.js';
import Player from './Player.js';
import Level from './Level.js';
import ScoreScreen from './ScoreScreen.js';

export default class Game {
  private canvas: HTMLCanvasElement;

  private levels: Screen[];

  private engine: GameLoop;

  private score: number;

  private levelNumber: number;

  private players: Player[];

  private ctx: CanvasRenderingContext2D;

  /**
   * creates a new Game class
   *
   * @param canvas the canvas
   */
  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.ctx = this.canvas.getContext('2d');
    this.levels = [];
    this.score = 0;
    this.engine = new GameLoop(this);
    this.levelNumber = 1;
    this.players = [];
    this.setUp();
    this.players.push(new Waluigi(this.canvas.width / 2, this.canvas.height / 2));
    // console.log(this.canvas.width);
    // console.log(this.canvas.height);
    this.engine.start();
  }

  private setUp(): void {
    // This first one should be a monster selection screen
    this.levels[0] = new Level1();
    this.levels[1] = new Level1();
    this.levels[2] = new ScoreScreen();
    this.levels[3] = new Level2();
    this.levels[4] = new ScoreScreen();
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
   * @param step I don't really know yet tbh
   * @returns false. Always false or it breaks.
   */
  public update(step: number): boolean {
    if (this.levels[this.levelNumber].update() === 1) {
      this.setLevel(this.levelNumber + 1);
      // this.score = this.levels.getScore();
    }
    return false;
  }

  /**
   * buzz off, it's not implemented yet.
   */
  public render(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.levels[this.levelNumber].render(this.ctx, this.canvas);
    this.players.forEach((player) => {
      player.render(this.ctx);
    });
  }

  public setLevel(level: number): void {
    this.levelNumber = level;
  }
}
