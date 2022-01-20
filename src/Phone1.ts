import Phone from './Phone.js';
import Game from './Game.js';
import Static from './Static.js';
import Gato from './Gato.js';

export default class Phone1 extends Phone {
  /**
   * constructs a new phone1 class
   *
   * @param game the game object
   */
  public constructor(game: Game) {
    super(game);
    this.cat = new Gato(
      'Keep your username anonymous!',
      this.game.getCanvasWidth() - 200,
      this.game.getCanvasHeight() - 200,
      this.game,
    );
  }

  /**
   * Processes the input
   */
  public processInput(): void {
    this.cat.processInput();
    if (this.wait >= 15) {
      if (this.keyboard.isKeyDown(49)) {
        this.answered = true;
        this.correct = false;
        this.game.setProfileInfo(this.game.getMonsterName());
      } else if (this.keyboard.isKeyDown(50)) { // correct option
        this.answered = true;
        this.correct = true;
        this.game.setProfileInfo('GlitterLover123');
      } else if (this.keyboard.isKeyDown(51)) {
        this.answered = true;
        this.correct = false;
        this.game.setProfileInfo('Middelburger');
      } else if (this.keyboard.isKeyDown(52)) {
        this.answered = true;
        this.correct = false;
        this.game.setProfileInfo(`${this.game.getMonsterName()}@monster.com`);
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
   * renders the phone1
   *
   * @param ctx the canvas rendering context
   * @param canvas the canvas to render on
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
    // drawing the monsterbox
    Static.writeTextToCanvas(canvas, 'What will your username be?', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'black');
    Static.writeTextToCanvas(canvas, `[1] ${this.game.getMonsterName()}`, ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
    Static.writeTextToCanvas(canvas, '[2] GlitterLover123', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
    Static.writeTextToCanvas(canvas, '[3] Middelburger', ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
    Static.writeTextToCanvas(canvas, `[4] ${this.game.getMonsterName()}@monster.com`, ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
    Static.writeTextToCanvas(canvas, 'Create a profile', (canvas.width / 20), (Phone.YPOSITION + 45), 40, 'white', 'left');
    this.cat.render(ctx, canvas);
  }
}
