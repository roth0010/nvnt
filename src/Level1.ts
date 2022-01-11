import Game from './Game.js';
import Level from './Level.js';
import Static from './Static.js';
import Gato from './Gato.js';

export default class Level1 extends Level {
  private cat: Gato;

  /**
   * constructs a new Level1 class. This is the profile creation level
   *
   * @param game The game
   */
  public constructor(game: Game) {
    super(game);
    this.cat = new Gato(
      'Do not feed the seagulls',
      this.game.getCanvasWidth() - 200,
      this.game.getCanvasHeight() - 200,
      this.game,
    );
  }

  /**
   * processes input
   */
  public processInput(): void {
    this.cat.processInput();
    // E key
    if (this.keyboard.isKeyDown(69)) {
      this.game.increaseScore(2);
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
    const image = Static.loadNewImage('./assets/img/levelonebackground.png');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    Static.writeTextToCanvas(canvas, 'Press E to open your phone', canvas.width / 2, 50, 30, 'black');
    this.cat.render(ctx, canvas);
  }
}
