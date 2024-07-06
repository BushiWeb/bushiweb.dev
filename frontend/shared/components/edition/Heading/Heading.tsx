import classNames from 'classnames';
import React from 'react';
import { TYPO_CLASSNAMES } from './Heading.const';
import './Heading.css';
import { Heading as HeadingProps } from './Heading.props';

/**
 * Header component, allows to insert headings of level 1, 2 and 3.
 * @prop {Number} [level=1] - Level of the heading, defaults to 1
 */
export function Heading({ children, level = 1 }: HeadingProps) {
    const H = ({ ...props }: React.HTMLAttributes<HTMLHeadElement>) =>
        React.createElement(`h${level}`, props, children);

    return (
        <H className={classNames(TYPO_CLASSNAMES[level - 1], 'heading')}>
            {children}
        </H>
    );
}
