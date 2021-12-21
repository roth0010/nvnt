import Level from './Level.js';
import Level1 from './Level1.js';
import Level2 from './Level2.js';
import GameLoop from './GameLoop.js';

export default class Game {
  private canvas: HTMLCanvasElement

  private stop: boolean

  private level: Level

  private engine: GameLoop

  private levelUp: boolean

  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.level = new Level1();
    this.stop = false;
    this.levelUp = false;
    this.engine = new GameLoop(this);
    this.engine.start()
  }

  public processInput() {
    // this.level.processInput()
  }

  public update(step: number): boolean {
    if (this.level.update()) {
      this.level = new Level2()
      console.log(this.level);
    }
    return false;
  }

  public render() {
    // this.level.render()
  }

  public setLevelUp(input: boolean): void {
    this.levelUp = input;
  }
}
