import LinkProps from './Link.props';
import './Link.css';
import { Link as TsrLink } from '@tanstack/react-router';

/**
 * Edition link component, to insert within texts. Inserts either a internal TanStack Router link if the to prop is given, or an external link otherwise.
 * @prop {string} [href=''] - External URL, to insert a classical anchor element
 * @prop {string} [to] - Target for the TanStack Router Link element, if given take precedence over href
 */
export default function Link({ children, href = '', to }: LinkProps) {
    if (to) {
        return (
            <TsrLink to={to} className="edition-link">
                {children}
            </TsrLink>
        );
    }

    return (
        <a href={href} className="edition-link">
            {children}
        </a>
    );
}
