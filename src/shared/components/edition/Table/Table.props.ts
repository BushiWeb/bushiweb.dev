export interface TableProps {
    className?: string;
    data: [string[], ...(React.ReactNode | string[])[][]];
    caption: string;
}

export interface TableRowProps {
    children: React.ReactNode;
}

export interface TableHeaderProps {
    children: React.ReactNode;
}

export interface TableDataProps {
    children: React.ReactNode;
    headerName: string;
}
