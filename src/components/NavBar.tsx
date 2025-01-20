import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { NavItem, NavMenu } from "./NavItem";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
	const navigate = useNavigate();

	const [isSearchActive, setIsSearchActive] = useState(false);
	const [searchText, setSearchText] = useState("");
	const searchContainerRef = useRef<HTMLDivElement | null>(null);

	// 검색창 외부 클릭 감지
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				searchContainerRef.current &&
				!searchContainerRef.current.contains(event.target as Node) &&
				isSearchActive &&
				searchText === ""
			) {
				setIsSearchActive(false); // 검색창 닫기
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isSearchActive, searchText]);

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const value = e.target.value;
		setSearchText(value);
		if (value.trim() === "") {
			navigate("/", { replace: true });
		} else {
			navigate(`/search?q=${value}`, { replace: true });
		}
	};

	const resetSearch = () => {
		setSearchText("");
		setIsSearchActive(false); // 검색창 닫기
		navigate("/", { replace: true });
	};

	return (
		<nav className='nav__container sticky top-0 h-auto min-h-[70px] z-[1001] bg-[rgb(20,20,20)] text-[#e5e5e5]'>
			<div className='nav__main flex h-[68px] p-[0_4%] items-center text-[0.7rem]'>
				<a className='nav__logo w-[92.5px]'>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 276.742">
						<path
							fill="#d81f26"
							d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z"
						/>
					</svg>
				</a>
				<ul className='nav__list flex items-center m-0 p-0'>
					<NavItem href="/browse">홈</NavItem>
					<NavItem href="/browse/genre/83">시리즈</NavItem>
					<NavItem href="/browse/genre/34399">영화</NavItem>
					<NavItem href="/latest">NEW! 요즘 대세 콘텐츠</NavItem>
					<NavItem href="/browse/my-list">내가 찜한 리스트</NavItem>
					<NavItem href="/browse/original-audio">언어별로 찾아보기</NavItem>
				</ul>

				{/* 오른쪽 섹션 */}
				<div className="flex absolute top-0 right-[4%] h-full justify-end items-center grow">
					<div className="mr-[8px]">
						<div
							ref={searchContainerRef}
							className={`flex items-center ${
								isSearchActive
									? "bg-[rgba(0,0,0,0.75)] border border-[hsla(0,0%,100%,0.85)] p-1"
									: ""
							} h-[36px]`}
						>
							{/* 검색 아이콘 */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="cursor-pointer transition-transform duration-300"
								onClick={() => setIsSearchActive(true)}
								fill="none"
								viewBox="0 0 24 24"
								width="24"
								height="24"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
									fill="currentColor"
								/>
							</svg>

							{/* 검색창 */}
							<input
								type="text"
								value={searchText}
								onChange={handleSearchChange}
								className={`bg-transparent border-none outline-none text-[14px] text-white ml-2 ${
									isSearchActive
										? "w-[212px] opacity-100 transition-all duration-300 ease-in-out"
										: "w-0 opacity-0 transition-none"
								}`}
								placeholder="제목, 사람, 장르"
							/>

							{/* 삭제 버튼 */}
							{isSearchActive && (
								<span
									role="button"
									className={`cursor-pointer text-white ml-2 transition-opacity ${
										searchText ? "opacity-100" : "opacity-0 cursor-default"
									}`}
									onClick={resetSearch}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#FFF"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M18 6 6 18M6 6l12 12" />
									</svg>
								</span>
							)}
						</div>
					</div>
					<div className="mr-[16px]">키즈</div>
					<div className="mr-[16px]">
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								width="24"
								height="24"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M13 4.07c3.392.486 6 3.404 6 6.93v4.254a91 91 0 0 1 3.107.28l-.214 1.99A93 93 0 0 0 12 17c-3.41 0-6.722.181-9.893.523l-.214-1.988A91 91 0 0 1 5 15.254V11a7 7 0 0 1 6-6.93V2h2zm4 11.059V11a5 5 0 0 0-10 0v4.129a97 97 0 0 1 10 0M8.626 19.37C8.662 20.517 10.15 22 12 22c1.848 0 3.337-1.483 3.373-2.629.007-.222-.197-.371-.42-.371H9.046c-.223 0-.427.149-.42.371"
									fill="#fff"
								/>
							</svg>
						</button>
					</div>
					<div className="flex items-center group">
						<a className="cursor-pointer">
							<span>
								<img
									className="rounded-[4px] w-[32px] h-[32px] align-middle"
									src="https://i.ibb.co/PFwZcX0/profile-1.png"
								></img>
							</span>
						</a>
						<span className="inline-block border-t-[5px] border-l-[5px] border-r-[5px] border-b-0 border-solid border-t-white border-l-transparent border-r-transparent h-0 w-0 ml-[10px] cursor-pointer transition-transform duration-[367ms] ease-[cubic-bezier(0.21,0,0.07,1)] group-hover:rotate-180"></span>
						<div className="absolute top-[72px] right-0 w-[220px] bg-[rgba(0,0,0,0.9)] text-white opacity-0 invisible transition-all duration-150 group-hover:opacity-100 group-hover:visible">
							<ul className="pt-[10px] pb-[5px] h-auto">
								<li>
									<div>
										<a>
											<img></img>
											<span></span>
										</a>
									</div>
								</li>
							</ul>
							<ul className="pb-[10px] text-[13px]">
								<NavMenu href="#">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="ml-[5px] mr-[13px]"
										fill="none"
										role="img"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										data-icon="PencilStandard"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M19.1213 1.7071C17.9497 0.535532 16.0503 0.53553 14.8787 1.7071L13.2929 3.29289L12.5858 4L1.58579 15C1.21071 15.3751 1 15.8838 1 16.4142V21C1 22.1046 1.89543 23 3 23H7.58579C8.11622 23 8.62493 22.7893 9 22.4142L20 11.4142L20.7071 10.7071L22.2929 9.12132C23.4645 7.94975 23.4645 6.05025 22.2929 4.87868L19.1213 1.7071ZM15.5858 7L14 5.41421L3 16.4142L3 19C3.26264 19 3.52272 19.0517 3.76537 19.1522C4.00802 19.2527 4.2285 19.4001 4.41421 19.5858C4.59993 19.7715 4.74725 19.992 4.84776 20.2346C4.94827 20.4773 5 20.7374 5 21L7.58579 21L18.5858 10L17 8.41421L6.70711 18.7071L5.29289 17.2929L15.5858 7ZM16.2929 3.12132C16.6834 2.73079 17.3166 2.73079 17.7071 3.12132L20.8787 6.29289C21.2692 6.68341 21.2692 7.31658 20.8787 7.7071L20 8.58578L15.4142 4L16.2929 3.12132Z"
											fill="currentColor"
										></path>
									</svg>
									<span>프로필 관리</span>
								</NavMenu>
								<NavMenu href="#">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="ml-[5px] mr-[13px]"
										fill="none"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										data-icon="ProfileArrowStandard"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M6 1a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h3.586l-1.293 1.293 1.414 1.414 3-3a1 1 0 0 0 0-1.414l-3-3-1.414 1.414L9.586 19H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3v2h3a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M18 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.598 3.698c-.605.452-1.644.802-2.902.802s-2.297-.35-2.902-.802l-1.196 1.604C10.43 14.568 11.919 15 13.5 15s3.07-.432 4.098-1.198z"
											fill="currentColor"
										/>
									</svg>
									<span>프로필 이전</span>
								</NavMenu>
								<NavMenu href="#">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="ml-[5px] mr-[13px]"
										fill="none"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										data-icon="UserStandard"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M15 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 0A5 5 0 1 1 7 5a5 5 0 0 1 10 0M4 21a8 8 0 1 1 16 0v.514A68 68 0 0 1 12 22a68 68 0 0 1-8-.486zm17.15 2.378-.15-.99.151.99a1 1 0 0 0 .849-.99V21c0-5.523-4.477-10-10-10S2 15.477 2 21v1.389a1 1 0 0 0 .849.988L3 22.39c-.151.988-.15.988-.15.989h.003l.01.002.038.005.142.02q.186.027.535.072A70 70 0 0 0 12 24a70 70 0 0 0 8.422-.523q.35-.045.535-.072l.142-.02.038-.005.01-.002z"
											fill="currentColor"
										/>
									</svg>
									<span>계정</span>
								</NavMenu>
								<NavMenu href="#">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="ml-[5px] mr-[13px]"
										fill="none"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										data-icon="CircleQuestionMarkStandard"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 8c-1.317 0-2 .743-2 1.5H8C8 7.257 10.003 6 12 6s4 1.257 4 3.5c0 1.349-1.08 2.268-2.178 2.68-.265.1-.49.25-.636.411-.14.156-.186.292-.186.409v1h-2v-1c0-1.435 1.168-2.335 2.119-2.692.729-.274.881-.66.881-.808 0-.757-.683-1.5-2-1.5m1.5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
											fill="currentColor"
										/>
									</svg>
									<span>고객 센터</span>
								</NavMenu>
							</ul>
							<ul className="py-[10px] border-t border-t-[rgba(255,255,255,0.25)]">
								<li className="block text-[13px] leading-[16px] py-[5px] px-[10px] text-center cursor-pointer">
									<a>넷플릭스에서 로그아웃</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
