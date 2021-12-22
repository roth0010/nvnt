import Screen from './Screen.js';

export default class ScoreScreen extends Screen {
  private levelPass: number;

  /**
   * Constructs a new ScoreScreen class
   */
  public constructor() {
    super();
    this.levelPass = 0;
  }

  /**
   * processes the input
   */
  public processInput(): void {
    // R key
    if (this.keyboard.isKeyDown(82)) {
      this.levelPass = 2;
      // S key
    } else if (this.score > 2 && this.keyboard.isKeyDown(83)) {
      this.levelPass = 1;
    }
  }

  /**
   * Updates the ScoreScreen class
   *
   * @returns whether to move onto the next level
   */
  public update(): number {
    return this.levelPass;
  }

  /**
   * renders the ScoreScreen
   *
   * @param ctx the context to render on
   * @param canvas the canvas to render on
   */
  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    if (this.levelPass === 2) {
      this.writeTextToCanvas(canvas, 'Looks like you didn`t get enough points to advance. Press R to try again!', canvas.width / 2, canvas.height / 2);
    } else if (this.levelPass === 1) {
      this.writeTextToCanvas(canvas, 'You nailed that! Press S to start the next level', canvas.width / 2, canvas.height / 2);
    }
  }
}
