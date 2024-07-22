import clsx from 'clsx';
import { ListProps } from './List.props';

/**
 * List component for document writing.
 * Allows to insert either unordered (default) or ordered lists.
 * @prop {boolean} [ordered=false] - Weither to use an ordered list or not.
 * @prop {string} [className]
 * @prop children
 */
export const List = ({
    children,
    ordered = false,
    className = '',
}: ListProps) => {
    const classNames = [
        'font-primary',
        'font-normal',
        'text-m',
        'leading-normal',
        'mt-200',
        'mb-250',
        'pl-500',
        className,
    ];

    if (ordered) {
        return <ol className={clsx('list-decimal', classNames)}>{children}</ol>;
    }

    return <ul className={clsx('list-disc', classNames)}>{children}</ul>;
};

/** Exports the ListItem */
export { ListItem } from './ListItem';
