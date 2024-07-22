import clsx from 'clsx';
import { DescriptionListProps } from './DescriptionList.props';

/**
 * Description list component, to use within documents.
 * @prop {string} [className]
 * @prop children
 */
export function DescriptionList({ children }: DescriptionListProps) {
    return (
        <dl
            className={clsx(
                'w-11/12',
                'my-300',
                'mx-auto',
                'bg-surface-layer3',
                'text-surface-on',
                'font-primary',
                'rounded-300',
                'leading-normal',
                'text-m',
            )}
        >
            {children}
        </dl>
    );
}

/** Re-exporting the DescriptionListItem */
export { DescriptionListItem } from './DescriptionListItem';
