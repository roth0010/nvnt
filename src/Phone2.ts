import Phone from './Phone.js';

export default class Phone2 extends Phone {
  public processInput(): void {
    if (this.keyboard.isKeyDown(65)) {
      this.game.setScore(2);
      this.levelPass = 1;
    }
  }

  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    ctx.drawImage(
      this.image,
      (canvas.width / 100),
      canvas.width / 100 - 50,
      this.image.width,
      this.image.height,
    );
    this.writeTextToCanvas(canvas, 'Press A to pass the level', canvas.width / 2, 50, 30, 'black');
  }
}
