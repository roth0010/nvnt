import Game from './Game.js';
import Screen from './Screen.js';
import Static from './Static.js';
import Taco from './Taco.js';

export default class ScoreScreen extends Screen {
  private levelPass: number;

  private taco: Taco;

  private addTaco: boolean;

  /**
   * Constructs a new ScoreScreen class
   *
   * @param game The game
   * @param taco The taco class
   */
  public constructor(game: Game, taco: Taco) {
    super(game);
    this.levelPass = 0;
    this.taco = taco;
    this.addTaco = false;
  }

  /**
   * processes the input
   */
  public processInput(): void {
    // R key
    // console.log(this.score);
    if (this.game.getScore() < this.game.getGoal()) {
      this.levelPass = 2;
      // S key
    } else if (this.game.getScore() >= this.game.getGoal()) {
      if (this.addTaco === false) {
        this.taco.increaseTaco(this.game.getScore() * 100);
        this.addTaco = true;
      }
      this.levelPass = 1;
    }
  }

  /**
   * Updates the ScoreScreen class
   *
   * @returns whether to move onto the next level
   */
  public update(): number {
    // console.log(this.levelPass);
    // R key
    if (this.keyboard.isKeyDown(82) && this.levelPass === 2) {
      this.game.setScore(0);
      this.game.setMistakeScore(0);
      this.game.clearFeedback();
      return this.levelPass;
    }
    // S key
    if (this.levelPass === 1 && this.keyboard.isKeyDown(83)) {
      this.game.setScore(0);
      this.game.setMistakeScore(0);
      this.game.clearFeedback();
      return this.levelPass;
    }
    return 0;
  }

  /**
   * renders the ScoreScreen
   *
   * @param ctx the context to render on
   * @param canvas the canvas to render on
   */
  public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    Static.writeTextToCanvas(canvas, `Your Score: ${this.game.getScore()} points`, canvas.width / 2, ((canvas.height / 2) - 300), 30, 'Red');
    Static.writeTextToCanvas(canvas, `Total Number of Tacos: ${this.taco.getTaco()}`, canvas.width / 2, ((canvas.height / 2) - 250), 25, 'black');
    const feedbackArray = this.game.getFeedback();
    if (this.game.getMistakeScore() !== 0 && this.game.getLevelNumber() !== 5) {
      Static.writeTextToCanvas(canvas, 'Here is some advice in case you want to try again:', canvas.width / 2, (canvas.height / 2) - 50, 30, 'Black');
      for (let i = 0; i < this.game.getFeedback().length;) {
        Static.writeTextToCanvas(canvas, feedbackArray[i], canvas.width / 2, (canvas.height / 2) + (i * 40), 20, 'Black');
        i += 1;
      }
    }
    if (this.levelPass === 2) {
      Static.writeTextToCanvas(canvas, 'Looks like you didn`t get enough points to advance.', canvas.width / 2, ((canvas.height / 2) - 350), 30, 'Black');
      Static.writeTextToCanvas(canvas, 'You can do better, press R to try again!', canvas.width / 2, (canvas.height / 2) + 200, 30, 'Black');
    } else if (this.levelPass === 1) {
      Static.writeTextToCanvas(canvas, 'You got enough points to pass! Press S to start the next level', canvas.width / 2, (canvas.height / 2) - 350, 30, 'Black');
    }
  }
}
