import { render } from 'shared/tests/tests-utils';
import { expect, test } from 'vitest';
import Logo from './Logo';
import { DEFAULT_ALT, LOGO_HEIGHT, LOGO_WIDTH } from './Logo.const';

test('The logo renders with its default dimensions and alternate text', () => {
    const { getByRole } = render(<Logo />);
    const logo = getByRole('img', { name: DEFAULT_ALT });
    expect(logo).toHaveAttribute('width', LOGO_WIDTH.toString());
    expect(logo).toHaveAttribute('height', LOGO_HEIGHT.toString());
});

test('The logo has the right alternate text', () => {
    const props = { alt: 'test' };
    const { getByRole } = render(<Logo {...props} />);
    getByRole('img', { name: 'test' });
});

test('The logo has the right dimensions', () => {
    const props = {
        width: 10,
        height: 20,
    };
    const { getByRole } = render(<Logo {...props} />);
    const logo = getByRole('img');
    expect(logo).toHaveAttribute('width', props.width.toString());
    expect(logo).toHaveAttribute('height', props.height.toString());
});

test('The logo has the right width and calculates the height', () => {
    const props = {
        width: 10,
    };
    const { getByRole } = render(<Logo {...props} />);
    const logo = getByRole('img');
    expect(logo).toHaveAttribute('width', props.width.toString());
    expect(logo).toHaveAttribute(
        'height',
        ((props.width * LOGO_HEIGHT) / LOGO_WIDTH).toString(),
    );
});

test('The logo has the right height and calculates the width', () => {
    const props = {
        height: 10,
    };
    const { getByRole } = render(<Logo {...props} />);
    const logo = getByRole('img');
    expect(logo).toHaveAttribute('height', props.height.toString());
    expect(logo).toHaveAttribute(
        'width',
        ((props.height * LOGO_WIDTH) / LOGO_HEIGHT).toString(),
    );
});

test('The logo has the right class name', () => {
    const props = { className: 'test' };
    const { getByRole } = render(<Logo {...props} />);
    const logo = getByRole('img');
    expect(logo).toHaveClass(props.className);
});
