// 定义方块类型
const TYPE_EMPTY = 'EMPTY';
const TYPE_T = 'T';
const TYPE_O = 'O';
const TYPE_I = 'I';
const TYPE_L = 'L';
const TYPE_J = 'J';
const TYPE_S = 'S';
const TYPE_Z = 'Z';

// 定义方块颜色名称
const type2Color = {
    [TYPE_T]: 'Magenta',
    [TYPE_O]: 'DustRed',
    [TYPE_I]: 'SunsetOrange',
    [TYPE_L]: 'SunriseYellow',
    [TYPE_J]: 'PolarGreen',
    [TYPE_S]: 'DaybreakBlue',
    [TYPE_Z]: 'GoldenPurple',
    [TYPE_EMPTY]: 'Empty'
};

// 定义颜色像素
const color2RGB = {
    Magenta: '#eb2f96',
    DustRed: '#f5222d',
    SunsetOrange: '#fa8c16',
    SunriseYellow: '#fadb14',
    PolarGreen: '#52c41a',
    DaybreakBlue: '#1890ff',
    GoldenPurple: '#722ed1',
    Empty: '#EDEDED'
};

export {
    type2Color,
    color2RGB,
    TYPE_T,
    TYPE_O,
    TYPE_I,
    TYPE_L,
    TYPE_J,
    TYPE_S,
    TYPE_Z,
    TYPE_EMPTY
};
