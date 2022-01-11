import Game from './Game.js';
import Level from './Level.js';
import Static from './Static.js';

export default abstract class Phone extends Level {
  protected image: HTMLImageElement;

  protected answered: boolean;

  protected correct: boolean;

  protected wait: number;

  /**
   * Abstract class phone creation thing. Yay.
   *
   * @param game the game object
   */
  public constructor(game: Game) {
    super(game);
    this.correct = false;
    this.answered = false;
    this.wait = 0;
    console.log('tests');
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
