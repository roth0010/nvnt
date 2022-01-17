import Phone from './Phone.js';
import Game from './Game.js';
import Static from './Static.js';
import Gato from './Gato.js';

export default class Phone11 extends Phone {
  /**
   * constructs a new game class
   *
   * @param game the game class
   */
  public constructor(game: Game) {
    super(game);
    this.cat = new Gato(
      'Do you like Frijkandelbroodje?',
      this.game.getCanvasWidth() - 200,
      this.game.getCanvasHeight() - 200,
      this.game,
    );
  }

  /**
   * Process input
   */
  public processInput(): void {
    this.cat.processInput();
    if (this.wait >= 15) {
      if (this.keyboard.isKeyDown(49)) {
        this.answered = true;
        this.correct = false;
      } else if (this.keyboard.isKeyDown(50)) {
        this.answered = true;
        this.correct = false;
      } else if (this.keyboard.isKeyDown(51)) { // correct option
        this.answered = true;
        this.correct = true;
      } else if (this.keyboard.isKeyDown(52)) { // correct option
        this.answered = true;
        this.correct = true;
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
   * Renders the canvas, tee hee
   *
   * @param ctx The canvas rendering context
   * @param canvas The canvas to render on
   */
  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    ctx.drawImage(
      this.image,
      25,
      -50,
      this.image.width,
      this.image.height,
    );
    Static.writeTextToCanvas(canvas, 'A friend request from a famous person', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'red');
    Static.writeTextToCanvas(canvas, '[1] Send them a message!', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
    Static.writeTextToCanvas(canvas, '[2] Accept the request', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
    Static.writeTextToCanvas(canvas, '[3] Deny the request', ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
    Static.writeTextToCanvas(canvas, '[4] Block them', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
    this.cat.render(ctx, canvas);
  }
}
