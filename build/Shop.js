import KeyListener from './KeyListener.js';
import Static from './Static.js';
import Gato from './Gato.js';
export default class Shop {
    static PRICE_POSITION_Y = 90;
    static TITLE_POSITION_Y = 120;
    static TITLE_FONT_SIZE = 30;
    static PRICE_FONT_SIZE = 30;
    keyboard;
    taco;
    cat;
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
    game;
    constructor(taco, game) {
        this.game = game;
        this.cat = new Gato('Om mijn hoed weg te halen, druk op 0', this.game.getCanvasWidth() / 2, this.game.getCanvasHeight() / 3, game);
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
        this.cat.processInput();
        if (this.timer >= 30) {
            if (this.keyboard.isKeyDown(84)) {
                this.active = !this.active;
                this.timer = 0;
                console.log(this.active);
            }
            if (this.active) {
                if (this.keyboard.isKeyDown(49) && this.affordGreenHat && !this.ownGreenHat) {
                    this.taco.increaseTaco(-500);
                    this.ownGreenHat = true;
                    this.game.setCatHat(1);
                    console.log('oh no, I`ma drowning in zuchini!');
                    this.timer = 0;
                }
                if (this.keyboard.isKeyDown(50) && this.affordSpringHat && !this.ownSpringHat) {
                    this.taco.increaseTaco(-1000);
                    this.ownSpringHat = true;
                    this.game.setCatHat(2);
                    this.timer = 0;
                }
                if (this.keyboard.isKeyDown(51) && this.affordBirthdayHat && !this.ownBirthdayHat) {
                    this.taco.increaseTaco(-1500);
                    this.ownBirthdayHat = true;
                    this.game.setCatHat(3);
                    this.timer = 0;
                }
                if (this.keyboard.isKeyDown(52) && this.affordWitchHat && !this.ownWitchHat) {
                    this.taco.increaseTaco(-2000);
                    this.ownWitchHat = true;
                    this.game.setCatHat(4);
                    this.timer = 0;
                }
                if (this.keyboard.isKeyDown(48) && this.game.getCatHat() !== 0) {
                    this.game.setCatHat(0);
                    this.timer = 0;
                }
                if (this.keyboard.isKeyDown(49) && this.ownGreenHat && this.game.getCatHat() !== 1) {
                    this.game.setCatHat(1);
                    this.timer = 0;
                }
                if (this.keyboard.isKeyDown(50) && this.ownSpringHat && this.game.getCatHat() !== 2) {
                    this.game.setCatHat(2);
                    this.timer = 0;
                }
                if (this.keyboard.isKeyDown(51) && this.ownBirthdayHat && this.game.getCatHat() !== 3) {
                    this.game.setCatHat(3);
                    this.timer = 0;
                }
                if (this.keyboard.isKeyDown(52) && this.ownWitchHat && this.game.getCatHat() !== 4) {
                    this.game.setCatHat(4);
                    this.timer = 0;
                }
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
        else {
            this.affordGreenHat = false;
        }
        if (this.taco.getTaco() >= 1000) {
            this.affordSpringHat = true;
        }
        else {
            this.affordSpringHat = false;
        }
        if (this.taco.getTaco() >= 1500) {
            this.affordBirthdayHat = true;
        }
        else {
            this.affordBirthdayHat = false;
        }
        if (this.taco.getTaco() >= 2000) {
            this.affordWitchHat = true;
        }
        else {
            this.affordWitchHat = false;
        }
    }
    render(canvas) {
        const ctx = canvas.getContext('2d');
        if (this.active === true) {
            ctx.beginPath();
            ctx.rect(10, 10, canvas.width - 20, canvas.height - 20);
            ctx.fillStyle = 'white';
            ctx.fill();
            this.cat.render(ctx, canvas);
            Static.writeTextToCanvas(canvas, 'Taco Shop', canvas.width / 2, 100, 40, 'black');
            Static.writeTextToCanvas(canvas, 'Je kunt hier hoeden kopen voor de kat!', canvas.width / 2, 150, 25, 'black');
            Static.writeTextToCanvas(canvas, '[1] Groene hoed', canvas.width / 5, canvas.height - Shop.TITLE_POSITION_Y, Shop.TITLE_FONT_SIZE, 'black');
            Static.writeTextToCanvas(canvas, '[2] Lentehoed', (canvas.width * 2) / 5, canvas.height - Shop.TITLE_POSITION_Y, Shop.TITLE_FONT_SIZE, 'black');
            Static.writeTextToCanvas(canvas, '[3] Verjaardagshoed', (canvas.width * 3) / 5, canvas.height - Shop.TITLE_POSITION_Y, Shop.TITLE_FONT_SIZE, 'black');
            Static.writeTextToCanvas(canvas, '[4] Heksenhoed', (canvas.width * 4) / 5, canvas.height - Shop.TITLE_POSITION_Y, Shop.TITLE_FONT_SIZE, 'black');
            if (this.ownGreenHat === false) {
                if (this.affordGreenHat === false) {
                    Static.writeTextToCanvas(canvas, 'Niet genoeg taco`s!', canvas.width / 5, canvas.height - Shop.PRICE_POSITION_Y, Shop.PRICE_FONT_SIZE, 'Red');
                }
                else {
                    Static.writeTextToCanvas(canvas, '500 Taco`s', canvas.width / 5, canvas.height - Shop.PRICE_POSITION_Y, Shop.PRICE_FONT_SIZE, 'Red');
                }
            }
            else if (this.game.getCatHat() === 1) {
                Static.writeTextToCanvas(canvas, 'Opgezet!', canvas.width / 5, canvas.height - Shop.PRICE_POSITION_Y, Shop.PRICE_FONT_SIZE, 'Green');
            }
            else {
                Static.writeTextToCanvas(canvas, 'Gekocht!', canvas.width / 5, canvas.height - Shop.PRICE_POSITION_Y, Shop.PRICE_FONT_SIZE, 'Blue');
            }
            if (this.ownSpringHat === false) {
                if (this.affordSpringHat === false) {
                    Static.writeTextToCanvas(canvas, 'Niet genoeg taco`s!', (canvas.width * 2) / 5, canvas.height - Shop.PRICE_POSITION_Y, Shop.PRICE_FONT_SIZE, 'Red');
                }
                else {
                    Static.writeTextToCanvas(canvas, '1000 taco`s', (canvas.width * 2) / 5, canvas.height - Shop.PRICE_POSITION_Y, Shop.PRICE_FONT_SIZE, 'Red');
                }
            }
            else if (this.game.getCatHat() === 2) {
                Static.writeTextToCanvas(canvas, 'Opgezet!', (canvas.width * 2) / 5, canvas.height - Shop.PRICE_POSITION_Y, Shop.PRICE_FONT_SIZE, 'Green');
            }
            else {
                Static.writeTextToCanvas(canvas, 'Gekocht!', (canvas.width * 2) / 5, canvas.height - Shop.PRICE_POSITION_Y, Shop.PRICE_FONT_SIZE, 'Blue');
            }
            if (this.ownBirthdayHat === false) {
                if (this.affordBirthdayHat === false) {
                    Static.writeTextToCanvas(canvas, 'Niet genoeg taco`s!', (canvas.width * 3) / 5, canvas.height - Shop.PRICE_POSITION_Y, Shop.PRICE_FONT_SIZE, 'Red');
                }
                else {
                    Static.writeTextToCanvas(canvas, '1500 taco`s', (canvas.width * 3) / 5, canvas.height - Shop.PRICE_POSITION_Y, Shop.PRICE_FONT_SIZE, 'Red');
                }
            }
            else if (this.game.getCatHat() === 3) {
                Static.writeTextToCanvas(canvas, 'Opgezet!', (canvas.width * 3) / 5, canvas.height - Shop.PRICE_POSITION_Y, Shop.PRICE_FONT_SIZE, 'Green');
            }
            else {
                Static.writeTextToCanvas(canvas, 'Gekocht!', (canvas.width * 3) / 5, canvas.height - Shop.PRICE_POSITION_Y, Shop.PRICE_FONT_SIZE, 'Blue');
            }
            if (this.ownWitchHat === false) {
                if (this.affordWitchHat === false) {
                    Static.writeTextToCanvas(canvas, 'Niet genoeg taco`s!', (canvas.width * 4) / 5, canvas.height - Shop.PRICE_POSITION_Y, Shop.PRICE_FONT_SIZE, 'Red');
                }
                else {
                    Static.writeTextToCanvas(canvas, '2000 taco`s!', (canvas.width * 4) / 5, canvas.height - Shop.PRICE_POSITION_Y, Shop.PRICE_FONT_SIZE, 'Red');
                }
            }
            else if (this.game.getCatHat() === 4) {
                Static.writeTextToCanvas(canvas, 'Opgezet!', (canvas.width * 4) / 5, canvas.height - Shop.PRICE_POSITION_Y, Shop.PRICE_FONT_SIZE, 'Green');
            }
            else {
                Static.writeTextToCanvas(canvas, 'Gekocht!', (canvas.width * 4) / 5, canvas.height - Shop.PRICE_POSITION_Y, Shop.PRICE_FONT_SIZE, 'Blue');
            }
        }
        else {
            Static.writeTextToCanvas(canvas, 'de taco shop te openen!', canvas.width / 6, canvas.height - 50, 30, 'black');
            Static.writeTextToCanvas(canvas, 'druk op T om', canvas.width / 6, canvas.height - 85, 30, 'black');
        }
    }
    setActive(state) {
        this.active = state;
    }
}
//# sourceMappingURL=Shop.js.map