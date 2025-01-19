import React, { createContext, useContext, useEffect, useState } from "react";

interface FavoriteItem {
  id: number;
  backdrop_path: string;
}

interface FavoriteContextProps {
  favorites: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
	removeFavorite: (id: number) => void;
}

const FavoriteContext = createContext<FavoriteContextProps | undefined>(
  undefined
);

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("FavoriteProvider로 감싸지 않은거 아닐까?");
  }
  return context;
};

export const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
	// 상태 변경 해주는 것 + 원래 있던 거 불러오기
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      try {
        return JSON.parse(storedFavorites);
      } catch (e) {
        console.error("로컬 스토리지에서 찜 목록을 불러오지 못했어요.", e);
        return [];
      }
    }
    return [];
  });

  // 로컬 스토리지에 저장
  useEffect(() => {
    console.log("찜 목록 업데이트 되고 있나?: ", favorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // 아이템 추가
  const addFavorite = (item: FavoriteItem) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === item.id)) {
        return prev;
      }
      const updatedFavorites = [...prev, item];

      console.log("찜에 들어갔나?: ", updatedFavorites);
      return updatedFavorites;
    });
  };

  // 아이템 삭제
	const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
