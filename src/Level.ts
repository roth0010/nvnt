import Screen from './Screen.js';
import Game from './Game.js';
import Shop from './Shop.js';

export default abstract class Level extends Screen {
  protected levelPass: number;

  protected shop: Shop;

  /**
   * Constructs a new Level class
   *
   * @param game The game
   */
  public constructor(game: Game) {
    super(game);
    // console.log('sjehjtiawebvgtgoqyuwn');
    this.game.setScore(0);
    this.levelPass = 0;
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
