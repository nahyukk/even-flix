import React from "react";

const Profile = () => {
    return (
        <div className="fixed inset-0 bg-[#141414] text-center z-0 max-w-none sm:max-w-full">
            <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center animate-[animateProfileGate_.45s_forwards]">
                <div className="max-w-[80%]">
                    <h1 className="text-white text-[3.5vw] font-normal w-full opacity-100 transition-opacity duration-[400ms] ease-out sm:text-[30px]">
                        Who's watching?
                    </h1>

                    {/* 프로필 리스트를 가로로 정렬 */}
                    <ul className="flex justify-center space-x-[2vw] my-8 opacity-100 transition-opacity duration-400 ease-out p-0">
                        <li className="relative align-top max-w-[200px] min-w-[84px] w-[10vw]">
                            <a className="text-white cursor-pointer no-underline" href="#">
                                <div className="relative">
                                    <div className="bg-gray-800 bg-no-repeat bg-cover border-none rounded-md box-border relative w-[10vw] h-[10vw] min-w-[84px] min-h-[84px] max-w-[200px] max-h-[200px] no-underline after:content-[''] after:absolute after:inset-0 after:block after:border-[0.3em] after:border-transparent after:rounded-md">
                                        이미지
                                    </div>
                                </div>
                                <span className="block text-gray-500 text-[1.3vw] leading-[1.2em] my-[0.6em] min-h-[1.8em] overflow-hidden text-center text-ellipsis sm:text-[12px]">
                                    이븐이
                                </span>
                            </a>
                        </li>

                        <li className="relative align-top max-w-[200px] min-w-[84px] w-[10vw]">
                            <a className="text-white cursor-pointer no-underline bg-transparent">
                                <div className="relative">
                                    <div className="relative bg-gray-800 bg-no-repeat bg-cover border-none rounded-md box-border w-[10vw] h-[10vw] min-w-[84px] min-h-[84px] max-w-[200px] max-h-[200px] no-underline">
                                        이미지
                                    </div>
                                </div>
                                <span className="block text-gray-500 text-[1.3vw] leading-[1.2em] my-[0.6em] min-h-[1.8em] overflow-hidden text-center text-ellipsis sm:text-[12px]">
                                    이븐이2
                                </span>
                            </a>
                        </li>

                        <li className="relative align-top max-w-[200px] min-w-[84px] w-[10vw]">
                            <a className="no-underline">
                                <div className="flex items-center justify-center text-gray-500 text-[5vw] h-[10vw] w-[10vw] min-h-[84px] min-w-[84px] max-h-[200px] max-w-[200px] text-center no-underline sm:text-[50px]">
                                    <svg width="100" height="100" viewBox="0 0 3.6 3.6" version="1" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="gray" d="M3.375 1.8A1.575 1.575 0 0 1 1.8 3.375 1.575 1.575 0 0 1 .225 1.8a1.575 1.575 0 0 1 3.15 0"/>
                                        <g fill="#141414">
                                            <path d="M1.575 1.05h.45v1.5h-.45z"/>
                                            <path d="M1.05 1.575h1.5v.45h-1.5z"/>
                                        </g>
                                    </svg>
                                </div>
                                <span className="block text-gray-500 text-[1.3vw] leading-[1.2em] my-[0.6em] min-h-[1.8em] overflow-hidden text-center text-ellipsis sm:text-[12px]">
                                    Add Profile
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

                <span className="text-center">
                    <a href="/#" className="block bg-transparent border border-gray-500 text-gray-500 cursor-pointer text-[1.2vw] tracking-widest my-[2em] mt-[2em] mb-[1em] px-[1.5em] py-[0.5em] sm:text-[13px]">
                        Manage Profiles
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Profile;
