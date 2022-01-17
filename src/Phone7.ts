import Phone from './Phone.js';
import Game from './Game.js';
import Static from './Static.js';
import Gato from './Gato.js';

export default class Phone7 extends Phone {
  /**
   * constructs a new game class
   *
   * @param game the game class
   */
  public constructor(game: Game) {
    super(game);
    this.cat = new Gato(
      'Do you know this person?',
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
        this.correct = false;
      } else if (this.keyboard.isKeyDown(50)) { // correct option
        this.answered = true;
        this.correct = true;
      } else if (this.keyboard.isKeyDown(51)) {
        this.answered = true;
        this.correct = false;
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
    Static.writeTextToCanvas(canvas, 'A stranger requests to be your friend,', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'red');
    Static.writeTextToCanvas(canvas, 'and spams your messages!', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 42, 'red');
    Static.writeTextToCanvas(canvas, '[1] Tell them to stop messaging you', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
    Static.writeTextToCanvas(canvas, '[2] Deny the request', ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
    Static.writeTextToCanvas(canvas, '[3] Accept the request', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
    Static.writeTextToCanvas(canvas, '[4] Block them', ((canvas.width * 2) / 3), Phone.YPOSITION + 250, 30, 'black');
    Static.writeTextToCanvas(canvas, 'You have 1 request', (canvas.width / 20), (Phone.YPOSITION + 45), 40, 'white', 'left');
    Static.writeTextToCanvas(canvas, 'from:', (canvas.width / 20), (Phone.YPOSITION + 90), 40, 'white', 'left');
    this.cat.render(ctx, canvas);
    ctx.drawImage(Static.loadNewImage('./assets/img/Raquish.png'), (canvas.width / 10), (Phone.YPOSITION + 150), 150, 150);
    Static.writeTextToCanvas(canvas, 'RaquishBoss563', (canvas.width / 15), (Phone.YPOSITION + 345), 40, 'white', 'left');
    Static.writeTextToCanvas(canvas, 'bio: "don ka shendi akem zalec"', (canvas.width / 15), (Phone.YPOSITION + 385), 25, 'grey', 'left');
  }
}
