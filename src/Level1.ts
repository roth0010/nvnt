import Game from './Game.js';
import Level from './Level.js';
import Static from './Static.js';
import Gato from './Gato.js';
import Shop from './Shop.js';

export default class Level1 extends Level {
  private cat: Gato;

  /**
   * constructs a new Level1 class. This is the profile creation level
   *
   * @param game The game
   * @param shop The Taco Shop
   */
  public constructor(game: Game, shop: Shop) {
    super(game);
    console.log('constructor');
    this.cat = new Gato(
      'Hoi, ik geef je tips!',
      this.game.getCanvasWidth() - Level.CAT_X_POSITION,
      this.game.getCanvasHeight() - Level.CAT_Y_POSITION,
      this.game,
    );
    this.shop = shop;
  }

  /**
   * processes input
   */
  public processInput(): void {
    this.game.setGoal(8);
    this.shop.update();
    this.cat.processInput();
    this.shop.processInput();
    // E key
    if (this.keyboard.isKeyDown(69)) {
      this.shop.setActive(false);
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
    const image = Static.loadNewImage('./assets/img/levelOneBackground.png');
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
    Static.writeTextToCanvas(canvas, 'Level 1: je profiel aanmaken!', canvas.width / 2, 50, 40, 'black');
    Static.writeTextToCanvas(canvas, 'Druk op E om op je telefoon te kijken', canvas.width / 2, 100, 30, 'black');
    this.cat.render(ctx, canvas);
    this.shop.render(canvas);
    Static.writeTextToCanvas(canvas, `Tacos: ${this.game.getTaco()}`, canvas.width / 12, 50, 40, 'red');
  }
}
