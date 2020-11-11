import { type2Color, color2RGB } from '../constant/tetrominoType';

export default class ConsoleHtml {
    constructor() {
        this.htmlStr = ' ';
        this.params = [];
    }

    appendBlockByType(type) {
        this.htmlStr += '%c■';
        this.params.push(this.generateCSS(type));

        return this;
    }

    generateCSS(type) {
        const colorName = type2Color[type];
        const rgb = color2RGB[colorName];
        return `font-size:36px;line-height:24px;color:${rgb};margin: 0 3px;`;
    }

    nextLine() {
        this.htmlStr += '\n';
    }

    getResult() {
        return this.htmlStr;
    }

    getParams() {
        return this.params;
    }
}
