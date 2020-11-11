import Tetromino from './Tetromino';
import Cell from './Cell';
import { TYPE_J } from '../constant/tetrominoType';

export default class J extends Tetromino {
    /**   口
     *    口
     *  口口
     */
    constructor() {
        super();
        this.cells[0] = new Cell(0, 1, TYPE_J);
        this.cells[1] = new Cell(1, 1, TYPE_J);
        this.cells[2] = new Cell(2, 0, TYPE_J);
        this.cells[3] = new Cell(2, 1, TYPE_J);

        this.centerCellIndex = 3;
    }
}
