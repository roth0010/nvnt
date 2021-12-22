import Screen from './Screen.js';

export default class ScoreScreen extends Screen {
  private levelPass: number;

  public constructor() {
    super();
    this.levelPass = 0;
  }

  public processInput(): void {
    if (this.keyboard.isKeyDown(82)) {
      this.levelPass = 1;
    } else if (this.score > 2 && this.keyboard.isKeyDown(83)) {
      this.levelPass = 2;
    }
  }

  public update(): number {
    return this.levelPass;
  }

  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    throw new Error('Method not implemented.');
  }

}
