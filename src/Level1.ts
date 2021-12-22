import Level from './Level.js';
import Static from './Static.js';

export default class Level1 extends Level {
  /**
   * constructs a new Level1 class
   */
  public constructor() {
    super();
  }

  /**
   * processes input
   */
  public processInput(): void {
    // E key
    if (this.keyboard.isKeyDown(69)) {
      this.levelPass = 1;
    }
  }

  // es-lint class-methods-use-this disable-next-line
  /**
   * Renders the level1
   *
   * @param ctx the canvas rendering context
   * @param canvas the canvas
   */
  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    let image = Static.loadNewImage('./assets/img/levelonebackground.png');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  }
}
