import T from '../model/T';
import O from '../model/O';
import I from '../model/I';
import J from '../model/J';
import L from '../model/L';
import S from '../model/S';
import Z from '../model/Z';

export default function makeRandomTetromino(clientWidth) {
    // 随机获得一个形状
    const tetrominoList = [T, O, I, J, L, S, Z];
    const index = Math.floor(Math.random() * tetrominoList.length);
    const tetromino = new tetrominoList[index]();

    // 将形状整体向上抬升
    let upNum = 0;
    let maxY = 0;
    tetromino.cells.forEach((cell) => {
        if (cell.x > upNum) {
            upNum = cell.x;
        }
        if (cell.y > maxY) {
            maxY = cell.y;
        }
    });
    tetromino.cells.forEach((cell) => {
        cell.x -= upNum;
    });

    // 形状移动到 client 中心
    if (clientWidth) {
        const offsetY = Math.ceil(((clientWidth - 1) - maxY) / 2);

        tetromino.cells.forEach((cell) => {
            cell.y += offsetY;
        });
    }

    return tetromino;
}
