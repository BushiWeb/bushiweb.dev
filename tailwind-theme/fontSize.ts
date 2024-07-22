const baseSize = 1; //rem
const fontSizeRatio = 1.25;
const smallFontNumber = 2,
    largeFontNumber = 7;

type ConfigPart = Record<string | number, string>;

function generateFontSizeRatio(
    baseSize: number,
    smallFontNumber: number,
    largeFontNumber: number,
    fontSizeRatio: number,
): ConfigPart {
    const fontSize: ConfigPart = {
        DEFAULT: `${baseSize}rem`,
    };

    for (let i = 1; i <= smallFontNumber; i++) {
        fontSize[`s${i}`] = `${baseSize / fontSizeRatio ** i}rem`;
    }

    for (let i = 1; i <= largeFontNumber; i++) {
        fontSize[`l${i}`] = `${baseSize * fontSizeRatio ** i}rem`;
    }

    fontSize['24'] = '2rem';

    return fontSize;
}

export default generateFontSizeRatio(
    baseSize,
    smallFontNumber,
    largeFontNumber,
    fontSizeRatio,
);
