import Game from './Game.js';
import Level from './Level.js';
import Static from './Static.js';

export default abstract class Phone extends Level {
  protected image: HTMLImageElement;

  /**
   * Abstract class phone creation thing. Yay.
   *
   * @param game the game object
   */
  public constructor(game: Game) {
    super(game);
    this.image = Static.loadNewImage('./assets/img/Phone.png');
  }

  public abstract processInput(): void;

  /**
   * renders a phone. Wow.
   *
   * @param ctx canvas rendering context for canvas rendering
   * @param canvas the canvas to paint on
   */
  public abstract render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void;
}
