export default class Static {
    static integer(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    static writeTextToCanvas(canvas, text, xCoordinate, yCoordinate, fontSize = 20, color = 'red', alignment = 'center') {
        const ctx = canvas.getContext('2d');
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static getMonsterAR(monsterType) {
        if (monsterType === './assets/img/Davy.png') {
            return 0.6201;
        }
        if (monsterType === './assets/img/Jorgen.png') {
            return 0.9104;
        }
        if (monsterType === './assets/img/ogalybogaly.png') {
            return 0.842;
        }
        if (monsterType === './assets/img/Poppy.png') {
            return 0.8947;
        }
        if (monsterType === './assets/img/whick.png') {
            return 1.64624;
        }
        console.log('uh oh, looks like its broken');
        return 0;
    }
}
//# sourceMappingURL=Static.js.map