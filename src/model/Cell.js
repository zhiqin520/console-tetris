export default class Cell {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    updatePosition(x, y) {
        console.log(x,y)
        this.x = x;
        this.y = y;
    }
}
