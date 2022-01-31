import Phone from './Phone.js';
import Game from './Game.js';
import Static from './Static.js';
import Gato from './Gato.js';

export default class Phone8 extends Phone {
  /**
   * constructs a new game class
   *
   * @param game the game class
   */
  public constructor(game: Game) {
    super(game);
    this.cat = new Gato(
      'Lijkt deze persoon je aardig?',
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
      if (this.keyboard.isKeyDown(49)) {
        this.game.setFeedback('Je kunt aan de typefouten zien dat dit profiel waarschijnlijk nep is; niet vertrouwen');
        this.answered = true;
        this.correct = false;
      } else if (this.keyboard.isKeyDown(50)) {
        this.game.setFeedback('Je kunt aan de typefouten zien dat dit profiel waarschijnlijk nep is; niet vertrouwen');
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
   * Renders the canvas, tee hee
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
    Static.writeTextToCanvas(canvas, 'A friend request from a famous person', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'white');
    Static.writeTextToCanvas(canvas, '[1] Stuur een bericht!', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
    Static.writeTextToCanvas(canvas, '[2] Accepteer het verzoek', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
    Static.writeTextToCanvas(canvas, '[3] Negeer het verzoek', ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
    Static.writeTextToCanvas(canvas, '[4] Blokkeer', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
    Static.writeTextToCanvas(canvas, 'Je hebt 1 verzoek', (canvas.width / 20), (Phone.YPOSITION + 45), 40, 'white', 'left');
    Static.writeTextToCanvas(canvas, 'van:', (canvas.width / 20), (Phone.YPOSITION + 90), 40, 'white', 'left');
    ctx.drawImage(Static.loadNewImage('./assets/img/MarkRutte.png'), (canvas.width / 10), (Phone.YPOSITION + 150), 150, 150);
    Static.writeTextToCanvas(canvas, 'markrutten3543', (canvas.width / 20), (Phone.YPOSITION + 345), 40, 'white', 'left');
    Static.writeTextToCanvas(canvas, 'bio: "hoi. dit is het akkound van', (canvas.width / 20), (Phone.YPOSITION + 385), 25, 'grey', 'left');
    Static.writeTextToCanvas(canvas, 'mark rutte"', (canvas.width / 20), (Phone.YPOSITION + 410), 25, 'grey', 'left');
    this.cat.render(ctx, canvas);
  }
}
