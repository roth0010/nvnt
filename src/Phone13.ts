import Phone from './Phone.js';
import Game from './Game.js';
import Static from './Static.js';
import Gato from './Gato.js';

export default class Phone13 extends Phone {
  /**
   * constructs a new game class
   *
   * @param game the game class
   */
  public constructor(game: Game) {
    super(game);
    this.cat = new Gato(
      'People on the internet don`t always tell the truth',
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
        this.answered = true;
        this.correct = true;
      } else if (this.keyboard.isKeyDown(50)) { // correct option
        this.answered = true;
        this.correct = true;
      } else if (this.keyboard.isKeyDown(51)) {
        this.answered = true;
        this.correct = false;
      } else if (this.keyboard.isKeyDown(52)) {
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
    const image = Static.loadNewImage('./assets/img/levelFiveBackground.png');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      this.image,
      25,
      -50,
      this.image.width,
      this.image.height,
    );
    this.game.renderHP(ctx, canvas, 9);
    Static.writeTextToCanvas(canvas, 'Who do you choose to follow?', ((canvas.width * 2) / 3), Phone.YPOSITION, 42, 'black');
    Static.writeTextToCanvas(canvas, '[1] Your mother', ((canvas.width * 2) / 3), Phone.YPOSITION + 50, 30, 'black');
    Static.writeTextToCanvas(canvas, '[2] A person from your school you do not know', ((canvas.width * 2) / 3), Phone.YPOSITION + 100, 30, 'black');
    Static.writeTextToCanvas(canvas, '[3] An account that denies global warming', ((canvas.width * 2) / 3), Phone.YPOSITION + 150, 30, 'black');
    Static.writeTextToCanvas(canvas, '[4] Your favorite content creator', ((canvas.width * 2) / 3), Phone.YPOSITION + 200, 30, 'black');
    Static.writeTextToCanvas(canvas, 'Would you like to', (canvas.width / 22), (Phone.YPOSITION + 45), 40, 'white', 'left');
    Static.writeTextToCanvas(canvas, 'follow these people?', (canvas.width / 22), (Phone.YPOSITION + 95), 40, 'white', 'left');
    this.cat.render(ctx, canvas);
    let a = 100;
    for (let i = 0; i < 4; i++) {
      a += 75;
      ctx.beginPath();
      ctx.rect((canvas.width / 35), (Phone.YPOSITION + a), 440, 70);
      ctx.strokeStyle = 'white';
      ctx.stroke();
      const nameArray = ['Jolinda_mnst', 'CarolinL0ve', 'W4KEUP2F4K3S', 'KylePranksOfficial'];
      const bioArray = ['Proud mother of two children!', 'I go to Helten University. ✨live laugh love✨', 'birds aren`t real. Wake up sheeple. Hexafluoride is put int...', 'Monstuber, Prankster, Monsterworld Citizen, 24, Support...'];
      Static.writeTextToCanvas(canvas, nameArray[i], (canvas.width / 25), (Phone.YPOSITION + a + 35), 25, 'white', 'left');
      Static.writeTextToCanvas(canvas, bioArray[i], (canvas.width / 25), (Phone.YPOSITION + a + 55), 15, 'grey', 'left');
    }
  }
}
