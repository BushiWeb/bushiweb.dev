import clsx from 'clsx';
import { SectionProps } from './Section.props';
import { Heading } from '../Heading/Heading';
import { headingLevelContext } from './Section.context';
import { useContext, useId } from 'react';

/**
 * Section component for document writing.
 * Sections automaticaly inserts a Heading component with nested levels, that they use as accessible name.
 * @prop {string} heading - Heading of the section.
 * @prop {string} [className=''] - Additional class names.
 * @prop children - Content of the paragraph.
 */
export const Section = ({
    className = '',
    children,
    heading,
}: SectionProps) => {
    const headingLevel = useContext(headingLevelContext);
    const headingId = useId();

    return (
        <section
            className={clsx(
                'w-full',
                'even:bg-surface-layer2',
                'odd:bg-surface-layer1',
                className,
            )}
            aria-labelledby={headingId}
        >
            <div className="mx-auto w-content-l">
                <headingLevelContext.Provider value={headingLevel + 1}>
                    <Heading level={headingLevel} id={headingId}>
                        {heading}
                    </Heading>
                    {children}
                </headingLevelContext.Provider>
            </div>
        </section>
    );
};
