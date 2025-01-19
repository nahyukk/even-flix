import React from 'react'

const SubHeader = () => {
    return (
        <div className='sub__header__main fixed top-[70px] w-full h-[68px] z-50 bg-[rgb(20,20,20)]'>
            <div>
                <div className='flex h-[68px] px-[4%] items-center'>
                    <div className='flex flex-grow flex-wrap justify-between items-center'>
                        <div className='inline-block leading-[18px] mr-[20px] text-[1.5rem]'>언어별로 찾아보기</div>
                        <div className='flex items-center text-[14px]'>
                            <span className='break-keep mr-[10px]'>선호하는 설정을 선택하세요</span>
                            <div className='flex items-center my-[10px]'>
                                <div className='Dropdown inline-block mr-[10px] align-top'>
                                    <div className='inline-block text-left relative'>
                                        <div className='inline-block relative w-full bg-black border border-[hsla(0,0%,100%,0.9)] h-[1.5rem] tracking-[1px] leading-[1.5rem] pl-[10px] pr-[50px] cursor-pointer hover:bg-[hsla(0,0%,100%,0.1)]'>원어
                                            <span className='arrow absolute border-t-[5px] border-l-[5px] border-r-[5px] border-b-0 border-solid border-t-white border-l-transparent border-r-transparent top-[50%] right-[10px] cursor-pointer'></span>
                                        </div>
                                        {/* 원어, 자막, 더빙 드롭박스 */}
                                        <div>
                                            <ul>
                                                <li><a href='#'>원어</a></li>
                                                <li><a href='#'>더빙</a></li>
                                                <li><a href='#'>자막</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='Dropdown inline-block mr-[10px] align-top'>
                                    <div className='inline-block text-left relative min-w-[240px]'>
                                        <div className='inline-block relative w-full bg-black border border-[hsla(0,0%,100%,0.9)] h-[1.5rem] tracking-[1px] leading-[1.5rem] pl-[10px] pr-[50px] cursor-pointer hover:bg-[hsla(0,0%,100%,0.1)]'>영어
                                            <span className='arrow absolute border-t-[5px] border-l-[5px] border-r-[5px] border-b-0 border-solid border-t-white border-l-transparent border-r-transparent top-[50%] right-[10px] cursor-pointer'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='float-right text-[14px] text-right'>
                                <span>정렬 기준</span>
                                <div className='inline-block relative min-w-[240px] ml-[10px] text-left'>
                                    <div className='inline-block w-full bg-black border border-[hsla(0,0%,100%,0.9)] h-[1.5rem] tracking-[1px] leading-[1.5rem] pl-[10px] pr-[50px] cursor-pointer hover:bg-[hsla(0,0%,100%,0.1)]'>추천 콘텐츠
                                        <span className='arrow absolute border-t-[5px] border-l-[5px] border-r-[5px] border-b-0 border-solid border-t-white border-l-transparent border-r-transparent top-[50%] right-[10px] cursor-pointer'></span>
                                    </div>
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