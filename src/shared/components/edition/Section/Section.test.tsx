import { render } from '@tests/utils';
import { expect, test } from 'vitest';
import { Section } from './Section';

test('The section renders with the right content and default title level', () => {
    const content =
        'Esse Lorem exercitation culpa proident ullamco aliqua fugiat ut exercitation nisi deserunt occaecat.';
    const heading = 'heading';
    const { getByRole } = render(
        <Section heading={heading}>
            <p>{content}</p>
        </Section>,
    );
    getByRole('region', { name: heading });
    getByRole('heading', { level: 2, name: heading });
    const paragraphElt = getByRole('paragraph');
    expect(paragraphElt).toHaveTextContent(content);
});

test('The section renders with the right title levels when nesting', () => {
    const content =
        'Esse Lorem exercitation culpa proident ullamco aliqua fugiat ut exercitation nisi deserunt occaecat.';
    const { getByRole } = render(
        <Section heading="h2">
            <Section heading="h3">
                <Section heading="h4">
                    <p>{content}</p>
                </Section>
            </Section>
        </Section>,
    );
    getByRole('region', { name: 'h2' });
    getByRole('region', { name: 'h3' });
    getByRole('region', { name: 'h4' });
    getByRole('heading', { level: 2, name: 'h2' });
    getByRole('heading', { level: 3, name: 'h3' });
    getByRole('heading', { level: 4, name: 'h4' });
});

test('The section renders with the right class name', () => {
    const content =
        'Esse Lorem exercitation culpa proident ullamco aliqua fugiat ut exercitation nisi deserunt occaecat.';
    const heading = 'heading',
        className = 'class';

    const { getByRole } = render(
        <Section heading={heading} className={className}>
            <p>{content}</p>
        </Section>,
    );
    const sectionElt = getByRole('region', { name: heading });
    expect(sectionElt).toHaveClass(className);
});
