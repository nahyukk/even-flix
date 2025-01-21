const genreTranslations: { [key: number]: string } = {
    10759: "액션 & 모험",
    35: "코미디",
    80: "범죄",
    99: "다큐멘터리",
    18: "드라마",
    10751: "가족",
    10762: "키즈",
    9648: "미스터리",
    10763: "뉴스",
    10764: "리얼리티",
    10765: "SF & 판타지",
    10766: "연속극",
    10767: "토크쇼",
    10768: "전쟁 & 정치",
};

export const translateGenre = (id: number): string => {
    return genreTranslations[id] || "";
};