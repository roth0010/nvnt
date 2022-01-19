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
    if (this.wait >= 15) {
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
    const background = Static.loadNewImage('./assets/img/levelthreebackground.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      this.image,
      25,
      -50,
      this.image.width,
      this.image.height,
    );
    Static.writeTextToCanvas(canvas, 'A Classmate sends a friend request!', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 42, 'black');
    Static.writeTextToCanvas(canvas, '[1] Accept', ((canvas.width * 2) / 3), Phone.YPOSITION + 250, 30, 'black');
    Static.writeTextToCanvas(canvas, '[2] Deny', ((canvas.width * 2) / 3), Phone.YPOSITION + 300, 30, 'black');
    Static.writeTextToCanvas(canvas, '[3] Block', ((canvas.width * 2) / 3), Phone.YPOSITION + 350, 30, 'black');
    Static.writeTextToCanvas(canvas, '[4] Make a cheese sandwich', ((canvas.width * 2) / 3), Phone.YPOSITION + 400, 30, 'black');
    this.cat.render(ctx, canvas);
    Static.writeTextToCanvas(canvas, 'You have 1 request', (canvas.width / 20), (Phone.YPOSITION + 45), 40, 'white', 'left');
    Static.writeTextToCanvas(canvas, 'from:', (canvas.width / 20), (Phone.YPOSITION + 90), 40, 'white', 'left');
    if (this.game.getMonsterType() === './assets/img/whick.png') {
      ctx.drawImage(Static.loadNewImage('./assets/img/Jorgen.png'), (canvas.width / 10), (Phone.YPOSITION + 190), (this.image.width / 2.5), this.image.height / 5);
      Static.writeTextToCanvas(canvas, 'JörgenBurger352', (canvas.width / 15), (Phone.YPOSITION + 400), 40, 'white', 'left');
      Static.writeTextToCanvas(canvas, 'bio: "hi, my name is Jörgen!"', (canvas.width / 15), (Phone.YPOSITION + 440), 25, 'grey', 'left');
    } else {
      ctx.drawImage(Static.loadNewImage('./assets/img/whick.png'), (canvas.width / 10), (Phone.YPOSITION + 200), (this.image.width / 3), this.image.height / 10);
      Static.writeTextToCanvas(canvas, 'RealWhicky6395', (canvas.width / 15), (Phone.YPOSITION + 325), 40, 'white', 'left');
      Static.writeTextToCanvas(canvas, 'bio: "hi, my name is Whick!"', (canvas.width / 15), (Phone.YPOSITION + 385), 25, 'grey', 'left');
    }
  }
}
