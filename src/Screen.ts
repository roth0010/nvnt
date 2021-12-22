import KeyListener from './KeyListener.js';

export default abstract class Screen {
  protected score: number;

  protected keyboard: KeyListener;

  public constructor() {
    this.keyboard = new KeyListener();
  }

  public abstract update(): void;

  public getScore(): number {
    return this.score;
  }

  public abstract processInput(): void;

  public abstract render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void;
}
