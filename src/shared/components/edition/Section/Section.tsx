'use client';

import clsx from 'clsx';
import { SectionProps } from './Section.props';
import { Heading } from '../Heading/Heading';
import { headingLevelContext } from './Section.context';
import { useContext, useId } from 'react';

/**
 * Section component for document writing.
 * Sections automaticaly inserts a Heading component with nested levels, that they use as accessible name.
 * @prop {string} heading - Heading of the section.
 * @prop {React.ReactNode[]} childSections - Child sections, place after the content.
 * @prop {string} [className=''] - Additional class names.
 * @prop children - Child sections.
 */
export const Section = ({
    className = '',
    children,
    heading,
    childSections,
}: SectionProps) => {
    const headingLevel = useContext(headingLevelContext);
    const headingId = useId();
    const content = (
        <>
            <div className="mx-auto max-w-content-l">
                <Heading level={headingLevel} id={headingId}>
                    {heading}
                </Heading>
                {children}
            </div>
            <headingLevelContext.Provider value={headingLevel + 1}>
                {childSections}
            </headingLevelContext.Provider>
        </>
    );

    if (headingLevel === 1) {
        return (
            <main
                className={clsx(
                    'w-full',
                    'bg-surface-background',
                    'px-300',
                    'pt-400',
                    className,
                )}
                aria-labelledby={headingId}
            >
                {content}
            </main>
        );
    }

    return (
        <section
            className={clsx(
                'w-[initial]',
                headingLevel === 2 ?
                    [
                        'even:bg-surface-layer2',
                        'odd:bg-surface-layer1',
                        'first-of-type:mt-600',
                        'py-400',
                    ]
                :   'py-200',
                'px-300',
                '-ml-300',
                '-mr-300',
                className,
            )}
            aria-labelledby={headingId}
        >
            {content}
        </section>
    );
};
