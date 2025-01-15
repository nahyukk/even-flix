const Footer = () => {
    return (
        <footer className="text-[#808080] mt-[20px] mx-auto max-w-[980px] px-[4%] bg-[#141414] leading-[1.4]">
            {/* 소셜 아이콘 */}
            <div className="flex mb-[1em]">
                <a className="mr-[15px] text-white bg-transparent cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" data-icon="FacebookStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.987 13.162v8.822h-3.945v-8.822h-3.2v-3.65h3.205v-2.78c0-3.165 1.885-4.912 4.768-4.912q1.422.02 2.826.247v3.106h-1.596a1.825 1.825 0 0 0-2.058 1.972v2.367h3.5l-.559 3.65z" fill="currentColor" /></svg></a>
                <a className="mr-[15px] text-white bg-transparent cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" data-icon="InstagramStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.93 16.123a5.96 5.96 0 0 1-1.615 4.189 5.9 5.9 0 0 1-4.19 1.615c-1.651.094-6.6.094-8.25 0a5.96 5.96 0 0 1-4.19-1.615 5.92 5.92 0 0 1-1.615-4.189c-.093-1.651-.093-6.6 0-8.25a5.94 5.94 0 0 1 1.615-4.19 5.95 5.95 0 0 1 4.19-1.61c1.651-.094 6.6-.094 8.25 0a5.96 5.96 0 0 1 4.19 1.615 5.92 5.92 0 0 1 1.615 4.189c.093 1.651.093 6.595 0 8.246M20.2 12c0-1.455.12-4.578-.4-5.894a3.37 3.37 0 0 0-1.9-1.9c-1.312-.517-4.439-.4-5.894-.4s-4.578-.121-5.894.4a3.38 3.38 0 0 0-1.9 1.9c-.517 1.312-.4 4.439-.4 5.894s-.121 4.578.4 5.894a3.38 3.38 0 0 0 1.9 1.9c1.312.517 4.44.4 5.894.4s4.578.121 5.894-.4a3.38 3.38 0 0 0 1.9-1.9c.519-1.312.4-4.439.4-5.894m-3.07 0A5.127 5.127 0 1 1 12 6.873 5.12 5.12 0 0 1 17.129 12zm-1.794 0a3.333 3.333 0 1 0-6.664 0 3.333 3.333 0 0 0 6.663 0zm2-4.141a1.2 1.2 0 1 1 1.2-1.2 1.193 1.193 0 0 1-1.197 1.2z" fill="currentColor" /></svg></a>
                <a className="mr-[15px] text-white bg-transparent cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" data-icon="TwitterStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.768 8.207A12.654 12.654 0 0 1 8.027 20.948a12.65 12.65 0 0 1-6.876-2.01q.539.06 1.081.055a8.97 8.97 0 0 0 5.56-1.913A4.49 4.49 0 0 1 3.6 13.974q.42.067.846.07a4.7 4.7 0 0 0 1.178-.153A4.48 4.48 0 0 1 2.038 9.5v-.059c.62.347 1.314.542 2.024.569a4.49 4.49 0 0 1-1.387-5.99 12.73 12.73 0 0 0 9.234 4.686 5 5 0 0 1-.109-1.025 4.482 4.482 0 0 1 7.75-3.064 8.8 8.8 0 0 0 2.84-1.082A4.46 4.46 0 0 1 20.421 6 9 9 0 0 0 23 5.31a9.6 9.6 0 0 1-2.246 2.315c.014.195.014.389.014.582" fill="currentColor" /></svg></a>
                <a className="mr-[15px] text-white bg-transparent cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" data-icon="YoutubeStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.54 6.67a2.76 2.76 0 0 0-1.94-1.957C18.88 4.25 12 4.25 12 4.25s-6.88 0-8.6.463A2.76 2.76 0 0 0 1.46 6.67 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.33 2.76 2.76 0 0 0 1.945 1.957c1.715.463 8.6.463 8.6.463s6.88 0 8.595-.463a2.76 2.76 0 0 0 1.94-1.957c.317-1.759.471-3.543.46-5.33a29 29 0 0 0-.46-5.33m-12.79 8.6V8.729L15.5 12z" fill="currentColor" /></svg></a>
            </div>
            {/* 서비스 관련 링크 */}
            <ul className="flex flex-row flex-wrap items-start text-[13px] mb-[14px] p-0">
                <li className="basis-1/4 mb-[16px] pr-[22px]"><a className="hover:underline" href="/#"><span>화면 해설</span></a></li>
                <li className="basis-1/4 mb-[16px] pr-[22px]"><a className="hover:underline" href="/#"><span>고객 센터</span></a></li>
                <li className="basis-1/4 mb-[16px] pr-[22px]"><a className="hover:underline" href="/#"><span>기프트카드</span></a></li>
                <li className="basis-1/4 mb-[16px] pr-[22px]"><a className="hover:underline" href="/#"><span>미디어 센터</span></a></li>
                <li className="basis-1/4 mb-[16px] pr-[22px]"><a className="hover:underline" href="/#"><span>투자 정보(IR)</span></a></li>
                <li className="basis-1/4 mb-[16px] pr-[22px]"><a className="hover:underline" href="/#"><span>입사 정보</span></a></li>
                <li className="basis-1/4 mb-[16px] pr-[22px]"><a className="hover:underline" href="/#"><span>이용 약관</span></a></li>
                <li className="basis-1/4 mb-[16px] pr-[22px]"><a className="hover:underline" href="/#"><span>개인정보</span></a></li>
                <li className="basis-1/4 mb-[16px] pr-[22px]"><a className="hover:underline" href="/#"><span>법적 고지</span></a></li>
                <li className="basis-1/4 mb-[16px] pr-[22px]"><a className="hover:underline" href="/#"><span>쿠키 설정</span></a></li>
                <li className="basis-1/4 mb-[16px] pr-[22px]"><a className="hover:underline" href="/#"><span>회사 정보</span></a></li>
                <li className="basis-1/4 mb-[16px] pr-[22px]"><a className="hover:underline" href="/#"><span>문의하기</span></a></li>
            </ul>
            {/* 서비스 코드 버튼 */}
            <div><button className="mb-[20px] p-[0.5em] border border-[#808080] text-[13px] hover:text-white">서비스 코드</button></div>
            {/* 푸터 텍스트 */}
            <div className="text-[11px] text-[#808080] mb-[15px]">
                <div className="mt-[4px]">넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담)</div>
                <div className="mt-[4px]">대표: 레지널드 숀 톰프슨</div>
                <div className="mt-[4px]">이메일 주소: korea@netflix.com</div>
                <div className="mt-[4px]">주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</div>
                <div className="mt-[4px]">사업자등록번호: 165-87-00119</div>
                <div className="mt-[4px]">클라우드 호스팅: Amazon Web Services Inc.</div>
                <div className="mt-[4px] hover:underline"><a href="/#">공정거래위원회 웹사이트</a></div>
            </div>
        </footer>
    );
};

export default Footer;