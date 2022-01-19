import KeyListener from './KeyListener.js';
import Static from './Static.js';
export default class Shop {
    keyboard;
    taco;
    active;
    affordWitchHat;
    affordSpringHat;
    affordBirthdayHat;
    affordGreenHat;
    ownWitchHat;
    ownSpringHat;
    ownBirthdayHat;
    ownGreenHat;
    timer;
    constructor(taco) {
        this.keyboard = new KeyListener();
        this.taco = taco;
        this.active = false;
        this.affordBirthdayHat = false;
        this.affordGreenHat = false;
        this.affordSpringHat = false;
        this.affordWitchHat = false;
        this.ownBirthdayHat = false;
        this.ownGreenHat = false;
        this.ownSpringHat = false;
        this.ownWitchHat = false;
        this.timer = 0;
    }
    processInput() {
        if (this.timer >= 45) {
            if (this.keyboard.isKeyDown(83)) {
                this.active = !this.active;
                this.timer = 0;
            }
            if (this.keyboard.isKeyDown(49) && this.affordGreenHat && !this.ownGreenHat) {
                this.taco.increaseTaco(-500);
                this.ownGreenHat = true;
            }
            if (this.keyboard.isKeyDown(50) && this.affordSpringHat && !this.ownSpringHat) {
                this.taco.increaseTaco(-1000);
                this.ownSpringHat = true;
            }
            if (this.keyboard.isKeyDown(49) && this.affordBirthdayHat && !this.ownBirthdayHat) {
                this.taco.increaseTaco(-1500);
                this.ownBirthdayHat = true;
            }
            if (this.keyboard.isKeyDown(49) && this.affordWitchHat && !this.ownWitchHat) {
                this.taco.increaseTaco(-2000);
                this.ownWitchHat = true;
            }
        }
        else {
            this.timer += 1;
        }
    }
    update() {
        if (this.taco.getTaco() >= 500) {
            this.affordGreenHat = true;
        }
        if (this.taco.getTaco() >= 1000) {
            this.affordSpringHat = true;
        }
        if (this.taco.getTaco() >= 1500) {
            this.affordBirthdayHat = true;
        }
        if (this.taco.getTaco() >= 2000) {
            this.affordWitchHat = true;
        }
    }
    render(canvas) {
        if (this.active === true) {
            console.log('active!');
        }
        else {
            Static.writeTextToCanvas(canvas, 'Press T to open the Taco Shop!', canvas.width / 10, canvas.height - 50, 30, 'black');
        }
    }
}
//# sourceMappingURL=Shop.js.map