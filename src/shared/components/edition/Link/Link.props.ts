import { UrlObject } from 'url';

export interface LinkProps {
    href?: string;
    to?: UrlObject | __next_route_internal_types__.RouteImpl<string>;
    children: React.ReactNode;
    className?: string;
}
