export default class Tetromino {
    constructor() {
        this.cells = new Array(4);
        this.centerCellIndex = -1;
    }

    left() {
        this.cells.forEach((cell) => {
            cell.y -= 1;
        });
    }

    right() {
        this.cells.forEach((cell) => {
            cell.y += 1;
        });
    }

    rotate90Formula(x, y, a, b) {
        return [y - b + a, a - x + b];
    }

    rotate() {
        if (this.centerCellIndex >= 0) {
            const centerCell = this.cells[this.centerCellIndex];
            this.cells.forEach((cell) => {
                cell.updatePosition(...this.rotate90Formula(cell.x, cell.y, centerCell.x, centerCell.y));
            });
        }
    }

    drop() {
        this.cells.forEach((cell) => {
            cell.x += 1;
        });
    }
}
