import { faVials } from '@fortawesome/free-solid-svg-icons';
import { render } from '@tests/utils';
import { expect, test } from 'vitest';
import { SocialLink } from './SocialLink';

test('The social link renders with the right icon, title and link', () => {
    const props = {
        icon: faVials,
        title: 'test',
        link: 'https://www.larousse.fr/dictionnaires/francais/test/77497',
    };
    const { getByRole } = render(<SocialLink {...props} />);
    const svgElt = getByRole('img', { name: props.title });
    const linkElt = getByRole('link', { name: props.title });
    expect(linkElt).toHaveAttribute('href', props.link);
    expect(svgElt).toHaveClass(new RegExp(props.icon.iconName));
});

test('The social link renders with the right class name', () => {
    const props = {
        icon: faVials,
        title: 'test',
        link: 'https://www.larousse.fr/dictionnaires/francais/test/77497',
        className: 'test',
    };
    const { getByRole } = render(<SocialLink {...props} />);
    const linkElt = getByRole('link', { name: props.title });
    expect(linkElt).toHaveClass(props.className);
});
