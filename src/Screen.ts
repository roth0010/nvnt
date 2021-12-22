import KeyListener from './KeyListener.js';

export default abstract class Screen {
  protected score: number;

  protected keyboard: KeyListener;

  /**
   * constructs a new Screen class
   */
  public constructor() {
    this.keyboard = new KeyListener();
  }

  public abstract update(): number;

  /**
   * Getter for the score
   *
   * @returns the score
   */
  public getScore(): number {
    return this.score;
  }

  public increaseScore(amount: number) {
    this.score += amount;
  }

  public abstract processInput(): void;

  public abstract render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void;

  /**
   * Writes text to the canvas
   *
   * @param canvas The canvas to write on
   * @param text - Text to write
   * @param xCoordinate - Horizontal coordinate in pixels
   * @param yCoordinate - Vertical coordinate in pixels
   * @param fontSize - Font size in pixels
   * @param color - The color of the text
   * @param alignment - Where to align the text
   */
   public writeTextToCanvas(
    canvas: HTMLCanvasElement,
    text: string,
    xCoordinate: number,
    yCoordinate: number,
    fontSize: number = 20,
    color: string = 'red',
    alignment: CanvasTextAlign = 'center',
  ): void {
    const ctx = canvas.getContext('2d');
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = alignment;
    ctx.fillText(text, xCoordinate, yCoordinate);
  }
}
