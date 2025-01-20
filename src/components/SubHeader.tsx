import React, { useState, useEffect } from 'react';

const SubHeader = () => {
    const [viewModeOpen, setViewModeOpen] = useState(false);
    const [selectedViewMode, setSelectedViewMode] = useState('원어');
    const [langListOpen, setLangListOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('언어 선택');
    const [sortCriteriaOpen, setSortCriteriaOpen] = useState(false);
    const [selectedSortCriteria, setSelectedSortCriteria] = useState('추천 콘텐츠');

    const toggleDropdown = (dropdown: string) => {
        if (dropdown === 'viewMode') setViewModeOpen(!viewModeOpen);
        if (dropdown === 'language') setLangListOpen(!langListOpen);
        if (dropdown === 'sortCriteria') setSortCriteriaOpen(!sortCriteriaOpen);
    };

    const handleSelection = (dropdown: string, value: string) => {
        if (dropdown === 'viewMode') setSelectedViewMode(value);
        if (dropdown === 'language') setSelectedLanguage(value);
        if (dropdown === 'sortCriteria') setSelectedSortCriteria(value);
        setViewModeOpen(false);
        setLangListOpen(false);
        setSortCriteriaOpen(false);
    };

    // 드롭박스 외 클릭 시 리스트 전부 닫기 처리
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.Dropdown')) {
                setViewModeOpen(false);
                setLangListOpen(false);
                setSortCriteriaOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className='sub__header__main fixed top-[70px] w-full h-[68px] z-[1000] bg-[rgb(20,20,20)]'>
            <style>
                {`
                .dropdownscroll::-webkit-scrollbar {
                    width: 10px;
                    background-color: #333;
                }
                
                .dropdownscroll::-webkit-scrollbar-thumb {
                    width: 6px;
                    background-color: grey;
                }
                    
                .dropdownscroll::-webkit-scrollbar-corner {
                    background-color: #333;
                }
                `}
            </style>
            <div>
                <div className='flex h-[68px] px-[4%] items-center'>
                    <div className='flex flex-grow flex-wrap justify-between items-center'>
                        <div className='inline-block leading-[18px] mr-[20px] text-[1.5rem]'>언어별로 찾아보기</div>
                        <div className='flex items-center text-[14px] break-keep'>
                            <span className='break-keep mr-[10px]'>선호하는 설정을 선택하세요</span>
                            <div className='flex items-center my-[10px]'>
                                <div className='Dropdown inline-block mr-[10px] align-top'>
                                    <div className='inline-block text-left relative'>
                                        <div onClick={() => toggleDropdown('viewMode')} className='inline-block relative w-full bg-black border border-[hsla(0,0%,100%,0.9)] h-[1.5rem] tracking-[1px] leading-[1.5rem] pl-[10px] pr-[50px] cursor-pointer hover:bg-[hsla(0,0%,100%,0.1)]'>{selectedViewMode}
                                            <span className='arrow absolute border-t-[5px] border-l-[5px] border-r-[5px] border-b-0 border-solid border-t-white border-l-transparent border-r-transparent top-[50%] right-[10px] cursor-pointer'></span>
                                        </div>
                                        {/* 시청 방식 드롭박스 */}
                                        {viewModeOpen && (
                                            <div className='absolute left-0 w-full leading-[21px] bg-[rgba(0,0,0,0.9)] border border-[hsla(0,0%,100%,0.15)] text-white whitespace-nowrap z-50 overflow-x-hidden opacity-100 duration-150'>
                                                <ul className='py-[5px]'>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('viewMode', '원어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>원어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('viewMode', '더빙')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>더빙</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('viewMode', '자막')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>자막</a></li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='Dropdown inline-block mr-[10px] align-top'>
                                    <div className='inline-block text-left relative min-w-[240px]'>
                                        <div onClick={() => toggleDropdown('language')} className='inline-block relative w-full bg-black border border-[hsla(0,0%,100%,0.9)] h-[1.5rem] tracking-[1px] leading-[1.5rem] pl-[10px] pr-[50px] cursor-pointer hover:bg-[hsla(0,0%,100%,0.1)]'>{selectedLanguage}
                                            <span className='arrow absolute border-t-[5px] border-l-[5px] border-r-[5px] border-b-0 border-solid border-t-white border-l-transparent border-r-transparent top-[50%] right-[10px] cursor-pointer'></span>
                                        </div>
                                        {/* 언어 선택 드롭박스 */}
                                        {langListOpen && (
                                            <div className='dropdownscroll absolute left-0 w-full max-h-[75vh] leading-[21px] bg-[rgba(0,0,0,0.9)] border border-[hsla(0,0%,100%,0.15)] text-white whitespace-nowrap z-50 overflow-x-hidden opacity-100 duration-150'>
                                                <ul className='py-[5px] h-auto'>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '인도네시아어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>인도네시아어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '말레이어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>말레이어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '터키어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>터키어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '영어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>영어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '일본어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>일본어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '스페인어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>스페인어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '프랑스어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>프랑스어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '힌디어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>힌디어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '한국어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>한국어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '독일어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>독일어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '북경어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>북경어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '이탈리아어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>이탈리아어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '포르투갈어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>포르투갈어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '광둥어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>광둥어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '네덜란드어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>네덜란드어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '필리핀어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>필리핀어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '폴란드어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>폴란드어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '스웨덴어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>스웨덴어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '아랍어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>아랍어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '러시아어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>러시아어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '덴마크어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>덴마크어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '태국어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>태국어</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '플랑드르')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>플랑드르</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '노르웨이어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>노르웨어이</a></li>
                                                    <li className='leading-[24px] group' onClick={() => handleSelection('language', '베트남어')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>베트남어</a></li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='Dropdown float-right text-[14px] text-right'>
                                <span>정렬 기준</span>
                                <div className='inline-block relative min-w-[240px] ml-[10px] text-left'>
                                    <div onClick={() => toggleDropdown('sortCriteria')} className='inline-block w-full bg-black border border-[hsla(0,0%,100%,0.9)] h-[1.5rem] tracking-[1px] leading-[1.5rem] pl-[10px] pr-[50px] cursor-pointer hover:bg-[hsla(0,0%,100%,0.1)]'>{selectedSortCriteria}
                                        <span className='arrow absolute border-t-[5px] border-l-[5px] border-r-[5px] border-b-0 border-solid border-t-white border-l-transparent border-r-transparent top-[50%] right-[10px] cursor-pointer'></span>
                                    </div>
                                    {/* 정렬 기준 드롭박스 */}
                                    {sortCriteriaOpen && (
                                        <div className='absolute left-0 w-full leading-[21px] bg-[rgba(0,0,0,0.9)] border border-[hsla(0,0%,100%,0.15)] text-white whitespace-nowrap z-50 overflow-x-hidden opacity-100 duration-150'>
                                            <ul className='py-[5px]'>
                                                <li className='leading-[24px] group' onClick={() => handleSelection('sortCriteria', '추천 콘텐츠')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>추천 콘텐츠</a></li>
                                                <li className='leading-[24px] group' onClick={() => handleSelection('sortCriteria', '출시일순')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>출시일순</a></li>
                                                <li className='leading-[24px] group' onClick={() => handleSelection('sortCriteria', '오름차순(ㄱ~Z)')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>오름차순(ㄱ~Z)</a></li>
                                                <li className='leading-[24px] group' onClick={() => handleSelection('sortCriteria', '내림차순(Z~ㄱ)')}><a href='#' className='inline-block w-full py-[1px] pl-[10px] pr-[20px] group-hover:underline'>내림차순(Z~ㄱ)</a></li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubHeader