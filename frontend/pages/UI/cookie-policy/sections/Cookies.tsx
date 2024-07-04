import { Heading } from 'shared/components/edition';
import data from '../CookiePolicy.data';
import React from 'react';
import CookieDescription from './CookieDescription';

/* Description of all cookies saved on this website */
export default function Cookies() {
    return (
        <>
            <Heading level={2}>Cookies déposés sur notre site</Heading>
            {data.cookies.map((value, index) => (
                <React.Fragment key={`${value.title}-${index}`}>
                    <CookieDescription {...value} />
                </React.Fragment>
            ))}
        </>
    );
}
