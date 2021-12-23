import Screen from './Screen.js';
import Game from './Game.js';
import Static from './Static.js';

export default class SelectScreen extends Screen {
  private selected: boolean;

  private waluigi: HTMLImageElement;

  private selectedMonster: HTMLImageElement;

  public constructor(game: Game) {
    super(game);
    this.waluigi = Static.loadNewImage('./assets/img/Waluigi.png');
    this.selected = false;
  }

  public processInput(): void {
    if (this.selected === false) {
      if (this.keyboard.isKeyDown(49)) {
        this.game.setMonsterType('./assets/img/Waluigi.png');
        this.selected = true;
      }
      if (this.keyboard.isKeyDown(50)) {
        this.game.setMonsterType('./assets/img/Waluigi.png');
        this.selected = true;
      }
      if (this.keyboard.isKeyDown(51)) {
        this.game.setMonsterType('./assets/img/Waluigi.png');
        this.selected = true;
      }
      if (this.keyboard.isKeyDown(52)) {
        this.game.setMonsterType('./assets/img/Waluigi.png');
        this.selected = true;
      }
      if (this.keyboard.isKeyDown(53)) {
        this.game.setMonsterType('./assets/img/Waluigi.png');
        this.selected = true;
      }
    }
    if (this.selected === true) {
      if (this.keyboard.isKeyDown(69)) {
        this.game.setNewSelectScreen();
      }
    }
  }

  public update(): number {
    if (this.selected === true && this.keyboard.isKeyDown(32)) {
      return 1;
    }
    return 0;
  }

  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    if (this.selected === false) {
      this.writeTextToCanvas(canvas, 'Press the matching number to choose the monster', canvas.width / 2, 50, 30, 'black');
      ctx.drawImage(
        this.waluigi,
        canvas.width / 6 - this.waluigi.width / 2,
        canvas.height / 2 - this.waluigi.height / 2,
      );
      this.writeTextToCanvas(canvas, '1: Wa', canvas.width / 6, canvas.height - 50, 30, 'black');
      ctx.drawImage(
        this.waluigi,
        (canvas.width * 2) / 6 - this.waluigi.width / 2,
        canvas.height / 2 - this.waluigi.height / 2,
      );
      this.writeTextToCanvas(canvas, '2: Lu', (canvas.width * 2) / 6, canvas.height - 50, 30, 'black');
      ctx.drawImage(
        this.waluigi,
        (canvas.width * 3) / 6 - this.waluigi.width / 2,
        canvas.height / 2 - this.waluigi.height / 2,
      );
      this.writeTextToCanvas(canvas, '3: i', (canvas.width * 3) / 6, canvas.height - 50, 30, 'black');
      ctx.drawImage(
        this.waluigi,
        (canvas.width * 4) / 6 - this.waluigi.width / 2,
        canvas.height / 2 - this.waluigi.height / 2,
      );
      this.writeTextToCanvas(canvas, '4: gi', (canvas.width * 4) / 6, canvas.height - 50, 30, 'black');
      ctx.drawImage(
        this.waluigi,
        (canvas.width * 5) / 6 - this.waluigi.width / 2,
        canvas.height / 2 - this.waluigi.height / 2,
      );
      this.writeTextToCanvas(canvas, '5: irfin#dnsa ei', (canvas.width * 5) / 6, canvas.height - 50, 30, 'black');
    } else if (this.selected === true) {
      this.writeTextToCanvas(canvas, 'Are you sure?', canvas.width / 2, 50, 30, 'black');
      this.writeTextToCanvas(canvas, 'Press the space bar to continue, press E to go back', canvas.width / 2, canvas.height - 50, 30, 'black');
      this.selectedMonster = Static.loadNewImage(this.game.getMonsterType());
      ctx.drawImage(
        this.selectedMonster,
        (canvas.width * 3) / 6 - this.selectedMonster.width / 2,
        canvas.height / 2 - this.selectedMonster.height / 2,
      );
    }
  }
}
