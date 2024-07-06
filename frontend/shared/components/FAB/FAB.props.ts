import { MouseEvent } from 'react';

export interface FABProps {
    children: React.ReactNode;
    onClick?: (e: MouseEvent) => void;
    type?: 'button' | 'submit' | 'reset';
    extendedFab?: boolean;
}
