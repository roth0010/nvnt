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
      'Not everyone on the internet is a good person!',
      this.game.getCanvasWidth() - Phone.CAT_PHONE_X_POSITION,
      this.game.getCanvasHeight() - Phone.CAT_PHONE_Y_POSITION,
      this.game,
    );
  }

  /**
   * processes the input
   */
  public processInput(): void {
    this.cat.processInput();
    console.log(this.wait);
    if (this.wait >= Phone.WAIT_TIME) {
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
        } else {
          this.game.increaseMistakeScore(3);
        }
        this.levelPass = 1;
      }
    } else {
      this.wait += 1;
    }
  }

  /**
   * Renders the phone5
   *
   * @param ctx the canvas rendering context
   * @param canvas The canvas to render on
   */
  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    const background = Static.loadNewImage('./assets/img/levelTwoBackground.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      this.image,
      25,
      -50,
      this.image.width,
      this.image.height,
    );
    this.game.renderHP(ctx, canvas, 3);
    // the first 5 parameters are required, line2 to line5 are extra lines for longer DMs
    this.renderDM(ctx, canvas, 'raquish', './assets/img/scary.png', 'Could you transfer me money?', 'I promise I will pay you back', 'double the amount tomorrow');
    Static.writeTextToCanvas(canvas, 'How do you respond to this stranger?', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'black');
    Static.writeTextToCanvas(canvas, '[1] Give them your bank details', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
    Static.writeTextToCanvas(canvas, '[2] Share his account with all your friends', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
    Static.writeTextToCanvas(canvas, '[3] Block Them', ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
    Static.writeTextToCanvas(canvas, '[4] Have a normal conversation with them', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
    this.cat.render(ctx, canvas);
  }

  /**
   * fills the phonescreen with a dm interface
   *
   * @param ctx ctx
   * @param canvas canvas
   * @param sender the sender of the message
   * @param senderProfilePicture the profile picture of the sender
   * @param receivedMessage the message the user has received
   * @param line2 optional parameter for second DM line
   * @param line3 optional parameter for third DM line
   * @param line4 optional parameter for fourth DM line
   * @param line5 optional parameter for fifth DM line
   */
  private renderDM(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    sender: string,
    senderProfilePicture:
      string,
    receivedMessage: string,
    line2?: string,
    line3?: string,
    line4?: string,
    line5?: string,
  ): void {
    // renders the profile picture
    const senderRenderedProfilePicture = Static.loadNewImage(senderProfilePicture);
    ctx.drawImage(
      senderRenderedProfilePicture, 55, 40, (this.image.width / 5), this.image.height / 10,
    );
    const a: number = (arguments.length - 4);
    for (let i = 0; i < a; i++) {
      Static.writeTextToCanvas(canvas, (arguments[i + 4]), (Phone.YPOSITION + 40), (Phone.YPOSITION + (600 + (20 * i))), 20, 'white', 'left');
    }
    Static.writeTextToCanvas(canvas, sender, (canvas.width / 8), (Phone.YPOSITION + 45), 40, 'white', 'left');
  }
}
