import clsx from 'clsx';
import { ParagraphProps } from './Paragraph.props';

/**
 * Paragraph component for document writing.
 * @prop {string} [className=''] - Additional class names.
 * @prop children - Content of the heading.
 */
export const Paragraph = ({ className = '', children }: ParagraphProps) => {
    return (
        <p
            className={clsx(
                className,
                'font-primary',
                'font-normal',
                'text-m',
                'leading-normal',
                'mt-150',
                'mb-200',
            )}
        >
            {children}
        </p>
    );
};
