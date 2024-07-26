import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Button, PressEvent } from 'react-aria-components';

interface FABProps {
    onPress?: (e: PressEvent) => void;
    icon: IconProp;
    label: string;
    className?: string;
}

/**
 * Icon Floating Action Button.
 * @prop {(e: PressEvent) => void} [onPress] - Function to execute when activating the button.
 * @prop {IconProp} icon - FontAwesome icon to use.
 * @prop {string} label - Accessible label for the button.
 * @prop {string} [className]
 */
export const FAB = ({ onPress, icon, label, className }: FABProps) => {
    return (
        <Button
            onPress={onPress}
            aria-label={label}
            className={clsx(
                className,
                'fixed bottom-200 left-200 z-high',
                'grid place-items-center',
                'h-700 w-700',
                'bg-primary text-primary-on',
                'rounded-200',
                'text-l2',
                'before:absolute before:z-high before:h-full before:w-full before:rounded-200 before:bg-primary-on before:opacity-0',
                'before:hover:opacity-10',
                'before:focus:opacity-15',
                'before:pressed:opacity-15',
                'focus-visible:focus-ring',
            )}
        >
            <FontAwesomeIcon icon={icon} />
        </Button>
    );
};
