import Level from './Level.js';
import Static from './Static.js';
import Game from './Game.js';

export default class Level2 extends Level {
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
      this.game.setScore(1);
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
    this.writeTextToCanvas(canvas, 'Press E to pass the level (syke)', canvas.width / 2, 50, 30, 'black');
    const image = Static.loadNewImage('./assets/img/levelonebackground.png');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  }
}
