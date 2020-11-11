import Tetromino from './Tetromino';
import Cell from './Cell';
import { TYPE_Z } from '../constant/tetrominoType';

export default class Z extends Tetromino {
    /**
     *  口 口
     *     口 口
     */
    constructor() {
        super();
        this.cells[0] = new Cell(0, 0, TYPE_Z);
        this.cells[1] = new Cell(0, 1, TYPE_Z);
        this.cells[2] = new Cell(1, 1, TYPE_Z);
        this.cells[3] = new Cell(1, 2, TYPE_Z);

        this.centerCellIndex = 2;
    }
}
