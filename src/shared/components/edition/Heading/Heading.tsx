import React from 'react';
import { HeadingProps } from './Heading.props';
import clsx from 'clsx';
import { CLASS_LEVEL } from './Heading.const';

/**
 * Heading component for document writing.
 * Use React.createElement to personnalize the heading level.
 * @prop {number} [Heading=2] - Heading level, level 2 by default, from 1 to 3.
 * @prop {string} [className=''] - Additional class names.
 * @prop children - Content of the heading.
 */
export const Heading = ({
    level = 2,
    className = '',
    children,
}: HeadingProps) => {
    return React.createElement(
        `h${level}`,
        { className: clsx(className, CLASS_LEVEL[level]) },
        children,
    );
};
