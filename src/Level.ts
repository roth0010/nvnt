import Screen from './Screen.js';

export default abstract class Level extends Screen {
  protected levelPass: number;

  /**
   * Constructs a new Level class
   */
  public constructor() {
    super();
    this.levelPass = 0;
    this.score = 0;
  }

  /**
   * updates the game
   *
   * @returns whether to move onto the next level
   */
  public update(): number {
    return this.levelPass;
  }
}
