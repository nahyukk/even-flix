import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <div>
                <a></a>
                <ul>
                    <li><a href="/browse">홈</a></li>
                    <li><a href="/browse/genre/83">시리즈</a></li>
                    <li><a href="/browse/genre/34399">영화</a></li>
                    <li><a href="/latest">NEW! 요즘 대세 콘텐츠</a></li>
                    <li><a href="/browse/my-list">내가 찜한 리스트</a></li>
                    <li><a href="/browse/original-audio">언어별로 찾아보기</a></li>
                </ul>
                <div></div>
            </div>
        </nav>
    );
};

export default NavBar;