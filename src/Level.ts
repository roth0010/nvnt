import KeyListener from './KeyListener.js';

export default abstract class Level {
  protected keyboard: KeyListener

  public constructor() {
    this.keyboard = new KeyListener();
  }

  // public abstract processInput(): void;

  public update(): boolean {
    let levelUp = false;
    levelUp = this.checkLevelUp();
    return levelUp
  }

  // public abstract render(): void;

  public abstract checkLevelUp(): boolean;
}
