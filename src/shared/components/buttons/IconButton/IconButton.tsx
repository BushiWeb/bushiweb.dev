import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Button, PressEvent } from 'react-aria-components';

interface IconButtonProps {
    onPress?: (e: PressEvent) => void;
    icon: IconProp;
    label: string;
    className?: string;
}

/**
 * Tertiary icon button, with low emphasis.
 * @prop {(e: PressEvent) => void} [onPress] - Function to execute when activating the button.
 * @prop {IconProp} icon - FontAwesome icon to use.
 * @prop {string} label - Accessible label for the button.
 * @prop {string} [className]
 */
export const IconButton = ({
    onPress,
    icon,
    label,
    className,
}: IconButtonProps) => {
    return (
        <Button
            onPress={onPress}
            aria-label={label}
            className={({ isHovered, isFocusVisible, isFocused, isPressed }) =>
                clsx(
                    'relative isolate',
                    'grid place-items-center',
                    'h-500 w-500',
                    'bg-transparent text-secondary',
                    'rounded-full',
                    'text-l2',
                    'm-100',
                    'before:absolute before:z-high before:h-500 before:w-500 before:rounded-full before:bg-secondary before:opacity-0',
                    'after:absolute after:-inset-100 after:z-low after:bg-transparent',
                    isHovered && 'before:opacity-10',
                    isFocused && 'before:opacity-15',
                    isPressed && 'before:opacity-15',
                    isFocusVisible && 'focus-ring',
                    className,
                )
            }
        >
            <FontAwesomeIcon icon={icon} />
        </Button>
    );
};
