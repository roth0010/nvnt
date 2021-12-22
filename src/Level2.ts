import Level from './Level.js';
import Static from './Static.js';

export default class Level2 extends Level {
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
    if (this.keyboard.isKeyDown(69)) {
      this.levelPass = 1;
    }
  }

  /**
   * Renders the level2
   *
   * @param ctx the canvas to render on
   * @param canvas the canvas
   */
  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    let image = Static.loadNewImage('./assets/img/levelonebackground.png');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  }
}
