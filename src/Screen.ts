import Game from './Game.js';
import KeyListener from './KeyListener.js';

export default abstract class Screen {
  protected keyboard: KeyListener;

  protected game: Game;

  /**
   * constructs a new Screen class
   *
   * @param game the game
   */
  public constructor(game: Game) {
    this.game = game;
    this.keyboard = new KeyListener();
  }

  public abstract update(): number;

  public abstract processInput(): void;

  public abstract render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void;
}
