import KeyListener from './KeyListener.js';
import Static from './Static.js';
import Game from './Game.js';

export default class Gato {
  private static readonly HAT_WIDTH = 4;

  private static readonly ASPECTRATIO = 0.72933753;

  private phrase: string;

  // This is the determination in whether to show or hide text
  private power: boolean;

  private xPosition: number;

  private yPosition: number;

  private keyboard: KeyListener;

  private timer: number;

  private image: HTMLImageElement;

  private game: Game;

  private catHat: number;

  private hat: HTMLImageElement;

  private hatYPosition: number;

  /**
   * Constructs a new Gato
   *
   * @param phrase the phrase the cat should say
   * @param xPosition the x position of the kat
   * @param yPosition the y position of the kat
   * @param game the game object
   * @param catHat the cat hat type
   */
  public constructor(
    phrase: string,
    xPosition: number,
    yPosition: number,
    game: Game,
  ) {
    this.game = game;
    this.phrase = phrase;
    this.power = false;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.keyboard = new KeyListener();
    this.timer = 45;
    this.image = Static.loadNewImage('./assets/img/cat.png');
    this.image.height = this.game.getCanvasHeight() / 3;
    this.image.width = this.image.height * Gato.ASPECTRATIO;
    this.hatYPosition = 0;
    this.update();
  }

  /**
   * processes the input for the cat
   */
  public processInput(): void {
    if (this.keyboard.isKeyDown(67) && this.timer >= 15) {
      this.timer = 0;
      this.power = !this.power;
    } else {
      this.timer += 1;
    }
    this.update();
  }

  public update(): void {
    this.catHat = this.game.getCatHat();
    // console.log(this.catHat);
    if (this.catHat === 1) {
      this.hat = Static.loadNewImage('./assets/img/greenhat.png');
      this.hat.width = this.image.width / Gato.HAT_WIDTH;
      this.hat.height = this.hat.width * 0.77328;
      this.hatYPosition = 5;
    } else if (this.catHat === 2) {
      this.hat = Static.loadNewImage('./assets/img/springhat.png');
      this.hat.width = this.image.width / Gato.HAT_WIDTH;
      this.hat.height = this.hat.width * 0.49726;
      this.hatYPosition = this.hat.height / 2;
    } else if (this.catHat === 3) {
      this.hat = Static.loadNewImage('./assets/img/birthdayhat.png');
      this.hat.width = this.image.width / Gato.HAT_WIDTH;
      this.hat.height = this.hat.width * 1.7;
      this.hatYPosition = -this.hat.height / 2;
    } else if (this.catHat === 4) {
      this.hat = Static.loadNewImage('./assets/img/witchhat.png');
      this.hat.width = this.image.width / Gato.HAT_WIDTH;
      this.hat.height = this.hat.width * 0.76411;
      this.hatYPosition = 0;
    } else {
      this.hat = Static.loadNewImage('./assets/img/blank.png');
      this.hat.height = this.image.height / Gato.HAT_WIDTH;
      this.hat.width = 0;
      this.hatYPosition = 0;
    }
  }

  /**
   * renders the kat
   *
   * @param ctx the canvas rendering context 2d
   * @param canvas the canvas the cat will paint on
   */
  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    ctx.drawImage(this.image, this.xPosition, this.yPosition, this.image.width, this.image.height);
    // console.log(this.catHat);
    if (this.catHat !== 0) {
      // console.log(this.hat);
      ctx.drawImage(
        this.hat,
        this.xPosition + (this.image.width / 5),
        this.yPosition + this.hatYPosition,
        this.hat.width,
        this.hat.height,
      );
    }
    if (this.power === true) {
      Static.writeTextToCanvas(canvas, `${this.phrase}`, this.xPosition - 39, this.yPosition - 39, 20, 'white');
      Static.writeTextToCanvas(canvas, `${this.phrase}`, this.xPosition - 40, this.yPosition - 40, 20, 'black');
    } else {
      Static.writeTextToCanvas(canvas, 'Press C for Cat Tips', this.xPosition - 41, this.yPosition - 41, 20, 'white');
      Static.writeTextToCanvas(canvas, 'Press C for Cat Tips', this.xPosition - 40, this.yPosition - 40, 20, 'black');
    }
  }

  /**
   * Sets the position of the x and y
   *
   * @param xPosition the position to set the x to
   * @param yPosition the position to set the y to
   */
  public setPosition(xPosition: number, yPosition: number): void {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
  }

  /**
   * changes the phrase the cat will say
   *
   * @param phrase the new phrase the cat will say
   */
  public setPhrase(phrase: string): void {
    this.phrase = phrase;
  }
}
