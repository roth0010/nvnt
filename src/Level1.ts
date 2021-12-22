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
    if (this.keyboard.isKeyDown(32)) {
      this.levelPass = true;
    }
  }

  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    // console.log('beans');
    let image = Static.loadNewImage('./assets/img/levelonebackground.png');
    // image.height = canvas.height;
    // image.width = canvas.width;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  }
}
