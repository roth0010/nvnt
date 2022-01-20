import Level from './Level.js';
import Static from './Static.js';
import Game from './Game.js';
import Gato from './Gato.js';
import Shop from './Shop.js';

export default class Level3 extends Level {
  private cat: Gato;

  /**
   * constructs a new Level4 class.
   *
   * @param game The game
   * @param shop The Taco Shop
   */
  public constructor(game: Game, shop: Shop) {
    super(game);
    this.cat = new Gato(
      'once something is on the internet, it can`t be removed',
      this.game.getCanvasWidth() - 200,
      this.game.getCanvasHeight() - 200,
      this.game,
    );
    this.shop = shop;
  }

  /**
   * processes input
   */
  public processInput(): void {
    this.game.setGoal(2);
    this.shop.update();
    this.cat.processInput();
    this.shop.processInput();
    // E key
    if (this.keyboard.isKeyDown(69)) {
      this.shop.setActive(false);
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
    const image = Static.loadNewImage('./assets/img/levelFourBackground.png');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const image2 = Static.loadNewImage(this.game.getMonsterType());
    image2.height = canvas.height / 2;
    image2.width = (canvas.height / 2) * Static.getMonsterAR(this.game.getMonsterType());
    ctx.drawImage(
      image2,
      ((canvas.width / 2) - (image2.width / 2)),
      (canvas.height / 1.6 - (image2.height / 2)),
      image2.width,
      image2.height,
    );
    Static.writeTextToCanvas(canvas, this.game.getMonsterName(), canvas.width / 2, canvas.height - 50, 60, 'black');
    Static.writeTextToCanvas(canvas, 'Level 4: Making a Post', canvas.width / 2, 250, 40, 'black');
    Static.writeTextToCanvas(canvas, 'Press E to open your phone', canvas.width / 2, 300, 30, 'black');
    this.cat.render(ctx, canvas);
    this.shop.render(canvas);
    Static.writeTextToCanvas(canvas, `Tacos: ${this.game.getTaco()}`, canvas.width / 12, 250, 40, 'black');
  }
}
