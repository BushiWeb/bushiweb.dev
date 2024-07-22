import baseColors from './base-colors';

export default {
    primary: {
        DEFAULT: baseColors.burgundy[70],
        on: baseColors.burgundy[10],
        container: baseColors.burgundy[25],
        'on-container': baseColors.burgundy[80],
        background: baseColors.burgundy[15],
    },
    secondary: {
        DEFAULT: baseColors.orange[70],
        on: baseColors.orange[10],
        container: baseColors.orange[25],
        'on-container': baseColors.orange[80],
        background: baseColors.orange[15],
    },
    tertiary: {
        DEFAULT: baseColors.lapis[70],
        on: baseColors.lapis[10],
        container: baseColors.lapis[25],
        'on-container': baseColors.lapis[80],
        background: baseColors.lapis[15],
    },
    surface: {
        background: baseColors.stone[15],
        layer1: baseColors.stone[20],
        layer2: baseColors.stone[25],
        layer3: baseColors.stone[30],
        layer4: baseColors.stone[35],
        on: baseColors.stone[85],
        'on-variant': baseColors.slate[75],
    },
    outline: {
        DEFAULT: baseColors.slate[70],
        variation: baseColors.slate[50],
    },
    backdrop: {
        DEFAULT: baseColors.black,
    },
    success: {
        DEFAULT: baseColors.green[70],
        on: baseColors.green[10],
        container: baseColors.green[25],
        'on-container': baseColors.green[80],
        background: baseColors.green[15],
    },
    caution: {
        DEFAULT: baseColors.yellow[70],
        on: baseColors.yellow[10],
        container: baseColors.yellow[25],
        'on-container': baseColors.yellow[80],
        background: baseColors.yellow[15],
    },
    danger: {
        DEFAULT: baseColors.red[70],
        on: baseColors.red[10],
        container: baseColors.red[25],
        'on-container': baseColors.red[80],
        background: baseColors.red[15],
    },
    info: {
        DEFAULT: baseColors.blue[70],
        on: baseColors.blue[10],
        container: baseColors.blue[25],
        'on-container': baseColors.blue[80],
        background: baseColors.blue[15],
    },
};
