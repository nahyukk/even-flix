import React from 'react';
import NavItem from './NavItem';

const NavBar = () => {
    return (
        <nav className='nav__container sticky top-0 h-auto min-h-[70px] z-10 bg-[rgb(20,20,20)] text-[#e5e5e5]'>
            <div className='nav__main flex h-[68px] p-[0_4%] items-center text-[0.7rem]'>
                <a className='nav__logo w-[92.5px]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 276.742"><path fill="#d81f26" d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z" /></svg></a>
                <ul className='nav__list flex items-center m-0 p-0'>
                    <NavItem href="/browse">홈</NavItem>
                    <NavItem href="/browse/genre/83">시리즈</NavItem>
                    <NavItem href="/browse/genre/34399">영화</NavItem>
                    <NavItem href="/latest">NEW! 요즘 대세 콘텐츠</NavItem>
                    <NavItem href="/browse/my-list">내가 찜한 리스트</NavItem>
                    <NavItem href="/browse/original-audio">언어별로 찾아보기</NavItem>
                </ul>
                <div className='flex absolute top-0 right-[4%] h-full justify-end items-center grow'>
                    <div>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1.382 7.032a9 9 0 1 1 1.414-1.414l5.675 5.675-1.414 1.414z" fill="currentColor" /></svg>
                        </button>
                    </div>
                    <div>키즈</div>
                    <div><button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.07c3.392.486 6 3.404 6 6.93v4.254a91 91 0 0 1 3.107.28l-.214 1.99A93 93 0 0 0 12 17c-3.41 0-6.722.181-9.893.523l-.214-1.988A91 91 0 0 1 5 15.254V11a7 7 0 0 1 6-6.93V2h2zm4 11.059V11a5 5 0 0 0-10 0v4.129a97 97 0 0 1 10 0M8.626 19.37C8.662 20.517 10.15 22 12 22c1.848 0 3.337-1.483 3.373-2.629.007-.222-.197-.371-.42-.371H9.046c-.223 0-.427.149-.42.371" fill="currentColor"/></svg></button></div>
                    <div>
                        <a>
                            <span>
                                <img src='https://cdn.discordapp.com/attachments/1308994714183270403/1328673367921918023/profile_1.png?ex=67878f00&is=67863d80&hm=edcdaf06d1d97605707d436436263e32f8ee2ab21c2fbc8ef396a8519378bc9b&'></img>
                            </span>
                        </a>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;