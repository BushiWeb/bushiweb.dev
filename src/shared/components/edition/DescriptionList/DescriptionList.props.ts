export interface DescriptionListProps {
    children: React.ReactNode;
    className?: string;
}

export interface DescriptionListItemProps {
    terms: React.ReactNode | React.ReactNode[];
    descriptions: React.ReactNode | React.ReactNode[];
    className?: string;
}

export interface DescriptionListTermProps {
    children: React.ReactNode;
}

export interface DescriptionListDescriptionProps {
    children: React.ReactNode;
}
