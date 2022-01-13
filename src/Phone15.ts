import Phone from './Phone.js';
import Game from './Game.js';
import Static from './Static.js';
import Gato from './Gato.js';

export default class Phone15 extends Phone {
  /**
   * constructs a new game class
   *
   * @param game the game class
   */
  public constructor(game: Game) {
    super(game);
    this.cat = new Gato(
      'Which account inspires you more?',
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
    if (this.wait >= 60) {
      if (this.keyboard.isKeyDown(49)) {
        this.answered = true;
        this.correct = true;
      } else if (
        this.keyboard.isKeyDown(50)
        || this.keyboard.isKeyDown(51)
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
    Static.writeTextToCanvas(canvas, 'Which account should you follow?', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'red');
    Static.writeTextToCanvas(canvas, '[1] A specific account of somethings you`re interested in', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
    Static.writeTextToCanvas(canvas, '[2] A Cryptocurrency account', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
    Static.writeTextToCanvas(canvas, '[3] An account selling fat-loss pills', ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
    Static.writeTextToCanvas(canvas, '[4] An account telling you to invest in NFTs', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
    this.cat.render(ctx, canvas);
  }
}