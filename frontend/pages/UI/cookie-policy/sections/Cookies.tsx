import React from 'react';
import { Heading } from 'shared/components/edition/Heading/Heading';
import { COOKIE_POLICY_DATA } from '../CookiePolicy.data';
import { CookieDescription } from './CookieDescription';

/* Description of all cookies saved on this website */
export function Cookies() {
    return (
        <>
            <Heading level={2}>Cookies déposés sur notre site</Heading>
            {COOKIE_POLICY_DATA.cookies.map((value, index) => (
                <React.Fragment key={`${value.title}-${index}`}>
                    <CookieDescription {...value} />
                </React.Fragment>
            ))}
        </>
    );
}
