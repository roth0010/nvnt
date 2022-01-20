import Phone from './Phone.js';
import Game from './Game.js';
import Static from './Static.js';
import Gato from './Gato.js';

export default class Phone2 extends Phone {
  /**
   * constructs a new phone2 class
   *
   * @param game the game class
   */
  public constructor(game: Game) {
    super(game);
    this.cat = new Gato(
      'A good password should not be easy to guess! Use different characters',
      this.game.getCanvasWidth() - 200,
      this.game.getCanvasHeight() - 200,
      this.game,
    );
  }

  /**
   * processes input
   */
  public processInput(): void {
    this.cat.processInput();
    if (this.wait >= 15) {
      if (this.keyboard.isKeyDown(49)) {
        this.answered = true;
        this.correct = false;
        this.game.setProfileInfo('admin');
      } else if (this.keyboard.isKeyDown(50)) {
        this.answered = true;
        this.correct = false;
        this.game.setProfileInfo('qwerty');
      } else if (this.keyboard.isKeyDown(51)) {
        this.answered = true;
        this.correct = false;
        this.game.setProfileInfo(`${this.game.getMonsterName()}`);
      } else if (this.keyboard.isKeyDown(52)) { // correct option
        this.answered = true;
        this.correct = true;
        this.game.setProfileInfo('!X6a#gA3');
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
   * Renders the Phone2 class
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
    Static.writeTextToCanvas(canvas, 'Pick a Password!', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'black');
    Static.writeTextToCanvas(canvas, '[1] admin', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
    Static.writeTextToCanvas(canvas, '[2] qwerty', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
    Static.writeTextToCanvas(canvas, `[3] ${this.game.getMonsterName()}`, ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
    Static.writeTextToCanvas(canvas, '[4] !X6a#gA3', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
    this.cat.render(ctx, canvas);
    Static.writeTextToCanvas(canvas, 'your profile:', (canvas.width / 20), (Phone.YPOSITION + 45), 40, 'white', 'left');
    let textYCoord = 0;
    for (let i = 0; i < 1; i++) {
      textYCoord += 120;
      Static.writeTextToCanvas(canvas, `${this.game.getProfileArray(i)}`, (canvas.width / 20), (Phone.YPOSITION + (45 + textYCoord)), 40, 'white', 'left');
      Static.writeTextToCanvas(canvas, `${this.game.getProfileInfo(i)}`, (canvas.width / 20), (Phone.YPOSITION + (95 + textYCoord)), 40, 'white', 'left');
    }
  }
}
