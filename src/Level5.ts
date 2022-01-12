import Level from './Level.js';
import Static from './Static.js';
import Game from './Game.js';
import Gato from './Gato.js';

export default class Level3 extends Level {
  private cat: Gato;

  /**
   * constructs a new Level2 class.
   *
   * @param game The game
   */
  public constructor(game: Game) {
    super(game);
    this.cat = new Gato(
      'Do not give personal info to strangers!',
      this.game.getCanvasWidth() - 200,
      this.game.getCanvasHeight() - 200,
      this.game,
    );
  }

  /**
   * processes input
   */
  public processInput(): void {
    this.game.setGoal(2);
    this.cat.processInput();
    // E key
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
    const image = Static.loadNewImage('./assets/img/levelonebackground.png');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    Static.writeTextToCanvas(canvas, 'Press E to open your phone', canvas.width / 2, 50, 30, 'black');
    this.cat.render(ctx, canvas);
  }
}
