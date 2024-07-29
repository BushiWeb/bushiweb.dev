import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import {
    Checkbox as AriaCheckbox,
    CheckboxProps as AriaCheckboxProps,
} from 'react-aria-components';

interface CheckboxProps extends AriaCheckboxProps {
    children: React.ReactNode;
}

/**
 * Form checkbox, containing a label.
 * @prop children - Contains the label of the checkbox.
 * @prop {string} [name] - Name of the checkbox, to use with forms.
 */
export const Checkbox = ({ children, ...props }: CheckboxProps) => {
    return (
        <AriaCheckbox
            {...props}
            className={({ isInvalid }) =>
                clsx(
                    'group flex items-center gap-250 p-300',
                    'font-primary text font-semibold leading-tight',
                    isInvalid && 'text-danger',
                )
            }
        >
            {({
                isIndeterminate,
                isSelected,
                isFocusVisible,
                isFocused,
                isHovered,
                isPressed,
                isRequired,
                isInvalid,
            }) => (
                <>
                    <div
                        className={clsx(
                            'flex items-center justify-center',
                            'h-250 w-250',
                            'relative isolate',
                            'rounded border-10 border-outline',
                            (isIndeterminate || isSelected) &&
                                'border-none bg-primary',
                            isFocusVisible && 'focus-ring',
                            'before:absolute before:-inset-200 before:z-high before:rounded-full before:bg-primary before:opacity-0',
                            isHovered && 'before:opacity-10',
                            isFocused && 'before:opacity-15',
                            isPressed && 'before:opacity-15',
                            isInvalid &&
                                'border-solid border-danger before:bg-danger',
                            isInvalid &&
                                (isIndeterminate || isSelected) &&
                                'border-none bg-danger',
                        )}
                    >
                        {isSelected && (
                            <FontAwesomeIcon
                                icon={faCheck}
                                className={clsx('text-m, text-primary-on')}
                            />
                        )}
                        {isIndeterminate && !isSelected && (
                            <FontAwesomeIcon
                                icon={faMinus}
                                className={clsx('text-m, text-primary-on')}
                            />
                        )}
                    </div>
                    {children}
                    {!isRequired && (
                        <span className="font-primary text-s1 font-normal leading-tight text-surface-on-variant">
                            (facultatif)
                        </span>
                    )}
                </>
            )}
        </AriaCheckbox>
    );
};
