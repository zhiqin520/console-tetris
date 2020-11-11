import Tetromino from './Tetromino';
import Cell from './Cell';
import { TYPE_T } from '../constant/tetrominoType';

export default class T extends Tetromino {
    /**
     *  口口口
     *   口
     */
    constructor() {
        super();
        this.cells[0] = new Cell(0, 0, TYPE_T);
        this.cells[1] = new Cell(0, 1, TYPE_T);
        this.cells[2] = new Cell(0, 2, TYPE_T);
        this.cells[3] = new Cell(1, 1, TYPE_T);

        this.centerCellIndex = 1;
    }
}
