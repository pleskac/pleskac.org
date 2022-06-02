import React from "react";

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
    children: React.ReactNode;
}
export const Link: React.FC<LinkProps> = ({ children, ...rest }) => (
    <a className="focus_ring" {...rest}>
        {children}
    </a>
);
