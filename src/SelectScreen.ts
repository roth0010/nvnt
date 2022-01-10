import Screen from './Screen.js';
import Game from './Game.js';
import Static from './Static.js';

export default class SelectScreen extends Screen {
  private customMonsterName : string;

  private namedMonster : boolean;

  private selected: boolean;

  private davy: HTMLImageElement;

  private jorgen: HTMLImageElement;

  private ogalybogaly: HTMLImageElement;

  private poppy: HTMLImageElement;

  private whick: HTMLImageElement;

  private selectedMonster: HTMLImageElement;

  /**
   * creates a new Select Screen
   *
   * @param game the game object
   */
  public constructor(game: Game) {
    super(game);
    this.davy = Static.loadNewImage('./assets/img/Davy.png');
    this.jorgen = Static.loadNewImage('./assets/img/Jorgen.png');
    this.ogalybogaly = Static.loadNewImage('./assets/img/Ogalybogaly.png');
    this.poppy = Static.loadNewImage('./assets/img/Poppy.png');
    this.whick = Static.loadNewImage('./assets/img/Whick.png');
    this.selected = false;
    this.namedMonster = false;
  }

  /**
   * returns the custom monster name the player has entered
   * @returns customMonsterName
   */
  public getCustomMonstername() : string {
    return this.customMonsterName;
  }

  /**
   * processes input
   */
  public processInput(): void {
    if (this.selected === false) {
      if (this.keyboard.isKeyDown(49)) {
        this.game.setMonsterType('./assets/img/Davy.png');
        this.selected = true;
      }

      if (this.keyboard.isKeyDown(50)) {
        this.game.setMonsterType('./assets/img/Jorgen.png');
        this.selected = true;
      }

      if (this.keyboard.isKeyDown(51)) {
        this.game.setMonsterType('./assets/img/Ogalybogaly.png');
        this.selected = true;
      }

      if (this.keyboard.isKeyDown(52)) {
        this.game.setMonsterType('./assets/img/Poppy.png');
        this.selected = true;
      }

      if (this.keyboard.isKeyDown(53)) {
        this.game.setMonsterType('./assets/img/Whick.png');
        this.selected = true;
      }
    }
    if (this.selected === true) {
      if (this.keyboard.isKeyDown(69)) {
        this.game.setNewSelectScreen();
      }
    }
  }

  /**
   * Decides whether to advance the screen
   *
   * @returns number, 1 to advance, 0 to stay on the screen
   */
  public update(): number {
    if (this.selected === true && this.keyboard.isKeyDown(32)) {
      this.customMonsterName = window.prompt('please name your monster!');
      console.log(`the monster was named ${this.customMonsterName}`);
      return 1;
    }
    return 0;
  }

  /**
   * renders the select screen
   *
   * @param ctx canvas rendering context 2d
   * @param canvas the canvas to paint the game on
   */
  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    if (this.selected === false) {
      this.writeTextToCanvas(canvas, 'Press the matching number to choose the monster', canvas.width / 2, 50, 30, 'black');
      ctx.drawImage(
        this.davy,

        canvas.width / 4 - this.davy.width * 0.4,
        canvas.height / 1.2 - this.davy.height * 0.4,
        this.davy.width * 0.35,
        this.davy.height * 0.35,

      );
      this.writeTextToCanvas(canvas, '[1] davy', canvas.width / 6, canvas.height - 50, 30, 'black');
      ctx.drawImage(
        this.jorgen,
        (canvas.width * 3) / 6 - this.jorgen.width / 2,
        canvas.height / 1 - this.jorgen.height / 2,
        this.jorgen.width * 0.35,
        this.jorgen.height * 0.35,
      );
      this.writeTextToCanvas(canvas, '[2] jörgen', (canvas.width * 2) / 6, canvas.height - 50, 30, 'black');
      ctx.drawImage(
        this.ogalybogaly,
        (canvas.width * 4.3) / 6 - this.ogalybogaly.width / 2,
        canvas.height / 1 - this.ogalybogaly.height / 2,
        this.ogalybogaly.width * 0.35,
        this.ogalybogaly.height * 0.35,
      );
      this.writeTextToCanvas(canvas, '[3] ogalybogaly', (canvas.width * 3) / 6, canvas.height - 50, 30, 'black');
      ctx.drawImage(
        this.poppy,
        (canvas.width * 5) / 6 - this.poppy.width / 2,
        canvas.height / 1 - this.poppy.height / 2,
        this.poppy.width * 0.35,
        this.poppy.height * 0.35,
      );
      this.writeTextToCanvas(canvas, '[4] poppy', (canvas.width * 4) / 6, canvas.height - 50, 30, 'black');
      ctx.drawImage(
        this.whick,
        (canvas.width * 5) / 4.6 - this.whick.width / 2,
        canvas.height / 1.05 - this.whick.height / 2,
        this.whick.width * 0.35,
        this.whick.height * 0.35,
      );
      this.writeTextToCanvas(canvas, '[5] whick', (canvas.width * 5) / 6, canvas.height - 50, 30, 'black');
    } else if (this.selected === true) {
      this.writeTextToCanvas(canvas, 'Are you sure?', canvas.width / 2, 50, 30, 'black');
      this.writeTextToCanvas(canvas, 'Press the space bar to continue, press E to go back', canvas.width / 2, canvas.height - 50, 30, 'black');
      this.selectedMonster = Static.loadNewImage(this.game.getMonsterType());
      ctx.drawImage(
        this.selectedMonster,
        (canvas.width * 2) / 3.5 - this.selectedMonster.width / 3,
        canvas.height / 1.2 - this.selectedMonster.height / 2,
        this.selectedMonster.width * 0.5,
        this.selectedMonster.height * 0.5,
      );
    }
  }
}
