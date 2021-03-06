import Phone from './Phone.js';
import Game from './Game.js';
import Static from './Static.js';
import Gato from './Gato.js';

export default class Phone6 extends Phone {
  /**
   * constructs a new game class
   *
   * @param game the game class
   */
  public constructor(game: Game) {
    super(game);
    this.cat = new Gato(
      'Ken je deze persoon?',
      this.game.getCanvasWidth() - Phone.CAT_PHONE_X_POSITION,
      this.game.getCanvasHeight() - Phone.CAT_PHONE_Y_POSITION,
      this.game,
    );
  }

  /**
   * Process input
   */
  public processInput(): void {
    this.cat.processInput();
    if (this.wait >= Phone.WAIT_TIME) {
      if (this.keyboard.isKeyDown(49)) { // correct option
        this.answered = true;
        this.correct = true;
      } else if (this.keyboard.isKeyDown(50)) { // correct option
        this.answered = true;
        this.correct = true;
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
   * Renders the canvas
   *
   * @param ctx The canvas rendering context
   * @param canvas The canvas to render on
   */
  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    const background = Static.loadNewImage('./assets/img/levelThreeBackground.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      this.image,
      25,
      -50,
      this.image.width,
      this.image.height,
    );
    this.game.renderHP(ctx, canvas, 9);
    Static.writeTextToCanvas(canvas, 'Je klasgenoot stuurt een vriendschapsverzoek!', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'white');
    Static.writeTextToCanvas(canvas, '[1] Accepteer het verzoek', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
    Static.writeTextToCanvas(canvas, '[2] Negeer het verzoek', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
    Static.writeTextToCanvas(canvas, '[3] Blokkeer', ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
    Static.writeTextToCanvas(canvas, '[4] Maak een tosti', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
    this.cat.render(ctx, canvas);
    Static.writeTextToCanvas(canvas, 'Je hebt 1 verzoek', (canvas.width / 20), (Phone.YPOSITION + 45), 40, 'white', 'left');
    Static.writeTextToCanvas(canvas, 'van:', (canvas.width / 20), (Phone.YPOSITION + 90), 40, 'white', 'left');
    if (this.game.getMonsterType() === './assets/img/whick.png') {
      ctx.drawImage(Static.loadNewImage('./assets/img/Jorgen.png'), (canvas.width / 10), (Phone.YPOSITION + 190), (this.image.width / 2.5), this.image.height / 5);
      Static.writeTextToCanvas(canvas, 'J??rgenBurger352', (canvas.width / 15), (Phone.YPOSITION + 400), 40, 'white', 'left');
      Static.writeTextToCanvas(canvas, 'Bio: ???hoi, ik ben J??rgen!', (canvas.width / 15), (Phone.YPOSITION + 440), 25, 'grey', 'left');
    } else {
      ctx.drawImage(Static.loadNewImage('./assets/img/whick.png'), (canvas.width / 10), (Phone.YPOSITION + 200), (this.image.width / 3), this.image.height / 10);
      Static.writeTextToCanvas(canvas, 'RealWhicky6395', (canvas.width / 15), (Phone.YPOSITION + 325), 40, 'white', 'left');
      Static.writeTextToCanvas(canvas, 'Bio: ???hoi, ik ben Whick!', (canvas.width / 15), (Phone.YPOSITION + 385), 25, 'grey', 'left');
    }
  }
}
