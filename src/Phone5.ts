import Phone from './Phone.js';
import Game from './Game.js';
import Static from './Static.js';
import Gato from './Gato.js';

export default class Phone5 extends Phone {
  /**
   * Creates a new Phone5 class
   *
   * @param game the game class
   */
  public constructor(game: Game) {
    super(game);
    this.cat = new Gato(
      'Do not light fireworks in tunnels!',
      this.game.getCanvasWidth() - 200,
      this.game.getCanvasHeight() - 200,
      this.game,
    );
  }

  /**
<<<<<<< HEAD
   * processes input
=======
   * processes the input
>>>>>>> 42361fef10dafc5b4cd6b4bfdb1d69f2d6ca5a1e
   */
  public processInput(): void {
    this.cat.processInput();
    if (this.keyboard.isKeyDown(51)) {
      this.answered = true;
      this.correct = true;
    } else if (
      this.keyboard.isKeyDown(50)
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
  }

  /**
   * Renders the phone5
   *
   * @param ctx the canvas rendering context
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
    this.renderDM(ctx, canvas, 'Could you transfer me money?', 'raquish', './assets/img/Raquish.png');
    Static.writeTextToCanvas(canvas, 'Filler Stuff(5)', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'red');
    Static.writeTextToCanvas(canvas, '[1] Sketchy Option', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
    Static.writeTextToCanvas(canvas, '[2] Funny Option', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
    Static.writeTextToCanvas(canvas, '[3] Correct Option', ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
    Static.writeTextToCanvas(canvas, '[4] Give them your credit card number Option', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
    this.cat.render(ctx, canvas);
  }

  /**
 * fills the phonescreen with a dm interface
 * @param ctx ctx
 * @param canvas canvas
 * @param receivedMessage the message the user has received
 * @param sender the sender of the message
 * @param senderProfilePicture the profile picture of the sender
 */
   private renderDM(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, receivedMessage: string, sender: string, senderProfilePicture: string): void {
    const senderRenderedProfilePicture = Static.loadNewImage(senderProfilePicture); // renders the profile picture
    ctx.drawImage(senderRenderedProfilePicture, 55, 40, (this.image.width / 5),
      this.image.height / 10);
    Static.writeTextToCanvas(canvas, sender, (canvas.width / 8), (Phone.YPOSITION + 45), 40);
    Static.writeTextToCanvas(canvas, receivedMessage, (canvas.width / 8), (Phone.YPOSITION + 650), 20);
  }
}
