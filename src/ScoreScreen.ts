import Game from './Game.js';
import Screen from './Screen.js';

export default class ScoreScreen extends Screen {
  private levelPass: number;

  /**
   * Constructs a new ScoreScreen class
   *
   * @param game The game
   */
  public constructor(game: Game) {
    super(game);
    this.levelPass = 0;
  }

  /**
   * processes the input
   */
  public processInput(): void {
    // R key
    // console.log(this.score);
    if (this.game.getScore() < 2) {
      this.levelPass = 2;
      // S key
    } else if (this.game.getScore() >= 2) {
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
    if (this.levelPass === 2 && this.keyboard.isKeyDown(82)) {
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
    this.writeTextToCanvas(canvas, `Your Score: ${this.game.getScore()}`, canvas.width / 2, ((canvas.height / 2) + 50), 30, 'Red');
    if (this.levelPass === 2) {
      this.writeTextToCanvas(canvas, 'Looks like you didn`t get enough points to advance. Press R to try again!', canvas.width / 2, canvas.height / 2, 30, 'Black');
    } else if (this.levelPass === 1) {
      this.writeTextToCanvas(canvas, 'You nailed that! Press S to start the next level', canvas.width / 2, canvas.height / 2, 30, 'Black');
    }
  }
}
