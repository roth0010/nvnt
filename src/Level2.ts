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
    if (this.keyboard.isKeyDown(32)) {
      this.levelPass = true;
    }
  }

  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    let image = Static.loadNewImage('./assets/img/Waluigi.png');
    ctx.drawImage(image, canvas.width / 2, canvas.height / 2);
  }
}
