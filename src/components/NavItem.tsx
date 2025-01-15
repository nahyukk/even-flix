import React from "react";

/* 상단 네비게이션 바 메뉴 */
const NavItem: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li className="ml-[18px] transition-all duration-400 hover:text-[#b3b3b3]">
        <a href={href}>{children}</a>
    </li>
);

/* 상단 네비게이션 바 프로필 호버 메뉴 */
const NavMenu: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li className='block py-[5px] px-[10px] w-full'>
        <a href={href} className='flex items-center group'>{children}</a>
    </li>
);

export { NavItem, NavMenu };