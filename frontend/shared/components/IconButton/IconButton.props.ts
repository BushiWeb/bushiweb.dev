import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { MouseEvent } from 'react';

export interface IconButtonProps {
    onClick?: (e: MouseEvent) => void;
    type?: 'button' | 'submit' | 'reset';
    extendedFab?: boolean;
    icon: IconProp;
    title: string;
    className?: string;
}
