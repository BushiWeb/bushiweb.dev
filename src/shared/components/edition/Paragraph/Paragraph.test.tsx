import { render } from '@tests/utils';
import { expect, test } from 'vitest';
import { Paragraph } from './Paragraph';

test('The paragraph renders with the right content', () => {
    const content =
        'Esse Lorem exercitation culpa proident ullamco aliqua fugiat ut exercitation nisi deserunt occaecat. Elit ea aliquip occaecat exercitation consectetur quis ut mollit sint cupidatat ut. Cupidatat adipisicing mollit amet sunt commodo culpa esse dolor irure. Commodo exercitation commodo in velit Lorem tempor. Minim quis sunt non ex laboris fugiat qui et. Consequat pariatur aute et commodo dolore. Dolore consequat fugiat laboris magna do excepteur reprehenderit quis reprehenderit esse aute in excepteur duis.';
    const { getByRole } = render(<Paragraph>{content}</Paragraph>);
    const paragraphElt = getByRole('paragraph');
    expect(paragraphElt).toHaveTextContent(content);
});
