import Tetromino from './Tetromino';
import Cell from './Cell';
import { TYPE_I } from '../constant/tetrominoType';

export default class O extends Tetromino {
    /**
     *  口口
     *  口口
     */
    constructor() {
        super();
        this.cells[0] = new Cell(0, 0, TYPE_I);
        this.cells[1] = new Cell(1, 0, TYPE_I);
        this.cells[2] = new Cell(2, 0, TYPE_I);
        this.cells[3] = new Cell(3, 0, TYPE_I);

        this.centerCellIndex = 1;
    }
}
