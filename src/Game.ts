import Level from './Level.js';
import Level1 from './Level1.js';
import Level2 from './Level2.js';
import GameLoop from './GameLoop.js';
import Waluigi from './Waluigi.js';
import Player from './Player.js';

export default class Game {
  private canvas: HTMLCanvasElement;

  private level: Level;

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
    this.level = new Level1();
    this.score = 0;
    this.engine = new GameLoop(this);
    this.levelNumber = 1;
    this.players = [];
    this.players.push(new Waluigi(this.canvas.width / 2, this.canvas.height / 2));
    console.log(this.canvas.width);
    console.log(this.canvas.height);
    this.engine.start();
  }

  /**
   * buzz off, it's not implemented yet.
   */
  public processInput(): void {
    this.level.processInput();
  }

  /**
   * Updates the game
   *
   * @param step I don't really know yet tbh
   * @returns false. Always false or it breaks.
   */
  public update(step: number): boolean {
    if (this.level.update()) {
      this.increaseLevel(this.levelNumber + 1);
      this.score = this.level.getScore();
    }
    return false;
  }

  /**
   * buzz off, it's not implemented yet.
   */
  public render(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.level.render(this.ctx, this.canvas);
    this.players.forEach((player) => {
      player.render(this.ctx);
    });
  }

  private increaseLevel(level: number): void {
    if (level === 1) {
      this.level = new Level1();
    } else if (level === 2) {
      this.level = new Level2();
    }
    this.levelNumber = level;
  }
}
