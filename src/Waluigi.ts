import Player from './Player.js';

export default class Waluigi extends Player {
  /**
   * Creates a new Waluigi class. God help us.
   *
   * @param xPosition starting X position
   * @param yPosition starting Y position
   */
  public constructor(xPosition: number, yPosition: number) {
    super('./assets/img/Waluigi.png', xPosition, yPosition);
  }
}
