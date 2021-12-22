import KeyListener from './KeyListener.js';
import Screen from './Screen.js';

export default abstract class Level extends Screen {
  private levelPass: boolean;

  public constructor() {
    super();
    this.levelPass = false;
    this.score = 0;
  }

  public update(): boolean {
    return this.levelPass;
  }
}
