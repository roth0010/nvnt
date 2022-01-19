export default class Static {
  /**
   * Returns a random number between min and max
   *
   * @param min - lower boundary
   * @param max - upper boundary
   * @returns a random number between min and max
   */
  public static integer(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  /**
   * Method to load an image
   *
   * @param source the source
   * @returns HTMLImageElement - returns an image
   */
  public static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }

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
  public static writeTextToCanvas(
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

  /**
   * Returns a precalculated number to determine the ratio of height to width of the monster's
   * image to ensure no distortion when resizing the monster's image.
   *
   * @param monsterType the type of monster
   * @returns the aspect ratio of the monster
   */
  public static getMonsterAR(monsterType: string): number {
    if (monsterType === './assets/img/Davy.png') {
      return 0.6201;
    }
    if (monsterType === './assets/img/Jorgen.png') {
      return 0.9104;
    }
    if (monsterType === './assets/img/Ogalybogaly.png') {
      return 0.842;
    }
    if (monsterType === './assets/img/Poppy.png') {
      return 0.8947;
    }
    if (monsterType === './assets/img/Whick.png') {
      return 1.64624;
    }
    console.log('uh oh, looks like its broken');
    return 0;
  }
}
