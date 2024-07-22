import React from 'react';
import { HeadingProps } from './Heading.props';
import clsx from 'clsx';
import { CLASS_LEVEL } from './Heading.const';

/**
 * Heading component for document writing.
 * Use React.createElement to personnalize the heading level.
 * Returns a paragraph if the level is not a heading level.
 * @prop {number} [Heading=2] - Heading level, level 2 by default, from 1 to 3.
 * @prop {string} [id] - Id of the DOM element, usefull to use the heading as the section alias.
 * @prop {string} [className=''] - Additional class names.
 * @prop children - Content of the heading.
 */
export const Heading = ({
    level = 2,
    className = '',
    children,
    id,
}: HeadingProps) => {
    const classNames = clsx('text-center tablet:text-start', className);

    if (level > 6 || level < 1) {
        return <p className={classNames}>{children}</p>;
    }

    return React.createElement(
        `h${level}`,
        {
            className: clsx(
                CLASS_LEVEL[level],
                'text-center tablet:text-start',
                className,
            ),
            ...(id && { id }),
        },
        children,
    );
};
