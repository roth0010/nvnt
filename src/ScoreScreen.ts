import Game from './Game.js';
import Screen from './Screen.js';
import Static from './Static.js';
import Taco from './Taco.js';

export default class ScoreScreen extends Screen {
  private levelPass: number;

  private taco: Taco;

  private addTaco: boolean;

  /**
   * Constructs a new ScoreScreen class
   *
   * @param game The game
   */
  public constructor(game: Game, taco: Taco) {
    super(game);
    this.levelPass = 0;
    this.taco = taco;
    this.addTaco = false;
  }

  /**
   * processes the input
   */
  public processInput(): void {
    // R key
    // console.log(this.score);
    if (this.game.getScore() < this.game.getGoal()) {
      if (this.game.getIndex() === 6) {
        this.levelPass = 3;
      }
      if (
        this.game.getIndex() === 9
        || this.game.getIndex() === 12
        || this.game.getIndex() === 15
        || this.game.getIndex() === 18
      ) {
        this.levelPass = 2;
      }
      // S key
    } else if (this.game.getScore() >= this.game.getGoal()) {
      if (this.addTaco === false) {
        this.taco.increaseTaco(this.game.getScore() * 100);
        this.addTaco = true;
      }
      this.levelPass = 1;
    }
  }

  /**
   * Updates the ScoreScreen class
   *
   * @returns whether to move onto the next level
   */
  public update(): number {
    // R key
    if (this.keyboard.isKeyDown(82) && (this.levelPass === 2 || this.levelPass === 3)) {
      this.game.setScore(0);
      return this.levelPass;
    }
    // S key
    if (this.levelPass === 1 && this.keyboard.isKeyDown(83)) {
      this.game.setScore(0);
      return this.levelPass;
    }
    return 0;
  }

  /**
   * renders the ScoreScreen
   *
   * @param ctx the context to render on
   * @param canvas the canvas to render on
   */
  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    Static.writeTextToCanvas(canvas, `Your Score: ${this.game.getScore()}`, canvas.width / 2, ((canvas.height / 2) + 50), 30, 'Red');
    Static.writeTextToCanvas(canvas, `Total Number of Tacos: ${this.taco.getTaco()}`, canvas.width / 2, ((canvas.height / 2) + 100), 25, 'black');
    if (this.levelPass === 2 || this.levelPass === 3) {
      Static.writeTextToCanvas(canvas, 'Looks like you didn`t get enough points to advance. Press R to try again!', canvas.width / 2, canvas.height / 2, 30, 'Black');
    } else if (this.levelPass === 1) {
      Static.writeTextToCanvas(canvas, 'You nailed that! Press S to start the next level', canvas.width / 2, canvas.height / 2, 30, 'Black');
    }
  }
}
