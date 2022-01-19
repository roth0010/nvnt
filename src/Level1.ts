import Game from './Game.js';
import Level from './Level.js';
// import SelectScreen from './SelectScreen.js';
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
    console.log('constructor');
    this.cat = new Gato(
      'Never make online payments to someone you don`t trust',
      this.game.getCanvasWidth() - 200,
      this.game.getCanvasHeight() - 200,
      this.game,
    );
  }

  /**
   * processes input
   */
  public processInput(): void {
    this.game.setGoal(11);
    this.cat.processInput();
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
    const image = Static.loadNewImage('./assets/img/levelonebackground.png');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    Static.writeTextToCanvas(canvas, 'Press E to open phone', canvas.width / 2, 50, 30, 'black');
    Static.writeTextToCanvas(canvas, 'Level 1: Making a Social Media account!', canvas.width / 2, 100, 30, 'black');
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
    Static.writeTextToCanvas(canvas, `Tacos: ${this.game.getTaco()}`, canvas.width / 12, 50, 40, 'red');
    Static.writeTextToCanvas(canvas, 'Taco shop coming soon!', canvas.width / 10, canvas.height - 50, 20, 'black');
    this.cat.render(ctx, canvas);
  }
}
