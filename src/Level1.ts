import Game from './Game.js';
import Level from './Level.js';
import SelectScreen from './SelectScreen.js';
import Static from './Static.js';

export default class Level1 extends Level {
  /**
   * constructs a new Level1 class. This is the profile creation level
   *
   * @param game The game
   */
  public constructor(game: Game) {
    super(game);
  }

  /**
   * processes input
   */
  public processInput(): void {
    // E key
    if (this.keyboard.isKeyDown(69)) {
      this.game.increaseScore(2);
      this.levelPass = 1;
    }
  }

  // es-lint class-methods-use-this disable-next-line
  /**
   * Renders the level1
   *
   * @param ctx the canvas rendering context
   * @param canvas the canvas
   */
  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    const image = Static.loadNewImage('./assets/img/levelonebackground.png');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    this.writeTextToCanvas(canvas, 'Press E to pass the level', canvas.width / 2, 50, 30, 'black');
    const image2 = Static.loadNewImage(this.game.getMonsterType());
    ctx.drawImage(image2, 50, 0, canvas.width, canvas.height);
    const monsterName = this.game.getMonsterName(); // these two lines put the user typed monster on screen, this isn't necessary but it was to test if this screen can acess the name
    this.writeTextToCanvas(canvas, monsterName, canvas.width / 2, 110, 60, 'black');
  }
}
