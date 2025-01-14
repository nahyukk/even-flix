import React from "react";

const NavItem: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li className="ml-[18px]">
        <a href={href}>{children}</a>
    </li>
);

export default NavItem;