import {
    DwArrow, RightArrow, LeftArrow, Spacebar, Enter
} from './constant/keyboard';
import { TYPE_EMPTY } from './constant/tetrominoType';
import { makeRandomTetromino, ConsoleHtml } from './util';

export default class Tetris {
    constructor(clientWidth, clientHeight) {
        if (this.clientWidth < 4 || this.clientHeight < 4) {
            console.error('屏幕太小了');
        }
        this.clientWidth = clientWidth;
        this.clientHeight = clientHeight;
        this.dropDownTimeInterval = 1500;
        this.score = 0;
        this.state = {
            start: false
        };
    }

    begin() {
        // 初始化键盘监听
        this.initKeyboardListener();
    }

    init() {
        // 记录已经落下的方块，是和屏幕一样大小的二维数组
        this.walls = new Array(this.clientHeight);
        for (let i = 0; i < this.clientHeight; i += 1) {
            this.walls[i] = new Array(this.clientWidth);
            for (let j = 0; j < this.clientWidth; j += 1) {
                this.walls[i][j] = TYPE_EMPTY;
            }
        }
    }

    initKeyboardListener() {
        document.onkeydown = ({ keyCode }) => {
            switch (keyCode) {
            case Enter:
                if (!this.state.start) {
                    this.start();
                }
                break;
            case Spacebar:
                if (this.state.start) {
                    this.tetromino.rotate();
                    if (this.isCrossBorder() || this.isCollision()) {
                        // 转三次回到原位
                        this.tetromino.rotate();
                        this.tetromino.rotate();
                        this.tetromino.rotate();
                    }
                }
                break;
            case RightArrow:
                if (this.state.start) {
                    this.tetromino.right();
                    if (this.isCrossBorder() || this.isCollision()) {
                        this.tetromino.left();
                    }
                }
                break;
            case LeftArrow:
                if (this.state.start) {
                    this.tetromino.left();
                    if (this.isCrossBorder() || this.isCollision()) {
                        this.tetromino.right();
                    }
                }
                break;
            case DwArrow:
                if (this.state.start) {
                    this.dropDown();
                }
                break;
            default:
                break;
            }

            if (this.state.start) {
                this.render();
            }
        };
    }

    start() {
        this.init();
        // 当前屏幕上的方块
        this.tetromino = makeRandomTetromino(this.clientWidth);
        // 初始化定时器
        this.initDropInterval();
        this.state.start = true;
    }

    dropDown() {
        if (this.canDrop()) {
            this.tetromino.drop();
        } else {
            this.landToWall();
            this.eliminateLine();
            this.tetromino = makeRandomTetromino(this.clientWidth);

            if (this.isCollision()) {
                this.gameOver();
            }
        }
    }

    initDropInterval() {
        this.dropInterval = window.setInterval(() => {
            if (this.state.start) {
                this.dropDown();
            }
            if (this.state.start) {
                this.render();
            }
        }, this.dropDownTimeInterval);
    }

    canDrop() {
        let canDrop = true;
        this.tetromino.cells.forEach(({ x, y }) => {
            // 判断是否到达底部
            // 判断下方是否有方块
            if (x === this.clientHeight - 1) {
                canDrop = false;
            } else if (x + 1 >= 0 && this.walls[x + 1][y] !== TYPE_EMPTY) {
                canDrop = false;
            }
        });

        return canDrop;
    }

    landToWall() {
        this.tetromino.cells.forEach(({ x, y, type }) => {
            if (x < 0) {
                this.gameOver();
            } else {
                this.walls[x][y] = type;
            }
        });
    }

    gameOver() {
        console.log('游戏结束，请重新开始');
        this.state.start = false;
        if (this.dropInterval) {
            window.clearInterval(this.dropInterval);
        }
        this.tetromino = null;
    }

    eliminateLine() {
        for (let i = 0; i < this.clientHeight; i += 1) {
            // 检测是否可以消除
            let canRemoveLine = true;
            for (let j = 0; j < this.clientWidth; j += 1) {
                if (this.walls[i][j] === TYPE_EMPTY) {
                    canRemoveLine = false;
                }
            }

            // 消除一行，生成新的行，增加分数
            if (canRemoveLine) {
                const newLine = new Array(this.clientWidth);
                for (let k = 0; k < this.clientWidth; k += 1) {
                    newLine[k] = TYPE_EMPTY;
                }
                this.walls.splice(i, 1);
                this.walls.unshift(newLine);
                this.score += 10;
            }
        }
    }

    // 绘图逻辑
    render() {
        const htmlBuilder = new ConsoleHtml();
        const blocks = [];

        // 从 this.walls 和 this.tetromino 拷贝数据
        for (let i = 0; i < this.walls.length; i += 1) {
            const [...arrItem] = this.walls[i];
            blocks.push(arrItem);
        }
        if (this.tetromino) {
            this.tetromino.cells.forEach((cell) => {
                if (cell.x >= 0) {
                    blocks[cell.x][cell.y] = cell.type;
                }
            });
        }

        // 生成
        for (let i = 0; i < this.clientHeight; i += 1) {
            for (let j = 0; j < this.clientWidth; j += 1) {
                htmlBuilder.appendBlockByType(blocks[i][j]);
            }
            htmlBuilder.nextLine();
        }

        console.clear();
        console.log(`当前分数: ${this.score}`);
        console.log(htmlBuilder.getResult(), ...htmlBuilder.getParams());
    }

    // 检查是否碰撞
    isCollision() {
        return this.tetromino.cells.find(({ x, y }) => x >= 0 && this.walls[x][y] !== TYPE_EMPTY);
    }


    // 检查是否越界
    isCrossBorder() {
        return this.tetromino.cells.find(({ x, y }) => y < 0 || y >= this.clientWidth || x < 0 || x >= this.clientHeight);
    }
}
