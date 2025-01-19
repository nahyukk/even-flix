import React from 'react'

const SubHeader = () => {
    return (
        <div className='sub__header__main'>
            <div>
                <div>
                    <div>
                        <div>언어별로 찾아보기</div>
                        <div>
                            <span>선호하는 설정을 선택하세요</span>
                            <div>
                                <div>
                                    <div>
                                        <div>원어
                                            <span className='arrow'></span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div>영어
                                            <span className='arrow'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>정렬 기준</span>
                                <div>
                                    <div>추천 콘텐츠
                                        <span className='arrow'></span>
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