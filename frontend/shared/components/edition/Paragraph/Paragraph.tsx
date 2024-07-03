import classNames from 'classnames';
import TYPO_CLASSNAMES from './Paragraph.const';
import './Paragraph.css';

/**
 * Paragraph component, inserts a classic paraphraph with the right class name.
 */
export default function Paragraph({
    children,
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={classNames(TYPO_CLASSNAMES[1], 'paragraph')}>
            {children}
        </p>
    );
}
