import { Section } from '@/shared/components/edition/Section/Section';
import { COOKIE_POLICY_DATA } from '../CookiePolicy.data';
import { CookieDescription } from './CookieDescription';

/**
 * Description of all cookies saved on this website, for the cookie policy page.
 */
export function Cookies() {
    return (
        <Section
            heading="Cookies déposés sur notre site"
            childSections={COOKIE_POLICY_DATA.cookies.map((value, index) => (
                <CookieDescription {...value} key={`${value.title}-${index}`} />
            ))}
        />
    );
}
