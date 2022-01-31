import Phone from './Phone.js';
import Game from './Game.js';
import Static from './Static.js';
import Gato from './Gato.js';

export default class Phone3 extends Phone {
  /**
   * constructs a new Phone3 class
   *
   * @param game the game class
   */
  public constructor(game: Game) {
    super(game);
    this.cat = new Gato(
      'Mogen onbekenden je profiel zien?',
      this.game.getCanvasWidth() - Phone.CAT_PHONE_X_POSITION,
      this.game.getCanvasHeight() - Phone.CAT_PHONE_Y_POSITION,
      this.game,
    );
  }

  /**
   * processes input
   */
  public processInput(): void {
    this.cat.processInput();
    if (this.wait >= Phone.WAIT_TIME) {
      if (this.keyboard.isKeyDown(49)) { // correct option
        this.answered = true;
        this.correct = true;
        this.game.setProfileInfo('privé');
      } else if (this.keyboard.isKeyDown(50)) {
        this.answered = true;
        this.correct = false;
        this.game.setProfileInfo('Openbaar');
        this.game.setFeedback('“openbaar” betekent dat je profiel voor iedereen te zien is… Alsof je je profiel op een reclamebord zet!');
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
   * Renders the Phone3
   *
   * @param ctx The canvas rendering context
   * @param canvas The canvas to render on
   */
  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    const background = Static.loadNewImage('./assets/img/levelOneBackground.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      this.image,
      25,
      -50,
      this.image.width,
      this.image.height,
    );
    this.game.renderHP(ctx, canvas, 12);
    Static.writeTextToCanvas(canvas, 'Maak je je profiel openbaar of privé?', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'black');
    Static.writeTextToCanvas(canvas, '[1] Privé', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
    Static.writeTextToCanvas(canvas, '[2] Openbaar', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
    this.cat.render(ctx, canvas);
    Static.writeTextToCanvas(canvas, 'Je profiel:', (canvas.width / 20), (Phone.YPOSITION + 45), 40, 'white', 'left');
    let textYCoord = 0;
    for (let i = 0; i < 2; i++) {
      textYCoord += 120;
      Static.writeTextToCanvas(canvas, `${this.game.getProfileArray(i)}`, (canvas.width / 20), (Phone.YPOSITION + (45 + textYCoord)), 40, 'white', 'left');
      Static.writeTextToCanvas(canvas, `${this.game.getProfileInfo(i)}`, (canvas.width / 20), (Phone.YPOSITION + (95 + textYCoord)), 40, 'white', 'left');
    }
  }
}
