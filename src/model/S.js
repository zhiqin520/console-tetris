import Tetromino from './Tetromino';
import Cell from './Cell';
import { TYPE_S } from '../constant/tetrominoType';

export default class S extends Tetromino {
    /**
     *  口
     *  口 口
     *     口
     */
    constructor() {
        super();
        this.cells[0] = new Cell(0, 0, TYPE_S);
        this.cells[1] = new Cell(1, 0, TYPE_S);
        this.cells[2] = new Cell(1, 1, TYPE_S);
        this.cells[3] = new Cell(2, 1, TYPE_S);

        this.centerCellIndex = 1;
    }
}
