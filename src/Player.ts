import Static from './Static.js';

export default abstract class Player {
  private xPosition: number;

  private yPosition: number;

  private image: HTMLImageElement;

  /**
   * constructs a new player class
   *
   * @param image the string for the image
   * @param xPosition the starting x position
   * @param yPosition the starting y position
   */
  public constructor(image: string, xPosition: number, yPosition: number) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.image = Static.loadNewImage(image);
  }

  /**
   * Sets a new position
   *
   * @param xPosition the new xPosition
   * @param yPosition the new yPosition
   */
  public setPosition(xPosition: number, yPosition: number): void {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
  }

  /**
   * renders the player
   *
   * @param ctx the canvas rendering context
   */
  public render(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image, this.xPosition, this.yPosition);
  }
}
