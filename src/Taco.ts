export default class Taco {
  taco: number;

  public constructor() {
    this.taco = 0;
  }

  public increaseTaco(number: number): void {
    this.taco += number;
  }

  public getTaco(): number {
    return this.taco;
  }
}
