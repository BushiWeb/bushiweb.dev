import { render } from '@tests/utils';
import { expect, test } from 'vitest';
import { Section } from './Section';

test('The section renders with the right content and default title level and as main content of the page', () => {
    const content =
        'Esse Lorem exercitation culpa proident ullamco aliqua fugiat ut exercitation nisi deserunt occaecat.';
    const heading = 'heading';
    const { getByRole } = render(
        <Section heading={heading}>
            <p>{content}</p>
        </Section>,
    );
    getByRole('main', { name: heading });
    getByRole('heading', { level: 1, name: heading });
    const paragraphElt = getByRole('paragraph');
    expect(paragraphElt).toHaveTextContent(content);
});

test('The section renders with the right title levels when nesting', () => {
    const content =
        'Esse Lorem exercitation culpa proident ullamco aliqua fugiat ut exercitation nisi deserunt occaecat.';
    const { getByRole } = render(
        <Section
            heading="h1"
            childSections={[
                <Section
                    key="h2"
                    heading="h2"
                    childSections={[
                        <Section heading="h3" key="h3">
                            <p>{content}</p>
                        </Section>,
                    ]}
                ></Section>,
            ]}
        ></Section>,
    );
    getByRole('main', { name: 'h1' });
    getByRole('region', { name: 'h2' });
    getByRole('region', { name: 'h3' });
    getByRole('heading', { level: 1, name: 'h1' });
    getByRole('heading', { level: 2, name: 'h2' });
    getByRole('heading', { level: 3, name: 'h3' });
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
    const sectionElt = getByRole('main', { name: heading });
    expect(sectionElt).toHaveClass(className);
});
