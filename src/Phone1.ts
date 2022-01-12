import Phone from './Phone.js';
import Game from './Game.js';
import Static from './Static.js';
import Gato from './Gato.js';

export default class Phone1 extends Phone {
  /**
   * constructs a new phone1 class
   *
   * @param game the game object
   */
  public constructor(game: Game) {
    super(game);
    this.cat = new Gato(
      'Keep your username anonymous!',
      this.game.getCanvasWidth() - 200,
      this.game.getCanvasHeight() - 200,
      this.game,
    );
  }

  /**
   * Processes the input
   */
  public processInput(): void {
    this.cat.processInput();
    if (this.wait >= 60) {
      if (this.keyboard.isKeyDown(50)) {
        this.answered = true;
        this.correct = true;
      } else if (
        this.keyboard.isKeyDown(51)
        || this.keyboard.isKeyDown(49)
        || this.keyboard.isKeyDown(52)
      ) {
        this.answered = true;
        this.correct = false;
      }
      if (this.answered === true) {
        if (this.correct === true) {
          this.game.increaseScore(3);
        }
        this.levelPass = 1;
      }
    } else {
      this.wait += 1;
    }
  }

  /**
   * renders the phone1
   *
   * @param ctx the canvas rendering context
   * @param canvas the canvas to render on
   */
  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    ctx.drawImage(
      this.image,
      25,
      -50,
      this.image.width,
      this.image.height,
    );
    Static.writeTextToCanvas(canvas, 'What will your username be?', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'red');
    Static.writeTextToCanvas(canvas, `[1] ${this.game.getMonsterName()}`, ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
    Static.writeTextToCanvas(canvas, '[2] GlitterLover123', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
    Static.writeTextToCanvas(canvas, '[3] MyHomeAddress', ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
    Static.writeTextToCanvas(canvas, '[4] MyPhoneNumber', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
    this.cat.render(ctx, canvas);
  }
}
