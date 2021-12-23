import Game from './Game.js';
import Level from './Level.js';
import Static from './Static.js';

export default class Level1 extends Level {
  /**
   * constructs a new Level1 class
   *
   * @param game The game
   */
  public constructor(game: Game) {
    super(game);
  }

  /**
   * processes input
   */
  public processInput(): void {
    // E key
    if (this.keyboard.isKeyDown(69)) {
      this.game.setScore(2);
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
    this.writeTextToCanvas(canvas, 'Press E to pass the level', canvas.width / 2, 50, 30, 'black');
    const image = Static.loadNewImage('./assets/img/levelonebackground.png');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  }
}
