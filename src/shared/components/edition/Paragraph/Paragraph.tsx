import clsx from 'clsx';
import { ParagraphProps } from './Paragraph.props';

/**
 * Paragraph component for document writing.
 * @prop {string} [className=''] - Additional class names.
 * @prop children - Content of the paragraph.
 */
export const Paragraph = ({ className = '', children }: ParagraphProps) => {
    return (
        <p
            className={clsx(
                'font-primary',
                'font-normal',
                'text-m',
                'leading-normal',
                'mt-150',
                'mb-200',
                className,
            )}
        >
            {children}
        </p>
    );
};
