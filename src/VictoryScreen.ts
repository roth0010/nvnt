import Game from './Game.js';
import Screen from './Screen.js';
import Static from './Static.js';
import Taco from './Taco.js';

export default class VictoryScreen extends Screen {
  private levelPass: number;

  private taco: Taco;

  private addTaco: boolean;

  /**
   * Constructs a new VictoryScreen class
   *
   * @param game The game
   * @param taco The taco class
   */
  public constructor(game: Game, taco: Taco) {
    super(game);
    this.levelPass = 0;
    this.taco = taco;
    this.addTaco = false;
  }

  /**
   * processes the input
   */
  public processInput(): void {
    // R key
    this.levelPass = 3;
  }

  /**
   * Updates the VictoryScreen class
   *
   * @returns whether to move onto the next level
   */
  public update(): number {
    // R key
    if (this.keyboard.isKeyDown(82) && this.levelPass === 3) {
      console.log(this.levelPass);
      this.game.setScore(0);
      return this.levelPass;
    }
    return 0;
  }

  /**
   * renders the VictoryScreen
   *
   * @param ctx the context to render on
   * @param canvas the canvas to render on
   */
  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    Static.writeTextToCanvas(canvas, 'You beat the game! good job!', canvas.width / 2, ((canvas.height / 2) + 50), 30, 'Red');
    Static.writeTextToCanvas(canvas, 'Press R to play again!', canvas.width / 2, ((canvas.height / 2) + 100), 20, 'Red');
  }
}
