import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Button as AriaButton, PressEvent } from 'react-aria-components';

interface ButtonProps {
    onPress?: (e: PressEvent) => void;
    icon?: IconProp;
    className?: string;
    children: React.ReactNode;
    type?: 'submit' | 'reset' | 'button';
    variant?: 'primary' | 'secondary' | 'tertiary' | 'text';
}

/**
 * Button, with different emphasis.
 * Accepts an icon to illustrate.
 * @prop {(e: PressEvent) => void} [onPress] - Function to execute when activating the button.
 * @prop {IconProp} [icon] - FontAwesome icon to use.
 * @prop {"submit" | "reset" | "button"} [type="button"] - Type of the button.
 * @prop {'primary' | 'secondary' | 'tertiary' | 'text'} [variant="primary"] - Variant of the button, with different emphasis.
 * @prop {string} [className]
 * @prop children
 */
export const Button = ({
    onPress,
    icon,
    className,
    children,
    type = 'button',
    variant = 'primary',
}: ButtonProps) => {
    return (
        <AriaButton
            type={type}
            onPress={onPress}
            className={({ isHovered, isFocusVisible, isFocused, isPressed }) =>
                clsx(
                    'h-500 min-w-500',
                    'px-250 py-150',
                    'my-100',
                    'flex flex-row items-center gap-100',
                    'font-primary text font-semibold leading-tight',
                    'rounded-500',
                    'relative isolate',
                    'before:absolute before:inset-0 before:z-high before:rounded-500 before:opacity-0',
                    'after:absolute after:-bottom-100 after:-top-100 after:left-0 after:right-0 after:z-low after:min-w-600 after:bg-transparent',
                    isHovered && 'before:opacity-10',
                    isFocused && 'before:opacity-15',
                    isPressed && 'before:opacity-15',
                    isFocusVisible && 'focus-ring',
                    variant === 'primary' && [
                        'bg-primary text-primary-on before:bg-primary-on',
                    ],
                    variant === 'secondary' && [
                        'bg-secondary-container text-secondary-on-container before:bg-secondary-on-container',
                    ],
                    variant === 'tertiary' && [
                        'border border-outline text-primary before:bg-primary',
                    ],
                    variant === 'text' && ['text-primary before:bg-primary'],
                    className,
                )
            }
        >
            {icon && <FontAwesomeIcon icon={icon} />}
            {children}
        </AriaButton>
    );
};
