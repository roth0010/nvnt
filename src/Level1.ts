import Level from './Level.js';

export default class Level1 extends Level {
  public pointlessVariable: boolean

  public constructor() {
    super()
    this.pointlessVariable = false;
  }

  // public processInput(): void {
  //   this.pointlessVariable = true;
  // }
  public checkLevelUp(): boolean {
    if (this.keyboard.isKeyDown(32)) {
      return true;
    }
    return false;
  }
  // public render(): void {
  //   this.pointlessVariable = false;
  // }
}
