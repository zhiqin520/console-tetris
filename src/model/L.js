import Tetromino from './Tetromino';
import Cell from './Cell';
import { TYPE_L } from '../constant/tetrominoType';

export default class L extends Tetromino {
    /**  \--------- y 轴
     *   \ 口
     *   \ 口
     *   \ 口 口
     *   x 轴
     */
    constructor() {
        super();
        this.cells[0] = new Cell(0, 0, TYPE_L);
        this.cells[1] = new Cell(1, 0, TYPE_L);
        this.cells[2] = new Cell(2, 0, TYPE_L);
        this.cells[3] = new Cell(2, 1, TYPE_L);

        this.centerCellIndex = 2;
    }
}
